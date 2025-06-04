import { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
  isVisible: boolean;
}

const SkillBar = ({ name, level, index, isVisible }: SkillBarProps) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(level);
      }, 100 + index * 100);
      return () => clearTimeout(timer);
    } else {
      setWidth(0);
    }
  }, [isVisible, index, level]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;