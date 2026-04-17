<template>
  <ul class="categories__list">
    <CategoryCard
      v-for="category in categories.slice(0, 6)"
      :key="category"
      :category="category"
    />
  </ul>
</template>

<script>
import CategoryCard from "@/components/Business/CategoryCard.vue";

export default {
  props: ["categories"],
  components: {
    CategoryCard,
  },
};
</script>

<style lang="css" scoped>
.categories__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 170px);
  gap: 1.875rem;
  justify-content: center;
}
</style>
