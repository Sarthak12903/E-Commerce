import { useState } from 'react'

import SignUp from './Components/SignUp/SignUp'
import Login from './Components/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SignUp/>
    <Login/>
    </>
  )
}

export default App
