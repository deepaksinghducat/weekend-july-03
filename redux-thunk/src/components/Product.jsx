import React from "react";
import { addToCart } from "../redux/actions/CartAction";
import { useDispatch } from 'react-redux';

const Product = ({data}) => {
  const dispatch = useDispatch();
  
  return (
    <div className="card my-4">
      <img
        src={data.image}
        className="card-img-top"
        alt={data.title}
      />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">
          {data.description}
        </p>
        <p className="card-text">
          Price : ${data.price}
        </p>
        <button className="btn btn-primary" onClick={() => dispatch(addToCart(data))}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
