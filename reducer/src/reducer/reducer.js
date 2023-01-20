export const initailState = {
  cart: [],
  user: null,
};

const reducer = (state, action) => {
  console.log("log:", action.id);

  switch (action.type) {
    case "SET_USER":
      //we can set user here
      break;
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.itemDetils],
      };
    //logic to add an item to the cart
    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];

      const index = state.cart.findIndex((c) => c.id == action.id);

      if (index > 0) {
        newCart.splice(index, 1);
      }
      return { ...state, newCart };

    //logic to remove an item from the cart
    default:
      return state;
  }
};

export default reducer;
