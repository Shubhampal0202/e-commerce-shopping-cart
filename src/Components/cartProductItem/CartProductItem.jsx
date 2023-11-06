import React, { useState } from "react";
import "./cartProductItem.css";
import { AiFillDelete } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
function CartProductItem({ val }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  
  const handleSelect = (id,e) => {
    setQuantity(e.target.value);
    dispatch({ type: "changeQuantity", payload: { id, qty: e.target.value } });
     dispatch({ type: "calculateTotal" });
  };

  const deleteProduct = (id) => {
    dispatch({ type: "deleteProduct", payload: id });
    dispatch({ type: "calculateTotal" });
  };

  return (
    <div className="cartProduct">
      <div className="cartProductName">
        <img src={val.image} alt="" />
        <span>{val.name}</span>
      </div>
      <div className="cartProductPrice">₹ {val.price}</div>
      <div className="cartProductRating">
        {[...Array(5)].map((v, i) => {
          if (i < val.ratings) {
            return <AiFillStar />;
          } else {
            return <AiOutlineStar />;
          }
        })}
      </div>
      <div className="cartProductquantity">
        <select value={quantity} onChange={(e)=>handleSelect(val.id,e)} className="select">
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
      </div>
      <div className="cartProductDelete">
        <AiFillDelete onClick={() => deleteProduct(val.id)} />
      </div>
    </div>
  );
}

export default CartProductItem;
