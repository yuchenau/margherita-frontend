import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink, withRouter } from "react-router-dom";
import {
  Grid,
  Typography,
  // Card,
  // CardActionArea,
  // CardMedia,
  Button,
  CardContent,
  Paper,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { deleteProductById } from "../../api/product";
// route variable
import { PRODUCT_BASE_URL } from "../../routes/URLMap";

const useStyles = makeStyles({
  media: {
    margin: 15,
    height: 180,
  },
  card: {
    height: 300,
  },
  button: {
    marginTop: 10,
  },
  navlink: {
    textDecoration: "none",
    color: "white",
  },
});

function ProductDetailsCard(props) {
  const classes = useStyles();
  const [pathname] = useState(props.pathname);
  const productId = props.product._id;

  const deleteProduct = () => {
    deleteProductById(productId)
      .then(() => {
        props.history.push(PRODUCT_BASE_URL);
      })
      .then(() => {
        console.log("DELETE SUCCESS");
      });
  };

  return (
    <Paper>
      {/* {console.log(props.product._id)}
      {console.log(props)} */}
      <Grid container spacing={3}>
        <Grid item xs={4}>
          {/* <Paper elevation={1} className={classes.card}> */}
          {/* <Card> */}
          {/* <CardActionArea> */}
          {/* <CardMedia
                className={classes.media}
                image={props.product.avatar}
                title="Contemplative Reptile"
              /> */}
          <img
            className={classes.media}
            src={props.product.avatar}
            alt="product figure"
          />
          {/* </CardActionArea> */}
          {/* </Card> */}
          {/* </Paper> */}
        </Grid>
        <Grid item xs={8}>
          {/* <Paper elevation={1} className={classes.card}> */}
          <CardContent>
            <Typography variant="h5" component="h1">
              {props.product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Price: {props.product.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Calorie: {props.product.calorie}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Ingredient: Lorem ipsum dolor sit amet
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<EditIcon />}
            >
              <NavLink to={`${pathname}/edit`} className={classes.navlink}>
                Edit
              </NavLink>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
              style={{ marginLeft: 10 }}
              onClick={deleteProduct}
            >
              <NavLink to={`${pathname}/edit`} className={classes.navlink}>
                Delete
              </NavLink>
            </Button>
          </CardContent>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withRouter(ProductDetailsCard);
