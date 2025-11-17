import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Developer = () => {
  return (
    <div className="min-h-screen w-full p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex justify-center">
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
        <div className="flex flex-col items-center text-center">
          <img
            src="/developer.jpg"
            alt="Developer"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-md"
          />

          <h1 className="text-2xl sm:text-3xl font-bold mt-4 text-indigo-600 dark:text-indigo-400">
            Sai Chandan Gundaboina
          </h1>

          <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
            Full Stack Developer • MERN Stack • Entrepreneur
          </p>

          <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
            Passionate about building scalable, modern and impactful applications.
          </p>

          <div className="flex space-x-5 mt-5">
            <a
              href="https://www.linkedin.com/in/saichandanyadav/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-indigo-200 dark:hover:bg-indigo-600 transition"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://github.com/Saichandanyadav"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-indigo-200 dark:hover:bg-indigo-600 transition"
            >
              <Github size={22} />
            </a>

            <a
              href="mailto:Saichandhanyadav2002@gmail.com"
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-indigo-200 dark:hover:bg-indigo-600 transition"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        <div className="mt-8 space-y-4 text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
          <p>
            Skilled in MERN Stack, React, Node.js, Express, MongoDB, REST APIs, Tailwind CSS, Firebase, Redux and modern UI/UX.
          </p>

          <p>
            Worked on chat applications, admin dashboards, real-time systems, stock market tools, railway UI systems, time zone converters, and high-quality frontend applications.
          </p>

          <p>
            Dedicated to clean UI, responsive design, scalable architecture and delivering smooth and intuitive user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Developer;
