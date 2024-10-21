/** @format */

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LogIn from "../pages/LogIn";
import UserManagement from "../pages/UserManagement";
import SbuscriptionManagement from "../pages/SubscriptionManagement";
import AdminLayout from "../components/layout/adminLayout";
import TrainingManagement from "../pages/TrainingManagement";
import TrainingManagementVideo from "../pages/TrainingManagementVideo";
import Settings from "../pages/Settings";
import Support from "../pages/Support";
import ComparableCompanies from "../pages/ComparableCompanies";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminLayout />}>
          <Route
            path='/dashboard'
            element={<Dashboard />}
          />
          <Route
            path='/user-management'
            exact
            element={<UserManagement />}
          />
          <Route
            path='/subscription-management'
            element={<SbuscriptionManagement />}
          />
          <Route
            path='/training-management'
            element={<TrainingManagement />}
          />
          <Route
            path='/training-management-video'
            element={<TrainingManagementVideo />}
          />
          <Route
            path='/support'
            element={<Support />}
          />
          <Route
            path='/comparable-companies'
            element={<ComparableCompanies />}
          />
          <Route
            path='/settings'
            element={<Settings />}
          />
        </Route>
        <Route
          path='/'
          element={<LogIn />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
