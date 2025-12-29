export const CONNEXION = 'CONNEXION';
export const DECONNEXION = 'DECONNEXION';
export const INSCRIPTION = 'INSCRIPTION';

export const login = (username, password) => {
  return (dispatch, getState) => {
    const { users } = getState().auth;
    const user = users.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      dispatch({
        type: CONNEXION,
        payload: user
      });
      return { success: true };
    } else {
      return { success: false, message: "Login ou mot de passe invalide" };
    }
  };
};

export const logout = () => ({
  type: DECONNEXION
});

export const register = (userData) => ({
  type: INSCRIPTION,
  payload: userData
});