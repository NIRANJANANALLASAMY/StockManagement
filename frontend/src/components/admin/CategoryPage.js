import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [materialTypes, setMaterialTypes] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newMaterial, setNewMaterial] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedCategories = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(storedCategories);

    const storedMaterials = JSON.parse(localStorage.getItem("materialTypes")) || [];
    setMaterialTypes(storedMaterials);
  }, []);

  const handleAddCategory = () => {
    if (newCategory) {
      const updated = [...categories, { name: newCategory }];
      setCategories(updated);
      localStorage.setItem("categories", JSON.stringify(updated));
      setNewCategory("");
    }
  };

  const handleAddMaterial = () => {
    if (newMaterial) {
      const updated = [...materialTypes, newMaterial];
      setMaterialTypes(updated);
      localStorage.setItem("materialTypes", JSON.stringify(updated));
      setNewMaterial("");
      setShowPopup(false);
    }
  };

  const handleMaterialClick = (material) => {
    navigate(`/category-details/${material}`);
  };

  const handleClearAll = () => {
    localStorage.removeItem("categories");
    localStorage.removeItem("materialTypes");
    setCategories([]);
    setMaterialTypes([]);
  };

  return (
    <div style={pageStyle}>
      <h2>Manage Categories</h2>

      <div style={inputContainerStyle}>
        <button onClick={() => setShowPopup(true)} style={popupButtonStyle}>
          Add Material Type
        </button>

        <button onClick={handleClearAll} style={{ ...buttonStyle, backgroundColor: "#dc3545" }}>
          Clear All Data
        </button>
      </div>

      <h3>Material Types</h3>
      <div style={cardContainerStyle}>
        {materialTypes.map((mat, idx) => (
          <div key={idx} style={materialCardStyle} onClick={() => handleMaterialClick(mat)}>
            {mat}
          </div>
        ))}
      </div>

      {showPopup && (
        <div style={popupOverlayStyle}>
          <div style={popupStyle}>
            <h4>Add Material Type</h4>
            <input
              type="text"
              value={newMaterial}
              onChange={(e) => setNewMaterial(e.target.value)}
              style={inputStyle}
              placeholder="Material Type"
            />
            <div style={{ marginTop: "10px" }}>
              <button onClick={handleAddMaterial} style={buttonStyle}>Add</button>
              <button onClick={() => setShowPopup(false)} style={backButtonStyle}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const pageStyle = {
  textAlign: "center",
  padding: "40px",
};

const inputContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  marginBottom: "30px",
};

const inputStyle = {
  padding: "8px",
  fontSize: "14px",
  width: "200px",
};

const buttonStyle = {
  padding: "8px",
  fontSize: "14px",
  backgroundColor: "#333",
  color: "white",
  border: "none",
  borderRadius: "4px",
  width: "200px",
};

const popupButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#28a745",
};

const backButtonStyle = {
  ...buttonStyle,
  backgroundColor: "#6c757d",
  marginLeft: "10px",
};

const cardContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "15px",
  justifyContent: "center",
};

const materialCardStyle = {
  width: "150px",
  padding: "15px",
  backgroundColor: "#e6f7ff",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold",
};

const popupOverlayStyle = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: "rgba(0,0,0,0.3)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const popupStyle = {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "8px",
  textAlign: "center",
};

export default CategoryPage;
