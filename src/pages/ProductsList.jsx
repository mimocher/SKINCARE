import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterByCategory, filterByPrice } from '../redux/actions/productsActions';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
const ProductsList = () => {
  const dispatch = useDispatch();
  const { filteredProducts, selectedCategory, maxPrice } = useSelector(
    state => state.products
  );
  const categories = [  
    'Tous', 'Sérums', 'Hydratation', 'Anti-âge', 'Masques', 
    'Traitements', 'Sensibles', 'Protection', 'Soins', 
    'Appareils', 'Nettoyage' 
  ];
  const optionstaman = [  { value: 2000, label: 'Tous les prix' }, { value: 100, label: 'Moins de 100 DH' }, { value: 200, label: 'Moins de 200 DH' }, { value: 500, label: 'Moins de 500 DH' }, { value: 1000, label: 'Moins de 1000 DH' }, { value: 1500, label: 'Moins de 1500 DH' }, { value: 2000, label: 'Moins de 2000 DH' }
  ];
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Produits</h1>
        <Link to="/addproduct" style={styles.addBtn}>
                  <FaPlus /> Ajouter
        </Link>
      </div>

      <div style={styles.filters}>
        <select 
          value={selectedCategory} 
               onChange={(e) => dispatch(filterByCategory(e.target.value))}
          style={styles.select}
        >
                {categories.map(cat => (
               <option key={cat} value={cat}>
              {cat === 'Tous' ? 'Toutes les catégories' : cat}
            </option>
          ))}
        </select>
        <select
              value={maxPrice}
              onChange={(e) => dispatch(filterByPrice(Number(e.target.value)))}
           style={styles.select}
        >
          {optionstaman.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div style={styles.grid}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
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
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  addBtn: {
    background: '#ff6b8b',
    color: 'white',
    padding: '8px 15px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  },
  filters: {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap'
  },
  select: {
    padding: '8px',
    border: '1px solid #ddd',
    minWidth: '180px'
  },
  count: {
    marginLeft: 'auto',
    color: '#666',
    fontWeight: '500'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px'
  }
};
export default ProductsList;