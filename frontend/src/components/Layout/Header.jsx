import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon, User, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const Icon = isDark ? Sun : Moon;

  return (
    <header className="flex items-center justify-between p-4 border-b bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 shadow-md">
      <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
        Simplified Chat
      </h1>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <Icon size={20} />
        </button>

        <button
          onClick={() => navigate('/about-project')}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <FileText size={20} />
        </button>

        <button
          onClick={() => navigate('/developer')}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <User size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
