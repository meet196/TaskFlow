import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { getAllTasks, deleteTask } from "../services/task.services"

function Tasks() {
  const navigate = useNavigate()
  const [tasks, setTasks] = useState([])

  async function fetchTasks() {
    try {
      const response = await getAllTasks()
      setTasks(response.tasks)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleDelete(taskId) {
    try {
      await deleteTask(taskId)
      toast.success("Task deleted successfully")
      fetchTasks()
    } catch (error) {
      toast.error(error.response?.data?.message || "Task delete failed")
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Tasks</h1>

        <button onClick={() => navigate("/tasks/create")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
          Create Task
        </button>
      </div>

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
              </div>

              <div className="flex gap-3 mt-4">
                <button onClick={() => navigate(`/tasks/edit/${task._id}`)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
                  Edit
                </button>

                <button onClick={() => handleDelete(task._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Tasks