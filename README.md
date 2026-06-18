# Axenor

Axenor is a full-stack stock brokerage platform that enables users to manage investments through a secure and intuitive dashboard. The application provides portfolio tracking, watchlist management, order monitoring, fund management, authentication, and market insights in a modern web interface.

The project is built using the MERN stack and follows industry-standard practices including JWT authentication, password hashing, protected routes, cloud database integration, responsive design, and modular architecture.

---

## Features

### Authentication & Security

* User Registration and Login
* JWT-based Authentication
* Protected Dashboard Routes
* Password Hashing using bcrypt
* Secure Session Management

### Portfolio Management

* Portfolio Value Tracking
* Profit & Loss Calculation
* Holdings Management
* Watchlist Management
* Order Tracking
* Funds Deposit & Withdrawal

### Dashboard Analytics

* Portfolio Summary Dashboard
* Live Market Ticker
* Portfolio Performance Charts
* Recent Orders Overview
* Holdings Overview

### User Experience

* Responsive Design
* Modern UI Components
* Toast Notifications
* Smooth Animations using AOS
* Clean Navigation System

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Bootstrap
* Recharts
* React Toastify
* AOS

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcryptjs

### Database

* MongoDB Atlas
* Mongoose

---

## Project Structure

```bash
Axenor/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── dashboard/
│   │   ├── landing_page/
│   │   ├── __tests__/
│   │   └── components/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Pramodh369/Axenor.git
```

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## Testing

Run tests using:

```bash
npm test
```

Current test coverage includes:

* Portfolio Profit Calculation
* Portfolio Value Calculation
* Funds Balance Calculation

---

## Database Collections

The application uses MongoDB Atlas and stores data in the following collections:

```text
users
holdings
watchlists
orders
funds
```

User passwords are securely stored using bcrypt hashing.

---

## Future Enhancements

* Real-Time Stock Market API Integration
* Advanced Portfolio Analytics
* Portfolio Reports Export
* Email Notifications
* Stock Search & Filtering

---

## Author

**Pramodh**

Full-Stack MERN Developer

---

## License

This project is licensed under the MIT License.

Copyright (c) 2026 Pramodh
