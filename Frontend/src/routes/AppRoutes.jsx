import { Routes, Route, Navigate } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"
import Tasks from "../pages/Tasks"
import AdminDashboard from "../pages/AdminDashboard"
import CreateTask from "../pages/CreateTask"
import EditTask from "../pages/EditTask"
import ProtectedRoute from "../components/ProtectedRoute"
import AdminProtectedRoute from "../components/AdminProtectedRoute"
import AppLayout from "../components/AppLayout"
import AdminUsers from "../pages/AdminUsers"
import AdminTasks from "../pages/AdminTasks"

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<ProtectedRoute><AppLayout><Dashboard /></AppLayout></ProtectedRoute>}/>

      <Route path="/tasks" element={<ProtectedRoute><AppLayout><Tasks /></AppLayout></ProtectedRoute>}/>

      <Route path="/tasks/create" element={<ProtectedRoute><AppLayout><CreateTask /></AppLayout></ProtectedRoute>}/>

      <Route path="/tasks/edit/:taskId"element={<ProtectedRoute><AppLayout><EditTask /></AppLayout></ProtectedRoute>}/>

      <Route path="/admin" element={<AdminProtectedRoute><AppLayout><AdminDashboard /></AppLayout></AdminProtectedRoute>}/>

      <Route path="/admin/users" element={<AdminProtectedRoute><AppLayout><AdminUsers /></AppLayout></AdminProtectedRoute>}/>
    
      <Route path="/admin/tasks" element={<AdminProtectedRoute><AppLayout><AdminTasks /></AppLayout></AdminProtectedRoute>}/>

    </Routes>
  )
}

export default AppRoutes