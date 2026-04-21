<template>
  <li class="product-card__item">
    <router-link :to="`/productDetails/${product.id}`">
      <div class="product-card__product">
        <img
          :src="product.thumbnail"
          :alt="product.title"
          class="product-card__product-image"
          data-test="product-image"
        />
        <img
          src="../../assets/icons/heart.svg"
          alt="heart"
          width="24"
          height="24"
          class="product-card__product-fav"
        />
        <span
          class="product-card__add-to-cart"
          data-test="add-to-cart"
          @click.stop.prevent="cartStore.addToCart(product)"
        >
          Add To Cart
        </span>
        <img
          src="../../assets/icons/Quick View.svg"
          alt="view"
          width="24"
          height="24"
          class="product-card__product-view"
        />
      </div>
      <h3 class="product-card__product-title" data-test="product-title">
        {{ product.title }}
      </h3>
      <div class="product-card__pricing">
        <span class="product-card__current-price" data-test="current-price">
          ${{ product.price }}
        </span>
        <span class="product-card__original-price" data-test="original-price">
          ${{
            (
              product.price +
              (product.price * product.discountPercentage) / 100
            ).toFixed(2)
          }}
        </span>
      </div>
      <div class="product-card__rating">
        <span class="product-card__stars">
          <img
            src="../../assets/icons/Five star.svg"
            alt="Rating stars"
            class="product-card__star-icon"
          />
        </span>
        <span class="product-card__review-count" data-test="review-count">
          {{ product.rating }}
        </span>
      </div>
    </router-link>
  </li>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
import { defineProps } from "vue";

defineProps(["product"]);

const cartStore = useCartStore();
</script>

<style lang="css" scoped>
.product-card__product {
  background-color: var(--clr-neutral-100);
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
}
.product-card__product-fav {
  top: 0.75rem;
  right: 0.75rem;
}
.product-card__product-view {
  top: 3.375rem;
  right: 0.75rem;
}
.product-card__product-fav,
.product-card__product-view {
  width: 2.25rem;
  height: 2.25rem;
  position: absolute;
  padding: 0.375rem;
  background-color: var(--clr-neutral-0);
  border-radius: 50%;
}
.product-card__add-to-cart {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  cursor: pointer;
  background: var(--clr-neutral-950);
  color: var(--clr-neutral-0);
  font-weight: 500;
  padding-block: 0.5rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}
.product-card__product:hover .product-card__add-to-cart {
  transform: translateY(0);
}

.product-card__product-title {
  color: var(--clr-neutral-950);
}
.product-card__product-title,
.product-card__original-price,
.product-card__current-price {
  font-weight: 500;
}
.product-card__pricing {
  padding-block: 0.5rem;
  display: flex;
  gap: 0.75rem;
}
.product-card__rating {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.product-card__review-count {
  font-weight: 600;
  font-size: var(--fs-sm);
  color: var(--clr-neutral-950-a50);
}
.product-card__current-price {
  color: var(--clr-primary-500);
}
.product-card__original-price {
  color: var(--clr-neutral-950-a50);
  text-decoration-line: line-through;
}
</style>
