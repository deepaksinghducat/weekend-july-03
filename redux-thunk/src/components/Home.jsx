import React from "react";
import { useEffect } from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/ProductAction";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="row">
      {products.length > 0 &&
        products.map((product) => (
          <div className="col-sm-3" key={product.id}>
            <Product data={product}/>
          </div>
        ))}
    </div>
  );
};

export default Home;
