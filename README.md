# 📘 Simplified Chat Application (Frontend + Backend)

A lightweight **ChatGPT-style mock AI chat system** built using **React, TailwindCSS, Node.js (Express)** and **mock JSON data**.
This project demonstrates clean UI/UX, session-based routing, theme toggling, collapsible sidebar, and structured chat responses.

---

## 🚀 Tech Stack

### **Frontend**

* React (Vite)
* JavaScript
* TailwindCSS
* React Router DOM
* Lucide Icons

### **Backend**

* Node.js + Express
* CORS enabled
* Mock JSON data (no database)
* Static session history and AI responses

---

## 📌 Project Features

### ✅ **Landing Page**

* “New Chat” button to start a chat session
* Opens the main chat interface

### ✅ **Collapsible Left Sidebar**

Displays:

* All sessions
* New Chat button
* User info
  Fully responsive for mobile & tablet.

### ✅ **Chat Interface**

* User types a question
* Backend returns dummy JSON containing:

  * A description
  * A table (structured data)
  * Feedback object

### ✅ **Answer Feedback**

Each AI response includes:

* 👍 Like
* 👎 Dislike

(Stored only on UI, no DB.)

### ✅ **Theme Switching (Dark/Light)**

Global theme toggle:

* Changes full UI colors, background, typography

### ✅ **Session Management (Bonus)**

* Each new chat generates a new `sessionId`
* URL changes to `/chat/:sessionId`
* Switching sessions loads entire saved history

### ✅ **Backend APIs**

* New chat
* Ask a question
* Fetch sessions
* Fetch session history

---

## 📁 Folder Structure

```
root/
 ├── backend/
 │   ├── server.js
 │   ├── package.json
 │   └── data/
 │        ├── sessions.json
 │        └── response.json
 │
 └── frontend/
     ├── src/
     ├── package.json
     └── vite.config.js
```

---

# 🧩 Backend API Documentation

### **1️⃣ Start New Chat**

**GET** `/api/chat/new`

**Response**

```json
{
  "sessionId": "sess_1694567000",
  "message": "New chat session started."
}
```

---

### **2️⃣ Get All Sessions**

**GET** `/api/sessions`

**Response**

```json
[
  { "id": "sess_12345", "title": "Q3 Sales Performance" },
  { "id": "sess_67890", "title": "Marketing Budget" }
]
```

---

### **3️⃣ Ask a Question in a Session**

**POST** `/api/chat/:sessionId/ask`

Body:

```json
{ "question": "What are the best-selling products?" }
```

Response:

```json
{
  "session_id": "sess_12345",
  "answer": {
    "description": "...",
    "table_data": [],
    "feedback": { "likes": 12, "dislikes": 1 }
  }
}
```

---

### **4️⃣ Fetch Session History**

**GET** `/api/chat/:sessionId/history`

Response:

```json
[
  { "id": 1, "type": "user", "content": "What are the best products?" },
  { "id": 2, "type": "ai", "content": { ... } }
]
```

---

# 🛠️ Installation & Local Setup

## **1. Clone the Repository**

```sh
git clone <your-repo-url>
cd project-folder
```

---

# ⚙️ Backend Setup (Express)

### Install dependencies

```sh
cd backend
npm install
```

### Run the server

```sh
npm run dev
```

Server runs at:

👉 **[http://localhost:5000](http://localhost:5000)**

---

# 🎨 Frontend Setup (React + Vite)

### Install dependencies

```sh
cd frontend
npm install
```

### Run the frontend

```sh
npm run dev
```

Vite runs at:

👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🔗 Connect Frontend & Backend

In your frontend, ensure API URL:

```js
const BASE_URL = "http://localhost:5000";
```

---

# 🌍 Deployment Guide

### **Option 1 (Recommended):**

* **Frontend → Vercel**
* **Backend → Render**

Great performance + stable free tier.

### **Option 2 (Single Deployment):**

Serve React build from Express and deploy backend only on:

* Render
* Railway
* Fly.io

---

# 🧪 Dummy Data Example

Your backend returns structured AI-like output:

```json
{
  "description": "Based on your inquiry... top 3 gadgets for Q3",
  "table_data": [
    { "product": "Electro-Watch 5", "units_sold": 125000, "revenue_usd": 7500000 },
    { "product": "Sonic Earbuds Pro", "units_sold": 98000, "revenue_usd": 4900000 },
    { "product": "Mini-Drone X1", "units_sold": 45000, "revenue_usd": 6750000 }
  ],
  "feedback": { "likes": 12, "dislikes": 1 }
}
```

---

# 📄 Deliverables Checklist

✔ Frontend (React + TailwindCSS)
✔ Backend (Express + Mock Data)
✔ Responsive Design
✔ Chat Interface
✔ Sidebar
✔ Theme Toggle
✔ Session Management
✔ API Handling
✔ Clean Code
✔ GitHub Links

---

# 🎯 Final Notes

This project is designed for:

* Portfolio showcase
* Interview demo
* UI/UX demonstration
* Mock API integration practice

