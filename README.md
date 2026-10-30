# Expense Tracker – MERN Stack

A full-stack Expense Tracker application developed using the MERN stack to help users manage their personal finances, track income and expenses, and monitor their spending habits through an interactive dashboard.

## Features

### 1. User Authentication
- User registration and login.
- JWT-based authentication.
- Password hashing using bcrypt.
- Protected routes for authenticated users.
- Secure logout functionality.

### 2. Dashboard
- Overview of financial activities.
- Display total income and expenses.
- Calculate and display financial summaries.
- Interactive expense distribution pie chart.
- Category-wise expense analysis.
- Financial trend visualization.

### 3. Income Management
- Add new income transactions.
- View all income records.
- Edit existing income transactions.
- Delete income transactions.
- Organize income by category.

### 4. Expense Management
- Add new expense transactions.
- View all expense records.
- Edit existing expense transactions.
- Delete expense transactions.
- Categorize expenses.
- Monitor spending patterns.

### 5. Profile Management
- View personal information.
- Update name and email address.
- Change account password.
- Password visibility toggle.
- Automatically update profile information across the application.

## Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Tailwind CSS | Styling and responsive design |
| Node.js | Backend runtime |
| Express.js | Backend API development |
| MongoDB Atlas | Database |
| Mongoose | MongoDB object modeling |
| JWT | Authentication |
| bcrypt | Password hashing |
| Axios | API communication |
| React Router DOM | Navigation and routing |
| Recharts | Data visualization |
| Lucide React | Icons |
| React Toastify | Notifications |

## Project Structure

```text
Expense-Tracker/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── App.jsx
│       └── main.jsx
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
├── .gitignore
└── README.md
```

## Installation and Setup

### Prerequisites
- Node.js and npm
- MongoDB Atlas account
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd Expense-Tracker
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

### 4. Access the Application

Frontend: `http://localhost:5173`

Backend: `http://localhost:4000`

## API Overview

Base URL: `http://localhost:4000/api`

### User APIs

| Method | Endpoint | Description |
|---|---|---|
| POST | `/user/register` | Register a new user |
| POST | `/user/login` | User login |
| GET | `/user/me` | Retrieve current user details |
| PUT | `/user/profile` | Update profile |
| PUT | `/user/password` | Change password |

### Income APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/income` | Get income records |
| POST | `/income` | Add income |
| PUT | `/income/:id` | Update income |
| DELETE | `/income/:id` | Delete income |

### Expense APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/expense` | Get expense records |
| POST | `/expense` | Add expense |
| PUT | `/expense/:id` | Update expense |
| DELETE | `/expense/:id` | Delete expense |

### Dashboard API

| Method | Endpoint | Description |
|---|---|---|
| GET | `/dashboard` | Retrieve dashboard data |

*Note: Verify the endpoint names and HTTP methods against your actual backend routes.*

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Backend server port |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT authentication |

**Security:** Do not upload your `.env` file, database credentials, or JWT secret to GitHub.

Add the following to `.gitignore`:

```gitignore
node_modules/
.env
dist/
```

## Key Learning Outcomes

- Full-stack application development using the MERN stack.
- REST API development using Express.js and Node.js.
- MongoDB database integration.
- JWT-based authentication and authorization.
- Password hashing and secure user authentication.
- CRUD operations for income and expense transactions.
- React Hooks and state management.
- Frontend and backend integration using Axios.
- Protected routing using React Router.
- Interactive dashboard development and data visualization.

## Future Enhancements

- Monthly and yearly financial reports.
- Export transactions to CSV or PDF.
- Budget planning and spending limits.
- Advanced financial analytics.
- Enhanced data visualization.

## Author

**Indhumathi A P**

Computer Science and Engineering

GitHub: https://github.com/Indhumathi288



⭐ If you find this project useful, consider giving it a star!
