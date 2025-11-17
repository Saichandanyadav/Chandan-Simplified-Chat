// backend/server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests from the frontend
app.use(express.json()); // To parse JSON bodies

// --- Mock Data Utility Functions ---
const getMockSessions = () => {
    try {
        const dataPath = path.join(__dirname, 'data', 'sessions.json');
        const data = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading sessions data:', error);
        return [];
    }
};

const getMockResponse = () => {
    try {
        const dataPath = path.join(__dirname, 'data', 'response.json');
        const data = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading response data:', error);
        return {};
    }
};

// --- API Endpoints ---

// 1. Start New Chat (Generate new session ID)
app.get('/api/chat/new', (req, res) => {
    // In a real app, this would create a DB entry. Here, we just generate an ID.
    const newSessionId = `sess_${Date.now()}`; 
    console.log(`New session created: ${newSessionId}`);
    res.json({ sessionId: newSessionId, message: 'New chat session started.' });
});

// 2. Fetch Sessions (for the left sidebar)
app.get('/api/sessions', (req, res) => {
    const sessions = getMockSessions().map(s => ({
        id: s.id,
        title: s.title
    }));
    res.json(sessions);
});

// 3. Ask Question in a Session (Returns mock response)
app.post('/api/chat/:sessionId/ask', (req, res) => {
    const { sessionId } = req.params;
    const { question } = req.body;
    
    console.log(`Question in session ${sessionId}: "${question}"`);
    
    // Returns the same static mock response every time, as per requirements
    const mockResponse = getMockResponse();
    
    // In a real app, you would save the 'question' and 'mockResponse' to session history
    
    res.json({
        session_id: sessionId,
        answer: mockResponse
    });
});

// 4. Fetch Session History
app.get('/api/chat/:sessionId/history', (req, res) => {
    const { sessionId } = req.params;
    const sessions = getMockSessions();
    
    const session = sessions.find(s => s.id === sessionId);

    if (session) {
        res.json(session.history);
    } else {
        // Fallback for new sessions that don't exist in mock data
        res.status(200).json([]);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Backend server running at http://localhost:${PORT}`);
    console.log('Press CTRL+C to stop.');
});