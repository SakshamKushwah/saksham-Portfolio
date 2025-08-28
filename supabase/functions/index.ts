// // supabase/functions/send-email/index.ts
// import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

// const ALLOWED_ORIGINS = [
//   "http://localhost:8080",
//   "https://yourdomain.com", // replace with your production domain
// ];

// async function sendEmailViaResend({ name, email, message }: {name: string, email: string, message: string}) {
//   const resendKey = Deno.env.get("RESEND_API_KEY")!;
//   const res = await fetch("https://api.resend.com/emails", {
//     method: "POST",
//     headers: {
//       "Authorization": `Bearer ${resendKey}`,
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       from: "Portfolio Contact <onboarding@resend.dev>",
//       to: ["your_email@example.com"], // your email here
//       subject: "New Contact Form Submission",
//       html: `
//         <h3>New Contact</h3>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `,
//       reply_to: email,
//     }),
//   });

//   if (!res.ok) {
//     throw new Error(`Failed to send email: ${await res.text()}`);
//   }
//   return res.json();
// }

// serve(async (req) => {
//   const origin = req.headers.get("origin") || "";
//   const isAllowedOrigin = ALLOWED_ORIGINS.includes(origin);

//   // Preflight handling
//   if (req.method === "OPTIONS") {
//     return new Response(null, {
//       status: 204,
//       headers: {
//         "Access-Control-Allow-Origin": isAllowedOrigin ? origin : "",
//         "Access-Control-Allow-Methods": "POST, OPTIONS",
//         "Access-Control-Allow-Headers": "Content-Type, Authorization",
//         "Access-Control-Max-Age": "86400",
//         Vary: "Origin",
//       },
//     });
//   }

//   if (!isAllowedOrigin) {
//     return new Response("Forbidden", { status: 403 });
//   }

//   if (req.method !== "POST") {
//     return new Response("Method Not Allowed", { status: 405 });
//   }

//   try {
//     const { name, email, message } = await req.json();
//     await sendEmailViaResend({ name, email, message });

//     return new Response(JSON.stringify({ success: true }), {
//       status: 200,
//       headers: {
//         "Access-Control-Allow-Origin": origin,
//         "Content-Type": "application/json",
//         Vary: "Origin",
//       },
//     });
//   } catch (err) {
//     return new Response(
//       JSON.stringify({ success: false, error: String(err) }),
//       {
//         status: 500,
//         headers: {
//           "Access-Control-Allow-Origin": origin,
//           "Content-Type": "application/json",
//           Vary: "Origin",
//         },
//       }
//     );
//   }
// });
