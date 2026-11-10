import { cacheLife, cacheTag } from 'next/cache'
import { WP_URL } from './site'

export const CF7_FORM_ID = Number(process.env.CONTACT_CF7_FORM_ID || 7)
export const CF7_UNIT_TAG = `wpcf7-f${CF7_FORM_ID}-p2176-o1`

export type Cf7Rule = { rule: string; field: string; error: string; threshold?: number | string }
export type Cf7Schema = { version?: string; locale?: string; rules: Cf7Rule[] }

/** The Contact Form 7 validation schema (SWV) of the inquiry form, as configured in WordPress. */
export async function getContactSchema(): Promise<Cf7Schema> {
  'use cache'
  cacheLife('days')
  cacheTag('wp', 'wp-contact')
  const res = await fetch(`${WP_URL}/wp-json/contact-form-7/v1/contact-forms/${CF7_FORM_ID}/feedback/schema`, {
    headers: { Accept: 'application/json', 'User-Agent': 'Mozilla/5.0 (compatible; ichijoya-next)' },
  })
  if (!res.ok) return { rules: FALLBACK_RULES }
  return (await res.json()) as Cf7Schema
}

// Used only if WordPress cannot be reached; mirrors the form's current settings.
const FALLBACK_RULES: Cf7Rule[] = [
  { rule: 'required', field: 'your-name', error: '必須項目に入力してください。' },
  { rule: 'required', field: 'your-email', error: '必須項目に入力してください。' },
  { rule: 'email', field: 'your-email', error: '入力されたメールアドレスに間違いがあります。' },
  { rule: 'required', field: 'your-tel', error: '必須項目に入力してください。' },
  { rule: 'tel', field: 'your-tel', error: '電話番号に間違いがあります。' },
  { rule: 'maxlength', field: 'your-tel', threshold: 12, error: '入力されたテキストが長すぎます。' },
  { rule: 'required', field: 'your-message', error: '必須項目に入力してください。' },
]

/** Contact Form 7's Japanese default messages. */
export const CF7_MESSAGES = {
  mail_sent_ok: 'ありがとうございます。メッセージは送信されました。',
  mail_sent_ng: 'メッセージの送信に失敗しました。後でまたお試しください。',
  validation_error: '入力内容に問題があります。確認して再度お試しください。',
  spam: 'メッセージの送信に失敗しました。後でまたお試しください。',
  accept_terms: 'メッセージを送信する前に承諾確認が必要です。',
}
