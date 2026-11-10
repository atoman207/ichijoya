import { getContactSchema } from '@/lib/contact'

/** Validation rules for the inquiry form (used by the client for CF7-style live validation). */
export async function GET() {
  return Response.json(await getContactSchema())
}
