import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import AdminLayout from './layouts/AdminLayout';
import DashboardHome from './pages/DashboardHome';
import ClientsList from './pages/ClientsList';
import ClientProfile from './pages/ClientProfile';
import VendorsList from './pages/VendorsList';
import AddVendor from './pages/AddVendor';
import DeliveryManList from './pages/DeliveryManList';
import AddDeliveryMan from './pages/AddDeliveryMan';
import ViewDeliveryMan from './pages/ViewDeliveryMan';
import EditDeliveryMan from './pages/EditDeliveryMan';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected Admin Routes Wrapper */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardHome />} />
          <Route path="clients" element={<ClientsList />} />
          <Route path="clients/:id" element={<ClientProfile />} />
          <Route path="vendors" element={<VendorsList />} />
          <Route path="vendors/add" element={<AddVendor />} />
          <Route path="delivery-man" element={<DeliveryManList />} />
          <Route path="delivery-man/add" element={<AddDeliveryMan />} />
          <Route path="delivery-man/view/:id" element={<ViewDeliveryMan />} />
          <Route path="delivery-man/edit/:id" element={<EditDeliveryMan />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
