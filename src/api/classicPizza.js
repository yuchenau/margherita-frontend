import { get } from "./axios";
import { CLASSIC } from "../utils/pizzaCategories";

const CLASSIC_PIZZA_URL = `/pizzaGenres/${CLASSIC}`;

export const loadClassicPizza = () =>
  get(CLASSIC_PIZZA_URL).then((res) => res.data.pizzas);
