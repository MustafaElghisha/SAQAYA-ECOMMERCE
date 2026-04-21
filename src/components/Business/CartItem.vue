<template>
  <li class="cart__item">
    <img
      src="../../assets/icons/icon-cancel.svg"
      alt="close button"
      class="cart__item-remove-icon"
      @click="cartStore.removeFromCart(item.product.id)"
    />
    <img
      class="cart__item-img"
      :src="item.product.thumbnail"
      alt="product thumbnail"
      width="54"
      height="54"
    />
    <span class="cart__item-name">{{ item.product.title }}</span>
    <input
      class="cart__item-qty"
      type="number"
      :value="item.quantity"
      @input="
        cartStore.setQuantity(Number($event.target.value), item.product.id)
      "
    />
    <span class="cart__item-price">${{ item.product.price }}</span>
  </li>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";
import { defineProps } from "vue";

defineProps(["item"]);

const cartStore = useCartStore();
</script>

<style lang="css" scoped>
.cart__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem 3rem;
  border-radius: 0.25rem;
  box-shadow: 0 1px 13px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 2.5rem;
  gap: 1rem;
}
.cart__item-qty {
  border-radius: 0.25rem;
  max-width: 4.5rem;
  padding: 0.375rem 0.75rem;
}
.cart__item-remove-icon {
  cursor: pointer;
}
</style>
