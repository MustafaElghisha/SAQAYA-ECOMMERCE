<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__logo">
        <router-link to="/">
          <img src="../assets/icons/Logo.svg" alt="Website Logo" />
        </router-link>
      </div>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li
            v-for="(link, index) in navLinks"
            :key="index"
            class="header__nav-item"
          >
            <router-link class="header__nav-link" :to="link.link">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="header__search">
        <div class="header__search-wrapper">
          <input
            type="text"
            placeholder="What are you looking for?"
            class="header__search-input"
          />
          <img
            src="../assets/icons/Search.svg"
            alt="Search"
            class="header__search-icon"
          />
        </div>
        <div class="header__cart">
          <img
            src="../assets/icons/Cart.svg"
            alt="Cart"
            width="32"
            height="32"
          />
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="css" scoped>
.wrapper {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.header {
  max-width: 75rem;
  margin-inline: auto;
  padding: 1rem 0.625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__nav-list {
  display: flex;
  align-items: center;
  column-gap: 3rem;
}

.header__nav-link {
  color: #000000;
}

.header__search {
  display: flex;
  align-items: center;
  column-gap: 2rem;
}

.header__search-wrapper {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #f5f5f5;
  font-size: var(--fs-xs);
}

.header__search-input {
  outline: none;
  border: none;
  background: transparent;
}
.header__search-icon {
  cursor: pointer;
}
</style>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Contact",
          link: "/contact",
        },
        {
          name: "About",
          link: "/about-us",
        },
      ],
    };
  },
};
</script>
