<template>
  <ul class="features-list">
    <li v-for="feature in features" :key="feature.title" class="feature">
      <div class="feature-icon">
        <img :src="feature.icon" :alt="feature.alt" />
      </div>
      <h2 class="feature-title">{{ feature.title }}</h2>
      <p class="feature-description">
        {{ feature.description }}
      </p>
    </li>
  </ul>
</template>

<style lang="css" scoped>
.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 266px);
  gap: 88px;
  justify-content: center;
}
.feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.feature-icon {
  padding: 9px;
  background-color: black;
  border-radius: 50%;
  outline: 11px solid rgba(47, 46, 48, 0.3);
}
.feature-title {
  font-weight: 600;
  font-size: var(--fs-lg);
  padding-block: 24px 8px;
}
.feature-description {
  font-size: var(--fs-sm);
}
</style>

<script>
import deliveryIcon from "@/assets/icons/icon-delivery.svg";
import customerServiceIcon from "@/assets/icons/Icon-Customer service.svg";
import secureIcon from "@/assets/icons/Icon-secure.svg";

export default {
  name: "FeaturesList",
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
