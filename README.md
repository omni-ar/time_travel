# 🕰️ Time Travel - Explore History Like Never Before

**Time Travel** is a futuristic web application that lets users dive into different years from 1100 to 2100. Built with a powerful backend, interactive frontend, and immersive 3D visualizations — it's a journey through history, memory, and imagination.

> ✨ “Live the past, log your future, travel through time.”

---

## 🌐 Live Demo

- **Frontend**: [https://time-travel-ruby.vercel.app](https://time-travel-ruby.vercel.app)
- **Backend**: [https://time-travel-backend.onrender.com](https://time-travel-backend.onrender.com)

---

## 🚀 Features

- 📜 **Interactive Year Timeline**: Scrollable horizontal timeline from 1100 to 2100.
- 📦 **Dynamic Data Fetching**: Clicking a year fetches and displays content from MongoDB via Express API.
- 🔐 **Authentication System**: JWT-secured login/register with password encryption.
- 📓 **Premium Diary**: Upload videos/photos, write entries, and view/edit/delete past logs.
- 🧠 **Anant – AI Chatbot (Coming Soon)**: Personalized historical assistant.
- 💳 **Payment Integration**: Razorpay used for premium feature access.
- 🌌 **3D Time Machine**: Built using Three.js to add an immersive sci-fi vibe.

---

## ⚙️ Tech Stack

### 💻 Frontend

- **HTML, CSS, JavaScript (Vanilla)**
- **Three.js** – for 3D visualizations of time machine
- **ScrollReveal** – for entry animations
- **AOS (Animate On Scroll)** – smooth transitions
- **Vercel** – for frontend deployment

### 🔧 Backend

- **Node.js + Express.js**
- **MongoDB + Mongoose**
- **JWT (jsonwebtoken)** – auth system
- **bcryptjs** – for password hashing
- **Razorpay SDK** – for payments
- **CORS** – secure API access
- **Render** – backend deployment

---

## 📂 Folder Structure

Time-Traveller/
│
├── index.html
├── style.css
├── script.js
├── explore.html
├── login.html
├── register.html
├── premium.html
├── ...
│
├── BACKEND/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── utils/
│ ├── server.js
│ └── .env (not uploaded)


---

## 🛠️ Tech Stack

### 🔹 Frontend
- HTML, CSS, JavaScript
- Three.js (3D animations for Time Machine)
- Razorpay.js (Payment gateway)
- JWT for token-based auth (from backend)

### 🔹 Backend
- Node.js, Express.js
- MongoDB with Mongoose
- Razorpay SDK (Payment)
- JSON Web Tokens
- dotenv

---

## 🧪 Features

- 🔍 Explore 1100–2100 timeline
- 🪙 Razorpay-powered premium subscription
- 🔐 Secure JWT-based login/signup
- 📓 Personal premium diary with media upload (for future phase)
- 🚀 Deployed via Vercel (frontend) & Render (backend)

---

## ⚙️ Setup & Deployment Guide

### Backend Setup (Render Deployment Ready)

1. Navigate to backend folder:

bash
cd BACKEND

2.Install dependencies:
npm install

3.Create a .env file:
PORT=5000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

4.Run the backend server:
npm start
Server should be running on: http://localhost:5000 or your deployed Render URL.

5. Hosting Info
Part	    Platform	  URL
Frontend	Vercel	    https://time-travel-ruby.vercel.app
Backend	  Render	    https://time-travel-backend.onrender.com

🙌 Author
Arjit Tripathi — CSE @ VIT Vellore
Built with curiosity, coffee ☕ and code 💻

📜 License
MIT © 2025
