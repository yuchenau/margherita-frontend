import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import Pagination from "@material-ui/lab/Pagination";
import ProductCard from "./components/ProductCard";
import { loadProducts } from "../api/product";

import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
// import ReactLoading from "react-loading";
import * as legoData from "../utils/legoloading.json";

const useStyles = makeStyles({
  root: {},
  pizzaButton: {
    marginLeft: 10,
  },
});

export default function ProductPanel(props) {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [LoadingDone, setLoadingDone] = useState(undefined);
  // const [selected, setSelected] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // const toggleButton = () => {
  //   setSelected(!selected);
  // };

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
              <Button
                className={classes.pizzaButton}
                variant="contained"
                startIcon={<AddIcon />}
              >
                Premium Pizza
              </Button>
              <Button
                className={classes.pizzaButton}
                variant="contained"
                startIcon={<AddIcon />}
              >
                Loaded Pizza
              </Button>
              <Button
                className={classes.pizzaButton}
                variant="contained"
                startIcon={<AddIcon />}
              >
                Favourites Pizza
              </Button>
              <Button
                className={classes.pizzaButton}
                variant="contained"
                startIcon={<AddIcon />}
              >
                Classics Pizza
              </Button>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: 20 }}
              startIcon={<AddCircleOutlineIcon />}
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
