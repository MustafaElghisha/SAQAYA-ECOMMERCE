<template>
  <div class="cart" @click.stop>
    <div class="cart__header">
      <h2 class="cart__title" data-test="cart-title">Shopping Cart</h2>
      <img
        src="../../assets/icons/icon-cancel.svg"
        alt="close button"
        class="cart__close-icon"
        data-test="close-cart"
        @click="emit('closeCart')"
      />
    </div>
    <ul class="cart__item-list">
      <CartItem
        v-for="item in cartStore.cart"
        :key="item.product.id"
        :item="item"
      />
    </ul>
    <OrderSummary :totalUSD="cartStore.totalUSD" />
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
import CartItem from "./CartItem.vue";
import OrderSummary from "./OrderSummary.vue";

import { defineEmits } from "vue";

const cartStore = useCartStore();

const emit = defineEmits(["closeCart"]);
</script>

<style lang="css" scoped>
.cart {
  width: 33.75rem;
  padding: 2.5rem;
  position: fixed;
  z-index: 1000;
  background-color: var(--clr-neutral-0);
  height: 100%;
  top: 0;
  right: 0;
  box-shadow: 0 1px 13px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
}
.cart__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
}
.cart__title {
  font-weight: 500;
  font-size: var(--fs-2xl);
}

.cart__item-list {
  overflow-y: auto;
  flex: 1;
}

.cart__close-icon {
  cursor: pointer;
}
</style>
