import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
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
    <section ref={sectionRef} className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="animate-on-scroll opacity-0 transform translate-y-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                LET'S
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
                  COLLABORATE
                </span>
              </h2>
            </div>

            <div className="animate-on-scroll opacity-0 transform translate-y-10 delay-200">
              <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 px-4 sm:px-0">
                Ready to work on cutting-edge AI/ML projects? Let's discuss research opportunities,
                data science challenges, or innovative tech solutions. Always open to collaboration
                and new opportunities.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 flex-shrink-0" />
                  <a href="mailto:sreddyhallirakesh@ucsd.edu" className="text-sm sm:text-lg hover:text-emerald-400 transition-colors break-all">
                    sreddyhallirakesh@ucsd.edu
                  </a>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 flex-shrink-0" />
                  <a href="tel:+919535402120" className="text-sm sm:text-lg hover:text-emerald-400 transition-colors">
                    +91 9535402120
                  </a>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm sm:text-lg">San Diego, CA</span>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 transform translate-y-10 delay-300">
              <div className="flex space-x-4 sm:space-x-6 justify-center sm:justify-start">
                <a href="#" className="p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-emerald-600 transition-colors duration-300 group">
                  <Github className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-teal-600 transition-colors duration-300 group">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="p-2 sm:p-3 bg-gray-800 rounded-full hover:bg-cyan-600 transition-colors duration-300 group">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="animate-on-scroll opacity-0 transform translate-y-10 delay-400">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-6 sm:pt-8">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">3</div>
                  <div className="text-xs sm:text-sm text-gray-400">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-teal-400">3K+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Community</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-cyan-400">5+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Projects</div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 transform translate-y-10 delay-500">
            <form className="space-y-4 sm:space-y-6 bg-gray-900 p-4 sm:p-6 lg:p-8 rounded-2xl">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-emerald-500 focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-emerald-500 focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-emerald-500 focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-emerald-500 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-2 sm:py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;