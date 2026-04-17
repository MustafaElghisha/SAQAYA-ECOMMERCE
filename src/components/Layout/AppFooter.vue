<template>
  <div class="footer-wrapper">
    <footer class="footer">
      <div class="footer__main">
        <div class="footer__section">
          <div class="footer__logo">
            <img src="../../assets/icons/Logo-white.svg" alt="Website Logo" />
          </div>
          <h2 class="footer__heading">Subscribe</h2>
          <p class="footer__subtext">Get 10% off your first order</p>
          <div class="footer__subscribe-form">
            <input
              type="email"
              class="footer__email-input"
              placeholder="Enter your email"
            />
            <img
              src="../../assets/icons/icon-send.svg"
              alt="Send Icon"
              class="footer__send-icon"
              height="24"
              width="24"
            />
          </div>
        </div>

        <div class="footer__section">
          <h2 class="footer__heading">Support</h2>
          <nav class="footer__nav">
            <ul class="footer__nav-list">
              <li
                class="footer__nav-item"
                v-for="(item, index) in supportItems"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
          </nav>
        </div>

        <div class="footer__section">
          <h2 class="footer__heading">Account</h2>
          <nav class="footer__nav">
            <ul class="footer__nav-list">
              <li
                class="footer__nav-item"
                v-for="(item, index) in accountItems"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
          </nav>
        </div>

        <div class="footer__section">
          <h2 class="footer__heading">Quick Link</h2>
          <nav class="footer__nav">
            <ul class="footer__nav-list">
              <li
                class="footer__nav-item"
                v-for="(item, index) in quickLinkItems"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
          </nav>
        </div>

        <div class="footer__section">
          <h2 class="footer__heading">Download App</h2>
          <p class="footer__app-text">Save $3 with App New User Only</p>

          <div class="footer__app-badges">
            <img
              src="../../assets/icons/Qr Code.svg"
              alt="QR Code"
              class="footer__qr-code"
              width="80"
              height="80"
            />
            <div class="footer__store-badges">
              <img
                src="../../assets/icons/google-play.svg"
                alt="Get it on Google Play"
                class="footer__store-badge"
                width="110"
                height="40"
              />
              <img
                src="../../assets/icons/download-appstore.svg"
                alt="Download on the App Store"
                class="footer__store-badge"
                width="110"
                height="40"
              />
            </div>
          </div>

          <nav class="footer__social-nav">
            <ul class="footer__social-list">
              <li
                class="footer__social-item"
                v-for="(social, index) in socialLinks"
                :key="index"
              >
                <img
                  :src="social.icon"
                  :alt="social.alt"
                  class="footer__social-icon"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="footer__copyright">
        <img
          src="../../assets/icons/icon-copyright.svg"
          alt="Copyright icon"
          class="footer__copyright-icon"
        />
        <p class="footer__copyright-text">
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="css" scoped>
.footer-wrapper {
  background-color: var(--clr-neutral-950);
  color: var(--clr-neutral-100);
}

.footer {
  margin-inline: auto;
  max-width: 75rem;
  padding: 1.25rem 1rem 1.5rem;
}

.footer__main {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem 5rem;
  padding-block: 3.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.footer__heading {
  font-weight: 500;
  font-size: var(--fs-lg);
  margin-bottom: 1.5rem;
}
.footer__logo {
  margin-bottom: 1.5rem;
}

.footer__nav-list {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
.footer__nav-item {
  max-width: 18ch;
}

.footer__subscribe-form {
  display: flex;
  align-items: center;
  border: 2px solid var(--clr-neutral-100);
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  margin-top: 1rem;
}
.footer__email-input {
  max-width: 10rem;
  border: none;
  outline: none;
  background: transparent;
  color: var(--clr-neutral-100);
}
.footer__send-icon {
  cursor: pointer;
}

.footer__app-badges {
  display: flex;
  column-gap: 0.5rem;
  padding-block: 0.5rem 1.5rem;
}
.footer__store-badges {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.footer__app-text {
  font-size: var(--fs-xs);
  font-weight: 500;
  color: rgba(250, 250, 250, 0.7);
}
.footer__social-list {
  display: flex;
  column-gap: 1.5rem;
}

.footer__copyright {
  display: flex;
  justify-content: center;
  column-gap: 6px;
  padding-top: 1rem;
}
.footer__copyright-text {
  color: rgba(249, 249, 249, 0.3);
}
</style>

<script>
import facebookIcon from "@/assets/icons/Icon-Facebook.svg";
import twitterIcon from "@/assets/icons/Icon-Twitter.svg";
import linkedinIcon from "@/assets/icons/Linkedin.svg";
import instagramIcon from "@/assets/icons/icon-instagram.svg";

export default {
  data() {
    return {
      supportItems: [
        "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
        "exclusive@gmail.com",
        "+88015-88888-9999",
      ],
      accountItems: [
        "My Account",
        "Login / Register",
        "Cart",
        "Wishlist",
        "Shop",
      ],
      quickLinkItems: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"],
      socialLinks: [
        {
          icon: facebookIcon,
          alt: "Facebook",
        },
        {
          icon: twitterIcon,
          alt: "Twitter",
        },
        {
          icon: instagramIcon,
          alt: "Instagram",
        },
        {
          icon: linkedinIcon,
          alt: "LinkedIn",
        },
      ],
    };
  },
};
</script>
