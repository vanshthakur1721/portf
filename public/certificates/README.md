# Certificate Images

This folder contains your certificate images for the portfolio.

## How to add your certificate images:

1. **Save your certificate images** in this folder with descriptive names:
   - `java-pwskills.jpg` (or .png)
   - `java-hackerrank.jpg` (or .png)
   - Add more certificates as needed

2. **Supported formats**: JPG, PNG, WebP

3. **Recommended image specifications**:
   - **Size**: 300x200 pixels or larger (will be resized automatically)
   - **Format**: JPG or PNG
   - **Quality**: High quality, clear and readable

4. **File naming convention**:
   - Use lowercase letters
   - Separate words with hyphens
   - Include the issuer name for clarity
   - Example: `mern-coursera.jpg`, `javascript-freecodecamp.png`

5. **Update the certificates array** in `src/components/About.jsx`:
   ```javascript
   {
     title: 'Your Certificate Title',
     issuer: 'Issuing Organization',
     date: '2024',
     image: '/certificates/your-certificate-image.jpg',
     description: 'Description of what this certificate covers',
     color: 'from-blue-500 to-purple-600',
     bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20'
   }
   ```

## Current certificates configured:
- Java Programming (PwSkills) - `java-pwskills.jpg`
- Java Basics (HackerRank) - `java-hackerrank.jpg`

Add your actual certificate images here and update the paths in the About.jsx component! 