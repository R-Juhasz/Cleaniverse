<template>
  <footer class="site-footer">
    <div class="container-shell footer-grid">
      <div class="footer-brand">
        <div class="brand-link footer-brand-lockup">
          <span class="brand-orb"></span>
          <span class="brand-copy">
            <strong>Cleaniverse</strong>
            <small>Modern cleaning services with a polished, people-first feel.</small>
          </span>
        </div>
        <p class="footer-copy">
          Built for busy homes, growing teams, and spaces that need to feel fresh, calm, and ready for what comes next.
        </p>
        <a href="mailto:cleaniverseLTD@gmail.com" class="footer-email">cleaniverseLTD@gmail.com</a>
      </div>

      <div>
        <p class="footer-heading">Quick links</p>
        <div class="footer-links">
          <router-link v-for="link in links" :key="link.to" :to="link.to">{{ link.label }}</router-link>
        </div>
      </div>

      <div>
        <p class="footer-heading">Popular services</p>
        <div class="footer-links">
          <router-link
            v-for="service in featuredServices"
            :key="service.slug"
            :to="`/${service.slug}`"
          >
            {{ service.title }}
          </router-link>
        </div>
      </div>
    </div>

    <div class="container-shell footer-bottom">
      <p>(c) {{ year }} Cleaniverse. Designed for a cleaner, simpler booking journey.</p>
      <router-link to="/faq">View common questions</router-link>
    </div>
  </footer>
</template>

<script>
import { allServices, featuredServiceSlugs, footerLinks } from '@/data/siteContent';

export default {
  data() {
    return {
      links: footerLinks,
      featuredServices: allServices.filter((service) => featuredServiceSlugs.includes(service.slug)),
      year: new Date().getFullYear(),
    };
  },
};
</script>
