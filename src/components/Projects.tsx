import { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'AudioVeritas',
      subtitle: 'Deepfake Audio Detection System',
      description: 'Developed a machine learning system for deepfake audio detection, analyzing tone, pitch, and spectral properties to achieve high accuracy and minimize false positives.',
      tech: ['Python', 'Machine Learning', 'Signal Processing', 'CNN'],
      year: '2024',
      category: 'AI/ML',
      status: 'Published'
    },
    {
      title: 'Depicting Handwritten Mathematical Expressions',
      subtitle: 'OCR Deep Learning Pipeline',
      description: 'Designed and implemented a deep learning pipeline using CNN and RNN architectures for optical character recognition (OCR) to identify and interpret handwritten mathematical expressions.',
      tech: ['Python', 'CNN', 'RNN', 'OCR', 'Deep Learning'],
      year: '2024',
      category: 'AI/ML',
      status: 'Completed'
    },
    {
      title: 'AttendEase',
      subtitle: 'Attendance Made Easy',
      description: 'Designed and developed AttendEase, an innovative classroom attendance app integrating biometric authentication and secure local network verification. Achieved 95.56% time efficiency.',
      tech: ['React Native', 'Biometric Auth', 'Network Security', 'Real-time'],
      year: '2023',
      category: 'Mobile App',
      status: 'Deployed'
    },
    {
      title: 'Tourism Website',
      subtitle: 'Promoting Heritage and Engagement',
      description: 'Preparing for launch, this website highlights local attractions and events for the District Government. Designed to engage travelers and residents.',
      tech: ['React', 'Node.js', 'MongoDB', 'Responsive Design'],
      year: '2023',
      category: 'Web Development',
      status: 'In Development'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.project-card');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 text-white relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-black/95"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-8">
            <span className="text-white">PROJECT</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">TIMELINE</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto px-4">
            Innovative solutions in AI/ML, web development, and mobile applications
          </p>
        </div>

        {/* Timeline - Desktop / Normal Card Grid - Mobile */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500"></div>
          
          {/* Mobile: Normal card grid */}
          <div className="md:hidden grid gap-6 px-4">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card opacity-0 transform translate-y-10"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <span className="text-emerald-400 font-semibold text-sm">{project.year}</span>
                  </div>
                  
                  <h4 className="text-sm font-medium text-emerald-400 mb-2">{project.subtitle}</h4>
                  <p className="text-gray-200 leading-relaxed mb-3 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-white/20 backdrop-blur-sm border border-white/20 text-white text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-3 pt-2 border-t border-white/20 text-right">
                    <span className="text-xs text-gray-300 italic">- Shashank RR</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Alternating timeline cards */}
          <div className="hidden md:block">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card opacity-0 transform translate-y-10 relative mb-12"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-emerald-500 z-10 flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                </div>

                {/* Card wrapper alternating sides */}
                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                    {/* Year alignment */}
                    <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'} mb-3`}>
                      <span className="text-emerald-400 font-semibold text-lg">{project.year}</span>
                    </div>

                    {/* Card */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <h4 className="text-md font-medium text-emerald-400 mb-3">{project.subtitle}</h4>
                      <p className="text-gray-200 leading-relaxed mb-4 text-sm">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/20 text-white text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'} mt-3 pt-2 border-t border-white/20`}>
                        <span className="text-xs text-gray-300 italic">- Shashank RR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Projects;

