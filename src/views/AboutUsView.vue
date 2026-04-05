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

    <section class="section about__stats">
      <div class="about__stat-card" v-for="(stat, index) in stats" :key="index">
        <div class="about__stat-icon-wrapper">
          <img class="about__stat-icon" :src="stat.icon" :alt="stat.alt" />
        </div>
        <span class="about__stat-number">{{ stat.number }}</span>
        <p class="about__stat-label">{{ stat.label }}</p>
      </div>
    </section>

    <section class="section about__team">
      <div
        class="about__member"
        v-for="(member, index) in members"
        :key="index"
      >
        <img
          class="about__member-image"
          :src="member.image"
          :alt="member.name"
        />
        <h2 class="about__member-name">{{ member.name }}</h2>
        <p class="about__member-role">{{ member.role }}</p>
        <ul class="about__social-list">
          <li
            class="about__social-item"
            v-for="(social, index) in socialLinks"
            :key="index"
          >
            <img
              class="about__social-icon"
              :src="social.icon"
              :alt="social.alt"
            />
          </li>
        </ul>
      </div>
    </section>

    <section class="section">
      <FeaturesList />
    </section>
  </div>
</template>

<style lang="css" scoped>
.section {
  margin-block: 140px;
}

.about {
  max-width: 1200px;
  margin-inline: auto;
}
.about__header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 75px;
  align-items: center;
}
.about__title {
  font-size: 54px;
  font-weight: 500;
  margin-bottom: 40px;
}
.about__description {
  margin-bottom: 24px;
}

.about__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  gap: 30px;
  justify-content: center;
}
.about__stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  padding: 32px 36px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  transition: all 200ms ease-in-out;

  &:hover {
    color: white;
    background-color: var(--clr-primary-500);
    border-color: transparent;

    .about__stat-icon-wrapper {
      background-color: white;
      outline-color: rgba(255, 255, 255, 0.3);

      > img {
        filter: invert(100%);
        transition: all 200ms ease-in-out;
      }
    }
  }
}
.about__stat-icon-wrapper {
  padding: 9px;
  background-color: black;
  border-radius: 50%;
  outline: 11px solid rgba(47, 46, 48, 0.3);
  transition: all 200ms ease-in-out;
}
.about__stat-number {
  font-size: var(--fs-2xl);
  font-weight: 700;
  padding-block: 24px 12px;
}

.about__team {
  display: grid;
  grid-template-columns: repeat(auto-fit, 370px);
  justify-content: center;
  gap: 30px;
}
.about__member-name {
  font-size: var(--fs-2xl);
  font-weight: 500;
  padding-block: 32px 8px;
}
.about__social-list {
  display: flex;
  column-gap: 16px;
  padding-top: 16px;
}
</style>

<script>
import TomCruise from "@/assets/images/Tom-Cruise.png";
import EmmaWatson from "@/assets/images/Emma-Watson.png";
import WillSmith from "@/assets/images/Will-Smith.png";

import twitterIcon from "@/assets/icons/Icon-Twitter-Black.svg";
import instagramIcon from "@/assets/icons/Icon-Instagram-Black.svg";
import linkedinIcon from "@/assets/icons/Icon-Linkedin-Black.svg";

import shopIcon from "@/assets/icons/shop.svg";
import saleIcon from "@/assets/icons/Sale.svg";
import shoppingBagIcon from "@/assets/icons/Shopping bag.svg";
import moneyBagIcon from "@/assets/icons/Moneybag.svg";

import FeaturesList from "@/components/FeaturesList.vue";

export default {
  components: {
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
      socialLinks: [
        {
          icon: twitterIcon,
          alt: "twitter icon",
        },
        {
          icon: instagramIcon,
          alt: "instagram icon",
        },
        {
          icon: linkedinIcon,
          alt: "linkedin icon",
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
