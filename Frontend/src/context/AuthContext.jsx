import { createContext, useContext, useEffect, useState } from "react"
import { loginUser, logoutUser, getMeUser } from "../services/auth.api"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  async function getMe() {
    try {
      const response = await getMeUser()
      setUser(response.user)
    } catch (error) {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  async function login(data) {
    const response = await loginUser(data)
    setUser(response.user)
    return response
  }

  async function logout() {
    await logoutUser()
    setUser(null)
  }

  useEffect(() => {
    getMe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, getMe }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}