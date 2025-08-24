import { useEffect, useRef } from 'react';
import { Code, Database, Cloud, Shield, Award } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: 'Python', level: 95, category: 'Programming' },
    { name: 'Machine Learning', level: 90, category: 'AI/ML' },
    { name: 'Deep Learning', level: 85, category: 'AI/ML' },
    { name: 'SQL', level: 88, category: 'Database' },
    { name: 'JavaScript', level: 82, category: 'Programming' },
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 78, category: 'Backend' },
    { name: 'AWS', level: 75, category: 'Cloud' },
    { name: 'Docker', level: 70, category: 'DevOps' },
    { name: 'MongoDB', level: 85, category: 'Database' }
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'SQL', 'C', 'C++', 'Java', 'JavaScript', 'HTML', 'CSS'],
      color: 'bg-emerald-600'
    },
    {
      title: 'AI/ML & Data Science',
      icon: Database,
      skills: ['Machine Learning', 'Deep Learning', 'PyTorch', 'TensorFlow', 'Data Analysis', 'Feature Engineering'],
      color: 'bg-teal-600'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Docker', 'Git', 'CI/CD', 'Linux', 'Cloud Computing'],
      color: 'bg-cyan-600'
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      skills: ['Ethical Hacking', 'Security Analysis', 'Penetration Testing', 'Network Security'],
      color: 'bg-emerald-700'
    }
  ];

  const certifications = [
    { name: 'Data Science for Engineers', provider: 'NPTEL', icon: Award },
    { name: 'Python Course', provider: 'Google - Coursera', icon: Award },
    { name: 'AI/ML Basics', provider: '_VOIS', icon: Award },
    { name: 'Cyber Security', provider: 'IBM', icon: Award },
    { name: 'Ethical Hacking', provider: 'zSecurity - Udemy', icon: Award }
  ];

  const softSkills = [
    'Leadership', 'Communication', 'Teamwork', 'Community Building',
    'Public Speaking', 'Creativity', 'Adaptability', 'Critical Thinking',
    'Problem-Solving', 'Time Management'
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
      const elements = sectionRef.current.querySelectorAll('.skill-card');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-8">
            <span className="text-white">SKILLS &</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">EXPERTISE</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto px-4">
            Technical proficiencies across multiple domains and technologies
          </p>
        </div>

        {/* Technical Proficiency - Horizontal Timeline */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center mb-12">Technical Proficiency</h3>

          {/* Mobile: stacked cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 md:hidden">
            {technicalSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="skill-card opacity-0 transform translate-y-10"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <h4 className="text-white font-semibold">{skill.name}</h4>
                  </div>
                  <div className="text-xs text-gray-300">{skill.category}</div>
                </div>
              </div>
            ))}
          </div>

          {/* md+ screens: aligned 5-column grid with centered marker row */}
          <div className="relative max-w-6xl mx-auto hidden md:block px-6">
            {(() => {
              const topRow = [0, 2, 4, 6, 8].map(i => technicalSkills[i]).filter(Boolean);
              const bottomRow = [1, 3, 5, 7, 9].map(i => technicalSkills[i]).filter(Boolean);
              return (
                <>
                  {/* Top row */}
                  <div className="grid grid-cols-5 gap-6 mb-10">
                    {topRow.map((skill, index) => (
                      <div
                        key={`top-${skill.name}`}
                        className="skill-card opacity-0 transform translate-y-10"
                        style={{ transitionDelay: `${index * 80}ms` }}
                      >
                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300 h-full">
                          <h4 className="text-sm font-bold text-white mb-1 text-center">{skill.name}</h4>
                          <div className="text-[11px] text-gray-300 text-center">{skill.category}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Marker row with central line and vertical connectors */}
                  <div className="relative mb-10">
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded"></div>
                    <div className="grid grid-cols-5">
                      {topRow.map((_, idx) => (
                        <div key={`marker-${idx}`} className="relative h-10 flex items-center justify-center">
                          {/* marker dot */}
                          <div className="relative z-10 w-4 h-4 rounded-full border-2 border-white shadow-lg bg-emerald-600"></div>
                          {/* connectors */}
                          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-5 bg-white/30"></div>
                          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-px h-5 bg-white/30"></div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom row */}
                  <div className="grid grid-cols-5 gap-6">
                    {bottomRow.map((skill, index) => (
                      <div
                        key={`bottom-${skill.name}`}
                        className="skill-card opacity-0 transform translate-y-10"
                        style={{ transitionDelay: `${index * 80}ms` }}
                      >
                        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300 h-full">
                          <h4 className="text-sm font-bold text-white mb-1 text-center">{skill.name}</h4>
                          <div className="text-[11px] text-gray-300 text-center">{skill.category}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>

        {/* Skill Categories Horizontal Timeline */}
        <div className="mt-12 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Skill Categories</h3>

          {/* Horizontal Timeline Container */}
          <div className="relative max-w-6xl mx-auto pt-8 pb-8">
            {/* Horizontal line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500"></div>

            {/* Timeline Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
              {skillCategories.map((category, index) => (
                <div
                  key={category.title}
                  className="skill-category animate-slide-up relative"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Category card */}
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 h-full">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                        <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-white text-center mb-3">{category.title}</h4>

                    <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="skill-card opacity-0 transform translate-y-10"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white text-black rounded-xl p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <cert.icon className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="font-bold mb-2">{cert.name}</h4>
                  <p className="text-gray-600 text-sm">{cert.provider}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <div
                key={skill}
                className="skill-card opacity-0 transform translate-y-10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-emerald-600 transition-colors duration-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-black text-emerald-400 mb-2">10+</div>
            <div className="text-gray-400 text-sm">Programming Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-teal-400 mb-2">5</div>
            <div className="text-gray-400 text-sm">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-cyan-400 mb-2">4</div>
            <div className="text-gray-400 text-sm">Skill Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-emerald-500 mb-2">10</div>
            <div className="text-gray-400 text-sm">Soft Skills</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;