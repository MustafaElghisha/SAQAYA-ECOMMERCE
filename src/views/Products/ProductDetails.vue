<template>
  <div class="details" v-if="product">
    <section class="product__container">
      <div class="product__image-wrapper">
        <img
          class="product__image"
          :src="product.thumbnail"
          :alt="product.title"
        />
      </div>

      <div class="product__content">
        <div class="product__header">
          <h1 class="product__title">{{ product.title }}</h1>

          <div class="product__meta">
            <img
              class="product__rating-icon"
              src="../../assets/icons/Five star.svg"
              alt=""
            />
            <span class="product__rating">{{ product.rating }}</span>
            <span class="product__stock">In Stock</span>
          </div>

          <div class="product__pricing">
            <span class="product__price">${{ product.price }}</span>
            <span class="product__discount">
              -{{ product.discountPercentage }}%
            </span>
          </div>

          <p class="product__description">
            {{ product.description }}
          </p>
        </div>

        <div class="product__details">
          <p class="product__category">
            Category:
            <span class="product__category-value">
              {{ product.category }}
            </span>
          </p>

          <div class="product__actions">
            <div class="product__quantity">
              <span class="product__quantity-btn--dec">
                <img src="../../assets/icons/icon-minus.svg" alt="" />
              </span>
              <span class="product__quantity-value">2</span>
              <span class="product__quantity-btn--inc">
                <img src="../../assets/icons/icon-plus.svg" alt="" />
              </span>
            </div>

            <button class="product__buy-btn">Buy Now</button>

            <div class="product__icon-wrapper">
              <img
                class="product__icon-img"
                src="../../assets/icons/heart.svg"
                alt=""
                height="32"
                width="32"
              />
            </div>
          </div>
        </div>

        <div class="product__delivery">
          <DeliveryCard
            v-for="(deliveryItem, index) in deliveryItems"
            :key="index"
            :deliveryItem="deliveryItem"
          />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section__header">
        <span class="section__tag">More of this category</span>
      </div>
      <ProductsList :products="products.slice(6, 10)" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";

import deliveryIcon from "../../assets/icons/icon-delivery.svg";
import returnIcon from "../../assets/icons/Icon-return.svg";
import DeliveryCard from "@/components/Business/DeliveryCard.vue";
import ProductsList from "@/components/Business/ProductsList.vue";

export default {
  components: {
    ProductsList,
    DeliveryCard,
  },
  data() {
    return {
      product: null,
      deliveryItems: [
        {
          icon: deliveryIcon,
          title: "Free Delivery",
          text: "Enter your postal code for Delivery Availability",
        },
        {
          icon: returnIcon,
          title: "Return Delivery",
          text: "Free 30 Days Delivery Returns. Details",
        },
      ],
    };
  },
  computed: {
    ...mapState("products", ["products"]),
  },

  async beforeRouteEnter(to, from, next) {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${to.params.id}`
      );
      next((vm) => {
        vm.product = res.data;
      });
    } catch (error) {
      next({ name: "not-found" });
    }
  },

  async beforeRouteUpdate(to, from, next) {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${to.params.id}`
      );

      this.product = res.data;
      next();
    } catch (error) {
      next({ name: "not-found" });
    }
  },
};
</script>

<style lang="css" scoped>
.product__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
}
.product__image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-neutral-100);
  border-radius: 0.25rem;
}
.product__content {
  max-width: 400px;
}
.product__title {
  font-size: var(--fs-xl);
  font-weight: 600;
}
.product__meta {
  padding-block: 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
}
.product__stock {
  font-size: var(--fs-sm);
  color: #00ff66;
}
.product__rating {
  color: var(--clr-neutral-950-a50);
  font-size: var(--fs-sm);
}
.product__pricing {
  display: flex;
  align-items: center;
  gap: 0.875rem;
}

.product__price {
  font-size: var(--fs-xl);
  font-weight: 500;
}
.product__discount {
  background-color: var(--clr-primary-500);
  border-radius: 0.25rem;
  color: var(--clr-neutral-100);
  font-size: var(--fs-xs);
  padding: 0.25rem 12px;
}
.product__description {
  font-size: var(--fs-sm);
  padding-block: 24px;
  max-width: 42ch;
  border-bottom: 1px solid var(--clr-neutral-950-a50);
}
.product__category {
  padding-block: 32px 48px;
}
.product__category-value {
  padding-inline-start: 12px;
  font-size: var(--fs-lg);
  text-decoration-line: underline;
  text-decoration-thickness: 2px;
}

.product__actions {
  display: flex;
  gap: 1rem;
  padding-bottom: 40px;
}
.product__quantity {
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}
.product__quantity-btn--dec {
  padding: 9px;
  border: 2px solid var(--clr-neutral-950-a50);
  border-start-start-radius: 0.25rem;
  border-end-start-radius: 0.25rem;
}
.product__quantity-value {
  padding: 9px;
  border-block: 2px solid var(--clr-neutral-950-a50);
  flex: 1;
  display: flex;
  justify-content: center;
}
.product__quantity-btn--inc {
  padding: 9px;
  border: 2px solid var(--clr-primary-500);
  border-start-end-radius: 0.25rem;
  border-end-end-radius: 0.25rem;
  background-color: var(--clr-primary-500);
}
.product__buy-btn {
  background-color: var(--clr-primary-500);
  border: none;
  border-radius: 0.25rem;
  color: var(--clr-neutral-100);
  font-weight: 500;
  padding-block: 10px;
  flex: 1;
}
.product__icon-wrapper {
  padding: 0.25rem;
  border: 2px solid var(--clr-neutral-950-a50);
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product__delivery {
  border: 2px solid var(--clr-neutral-950-a50);
  border-radius: 0.25rem;
}

.details {
  max-width: 75rem;
  padding-inline: 0.625rem;
  margin: 4.375rem auto;
}
.section {
  padding-block: 5rem;
  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
}

.section__header {
  padding-block: 0.625rem;
  padding-block: 1.25rem 3.75rem;
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
</style>
