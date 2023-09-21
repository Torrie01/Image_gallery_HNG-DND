import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Login from './components/Login';
import Gallery from './components/Gallery';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/" element={<Outlet />} />
    </Routes>
  );
}

export default App;
