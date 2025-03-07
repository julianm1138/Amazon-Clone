export const initialState = {
  basket: [],
};

export const getBasketTotal = (basket) =>
  basket?.reduce((acc, value) => acc + value.price, 0);
export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};
