import api from "./api"

export async function registerUser({name,email,password,role}) {
  const response = await api.post("/auth/register", {name,email,password,role})
  return response.data
}

export async function loginUser({email,password}) {
  const response = await api.post("/auth/login",{email,password})
  return response.data
}

export async function logoutUser() {
  const response = await api.get("/auth/logout")
  return response.data
}

export async function getMeUser() {
  const response = await api.get("/auth/get-me")
  return response.data
}

