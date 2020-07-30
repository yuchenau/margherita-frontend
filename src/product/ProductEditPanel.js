import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Button, TextField } from "@material-ui/core";

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
      <img
        className={classes.media}
        src={props.product.avatar || ""}
        alt="product figure"
      />
      <Grid container alignItems="center">
        <Typography className={classes.tag}>Name:</Typography>
        <TextField
          required
          name="name"
          value={props.product.name || ""}
          onChange={props.handleInputChange}
          className={classes.textfield}
          fullWidth
        />
      </Grid>
      <Grid container alignItems="center">
        <Typography className={classes.tag}>Price:</Typography>
        <TextField
          required
          name="price"
          value={props.product.price || ""}
          onChange={props.handleInputChange}
          className={classes.textfield}
          fullWidth
        />
      </Grid>
      <Grid container alignItems="center">
        <Typography className={classes.tag}>Calorie:</Typography>
        <TextField
          required
          name="calorie"
          value={props.product.calorie || ""}
          onChange={props.handleInputChange}
          className={classes.textfield}
          fullWidth
        />
      </Grid>
      <Grid container alignItems="center">
        <Typography className={classes.tag}>Description:</Typography>
        <TextField
          value="Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
          className={classes.textfield}
          fullWidth
        />
      </Grid>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={props.updateProduct}
      >
        Save
      </Button>
    </Paper>
  );
}
