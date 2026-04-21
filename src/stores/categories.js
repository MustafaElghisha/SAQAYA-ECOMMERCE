import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCategoriesStore = defineStore("categories", () => {
  const categories = ref([]);

  async function fetchCategories() {
    const res = await axios.get("https://dummyjson.com/products/category-list");

    categories.value = res.data;
  }

  return { categories, fetchCategories };
});
