<template>
  <li class="feature" data-test="feature-item">
    <div class="feature-icon">
      <img :src="feature.icon" :alt="feature.alt" data-test="feature-img" />
    </div>
    <h2 class="feature-title" data-test="feature-title">
      {{ feature.title }}
    </h2>
    <p class="feature-description" data-test="feature-description">
      {{ feature.description }}
    </p>
  </li>
</template>

<script>
export default {
  props: ["feature"],
};
</script>

<style lang="css" scoped>
.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.feature-icon {
  padding: 0.625rem;
  background-color: black;
  border-radius: 50%;
  outline: 12px solid rgba(47, 46, 48, 0.3);
}
.feature-title {
  font-weight: 600;
  font-size: var(--fs-lg);
  padding-block: 1.5rem 0.5rem;
}
.feature-description {
  font-size: var(--fs-sm);
}
</style>
