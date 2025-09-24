const fs = require('fs');
const path = require('path');

// Function to create a simple HTML version of the markdown
function createHTMLFromMarkdown(markdownContent) {
  // Simple markdown to HTML conversion
  let html = markdownContent
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    
    // Bold and italic
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    
    // Lists
    .replace(/^- (.*$)/gim, '<li>$1</li>')
    .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
    
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    
    // Line breaks
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br>');

  // Wrap in HTML structure
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Project Documentation</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #333;
            background: white;
            padding: 40px;
            max-width: 1200px;
            margin: 0 auto;
            font-size: 14px;
        }
        
        h1 {
            font-size: 2.5rem;
            color: #3B82F6;
            margin-bottom: 20px;
            font-weight: 700;
            border-bottom: 3px solid #3B82F6;
            padding-bottom: 10px;
        }
        
        h2 {
            font-size: 1.8rem;
            color: #3B82F6;
            margin: 30px 0 15px 0;
            font-weight: 600;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 5px;
        }
        
        h3 {
            font-size: 1.4rem;
            color: #374151;
            margin: 20px 0 10px 0;
            font-weight: 600;
        }
        
        p {
            margin-bottom: 15px;
            text-align: justify;
        }
        
        ul, ol {
            margin: 15px 0;
            padding-left: 30px;
        }
        
        li {
            margin-bottom: 8px;
        }
        
        code {
            background: #f3f4f6;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
        }
        
        pre {
            background: #1f2937;
            color: #f3f4f6;
            padding: 15px;
            border-radius: 6px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            margin: 15px 0;
            overflow-x: auto;
        }
        
        pre code {
            background: none;
            padding: 0;
            color: inherit;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
            font-size: 0.9em;
        }
        
        th, td {
            border: 1px solid #e5e7eb;
            padding: 8px 12px;
            text-align: left;
        }
        
        th {
            background: #f9fafb;
            font-weight: 600;
            color: #374151;
        }
        
        .highlight {
            background: #fef3c7;
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 500;
        }
        
        .page-break {
            page-break-before: always;
        }
        
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            text-align: center;
            color: #6B7280;
            font-size: 0.9rem;
        }
        
        @media print {
            body {
                padding: 20px;
                font-size: 12px;
            }
            
            h1 { font-size: 2rem; }
            h2 { font-size: 1.5rem; }
            h3 { font-size: 1.2rem; }
            
            .page-break {
                page-break-before: always;
            }
        }
    </style>
</head>
<body>
    <div>
        ${html}
    </div>
    
    <div class="footer">
        <p><strong>Documentation Generated:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Project Version:</strong> 1.0.0</p>
        <p><strong>Developer:</strong> Vansh Thakur</p>
        <p><strong>Contact:</strong> thakurvansh872@gmail.com</p>
    </div>
</body>
</html>`;
}

// Read the markdown file
const markdownContent = fs.readFileSync('PROJECT_DOCUMENTATION.md', 'utf8');

// Convert to HTML
const htmlContent = createHTMLFromMarkdown(markdownContent);

// Write HTML file
fs.writeFileSync('documentation.html', htmlContent);

console.log('✅ HTML file created: documentation.html');
console.log('📄 To convert to PDF:');
console.log('   1. Open documentation.html in your browser');
console.log('   2. Press Ctrl+P (or Cmd+P on Mac)');
console.log('   3. Select "Save as PDF"');
console.log('   4. Save the file as "Portfolio_Project_Documentation.pdf"');
console.log('');
console.log('🔄 Alternative: Use online tools like:');
console.log('   - https://www.markdowntopdf.com/');
console.log('   - https://md-to-pdf.fly.dev/');
console.log('   - https://www.markdowntopdf.com/'); 