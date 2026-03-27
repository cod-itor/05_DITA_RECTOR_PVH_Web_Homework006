const BASE_URL = "https://homework-api.noevchanmakara.site/api/v1";

export async function apiClient(endpoint, options = {}) {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
      // You can add Auth tokens here later
    },
    ...options,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, defaultOptions);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong");
  }

  return response.json();
}