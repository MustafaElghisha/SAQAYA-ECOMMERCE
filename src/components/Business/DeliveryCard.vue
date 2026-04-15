<template>
  <div class="product__delivery-item">
    <div class="product__delivery-icon">
      <img
        :src="deliveryItem.icon"
        :alt="deliveryItem.title"
        width="40"
        height="40"
      />
    </div>

    <div class="product__delivery-content">
      <h3 class="product__delivery-title">{{ deliveryItem.title }}</h3>
      <p class="product__delivery-text">{{ deliveryItem.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["deliveryItem"],
};
</script>

<style lang="css" scoped>
.product__delivery-item {
  display: flex;
  gap: 1rem;
  padding: 1.5rem 1rem;
  &:first-child {
    border-bottom: 2px solid var(--clr-neutral-950-a50);
  }
}
.product__delivery-icon {
  filter: invert(100%);
  display: flex;
  justify-content: center;
  min-height: 2.5rem;
  min-width: 2.5rem;
}
.product__delivery-title {
  font-weight: 500;
  padding-bottom: 0.5rem;
}
.product__delivery-text {
  font-weight: 500;
  font-size: var(--fs-xs);
}
</style>
