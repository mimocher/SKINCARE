import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaEye } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert('Produit ajouté au panier !');
  };

  const handleViewDetail = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div style={styles.content}>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.category}>{product.category}</p>
        <p style={styles.price}>{product.price.toFixed(2)} DH</p>
        <div style={styles.buttons}>
          <button onClick={handleAddToCart} style={styles.cartBtn}>
             Ajouter
          </button>
          <button onClick={handleViewDetail} style={styles.detailBtn}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    cursor: 'pointer'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  content: {
    padding: '1rem'
  },
  name: {
    fontSize: '1.1rem',
    margin: '0.5rem 0'
  },
  category: {
    color: '#7f8c8d',
    fontSize: '0.9rem'
  },
  price: {
    fontSize: '1.3rem',
    color: '#5877bfff',
    fontWeight: 'bold',
    margin: '0.5rem 0'
  },
  buttons: {
    display: 'flex',
    gap: '0.5rem',
    marginTop: '1rem'
  },
  cartBtn: {
    flex: 1,
    backgroundColor: `#ff6b8b`,
    color: 'white',
    border: 'none',
    padding: '0.6rem',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.3rem'
  },
  detailBtn: {
    flex: 1,
    backgroundColor: '#54c587ff',
    color: 'white',
    border: 'none',
    padding: '0.6rem',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.3rem'
  }
};

export default ProductCard;