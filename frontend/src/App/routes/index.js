import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import AdminDashboard from '../Pages/AdminDashboard';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminDashboard/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;