import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions/cartActions';
import { FaTrash, FaMinus, FaPlus, FaShoppingBag } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(state => state.cart.items);

  const handleRemove = (productId) => {
    if (window.confirm('Voulez vous lee supprimer de votree panier ?')) {
      dispatch(removeFromCart(productId));
    }
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) dispatch(updateQuantity(productId, newQuantity));
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div style={styles.emptyCart}>
        <FaShoppingBag size={50} color="#ff6b8b" />
        <h2>Panier vide</h2>
        <button onClick={() => navigate('/products')} style={styles.shopBtn}>
          Voir les produits
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>🛒 Mon Panier</h1>
        <div style={styles.totalBox}>
          <span>Total :</span>
          <span style={styles.totalAmount}>{total.toFixed(2)} DH</span>
          <button style={styles.checkoutBtn}>
            Payer
          </button>
        </div>
      </div>
      
      <div style={styles.cartItems}>
        {cartItems.map(item => (
          <div key={item.id} style={styles.cartItem}>
            <img src={item.image} alt={item.name} style={styles.image} />
            
            <div style={styles.itemInfo}>
              <h3 style={styles.itemName}>{item.name}</h3>
              <p style={styles.price}>{item.price.toFixed(2)} DH</p>
            </div>

            <div style={styles.quantityControl}>
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} style={styles.qtyBtn}>
                <FaMinus />
              </button>
              <span style={styles.quantity}>{item.quantity}</span>
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)} style={styles.qtyBtn}>
                <FaPlus />
              </button>
            </div>

            <div style={styles.itemTotal}>{(item.price * item.quantity).toFixed(2)} DH</div>

            <button onClick={() => handleRemove(item.id)} style={styles.removeBtn}>
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  emptyCart: {
    textAlign: 'center',
    padding: '50px 20px'
  },
  shopBtn: {
    background: '#ff6b8b',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    marginTop: '15px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px'
  },
  title: {
    color: '#ff6b8b'
  },
  totalBox: {
    textAlign: 'right'
  },
  totalAmount: {
    display: 'block',
    color: '#ff6b8b',
    fontSize: '28px',
    fontWeight: 'bold',
    margin: '5px 0 10px 0'
  },
  checkoutBtn: {
    background: '#ff6b8b',
    color: 'white',
    border: 'none',
    padding: '10px 30px',
    cursor: 'pointer'
  },
  cartItems: {
    marginTop: '20px'
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '15px',
    background: 'white',
    marginBottom: '10px'
  },
  image: {
    width: '60px',
    height: '60px',
    objectFit: 'cover'
  },
  itemInfo: {
    flex: 1
  },
  itemName: {
    margin: '0 0 5px 0'
  },
  price: {
    color: '#ff6b8b',
    fontWeight: 'bold',
    margin: 0
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  qtyBtn: {
    background: '#ffe4e8',
    color: '#ff6b8b',
    border: 'none',
    width: '30px',
    height: '30px',
    cursor: 'pointer'
  },
  quantity: {
    fontSize: '16px',
    fontWeight: 'bold',
    minWidth: '30px',
    textAlign: 'center'
  },
  itemTotal: {
    fontWeight: 'bold',
    color: '#ff6b8b',
    minWidth: '80px'
  },
  removeBtn: {
    background: '#ffe4e8',
    color: '#ff6b8b',
    border: 'none',
    padding: '8px',
    cursor: 'pointer'
  }
};

export default Cart;