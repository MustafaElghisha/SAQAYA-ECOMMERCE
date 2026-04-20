<template>
  <div>
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from "../Layout/AppHeader.vue";
import AppFooter from "../Layout/AppFooter.vue";
</script>
