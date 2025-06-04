import { useState, useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
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

  const projects = [
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website showcasing my projects and skills.",
      image: "https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "web",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      title: "E-commerce UI Design",
      description: "Modern UI/UX design for an e-commerce platform with user-friendly navigation.",
      image: "https://images.pexels.com/photos/5076528/pexels-photo-5076528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "design",
      tags: ["Figma", "UI/UX", "Prototyping"]
    },
    {
      title: "Task Management App",
      description: "A Java-based desktop application for organizing and tracking tasks.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "software",
      tags: ["Java", "Desktop App", "GUI Design"]
    },
    {
      title: "Smart Home Dashboard",
      description: "Interactive dashboard concept for controlling smart home devices.",
      image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
      category: "design",
      tags: ["UI/UX", "Interactive Design", "IoT"]
    },
    {
      title: "PC Build Guide",
      description: "Educational web app for first-time PC builders with component guides.",
      image: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "web",
      tags: ["HTML", "CSS", "JavaScript", "Hardware"]
    },
    {
      title: "Student Information System",
      description: "Database management system for student records using C# and SQL.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "software",
      tags: ["C#", "SQL", "Database Design"]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'design', label: 'UI/UX Design' },
    { value: 'software', label: 'Software' }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 relative transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              My Projects
            </span>
            <span className="block w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></span>
          </h2>

          <div className={`flex justify-center mb-12 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex bg-white dark:bg-gray-900 p-1 rounded-lg shadow-sm">
              {filters.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setFilter(item.value)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                    filter === item.value 
                      ? 'bg-blue-600 text-white shadow-sm' 
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>

          <div className={`text-center mt-16 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a 
              href="#contact" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              <span>Interested in working together?</span>
              <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;