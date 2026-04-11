<template>
  <ul class="features-list">
    <FeatureCard
      v-for="(feature, index) in features"
      :key="index"
      :feature="feature"
    />
  </ul>
</template>

<script>
import deliveryIcon from "@/assets/icons/icon-delivery.svg";
import customerServiceIcon from "@/assets/icons/Icon-Customer service.svg";
import secureIcon from "@/assets/icons/Icon-secure.svg";

import FeatureCard from "@/components/Business/FeatureCard.vue";

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
  components: {
    FeatureCard,
  },
};
</script>

<style lang="css" scoped>
.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 266px);
  gap: 88px;
  justify-content: center;
}
</style>
