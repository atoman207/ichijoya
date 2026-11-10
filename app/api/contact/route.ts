import nodemailer from 'nodemailer'
import { checkRule } from '@/lib/theme/cf7'
import { CF7_FORM_ID, CF7_MESSAGES, CF7_UNIT_TAG, getContactSchema } from '@/lib/contact'
import { WP_URL } from '@/lib/site'

/*
 * Inquiry form endpoint. Responses use Contact Form 7's REST format so the form behaves exactly
 * like the WordPress one. Delivery depends on CONTACT_MODE:
 *   log  (default) validate and log only — nothing is sent anywhere
 *   cf7  forward the submission to Contact Form 7 on WordPress (its mail settings apply)
 *   smtp send the inquiry with the SMTP_* settings
 */
type Field = { field: string; message: string }

const reply = (status: string, message: string, invalid: Field[] = []) =>
  Response.json({
    contact_form_id: CF7_FORM_ID,
    status,
    message,
    posted_data_hash: '',
    into: `#${CF7_UNIT_TAG}`,
    invalid_fields: invalid.map((f) => ({
      field: f.field,
      into: `span.wpcf7-form-control-wrap[data-name = "${f.field}"]`,
      message: f.message,
      idref: null,
      error_id: `${CF7_UNIT_TAG}-ve-${f.field}`,
    })),
  })

export async function POST(request: Request) {
  const form = await request.formData()
  const mode = (process.env.CONTACT_MODE || 'log').toLowerCase()

  if (mode === 'cf7') {
    const res = await fetch(`${WP_URL}/wp-json/contact-form-7/v1/contact-forms/${CF7_FORM_ID}/feedback`, {
      method: 'POST',
      body: form,
      headers: {
        Accept: 'application/json',
        'X-Forwarded-For': request.headers.get('x-forwarded-for') ?? '',
        'User-Agent': request.headers.get('user-agent') ?? 'ichijoya-next',
      },
    })
    return new Response(await res.text(), { status: res.status, headers: { 'Content-Type': 'application/json' } })
  }

  const values = (name: string) => form.getAll(name).map((v) => (typeof v === 'string' ? v : v.name))
  const { rules } = await getContactSchema()
  const invalid: Field[] = []
  for (const rule of rules) {
    if (invalid.some((f) => f.field === rule.field)) continue
    if (!checkRule(rule, values(rule.field))) invalid.push({ field: rule.field, message: rule.error })
  }
  if (invalid.length) return reply('validation_failed', CF7_MESSAGES.validation_error, invalid)
  if (form.get('acceptance') !== '1') return reply('acceptance_missing', CF7_MESSAGES.accept_terms)
  if (String(form.get('_wpcf7_ak_hp_textarea') ?? '') !== '') return reply('spam', CF7_MESSAGES.spam)

  const inquiry = {
    name: String(form.get('your-name') ?? ''),
    email: String(form.get('your-email') ?? ''),
    tel: String(form.get('your-tel') ?? ''),
    message: String(form.get('your-message') ?? ''),
  }

  if (mode === 'smtp') {
    try {
      const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
      })
      await transport.sendMail({
        from: process.env.CONTACT_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_TO,
        replyTo: inquiry.email,
        subject: `【一畳屋】お問い合わせ：${inquiry.name} 様`,
        text: [
          `お名前：${inquiry.name}`,
          `メールアドレス：${inquiry.email}`,
          `電話番号：${inquiry.tel}`,
          '',
          'お問い合わせ内容：',
          inquiry.message,
        ].join('\n'),
      })
    } catch (err) {
      console.error('[contact] SMTP delivery failed', err)
      return reply('mail_failed', CF7_MESSAGES.mail_sent_ng)
    }
    return reply('mail_sent', CF7_MESSAGES.mail_sent_ok)
  }

  console.info('[contact] CONTACT_MODE=log — inquiry accepted but not delivered:', { ...inquiry, message: `${inquiry.message.length} chars` })
  return reply('mail_sent', CF7_MESSAGES.mail_sent_ok)
}
