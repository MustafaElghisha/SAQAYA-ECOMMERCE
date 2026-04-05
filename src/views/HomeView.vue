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
        <ProductCard v-for="n in 4" :key="n" />
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

      <ul class="categories__list">
        <li
          class="category__item"
          v-for="(category, index) in categories"
          :key="index"
        >
          <img
            :src="category.icon"
            :alt="category.alt"
            class="category__icon"
          />
          <h3 class="category__item-title">{{ category.title }}</h3>
        </li>
      </ul>
    </section>

    <section class="section">
      <div class="section__header">
        <span class="section__tag">Our products</span>
      </div>
      <h2 class="section__title">Explore Our products</h2>

      <ul class="products__list">
        <ProductCard v-for="n in 8" :key="n" />
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

<style lang="css" scoped>
.home {
  max-width: 1200px;
  padding-inline: 10px;
  margin: 70px auto;
}
.home__hero-image {
  margin-bottom: 32px;
}
.section {
  padding-block: 80px;
  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
}
.products__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  gap: 30px;
  justify-content: center;
  margin-bottom: 60px;
}

.products__view-all {
  display: flex;
  justify-content: center;
}

.section__header {
  padding-block: 10px;
}
.section__tag {
  font-weight: 600;
  color: var(--clr-primary-500);
}
.section__tag::before {
  content: "";
  border: 10px solid var(--clr-primary-500);
  border-radius: 4px;
  margin-inline-end: 16px;
}
.section__title {
  font-weight: 600;
  font-size: var(--fs-3xl);
  padding-block: 20px 60px;
}
.categories__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 170px);
  gap: 30px;
  justify-content: center;
}
.category__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  text-align: center;
  cursor: pointer;
  padding: 24px 36px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 200ms ease-in-out;

  &:hover {
    color: white;
    background-color: var(--clr-primary-500);
    border-color: transparent;

    > img {
      filter: invert(100%);
    }
  }
}
.category__icon {
  transition: all 200ms ease-in-out;
}
.category__item-title {
  font-size: var(--fs-md);
  font-weight: 400;
}
</style>

<script>
import hairDryerIcon from "@/assets/icons/Hair Dryer.svg";
import bathTub from "@/assets/icons/Bath tub.svg";
import fragranceIcon from "@/assets/icons/Perfume icon.svg";
import cameraIcon from "@/assets/icons/Category-Camera.svg";
import headphone from "@/assets/icons/Category-Headphone.svg";
import candleIcon from "@/assets/icons/Candle.svg";

import FeaturesList from "@/components/FeaturesList.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: {
    FeaturesList,
    ProductCard,
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
};
</script>
