import logo from "../assets/TaskFlow Icon.png";
import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import toast from "react-hot-toast"
import { Mail, Lock, User } from "lucide-react"
import { registerUser } from "../services/auth.api"

function Register() {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function handleRegister(e) {
    e.preventDefault()

    try {
      await registerUser({ name, email, password })
      toast.success("Account registered successfully")
      navigate("/login")
    } catch (error) {
      toast.error(error.response?.data?.message || "Register failed")
    }
  }

  return (
    <div
  className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1600&q=80')" }}>

  <div className="bg-white/75 backdrop-blur w-full max-w-md p-8 rounded-xl shadow-xl">
    
       <div className="flex justify-center ">
         <img src={logo} alt="TaskFlow" className="h-14 w-14"/>
    </div>
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="relative">
           <User className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />

    <input
    className="w-full border-2 border-gray-400 pl-5 pr-4 py-3 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
    type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>

  <div className="relative">
  <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />

  <input
    className="w-full border-2 border-gray-400 pl-5 pr-4 py-3 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
    type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
  </div>

  <div className="relative">
  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />

  <input
    className="w-full border-2 border-gray-400 pl-5 pr-4 py-3 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
    type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
  </div>

          <p className="text-sm text-gray-500">
            Password must be at least 8 characters long.
          </p>

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold ctive:scale-95 transition-transform"
            type="submit">
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register