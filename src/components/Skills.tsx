import { useState, useEffect, useRef } from 'react';
import SkillBar from './SkillBar';
import { Code, Layout, Server, Terminal, PenTool, PenTool as Tool } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Web Development",
      icon: <Code size={24} />,
      skills: [
        { name: "HTML", level: 85 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 75 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Layout size={24} />,
      skills: [
        { name: "Figma", level: 85 },
        { name: "Responsive Design", level: 80 },
        { name: "Prototyping", level: 70 }
      ]
    },
    {
      title: "Programming Languages",
      icon: <Terminal size={24} />,
      skills: [
        { name: "Java", level: 70 },
        { name: "C#", level: 65 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Hardware",
      icon: <Tool size={24} />,
      skills: [
        { name: "PC Building", level: 90 },
        { name: "Troubleshooting", level: 85 },
        { name: "Component Installation", level: 80 }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-400/5 dark:bg-blue-600/5 rounded-full"></div>
        <div className="absolute bottom-24 -left-24 w-80 h-80 bg-indigo-400/5 dark:bg-indigo-600/5 rounded-full"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Skills & Expertise
            </span>
            <span className="block w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex} 
                      name={skill.name} 
                      level={skill.level} 
                      index={skillIndex}
                      isVisible={isVisible}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-20 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-100">Tools I Use</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["HTML", "CSS", "JavaScript", "Java", "C#", "Python", "Figma", "Git", "VS Code"].map((tool, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;