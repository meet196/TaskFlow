import { useEffect, useState } from "react"
import { getAllUsers } from "../services/admin.services"

function AdminUsers() {
  const [users, setUsers] = useState([])

  async function fetchUsers() {
    try {
      const response = await getAllUsers()
      setUsers(response.users)
    } catch (error) {
      alert(error.response?.data?.message || "Users fetch failed")
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">All Users</h1>

      {users.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">No users found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {users.map((user) => (
            <div key={user._id} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">{user.name}</h3>
              <p className="text-gray-600">Email: {user.email}</p>
              <p className="text-gray-600">Role: {user.role}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminUsers