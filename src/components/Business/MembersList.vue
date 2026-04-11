<template>
  <ul class="about__team">
    <MemberCard
      v-for="(member, index) in members"
      :key="index"
      :member="member"
    />
  </ul>
</template>

<script>
import MemberCard from "@/components/Business/MemberCard.vue";

export default {
  props: ["members"],
  components: { MemberCard },
};
</script>

<style lang="css" scoped>
.about__team {
  display: grid;
  grid-template-columns: repeat(auto-fit, 370px);
  justify-content: center;
  gap: 1.875rem;
}
</style>
