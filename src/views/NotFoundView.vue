<template>
  <div class="not-found">
    <div class="not-found__content">
      <h1 class="not-found__title">404 Not Found</h1>
      <p class="not-found__message">
        Your visited page not found. You may go home page.
      </p>
      <router-link to="/" class="not-found__link">
        Back to home page
      </router-link>
    </div>
  </div>
</template>

<style lang="css" scoped>
.not-found__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.not-found__title {
  font-weight: 500;
  font-size: 110px;
  color: rgb(0, 0, 0);
  margin-block: 196px 64px;
}
.not-found__link {
  display: block;
  color: rgb(250, 250, 250);
  padding: 16px 48px;
  background: rgb(219, 68, 68);
  border-radius: 4px;
  margin-block: 80px 140px;
}
</style>
