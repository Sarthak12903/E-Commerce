import { useState } from 'react'

function SignUp() {
  const [count, setCount] = useState(0)



  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg sm:max-w-lg md:max-w-xl lg:max-w-2xl">

        <div className="credentials space-y-6 bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-center text-gray-800 sm:text-4xl md:text-5xl">Sign Up</h1>
          <p className="text-lg text-center text-gray-600 mt-2 sm:text-xl">Create your account today</p>

          <div className="name">
            <p className="text-gray-700 font-medium">Name</p>
            <input type="text" name="name" id="name" placeholder="Name"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>


          <div className="email">
            <p className="text-gray-700 font-medium">Email</p>
            <input type="email" name="email" id="email" placeholder="Name@example.com" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>


          <div className="password space-y-4">
            <div>
              <p className="text-gray-700 font-medium">Password</p>
              <input type="password" name="password" id="password" placeholder="Password" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <p className="text-gray-700 font-medium">Confirm Password</p>
              <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm password" className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>


          <div className="checkbox flex items-center space-x-2">
            <input type="checkbox" id="terms" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-gray-600 text-sm">
              I accept the <a href="#" className="text-blue-500 underline">Terms</a> and <a href="#" className="text-blue-500 underline">Privacy Policy</a>.
            </label>
          </div>
          <button className="bg-primary w-full flex items-center justify-center space-x-3 border border-gray-300 p-2 rounded-md hover:bg-hover focus:outline-none focus:ring-2 focus:ring-blue-500"
        >Sign Up</button>


          <div className="Signup-divider flex items-center justify-between space-x-2">
            <div className="line h-px bg-gray-300 flex-1"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="line h-px bg-gray-300 flex-1"></div>
          </div>


          <button
            type="button"
            className="bg-background w-full flex items-center justify-center space-x-3 border border-gray-300 p-2 rounded-full hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <img src="/Images/google.jpeg" alt="google" className="w-5 h-5" />

            <span className="google-text text-grey-500 font-medium ">Sign up with Google</span>
          </button>
          <div className="Login text-center">Do you  have an account? <a href="#" className="text-blue-500 ">Login Here  </a>   </div>
        </div>

      </div>
    </>
  )

}
export default SignUp