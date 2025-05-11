import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

//import Home from "./components/user/Home";

import Login from "./components/Login";
import AddProductPage from "./components/admin/AddProductPage";
import AdminHome from "./components/admin/AdminHome";
import AdminPage from "./components/admin/AdminPage";
import ManageStock from "./components/admin/ManageStock";
import EditItems from "./components/admin/EditItems";
import StockList from "./components/admin/StockList";
import CategoryPage from "./components/admin/CategoryPage";
import CategoryDetail from "./components/admin/CategoryDetail";
import AdminDashboard from "./components/admin/AdminDashboard";
import ByBrand from "./components/admin/ByBrand";
import AdminNavbar from "./components/admin/AdminNavbar"; // Create this if not exists

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const location = useLocation();
  const userRole = localStorage.getItem("userRole");
  const hideNavbarPaths = ["/"];

  //const showCustomerNavbar = userRole === "customer" && !hideNavbarPaths.includes(location.pathname);
  const showAdminNavbar = userRole === "admin" && !hideNavbarPaths.includes(location.pathname);

  return (
    <>
      
      {showAdminNavbar && <AdminNavbar />}
      
      <Routes>
        <Route path="/" element={<Login />} />
        
         <Route path="/add-product/:brandName" element={<AddProductPage />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/manage-stock" element={<ManageStock />} />
        <Route path="/admin/edit-items" element={<EditItems />} />
        <Route path="/admin/stock-list" element={<StockList />} />
        <Route path="/admin/categorypage" element={<CategoryPage />} />
        <Route path="/category/:id" element={<CategoryDetail />} />
        <Route path="/admin/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/admin/ByBrand" element={<ByBrand />} />
      </Routes>
    </>
  );
}

export default App;
