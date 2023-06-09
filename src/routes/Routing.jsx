import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Login from '@/pages/Auth/Login';

function Routing() {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/login/*" element={<Login />} />
    </Routes>
  );
}

export default Routing;
