import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    minWidth: 200,
    margin: 5,
  },
  media: {
    height: 120,
  },
});

export default function PizzaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {console.log(props)}
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.avatar}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: {props.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Calorie: {props.calorie}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" variant="contained" color="primary">
          Edit
        </Button>
        <Button size="small" variant="contained" color="secondary">
          Delete
        </Button>
      </CardActions> */}
    </Card>
  );
}
