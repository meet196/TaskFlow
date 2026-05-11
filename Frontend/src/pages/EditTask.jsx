import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"
import { getSingleTask, updateTask } from "../services/task.services"

function EditTask() {
  const { taskId } = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState("pending")
  const [priority, setPriority] = useState("low")
  const [category, setCategory] = useState("other")
  const [dueDate, setDueDate] = useState("")

  async function fetchTask() {
    try {
      const response = await getSingleTask(taskId)
      const task = response.task

      setTitle(task.title)
      setDescription(task.description)
      setStatus(task.status)
      setPriority(task.priority)
      setCategory(task.category)

      if (task.dueDate) {
        setDueDate(task.dueDate.slice(0, 10))
      }
    } catch (error) {
      alert(error.response?.data?.message || "Task fetch failed")
    }
  }

  async function handleUpdate(e) {
    e.preventDefault()

    try {
      await updateTask(taskId, {title,description,status,priority,category,dueDate})
      toast.success("Task updated successfully")
      navigate("/tasks")
    } catch (error) {
      toast.error(error.response?.data?.message || "Task update failed")    }
  }

  useEffect(() => {
    fetchTask()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white w-full max-w-2xl mx-auto p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6">Edit Task</h1>

        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text" placeholder="Task title" value={title} onChange={(e) => setTitle(e.target.value)}/>

          <textarea
            className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Task description" value={description} onChange={(e) => setDescription(e.target.value)}/>

          <select
            className="w-full border border-gray-300 px-4 py-3 rounded-lg"
            value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>

          <select
            className="w-full border border-gray-300 px-4 py-3 rounded-lg"
            value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <select
            className="w-full border border-gray-300 px-4 py-3 rounded-lg"
            value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="study">Study</option>
            <option value="other">Other</option>
          </select>

          <input
            className="w-full border border-gray-300 px-4 py-3 rounded-lg"
            type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)}/>

          <button
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold"
            type="submit">Update Task
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditTask