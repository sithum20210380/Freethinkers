import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminDashboard from '../Pages/adminDashboard/index';
import SignupPage from '../Pages/Signup/index';
import Login from '../Pages/Login/index'
import NavBar from '../components/navbar/index';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignupPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<>
        <NavBar/>
        <AdminDashboard/>
        </>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;