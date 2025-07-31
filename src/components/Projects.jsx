import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Gemini Clone',
      description: 'A responsive Gemini chatbot clone built using React and Vite, integrated with the Gemini API for real-time AI responses. Includes smooth UI interactions and dynamic chat flow.',
      image: ' https://tinyurl.com/4xwn5ybc',
      category: 'web',
      technologies: ['React', 'Vite', 'Gemini API', 'Tailwind CSS'],
      link: 'https://gemini-clone-lilac-nu.vercel.app/',
      github: 'https://github.com/vanshthakur1721/Gemini-Clone'
    },
    {
      id: 2,
      title: 'Two Good Co.',
      description: ' This project is a replica of the Two Good Co. showcasing modern front-end design techniques ..',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL3bMUJy9iTH8EK4vxDwMwq3jtq2nTNk-U2g&s',
      category: 'web',
      technologies: ['HTML', 'CSS', 'Javascript', 'Gsap'],
      link: 'https://vanshthakur1721.github.io/Two-good-co-project/',
      github: 'https://github.com/vanshthakur1721/Two-good-co-project'
    },
    {
      id: 3,
      title: ' SunDown Studio',
      description: 'I developed a replica of Sundown Studio using HTML, CSS, JavaScript, GSAP, and Locomotive Scroll.',
      image: 'https://i.pinimg.com/736x/27/2e/ba/272ebab4071d9d6ef98858fc58dc4776.jpg',
      category: 'web',
      technologies: ['HTML', ' CSS', 'javascript','Loocomotive Scroll','Gsap'],
      link: 'https://sundown-replica-ten.vercel.app/',
      github: 'https://github.com/vanshthakur1721/Sundown-Replica'
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-dark-gray dark:to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-soft-blue mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my latest work and creative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-soft-blue text-white shadow-lg shadow-soft-blue/25'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-soft-blue/10 border border-gray-200 dark:border-gray-800 hover:border-soft-blue/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                <a
                  href={project.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 cursor-pointer hover:bg-black/10 transition-all duration-300"
                  title="View Project Image"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium">
                      View Image
                    </div>
                  </div>
                </a>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-soft-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-soft-blue text-sm rounded-full border border-gray-300 dark:border-gray-700 hover:border-soft-blue transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex-1 bg-soft-blue text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white text-center py-2 px-4 rounded-lg hover:border-soft-blue hover:text-soft-blue transition-colors duration-300 font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Interested in working together? Let's discuss your project!
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-soft-blue text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-soft-blue/25"
          >
            Start a Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 