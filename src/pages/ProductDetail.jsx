import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const product = useSelector(state => 
    state.products.products.find(p => p.id === Number(id))
  );

  if (!product) {
    return (
      <div style={styles.container}>
        <p>Ce produit n est pas trouve</p>
        <button onClick={() => navigate('/products')} style={styles.backBtn}>
          Retour aux produits
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert('Produit ajoute aveec succeess !');
  };

  return (
    <div style={styles.container}>
      <button onClick={() => navigate('/products')} style={styles.backBtn}>
        <FaArrowLeft /> Retour
      </button>
      
      <div style={styles.content}>
        <img src={product.image} alt={product.name} style={styles.image} />
        
        <div style={styles.details}>
          <h1 style={styles.name}>{product.name}</h1>
          <p style={styles.category}>{product.category}</p>
          <p style={styles.description}>{product.description}</p>
          <p style={styles.price}>{product.price.toFixed(2)} DH</p>
          
          <button onClick={handleAddToCart} style={styles.addBtn}>
            <FaShoppingCart /> Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '900px',
    margin: '0 auto'
  },
  backBtn: {
    background: '#ff6b8b',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    cursor: 'pointer',
    marginBottom: '20px'
  },
  content: {
    display: 'flex',
    gap: '40px'
  },
  image: {
    width: '50%',
    height: '400px',
    objectFit: 'cover'
  },
  details: {
    flex: 1
  },
  name: {
    color: '#333',
    marginBottom: '10px'
  },
  category: {
    color: '#666',
    marginBottom: '15px'
  },
  description: {
    color: '#555',
    lineHeight: '1.5',
    marginBottom: '20px'
  },
  price: {
    color: '#ff6b8b',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  addBtn: {
    background: '#ff6b8b',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    cursor: 'pointer',
    fontSize: '16px'
  }
};

export default ProductDetail;