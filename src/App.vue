<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("products/fetchProducts", { limit: 12, skip: 0 });
  },
};
</script>
