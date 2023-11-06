import React from "react";
import ProductItem from "../Components/productItem/ProductItem";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import "./products.css";
function Products() {
  const { products } = useSelector((state) => state.products);

  const { ratingValue, sort, byFastDelivery, byStock, searchQuery } =
    useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const transformProducts = () => {
    
    let filteredProducts = [...products];
    if (sort) {
      filteredProducts = filteredProducts.sort((a, b) => {
        return sort == "lowToHigh" ? a.price - b.price : b.price - a.price;
      });
      
    }

    if (ratingValue) {
      filteredProducts = filteredProducts.filter((val, idx) => {
        return val.ratings >= ratingValue;
      });
    }

    if (!byStock) {
      filteredProducts = filteredProducts.filter((prd) => prd.inStock);
    }
    if (byFastDelivery) {
      filteredProducts = filteredProducts.filter((val) => {
        return val.fastDelivery;
      });
    }

    if (searchQuery) {
      let searchedQuery = searchQuery.trim();
      searchedQuery = searchedQuery.toLowerCase();
      filteredProducts = filteredProducts.filter((prd) => {
        return prd.name.toLowerCase().includes(searchedQuery);
      });
    }
    return filteredProducts;
  };

  const handleRating = (rate) => {
    dispatch({ type: "filterByRating", payload: rate });
  };
  return (
    <div className="productsContainer">
      <div className="filter">
        <h1>Filter Products</h1>
        <div className="asc">
          <input
            type="radio"
            id="asc"
            name="group"
            value="lowToHigh"
            onChange={(e) => {
              dispatch({ type: "sortByPrice", payload: e.target.value });
            }}
            checked={sort == "lowToHigh" ? true : false}
          />
          <label htmlFor="asc">Ascending</label>
        </div>

        <div className="dsc">
          <input
            type="radio"
            id="dsc"
            name="group"
            value="highToLow"
            onChange={(e) => {
              dispatch({ type: "sortByPrice", payload: e.target.value });
            }}
            checked={sort == "highToLow" ? true : false}
          />
          <label htmlFor="dsc">Descending</label>
        </div>

        <div className="stock">
          <input
            type="checkbox"
            id="stock"
            name="group"
            onChange={() => dispatch({ type: "filterByStock" })}
            checked={byStock}
          />
          <label htmlFor="stock">Include Out of Stock</label>
        </div>

        <div className="delivery">
          <input
            type="checkbox"
            id="delivery"
            name="group"
            onChange={() => dispatch({ type: "filterByFastDelivery" })}
            checked={byFastDelivery}
          />
          <label htmlFor="delivery">Fast Delivery Only</label>
        </div>

        <div className="filterRating">
          <span>Rating :</span>
          {[...Array(5)].map((_, index) => {
            return (
              <span className="rate" onClick={() => handleRating(index + 1)}>
                {index < ratingValue ? <AiFillStar /> : <AiOutlineStar />}
              </span>
            );
          })}
        </div>

        <div className="clearButton">
          <button
            onClick={() => {
              dispatch({ type: "clearAllFilter" });
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>
      <div className="products">
        <h1>Products</h1>
        <div className="productCont">
          {transformProducts().map((item) => {
            return <ProductItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
