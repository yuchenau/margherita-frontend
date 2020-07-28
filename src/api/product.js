import { get, del } from "./axios";

const PRODUCT_BASE_URL = "/products";

export const loadProducts = () => get(PRODUCT_BASE_URL).then((res) => res.data);

export const loadProductById = (productId) =>
  get(`${PRODUCT_BASE_URL}/${productId}`).then((res) => res.data);

export const deleteProductById = (productId) =>
  del(`${PRODUCT_BASE_URL}/${productId}`);
