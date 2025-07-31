# EmailJS Setup Guide

This guide will help you set up EmailJS to receive email notifications when someone sends a message through your contact form.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your email account (thakurvansh872@gmail.com)
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Form Message from {{from_name}}

Hello,

You have received a new message from your portfolio website:

**Name:** {{from_name}}
**Email:** {{from_email}}
**Subject:** {{subject}}

**Message:**
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_public_key_123`)

## Step 5: Update Your Code

Replace the placeholder values in `src/components/Contact.jsx`:

```javascript
// Replace these values with your actual EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY"); // Your public key

const result = await emailjs.send(
  'YOUR_SERVICE_ID', // Your service ID
  'YOUR_TEMPLATE_ID', // Your template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'thakurvansh872@gmail.com',
  },
  'YOUR_PUBLIC_KEY' // Your public key
);
```

## Step 6: Test the Setup

1. Start your development server: `npm start`
2. Go to your contact form
3. Fill out the form and submit
4. Check your email (thakurvansh872@gmail.com) for the notification

## Features Included:

✅ **Real-time email notifications** when someone submits the form
✅ **Success/Error messages** displayed to users
✅ **Form validation** and error handling
✅ **Loading states** during submission
✅ **Responsive design** that works on all devices

## Troubleshooting:

- **Email not received**: Check your spam folder
- **Service ID error**: Verify your EmailJS service is properly connected
- **Template ID error**: Make sure your template is saved and published
- **Public Key error**: Ensure your API key is correct and active

## Security Notes:

- Your EmailJS credentials are safe to use in frontend code
- The service uses your email provider's security
- No backend server required
- Free tier includes 200 emails per month

## Next Steps:

1. Replace the placeholder values with your actual EmailJS credentials
2. Test the form submission
3. Customize the email template as needed
4. Deploy your portfolio with the email functionality

Your contact form will now send you email notifications whenever someone reaches out! 