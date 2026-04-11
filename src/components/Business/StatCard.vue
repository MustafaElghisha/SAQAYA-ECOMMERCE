<template>
  <li class="about__stat-card">
    <div class="about__stat-icon-wrapper">
      <img class="about__stat-icon" :src="stat.icon" :alt="stat.alt" />
    </div>
    <span class="about__stat-number">{{ stat.number }}</span>
    <p class="about__stat-label">{{ stat.label }}</p>
  </li>
</template>

<script>
export default {
  props: ["stat"],
};
</script>

<style lang="css" scoped>
.about__stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding: 2rem 2.25rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0.25rem;
  transition: all 200ms ease-in-out;

  &:hover {
    color: white;
    background-color: var(--clr-primary-500);
    border-color: transparent;

    .about__stat-icon-wrapper {
      background-color: white;
      outline-color: rgba(255, 255, 255, 0.3);

      > img {
        filter: invert(100%);
        transition: all 200ms ease-in-out;
      }
    }
  }
}
.about__stat-icon-wrapper {
  padding: 0.625rem;
  background-color: black;
  border-radius: 50%;
  outline: 12px solid rgba(47, 46, 48, 0.3);
  transition: all 200ms ease-in-out;
}
.about__stat-number {
  font-size: var(--fs-2xl);
  font-weight: 700;
  padding-block: 1.5rem 0.75rem;
}
</style>
