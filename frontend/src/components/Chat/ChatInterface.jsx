import React, { useState, useEffect, useRef } from 'react';
import { Send, ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';
import useApi from '../../hooks/useApi';
import ResponseTable from './ResponseTable';
import { useParams } from 'react-router-dom';

const ChatMessage = ({ message }) => {
  if (message.type === 'user') {
    return (
      <div className="flex justify-end mb-4">
        <div className="max-w-xl p-3 rounded-lg bg-indigo-600 text-white shadow-md">
          {message.content}
        </div>
      </div>
    );
  }

  const answer = message.content;

  return (
    <div className="flex justify-start mb-8">
      <div className="max-w-4xl w-full p-5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-xl border border-gray-200 dark:border-gray-700">
        <p className="mb-4 text-base leading-relaxed">
          {answer.description}
        </p>

        <ResponseTable data={answer.table_data} />

        <div className="flex items-center space-x-3 mt-4 pt-3 border-t border-gray-300 dark:border-gray-700">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Feedback:
          </span>

          <button className="flex items-center space-x-1 p-1 rounded-md text-green-600 hover:bg-green-200/50 dark:hover:bg-gray-700">
            <ThumbsUp size={16} />
            <span className="text-sm">{answer.feedback.likes || 0}</span>
          </button>

          <button className="flex items-center space-x-1 p-1 rounded-md text-red-600 hover:bg-red-200/50 dark:hover:bg-gray-700">
            <ThumbsDown size={16} />
            <span className="text-sm">{answer.feedback.dislikes || 0}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const ChatInterface = () => {
  const { sessionId } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { fetchSessionHistory, askQuestion } = useApi();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages([]);
    if (sessionId && sessionId !== 'new') {
      setIsLoading(true);
      const loadHistory = async () => {
        const history = await fetchSessionHistory(sessionId);
        setMessages(history);
        setIsLoading(false);
      };
      loadHistory();
    }
  }, [sessionId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || !sessionId) return;

    const text = input.trim();
    setInput('');
    setIsLoading(true);

    const newUserMessage = { id: Date.now(), type: 'user', content: text };
    setMessages(prev => [...prev, newUserMessage]);

    const data = await askQuestion(sessionId, text);

    if (data?.answer) {
      const aiResponse = { id: Date.now() + 1, type: 'ai', content: data.answer };
      setMessages(prev => [...prev, aiResponse]);
    }

    setIsLoading(false);
  };

  if (!sessionId) {
    return (
      <div className="flex flex-col items-center justify-center flex-grow p-8 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
        <MessageSquare size={64} className="text-indigo-500 mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Welcome to Simplified Chat</h2>
        <p className="text-lg">Select a session from the left or click New Chat to begin.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-grow h-full overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="flex-grow p-6 overflow-y-auto space-y-4">
        {isLoading && messages.length === 0 ? (
          <p className="text-center text-indigo-500">Loading chat history...</p>
        ) : (
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSend} className="p-4 border-t bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
        <div className="relative flex items-center max-w-4xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isLoading ? "Waiting for response..." : "Ask me anything..."}
            className="flex-grow p-4 pr-12 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            disabled={isLoading}
          />

          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 p-2 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInterface;
