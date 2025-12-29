import {
 AJOUTER_CARTE,
  SUPPRIMER_CARTE,
 MODIFIER_QUANT,
 NKHABA3_CARTE
} from '../actions/cartActions';
// hadaa d panier pour ajout w nmodifier quantitee fihaa w nzowl shi produit m panier

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case  AJOUTER_CARTE:
      const produitkayn= state.items.find(
        item => item.id === action.payload.id
      );
      
      if (produitkayn) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }]
        };
      }
    
    case SUPPRIMER_CARTE:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    
    case  MODIFIER_QUANT:
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    case NKHABA3_CARTE:
      return {
        ...state,
        items: []
      };
    
    default:
      return state;
  }
};

export default cartReducer;