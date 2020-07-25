import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Chip
} from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import ProductCard from "./components/ProductCard";
import { loadProducts } from "../api/product";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
// import ReactLoading from "react-loading";
import * as legoData from "../utils/legoloading.json";

export default function PizzaPanel(props) {
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
        // console.log(response);
        setLoadingDone(true);
        setProducts(response);
      });
    }, 3000);
  }, []);

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
          <Grid
            container
            spacing={2}
            alignItems="center"
            style={{ marginBottom: 15 }}
          >
            <Grid style={{ marginLeft: 10 }}>
              <Chip label="Premium" clickable />
              <Chip label="Loaded" clickable />
              <Chip label="Favourites" clickable />
              <Chip label="Classics" clickable />
            </Grid>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: 10 }}
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
