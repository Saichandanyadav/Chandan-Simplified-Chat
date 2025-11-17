# 📘 Simplified Chat Application (Frontend + Backend)

A lightweight **ChatGPT-style mock AI chat application** built using **React + TailwindCSS (Frontend)** and **Node.js + Express (Backend)** with mock JSON data.
The project showcases clean UI, responsive layout, session-based routing, theme switching, collapsible sidebar, and structured AI-like responses.

---

# 🌐 Live Demo

🔗 **Frontend Deployed on Vercel:**
👉 [https://chandan-simplified-chat.vercel.app/](https://chandan-simplified-chat.vercel.app/)

🔗 **GitHub Repository:**
👉 [https://github.com/Saichandanyadav/Chandan-Simplified-Chat](https://github.com/Saichandanyadav/Chandan-Simplified-Chat)

---

# 🖼️ Screenshot

<img width="411" height="734" alt="Screenshot 2025-11-17 132731" src="https://github.com/user-attachments/assets/8b072d39-8a1d-4715-b6a8-1307c33268bd" />


---

## 🚀 Tech Stack

### **Frontend**

* React (Vite)
* TailwindCSS
* JavaScript (ES6+)
* React Router DOM
* Lucide Icons

### **Backend**

* Node.js (Express)
* CORS enabled
* Mock JSON dataset
* Session-based mock chat responses

---

## 📌 Key Features

### 🟦 **Landing Page**

* “New Chat” button
* Simple and clean navigation experience

### 🟪 **Collapsible Sidebar**

Contains:

* Session history
* New Chat button
* User info
  Fully mobile responsive.

### 🟩 **Chat Interface**

* Submit user query
* Backend sends structured JSON containing:

  * Description
  * Table data
  * Feedback

### 🟧 **Feedback Buttons**

* 👍 Like / 👎 Dislike
* Stored locally (no database)

### 🌗 **Theme Toggle (Dark/Light)**

* Global theme switch
* Applies to all UI sections

### 🌀 **Session Management**

* Auto-generate `sessionId`
* URL updates: `/chat/:sessionId`
* History persists per session

### 🛠️ **Backend APIs**

* Create new chat
* Ask a question
* Fetch session list
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

`GET /api/chat/new`

```json
{
  "sessionId": "sess_1694567000",
  "message": "New chat session started."
}
```

---

### **2️⃣ Get All Sessions**

`GET /api/sessions`

```json
[
  { "id": "sess_12345", "title": "Q3 Sales Performance" },
  { "id": "sess_67890", "title": "Marketing Budget" }
]
```

---

### **3️⃣ Ask a Question**

`POST /api/chat/:sessionId/ask`

```json
{ "question": "What are the best-selling products?" }
```

---

### **4️⃣ Fetch Session History**

`GET /api/chat/:sessionId/history`

```json
[
  { "id": 1, "type": "user", "content": "What are the best products?" },
  { "id": 2, "type": "ai", "content": { ... } }
]
```

---

# 🛠️ Local Setup

## **1. Clone the Repository**

```sh
git clone https://github.com/Saichandanyadav/Chandan-Simplified-Chat
cd Chandan-Simplified-Chat
```

---

# ⚙️ Backend Setup

```sh
cd backend
npm install
npm run dev
```

🔹 Runs at: [http://localhost:5000](http://localhost:5000)

---

# 🎨 Frontend Setup

```sh
cd frontend
npm install
npm run dev
```

🔹 Runs at: [http://localhost:5173](http://localhost:5173)

---

## 🔗 Connect Frontend to Backend

Update the base URL inside frontend API config:

```js
const BASE_URL = "http://localhost:5000";
```

---

# 🌍 Deployment Guide

### **Recommended Setup**

* **Frontend → Vercel**
* **Backend → Render**

### **Alternate (Combined Deployment)**

Deploy Express + React build on:

* Render
* Railway
* Fly.io

---

# 🧪 Example AI Response (Dummy Data)

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

✔ React Frontend
✔ Express Backend
✔ Chat Interface
✔ Theme Toggle
✔ Sessions & Routing
✔ Sidebar Navigation
✔ Deployed Link
✔ GitHub Link
✔ Professional README

---

# 🎯 Final Notes

This project is built for:

* Portfolio
* Technical showcase
* Interview demonstration
* Practice for API + UI integration

---

# 👨‍💻 Developer

### **👤 Developed By: *Sai Chandan Yadav***

* Full Stack Developer
* Passionate about UI/UX, scalable applications, and clean architectures
* LinkedIn: [https://www.linkedin.com/in/saichandanyadav/](https://www.linkedin.com/in/saichandanyadav/)
* GitHub: [https://github.com/Saichandanyadav](https://github.com/Saichandanyadav)

  

Just tell me!
