import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, TextField, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
  media: {
    height: 180,
  },
  button: {
    marginTop: 20,
  },
  tag: {
    width: 100,
  },
  textfield: {
    marginBottom: 15,
  },
});

export default function ProductEditPanel(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {/* { console.log(props) } */}
      {/* <Typography variant="h6" gutterBottom>
                Edit Product Information
            </Typography> */}
      <img
        className={classes.media}
        src={props.product.avatar}
        alt="product image"
      />
      <Grid container alignItems="center">
        <Typography className={classes.tag}>Name:</Typography>
        <TextField
          required
          id="productName"
          name="productName"
          // label="Product Name"
          value={props.product.name}
          fullWidth
          className={classes.textfield}
        />
      </Grid>
      <Grid container alignItems="center">
        <Typography className={classes.tag}>Price:</Typography>
        <TextField
          required
          id="productPrice"
          name="productPrice"
          // label="Product Price"
          value={props.product.price}
          fullWidth
          className={classes.textfield}
        />
      </Grid>
      <Grid container alignItems="center">
        <Typography className={classes.tag}>Calorie:</Typography>
        <TextField
          required
          id="productCalorie"
          name="productCalorie"
          // label="Product Calorie"
          value={props.product.calorie}
          fullWidth
          className={classes.textfield}
        />
      </Grid>
      <Grid container alignItems="center">
        <Typography className={classes.tag}>Description:</Typography>
        <TextField
          value="Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
          fullWidth
          className={classes.textfield}
        />
      </Grid>
      <Button variant="contained" color="primary" className={classes.button}>
        Save
      </Button>
    </Paper>
  );
}
