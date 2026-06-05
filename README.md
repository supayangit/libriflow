# 📚 LibriFlow — Online Book Borrowing Platform

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:1e3a8a,100:0f172a&height=200&section=header&text=LibriFlow&fontSize=40&fontColor=ffffff" />
</p>

---

## 📌 Project Overview

**LibriFlow** is a modern full-stack digital library system built with **Next.js and BetterAuth** that enables users to explore, search, and borrow books seamlessly.

It transforms the traditional library experience into a **fast, secure, and responsive web application** with modern UI/UX design and scalable architecture.

---

## 🚀 Live Links

🔗 Live Site: https://libriflow-sup.vercel.app  
💻 GitHub Repository: https://github.com/supayangit/libriflow  

---

## 📸 Screenshot

<img width="1920" height="1080" alt="Screenshotl" src="https://github.com/user-attachments/assets/3d6691d3-903e-4806-a018-f162897c2c8f" />

---

## 🎯 Purpose

LibriFlow was built to digitize the traditional book borrowing system into a modern web experience. It focuses on:

- Fast book discovery
- Secure authentication
- Category-based filtering
- Smooth UX with modern UI components
- Scalable architecture using Next.js + MongoDB

---

## ✨ Key Features

### 🏠 Home Page
- Hero banner with “Find Your Next Read” CTA
- Animated marquee for announcements and new arrivals
- Featured books section (server-fetched top books)
- Additional custom UI sections for improved engagement

---

### 📚 Book System
- Browse all books dynamically from API
- Category-based filtering (Story, Tech, Science, etc.)
- Search books by title or author
- Responsive Swiper-based carousel layout

---

### 📖 Book Details Page (Protected Route)
- Only accessible to authenticated users
- Detailed book view with:
  - Cover image
  - Title, author, description
  - Availability count
- Borrow system with toast notifications
- Redirect to login if user is not authenticated

---

### 🔐 Authentication (BetterAuth)
- Email/password authentication
- Google OAuth login
- Secure session handling
- Persistent user sessions
- Protected routes (My Profile, Book Details)

---

### 👤 My Profile (Protected Route)
- Displays user information
- Update profile functionality (name & image)
- Secure user data handling using BetterAuth APIs

---

### 🔎 All Books Page
- Full search functionality
- Responsive grid + Swiper integration
- Pagination system
- Real-time filtering

---

### 🧭 Category Filtering System
- Sidebar/category-based navigation
- Dynamic category routing
- Clean URL structure (`/books/[category]`)

---

### 📱 Responsive Design
- Fully responsive (mobile, tablet, desktop)
- Adaptive Swiper layout
- Mobile-optimized UI spacing and typography

---

## 🧠 Advanced Features Implemented (Beyond Requirements)

- ⚡ Dynamic API-based book fetching (no static JSON dependency)
- 🔐 Secure auth integration with BetterAuth + session management
- 🔄 Client-side caching using React state + memoization
- 🧩 Reusable component architecture (BookCard, Header, etc.)
- 🎯 Smart pagination with Swiper integration
- 🌐 Environment-based configuration for production safety
- 🚫 Protected routing with auth guard logic
- 📦 Optimized rendering using Next.js App Router
- 🧠 Category slug normalization (SEO-friendly URLs)

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- React
- Tailwind CSS
- HeroUI
- Swiper.js

### Backend / Database
- MongoDB
- Next.js API Routes

### Authentication
- BetterAuth
- Google OAuth

### Utilities
- React Hook Form
- React Toastify
- React Icons

---

## 📦 NPM Packages Used

next
react
react-dom
tailwindcss
@heroui/react
better-auth
mongodb
swiper
react-toastify
react-hook-form
react-icons
react-fast-marquee

---

## ⚙️ How to Run Locally
1. Clone the repository
git clone https://github.com/supayangit/libriflow.git
2. Navigate into project directory
cd libriflow
3. Install dependencies
npm install
4. Start development server
npm run dev
5. Open in browser
http://localhost:3000
### 📦 Build for Production
npm run build
npm start
### 🚀 Deployment
Hosted on Vercel
Fully optimized production build
Fast performance with SSR + API routes
