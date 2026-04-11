<template>
  <li class="cart__item">
    <img
      src="../../assets/icons/icon-cancel.svg"
      alt="close button"
      class="cart__item-remove-icon"
      @click="removeFromCart(item.product.id)"
    />
    <img
      class="cart__item-img"
      :src="item.product.thumbnail"
      alt=""
      width="54"
      height="54"
    />
    <span class="cart__item-name">{{ item.product.title }}</span>
    <input
      class="cart__item-qty"
      type="number"
      :value="item.quantity"
      @input="
        setQuantity({
          quantity: Number($event.target.value),
          productId: item.product.id,
        })
      "
    />
    <span class="cart__item-price">${{ item.product.price }}</span>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["item"],
  methods: {
    ...mapActions("products", ["removeFromCart", "setQuantity"]),
  },
};
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
