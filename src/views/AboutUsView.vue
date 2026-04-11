<template>
  <div class="about">
    <section class="section about__header">
      <div class="about__story">
        <h1 class="about__title">Our Story</h1>
        <p class="about__description">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>
        <p class="about__description">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>
      <img
        class="about__image"
        src="../assets/images/AboutImage.png"
        alt="Two women with bags taking a selfie"
      />
    </section>

    <section class="section">
      <StatsList :stats="stats" />
    </section>

    <section class="section">
      <MembersList :members="members" />
    </section>

    <section class="section">
      <FeaturesList />
    </section>
  </div>
</template>

<style lang="css" scoped>
.section {
  margin-block: 8.75rem;
}

.about {
  max-width: 75rem;
  margin-inline: auto;
}
.about__header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 4.5rem;
  align-items: center;
}
.about__title {
  font-size: 54px;
  font-weight: 500;
  margin-bottom: 2.5rem;
}
.about__description {
  margin-bottom: 1.5rem;
}
</style>

<script>
import TomCruise from "@/assets/images/Tom-Cruise.png";
import EmmaWatson from "@/assets/images/Emma-Watson.png";
import WillSmith from "@/assets/images/Will-Smith.png";

import shopIcon from "@/assets/icons/shop.svg";
import saleIcon from "@/assets/icons/Sale.svg";
import shoppingBagIcon from "@/assets/icons/Shopping bag.svg";
import moneyBagIcon from "@/assets/icons/Moneybag.svg";

import FeaturesList from "@/components/Business/FeaturesList.vue";
import StatsList from "@/components/Business/StatsList.vue";
import MembersList from "@/components/Business/MembersList.vue";

export default {
  components: {
    StatsList,
    MembersList,
    FeaturesList,
  },
  data() {
    return {
      members: [
        {
          image: TomCruise,
          name: "Tom Cruise",
          role: "Founder & Chairman",
        },
        {
          image: EmmaWatson,
          name: "Emma Watson",
          role: "Managing Director",
        },
        {
          image: WillSmith,
          name: "Will Smith",
          role: "Product Designer",
        },
      ],
      stats: [
        {
          icon: shopIcon,
          alt: "shop icon",
          number: "10.5k",
          label: "Sellers active in our site",
        },
        {
          icon: saleIcon,
          alt: "slae icon",
          number: "33k",
          label: "Monthly Produduct Sale",
        },
        {
          icon: shoppingBagIcon,
          alt: "shopping bag icon",
          number: "45.5k",
          label: "Customer active in our site",
        },
        {
          icon: moneyBagIcon,
          alt: "money bag icon",
          number: "25k",
          label: "Annual gross sale in our site",
        },
      ],
    };
  },
};
</script>
