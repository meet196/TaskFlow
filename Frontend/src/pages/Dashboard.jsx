import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getTaskStats } from "../services/task.services"

function Dashboard() {
  const [stats, setStats] = useState(null)
  const navigate = useNavigate()

  async function fetchStats() {
    try {
      const response = await getTaskStats()
      setStats(response.stats)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchStats()
  }, [])

  if (!stats) {
    return (
      <div className="p-6">
        <p>Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          onClick={() => navigate("/tasks")}
          className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg active:scale-95 transition-transform">
          <h3 className="text-gray-500 text-sm font-medium">Total Tasks</h3>
          <p className="text-4xl font-bold mt-2">{stats.totalTasks}</p>
        </div>

        <div
          onClick={() => navigate("/tasks?status=pending")}
          className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg active:scale-95 transition-transform">
          <h3 className="text-gray-500 text-sm font-medium">Pending Tasks</h3>
          <p className="text-4xl font-bold mt-2">{stats.pendingTasks}</p>
        </div>

        <div
          onClick={() => navigate("/tasks?status=completed")}
          className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg active:scale-95 transition-transform">
          <h3 className="text-gray-500 text-sm font-medium">Completed Tasks</h3>
          <p className="text-4xl font-bold mt-2">{stats.completedTasks}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard