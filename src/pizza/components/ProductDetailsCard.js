import React, {useState} from "react";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  Button,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {},
  media: {
    height: 180,
  },
  card: {
    height: 300,
  },
  button: {
    marginTop: 10
  },
  navlink: {
    textDecoration: "none",
    color: "white"
  }
});

export default function ProductDetailsCard(props) {
  const classes = useStyles();
  const [pathname] = useState(props.pathname)

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          {/* <Paper elevation={1} className={classes.card}> */}
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.product.avatar}
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
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
            { console.log(props.pathname) }
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              <NavLink to={`${pathname}/edit`} className={classes.navlink} >Edit</NavLink>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              style={{ marginLeft: 10 }}
            >
              <NavLink to={`${pathname}/edit`} className={classes.navlink} >Delete</NavLink>
            </Button>
          </CardContent>
          {/* </Paper> */}
        </Grid>
      </Grid>
    </div>
  );
}
