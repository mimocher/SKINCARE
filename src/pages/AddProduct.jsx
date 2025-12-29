import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/actions/productsActions';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector(state => state.products.products);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: 'Hydratation',
    image: ''
  });

  const categories = ['Hydratation', 'Anti-âge', 'Nettoyage', 'Masques'];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newProduct = {
      id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      category: formData.category,
      image: formData.image || 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400'
    };

    dispatch(addProduct(newProduct));
    alert('Produit ajouté avec succès !');
    navigate('/products');
  };

  return (
    <div style={styles.container}>
      <button onClick={() => navigate('/products')} style={styles.backBtn}>
        <FaArrowLeft /> Retour aux produits
      </button>
      
      <div style={styles.formBox}>
        <h2 style={styles.title}>Ajouter un nouveau produit</h2>
        
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label>Nom du produit *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label>Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              style={styles.textarea}
              rows="4"
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label>Prix (DH) *</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              style={styles.input}
              step="0.01"
              min="0"
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label>Catégorie *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={styles.select}
              required
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div style={styles.formGroup}>
            <label>URL de l'image</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              style={styles.input}
              placeholder="https://example.com/image.jpg"
            />
            <small style={styles.hint}>Laisser vide pour utiliser l'image par défaut</small>
          </div>

          <button type="submit" style={styles.submitBtn}>
            Ajouter le produit
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '0 auto'
  },
  backBtn: {
    backgroundColor: '#95a5a6',
    color: 'white',
    border: 'none',
    padding: '0.6rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  },
  formBox: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  title: {
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#2c3e50'
  },
  formGroup: {
    marginBottom: '1.5rem'
  },
  input: {
    width: '100%',
    padding: '0.7rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    marginTop: '0.3rem'
  },
  textarea: {
    width: '100%',
    padding: '0.7rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    marginTop: '0.3rem',
    fontFamily: 'inherit'
  },
  select: {
    width: '100%',
    padding: '0.7rem',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    marginTop: '0.3rem'
  },
  submitBtn: {
    width: '100%',
    padding: '0.8rem',
    backgroundColor: '#27ae60',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '1rem'
  },
  hint: {
    color: '#7f8c8d',
    fontSize: '0.85rem',
    marginTop: '0.3rem',
    display: 'block'
  }
};

export default AddProduct;