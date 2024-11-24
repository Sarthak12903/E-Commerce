import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import HomePage from"./Pages/Homepage/Homepage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
         <Route path="/Homepage" element={<HomePage />}/>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
