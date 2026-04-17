import { shallowMount } from "@vue/test-utils";
import MemberCard from "@/components/Business/MemberCard.vue";

describe("MemberCard", () => {
  const memberMock = {
    name: "test name",
    role: "test role",
    image: "test image",
  };

  const createComponent = () => {
    return shallowMount(MemberCard, {
      propsData: { member: memberMock },
    });
  };

  it("renders the name and role", () => {
    const wrapper = createComponent();

    const name = wrapper.find('[data-test="member-name"]');
    const role = wrapper.find(`[data-test="member-role"]`);

    expect(name.text()).toBe(memberMock.name);
    expect(role.text()).toBe(memberMock.role);
  });

  it("renders the image with correct attirbutes", () => {
    const wrapper = createComponent();

    const img = wrapper.find('[data-test="member-image"]');

    expect(img.attributes("src")).toBe(memberMock.image);
  });
});
