<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__logo">
        <router-link to="/">
          <img src="../../assets/icons/Logo.svg" alt="Website Logo" />
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
            src="../../assets/icons/Search.svg"
            alt="Search"
            class="header__search-icon"
          />
        </div>
        <div class="header__cart" @click="toggleShowCart">
          <img
            src="../../assets/icons/Cart.svg"
            class="header__cart-icon"
            alt="Cart"
            width="32"
            height="32"
          />
          <span class="header__cart-count">{{ cartCount }}</span>
        </div>
      </div>
    </header>
    <transition name="cart">
      <side-cart v-if="showCart" @close="toggleShowCart" />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SideCart from "../Business/SideCart.vue";
export default {
  components: {
    SideCart,
  },
  data() {
    return {
      showCart: false,
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
  methods: {
    toggleShowCart() {
      this.showCart = !this.showCart;
    },
  },
  computed: {
    ...mapGetters("products", ["cartCount"]),
  },
};
</script>

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
.header__search-icon,
.header__cart-icon {
  cursor: pointer;
}

.header__cart {
  position: relative;
}
.header__cart-count {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-xs);
  color: var(--clr-neutral-100);
  width: 1.1rem;
  height: 1.1rem;
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: var(--clr-primary-500);
  border-radius: 100%;
}

.cart-enter {
  transform: translateX(100%);
}
.cart-enter-active {
  transition: transform 0.3s ease;
}
.cart-enter-to {
  transform: translateX(0);
}
.cart-leave {
  transform: translateX(0);
}
.cart-leave-active {
  transition: transform 0.3s ease;
}
.cart-leave-to {
  transform: translateX(100%);
}
</style>
