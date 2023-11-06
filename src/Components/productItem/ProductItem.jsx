import React from "react";
import "./productItem.css";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../../data/products";
function ProductItem({ item }) {
  const { cartProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch({ type: "remove-from-cart", payload: id });
     dispatch({ type: "calculateTotal" });
  };

  const addToCart = (cartItem) => {
    dispatch({ type: "add-to-cart", payload: { ...cartItem, quantity: 1 } });
    dispatch({ type: "calculateTotal" });
  };
  return (
    <div className="product">
      <div className="imgCont">
        <img src={item.image} alt="" />
      </div>
      <div className="product-Details">
        <h3 className="name">{item.name}</h3>
        <div className="price">₹ {item.price}</div>
        <div className="delivery">
          {item.fastDelivery ? "Fast Delivery" : "4 Days Delivery"}
        </div>
        <div className="rating">
          {[...Array(5)].map((val, idx) => {
            if (idx < item.ratings) {
              return <AiFillStar />;
            } else {
              return <AiOutlineStar />;
            }
          })}
        </div>
      </div>
      <div className="btn">
        {cartProducts.length > 0 &&
        cartProducts.some((val) => val.id == item.id) ? (
          <button id="danger" onClick={() => removeFromCart(item.id)}>
            Remove From Cart
          </button>
        ) : (
          <button onClick={() => addToCart(item)} disabled={!item.inStock}>
            {!item.inStock ? "Out Of Stock" : "Add To Cart"}
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
