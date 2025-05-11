import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ByBrand = () => {
  const [brands, setBrands] = useState([]);
  const [newBrand, setNewBrand] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedBrands = JSON.parse(localStorage.getItem("brands")) || [];
    setBrands(storedBrands);
  }, []);

  const handleAddBrand = () => {
    console.log('Button clicked');
    if (newBrand.trim()) {
      const updatedBrands = [...brands, { name: newBrand.trim(), products: [] }];
      console.log("Updated Brands:", updatedBrands);
      setBrands(updatedBrands);
      localStorage.setItem("brands", JSON.stringify(updatedBrands));
      setNewBrand("");
    } else {
      console.error("Brand name cannot be empty or just spaces");
    }
  };

  const handleBrandClick = (brand) => {
    navigate(`/add-product/${brand.name}`);
  };

  return (
    <div style={pageStyle}>
      <h2>Manage Brands</h2>

      <div style={inputContainerStyle}>
        <input
          type="text"
          placeholder="Enter Brand Name"
          value={newBrand}
          onChange={(e) => setNewBrand(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleAddBrand} style={buttonStyle}>
          Add Brand
        </button>
      </div>
<button
  onClick={() => {
    localStorage.removeItem("brands");
    setBrands([]);
  }}
  style={{ ...buttonStyle, backgroundColor: "#dc3545" }}
>
  Clear All Brands
</button>

      <div style={cardContainerStyle}>
        {brands.map((brand, idx) => (
          <div
            key={idx}
            style={brandCardStyle}
            onClick={() => handleBrandClick(brand)}
          >
            {brand.name}
          </div>
        ))}
      </div>
    </div>
  );
};

const pageStyle = {
  textAlign: "center",
  padding: "50px",
};

const inputContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  marginBottom: "20px",
};

const inputStyle = {
  padding: "10px",
  fontSize: "14px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  width: "200px",
};

const buttonStyle = {
  padding: "10px",
  fontSize: "14px",
  backgroundColor: "#28a745",
  color: "white",
  border: "none",
  borderRadius: "6px",
  width: "120px",
};

const cardContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "25px",
  justifyContent: "center",
};

const brandCardStyle = {
  width: "160px",
  padding: "25px",
  backgroundColor: "#e0e0e0",
  borderRadius: "10px",
  cursor: "pointer",
  fontWeight: "bold",
  textAlign: "center",
  boxShadow: "0 0 5px rgba(0,0,0,0.1)",
};

export default ByBrand;
