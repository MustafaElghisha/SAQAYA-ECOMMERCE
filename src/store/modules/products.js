import axios from "axios";

const state = {
  products: [],
  categories: [],
  cart: [],
};

const getters = {
  allProducts: (state) => state.products,

  allCategories: (state) => state.categories,

  cartItems: (state) => state.cart,

  cartCount: (state) => {
    return state.cart.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  },

  totalUSD: (state) => {
    return state.cart
      .reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0)
      .toFixed(2);
  },
};

const mutations = {
  APPEND_PRODUCTS(state, products) {
    state.products = [...state.products, ...products];
  },

  RESET_PRODUCTS(state) {
    state.products = [];
  },

  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },

  ADD_TO_CART(state, product) {
    const existingItem = state.cart.find((item) => {
      return item.product.id === product.id;
    });

    if (existingItem) {
      existingItem.quantity++;
    } else {
      state.cart.push({
        product,
        quantity: 1,
      });
    }
  },

  REMOVE_FROM_CART(state, productId) {
    state.cart = state.cart.filter((item) => item.product.id !== productId);
  },

  SET_QUANTITY(state, { quantity, productId }) {
    const product = state.cart.find((item) => {
      return item.product.id === productId;
    });
    product.quantity = quantity;
  },
};

const actions = {
  async fetchProducts(
    { commit },
    {
      limit = 12,
      skip = 0,
      sortBy = "rating",
      order = "desc",
      reset = false,
      category = "",
    } = {}
  ) {
    if (reset) {
      commit("RESET_PRODUCTS");
    }

    const baseUrl = category
      ? `https://dummyjson.com/products/category/${category}`
      : "https://dummyjson.com/products";

    try {
      const res = await axios.get(baseUrl, {
        params: {
          limit,
          skip,
          sortBy,
          order,
        },
      });

      commit("APPEND_PRODUCTS", res.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  async fetchCategories({ commit }) {
    const res = await axios.get("https://dummyjson.com/products/category-list");

    commit("SET_CATEGORIES", res.data);
  },

  addToCart({ commit }, product) {
    commit("ADD_TO_CART", product);
  },

  removeFromCart({ commit }, productId) {
    commit("REMOVE_FROM_CART", productId);
  },

  setQuantity({ commit }, payload) {
    if (payload.quantity <= 0) {
      commit("REMOVE_FROM_CART", payload.productId);
    } else {
      commit("SET_QUANTITY", payload);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
