# EmailJS Troubleshooting Guide

## Current Error: 400 Bad Request

The 400 error means your EmailJS template variables don't match what we're sending.

## 🔧 **Step 1: Check Your EmailJS Template**

1. **Go to EmailJS Dashboard** → "Email Templates"
2. **Open your template** `template_ay4xhko`
3. **Check what variables are used** in the template

## 📝 **Step 2: Match Template Variables**

Your template probably uses variables like:
- `{{user_name}}` or `{{from_name}}`
- `{{user_email}}` or `{{from_email}}`
- `{{user_subject}}` or `{{subject}}`
- `{{user_message}}` or `{{message}}`

## 🔄 **Step 3: Update Code to Match**

Based on your template variables, update the Contact.jsx file:

### **If your template uses:**
```javascript
// Template variables: {{user_name}}, {{user_email}}, etc.
{
  user_name: formData.name,
  user_email: formData.email,
  user_subject: formData.subject,
  user_message: formData.message,
}
```

### **If your template uses:**
```javascript
// Template variables: {{from_name}}, {{from_email}}, etc.
{
  from_name: formData.name,
  from_email: formData.email,
  subject: formData.subject,
  message: formData.message,
}
```

## 🧪 **Step 4: Test Template Variables**

1. **Open browser console** (F12)
2. **Submit the form**
3. **Check the error details** in console
4. **Look for specific variable names** in the error

## 📋 **Common EmailJS Template Variables:**

| Template Variable | Code Variable | Description |
|------------------|---------------|-------------|
| `{{user_name}}` | `user_name` | Sender's name |
| `{{user_email}}` | `user_email` | Sender's email |
| `{{user_subject}}` | `user_subject` | Email subject |
| `{{user_message}}` | `user_message` | Email message |
| `{{from_name}}` | `from_name` | Sender's name |
| `{{from_email}}` | `from_email` | Sender's email |
| `{{subject}}` | `subject` | Email subject |
| `{{message}}` | `message` | Email message |

## 🚨 **Quick Fix:**

If you're unsure about your template variables, try this simplified version:

```javascript
{
  name: formData.name,
  email: formData.email,
  subject: formData.subject,
  message: formData.message,
}
```

## ✅ **Next Steps:**

1. **Check your EmailJS template** for exact variable names
2. **Update the code** to match your template variables
3. **Test the form** again
4. **Check browser console** for any remaining errors

Let me know what variables your template uses and I'll update the code accordingly! 