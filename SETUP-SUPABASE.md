# Supabase Integration Setup Guide

This guide will help you set up Supabase integration for the contact form in your portfolio.

## Prerequisites

1. A Supabase account (sign up at [supabase.com](https://supabase.com))
2. A new Supabase project

## Step 1: Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click "New Project"
3. Choose your organization
4. Enter a project name (e.g., "portfolio-contact")
5. Enter a database password (save this securely)
6. Choose a region close to your users
7. Click "Create new project"

## Step 2: Get Your Project Credentials

1. In your Supabase project dashboard, go to Settings > API
2. Copy the following values:
   - Project URL (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - Anon public key (starts with `eyJ...`)

## Step 3: Set Up Environment Variables

1. In your project root, create a `.env` file:
   ```bash
   VITE_SUPABASE_URL=https://ipptygiogjofxqlopuch.supabase.co
   VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlwcHR5Z2lvZ2pvZnhxbG9wdWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0MzUxOTksImV4cCI6MjA3MTAxMTE5OX0.v54RDCfgbY9WxWN6v_Vv6upMVQmGiCQQQqyQuJUq1_Y
   VITE_SUPABASE_FUNCTION_URL=https://ipptygiogjofxqlopuch.functions.supabase.co
   ```

2. Replace the placeholder values with your actual Supabase credentials

## Step 4: Set Up the Database

1. In your Supabase dashboard, go to SQL Editor
2. Copy and paste the contents of `supabase-setup.sql`
3. Click "Run" to execute the SQL script
4. This will create the `contacts` table with proper structure and security policies

## Step 5: Set Up Edge Functions (Email Notifications)

1. In your Supabase dashboard, go to Edge Functions
2. Create a new Edge Function called `send-email-notification`
3. The function should handle POST requests and send email notifications
4. Make sure the function is deployed and accessible at the URL specified in your environment variables

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the contact form
4. Check your Supabase dashboard > Table Editor > contacts to see if the data was stored

## Security Features

- **Row Level Security (RLS)**: Enabled by default
- **Public Insert Policy**: Anyone can submit contact forms
- **Authenticated View Policy**: Only authenticated users can view submissions
- **Input Validation**: Form validation using Zod schema
- **Error Handling**: Comprehensive error handling and user feedback

## Customization

You can modify the security policies in the SQL script based on your needs:

- **Allow public viewing**: Change the SELECT policy to allow public access
- **Add authentication**: Require users to be logged in to submit forms
- **Rate limiting**: Add rate limiting policies to prevent spam

## Troubleshooting

### Common Issues

1. **Environment variables not loaded**: Make sure your `.env` file is in the project root
2. **CORS errors**: Check your Supabase project settings for allowed origins
3. **Table not found**: Ensure you've run the SQL setup script
4. **Permission denied**: Check your RLS policies in Supabase
5. **Edge Function 500 errors**: Check the Edge Function logs in Supabase dashboard
6. **Missing function URL**: Ensure `VITE_SUPABASE_FUNCTION_URL` is set correctly

### Debug Mode

To enable debug logging, add this to your `.env`:
```bash
VITE_SUPABASE_DEBUG=true
```

## Support

If you encounter issues:
1. Check the Supabase documentation
2. Review the browser console for error messages
3. Check the Supabase dashboard logs
4. Verify your environment variables are correct


