const initHome = {
  relatedProducts: [],
  favoriteProducts: []
};

export const productReducer = (state = initHome, action: any) => {
  if (action.type === 'SET_RELATED_PRODUCTS') {
    return {
      ...state,
      relatedProducts: action.value
    };
  }

  if (action.type === 'SET_FAVORITE_PRODUCTS') {
    return {
      ...state,
      favoriteProducts: action.value
    };
  }

  return state;
};
