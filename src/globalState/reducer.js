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
    case "REMOVE_FROM_BASKET": {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cannot remove product ${action.id} `);
      }

      return {
        ...state,
        basket: newBasket,
      };
    }

    default:
      return state;
  }
};
