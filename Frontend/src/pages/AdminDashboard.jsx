import { useEffect, useState } from "react"
import { getAdminStats } from "../services/admin.services"

function AdminDashboard() {
  const [stats, setStats] = useState(null)

  async function fetchAdminStats() {
    try {
      const response = await getAdminStats()
      setStats(response.stats)
    } catch (error) {
      alert(error.response?.data?.message || "Admin stats failed")
    }
  }

  useEffect(() => {
    fetchAdminStats()
  }, [])

  if (!stats) {
    return (
      <div className="p-6">
        <p>Loading admin dashboard...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
          <p className="text-4xl font-bold mt-2">{stats.totalUsers}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm font-medium">Total Tasks</h3>
          <p className="text-4xl font-bold mt-2">{stats.totalTasks}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm font-medium">Pending Tasks</h3>
          <p className="text-4xl font-bold mt-2">{stats.pendingTasks}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-gray-500 text-sm font-medium">Completed Tasks</h3>
          <p className="text-4xl font-bold mt-2">{stats.completedTasks}</p>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard