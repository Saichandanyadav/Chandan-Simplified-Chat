import React, { useState, useEffect } from 'react';
import { Plus, X, MessageSquare, ChevronsLeft } from 'lucide-react';
import useApi from '../../hooks/useApi';
import { useNavigate, useParams } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [sessions, setSessions] = useState([]);
  const { fetchSessions, startNewChat } = useApi();
  const navigate = useNavigate();
  const { sessionId } = useParams();

  useEffect(() => {
    const load = async () => {
      const data = await fetchSessions();
      setSessions(data);
    };
    load();
  }, [sessionId]);

  const onNewChat = async () => {
    const data = await startNewChat();
    if (data?.sessionId) {
      navigate(`/chat/${data.sessionId}`);
      setSessions(prev => [{ id: data.sessionId, title: 'New Chat...' }, ...prev]);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-10 md:hidden" onClick={toggleSidebar} />
      )}

      <aside
        className={`h-full bg-gray-50 dark:bg-gray-900 shadow-xl border-r border-gray-300 dark:border-gray-700 
        fixed md:relative z-20 flex flex-col pt-4 transition-all duration-300
        ${collapsed ? 'w-16' : 'w-64'}
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
      >
        <div className="flex justify-between items-center px-4 mb-4 md:hidden">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Sessions</h2>

          {/* Mobile Close Button (White in Dark Mode) */}
          <button 
            onClick={toggleSidebar} 
            className="text-gray-900 dark:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <button
          onClick={onNewChat}
          className={`mx-3 mb-4 p-3 rounded-lg flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white transition 
          ${collapsed ? 'justify-center' : ''}`}
        >
          <Plus size={20} />
          {!collapsed && <span>New Chat</span>}
        </button>

        <nav className="flex-grow overflow-y-auto px-2">
          {!collapsed && (
            <h3 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 px-2 mb-2">
              History
            </h3>
          )}

          <ul className="space-y-1">
            {sessions.map(s => (
              <li key={s.id}>
                <button
                  onClick={() => {
                    navigate(`/chat/${s.id}`);
                    if (window.innerWidth < 768) toggleSidebar();
                  }}
                  className={`w-full flex items-center space-x-2 p-2 rounded-lg transition 
                  ${
                    sessionId === s.id
                      ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-300'
                  } 
                  ${collapsed ? 'justify-center' : ''}`}
                >
                  <MessageSquare size={16} />
                  {!collapsed && <span className="truncate">{s.title}</span>}
                </button>
              </li>
            ))}

            {sessions.length === 0 && !collapsed && (
              <p className="text-sm text-gray-500 p-2">No history found.</p>
            )}
          </ul>
        </nav>

        <button
          onClick={() => setCollapsed(c => !c)}
          className="border-t border-gray-300 dark:border-gray-700 mt-auto w-full flex justify-between items-center p-3 text-gray-700 dark:text-gray-300"
        >
          <span className={`text-sm ${collapsed ? 'hidden' : ''}`}>Collapse</span>
          <ChevronsLeft size={18} className={`${collapsed ? 'rotate-180 mx-auto' : ''}`} />
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
