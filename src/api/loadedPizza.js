import { get } from "./axios";
import { LOADED } from "../utils/pizzaCategories";

const LOADED_PIZZA_URL = `/pizzaGenres/${LOADED}`;

export const loadLoadedPizza = () =>
  get(LOADED_PIZZA_URL).then((res) => res.data.pizzas);
