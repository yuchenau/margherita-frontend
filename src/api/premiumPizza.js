import { get } from "./axios";
import { PREMIUM } from "../utils/pizzaCategories";

const PREMIUM_PIZZA_URL = `/pizzaGenres/${PREMIUM}`;

export const loadPremiumPizza = () =>
  get(PREMIUM_PIZZA_URL).then((res) => res.data.pizzas);

// export const loadProductById = (productId) =>
//   get(`${PRODUCT_BASE_URL}/${productId}`).then((res) => res.data);

// export const deleteProductById = (productId) =>
//   del(`${PRODUCT_BASE_URL}/${productId}`);

// export const updateProductById = (productId, product) =>
//   put(`${PRODUCT_BASE_URL}/${productId}`, {
//     name: product.name,
//     price: product.price,
//     calorie: product.calorie,
//     avatar: product.avatar,
//   });
