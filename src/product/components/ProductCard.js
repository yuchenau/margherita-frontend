import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Link from "@material-ui/core/Link";
import { NavLink as RouterLink } from "react-router-dom";
// route variable
import { PRODUCT_BASE_URL } from "../../routes/URLMap";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    minWidth: 250,
  },
  media: {
    height: 120,
  },
});

export default function ProductCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link
        underline="none"
        component={RouterLink}
        to={`${PRODUCT_BASE_URL}/${props.id}`}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.avatar}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Price: {props.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Calorie: {props.calorie} J
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
