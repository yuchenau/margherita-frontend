import React, { useState, useEffect } from "react";
import { loadProductById } from "../api/product";
import ProductDetailsCard from "./components/ProductDetailsCard";

export default function ProductDetailsPanel(props) {
  const productId = props.productId;
  const pathname = props.pathname;
  const [product, setProduct] = useState({});

  useEffect(() => {
    // fetch pizza data by id
    loadProductById(productId).then((res) => setProduct(res));
  }, [productId]);

  return (
    <div>
      {/* <h1>This is pizza details for product Id: {props.productId} </h1> */}
      <ProductDetailsCard product={product} pathname={pathname} />
    </div>
  );
}
