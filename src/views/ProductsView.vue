<template>
  <div class="explore">
    <h1 class="explore__title">Explore Our Products</h1>
    <ul class="explore__list">
      <ProductCard v-for="n in 12" :key="n" />
    </ul>
    <span class="btn">Load more ...</span>
  </div>
</template>

<style lang="css" scoped>
.explore {
  display: flex;
  flex-direction: column;
  gap: 60px;
  max-width: 1200px;
  padding-inline: 10px;
  margin: 70px auto;
}
.explore__title {
  font-weight: 600;
  font-size: var(--fs-3xl);
}
.btn {
  align-self: center;
}
.explore__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  gap: 30px;
  justify-content: center;
}
</style>

<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
};
</script>
