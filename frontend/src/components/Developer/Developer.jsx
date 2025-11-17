import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Developer = () => {
  return (
    <div className="h-full w-full p-6 overflow-y-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex justify-center">
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <div className="flex flex-col items-center text-center">
          <img
            src="/developer.jpg"
            alt="Developer"
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />

          <h1 className="text-3xl font-bold mt-4 text-indigo-600 dark:text-indigo-400">
            Sai Chandan Gundaboina
          </h1>

          <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
            Full Stack Developer • Mern Stack • Entrepreneur
          </p>

          <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
            Passionate about building scalable and impactful applications.
          </p>

          <div className="flex space-x-5 mt-5">
            <a
              href="https://www.linkedin.com/in/saichandanyadav/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-indigo-200 dark:hover:bg-indigo-600 transition"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="https://github.com/Saichandanyadav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-indigo-200 dark:hover:bg-indigo-600 transition"
            >
              <Github size={24} />
            </a>

            <a
              href="mailto:Saichandhanyadav2002@gmail.com"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-indigo-200 dark:hover:bg-indigo-600 transition"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 space-y-3 text-sm text-gray-800 dark:text-gray-300">
          <p>
            Skilled in MERN Stack, React, Node.js, Express, MongoDB, REST APIs,
            Tailwind CSS, Redux, Firebase and more.
          </p>

          <p>
            Experience working on chat apps, admin dashboards, real-time systems,
            stock market applications, railway UI systems, time zone tools and several
            frontend-only applications with complex UI/UX.
          </p>

          <p>
            Focused on clean UI, scalable architecture, and delivering smooth user
            experiences across devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Developer;
