import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector,useDispatch } from "react-redux";
function Navbar() {
  const { cartProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch()
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png"
          alt=""
        />
      </div>
      <div className="input">
        <input
          type="text"
          placeholder="Search a product..."
          onChange={(e) =>
            dispatch({ type: "filterBySearch", payload: e.target.value })
          }
        />
      </div>
      <div className="tabs">
        <div className="prd">
          <Link to="/">products</Link>
        </div>
        <div className="cart">
          <Link to="/cart">
            <BsFillCartFill />
            <span id="noOfPrd">{cartProducts.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
