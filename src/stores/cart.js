import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  const cartCount = computed(() =>
    cart.value.reduce((total, item) => {
      return total + item.quantity;
    }, 0)
  );

  const totalUSD = computed(() =>
    cart.value
      .reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0)
      .toFixed(2)
  );

  function addToCart(product) {
    const existingItem = cart.value.find((item) => {
      return item.product.id === product.id;
    });

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.value.push({
        product,
        quantity: 1,
      });
    }
  }

  function removeFromCart(productId) {
    cart.value = cart.value.filter((item) => item.product.id !== productId);
  }

  function setQuantity(quantity, productId) {
    const product = cart.value.find((item) => {
      return item.product.id === productId;
    });

    if (quantity == 0) removeFromCart(productId);
    else product.quantity = quantity;
  }

  return { cart, cartCount, totalUSD, addToCart, removeFromCart, setQuantity };
});
