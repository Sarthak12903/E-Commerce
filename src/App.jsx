import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
import Footer  from "./components/Footer/Footer";
import Mobile from "./pages/Mobile/Mobile";
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/mobiles" element={<Mobile />} />
      </Routes>
      <Footer/>


    </BrowserRouter>
  );
}
