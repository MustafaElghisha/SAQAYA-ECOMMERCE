<template>
  <ul class="about__stats">
    <StatCard v-for="(stat, index) in stats" :key="index" :stat="stat" />
  </ul>
</template>

<script>
import StatCard from "@/components/Business/StatCard.vue";

export default {
  props: ["stats"],
  components: {
    StatCard,
  },
};
</script>

<style lang="css" scoped>
.about__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  gap: 1.875rem;
  justify-content: center;
}
</style>
