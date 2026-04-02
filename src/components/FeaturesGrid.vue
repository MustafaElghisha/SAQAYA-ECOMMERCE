<template>
  <div class="about__features">
    <ul class="about__features-list">
      <li
        v-for="feature in features"
        :key="feature.title"
        class="about__feature"
      >
        <div class="about__feature-icon">
          <img :src="feature.icon" :alt="feature.alt" />
        </div>
        <h2 class="about__feature-title">{{ feature.title }}</h2>
        <p class="about__feature-description">
          {{ feature.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.about__features {
  margin-block: 140px;
}
.about__feature {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about__feature-icon {
  padding: 9px;
  background-color: black;
  border-radius: 50%;
  outline: 11px solid rgba(47, 46, 48, 0.3);
}
.about__features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 260px);
  gap: 86px;
  justify-content: center;
}
.about__feature-title {
  font-weight: 600;
  font-size: 20px;
  padding-block: 24px 8px;
}
.about__feature-description {
  font-size: 14px;
}
</style>

<script>
import deliveryIcon from "@/assets/icons/icon-delivery.svg";
import customerServiceIcon from "@/assets/icons/Icon-Customer service.svg";
import secureIcon from "@/assets/icons/Icon-secure.svg";

export default {
  name: "FeaturesGrid",
  data() {
    return {
      features: [
        {
          icon: deliveryIcon,
          alt: "Fast delivery icon",
          title: "FREE AND FAST DELIVERY",
          description: "Free delivery for all orders over $140",
        },
        {
          icon: customerServiceIcon,
          alt: "Customer service icon",
          title: "24/7 CUSTOMER SERVICE",
          description: "Friendly 24/7 customer support",
        },
        {
          icon: secureIcon,
          alt: "Money back guarantee icon",
          title: "MONEY BACK GUARANTEE",
          description: "We return money within 30 days",
        },
      ],
    };
  },
};
</script>
