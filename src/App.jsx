import { useState } from 'react'

import SignUp from './Components/SignUp/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <SignUp/>
    </>
  )
}

export default App
