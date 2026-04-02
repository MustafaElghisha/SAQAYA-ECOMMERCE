<template>
  <div class="wrapper">
    <h1>Explore Our Products</h1>
    <ul class="products__list">
      <ProductCard v-for="n in 12" :key="n" />
    </ul>
    <span class="btn">Load more ...</span>
  </div>
</template>

<style lang="css" scoped>
.wrapper {
  max-width: 1200px;
  padding-inline: 10px;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  gap: 60px;
}
h1 {
  font-weight: 600;
  font-size: 36px;
}
.btn {
  color: rgb(250, 250, 250);
  padding: 16px 48px;
  background: rgb(219, 68, 68);
  border-radius: 4px;
  align-self: center;
}
.products__list {
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
