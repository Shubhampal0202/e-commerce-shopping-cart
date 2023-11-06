import { products } from "../../data/products";
const initialState = {
  products: products,
  cartProducts: [],
  total: 0,
};
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add-to-cart":
      return {
        ...state,
        cartProducts: [...state.cartProducts, action.payload],
      };
    case "remove-from-cart":
      return {
        ...state,
        cartProducts: state.cartProducts.filter((f) => f.id != action.payload),
      };
    case "calculateTotal":
      let sum = 0;
      sum = state.cartProducts.reduce((accum, currVal) => {
        return accum + currVal.price * currVal.quantity;
      }, 0);
      return { ...state, total: sum };
    case "deleteProduct":
      return {
        ...state,
        cartProducts: state.cartProducts.filter((p) => p.id != action.payload),
      };
    case "changeQuantity":
      return {
        ...state,
        cartProducts: state.cartProducts.map((val) =>
          val.id == action.payload.id
            ? { ...val, quantity: action.payload.qty }
            : { ...val }
        ),
      };

    default:
      return state;
  }
};
