import { shallowMount, createLocalVue, RouterLinkStub } from "@vue/test-utils";
import Vuex from "vuex";
import ProductCard from "@/components/Business/ProductCard.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ProductCard.vue", () => {
  let actions;
  let store;
  let wrapper;

  const mockProduct = {
    id: 123,
    title: "Wireless Headphones",
    thumbnail: "headphones.jpg",
    price: 100,
    discountPercentage: 20,
    rating: 4.8,
  };

  beforeEach(() => {
    actions = {
      addToCart: jest.fn(),
    };

    store = new Vuex.Store({
      modules: {
        products: {
          namespaced: true,
          actions,
        },
      },
    });

    wrapper = shallowMount(ProductCard, {
      localVue,
      store,
      propsData: {
        product: mockProduct,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("renders product details correctly", () => {
    const title = wrapper.find('[data-test="product-title"]');
    const image = wrapper.find('[data-test="product-image"]');
    const currentPrice = wrapper.find('[data-test="current-price"]');
    const rating = wrapper.find('[data-test="review-count"]');

    expect(title.text()).toBe("Wireless Headphones");
    expect(image.attributes("src")).toBe("headphones.jpg");
    expect(image.attributes("alt")).toBe("Wireless Headphones");
    expect(currentPrice.text()).toBe("$100");
    expect(rating.text()).toBe("4.8");
  });

  it("renders the original price correctly based on discount", () => {
    const originalPrice = wrapper.find('[data-test ="original-price"]');
    expect(originalPrice.text()).toBe("$120.00");
  });

  it("generates the correct router link for the product details page", () => {
    const routerLink = wrapper.findComponent(RouterLinkStub);
    expect(routerLink.props().to).toBe("/productDetails/123");
  });

  it('calls the addToCart Vuex action with the product when "Add To Cart" is clicked', async () => {
    const addToCartBtn = wrapper.find('[data-test="add-to-cart"]');

    await addToCartBtn.trigger("click");

    expect(actions.addToCart).toHaveBeenCalledTimes(1);
    expect(actions.addToCart.mock.calls[0][1]).toEqual(mockProduct);
  });
});
