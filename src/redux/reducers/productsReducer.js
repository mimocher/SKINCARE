import { initialProducts } from '../../data/products';
import {
  ADD_PRODUCT,
  SET_PRODUCTS,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE
} from '../actions/productsActions';

const initialState = {
  products: initialProducts,
  filteredProducts: initialProducts,
  loading: false,
  error: null,
  selectedCategory: "all",
  maxPrice: 1000
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload
      };
    
    case ADD_PRODUCT:
      const newProducts = [...state.products, action.payload];
      return {
        ...state,
        products: newProducts,
        filteredProducts: applyFilters(
          newProducts,
          state.selectedCategory,
          state.maxPrice
        )
      };
    
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
        filteredProducts: applyFilters(
          state.products,
          action.payload,
          state.maxPrice
        )
      };
    
    case FILTER_BY_PRICE:
      return {
        ...state,
        maxPrice: action.payload,
        filteredProducts: applyFilters(
          state.products,
          state.selectedCategory,
          action.payload
        )
      };
    
    default:
      return state;
  }
};
const applyFilters = (products, category, maxPrice) => {
  let filtered = products;
  
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }
  
  if (maxPrice > 0) {
    filtered = filtered.filter(p => p.price <= maxPrice);
  }
  
  return filtered;
};

export default productsReducer;