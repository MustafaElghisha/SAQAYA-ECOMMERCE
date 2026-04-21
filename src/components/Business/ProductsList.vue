<template>
  <ul class="products__list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
import { defineProps } from "vue";

defineProps(["products"]);
</script>

<style lang="css" scoped>
.products__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  gap: 1.875rem;
  justify-content: center;
  margin-bottom: 3.75rem;
}
</style>
