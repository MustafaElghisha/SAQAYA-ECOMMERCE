<template>
  <li>
    <router-link :to="`/products/${category}`" class="category__item">
      <h3 class="category__item-title">{{ category }}</h3>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["category"],
};
</script>

<style lang="css" scoped>
.category__item {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding: 1.5rem 2.25rem;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 200ms ease-in-out;
  height: 100%;

  &:hover {
    background-color: var(--clr-primary-500);
    border-color: transparent;
  }
  &:hover .category__item-title {
    color: var(--clr-neutral-0);
  }
}

.category__item-title {
  color: var(--clr-neutral-950);
  font-size: var(--fs-md);
  font-weight: 400;
}
</style>
