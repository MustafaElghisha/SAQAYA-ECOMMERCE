<template>
  <ul class="about__team">
    <MemberCard
      v-for="(member, index) in members"
      :key="index"
      :member="member"
    />
  </ul>
</template>

<script setup>
import MemberCard from "./MemberCard.vue";
import { defineProps } from "vue";

defineProps(["members"]);
</script>

<style lang="css" scoped>
.about__team {
  display: grid;
  grid-template-columns: repeat(auto-fit, 370px);
  justify-content: center;
  gap: 1.875rem;
}
</style>
