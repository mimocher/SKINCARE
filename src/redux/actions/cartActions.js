export const AJOUTER_CARTE = 'AJOUTER_CARTE';
export const SUPPRIMER_CARTE = 'SUPPRIMER_CARTE';
export const MODIFIER_QUANT = 'MODIFIER_QUANT';
export const NKHABA3_CARTE = 'NKHABA3_CARTE ';

export const addToCart = (product) => ({
  type: AJOUTER_CARTE,
  payload: product
});

export const removeFromCart = (productId) => ({
  type: SUPPRIMER_CARTE,
  payload: productId
});

export const updateQuantity = (productId, quantity) => ({
  type: MODIFIER_QUANT,
  payload: { productId, quantity }
});

export const clearCart = () => ({
  type: NKHABA3_CARTE
});