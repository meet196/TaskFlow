import { Link, useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { useAuth } from "../context/AuthContext"

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
  try {
    await logout()
    toast.success("Logout successful")
    navigate("/login")
  } catch (error) {
    toast.error("Logout failed")
  }
}

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold">TaskFlow</h2>
      </div>

      <div className="flex items-center gap-5">
        <Link className="hover:text-blue-400" to="/dashboard">Dashboard</Link>

        <Link className="hover:text-blue-400" to="/tasks">All Tasks</Link>

        <Link className="hover:text-blue-400" to="/tasks/create">Create Task</Link>

        {user?.role === "admin" && (
          <>
            <Link className="hover:text-blue-400" to="/admin">Admin</Link>

            <Link className="hover:text-blue-400" to="/admin/users">All Users</Link>

            <Link className="hover:text-blue-400" to="/admin/tasks">All Users Tasks</Link>
          </>
        )}

        {user && (<button onClick={handleLogout}className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded">Logout</button>)}

      </div>
    </nav>
  )
}

export default Navbar