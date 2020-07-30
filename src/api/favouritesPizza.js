import { get } from "./axios";
import { FAVOURITES } from "../utils/pizzaCategories";

const FAVOURITES_PIZZA_URL = `/pizzaGenres/${FAVOURITES}`;

export const loadFavouritesPizza = () =>
  get(FAVOURITES_PIZZA_URL).then((res) => res.data.pizzas);
