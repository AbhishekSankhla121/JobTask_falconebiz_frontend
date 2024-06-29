import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Auth/signup/Signup";
import Navbar from "./components/Header/Navbar";
import { Toaster } from 'react-hot-toast';
import "./App.css";
import Data from "./components/Data";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster></Toaster>
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
