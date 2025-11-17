const API_BASE_URL = 'https://chandan-simplified-chat.onrender.com/api';

const useApi = () => {

  const fetchSessions = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/sessions`);
      if (!response.ok) throw new Error('Failed to fetch sessions');
      return await response.json();
    } catch (error) {
      console.error("Error fetching sessions:", error);
      return [];
    }
  };
  
  const startNewChat = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/chat/new`);
      if (!response.ok) throw new Error('Failed to start new chat');
      return await response.json(); // returns { sessionId: '...' }
    } catch (error) {
      console.error("Error starting new chat:", error);
      return null;
    }
  };

  const fetchSessionHistory = async (sessionId) => {
    if (!sessionId) return [];
    try {
      const response = await fetch(`${API_BASE_URL}/chat/${sessionId}/history`);
      if (!response.ok) throw new Error('Failed to fetch session history');
      return await response.json();
    } catch (error) {
      console.error(`Error fetching history for ${sessionId}:`, error);
      return [];
    }
  };

  const askQuestion = async (sessionId, question) => {
    try {
      const response = await fetch(`${API_BASE_URL}/chat/${sessionId}/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      if (!response.ok) throw new Error('Failed to ask question');
      return await response.json(); // returns { session_id, answer: { description, table_data, ... } }
    } catch (error) {
      console.error("Error asking question:", error);
      return null;
    }
  };

  return { fetchSessions, startNewChat, fetchSessionHistory, askQuestion };
};

export default useApi;