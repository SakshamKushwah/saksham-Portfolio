import { createClient } from "@supabase/supabase-js";
import type { ContactFormData, ContactResponse } from "@/types/contact";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
const FUNCTIONS_BASE_URL = import.meta.env.VITE_SUPABASE_FUNCTION_URL as string;

const SEND_EMAIL_URL = `${FUNCTIONS_BASE_URL}/send-email`;

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function sendEmailNotification({ name, email, message }: ContactFormData) {
  try {
    const res = await fetch(SEND_EMAIL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("sendEmailNotification failed:", err);
    throw err;
  }
}

export async function submitContactForm(data: ContactFormData): Promise<ContactResponse> {
  try {
    const { error } = await supabase.from("contacts").insert([
      {
        name: data.name,
        email: data.email,
        message: data.message,
        created_at: new Date().toISOString(),
      },
    ]);
    if (error) throw new Error(`Failed to save contact: ${error.message}`);

    try {
      await sendEmailNotification(data);
      return { success: true, message: "Message sent successfully! I'll get back to you soon." };
    } catch (emailError: any) {
      console.warn("Email notification failed, contact saved:", emailError);
      return { success: true, message: "Saved but email failed; I'll follow up manually.", error: emailError?.message };
    }
  } catch (err: any) {
    return { success: false, message: "Failed to send message", error: err?.message || "Unknown error" };
  }
}
