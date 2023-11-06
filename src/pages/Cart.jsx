import React from "react";
import "./cart.css";
import CartProductItem from "../Components/cartProductItem/CartProductItem";
import { useSelector } from "react-redux";
function Cart() {
  const { cartProducts, total } = useSelector((state) => state.products);
  return (
    <div className="cartPage">
      {cartProducts.length > 0 ? (
        <>
          <div className="cartProductsCont">
            {cartProducts.length > 0 &&
              cartProducts.map((val) => {
                return <CartProductItem key={val.id} val={val} />;
              })}
          </div>
          <div className="total">
            <div>
              <h2>Subtotal ({cartProducts.length}) items</h2>
              <h3>Total: ₹ {total}</h3>
              <div className="button">
                <button>Proceed to Checkout</button>
              </div>
            </div>
          </div>{" "}
        </>
      ) : (
        <h3 className="no-product">Cart Empty !</h3>
      )}
    </div>
  );
}

export default Cart;
