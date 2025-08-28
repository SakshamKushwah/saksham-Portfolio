# Email Setup Guide for Contact Form

This guide will help you set up email notifications for your contact form using Resend.

## Prerequisites

1. A Resend account (sign up at [resend.com](https://resend.com))
2. Your Supabase project already configured

## Step 1: Set Up Resend

1. Go to [resend.com](https://resend.com) and sign up for a free account
2. Verify your email address
3. Go to the API Keys section in your dashboard
4. Create a new API key (save this securely)

## Step 2: Configure Environment Variables

1. In your project root, create a `.env` file (if you don't have one already)
2. Add your Resend API key:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://your_project_ref.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Email Service Configuration (Resend)
VITE_RESEND_API_KEY=re_your_resend_api_key_here
```

## Step 3: Update Email Configuration

1. Open `src/services/contactService.ts`
2. Update the following lines with your actual information:

```typescript
from: 'Portfolio Contact <noreply@yourdomain.com>', // Update with your verified domain
to: ['your-email@example.com'], // Update with your email
```

## Step 4: Verify Your Domain (Optional but Recommended)

1. In your Resend dashboard, go to Domains
2. Add and verify your domain (e.g., yourdomain.com)
3. This allows you to send emails from custom addresses

## Step 5: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the contact form
4. Check your email for the notification
5. Check your Supabase dashboard to see if the contact was saved

## Troubleshooting

### Common Issues

1. **"No API key configured" error**: Make sure `VITE_RESEND_API_KEY` is set in your `.env` file
2. **Email not sending**: Check the browser console for error messages
3. **Domain verification issues**: Use a verified domain or your Resend sandbox domain
4. **CORS errors**: Resend API doesn't have CORS restrictions for this use case

### Debug Mode

To see what's happening, check the browser console for any error messages.

### Alternative: Use Resend Sandbox Domain

If you don't want to verify a domain, you can use Resend's sandbox domain:

```typescript
from: 'onboarding@resend.dev', // Resend sandbox domain
```

## Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already in your `.gitignore`
- Your Resend API key should be kept secure
- The contact form data is still saved to Supabase even if email fails

## Support

If you encounter issues:
1. Check the Resend documentation
2. Review the browser console for error messages
3. Verify your API key is correct
4. Make sure your domain is verified (if using custom domain)
