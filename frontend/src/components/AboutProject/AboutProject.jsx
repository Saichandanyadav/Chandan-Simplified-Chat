import React from 'react';

const AboutProject = () => {
  return (
    <div className="h-full w-full p-6 overflow-y-auto bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex justify-center items-start">
      <div className="w-full min-h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 border border-gray-200 dark:border-gray-700">
        <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-10 text-center tracking-wide">
          About the Simplified Chat Application
        </h1>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3 flex items-center">📌 Project Overview</h2>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            This simplified chat application is a mock AI chatbot system where users can start new chats,
            browse session history, and interact with predefined backend responses. It is ideal for UI/UX
            demonstrations, frontend development practice, and mock API implementations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3 flex items-center">📂 Backend Structure</h2>
          <p className="text-sm mb-3">Sample structured backend response:</p>

          <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm overflow-auto border border-gray-300 dark:border-gray-600">
{`{
  "description": "Detailed analysis...",
  "table_data": [
    { "product": "Electro-Watch 5", "units_sold": 125000, "revenue_usd": 7500000 },
    { "product": "Sonic Earbuds Pro", "units_sold": 98000, "revenue_usd": 4900000 },
    { "product": "Mini-Drone X1", "units_sold": 45000, "revenue_usd": 6750000 }
  ],
  "feedback": { "likes": 12, "dislikes": 1 }
}`}
          </pre>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3 flex items-center">🤔 Example Questions Users Can Ask</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed">
            <li>What are the best-selling products this quarter?</li>
            <li>Summarize the marketing budget for next year.</li>
            <li>Give me insights from the last session.</li>
            <li>Show product performance tables.</li>
            <li>Provide quarterly growth comparisons.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-3 flex items-center">🚀 Features of the Project</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm leading-relaxed">
            <li>Start and manage multiple chat sessions</li>
            <li>Load previous session history</li>
            <li>Mock AI-like responses from backend JSON</li>
            <li>Light/Dark theme support</li>
            <li>Responsive layout for all devices</li>
            <li>Collapsible sidebar for chat list</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 flex items-center">🎯 Purpose of the Project</h2>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            This project showcases clean UI/UX, reusable components, theme switching, routing structure,
            and mock backend integrations. It is an ideal portfolio project and interview demo for modern
            frontend development.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutProject;
