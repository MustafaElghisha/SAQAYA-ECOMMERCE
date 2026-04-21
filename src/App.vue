<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useProductsStore } from "./stores/products";
import { useCategoriesStore } from "./stores/categories";

const productsStore = useProductsStore();
const categoriesStore = useCategoriesStore();

onMounted(() => {
  productsStore.fetchProducts();
  categoriesStore.fetchCategories();
});
</script>
