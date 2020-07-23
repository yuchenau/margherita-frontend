import React, { useState, useEffect } from "react";
// Components
import { Grid, Button, ButtonGroup, Typography } from "@material-ui/core";
import ProductCard from './components/ProductCard'

// Functions
import { loadProducts } from "../api/product";
import { keys } from "@material-ui/core/styles/createBreakpoints";

export default function PizzaPanel(props) {
  const [products, setProducts] = useState([]);
  const [isLoading] = useState(false);
  const [error] = useState(null);

  useEffect(() => {
    loadProducts().then((response) => {
      console.log(response);
      setProducts(response);
    });
  },[]);

  return (
    <div>
      <Grid container spacing={2} alignItems="center" style={{ marginBottom:15 }}>
        <Grid xs={6}>
          <Typography variant="p" display="inline" style={{ marginRight:10 }}>Filter</Typography>
          <ButtonGroup variant="contained">
            <Button>Premium</Button>
            <Button>Loaded</Button>
            <Button>Favourites</Button>
            <Button>Classics</Button>
          </ButtonGroup>
        </Grid>
        <Grid xs={6}>
          <Button variant="contained" color="primary">Add New Product</Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {
          products.map(product => (
            <Grid item xs={3}>
              <ProductCard
                id={product._id}
                avatar={product.avatar}
                name={product.name}
                price={product.price}
                calorie={product.calorie}
              />
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
}
