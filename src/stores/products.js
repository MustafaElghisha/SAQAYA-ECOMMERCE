import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductsStore = defineStore("products", () => {
  const products = ref([]);

  async function fetchProducts({
    limit = 12,
    skip = 0,
    sortBy = "rating",
    order = "desc",
    reset = false,
    category = "",
  } = {}) {
    if (reset) {
      products.value = [];
    }

    const baseUrl = category
      ? `https://dummyjson.com/products/category/${category}`
      : "https://dummyjson.com/products";

    try {
      const res = await axios.get(baseUrl, {
        params: {
          limit,
          skip,
          sortBy,
          order,
        },
      });
      products.value = [...products.value, ...res.data.products];
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  return { products, fetchProducts };
});
