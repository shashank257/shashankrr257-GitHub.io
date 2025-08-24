import { useEffect, useRef } from 'react';
import { FileText, Calendar, Award, ExternalLink } from 'lucide-react';

const Research = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const papers = [
    {
      title: 'AudioVeritas: A Machine Learning Model to Detect Deepfake Audio',
      journal: 'IJRASET',
      year: '2025',
      description: 'Designed a machine learning-based system to detect and classify deepfake audio as "REAL" or "DEEPFAKE" using advanced signal processing techniques.',
      impact: 'Contributed to advancements in deepfake detection research',
      category: 'AI/ML',
      status: 'Published',
      keywords: ['Machine Learning', 'Deepfake Detection', 'Audio Processing', 'Signal Processing', 'Classification']
    },
    {
      title: 'Deep Learning Approach for Early Colorectal Cancer Detection using Speech Biomarkers',
      journal: 'International Journal for Research in Applied Science and Engineering Technology (IJRASET)',
      year: '2024',
      description: 'This study introduces a deep learning method for early colorectal cancer detection using vocal biomarkers. A CNN trained on voice recordings achieved high accuracy.',
      impact: 'Enhances routine health checks and improves patient outcomes',
      category: 'Medical AI',
      status: 'Published',
      keywords: ['Deep Learning', 'Medical AI', 'Cancer Detection', 'Speech Biomarkers', 'CNN']
    },
    {
      title: 'Security Issues and Defensive Approaches in Deep Learning Frameworks',
      journal: 'IJRASET',
      year: '2023',
      description: 'Conducted in-depth analysis of security vulnerabilities in deep learning frameworks, classifying attacks and proposing defensive strategies.',
      impact: 'Highlighted future research directions to enhance AI system security',
      category: 'Cybersecurity',
      status: 'Published',
      keywords: ['Cybersecurity', 'Deep Learning', 'Security Vulnerabilities', 'Defensive Strategies', 'AI Security']
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
      const elements = sectionRef.current.querySelectorAll('.research-card');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-8">
            <span className="text-white">RESEARCH</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">PUBLICATIONS</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto px-4">
            Academic contributions and research work in AI, ML, and emerging technologies
          </p>
        </div>

        {/* Research Timeline - Desktop / Normal Card Grid - Mobile */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical line - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500"></div>

          {/* Mobile: Normal card grid */}
          <div className="md:hidden grid gap-6 px-4">
            {papers.map((paper, index) => (
              <div
                key={paper.title}
                className="research-card opacity-0 transform translate-y-10"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-4 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
                      {paper.category}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                      {paper.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{paper.title}</h3>
                    <span className="text-emerald-400 font-semibold text-sm">{paper.year}</span>
                  </div>

                  <h4 className="text-sm font-medium text-emerald-400 mb-2">{paper.journal}</h4>
                  <p className="text-gray-200 leading-relaxed mb-3 text-sm">{paper.description}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {paper.keywords && paper.keywords.length > 0 && paper.keywords.map((keyword, i) => (
                      <span key={i} className="px-2 py-1 bg-white/20 backdrop-blur-sm border border-white/20 text-white text-xs rounded-full">
                        {keyword}
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

          {/* Desktop: Timeline layout */}
          <div className="hidden md:block">
            {papers.map((paper, index) => (
              <div
                key={paper.title}
                className="research-card opacity-0 transform translate-y-10 relative mb-12"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot with icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-emerald-500 z-10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-emerald-500" />
                </div>

                {/* Research card */}
                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                    {/* Date badge */}
                    <div className={`mb-4 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <span className="text-emerald-400 font-semibold text-lg">{paper.year}</span>
                    </div>

                    {/* Card content */}
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg p-6 shadow-lg hover:shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full">
                          {paper.category}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                          {paper.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{paper.title}</h3>
                      <h4 className="text-md font-medium text-emerald-400 mb-3">{paper.journal}</h4>
                      <p className="text-gray-200 leading-relaxed mb-4 text-sm">{paper.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {paper.keywords && paper.keywords.length > 0 && paper.keywords.map((keyword, i) => (
                          <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/20 text-white text-xs rounded-full">
                            {keyword}
                          </span>
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

        {/* Research Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-black text-emerald-400 mb-2">3</div>
            <div className="text-gray-400">Published Papers</div>
          </div>
          {/* <div className="text-center">
            <div className="text-4xl font-black text-cyan-500 mb-2">2023-2025</div>
            <div className="text-gray-400">Publication Years</div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Research;