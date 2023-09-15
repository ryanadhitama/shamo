const initHome = {
  relatedProducts: []
};

export const productReducer = (state = initHome, action: any) => {
  if (action.type === 'SET_RELATED_PRODUCTS') {
    return {
      ...state,
      relatedProducts: action.value
    };
  }

  return state;
};
