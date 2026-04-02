<template>
  <div class="about">
    <div class="about__header">
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
      <div class="about__image-wrapper">
        <img
          class="about__image"
          src="../assets/images/AboutImage.png"
          alt=""
        />
      </div>
    </div>

    <div class="about__stats">
      <div class="about__stat-card">
        <div class="about__stat-icon">
          <img src="../assets/icons/shop.svg" alt="" />
        </div>
        <span class="about__stat-number">10.5k</span>
        <p class="about__stat-label">Sellers active in our site</p>
      </div>

      <div class="about__stat-card">
        <div class="about__stat-icon">
          <img src="../assets/icons/Sale.svg" alt="" width="40" height="40" />
        </div>
        <span class="about__stat-number">33k</span>
        <p class="about__stat-label">Monthly Produduct Sale</p>
      </div>

      <div class="about__stat-card">
        <div class="about__stat-icon">
          <img
            src="../assets/icons/Shopping bag.svg"
            alt=""
            width="40"
            height="40"
          />
        </div>
        <span class="about__stat-number">45.5k</span>
        <p class="about__stat-label">Customer active in our site</p>
      </div>

      <div class="about__stat-card">
        <div class="about__stat-icon">
          <img
            src="../assets/icons/Moneybag.svg"
            alt=""
            width="40"
            height="40"
          />
        </div>
        <span class="about__stat-number">25k</span>
        <p class="about__stat-label">Annual gross sale in our site</p>
      </div>
    </div>

    <div class="about__team">
      <div class="about__member">
        <img
          class="about__member-image"
          src="../assets/images/Tom-Cruise.png"
          alt=""
        />
        <h2 class="about__member-name">Tom Cruise</h2>
        <p class="about__member-role">Founder & Chairman</p>
        <div class="about__social-links">
          <ul class="about__social-list">
            <li class="about__social-item">
              <img
                class="about__social-icon"
                src="../assets/icons/Icon-Twitter-Black.svg"
                alt=""
              />
            </li>
            <li class="about__social-item">
              <img
                class="about__social-icon"
                src="../assets/icons/Icon-Instagram-Black.svg"
                alt=""
              />
            </li>
            <li class="about__social-item">
              <img
                class="about__social-icon"
                src="../assets/icons/Icon-Linkedin-Black.svg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>

      <div class="about__member">
        <img
          class="about__member-image"
          src="../assets/images/Emma-Watson.png"
          alt=""
        />
        <h2 class="about__member-name">Emma Watson</h2>
        <p class="about__member-role">Managing Director</p>
        <div class="about__social-links">
          <ul class="about__social-list">
            <li class="about__social-item">
              <img
                class="about__social-icon"
                src="../assets/icons/Icon-Twitter-Black.svg"
                alt=""
              />
            </li>
            <li class="about__social-item">
              <img
                class="about__social-icon"
                src="../assets/icons/Icon-Instagram-Black.svg"
                alt=""
              />
            </li>
            <li class="about__social-item">
              <img
                class="about__social-icon"
                src="../assets/icons/Icon-Linkedin-Black.svg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>

      <div class="about__member">
        <img
          class="about__member-image"
          src="../assets/images/Will-Smith.png"
          alt=""
        />
        <h2 class="about__member-name">Will Smith</h2>
        <p class="about__member-role">Product Designer</p>
        <div class="about__social-links">
          <ul class="about__social-list">
            <li class="about__social-item">
              <img
                class="about__social-icon"
                src="../assets/icons/Icon-Twitter-Black.svg"
                alt=""
              />
            </li>
            <li class="about__social-item">
              <img
                class="about__social-icon"
                src="../assets/icons/Icon-Instagram-Black.svg"
                alt=""
              />
            </li>
            <li class="about__social-item">
              <img
                class="about__social-icon"
                src="../assets/icons/Icon-Linkedin-Black.svg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <FeaturesGrid />
  </div>
</template>

<style lang="css" scoped>
.about {
  max-width: 1200px;
  margin: 140px auto;
}
.about__header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 75px;
  align-items: center;
}
.about__title {
  margin-bottom: 40px;
  font-weight: 500;
  font-size: 54px;
}
.about__description {
  margin-bottom: 24px;
}
.about__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  gap: 30px;
  margin-block: 140px;
  justify-content: center;
}
.about__stat-card {
  padding: 32px 36px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  transition: all 200ms ease-in-out;
  &:hover {
    color: white;
    background-color: #db4444;
    border-color: transparent;
    .about__stat-icon {
      background-color: white;
      outline-color: rgba(255, 255, 255, 0.3);
      > img {
        filter: brightness(0) invert(0);
      }
    }
  }
}
.about__stat-icon {
  padding: 9px;
  background-color: black;
  border-radius: 50%;
  outline: 11px solid rgba(47, 46, 48, 0.3);
  transition: all 200ms ease-in-out;
}

.about__stat-number {
  padding-block: 24px 12px;
  font-weight: 700;
  font-size: 32px;
}

.about__team {
  display: grid;
  grid-template-columns: repeat(auto-fit, 370px);
  justify-content: center;
  gap: 30px;
  margin-bottom: 196px;
}
.about__member-name {
  font-weight: 500;
  font-size: 32px;
  padding-block: 32px 8px;
}
.about__social-list {
  padding-top: 16px;
  display: flex;
  column-gap: 16px;
}
</style>

<script>
import FeaturesGrid from "@/components/FeaturesGrid.vue";
export default {
  components: {
    FeaturesGrid,
  },
};
</script>
