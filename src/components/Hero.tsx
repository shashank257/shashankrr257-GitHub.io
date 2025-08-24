import { useEffect, useRef } from 'react';
import { Download, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
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

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/ShashankMLDSResume.pdf';
    link.download = 'ShashankMLDSResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white relative overflow-hidden pt-20 sm:pt-24 lg:pt-0 pb-16">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Image - Mobile First, Desktop Left */}
          <div className="order-1 lg:order-2 flex justify-center mt-4 sm:mt-0">
            <div className="animate-on-scroll opacity-0 transform translate-y-10 delay-500">
              <div className="relative group">
                {/* Circular frame with gradient and shadow */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full p-1.5 bg-gradient-to-br from-emerald-500/80 via-teal-500/80 to-cyan-500/80 shadow-xl shadow-cyan-500/20 transition-all duration-300 transform group-hover:scale-105">
                  <div className="w-full h-full bg-slate-800 rounded-full p-1">
                    <img
                      src="/assets/profile.png"
                      alt="Shashank Shetty"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating elements positioned relative to the circular frame */}
                <div className="hidden sm:block absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full animate-bounce delay-1000"></div>
                <div className="hidden sm:block absolute -bottom-4 -left-4 w-6 h-6 bg-teal-500 rounded-full animate-bounce delay-2000"></div>
                <div className="hidden sm:block absolute top-1/2 -left-6 w-4 h-4 bg-cyan-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>

          {/* Text Content - Mobile Second, Desktop Right */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-8 max-w-2xl">
            {/* Main Heading */}
            <div className="animate-on-scroll opacity-0 transform translate-y-10">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
                SHASHANK
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500">
                  RR
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="animate-on-scroll opacity-0 transform translate-y-10 delay-200">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed">
                Data Scientist • ML Engineer • Full Stack Developer
              </p>
              <p className="text-lg text-gray-400 mt-4">
                Passionate about leveraging AI for social impact, building tech communities,
                and pushing the boundaries of machine learning research
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="animate-on-scroll opacity-0 transform translate-y-10 delay-300">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-8">
                <button
                  onClick={downloadResume}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105"
                >
                  <Download size={20} />
                  Download Resume
                </button>
                <button
                  onClick={scrollToAbout}
                  className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="animate-on-scroll opacity-0 transform translate-y-10 delay-400">
              <div className="flex justify-center lg:justify-start space-x-6 mt-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-gray-400 hover:text-white transition-colors duration-300">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;