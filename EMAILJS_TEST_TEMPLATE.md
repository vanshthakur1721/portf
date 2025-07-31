# EmailJS Test Template

## Create this template in your EmailJS dashboard:

1. **Go to EmailJS Dashboard** → "Email Templates"
2. **Create New Template**
3. **Use this exact template:**

```html
Subject: New Contact Form Message from {{name}}

Hello Vansh,

You have received a new message from your portfolio website:

**Name:** {{name}}
**Email:** {{email}}
**Subject:** {{subject}}

**Message:**
{{message}}

---
This message was sent from your portfolio contact form.
```

## Template Variables Used:
- `{{name}}` - Sender's name
- `{{email}}` - Sender's email  
- `{{subject}}` - Email subject
- `{{message}}` - Email message

## Steps to Test:

1. **Create this template** in your EmailJS dashboard
2. **Copy the new template ID** (it will be different from `template_ay4xhko`)
3. **Update the code** with the new template ID
4. **Test the form**

## Update Your Code:

Replace `'template_ay4xhko'` with your new template ID:

```javascript
const result = await emailjs.send(
  'service_db0fdca', // Your service ID
  'YOUR_NEW_TEMPLATE_ID', // Replace with new template ID
  {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  'QWCd8fD4lBMwQpBmZ' // Your public key
);
```

This template uses the exact variable names that the current code is sending, so it should work without any 400 errors. 