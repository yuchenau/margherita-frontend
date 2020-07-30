import React, { useState, useEffect } from "react";
// child component
import ProductDetailsCard from "./components/ProductDetailsCard";
// api request
import { loadProductById } from "../api/product";

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
      <ProductDetailsCard product={product} pathname={pathname} />
    </div>
  );
}
