<template>
  <div>
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../Layout/AppHeader.vue";
import AppFooter from "../Layout/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
