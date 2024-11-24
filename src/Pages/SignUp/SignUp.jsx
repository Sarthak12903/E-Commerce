import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../Components/Input/Input";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="max-w-md mt-12 mx-auto p-6 bg-white shadow-lg rounded-lg sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <div className="credentials space-y-6 bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-center text-gray-800 sm:text-4xl md:text-5xl">
            Sign Up
          </h1>
          <p className="text-lg text-center text-gray-600 mt-2 sm:text-xl">
            Create your account today
          </p>

          <Input
            name={"Name"}
            placeholder={"Enter Your Name"}
            type={"text"}
            setValue={setName}
            value={name}
          />
          <Input
            name={"Email"}
            placeholder={"Enter Your Email"}
            type={"email"}
            setValue={setEmail}
            value={email}
          />
          <Input
            name={" Create Password"}
            placeholder={"Enter Your Password"}
            type={"password"}
            setValue={setPassword}
            value={password}
          />
          <Input
            name={"Confirm Password"}
            placeholder={"Confirm Your Password"}
            type={"password"}
            setValue={setConfirmPassword}
            value={confirmPassword}
          />

          <div className="checkbox flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              checked={toggle}
              onChange={(e) => setToggle(e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="terms" className="text-gray-600 text-sm">
              I accept the{" "}
              <Link to={"/"} className="text-blue-500 underline">
                Terms
              </Link>
              and
              <Link to={"/"}  className="text-blue-500 underline">
                Privacy Policy
              </Link>
              .
            </label>
          </div>
          <button className="bg-primary w-full flex items-center justify-center space-x-3 border border-gray-300 p-2 rounded-md hover:bg-hover focus:outline-none focus:ring-2 focus:ring-blue-500">
            Sign Up
          </button>

          <div className="Signup-divider flex items-center justify-between space-x-2">
            <div className="line h-px bg-gray-300 flex-1"></div>
            <span className="text-gray-500 text-sm">or</span>
            <div className="line h-px bg-gray-300 flex-1"></div>
          </div>

          <button className="bg-white w-full flex items-center justify-center space-x-3 border border-gray-300 p-2 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <img
              src="/Images/google.jpeg"
              alt=""
              className="w-7 h-7 rounded-full"
            />
            <p className="font-semibold">Sign in with Google</p>
          </button>
          <div className="Login text-center">
            Do you have an account?{" "}
            <Link to={"/login"} className="text-blue-500 ">
              Login Here{" "}
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
