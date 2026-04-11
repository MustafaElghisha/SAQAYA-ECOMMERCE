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

    <div class="cart__coupon">
      <input class="cart__coupon-input" type="text" placeholder="Coupon Code" />
      <span class="btn">Apply</span>
    </div>

    <div class="cart__order">
      <span class="btn">Place Order</span>
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
</style>
