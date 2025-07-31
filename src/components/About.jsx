import React, { useState, useEffect, useCallback } from 'react';

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredCertificate, setHoveredCertificate] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  }, []);

  // Handle keyboard events for modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset'; // Restore scrolling
    };
  }, [isModalOpen, closeModal]);

  const certificates = [
    {
      title: 'Java Programming',
      issuer: 'PwSkills',
      date: '2024',
      image: '/certificates/java-pwskills.png',
      description: 'Object-oriented programming with Java fundamentals and advanced concepts',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20'
    },
    {
      title: 'Java (Basic)',
      issuer: 'HackerRank',
      date: '2025',
      image: '/certificates/Hackerank.png',
      description: 'Java (Basic) certification covering classes, data structures, inheritance, exception handling, and Java 7/8 proficiency',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      link: 'https://www.hackerrank.com/certificates/4533d51891b8'
    }
  ];

  const handleCertificateClick = (certificate) => {
    if (certificate.link) {
      // Open external link in new tab
      window.open(certificate.link, '_blank', 'noopener,noreferrer');
    } else {
      // Show modal for local certificates
      setSelectedCertificate(certificate);
      setIsModalOpen(true);
    }
  };

  const skillCategories = [
    {
      category: 'MERN Stack',
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      skills: [
        { name: 'MongoDB', icon: '🍃', description: 'NoSQL Database' },
        { name: 'Express.js', icon: '⚡', description: 'Backend Framework' },
        { name: 'React', icon: '⚛️', description: 'Frontend Library' },
        { name: 'Node.js', icon: '🟢', description: 'Runtime Environment' }
      ]
    },
    {
      category: 'Programming',
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      skills: [
        { name: 'Java', icon: '☕', description: 'Object-Oriented Programming' },
        { name: 'DSA', icon: '🧮', description: 'Data Structures & Algorithms' },
        { name: 'JavaScript', icon: '💻', description: 'Dynamic Programming' }
      ]
    },
    {
      category: 'Web Technologies',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      skills: [
        { name: 'HTML5', icon: '🌐', description: 'Markup Language' },
        { name: 'CSS3', icon: '🎨', description: 'Styling & Layout' },
        { name: 'Responsive Design', icon: '📱', description: 'Mobile-First Approach' }
      ]
    }
  ];



  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-dark-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-soft-blue mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content & Competition Slider */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate developer with a love for creating beautiful, functional, and user-centric digital experiences. 
              With expertise in the MERN stack, Java programming, and web technologies, I bring ideas to life through code.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My approach combines technical expertise with creative problem-solving, ensuring that every project not only meets 
              functional requirements but also delivers an exceptional user experience that stands out in today's competitive digital landscape.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-soft-blue rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">Full-Stack Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-soft-blue rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">Problem Solving</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-soft-blue rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">Clean Code</span>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificates.map((cert, index) => (
                  <div
                    key={cert.title}
                    className={`group relative overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-800 ${cert.bgColor} hover:shadow-xl hover:shadow-soft-blue/10 transition-all duration-500 transform hover:scale-105 cursor-pointer`}
                    onMouseEnter={() => setHoveredCertificate(index)}
                    onMouseLeave={() => setHoveredCertificate(null)}
                    onClick={() => handleCertificateClick(cert)}
                  >
                    <div className="relative h-32 overflow-hidden">
                                             <img
                         src={cert.image}
                         alt={cert.title}
                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                         onError={(e) => {
                           console.log(`Failed to load certificate image: ${cert.title}`);
                           e.target.src = `https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=${encodeURIComponent(cert.title)}`;
                         }}
                         onLoad={() => {
                           console.log(`Successfully loaded certificate image: ${cert.title}`);
                         }}
                       />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-soft-blue transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                        {cert.description}
                      </p>
                      <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                        <span>{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    
                                         {/* Hover effect overlay */}
                     {hoveredCertificate === index && (
                       <div className="absolute inset-0 bg-soft-blue bg-opacity-10 flex items-center justify-center">
                         <div className="text-soft-blue text-xs font-medium">
                           {cert.link ? 'Click to View Certificate' : 'Click to View'}
                         </div>
                       </div>
                     )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Technical Skills */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technical Expertise</h3>
            
            <div className="space-y-6">
              {skillCategories.map((category, categoryIndex) => (
                <div key={category.category} className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                    {category.category}
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className={`p-4 rounded-xl border-2 ${category.borderColor} ${category.bgColor} transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer group`}
                        onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                            {skill.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h5 className="font-semibold text-gray-900 dark:text-white group-hover:text-soft-blue transition-colors duration-300 truncate">
                              {skill.name}
                            </h5>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                              {skill.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Animated progress indicator */}
                        <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 overflow-hidden">
                          <div 
                            className={`h-1 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ 
                              width: hoveredSkill === `${categoryIndex}-${skillIndex}` ? '100%' : '85%',
                              transform: hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'scaleX(1.1)' : 'scaleX(1)'
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Skills Floating Cards */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Additional Skills</h4>
              <div className="flex flex-wrap gap-3">
                {['Git', 'REST APIs', 'JSON', 'npm', 'VS Code', 'Postman'].map((skill, index) => (
                  <div
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-soft-blue hover:text-white hover:border-soft-blue transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

             {/* Certificate Modal */}
       {isModalOpen && selectedCertificate && (
         <div 
           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm p-4"
           onClick={closeModal}
         >
           <div 
             className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100"
             onClick={(e) => e.stopPropagation()}
           >
             {/* Modal Header */}
             <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
               <div>
                 <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedCertificate.title}</h3>
                 <p className="text-sm text-gray-500 dark:text-gray-400">{selectedCertificate.issuer} • {selectedCertificate.date}</p>
               </div>
               <button
                 onClick={closeModal}
                 className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <line x1="18" x2="6" y1="6" y2="18"></line>
                   <line x1="6" x2="18" y1="6" y2="18"></line>
                 </svg>
               </button>
             </div>
             
             {/* Modal Content */}
             <div className="p-6">
               <div className="relative w-full h-96 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                                   <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-full object-contain bg-gray-50 dark:bg-gray-800"
                    onError={(e) => {
                      console.log(`Failed to load modal certificate image: ${selectedCertificate.title}`);
                      e.target.src = `https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=${encodeURIComponent(selectedCertificate.title)}`;
                    }}
                    onLoad={() => {
                      console.log(`Successfully loaded modal certificate image: ${selectedCertificate.title}`);
                    }}
                  />
               </div>
               
               {/* Certificate Details */}
               <div className="mt-6 text-center">
                 <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedCertificate.description}</p>
                 <div className="flex justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                   <span className="flex items-center">
                     <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                     </svg>
                     {selectedCertificate.date}
                   </span>
                   <span className="flex items-center">
                     <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                     </svg>
                     {selectedCertificate.issuer}
                   </span>
                 </div>
               </div>
             </div>
           </div>
         </div>
       )}
    </section>
  );
};

export default About; 