import React from 'react';
import Landing_page from './Pages/Landing_page';
import Login from './Pages/Login';
import Signup from './Pages/Signin';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';






export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing_page />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
