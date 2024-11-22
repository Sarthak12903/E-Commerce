import { Link } from "react-router-dom";
import Input from "../../Components/Input/Input";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="login-container space-y-6 bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-800 sm:text-4xl md:text-5xl">
          Login
        </h1>
        <p className="text-lg text-center text-gray-600 mt-2 sm:text-xl">
          Welcome back! Please enter your details.
        </p>
        <Input
          name={"Email"}
          placeholder={"Enter Your Email"}
          type={"email"}
          setValue={setEmail}
          value={email}
        />
        <Input
          name={"Password"}
          placeholder={"Enter Your Password"}
          type={"password"}
          setValue={setPassword}
          value={password}
        />
        <div className="rem-pass flex align-center justify-between ">
          <div className=" flex justify-center items-center space-x-2">
            <input
              type="checkbox"
              name="Remember-me"
              id=""
              checked={toggle}
              onChange={(e) => setToggle(e.target.checked)}
            />
            <p>Remember me</p>
          </div>
          <a href="#" className="text-blue-500">
            Forgot Password?
          </a>
        </div>
        <button className="bg-primary w-full flex items-center justify-center space-x-3 border border-gray-300 p-2 rounded-md hover:bg-hover focus:outline-none focus:ring-2 focus:ring-blue-500 text-cyan-50">
          {" "}
          Sign In
        </button>
        <button className="bg-background w-full flex items-center justify-center space-x-3 border border-gray-300 p-2 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <img
            src="/Images/google.jpeg"
            alt=""
            className="w-7 h-7 rounded-full"
          />
          <p>Sign in with Google</p>
        </button>
        <div className="signup text-center">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-blue-500 ">
            Sign up Here{" "}
          </Link>{" "}
        </div>
      </div>
    </>
  );
}
export default Login;
