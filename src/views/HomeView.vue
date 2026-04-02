<template>
  <div class="home">
    <img
      src="../assets/images/HeroImage.png"
      alt="Hero banner"
      class="home__hero-image"
    />

    <section class="products">
      <div class="products__header">
        <span class="products__tag">Today's</span>
      </div>
      <h2 class="products__title">Flash Sales</h2>

      <ul class="products__list">
        <ProductCard v-for="n in 4" :key="n" />
      </ul>
      <div class="products__view-all">
        <router-link to="/products" class="products__view-all-btn">
          View All products
        </router-link>
      </div>
    </section>

    <section class="categories">
      <div class="categories__header">
        <span class="categories__tag">Categories</span>
      </div>
      <h2 class="categories__title">Browse By Category</h2>

      <ul class="categories__list">
        <li class="categories__item">
          <img
            src="../assets/icons/Hair Dryer.svg"
            alt="Beauty category"
            class="categories__icon"
          />
          <h3 class="categories__item-title">Beauty</h3>
        </li>
        <li class="categories__item">
          <img
            src="../assets/icons/Bath tub.svg"
            alt="Furniture category"
            class="categories__icon"
          />
          <h3 class="categories__item-title">Furniture</h3>
        </li>
        <li class="categories__item">
          <img
            src="../assets/icons/Perfume icon.svg"
            alt="Fragrance category"
            class="categories__icon"
          />
          <h3 class="categories__item-title">Fragrance</h3>
        </li>
        <li class="categories__item">
          <img
            src="../assets/icons/Category-Camera.svg"
            alt="Camera category"
            class="categories__icon"
          />
          <h3 class="categories__item-title">Camera</h3>
        </li>
        <li class="categories__item">
          <img
            src="../assets/icons/Category-Headphone.svg"
            alt="Mobile Accessories category"
            class="categories__icon"
          />
          <h3 class="categories__item-title">Mobile Accessories</h3>
        </li>
        <li class="categories__item">
          <img
            src="../assets/icons/Candle.svg"
            alt="Home Accessories category"
            class="categories__icon"
          />
          <h3 class="categories__item-title">Home Accessories</h3>
        </li>
      </ul>
    </section>

    <section class="products">
      <div class="products__header">
        <span class="products__tag">Our products</span>
      </div>
      <h2 class="products__title">Explore Our products</h2>

      <ul class="products__list">
        <ProductCard v-for="n in 8" :key="n" />
      </ul>
      <div class="products__view-all">
        <router-link to="/products" class="products__view-all-btn">
          View All products
        </router-link>
      </div>
    </section>

    <FeaturesGrid />
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
section {
  padding-block: 80px 0px;
  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-block: 80px;
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
.products__view-all-btn {
  color: rgb(250, 250, 250);
  padding: 16px 48px;
  background: rgb(219, 68, 68);
  border-radius: 4px;
}
.categories__header,
.products__header {
  padding-block: 10px;
}
.categories__tag,
.products__tag {
  font-weight: 600;
  color: #db4444;
}
.categories__tag::before,
.products__tag::before {
  content: "";
  border: 10px solid #db4444;
  border-radius: 4px;
  margin-inline-end: 16px;
}
.categories__title,
.products__title {
  font-weight: 600;
  font-size: 36px;
  padding-block: 20px 60px;
}
.categories__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 170px);
  gap: 30px;
  justify-content: center;
}
.categories__item {
  padding: 24px 36px;
  text-align: center;
  display: flex;
  row-gap: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 200ms ease-in-out;
  &:hover {
    color: white;
    background-color: #db4444;
    border-color: transparent;
    .categories__icon {
      filter: brightness(0) invert(1);
    }
  }
}
.categories__icon {
  transition: all 200ms ease-in-out;
}
.categories__item-title {
  font-size: 16px;
  font-weight: 400;
}
</style>

<script>
import FeaturesGrid from "@/components/FeaturesGrid.vue";
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: {
    FeaturesGrid,
    ProductCard,
  },
};
</script>
