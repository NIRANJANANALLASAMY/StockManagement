import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';

const EditStockList = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [qty, setQty] = useState('');
  const [editingId, setEditingId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!name || !price || !qty) {
      alert('Please fill all fields!');
      return;
    }

    const updatedProduct = {
      _id: editingId || Date.now().toString(),
      name,
      price: parseFloat(price),
      qty: parseInt(qty),
      amount: parseFloat(price) * parseInt(qty),
    };

    if (editingId) {
      const updatedList = products.map(p =>
        p._id === editingId ? updatedProduct : p
      );
      setProducts(updatedList);
      setEditingId(null);
    } else {
      setProducts([...products, updatedProduct]);
    }

    setName('');
    setPrice('');
    setQty('');
  };

  const handleEdit = (product) => {
    setName(product.name);
    setPrice(product.price);
    setQty(product.qty);
    setEditingId(product._id);
  };

  const handleDelete = (id) => {
    const filtered = products.filter((p) => p._id !== id);
    setProducts(filtered);
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  };

  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'center',
  };

  const inputStyle = {
    width: '100%',
    padding: '6px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '6px 12px',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <>
      <AdminNavbar />
      <div style={{ padding: '40px 20px' }}>
        <h2>{editingId ? 'Edit Product' : 'Add Product'}</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>Product Name</th>
              <th style={thTdStyle}>Price</th>
              <th style={thTdStyle}>Qty</th>
              <th style={thTdStyle}>Amount</th>
              <th style={thTdStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={thTdStyle}>
                <input style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} placeholder="Item Name" />
              </td>
              <td style={thTdStyle}>
                <input style={inputStyle} type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price" />
              </td>
              <td style={thTdStyle}>
                <input style={inputStyle} type="number" value={qty} onChange={(e) => setQty(e.target.value)} placeholder="Enter Qty" />
              </td>
              <td style={thTdStyle}>
                <input style={inputStyle} type="text" value={price && qty ? price * qty : ''} readOnly placeholder="Total" />
              </td>
              <td style={thTdStyle}>
                <button
                  onClick={handleAddOrUpdate}
                  style={{
                    ...buttonStyle,
                    backgroundColor: editingId ? '#2196F3' : '#4CAF50',
                  }}
                >
                  {editingId ? 'Update' : 'Add'}
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>Products</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thTdStyle}>Item Name</th>
              <th style={thTdStyle}>Price</th>
              <th style={thTdStyle}>Qty</th>
              <th style={thTdStyle}>Amount</th>
              <th style={thTdStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod._id}>
                <td style={thTdStyle}>{prod.name}</td>
                <td style={thTdStyle}>{prod.price}</td>
                <td style={thTdStyle}>{prod.qty}</td>
                <td style={thTdStyle}>{prod.amount}</td>
                <td style={thTdStyle}>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <button
                      onClick={() => handleEdit(prod)}
                      style={{ ...buttonStyle, backgroundColor: 'green' }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(prod._id)}
                      style={{ ...buttonStyle, backgroundColor: '#f44336' }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EditStockList;
