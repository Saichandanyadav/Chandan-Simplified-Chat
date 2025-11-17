import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import ChatInterface from './components/Chat/ChatInterface';
import Developer from './components/Developer/Developer';
import AboutProject from './components/AboutProject/AboutProject';
import { Menu } from 'lucide-react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(p => !p);

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <Header />

      <div className="flex flex-grow overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className="flex flex-col flex-grow overflow-hidden relative">
          <button
            onClick={toggleSidebar}
            className="absolute top-4 left-4 z-10 p-2 md:hidden bg-white dark:bg-gray-800 rounded-full shadow text-gray-900 dark:text-white"
          >
            <Menu size={24} />
          </button>

          <Routes>
            <Route path="/" element={<ChatInterface />} />
            <Route path="/chat/:sessionId" element={<ChatInterface />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/about-project" element={<AboutProject />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
