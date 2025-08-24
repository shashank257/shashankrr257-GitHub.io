import { useEffect, useRef } from 'react';
import { GraduationCap, Award, Users } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-on-scroll opacity-0 transform translate-y-10">
              <h2 className="text-5xl md:text-7xl font-black text-black leading-tight">
                ABOUT
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  ME
                </span>
              </h2>
            </div>

            <div className="animate-on-scroll opacity-0 transform translate-y-10 delay-200">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Currently pursuing MS in Data Science at UC San Diego, I'm a passionate researcher and
                developer with expertise in machine learning, deep learning, and cybersecurity. My work
                spans from deepfake detection systems to early cancer detection using AI.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                As a community leader and entrepreneur, I've founded multiple tech communities including
                TechForge Club and Cybernity, impacting thousands of students and professionals in the
                tech ecosystem.
              </p>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                  <div className="text-3xl font-black text-emerald-600">5+</div>
                  <div className="text-sm text-gray-600">Experiences</div>
                </div>
                <div className="p-4 rounded-lg bg-teal-50 border border-teal-200">
                  <div className="text-3xl font-black text-teal-600">8.9/10</div>
                  <div className="text-sm text-gray-600">CGPA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="animate-on-scroll opacity-0 transform translate-y-10 delay-300">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white p-8 rounded-2xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <GraduationCap className="w-12 h-12 mb-4 text-emerald-200" />
                <h3 className="text-2xl font-bold mb-3">Education</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="font-semibold">MS Data Science</div>
                  <div className="text-sm">UC San Diego (2025-Present)</div>
                  <div className="font-semibold mt-3">BE Computer Science</div>
                  <div className="text-sm">VTU (2021-2025) - 8.9/10 CGPA</div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 transform translate-y-10 delay-400">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-8 rounded-2xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <Award className="w-12 h-12 text-teal-200 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Research</h3>
                <p className="text-teal-100">
                  Published researcher in AI/ML with focus on deepfake detection,
                  medical AI, and cybersecurity frameworks
                </p>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 transform translate-y-10 delay-500">
              <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white p-8 rounded-2xl transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <Users className="w-12 h-12 text-cyan-200 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Leadership</h3>
                <p className="text-cyan-100">
                  Chapter Lead at FOSS United, Founder of TechForge Club,
                  and Co-Founder of Cybernity community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;