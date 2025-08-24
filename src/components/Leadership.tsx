import { useEffect, useRef } from 'react';
import { Users, Award, Target, TrendingUp } from 'lucide-react';

const Leadership = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const allLeadership = [
    {
      title: 'Chapter Lead',
      organization: 'FOSS United',
      period: 'Sep 2023 - Aug 2025',
      year: '2023-2025',
      description: 'Spearheading FOSS United Shivamogga Chapter, driving city meet-ups to promote open-source software and community engagement.',
      achievements: ['Organized FOSS Hack 2024', 'City meet-ups leadership', 'IndiaFOSS 3.0 volunteer'],
      category: 'Community Leadership',
      status: 'Active'
    },
    {
      title: 'Indian Community Lead',
      organization: 'Parrot Security [Hack The Box]',
      period: 'Mar 2020 - Jun 2025',
      year: '2020-2025',
      description: 'Driving the expansion of ParrotSec/ParrotOS in the Indian InfoSec landscape through impactful events and engaging community initiatives.',
      achievements: ['InfoSec community growth', 'Event organization', 'User engagement initiatives'],
      category: 'Community Leadership',
      status: 'Active'
    },
    {
      title: 'Founder & President',
      organization: 'TechForge Club',
      period: 'Oct 2023 - Jul 2025',
      year: '2023-2025',
      description: 'Leading a dedicated team to drive engagement and manage impactful projects. Organizing strategic plans, workshops, technical events, and competitions.',
      achievements: ['3000+ community members', 'Multiple hackathons', 'Entrepreneurship summits'],
      category: 'Entrepreneurship',
      status: 'Active'
    },
    {
      title: 'Co-Founder',
      organization: 'Cybernity',
      period: 'May 2020 - May 2025',
      year: '2020-2025',
      description: 'Spearheaded the establishment and growth of a dynamic international cybersecurity community, fostering ethical practices and attracting 3,000+ users.',
      achievements: ['3000+ international users', 'Team of 18 members', 'Ethical practices focus'],
      category: 'Entrepreneurship',
      status: 'Active'
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
      const elements = sectionRef.current.querySelectorAll('.leadership-card');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-8">
            <span className="text-white">LEADERSHIP &</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">COMMUNITY</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto px-4">
            Building communities, leading teams, and driving innovation through collaboration
          </p>
        </div>

        {/* Leadership Timeline - Desktop / Normal Card Grid - Mobile */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500"></div>

          {/* Mobile: Normal card grid */}
          <div className="md:hidden grid gap-6 px-4">
            {allLeadership.map((item, index) => (
              <div
                key={item.title}
                className="leadership-card opacity-0 transform translate-y-10"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                      {item.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <span className="text-emerald-600 font-semibold text-sm">{item.year}</span>
                  </div>

                  <h4 className="text-sm font-medium text-emerald-600 mb-2">{item.organization}</h4>
                  <p className="text-gray-700 leading-relaxed mb-3 text-sm">{item.description}</p>

                  <div className="space-y-1 mb-3">
                    {item.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        <span className="text-gray-700 text-xs">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 pt-2 border-t border-gray-200 text-right">
                    <span className="text-xs text-gray-500 italic">- Shashank RR</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Timeline layout */}
          <div className="hidden md:block">
            {allLeadership.map((item, index) => (
              <div
                key={item.title}
                className="leadership-card opacity-0 transform translate-y-10 relative mb-12"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot with icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-emerald-500 z-10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-500" />
                </div>

                {/* Leadership card */}
                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-sm sm:max-w-md lg:max-w-lg ${index % 2 === 0 ? 'mr-auto pr-4 sm:pr-8' : 'ml-auto pl-4 sm:pl-8'}`}>
                    {/* Date badge */}
                    <div className={`mb-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <span className="text-emerald-400 font-semibold text-lg">{item.year}</span>
                    </div>

                    {/* Card content */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                          {item.category}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <h4 className="text-md font-medium text-emerald-600 mb-3">{item.organization}</h4>
                      <p className="text-gray-700 leading-relaxed mb-4 text-sm">{item.description}</p>

                      <div className="space-y-2 mb-4">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                            <span className="text-gray-700 text-xs">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Author attribution */}
                      <div className={`mt-4 pt-3 border-t border-gray-200 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <span className="text-xs text-gray-500 italic">- Shashank RR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-black text-emerald-600 mb-2">3000+</div>
            <div className="text-gray-600 text-sm">Community Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-teal-600 mb-2">5+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-cyan-600 mb-2">4</div>
            <div className="text-gray-600 text-sm">Organizations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-emerald-700 mb-2">10k+</div>
            <div className="text-gray-600 text-sm"> overall Community Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Leadership;
