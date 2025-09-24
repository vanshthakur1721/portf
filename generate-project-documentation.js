const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const htmlContent = `
<!DOCTYPE html>
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
        }
        
        .header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 3px solid #3B82F6;
        }
        
        .header h1 {
            font-size: 2.5rem;
            color: #3B82F6;
            margin-bottom: 10px;
            font-weight: 700;
        }
        
        .header p {
            font-size: 1.2rem;
            color: #666;
        }
        
        .section {
            margin-bottom: 40px;
            page-break-inside: avoid;
        }
        
        .section h2 {
            font-size: 1.8rem;
            color: #3B82F6;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #e5e7eb;
            font-weight: 600;
        }
        
        .section h3 {
            font-size: 1.4rem;
            color: #374151;
            margin: 20px 0 10px 0;
            font-weight: 600;
        }
        
        .section h4 {
            font-size: 1.2rem;
            color: #4B5563;
            margin: 15px 0 8px 0;
            font-weight: 500;
        }
        
        .content-box {
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            margin: 15px 0;
            border-left: 4px solid #3B82F6;
        }
        
        .tech-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 15px 0;
        }
        
        .tech-item {
            background: white;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        
        .tech-item h5 {
            color: #3B82F6;
            font-weight: 600;
            margin-bottom: 5px;
        }
        
        .code-block {
            background: #1f2937;
            color: #f3f4f6;
            padding: 15px;
            border-radius: 6px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            margin: 10px 0;
            overflow-x: auto;
        }
        
        .feature-list {
            list-style: none;
            padding: 0;
        }
        
        .feature-list li {
            padding: 8px 0;
            border-bottom: 1px solid #e5e7eb;
            position: relative;
            padding-left: 25px;
        }
        
        .feature-list li:before {
            content: "✓";
            color: #10b981;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        
        .project-card {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            padding: 20px;
            margin: 15px 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .project-card h4 {
            color: #3B82F6;
            margin-bottom: 10px;
        }
        
        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 10px 0;
        }
        
        .tech-tag {
            background: #3B82F6;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        .architecture-diagram {
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            text-align: center;
        }
        
        .diagram-box {
            display: inline-block;
            background: #3B82F6;
            color: white;
            padding: 10px 20px;
            margin: 5px;
            border-radius: 6px;
            font-weight: 500;
        }
        
        .diagram-arrow {
            font-size: 1.5rem;
            color: #6B7280;
            margin: 0 10px;
        }
        
        .table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
        }
        
        .table th, .table td {
            border: 1px solid #e5e7eb;
            padding: 12px;
            text-align: left;
        }
        
        .table th {
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
        
        .warning {
            background: #fef2f2;
            border: 1px solid #fecaca;
            color: #991b1b;
            padding: 15px;
            border-radius: 6px;
            margin: 15px 0;
        }
        
        .success {
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            color: #166534;
            padding: 15px;
            border-radius: 6px;
            margin: 15px 0;
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
    </style>
</head>
<body>
    <div class="header">
        <h1>Futuristic Portfolio Project</h1>
        <p>Comprehensive Technical Documentation</p>
        <p><strong>Developer:</strong> Vansh Thakur | <strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
    </div>

    <div class="section">
        <h2>📋 Project Overview</h2>
        <div class="content-box">
            <p>This is a modern, responsive portfolio website built with React and Tailwind CSS. The project showcases a futuristic design inspired by Apple's aesthetic, featuring smooth animations, interactive elements, and a fully functional contact form. The portfolio is designed to be both visually appealing and highly functional, demonstrating modern web development practices.</p>
        </div>
        
        <h3>🎯 Project Goals</h3>
        <ul class="feature-list">
            <li>Create a visually stunning portfolio with modern design principles</li>
            <li>Implement responsive design for all device types</li>
            <li>Add smooth animations and interactive elements</li>
            <li>Include a functional contact form with email integration</li>
            <li>Showcase projects with filtering capabilities</li>
            <li>Implement dark/light theme switching</li>
            <li>Optimize for performance and accessibility</li>
        </ul>
    </div>

    <div class="section page-break">
        <h2>🛠️ Technology Stack</h2>
        
        <h3>Frontend Technologies</h3>
        <div class="tech-grid">
            <div class="tech-item">
                <h5>React 18.2.0</h5>
                <p>Modern React with hooks for state management and component lifecycle</p>
            </div>
            <div class="tech-item">
                <h5>Tailwind CSS 3.3.0</h5>
                <p>Utility-first CSS framework for rapid UI development</p>
            </div>
            <div class="tech-item">
                <h5>Framer Motion 10.16.0</h5>
                <p>Animation library for smooth, performant animations</p>
            </div>
            <div class="tech-item">
                <h5>React Router DOM 6.8.0</h5>
                <p>Client-side routing for single-page application</p>
            </div>
            <div class="tech-item">
                <h5>React Icons 5.5.0</h5>
                <p>Comprehensive icon library for React applications</p>
            </div>
            <div class="tech-item">
                <h5>EmailJS 4.4.1</h5>
                <p>Email service integration for contact form functionality</p>
            </div>
        </div>

        <h3>Development Tools</h3>
        <div class="tech-grid">
            <div class="tech-item">
                <h5>Create React App</h5>
                <p>Zero-configuration build tool for React applications</p>
            </div>
            <div class="tech-item">
                <h5>PostCSS 8.4.24</h5>
                <p>CSS transformation tool for Tailwind CSS processing</p>
            </div>
            <div class="tech-item">
                <h5>Autoprefixer 10.4.14</h5>
                <p>Automatic vendor prefixing for CSS properties</p>
            </div>
        </div>
    </div>

    <div class="section">
        <h2>🏗️ Project Architecture</h2>
        
        <div class="architecture-diagram">
            <div class="diagram-box">React App</div>
            <div class="diagram-arrow">↓</div>
            <div class="diagram-box">Theme Context</div>
            <div class="diagram-arrow">↓</div>
            <div class="diagram-box">Components</div>
            <div class="diagram-arrow">↓</div>
            <div class="diagram-box">Tailwind CSS</div>
        </div>

        <h3>File Structure</h3>
        <div class="code-block">
src/
├── App.jsx                 # Main application component
├── index.js               # Application entry point
├── index.css              # Global styles and animations
├── components/            # Reusable UI components
│   ├── Hero.jsx          # Landing section with animations
│   ├── About.jsx         # Personal information section
│   ├── Education.jsx     # Educational background
│   ├── Projects.jsx      # Project showcase with filtering
│   ├── Contact.jsx       # Contact form with EmailJS
│   ├── Navigation.jsx    # Navigation bar with theme toggle
│   └── Footer.jsx        # Footer with social links
└── context/
    └── ThemeContext.jsx   # Dark/light theme management
        </div>
    </div>

    <div class="section page-break">
        <h2>🎨 Design System</h2>
        
        <h3>Color Palette</h3>
        <div class="content-box">
            <p>The project uses a carefully selected color palette defined in the Tailwind configuration:</p>
            <ul>
                <li><strong>Soft Blue (#3B82F6):</strong> Primary brand color for buttons, links, and highlights</li>
                <li><strong>Dark Gray (#1F2937):</strong> Background color for dark mode</li>
                <li><strong>Light Gray (#F9FAFB):</strong> Light background color</li>
                <li><strong>Medium Gray (#6B7280):</strong> Secondary text color</li>
            </ul>
        </div>

        <h3>Typography</h3>
        <div class="content-box">
            <p>The project uses the Inter font family for clean, modern typography:</p>
            <ul>
                <li><strong>Font Family:</strong> Inter, system-ui, sans-serif</li>
                <li><strong>Font Weights:</strong> 300, 400, 500, 600, 700</li>
                <li><strong>Line Height:</strong> 1.6 for optimal readability</li>
            </ul>
        </div>

        <h3>Custom Animations</h3>
        <div class="content-box">
            <p>Custom CSS animations are defined in the Tailwind configuration:</p>
            <ul>
                <li><strong>fade-in:</strong> Smooth fade-in effect (0.6s ease-in-out)</li>
                <li><strong>slide-up:</strong> Slide up from bottom (0.8s ease-out)</li>
                <li><strong>float:</strong> Gentle floating animation (3s ease-in-out infinite)</li>
                <li><strong>glow:</strong> Pulsing glow effect (2s ease-in-out infinite alternate)</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>📱 Component Analysis</h2>
        
        <h3>1. Hero Component (Hero.jsx)</h3>
        <div class="project-card">
            <h4>Key Features:</h4>
            <ul class="feature-list">
                <li>Animated typing effect for role display</li>
                <li>Interactive background with floating elements</li>
                <li>Smooth scroll navigation to sections</li>
                <li>Social media links with hover animations</li>
                <li>Responsive design with mobile optimization</li>
            </ul>
            
            <h4>Technical Implementation:</h4>
            <div class="code-block">
// Typing animation logic
const [currentText, setCurrentText] = useState('');
const [isDeleting, setIsDeleting] = useState(false);
const [loopNum, setLoopNum] = useState(0);
const [typingSpeed, setTypingSpeed] = useState(150);

// Roles array for typing animation
const roles = ['Full Stack Developer', 'React Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Thinker'];
            </div>
        </div>

        <h3>2. Projects Component (Projects.jsx)</h3>
        <div class="project-card">
            <h4>Key Features:</h4>
            <ul class="feature-list">
                <li>Filterable project gallery (All, Web Apps, Mobile Apps)</li>
                <li>Project cards with hover animations</li>
                <li>Technology tags for each project</li>
                <li>Live demo and GitHub links</li>
                <li>Responsive grid layout</li>
            </ul>
            
            <h4>Project Data Structure:</h4>
            <div class="code-block">
const projects = [
  {
    id: 1,
    title: 'Gemini Clone',
    description: 'A responsive Gemini chatbot clone...',
    image: 'https://tinyurl.com/4xwn5ybc',
    category: 'web',
    technologies: ['React', 'Vite', 'Gemini API', 'Tailwind CSS'],
    link: 'https://gemini-clone-lilac-nu.vercel.app/',
    github: 'https://github.com/vanshthakur1721/Gemini-Clone'
  }
];
            </div>
        </div>

        <h3>3. Contact Component (Contact.jsx)</h3>
        <div class="project-card">
            <h4>Key Features:</h4>
            <ul class="feature-list">
                <li>Functional contact form with EmailJS integration</li>
                <li>Form validation and error handling</li>
                <li>Success/error status messages</li>
                <li>Social media links</li>
                <li>Contact information display</li>
            </ul>
            
            <h4>EmailJS Configuration:</h4>
            <div class="code-block">
// EmailJS initialization
emailjs.init("QWCd8fD4lBMwQpBmZ");

// Email sending function
const result = await emailjs.send(
  'service_db0fdca',
  'template_zzdv1bf',
  {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  'QWCd8fD4lBMwQpBmZ'
);
            </div>
        </div>
    </div>

    <div class="section page-break">
        <h2>🌙 Theme Management</h2>
        
        <h3>ThemeContext Implementation</h3>
        <div class="content-box">
            <p>The project implements a sophisticated theme management system using React Context API:</p>
            <ul>
                <li><strong>Context Provider:</strong> Manages theme state across the application</li>
                <li><strong>Local Storage:</strong> Persists theme preference</li>
                <li><strong>CSS Classes:</strong> Applies dark/light mode classes to document</li>
                <li><strong>Automatic Detection:</strong> Checks for saved theme preference on load</li>
            </ul>
        </div>

        <div class="code-block">
// Theme context implementation
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);
};
        </div>
    </div>

    <div class="section">
        <h2>📊 Project Showcase</h2>
        
        <h3>Featured Projects</h3>
        
        <div class="project-card">
            <h4>1. Gemini Clone</h4>
            <p><strong>Description:</strong> A responsive Gemini chatbot clone built using React and Vite, integrated with the Gemini API for real-time AI responses.</p>
            <div class="tech-tags">
                <span class="tech-tag">React</span>
                <span class="tech-tag">Vite</span>
                <span class="tech-tag">Gemini API</span>
                <span class="tech-tag">Tailwind CSS</span>
            </div>
            <p><strong>Live Demo:</strong> <a href="https://gemini-clone-lilac-nu.vercel.app/">https://gemini-clone-lilac-nu.vercel.app/</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/vanshthakur1721/Gemini-Clone">https://github.com/vanshthakur1721/Gemini-Clone</a></p>
        </div>

        <div class="project-card">
            <h4>2. Two Good Co.</h4>
            <p><strong>Description:</strong> A replica of the Two Good Co. showcasing modern front-end design techniques.</p>
            <div class="tech-tags">
                <span class="tech-tag">HTML</span>
                <span class="tech-tag">CSS</span>
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">GSAP</span>
            </div>
            <p><strong>Live Demo:</strong> <a href="https://vanshthakur1721.github.io/Two-good-co-project/">https://vanshthakur1721.github.io/Two-good-co-project/</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/vanshthakur1721/Two-good-co-project">https://github.com/vanshthakur1721/Two-good-co-project</a></p>
        </div>

        <div class="project-card">
            <h4>3. SunDown Studio</h4>
            <p><strong>Description:</strong> A replica of Sundown Studio using HTML, CSS, JavaScript, GSAP, and Locomotive Scroll.</p>
            <div class="tech-tags">
                <span class="tech-tag">HTML</span>
                <span class="tech-tag">CSS</span>
                <span class="tech-tag">JavaScript</span>
                <span class="tech-tag">Locomotive Scroll</span>
                <span class="tech-tag">GSAP</span>
            </div>
            <p><strong>Live Demo:</strong> <a href="https://sundown-replica-ten.vercel.app/">https://sundown-replica-ten.vercel.app/</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/vanshthakur1721/Sundown-Replica">https://github.com/vanshthakur1721/Sundown-Replica</a></p>
        </div>
    </div>

    <div class="section page-break">
        <h2>⚙️ Configuration & Setup</h2>
        
        <h3>Tailwind CSS Configuration</h3>
        <div class="code-block">
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'soft-blue': '#3B82F6',
        'dark-gray': '#1F2937',
        'light-gray': '#F9FAFB',
        'medium-gray': '#6B7280',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      }
    }
  }
}
        </div>

        <h3>Package.json Dependencies</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>Package</th>
                    <th>Version</th>
                    <th>Purpose</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>react</td>
                    <td>^18.2.0</td>
                    <td>Core React library</td>
                </tr>
                <tr>
                    <td>react-dom</td>
                    <td>^18.2.0</td>
                    <td>React DOM rendering</td>
                </tr>
                <tr>
                    <td>framer-motion</td>
                    <td>^10.16.0</td>
                    <td>Animation library</td>
                </tr>
                <tr>
                    <td>react-icons</td>
                    <td>^5.5.0</td>
                    <td>Icon library</td>
                </tr>
                <tr>
                    <td>react-router-dom</td>
                    <td>^6.8.0</td>
                    <td>Client-side routing</td>
                </tr>
                <tr>
                    <td>@emailjs/browser</td>
                    <td>^4.4.1</td>
                    <td>Email service integration</td>
                </tr>
                <tr>
                    <td>tailwindcss</td>
                    <td>^3.3.0</td>
                    <td>CSS framework</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="section">
        <h2>🚀 Performance & Optimization</h2>
        
        <h3>Performance Features</h3>
        <div class="content-box">
            <ul class="feature-list">
                <li><strong>Code Splitting:</strong> React.lazy() for component-level code splitting</li>
                <li><strong>Image Optimization:</strong> Optimized images with proper alt tags</li>
                <li><strong>CSS Optimization:</strong> Tailwind CSS purges unused styles</li>
                <li><strong>Animation Performance:</strong> Hardware-accelerated animations using transform and opacity</li>
                <li><strong>Responsive Images:</strong> Proper image sizing for different screen sizes</li>
            </ul>
        </div>

        <h3>Accessibility Features</h3>
        <div class="content-box">
            <ul class="feature-list">
                <li><strong>Semantic HTML:</strong> Proper use of semantic elements</li>
                <li><strong>ARIA Labels:</strong> Screen reader support</li>
                <li><strong>Keyboard Navigation:</strong> Full keyboard accessibility</li>
                <li><strong>Color Contrast:</strong> WCAG compliant color ratios</li>
                <li><strong>Focus Management:</strong> Proper focus indicators</li>
            </ul>
        </div>

        <div class="success">
            <strong>✅ Performance Optimizations Implemented:</strong>
            <ul>
                <li>Lazy loading of components</li>
                <li>Optimized bundle size</li>
                <li>Efficient CSS with Tailwind</li>
                <li>Hardware-accelerated animations</li>
            </ul>
        </div>
    </div>

    <div class="section page-break">
        <h2>🔧 Development & Deployment</h2>
        
        <h3>Development Commands</h3>
        <div class="content-box">
            <div class="code-block">
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject from Create React App
npm run eject
            </div>
        </div>

        <h3>Deployment Options</h3>
        
        <h4>1. Vercel Deployment</h4>
        <div class="content-box">
            <ol>
                <li>Install Vercel CLI: <code>npm i -g vercel</code></li>
                <li>Run deployment: <code>vercel</code></li>
                <li>Follow the prompts to configure deployment</li>
            </ol>
        </div>

        <h4>2. Netlify Deployment</h4>
        <div class="content-box">
            <ol>
                <li>Build the project: <code>npm run build</code></li>
                <li>Drag the <code>build</code> folder to Netlify</li>
                <li>Configure custom domain if needed</li>
            </ol>
        </div>

        <h4>3. GitHub Pages</h4>
        <div class="content-box">
            <ol>
                <li>Add homepage to package.json: <code>"homepage": "https://username.github.io/repo-name"</code></li>
                <li>Install gh-pages: <code>npm install --save-dev gh-pages</code></li>
                <li>Add deploy script: <code>"deploy": "gh-pages -d build"</code></li>
                <li>Deploy: <code>npm run deploy</code></li>
            </ol>
        </div>
    </div>

    <div class="section">
        <h2>🔍 Troubleshooting & Maintenance</h2>
        
        <h3>Common Issues & Solutions</h3>
        
        <div class="warning">
            <strong>⚠️ EmailJS Configuration Issues:</strong>
            <p>If the contact form is not working, verify:</p>
            <ul>
                <li>EmailJS service ID is correct</li>
                <li>Template ID matches your EmailJS template</li>
                <li>Public key is properly configured</li>
                <li>Template variables match the form fields</li>
            </ul>
        </div>

        <div class="warning">
            <strong>⚠️ Build Issues:</strong>
            <p>If build fails, check:</p>
            <ul>
                <li>All dependencies are installed</li>
                <li>Node.js version is compatible</li>
                <li>No syntax errors in components</li>
                <li>Environment variables are properly set</li>
            </ul>
        </div>

        <h3>Maintenance Tasks</h3>
        <div class="content-box">
            <ul class="feature-list">
                <li>Regular dependency updates</li>
                <li>Security vulnerability scans</li>
                <li>Performance monitoring</li>
                <li>Content updates and project additions</li>
                <li>Backup and version control</li>
            </ul>
        </div>
    </div>

    <div class="section">
        <h2>📈 Future Enhancements</h2>
        
        <h3>Planned Features</h3>
        <div class="content-box">
            <ul class="feature-list">
                <li><strong>Blog Integration:</strong> Add a blog section with MDX support</li>
                <li><strong>Portfolio Analytics:</strong> Track visitor interactions and engagement</li>
                <li><strong>Multi-language Support:</strong> Internationalization (i18n)</li>
                <li><strong>PWA Features:</strong> Progressive Web App capabilities</li>
                <li><strong>Advanced Animations:</strong> More sophisticated motion effects</li>
                <li><strong>CMS Integration:</strong> Content management system for easy updates</li>
                <li><strong>SEO Optimization:</strong> Enhanced meta tags and structured data</li>
                <li><strong>Performance Monitoring:</strong> Real-time performance tracking</li>
            </ul>
        </div>

        <h3>Technical Improvements</h3>
        <div class="content-box">
            <ul class="feature-list">
                <li><strong>TypeScript Migration:</strong> Add type safety to the codebase</li>
                <li><strong>Testing Suite:</strong> Comprehensive unit and integration tests</li>
                <li><strong>CI/CD Pipeline:</strong> Automated testing and deployment</li>
                <li><strong>Performance Optimization:</strong> Further bundle size reduction</li>
                <li><strong>Accessibility Audit:</strong> Comprehensive accessibility testing</li>
            </ul>
        </div>
    </div>

    <div class="footer">
        <p><strong>Documentation Generated:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Project Version:</strong> 1.0.0</p>
        <p><strong>Developer:</strong> Vansh Thakur</p>
        <p><strong>Contact:</strong> thakurvansh872@gmail.com</p>
    </div>
</body>
</html>
    `;

  await page.setContent(htmlContent);
  
  await page.pdf({
    path: 'Portfolio_Project_Documentation.pdf',
    format: 'A4',
    margin: {
      top: '20mm',
      right: '20mm',
      bottom: '20mm',
      left: '20mm'
    },
    printBackground: true
  });

  console.log('✅ PDF documentation generated successfully: Portfolio_Project_Documentation.pdf');
  await browser.close();
}

// Check if puppeteer is installed
try {
  require('puppeteer');
  generatePDF();
} catch (error) {
  console.log('📦 Installing puppeteer...');
  const { execSync } = require('child_process');
  execSync('npm install puppeteer', { stdio: 'inherit' });
  generatePDF();
} 