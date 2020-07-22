import React, { useState, useEffect } from "react";
// Components
import { Grid, ButtonGroup, Button } from "@material-ui/core";
import MediaCard from "../components/MediaCard";

// Functions
import { loadProducts } from "../api/product";

export default function PizzaPanel(props) {
  // Hook's State
  const [products, setProducts] = useState([]);
  const [isLoading] = useState(false);
  const [error] = useState(null);

  // Hook's ComponentDidMount
  useEffect(() => {
    loadProducts().then((response) => {
      setProducts(response);
      // console.log(response);
    });
  });

  return (
    <div>
      <Grid container spacing={3}>
        <Grid xs={6}>
          <ButtonGroup variant="contained">
            <Button>Premium</Button>
            <Button>Loaded</Button>
            <Button>Favourites</Button>
            <Button>Classics</Button>
          </ButtonGroup>
        </Grid>
        <Grid xs={6}>
          <Button variant="contained">Add New Product</Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
        <Grid item xs={4}>
          <MediaCard />
        </Grid>
      </Grid>
    </div>
  );
}
