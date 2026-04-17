<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("products/fetchProducts");
    this.$store.dispatch("products/fetchCategories");
  },
};
</script>
