import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core";
// material icons
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// child component
import PizzaCard from "./components/PizzaCard";
import { loadPremiumPizza } from "../api/premiumPizza";
import { loadLoadedPizza } from "../api/loadedPizza";
import { loadFavouritesPizza } from "../api/favouritesPizza";
import { loadClassicPizza } from "../api/classicPizza";

import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import ReactLoading from "react-loading";

const useStyles = makeStyles({
  addnew: {
    marginBottom: 15,
  },
  pizzaButton: {
    marginLeft: 10,
  },
  pizzaButtonSelected: {
    marginLeft: 10,
    color: "white",
    background: "#3f51b5",
    borderRadius: 10,
  },
  heading: {
    textAlign: "center",
    marginTop: 5,
    marginBottom: 10,
  },
});

export default function PizzaPanel(props) {
  const classes = useStyles();

  // buttons' selected state
  const [selectPre, setSelectPre] = useState(false);
  const [selectLoad, setSelectLoad] = useState(false);
  const [selectFla, setSelectFla] = useState(false);
  const [selectCla, setSelectCla] = useState(false);

  // pizza data
  const [Pre, setPre] = useState({});
  const [Load, setLoad] = useState({});
  const [Fla, setFla] = useState({});
  const [Cla, setCla] = useState({});

  // loading state
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    loadPremiumPizza().then((res) => {
      setPre(res);
    });
    loadLoadedPizza().then((res) => {
      setLoad(res);
    });
    loadFavouritesPizza().then((res) => {
      setFla(res);
    });
    loadClassicPizza().then((res) => {
      setCla(res);
    });
  }, []);

  return (
    <div>
      {!done ? (
        <ReactLoading type={"bars"} color={"black"} />
      ) : (
        <div>
          <Grid
            container
            spacing={2}
            alignItems="center"
            style={{ marginBottom: 15 }}
          >
            <Grid style={{ marginLeft: 10 }}>
              <Button
                className={classes.pizzaButton}
                onClick={() => {
                  setSelectPre(!selectPre);
                }}
              >
                Premium Pizza
              </Button>
              <Button
                className={classes.pizzaButton}
                onClick={() => {
                  setSelectLoad(!selectLoad);
                }}
              >
                Loaded Pizza
              </Button>
              <Button
                className={classes.pizzaButton}
                onClick={() => {
                  setSelectFla(!selectFla);
                }}
              >
                Favourites Pizza
              </Button>
              <Button
                className={classes.pizzaButton}
                onClick={() => {
                  setSelectCla(!selectCla);
                }}
              >
                Classic Pizza
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            {selectPre ? (
              <div>
                <Typography variant="h5" className={classes.heading}>
                  ALL PREMIUM PIZZAS
                </Typography>
                <Grid container>
                  {Pre.map((PrePizza) => (
                    <Grid item key={PrePizza.name}>
                      <PizzaCard
                        avatar={PrePizza.avatar}
                        name={PrePizza.name}
                        price={PrePizza.price}
                        calorie={PrePizza.calorie}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            ) : (
              <div></div>
            )}

            {selectLoad ? (
              <div>
                <Typography variant="h5" className={classes.heading}>
                  ALL LOADED PIZZAS
                </Typography>
                <Grid container>
                  {Load.map((LoadPizza) => (
                    <Grid item key={LoadPizza.name}>
                      <PizzaCard
                        avatar={LoadPizza.avatar}
                        name={LoadPizza.name}
                        price={LoadPizza.price}
                        calorie={LoadPizza.calorie}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            ) : (
              <div></div>
            )}

            {selectFla ? (
              <div>
                <Typography variant="h5" className={classes.heading}>
                  ALL FAVOURITES PIZZAS
                </Typography>
                <Grid container>
                  {Fla.map((FlaPizza) => (
                    <Grid item key={FlaPizza.name}>
                      <PizzaCard
                        avatar={FlaPizza.avatar}
                        name={FlaPizza.name}
                        price={FlaPizza.price}
                        calorie={FlaPizza.calorie}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            ) : (
              <div></div>
            )}

            {selectCla ? (
              <div>
                <Typography variant="h5" className={classes.heading}>
                  ALL CLASSIC PIZZAS
                </Typography>
                <Grid container>
                  {Cla.map((ClaPizza) => (
                    <Grid item key={ClaPizza.name}>
                      <PizzaCard
                        avatar={ClaPizza.avatar}
                        name={ClaPizza.name}
                        price={ClaPizza.price}
                        calorie={ClaPizza.calorie}
                      />
                    </Grid>
                  ))}
                </Grid>
              </div>
            ) : (
              <div></div>
            )}
          </Grid>
        </div>
      )}
    </div>
  );
}
