import { apiClient } from "./apiClient";

const ensureArray = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (payload) return [payload];
  return [];
};

const extractSingle = (payload) => {
  if (Array.isArray(payload)) return payload[0] ?? null;
  return payload ?? null;
};

export const productService = {
  async getAllProducts(options = {}) {
    const data = await apiClient("/products", options);
    return ensureArray(data.payload);
  },

  async getProductById(id, options = {}) {
    const data = await apiClient(`/products/${id}`, options);
    return extractSingle(data.payload);
  },
};