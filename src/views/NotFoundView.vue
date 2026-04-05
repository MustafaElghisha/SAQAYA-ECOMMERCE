<template>
  <div class="not-found">
    <div class="not-found__content">
      <h1 class="not-found__title">404 Not Found</h1>
      <p class="not-found__message">
        Your visited page not found. You may go home page.
      </p>
      <router-link to="/" class="btn not-found__link">
        Back to home page
      </router-link>
    </div>
  </div>
</template>

<style lang="css" scoped>
.not-found__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-block: 140px;
}
.not-found__title {
  color: var(--neutral-950);
  font-weight: 500;
  font-size: var(--fs-5xl);
}
.not-found__message {
  margin-block: 40px 70px;
}
</style>
