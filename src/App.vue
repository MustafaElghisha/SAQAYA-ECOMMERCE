<template>
  <div>
    <AppHeader></AppHeader>
    <main></main>
    <AppFooter></AppFooter>
  </div>
</template>

<style lang="css" scoped>
main {
  min-height: 100vh;
}
</style>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
