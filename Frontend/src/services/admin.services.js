import api from "./api"

export async function getAdminStats() {
  const response = await api.get("/admin/stats")
  return response.data
}

export async function getAllUsers() {
  const response = await api.get("/admin/users")
  return response.data
}

export async function getAllAdminTasks() {
  const response = await api.get("/admin/tasks")
  return response.data
}

export async function deleteAdminTask(taskId) {
  const response = await api.delete(`/admin/tasks/${taskId}`)
  return response.data
}