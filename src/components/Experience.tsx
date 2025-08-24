import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      title: 'Data Scientist Intern',
      company: 'Conneqt Digital',
      period: 'Feb 2024 - Jun 2024',
      year: '2024',
      location: 'Remote',
      description: 'Performed end-to-end data processing, built predictive and time-series forecasting solutions. Engineered features to improve model performance and extracted actionable insights through visualization.',
      status: 'Completed',
      achievements: [
        'Built predictive models with 85% accuracy',
        'Processed 100K+ data points daily',
        'Created automated reporting dashboards'
      ]
    },
    {
      title: 'Research & Development Intern',
      company: 'Blueed',
      period: 'Jul 2024 - Nov 2024',
      year: '2024',
      location: 'Remote',
      description: 'Contributed to feature development for "WaitKyu" queue management system with 1,000+ active users. Collaborated with teams to implement data-driven solutions and drive innovation.',
      status: 'Completed',
      achievements: [
        'Developed features for 1,000+ active users',
        'Reduced queue wait times by 30%',
        'Implemented real-time analytics'
      ]
    },
    {
      title: 'Data Science & ML Intern',
      company: 'Bharat Intern',
      period: 'Jan 2024 - Mar 2024',
      year: '2024',
      location: 'Remote',
      description: 'Worked on machine learning projects including stock price prediction and data analysis. Gained hands-on experience with Python, scikit-learn, and data visualization libraries.',
      status: 'Completed',
      achievements: [
        'Built stock prediction model with 78% accuracy',
        'Analyzed financial datasets with 50K+ records',
        'Created interactive visualizations'
      ]
    },
    {
      title: 'Full Stack Web Developer Intern',
      company: 'EdVedha',
      period: 'Nov 2023 - May 2024',
      year: '2023-2024',
      location: 'Remote',
      description: 'Crafted full-stack web applications focusing on both frontend and backend. Coordinated with team members to design features and enhance performance.',
      status: 'Completed',
      achievements: [
        'Built responsive web applications',
        'Integrated frontend with backend APIs',
        'Collaborated with cross-functional teams'
      ]
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
      const elements = sectionRef.current.querySelectorAll('.experience-card');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-8">
            <span className="text-white">WORK</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
              EXPERIENCE
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto px-4">
            Professional journey in data science, machine learning, and software development
          </p>
        </div>

        {/* Timeline - Desktop / Normal Card Grid - Mobile */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500"></div>

          {/* Mobile: Normal card grid */}
          <div className="md:hidden grid gap-6 px-4">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="experience-card opacity-0 transform translate-y-10"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                      {exp.company}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                      {exp.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                    <span className="text-emerald-400 font-semibold text-sm">{exp.period}</span>
                  </div>

                  <p className="text-gray-200 leading-relaxed mb-3 text-sm">{exp.description}</p>

                  <div className="space-y-1 mb-3">
                    {exp.achievements?.map((achievement, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                        <span className="text-gray-200 text-xs">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/20 text-right">
                    <span className="text-xs text-gray-300 italic">- Shashank RR</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Timeline layout */}
          <div className="hidden md:block">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="experience-card opacity-0 transform translate-y-10 relative mb-12"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot with icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-emerald-500 z-10 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-emerald-500" />
                </div>

                {/* Experience card */}
                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-sm sm:max-w-md lg:max-w-lg ${index % 2 === 0 ? 'mr-auto pr-4 sm:pr-8' : 'ml-auto pl-4 sm:pl-8'}`}>
                    {/* Date badge */}
                    <div className={`mb-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <span className="text-emerald-400 font-semibold text-lg">{exp.period}</span>
                    </div>

                    {/* Card content */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                          {exp.company}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                          {exp.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-gray-200 leading-relaxed mb-4 text-sm">{exp.description}</p>

                      <div className="space-y-2 mb-4">
                        {exp.achievements?.map((achievement, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                            <span className="text-gray-200 text-xs">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Author attribution */}
                      <div className={`mt-4 pt-3 border-t border-white/20 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
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

export default Experience;