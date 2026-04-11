<template>
  <div class="cart" @click.stop>
    <div class="cart__header">
      <h2 class="cart__title">Shopping Cart</h2>
      <img
        src="../../assets/icons/icon-cancel.svg"
        alt="close button"
        class="cart__close-icon"
        @click="closeCart"
      />
    </div>
    <ul class="cart__item-list">
      <li class="cart__item" v-for="item in cartItems" :key="item.product.id">
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
        <input class="cart__item-qty" type="number" />
        <span class="cart__item-price">${{ item.product.price }}</span>
      </li>
    </ul>
    <div class="cart__summary">
      <div class="cart__subtotal">
        <span class="cart__subtotal-label">Subtotal:</span>
        <span class="cart__subtotal-value">${{ totalUSD }}</span>
      </div>
      <div class="cart__shipping">
        <span class="cart__shipping-label">Shipping:</span>
        <span class="cart__shipping-value">Free</span>
      </div>
      <div class="cart__total">
        <span class="cart__total-label">Total:</span>
        <span class="cart__total-value">${{ totalUSD }}</span>
      </div>
      <div class="cart__coupon">
        <input
          class="cart__coupon-input"
          type="text"
          placeholder="Coupon Code"
        />
        <span class="btn">Apply</span>
      </div>
      <div class="cart__order">
        <span class="btn">Place Order</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("products", ["cartItems", "totalUSD"]),
  },
  methods: {
    ...mapActions("products", ["removeFromCart"]),
    closeCart() {
      this.$emit("close");
    },
  },
};
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

.cart__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem 3rem;
  border-radius: 0.25rem;
  box-shadow: 0 1px 13px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 2.5rem;
}
.cart__item-qty {
  border-radius: 0.25rem;
  max-width: 4.5rem;
  padding: 0.375rem 0.75rem;
}

.cart__total,
.cart__shipping,
.cart__subtotal {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1rem;
}
.cart__subtotal,
.cart__shipping {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.cart__coupon {
  padding-block: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.cart__coupon-input {
  padding: 1rem 1.5rem;
  max-width: 18rem;
}

.cart__item-remove-icon,
.cart__close-icon {
  cursor: pointer;
}
</style>
