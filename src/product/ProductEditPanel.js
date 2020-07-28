import React, { useState } from "react";
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
  const [name, setName] = useState(props.product.name);

  return (
    <Paper className={classes.root}>
      {console.log(props.product)}
      <img
        className={classes.media}
        src={props.product.avatar}
        alt="product image"
      />
      <Grid container alignItems="center">
        <Typography className={classes.tag}>Name:</Typography>
        <Typography>{props.product.name}</Typography>
        {/* <TextField
          required
          name="name"
          value={props.product.name}
          className={classes.textfield}
        /> */}
      </Grid>
      <Grid container alignItems="center">
        <Typography className={classes.tag}>Price:</Typography>
        <Typography>{props.product.price}</Typography>
        {/* <TextField
          required
          name="price"
          value={props.product.price}
          className={classes.textfield}
        /> */}
      </Grid>
      <Grid container alignItems="center">
        <Typography className={classes.tag}>Calorie:</Typography>
        <Typography>{props.product.calorie}</Typography>
        {/* <TextField
          required
          name="calorie"
          value={props.product.calorie}
          className={classes.textfield}
        /> */}
      </Grid>
      <Grid container alignItems="center">
        <Typography className={classes.tag}>Description:</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        {/* <TextField
          value="Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
          className={classes.textfield}
        /> */}
      </Grid>
      <Button variant="contained" color="primary" className={classes.button}>
        Save
      </Button>
    </Paper>
  );
}
