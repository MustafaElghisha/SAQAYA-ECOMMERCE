<template>
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

    <div class="cart__order btn">
      <span>Place Order</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["totalUSD"],
};
</script>

<style lang="css" scoped>
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

.cart__total {
  padding-bottom: 2rem;
}
</style>
