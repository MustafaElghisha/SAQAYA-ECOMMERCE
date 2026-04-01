<template>
  <div class="contact">
    <div class="contact__container">
      <img
        class="contact__hero-image"
        src="../assets/images/ContactUsImage.png"
        alt="contact Us"
        width="805"
        height="781"
      />
      <div class="contact__details">
        <div class="contact__info">
          <div class="contact__card contact__card--call">
            <div class="contact__card-header">
              <img
                class="contact__icon"
                src="../assets/icons/icons-phone.svg"
                alt="Phone Icon"
                width="40"
                height="40"
              />
              <span class="contact__card-title">Call Us</span>
            </div>
            <p class="contact__card-text">
              We are available 24/7, 7 days a week.
            </p>
            <p class="contact__card-detail">Phone: +8801611112222</p>
          </div>

          <div class="contact__card contact__card--mail">
            <div class="contact__card-header">
              <img
                class="contact__icon"
                src="../assets/icons/icons-mail.svg"
                alt="Mail Icon"
                width="40"
                height="40"
              />
              <span class="contact__card-title">Write To US</span>
            </div>
            <p class="contact__card-text">
              Fill out our form and we will contact you within 24 hours.
            </p>
          </div>
        </div>

        <form class="contact__form">
          <div class="contact__inputs">
            <input
              class="contact__input contact__input--text"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              class="contact__input contact__input--email"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>

          <textarea
            class="contact__textarea"
            placeholder="Your Message"
          ></textarea>
          <button class="contact__button" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  padding-block: 80px 140px;
  padding-inline: 10px;
  max-width: 1300px;
  margin-inline: auto;
}
.contact__container {
  display: grid;
  grid-template-columns: 4fr 1fr;
  column-gap: 32px;
}
.contact__hero-image {
  min-width: 710px;
}
.contact__details {
  display: flex;
  flex-direction: column;
}
.contact__details,
.contact__info {
  border-radius: 4px;
  box-shadow: 0 1px 13px 0 rgba(0, 0, 0, 0.05);
}
.contact__info {
  padding: 40px 36px;
}
.contact__card--call {
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
}
.contact__card--mail {
  padding-top: 32px;
}
.contact__card-header {
  display: flex;
  column-gap: 16px;
  align-items: center;
  margin-bottom: 24px;
}
.contact__card-text,
.contact__card-detail {
  margin-top: 16px;
}
.contact__form {
  padding: 24px 32px 48px;
  display: flex;
  flex-direction: column;
  flex: 1;
  row-gap: 32px;
}
.contact__inputs {
  display: flex;
  column-gap: 16px;
}
.contact__input {
  max-width: 235px;
}
.contact__textarea {
  flex: 1;
  padding-block: 32px;
}
.contact__input,
.contact__textarea {
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  background-color: #f5f5f5;
}
.contact__button {
  border: none;
  color: #f5f5f5;
  background-color: #db4444;
  padding: 16px 48px;
  border-radius: 4px;
  align-self: end;
}
</style>
