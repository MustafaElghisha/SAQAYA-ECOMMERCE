import { mount } from "@vue/test-utils";
import FeatureCard from "@/components/Business/FeatureCard.vue";

describe("Feature.vue", () => {
  const featureMock = {
    icon: "test icon",
    alt: "test alt",
    title: "test title",
    description: "test description",
  };

  const createComponent = () => {
    return mount(FeatureCard, {
      propsData: { feature: featureMock },
    });
  };

  it("renders the title and description using data-test selectors", () => {
    const wrapper = createComponent();

    const title = wrapper.find('[data-test="feature-title"]');
    const description = wrapper.find('[data-test="feature-description"]');

    expect(title.text()).toBe(featureMock.title);
    expect(description.text()).toBe(featureMock.description);
  });

  it("renders the image with correct attributes", () => {
    const wrapper = createComponent();
    const img = wrapper.find('[data-test="feature-img"]');

    expect(img.attributes("src")).toBe(featureMock.icon);
    expect(img.attributes("alt")).toBe(featureMock.alt);
  });
});
