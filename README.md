# TaskFlow
TaskFlow is a MERN stack task management application with JWT cookie authentication, role-based admin access, task CRUD operations, dashboard statistics, protected routes, and a React + Tailwind frontend.

# TaskFlow - MERN Stack Task Management System

TaskFlow is a full-stack task management web application built with the MERN stack. It includes user authentication, JWT cookie-based login, protected routes, task CRUD operations, dashboard statistics, and role-based admin functionality.

---

## Features

### Authentication
- User registration
- User login
- JWT token stored in HTTP-only cookie
- Logout with token blacklist
- Get current logged-in user
- Protected routes

### Task Management
- Create task
- View all tasks
- View single task
- Update task
- Delete task
- Task status, priority, category, and due date
- Dashboard task statistics

### Admin Features
- Admin protected routes
- View all users
- View all users' tasks
- Delete any user's task
- Admin dashboard statistics
- Role-based access control

### Frontend
- React frontend with Vite
- React Router
- Axios service layer
- Auth Context for global user state
- Protected routes
- Admin protected routes
- React Hot Toast notifications
- Tailwind CSS styling

---

## Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt.js
- Cookie Parser
- CORS

---

## Folder Structure

```text
TaskFlow
├── Backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── models
│   │   ├── routes
│   │   └── app.js
│   ├── server.js
│   └── package.json
│
├── Frontend
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
