<template>
  <div class="home">
    <img
      src="../assets/images/HeroImage.png"
      alt="Hero banner"
      class="home__hero-image"
    />

    <section class="section">
      <div class="section__header">
        <span class="section__tag">Today's</span>
      </div>
      <h2 class="section__title">Flash Sales</h2>

      <ProductsList :products="products.slice(8, 12)" />
      <div class="products__view-all">
        <router-link
          :to="{ name: 'products' }"
          class="btn products__view-all-btn"
        >
          View All products
        </router-link>
      </div>
    </section>

    <section class="section">
      <div class="section__header">
        <span class="section__tag">Categories</span>
      </div>
      <h2 class="section__title">Browse By Category</h2>
      <CategoriesList :categories="categories" />
    </section>

    <section class="section">
      <div class="section__header">
        <span class="section__tag">Our products</span>
      </div>
      <h2 class="section__title">Explore Our products</h2>

      <ProductsList :products="products.slice(0, 8)" />
      <div class="products__view-all">
        <router-link
          :to="{ name: `products` }"
          class="btn products__view-all-btn"
        >
          View All products
        </router-link>
      </div>
    </section>

    <section class="section">
      <FeaturesList />
    </section>
  </div>
</template>

<script>
import CategoriesList from "@/components/Business/CategoriesList.vue";
import FeaturesList from "@/components/Business/FeaturesList.vue";
import ProductsList from "@/components/Business/ProductsList.vue";

import { mapState } from "vuex";

export default {
  components: {
    FeaturesList,
    ProductsList,
    CategoriesList,
  },
  computed: {
    ...mapState("products", ["products", "categories"]),
  },
};
</script>

<style lang="css" scoped>
.home {
  max-width: 75rem;
  padding-inline: 0.625rem;
  margin: 4.375rem auto;
}
.home__hero-image {
  margin-bottom: 2rem;
}
.section {
  padding-block: 5rem;
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--clr-neutral-950-a30);
  }
}

.products__view-all {
  display: flex;
  justify-content: center;
}

.section__header {
  padding-block: 0.625rem;
}
.section__tag {
  font-weight: 600;
  color: var(--clr-primary-500);
}
.section__tag::before {
  content: "";
  border: 0.625rem solid var(--clr-primary-500);
  border-radius: 0.25rem;
  margin-inline-end: 1rem;
}
.section__title {
  font-weight: 600;
  font-size: var(--fs-3xl);
  padding-block: 1.25rem 3.75rem;
}
</style>
