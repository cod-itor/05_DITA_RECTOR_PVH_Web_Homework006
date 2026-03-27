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

async function fetchCustomers(options = {}) {
  return apiClient("/customers", options);
}

export const customerService = {
  async getCustomersResponse(options = {}) {
    return fetchCustomers(options);
  },

  async getAllCustomers(options = {}) {
    const data = await fetchCustomers(options);
    return ensureArray(data.payload);
  },

  async getCustomerById(id, options = {}) {
    const data = await apiClient(`/customers/${id}`, options);
    return extractSingle(data.payload);
  },
};