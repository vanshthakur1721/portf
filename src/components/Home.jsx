import React, { useState, useEffect, useMemo } from 'react';

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = useMemo(() => [
    'Full Stack Developer',
    'React Developer', 
    'UI/UX Designer',
    'Problem Solver',
    'Creative Thinker'
  ], []);

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
        return;
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        return;
      }

      const delta = isDeleting ? -1 : 1;
      setCurrentText(fullText.substring(0, currentText.length + delta));
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
         <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-dark-gray dark:to-black"></div>
      
      {/* Animated background elements with more variety */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-soft-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-soft-blue/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-soft-blue/8 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-56 h-56 bg-green-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Particle effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-soft-blue/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

             {/* Content */}
       <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-20 md:pt-0">
         <div className="animate-fade-in">
          {/* Enhanced Greeting with animated emoji */}
          <div className="flex items-center justify-center gap-2 mb-4 animate-slide-up">
            <span className="text-2xl animate-wave inline-block" style={{ animationDelay: '0.1s' }}>👋</span>
            <p className="text-soft-blue text-lg sm:text-xl font-medium">
              Hello, I'm
            </p>
          </div>
          
          {/* Enhanced Main heading with gradient and glow effect */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-gray-900 via-soft-blue to-gray-900 dark:from-white dark:via-soft-blue dark:to-white bg-clip-text text-transparent animate-glow">
              Vansh Thakur
            </span>
          </h1>
          
          {/* Typing animation for roles */}
          <div className="h-8 sm:h-10 mb-8 flex items-center justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <span className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
              I'm a{' '}
            </span>
            <span className="text-xl sm:text-2xl text-soft-blue font-semibold ml-2 min-w-[200px] sm:min-w-[250px]">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          {/* Enhanced subtitle */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Creative Developer crafting digital experiences with cutting-edge technology and innovative design
            </p>
          </div>
          
                     {/* Enhanced CTA Buttons with hover effects */}
           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up px-4" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-soft-blue text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-soft-blue/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 border-2 border-gray-600 text-gray-600 dark:text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:border-soft-blue hover:text-soft-blue"
            >
              <span className="relative z-10 group-hover:text-white transition-colors">Get In Touch</span>
              <div className="absolute inset-0 bg-soft-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
            <a
              href="/resume.pdf"
              download="Vansh_Thakur_Resume.pdf"
              className="group relative px-8 py-4 bg-green-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 flex items-center gap-2"
            >
              <span className="relative z-10">📄 Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
          </div>

                     {/* Social links with hover animations */}
           <div className="flex justify-center items-center gap-6 mt-8 md:mt-12 animate-slide-up px-4" style={{ animationDelay: '1s' }}>
            {[
              { icon: '💻', label: 'GitHub', url: 'https://github.com/vanshthakur1721' },
              { icon: '💼', label: 'LinkedIn', url: 'https://www.linkedin.com/in/vanshthakur59/' },
              { icon: '📧', label: 'Email', url: 'mailto:thakurvansh872@gmail.com' }
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-white/10 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <span className="text-2xl group-hover:animate-bounce">{social.icon}</span>
                <span className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-soft-blue transition-colors">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>

                 {/* Enhanced scroll indicator */}
         <div className="absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="group cursor-pointer" onClick={() => scrollToSection('about')}>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center group-hover:border-soft-blue transition-colors">
              <div className="w-1 h-3 bg-gray-400 group-hover:bg-soft-blue rounded-full mt-2 animate-pulse transition-colors"></div>
            </div>
            <p className="text-xs text-gray-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Scroll</p>
          </div>
        </div>
             </div>

       {/* Enhanced floating tech icons with more variety */}
       <div className="absolute top-20 right-20 hidden lg:block">
         <div className="text-soft-blue/20 text-6xl animate-float hover:scale-110 transition-transform cursor-pointer">⚛️</div>
       </div>
       <div className="absolute bottom-20 left-20 hidden lg:block">
         <div className="text-soft-blue/20 text-6xl animate-float hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '1s' }}>🚀</div>
       </div>
       <div className="absolute top-1/3 left-10 hidden lg:block">
         <div className="text-soft-blue/20 text-4xl animate-float hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '0.5s' }}>⚡</div>
       </div>
       <div className="absolute bottom-1/3 right-10 hidden lg:block">
         <div className="text-soft-blue/20 text-4xl animate-float hover:scale-110 transition-transform cursor-pointer" style={{ animationDelay: '1.5s' }}>🎨</div>
       </div>

       {/* Animated geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-soft-blue/20 rounded-lg animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border-2 border-soft-blue/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-soft-blue/10 rounded-lg animate-bounce"></div>
      </div>
    </section>
  );
};

export default Home; 