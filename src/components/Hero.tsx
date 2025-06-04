import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    
    const letters = title.innerText.split('');
    title.innerHTML = '';
    
    letters.forEach((letter, i) => {
      const span = document.createElement('span');
      span.innerText = letter;
      span.classList.add('inline-block', 'opacity-0', 'transform', 'translate-y-8');
      span.style.transitionDelay = `${i * 50}ms`;
      span.style.transitionDuration = '700ms';
      title.appendChild(span);
    });
    
    setTimeout(() => {
      const spans = title.querySelectorAll('span');
      spans.forEach(span => {
        span.classList.remove('opacity-0', 'translate-y-8');
        span.classList.add('opacity-100', 'translate-y-0');
      });
    }, 100);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-32 px-4 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-600 dark:text-blue-400 font-medium text-lg md:text-xl mb-4 opacity-0 animate-fadeIn animation-delay-200">
            Hello, I'm
          </p>
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white transition-all duration-700"
          >
            Jasper Ray I. Marinas
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 opacity-0 animate-fadeIn animation-delay-600">
            Information Technology Student & <span className="text-blue-600 dark:text-blue-400">Tech Enthusiast</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-md md:text-lg mb-10 opacity-0 animate-fadeIn animation-delay-800">
            Passionate about technology, creativity, and problem-solving. 
            I specialize in web development, UI/UX design, and computer hardware.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fadeIn animation-delay-1000">
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-transparent border border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown className="text-gray-600 dark:text-gray-300" />
        </button>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 -left-24 w-80 h-80 bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;