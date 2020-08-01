import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
// child component
import PizzaCard from "./components/PizzaCard";
import { loadPremiumPizza } from "../api/premiumPizza";
import { loadLoadedPizza } from "../api/loadedPizza";
import { loadFavouritesPizza } from "../api/favouritesPizza";
import { loadClassicPizza } from "../api/classicPizza";

import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as legoData from "../utils/legoloading.json";

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

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
  preserveAspectRatio: "xMidYMid slice"
  }
}

export default function PizzaPanel(props) {
  const classes = useStyles();
  // pizza data
  const [Premium, setPremium] = useState({});
  const [Loaded, setLoaded] = useState({});
  const [Flavourites, setFlavourites] = useState({});
  const [Classic, setClassic] = useState({});

  // loading state
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      loadPremiumPizza().then((res) => {
        setPremium(res);
      })
      .then(loadLoadedPizza().then((res) => {
        setLoaded(res);
      }))
      .then(loadFavouritesPizza().then((res) => {
        setFlavourites(res);
      }))
      .then(loadClassicPizza().then((res) => {
        setClassic(res);
      }))
      .then(() => {
        setDone(true);
      });
    }, 5000);
  }, []);

  return (
    <div>
      {!done ? (
        <FadeIn>
        <div className="d-flex justify-content-center align-items-center">
          <Lottie options={defaultOptions} height={200} width={200} />                      
        </div>
      </FadeIn>
      ) : (
        <div>
          {/* <Grid
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
          </Grid> */}
          <Grid container>
              <div>
                <Typography variant="h5" className={classes.heading}>
                  ALL PREMIUM PIZZAS
                </Typography>
                <Grid container>
                  {Premium && Premium.map((PrePizza) => (
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

              <div>
                <Typography variant="h5" className={classes.heading}>
                  ALL LOADED PIZZAS
                </Typography>
                <Grid container>
                  {Loaded && Loaded.map((LoadPizza) => (
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
              <div>
                <Typography variant="h5" className={classes.heading}>
                  ALL FAVOURITES PIZZAS
                </Typography>
                <Grid container>
                  {Flavourites && Flavourites.map((FlaPizza) => (
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
              <div>
                <Typography variant="h5" className={classes.heading}>
                  ALL CLASSIC PIZZAS
                </Typography>
                <Grid container>
                  {Classic && Classic.map((ClaPizza) => (
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
          </Grid>
        </div>
      )}
    </div>
  );
}
