import { useReducer, useEffect } from "react";

const initialState = {
  count: parseInt(localStorage.getItem("count")) || 0,
  electronicCardsData:
    JSON.parse(localStorage.getItem("electronicCardsData")) || [],
};

const ACTIONS = {
  ADD_TO_CART: "addToCart",
  REMOVE_FROM_CART: "removeFromCart",
  REMOVE_ALL_CARTS: "removeAllCarts",
};

const Reduce = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return {
        ...state,
        electronicCardsData: [...state.electronicCardsData, action.payload],
        count: state.count + 1,
      };
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        electronicCardsData: state.electronicCardsData.filter(
          (product) => product.id !== action.payload
        ),
        count: state.count - 1,
      };

    case ACTIONS.REMOVE_ALL_CARTS:
      return {
        count: 0,
        electronicCardsData: [],
      };

    default:
      return state;
  }
};

const useCart = () => {
  const [state, dispatch] = useReducer(Reduce, initialState);

  useEffect(() => {
    const electronicCardsData =
      JSON.parse(localStorage.getItem("electronicCardsData")) || [];
    const count = parseInt(localStorage.getItem("count")) || 0;
    dispatch({
      type: "INITIALIZE_CART",
      payload: { electronicCardsData, count },
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "electronicCardsData",
      JSON.stringify(state.electronicCardsData)
    );
    localStorage.setItem("count", state.count);
  }, [state]);

  const addToCart = (product) =>
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
  const removeFromCart = (productId) =>
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: productId });

  const removeAllCarts = () => {
    dispatch({ type: ACTIONS.REMOVE_ALL_CARTS });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    removeAllCarts,
  };
};

export default useCart;
