const loggerMiddleware = (store) => (next) => (action) => {
  console.log('Hadi action li wqeat:', action.type);
  console.log('etat qbl:', store.getState());
  
  const result = next(action);
  
  console.log('w etat apres mise a jour :', store.getState());
  
  return result;
};

export default loggerMiddleware;