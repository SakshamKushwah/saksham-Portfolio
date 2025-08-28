export interface ContactFormData {
  name: string
  email: string
  message: string
  created_at?: string
}

export interface ContactResponse {
  success: boolean
  message: string
  error?: string
}

