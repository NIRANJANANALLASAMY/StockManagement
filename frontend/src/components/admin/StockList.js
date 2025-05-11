import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';

const DailySaleUpdate = () => {
  const [materialName, setMaterialName] = useState('');
  const [todaysSale, setTodaysSale] = useState('');
  const [salesData, setSalesData] = useState([]);

  const currentDate = new Date().toLocaleDateString();

  const handleUpdate = () => {
    if (!materialName || !todaysSale) {
      alert('Please fill all fields!');
      return;
    }

    const updatedEntry = {
      id: Date.now().toString(),
      materialName,
      todaysSale: parseInt(todaysSale),
    };

    setSalesData([...salesData, updatedEntry]);
    setMaterialName('');
    setTodaysSale('');
  };

  const inputStyle = {
    padding: '8px',
    marginRight: '10px',
    width: '200px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '8px',
    width: '200px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thTdStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'center',
  };

  return (
    <>
      <AdminNavbar />
      <div style={{ padding: '40px 20px' }}>
        <h2>Daily Sale Update</h2>
        <p><strong>Date:</strong> {currentDate}</p>

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Material Name"
            value={materialName}
            onChange={(e) => setMaterialName(e.target.value)}
            style={inputStyle}
          />
          <input
            type="number"
            placeholder="Today's Sale (Qty)"
            value={todaysSale}
            onChange={(e) => setTodaysSale(e.target.value)}
            style={inputStyle}
          />
          <button onClick={handleUpdate} style={buttonStyle}>
            Update
          </button>
        </div>

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>Material Name</th>
              <th style={thTdStyle}>Today's Sale</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((item) => (
              <tr key={item.id}>
                <td style={thTdStyle}>{item.materialName}</td>
                <td style={thTdStyle}>{item.todaysSale}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DailySaleUpdate;
