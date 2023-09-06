const initHome = {
  categories: []
};

export const homeReducer = (state = initHome, action: any) => {
  if (action.type === 'SET_CATEGORIES') {
    return {
      ...state,
      categories: action.value
    };
  }

  return state;
};
