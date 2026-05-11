import api from "./api"

export async function createTask(taskData) {
  const response = await api.post("/task/create", taskData)
  return response.data
}

export async function getAllTasks() {
  const response = await api.get("/task/all")
  return response.data
}

export async function getSingleTask(taskId) {
  const response = await api.get(`/task/${taskId}`)
  return response.data
}

export async function updateTask(taskId, taskData) {
  const response = await api.put(`/task/${taskId}`, taskData)
  return response.data
}

export async function deleteTask(taskId) {
  const response = await api.delete(`/task/${taskId}`)
  return response.data
}

export async function getTaskStats() {
  const response = await api.get("/task/stats")
  return response.data
}