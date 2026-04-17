<template>
  <li class="about__member">
    <img
      class="about__member-image"
      :src="member.image"
      :alt="member.name"
      data-test="member-image"
    />
    <h2 class="about__member-name" data-test="member-name">
      {{ member.name }}
    </h2>
    <p class="about__member-role" data-test="member-role">{{ member.role }}</p>
    <ul class="about__social-list">
      <li
        class="about__social-item"
        v-for="(social, index) in socialLinks"
        :key="index"
      >
        <img class="about__social-icon" :src="social.icon" :alt="social.alt" />
      </li>
    </ul>
  </li>
</template>

<script>
import twitterIcon from "@/assets/icons/Icon-Twitter-Black.svg";
import instagramIcon from "@/assets/icons/Icon-Instagram-Black.svg";
import linkedinIcon from "@/assets/icons/Icon-Linkedin-Black.svg";

export default {
  props: ["member"],
  data() {
    return {
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
    };
  },
};
</script>

<style lang="css" scoped>
.about__member-name {
  font-size: var(--fs-2xl);
  font-weight: 500;
  padding-block: 2rem 0.5rem;
}
.about__social-list {
  display: flex;
  column-gap: 1rem;
  padding-top: 1rem;
}
</style>
