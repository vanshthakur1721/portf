# Resume Download Setup

## 📄 **Resume Download Button Added**

I've added a **"Download Resume"** button to your Hero section with the following features:

### **✅ Features:**
- **Green color scheme** to stand out from other buttons
- **📄 Document icon** for clear visual indication
- **Hover animations** with scale and shadow effects
- **Automatic download** when clicked
- **Professional filename** (`Vansh_Thakur_Resume.pdf`)

### **📍 Location:**
- **Hero section** - alongside "View My Work" and "Get In Touch" buttons
- **Prominent placement** for easy access by visitors

## 🚀 **Setup Instructions:**

### **Step 1: Add Your Resume File**
1. **Save your resume** as `resume.pdf` in the `public` folder
2. **File path**: `public/resume.pdf`
3. **Format**: PDF (recommended for professional appearance)

### **Step 2: Resume File Requirements**
- **File name**: `resume.pdf` (exact match)
- **Location**: `public/resume.pdf`
- **Format**: PDF format
- **Size**: Keep under 5MB for fast loading

### **Step 3: Customize (Optional)**
If you want to change the filename that users see when downloading:

**Edit in `src/components/Hero.jsx` line ~125:**
```javascript
download="Your_Custom_Filename.pdf"
```

## 🎨 **Button Styling:**

| Feature | Description |
|---------|-------------|
| **Color** | Green (`bg-green-600`) to distinguish from other buttons |
| **Icon** | 📄 Document emoji for clear visual indication |
| **Animation** | Scale and shadow effects on hover |
| **Download** | Automatic download with custom filename |

## 📁 **File Structure:**
```
portf/
├── public/
│   ├── resume.pdf ← Add your resume here
│   ├── index.html
│   └── ...
└── src/
    └── components/
        └── Hero.jsx ← Resume button code
```

## ⚠️ **Important Notes:**
- **File must exist** at `public/resume.pdf` for the download to work
- **PDF format** is recommended for professional appearance
- **Keep file size** reasonable for fast loading
- **Test the download** after adding your resume file

The resume download button is now ready! Just add your resume PDF file to the `public` folder and it will work automatically! 🚀 