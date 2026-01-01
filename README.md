# 🍔 Meeting Point – Fast Food Delivery Web Application

**Meeting Point** is a simple fast food delivery web application built using **HTML, CSS, JavaScript, and Bootstrap** for the frontend and **Spring Boot (Java)** for the backend.  
The project supports **user signup and login** functionality and is deployed using modern cloud platforms.

---

## 🚀 Live Deployment

- **Frontend (Vercel):**  
 https://bootstrap-fast-food.vercel.app/

- **Backend (Railway – Spring Boot):**  
  https://springbootlogincredentials-production.up.railway.app

---

## 🛠️ Tech Stack

**Frontend**
- HTML5
- CSS3
- Bootstrap 5
- JavaScript (Vanilla JS)
- LocalStorage

**Backend**
- Java
- Spring Boot
- REST APIs
- Railway Hosting

---

## ✨ Features

- User Signup (Account Creation)
- User Login Authentication
- Email & Password Validation (Frontend)
- Username display after login
- Responsive UI with Bootstrap
- Static food menu pages
- Backend hosted online (cross-device login support)

---

## 📂 Project Folder Structure

📦 BootStrap/
├── 📁 css/
│   └── style.css
│
├── 📁 images/
│   ├── logo.webp
│   ├── header.png
│   ├── chickenBiryani.jpg
│   ├── chickenFriedRice.png
│   ├── eggNoodles.jpeg
│   ├── gobiNoodles.jpg
│   ├── gobiRice.jpg
│   ├── parota.jpeg
│   ├── parotaWithChickenCurry.avif
│   └── gobi1.jpg
│
├── 📁 javaScript/
│   ├── login.js
│   ├── signUp.js
│   └── usernameNav.js
│
├── index.html
├── About.html
├── contact.html
├── login.html
├── signUp.html
└── README.md


---

## 🔐 Authentication Flow

### Signup
- User enters username, mobile number, email, and password
- Email and password are validated using JavaScript (Regex)
- Data is sent to Spring Boot backend API

### Login
- User logs in using email and password
- Backend validates credentials
- On success:
  - Username is saved in `localStorage`
  - User is redirected to Home page

---

## 📡 Backend API Endpoints

| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/mahitech99/user/signUp` | Create new user |
| POST | `/mahitech99/user/login` | User login |

---

## 🧪 Validation Rules

**Email**

**Password**
- Minimum 8 characters
- Must contain:
  - 1 Uppercase letter
  - 1 Lowercase letter
  - 1 Number
  - 1 Special character

---

## ⚠️ Limitations

- Cart functionality is UI only
- No payment gateway
- No admin dashboard
- Demo / learning purpose project

---

## ▶️ How to Run Locally

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/meeting-point.git


