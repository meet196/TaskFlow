import { useEffect, useState } from "react"
import { deleteAdminTask, getAllAdminTasks } from "../services/admin.services"

function AdminTasks() {
  const [tasks, setTasks] = useState([])

  async function fetchTasks() {
    try {
      const response = await getAllAdminTasks()
      setTasks(response.tasks)
    } catch (error) {
      alert(error.response?.data?.message || "Admin tasks fetch failed")
    }
  }

  async function handleDelete(taskId) {
    try {
      await deleteAdminTask(taskId)
      fetchTasks()
    } catch (error) {
      alert(error.response?.data?.message || "Admin delete failed")
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">All Tasks</h1>

      {tasks.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">No tasks found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tasks.map((task) => (
            <div key={task._id} className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">{task.title}</h3>

              <p className="text-gray-600 mb-4">{task.description}</p>

              <div className="space-y-1 text-sm text-gray-700">
                <p>Status: {task.status}</p>
                <p>Priority: {task.priority}</p>
                <p>Category: {task.category}</p>
                <p>Due Date: {task.dueDate?.slice(0, 10)}</p>
                <p>User: {task.user}</p>
              </div>

              <button
                onClick={() => handleDelete(task._id)}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg ">
                Delete Task
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminTasks