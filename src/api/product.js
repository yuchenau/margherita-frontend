import { get } from "./axios";

const PRODUCT_BASE_URL = "/products";

export const loadProducts = () => get(PRODUCT_BASE_URL).then((res) => res.data);
