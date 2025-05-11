import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar'; // Optional, can remove if not needed

const StockList = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    fetchStock();
  }, []);
  
  const fetchStock = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
      setSortedProducts(res.data);
    } catch (error) {
      console.error('Error fetching stock:', error);
    }
  };

  const sortLowToHigh = () => {
    const sorted = [...products].sort((a, b) => a.qty - b.qty);
    setSortedProducts(sorted);
  };

  const sortHighToLow = () => {
    const sorted = [...products].sort((a, b) => b.qty - a.qty);
    setSortedProducts(sorted);
  };

  const sortAlphabetical = () => {
    const sorted = [...products].sort((a, b) => a.name.localeCompare(b.name));
    setSortedProducts(sorted);
  };

  return (
    <>
      <AdminNavbar />
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #74ebd5, #ACB6E5)',
        padding: '40px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px', color: '#003366' }}>📦 Stock Availability</h2>

        <table style={{
          margin: 'auto',
          width: '70%',
          borderCollapse: 'collapse',
          backgroundColor: '#ffffffdd',
          borderRadius: '12px',
          overflow: 'hidden'
        }}>
          <thead style={{ backgroundColor: '#4682B4', color: '#fff' }}>
            <tr>
              <th style={thStyle}>Product Name</th>
              <th style={thStyle}>Available Quantity</th>
            </tr>
          </thead>
          <tbody>
            {sortedProducts.map((prod) => (
              <tr key={prod._id}>
                <td style={tdStyle}>{prod.name}</td>
                <td style={tdStyle}>{prod.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px'
        }}>
          <button onClick={sortLowToHigh} style={btnStyle}>Qty: Low to High</button>
          <button onClick={sortHighToLow} style={btnStyle}>Qty: High to Low</button>
          <button onClick={sortAlphabetical} style={btnStyle}>Alphabetical</button>
        </div>
      </div>
    </>
  );
};

const thStyle = {
  padding: '12px',
  borderBottom: '2px solid #ddd'
};

const tdStyle = {
  padding: '12px',
  borderBottom: '1px solid #eee'
};

const btnStyle = {
  padding: '12px 20px',
  width: '180px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#0077b6',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '14px',
  cursor: 'pointer',
  transition: '0.3s'
};

export default StockList;
