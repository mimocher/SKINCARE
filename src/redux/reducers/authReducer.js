import { CONNEXION, DECONNEXION, INSCRIPTION } from '../actions/authActions';

const initialState = {
  isAuthenticated: false,
  user: null,
  users: [
    {
      nom: "Admin",
      prenom: "User",
      username: "admin",
      email: "admin@example.com",
      password: "admin123"
    }
  ]
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONNEXION:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    
    case DECONNEXION:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    
    case INSCRIPTION:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    
    default:
      return state;
  }
};

export default authReducer;