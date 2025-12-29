import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';
import { FaShoppingCart, FaStore } from 'react-icons/fa';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav style={styles.naavbar}>
      <Link to="/" style={styles.logo}>
        <FaStore size={20} />
        <span>Maroua Glow</span>
      </Link>

      <div style={styles.links}>
        <Link to="/about" style={styles.link}>À propos</Link>
        <Link to="/products" style={styles.link}>Nos Produits</Link>

        <Link to="/cart" style={styles.cart}>
          <FaShoppingCart />
          <span>Votre panier</span>
          <span style={styles.badge}>{totalItems}</span>
        </Link>

        <button onClick={handleLogout} style={styles.logoutBtn}>
          Déconnexion
        </button>
      </div>
    </nav>
  );
};

const styles = {
  naavbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2.5rem',
    backgroundColor: '#fff',
    borderBottom: '1px solid #f0f0f0',
    fontFamily: 'Segoe UI, sans-serif'
  },

  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: '#c2185b',
    textDecoration: 'none'
  },

  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem'
  },

  link: {
    textDecoration: 'none',
    color: '#444',
    fontWeight: '500',
    transition: '0.3s'
  },

  cart: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.4rem',
    textDecoration: 'none',
    color: '#444',
    fontWeight: '500',
    position: 'relative'
  },

  badge: {
    backgroundColor: '#c2185b',
    color: '#fff',
    borderRadius: '50%',
    padding: '2px 8px',
    fontSize: '0.8rem',
    marginLeft: '4px'
  },

  logoutBtn: {
    backgroundColor: '#c2185b',
    color: '#fff',
    border: 'none',
    padding: '0.5rem 1.2rem',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: '500'
  }
};

export default Navbar;
