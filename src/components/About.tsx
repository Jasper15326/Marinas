import { useState, useEffect, useRef } from 'react';
import { Laptop, Gamepad, Paintbrush } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const interests = [
    {
      icon: <Gamepad size={32} className="mb-4 text-blue-600 dark:text-blue-400" />,
      title: "Gaming",
      description: "More than entertainment, gaming inspires my creativity and curiosity in game development and user experience design."
    },
    {
      icon: <Paintbrush size={32} className="mb-4 text-blue-600 dark:text-blue-400" />,
      title: "Design",
      description: "I use tools like Figma to create modern and user-friendly interfaces that balance aesthetics and functionality."
    },
    {
      icon: <Laptop size={32} className="mb-4 text-blue-600 dark:text-blue-400" />,
      title: "Computer Hardware",
      description: "I enjoy fixing and upgrading computer systems, understanding how hardware components work together."
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              About Me
            </span>
            <span className="block w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></span>
          </h2>
          
          <div className={`mb-16 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm an Information Technology student with a passion for technology, creativity, and problem-solving. My journey in tech has been driven by curiosity and a desire to create meaningful digital experiences.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Through my studies and personal projects, I've developed skills in web development, UI/UX design, and computer hardware. I'm constantly learning and exploring new technologies to expand my knowledge and stay current in this rapidly evolving field.
            </p>
          </div>

          <h3 className={`text-2xl font-semibold text-center mb-12 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            My Interests
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div 
                key={index} 
                className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center transform hover:-translate-y-1 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {interest.icon}
                <h4 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                  {interest.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;