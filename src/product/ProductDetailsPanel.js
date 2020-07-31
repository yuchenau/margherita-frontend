import React, { useState, useEffect } from "react";
// child component
import ProductDetailsCard from "./components/ProductDetailsCard";
// api request
import { loadProductById } from "../api/product";

import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as legoData from "../utils/legoloading.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function ProductDetailsPanel(props) {
  const productId = props.productId;
  const pathname = props.pathname;
  const [product, setProduct] = useState({});
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      loadProductById(productId)
        .then((res) => setProduct(res))
        .then(() => setDone(true));
    }, 2000);
  }, [productId]);

  return (
    <div>
      {!done ? (
        <FadeIn>
          <div class="d-flex justify-content-center align-items-center">
            <Lottie options={defaultOptions} height={200} width={200} />
          </div>
        </FadeIn>
      ) : (
        <ProductDetailsCard product={product} pathname={pathname} />
      )}
    </div>
  );
}
