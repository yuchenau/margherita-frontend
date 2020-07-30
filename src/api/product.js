import { get, del, put } from "./axios";

const PRODUCT_BASE_URL = "/products";

export const loadProducts = () => get(PRODUCT_BASE_URL).then((res) => res.data);

export const loadProductById = (productId) =>
  get(`${PRODUCT_BASE_URL}/${productId}`).then((res) => res.data);

export const deleteProductById = (productId) =>
  del(`${PRODUCT_BASE_URL}/${productId}`);

export const updateProductById = (productId, product) =>
  put(`${PRODUCT_BASE_URL}/${productId}`, {
    name: product.name,
    price: product.price,
    calorie: product.calorie,
    avatar: product.avatar,
  });
