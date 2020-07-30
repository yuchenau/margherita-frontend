import { get } from "./axios";
import { PREMIUM } from "../utils/pizzaCategories";

const PREMIUM_PIZZA_URL = `/pizzaGenres/${PREMIUM}`;

export const loadPremiumPizza = () =>
  get(PREMIUM_PIZZA_URL).then((res) => res.data.pizzas);
