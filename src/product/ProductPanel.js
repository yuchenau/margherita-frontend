import React, { useState, useEffect } from "react";
import { Grid, Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Pagination from "@material-ui/lab/Pagination";
import ProductCard from "./components/ProductCard";
import { loadProducts } from "../api/product";
// loading spin
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
// import ReactLoading from "react-loading";
import * as legoData from "../utils/legoloading.json";

export default function ProductPanel(props) {
  const [products, setProducts] = useState([]);
  const [LoadingDone, setLoadingDone] = useState(undefined);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    setTimeout(() => {
      loadProducts().then((response) => {
        setLoadingDone(true);
        setProducts(response);
      });
    }, 2000);
  }, []);

  // const toggleButton = () => {
  //   setSelected(!selected);
  // };

  return (
    <div>
      {!LoadingDone ? (
        <FadeIn>
          <div className="d-flex justify-content-center align-items-center">
            <Lottie options={defaultOptions} height={300} width={300} />
          </div>
        </FadeIn>
      ) : (
        <div>
          <Grid>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddCircleOutlineIcon />}
              style={{ marginBottom: 20 }}
            >
              Add New Product
            </Button>
          </Grid>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs key={product.name}>
                <ProductCard
                  id={product._id}
                  avatar={product.avatar}
                  name={product.name}
                  price={product.price}
                  calorie={product.calorie}
                />
              </Grid>
            ))}
          </Grid>
          <Pagination count={5} color="primary" />
        </div>
      )}
    </div>
  );
}
