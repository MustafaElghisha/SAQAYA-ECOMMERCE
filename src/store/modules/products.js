import axios from "axios";

const state = {
  products: [],
  cart: [],
};

const getters = {
  allProducts: (state) => state.products,

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
  SET_PRODUCTS(state, products) {
    state.products = products;
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
  async fetchProducts({ commit }) {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      commit("SET_PRODUCTS", response.data.products);
    } catch (error) {
      console.log(error);
    }
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
