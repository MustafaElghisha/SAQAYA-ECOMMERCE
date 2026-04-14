<template>
  <ul class="products__list">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>

<script>
import ProductCard from "./ProductCard.vue";

export default {
  props: ["products"],
  components: {
    ProductCard,
  },
};
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
