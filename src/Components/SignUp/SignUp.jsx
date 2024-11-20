import { useState } from 'react'

function SignUp() {
  const [count, setCount] = useState(0)


    
  return (
    <>
    <div className="container">
      <div className="header">Sign Up</div>
      <div className="decsription">Create your account today</div>
    </div>
    <button><div className="google"><img src="google.jpeg" alt="google" />
    <div className="google-text">Sign up with google</div></div></button>


    <div className="Signup-divider">
                    <div className="line"></div>
                    <span>or</span>
                    <div className="line"></div>
                </div>

                <div className="credentials">
                  <div className="name">
                    <p>Name</p>
                    <input type="text" name="" id="" placeholder="Name"/>
                  </div>
                  <div className="Email">
                    <p>Email</p>
                    <input type="email" name="" id="" placeholder="Name@example.com"/>
                  </div>
                  <div className="password">
                  <div className="password">
                    <p>Password</p>
                    <input type="password" name="" id="" placeholder="Password"/>
                  </div>
                  <div className="password">
                    <p>Confirm password</p>
                    <input type="password"  name="" id="" placeholder="Confirm password"/>
                  </div>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" name="" id="terms" />
                    <p>I accept the Terms and Privacy Policy.</p>
                  </div>
                </div>
    </>
  )


}
export default SignUp