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

      <ul class="products__list">
        <ProductCard
          v-for="product in products.slice(8, 12)"
          :key="product.id"
          :product="product"
        />
      </ul>
      <div class="products__view-all">
        <router-link to="/products" class="btn products__view-all-btn">
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

      <ul class="products__list">
        <ProductCard
          v-for="product in products.slice(0, 8)"
          :key="product.id"
          :product="product"
        />
      </ul>
      <div class="products__view-all">
        <router-link to="/products" class="btn products__view-all-btn">
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
import hairDryerIcon from "@/assets/icons/Hair Dryer.svg";
import bathTub from "@/assets/icons/Bath tub.svg";
import fragranceIcon from "@/assets/icons/Perfume icon.svg";
import cameraIcon from "@/assets/icons/Category-Camera.svg";
import headphone from "@/assets/icons/Category-Headphone.svg";
import candleIcon from "@/assets/icons/Candle.svg";

import CategoriesList from "@/components/Business/CategoriesList.vue";
import FeaturesList from "@/components/Business/FeaturesList.vue";

import ProductCard from "@/components/Business/ProductCard.vue";

import { mapState } from "vuex";

export default {
  components: {
    FeaturesList,
    ProductCard,
    CategoriesList,
  },
  data() {
    return {
      categories: [
        {
          icon: hairDryerIcon,
          alt: "Beauty category",
          title: "Beauty",
        },
        {
          icon: bathTub,
          alt: "Furniture category",
          title: "Furniture",
        },
        {
          icon: fragranceIcon,
          alt: "Fragrance category",
          title: "Fragrance",
        },
        {
          icon: cameraIcon,
          alt: "Camera category",
          title: "Camera",
        },
        {
          icon: headphone,
          alt: "Mobile Accessories category",
          title: "Mobile Accessories",
        },
        {
          icon: candleIcon,
          alt: "Home Accessories category",
          title: "Home Accessories",
        },
      ],
    };
  },
  computed: {
    ...mapState("products", ["products"]),
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
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
}
.products__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  gap: 1.875rem;
  justify-content: center;
  margin-bottom: 3.75rem;
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
