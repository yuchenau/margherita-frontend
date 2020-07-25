import React from 'react';
import { Grid, Paper, Typography, Card, CardActionArea, CardMedia, Button, CardContent } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      
    },
    media: {
      height: 180,
    },
    card: {
      height: 300,
    },
});

export default function ProductDetailsCard(props) {
    const classes = useStyles();
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
                        <Typography variant="h5" component="h1">{props.product.name}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Price: {props.product.price}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">Calorie: {props.product.calorie}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lorem ipsum dolor sit amet
                        </Typography>
                        <Button variant="contained" color="primary" style={{ marginRight: 10}}>Edit</Button>
                        <Button variant="contained" color="secondary">Delete</Button>
                        </CardContent>
                    {/* </Paper> */}
                </Grid>
            </Grid>
        </div>
    );
}