import { Heart, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 px-4 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <a 
              href="#home"
              className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 mb-6 md:mb-0"
            >
              Jasper<span className="font-normal">Marinas</span>
            </a>
            
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-gray-400 hover:text-white" />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} className="text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Jasper Ray I. Marinas. All rights reserved.
            </p>
            
            <p className="text-gray-500 text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> using React and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;