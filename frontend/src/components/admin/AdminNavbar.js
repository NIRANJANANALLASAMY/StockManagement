// src/components/AdminNavbar.js
import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div>
      <nav style={navStyle}>
        <div style={navLeftStyle}>
          <img src="/logo.jpg" alt="Logo" style={{ height: "50px" }} />
          <Link to="/admin/categorypage" style={linkStyle}>Category Page</Link>
          <Link to="/admin/edit-items" style={linkStyle}>Edit Items</Link>
          <Link to="/admin/stock-list" style={linkStyle}>Stock List</Link>
          <Link to="/admin/ByBrand" style={linkStyle}>By Brand</Link>
        </div>
        <div style={navRightStyle}>
          <Link to="/admin/AdminDashboard" style={linkStyle}>Admin Dashboard</Link>
        </div>
      </nav>
      {/* Add this marginTop to ensure content is not hidden behind the navbar */}
      <div style={{ marginTop: '80px' }}>
        {/* Your main content will go here */}
      </div>
    </div>
  );
};

const navStyle = {
  position: "fixed",
  top: 0,
  width: "100%",
  backgroundColor: "#333",
  color: "white",
  padding: "1rem",
  zIndex: 1000,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const navLeftStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px"
};

const navRightStyle = {
  marginRight: "20px"
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

export default AdminNavbar;
