import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import SideCart from "@/components/Business/SideCart.vue";
import CartItem from "@/components/Business/CartItem.vue";
import OrderSummary from "@/components/Business/OrderSummary.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Cart.vue", () => {
  let getters;
  let store;
  let wrapper;

  const mockCartItems = [
    { product: { id: 1, name: "Product 1" }, quantity: 2 },
    { product: { id: 2, name: "Product 2" }, quantity: 1 },
  ];
  const mockTotalUSD = 150.0;

  beforeEach(() => {
    getters = {
      cartItems: () => mockCartItems,
      totalUSD: () => mockTotalUSD,
    };

    store = new Vuex.Store({
      modules: {
        products: {
          namespaced: true,
          getters,
        },
      },
    });

    wrapper = shallowMount(SideCart, {
      store,
      localVue,
      stubs: {
        CartItem: true,
        OrderSummary: true,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("renders the correct title", () => {
    const title = wrapper.find(`[data-test="cart-title"]`);
    expect(title.text()).toBe("Shopping Cart");
  });

  it("renders a CartItem for each item in the store", () => {
    const items = wrapper.findAllComponents(CartItem);
    expect(items).toHaveLength(mockCartItems.length);
  });

  it("passes the totalUSD getter to the OrderSummary component", () => {
    const summary = wrapper.findComponent(OrderSummary);
    expect(summary.props("totalUSD")).toBe(mockTotalUSD);
  });

  it('emits "close" when the close button is clicked', async () => {
    const closeBtn = wrapper.find(`[data-test="close-cart"]`);

    await closeBtn.trigger("click");

    expect(wrapper.emitted().close).toBeTruthy();
    expect(wrapper.emitted().close.length).toBe(1);
  });
});
