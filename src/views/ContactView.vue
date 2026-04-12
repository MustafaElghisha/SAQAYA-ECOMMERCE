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
          <ContactCard
            v-for="(contactMethod, index) in contactMethods"
            :key="index"
            :contactMethod="contactMethod"
          />
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

<script>
import phoneIcon from "@/assets/icons/icons-phone.svg";
import mailIcon from "@/assets/icons/icons-mail.svg";
import ContactCard from "@/components/Business/ContactCard.vue";

export default {
  data() {
    return {
      contactMethods: [
        {
          icon: phoneIcon,
          alt: "phone icon",
          title: "Call Us",
          text: "We are available 24/7, 7 days a week.",
          detail: "Phone: +8801611112222",
        },
        {
          icon: mailIcon,
          alt: "mail iocn",
          title: "Write To US",
          text: "Fill out our form and we will contact you within 24 hours.",
        },
      ],
    };
  },
  components: {
    ContactCard,
  },
};
</script>

<style lang="css" scoped>
.contact {
  padding-block: 5rem 8.75rem;
  padding-inline: 0.625rem;
  max-width: 1300px;
  margin-inline: auto;
}
.contact__container {
  display: grid;
  grid-template-columns: 4fr 1fr;
  column-gap: 2rem;
}
.contact__hero-image {
  width: 710px;
}
.contact__details {
  display: flex;
  flex-direction: column;
}
.contact__details,
.contact__info {
  border-radius: 0.25rem;
  box-shadow: 0 1px 13px 0 rgba(0, 0, 0, 0.05);
}
.contact__info {
  padding: 2.5rem 2.25rem;
}

.contact__form {
  padding: 1.5rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  row-gap: 2rem;
}
.contact__inputs {
  display: flex;
  column-gap: 1rem;
}
.contact__input {
  max-width: 235px;
}
.contact__textarea {
  flex: 1;
  padding-block: 2rem;
}
.contact__input,
.contact__textarea {
  outline: none;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  background-color: #f5f5f5;
}
.contact__button {
  border: none;
  color: #f5f5f5;
  background-color: var(--clr-primary-500);
  padding: 1rem 3rem;
  border-radius: 0.25rem;
  align-self: end;
}
</style>
