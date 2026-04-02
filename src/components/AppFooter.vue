<template>
  <div class="footer-wrapper">
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__section footer__section--subscribe">
          <div class="footer__logo">
            <img src="../assets/icons/Logo-white.svg" alt="Website Logo" />
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
              src="../assets/icons/icon-send.svg"
              alt="Send Icon"
              class="footer__send-icon"
              height="24"
              width="24"
            />
          </div>
        </div>

        <div class="footer__section footer__section--support">
          <h2 class="footer__heading">Support</h2>
          <nav class="footer__nav">
            <ul class="footer__nav-list">
              <li class="footer__nav-item footer__nav-item--address">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </li>
              <li class="footer__nav-item footer__nav-item--email">
                exclusive@gmail.com
              </li>
              <li class="footer__nav-item footer__nav-item--phone">
                +88015-88888-9999
              </li>
            </ul>
          </nav>
        </div>

        <div class="footer__section footer__section--account">
          <h2 class="footer__heading">Account</h2>
          <nav class="footer__nav">
            <ul class="footer__nav-list">
              <li class="footer__nav-item">My Account</li>
              <li class="footer__nav-item">Login / Register</li>
              <li class="footer__nav-item">Cart</li>
              <li class="footer__nav-item">Wishlist</li>
              <li class="footer__nav-item">Shop</li>
            </ul>
          </nav>
        </div>

        <div class="footer__section footer__section--quick-links">
          <h2 class="footer__heading">Quick Link</h2>
          <nav class="footer__nav">
            <ul class="footer__nav-list">
              <li class="footer__nav-item">Privacy Policy</li>
              <li class="footer__nav-item">Terms Of Use</li>
              <li class="footer__nav-item">FAQ</li>
              <li class="footer__nav-item">Contact</li>
            </ul>
          </nav>
        </div>
        <div class="footer__section">
          <h2 class="footer__heading">Download App</h2>
          <p class="footer__app-text">Save $3 with App New User Only</p>

          <div class="footer__app-badges">
            <img
              src="../assets/icons/Qr Code.svg"
              alt="QR Code"
              class="footer__qr-code"
              width="80"
              height="80"
            />
            <div class="footer__store-badges">
              <img
                src="../assets/icons/google-play.svg"
                alt="Get it on Google Play"
                class="footer__store-badge footer__store-badge--google"
                width="110"
                height="40"
              />
              <img
                src="../assets/icons/download-appstore.svg"
                alt="Download on the App Store"
                class="footer__store-badge footer__store-badge--apple"
                width="110"
                height="40"
              />
            </div>
          </div>

          <nav class="footer__social-nav">
            <ul class="footer__social-list">
              <li class="footer__social-item">
                <img
                  src="../assets/icons/Icon-Facebook.svg"
                  alt="Facebook"
                  class="footer__social-icon"
                />
              </li>
              <li class="footer__social-item">
                <img
                  src="../assets/icons/Icon-Twitter.svg"
                  alt="Twitter"
                  class="footer__social-icon"
                />
              </li>
              <li class="footer__social-item">
                <img
                  src="../assets/icons/icon-instagram.svg"
                  alt="Instagram"
                  class="footer__social-icon"
                />
              </li>
              <li class="footer__social-item">
                <img
                  src="../assets/icons/Icon-Linkedin.svg"
                  alt="LinkedIn"
                  class="footer__social-icon"
                />
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="footer__copyright">
        <img
          src="../assets/icons/icon-copyright.svg"
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
  background-color: black;
  color: #fafafa;
}

.footer {
  margin-inline: auto;
  max-width: 1200px;
  padding: 80px 10px 24px;
  position: relative;
}

.footer__container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 190px);
  gap: 50px;
  padding-bottom: 60px;
}

h2 {
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 24px;
}
.footer__logo {
  margin-bottom: 24px;
}

.footer__nav-list {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.footer__email-input {
  background: transparent;
  outline: none;
  border: 2px solid #fafafa;
  border-radius: 4px;
  max-width: 216px;
  padding: 8px 16px;
  color: rgba(250, 250, 250, 0.4);
  margin-top: 16px;
}
.footer__subscribe-form {
  position: relative;
  display: flex;
  align-items: center;
}

.footer__send-icon {
  position: absolute;
  right: 0;
  bottom: 10px;
}
.footer__app-badges {
  display: flex;
  column-gap: 8px;
  padding-block: 8px 24px;
}

.footer__store-badges {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.footer__store-badge {
  min-width: 110px;
  min-height: 40px;
}

.footer__app-text {
  font-size: 12px;
  font-weight: 500;
  color: rgba(250, 250, 250, 0.7);
}
.footer__social-list {
  display: flex;
  column-gap: 24px;
}

.footer__copyright {
  display: flex;
  justify-content: center;
  column-gap: 6px;
  padding-top: 16px;
}

.footer__copyright::before {
  content: "";
  position: absolute;
  width: 100vw;
  translate: 0 -16px;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.2);
}
.footer__copyright-text {
  color: rgba(249, 249, 249, 0.3);
}
</style>
