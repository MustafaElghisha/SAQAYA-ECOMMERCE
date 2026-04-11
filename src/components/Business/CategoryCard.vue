<template>
  <li class="category__item">
    <img :src="category.icon" :alt="category.alt" class="category__item-icon" />
    <h3 class="category__item-title">{{ category.title }}</h3>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
  text-align: center;
  cursor: pointer;
  padding: 1.5rem 2.25rem;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 200ms ease-in-out;

  &:hover {
    color: white;
    background-color: var(--clr-primary-500);
    border-color: transparent;

    > img {
      filter: invert(100%);
    }
  }
}
.category__item-icon {
  transition: all 200ms ease-in-out;
}
.category__item-title {
  font-size: var(--fs-md);
  font-weight: 400;
}
</style>
