export const ADD_PRODUCT = 'ADD_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
export const FILTER_BY_PRICE = 'FILTER_BY_PRICE';

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
});

export const filterByCategory = (category) => ({
  type: FILTER_BY_CATEGORY,
  payload: category
});

export const filterByPrice = (maxPrice) => ({
  type: FILTER_BY_PRICE,
  payload: maxPrice
});