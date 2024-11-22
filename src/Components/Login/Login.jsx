import { useState } from 'react'


function Login() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="login-container space-y-6 bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 sm:text-4xl md:text-5xl">Login</h1>
        <p className="text-lg text-center text-gray-600 mt-2 sm:text-xl">Welcome back! Please enter your details.</p>
        <div className="email">
          <label htmlFor="Email" className="text-gray-700 font-medium">Email</label>
          <input type="text" placeholder="Enter your email" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div className="password">
          <label htmlFor="Password" className="text-gray-700 font-medium">Password</label>
          <input type="password" placeholder="Enter your password" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
        </div>
        <div className="rem-pass flex align-center justify-between ">
          <div className="remember-me flex justify-center align-center">
            <input type="checkbox" name="Remember-me" id="" />
            <p>Remember me</p>
          </div>
          <a href="#" className="text-blue-500">Forgot Password?</a>
        </div>
        <button className="bg-primary w-full flex items-center justify-center space-x-3 border border-gray-300 p-2 rounded-md hover:bg-hover focus:outline-none focus:ring-2 focus:ring-blue-500 text-cyan-50"> Sign In</button>
        <button
          className="bg-background w-full flex items-center justify-center space-x-3 border border-gray-300 p-2 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"

        ><img src="/Images/google.jpeg" alt="" className="w-7 h-7 rounded-full" /><p>Sign in with Google</p></button>
        <div className="signup text-center">Do you  have an account? <a href="#" className="text-blue-500 ">Login Here  </a>   </div>
      </div>
    </>

  )
}
export default Login;