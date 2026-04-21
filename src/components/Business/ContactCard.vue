<template>
  <div class="contact__card">
    <div class="contact__card-header">
      <img
        class="contact__icon"
        :src="contactMethod.icon"
        :alt="contactMethod.alt"
        width="40"
        height="40"
      />
      <span class="contact__card-title">{{ contactMethod.title }}</span>
    </div>
    <p class="contact__card-text">{{ contactMethod.text }}</p>
    <p class="contact__card-detail" v-if="contactMethod.detail">
      {{ contactMethod.detail }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["contactMethod"]);
</script>

<style lang="css" scoped>
.contact__card {
  padding-block: 2rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    padding-block: 0 2rem;
  }
}
.contact__card-header {
  display: flex;
  column-gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
}
.contact__card-text,
.contact__card-detail {
  margin-top: 1rem;
}
</style>
