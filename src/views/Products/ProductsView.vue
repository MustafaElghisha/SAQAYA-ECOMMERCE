<template>
  <div class="explore">
    <h1 class="explore__title">Explore Our Products</h1>
    <ul class="explore__list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </ul>
    <span class="btn" @click="loadMore" v-if="count < 194">Load more ...</span>
  </div>
</template>

<script>
import ProductCard from "@/components/Business/ProductCard.vue";
import { mapState } from "vuex";

export default {
  methods: {
    loadMore() {
      this.$store.dispatch("products/fetchProducts", {
        limit: 12,
        skip: this.count,
      });
    },
  },
  computed: {
    ...mapState("products", ["products"]),
    count() {
      return this.products.length;
    },
  },
  components: {
    ProductCard,
  },
};
</script>

<style lang="css" scoped>
.explore {
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
  max-width: 75rem;
  padding-inline: 0.625rem;
  margin: 4.375rem auto;
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
  gap: 1.875rem;
  justify-content: center;
}
</style>
