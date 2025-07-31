import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Artificial Intelligence & Data Science",
      institution: "Jabalpur Engineering College",
      duration: "2022 - 2026",
      location: "Jabalpur, Madhya Pradesh",
      description: "Currently pursuing B.Tech in Artificial Intelligence &Data Science with focus on software development, algorithms, and modern technologies.",
      achievements: [
        "Maintaining strong academic performance",
        "Active participation in technical events",
        "Learning modern development technologies"
      ],
      gpa: "7.5/10",
      status: "Ongoing"
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: " MP Board",
      duration: "2020 - 2021",
      location: "Balaghat",
      description: "Completed 12th standard with Science stream, focusing on Mathematics ",
      achievements: [
        "Strong foundation in Mathematics",
        "Logical thinking development"
      ],
      percentage: "92%",
      status: "Completed"
    },
    {
      degree: "Secondary Education (10th)",
      institution: " MP Board", 
      duration: "2018 - 2019",
      location: "Balaghat",
      description: "Completed 10th standard with excellent academic performance and extracurricular activities.",
      achievements: [
        "Excellent academic performance",
        "Active in school activities",
        "Strong foundation in core subjects"
      ],
      percentage: "92.3%",
      status: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-slide-up">
            <span className="bg-gradient-to-r from-gray-900 via-soft-blue to-gray-900 dark:from-white dark:via-soft-blue dark:to-white bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            My academic journey and educational background
          </p>
        </div>

                 {/* Education Timeline */}
         <div className="relative">
           {/* Timeline Line */}
           <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-soft-blue via-purple-500 to-green-500"></div>

                       {/* Education Items */}
            <div className="space-y-8">
              {educationData.map((education, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start animate-slide-up`}
                  style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-soft-blue rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10 ${
                    education.status === 'Ongoing' ? 'animate-pulse' : ''
                  }`}></div>

                                    {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700">
                      
                      {/* Empty Side Visual Elements (Desktop Only) */}
                      <div className={`hidden md:block absolute ${
                        index % 2 === 0 ? 'left-full ml-8' : 'right-full mr-8'
                      } top-1/2 transform -translate-y-1/2`}>
                        <div className="flex flex-col items-center space-y-4">
                          {/* Animated Icons */}
                          <div className={`text-4xl opacity-20 animate-float ${
                            index === 0 ? 'text-green-500' : index === 1 ? 'text-blue-500' : 'text-purple-500'
                          }`}>
                            {index === 0 ? '🎓' : index === 1 ? '📚' : '🏆'}
                          </div>
                          {/* Progress Indicator */}
                          <div className="w-2 h-16 bg-gradient-to-b from-soft-blue/30 to-transparent rounded-full"></div>
                          {/* Year Badge */}
                          <div className="bg-soft-blue/10 text-soft-blue text-xs font-semibold px-3 py-1 rounded-full border border-soft-blue/20">
                            {education.duration.split(' ')[0]}
                          </div>
                        </div>
                      </div>
                                           {/* Status Badge */}
                      <div className="flex justify-between items-start mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          education.status === 'Ongoing' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        }`}>
                          {education.status}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {education.duration}
                        </span>
                      </div>

                                                               {/* Degree */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {education.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-lg text-soft-blue font-semibold mb-2">
                        {education.institution}
                      </p>

                      {/* Location */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {education.location}
                      </p>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {education.description}
                      </p>

                                                               {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {education.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="text-soft-blue mr-2 text-base">•</span>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Performance */}
                      <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {education.gpa ? `GPA: ${education.gpa}` : `Percentage: ${education.percentage}`}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          {education.duration}
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-slide-up" style={{ animationDelay: '1s' }}>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Beyond formal education, I'm constantly learning new technologies and skills through online courses, 
              personal projects, and practical experience to stay current with industry trends.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl mb-2">📚</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Online Courses</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Continuous skill development</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl mb-2">💻</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Personal Projects</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Hands-on experience</p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl mb-2">🚀</div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Industry Trends</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Stay updated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education; 