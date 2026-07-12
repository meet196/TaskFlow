import logo from '../assets/TaskFlow Icon.png'
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import  toast  from "react-hot-toast"
import { Mail, Lock } from "lucide-react"
import { useAuth } from "../context/AuthContext"

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleLogin(e) {
    e.preventDefault()

    try {
      await login({ email, password })
      toast.success("Login successfully")
      navigate("/dashboard")
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid email or password")
    }
  }

  return (
    
    <div
      className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1600&q=80')" }}>

      <div className="bg-white/75 backdrop-blur w-full max-w-md p-8 rounded-xl shadow-xl">
       <div className="flex justify-center mb-4">
    <img src={logo} alt="TaskFlow" className="h-14 w-14"/>
  </div>

        <h2 className="text-3xl font-bold text-center mb-7 text-gray-800">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-3">
        <div className="relative">
       <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />

    <input
    className="w-full border-2 border-gray-400 pl-5 pr-4 py-3 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
    type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>

        <div className="relative">
        <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />

       <input
        className="w-full border-2 border-gray-400 pl-5 pr-4 py-3 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold active:scale-95 transition-transform"
            type="submit">Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login