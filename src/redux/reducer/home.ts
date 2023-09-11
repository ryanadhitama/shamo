const initHome = {
  categories: [],
  popular: [],
  products: []
};

export const homeReducer = (state = initHome, action: any) => {
  if (action.type === 'SET_CATEGORIES') {
    return {
      ...state,
      categories: action.value
    };
  }

  if (action.type === 'SET_POPULAR') {
    return {
      ...state,
      popular: action.value
    };
  }

  if (action.type === 'SET_PRODUCTS') {
    return {
      ...state,
      products: action.value
    };
  }

  return state;
};
