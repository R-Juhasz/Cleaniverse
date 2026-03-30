<template>
  <div>
    <section class="page-hero">
      <div class="container-shell split-panel">
        <div class="hero-copy animate-rise">
          <span class="hero-kicker">Service catalogue</span>
          <h1>Find the clean that fits the property, pace, and finish you need.</h1>
          <p>
            The service page now feels more like a modern cleaning company showroom: grouped by type, clearer on who each service is for, and easier to compare before booking.
          </p>
          <div class="tag-list">
            <span>Residential upkeep</span>
            <span>Commercial support</span>
            <span>Move-ready and specialist jobs</span>
          </div>
        </div>

        <div class="quote-card animate-rise">
          <span class="eyebrow-chip">How to use this page</span>
          <h3 class="mt-4">Start with the space, then choose the scope.</h3>
          <p class="mt-3">
            Browse home, commercial, or specialist services. Each option links to a cleaner detail page with scope notes, best-fit guidance, and a direct route to booking.
          </p>
          <div class="hero-actions mt-6">
            <router-link to="/book-online" class="button-primary">Book a visit</router-link>
            <router-link to="/contact-us" class="button-secondary">Need help choosing?</router-link>
          </div>
        </div>
      </div>
    </section>

    <section v-for="group in groups" :key="group.id" class="page-section" :class="{ 'section-muted': group.id !== 'home' }">
      <div class="container-shell">
        <div class="section-header">
          <span class="hero-kicker">{{ group.eyebrow }}</span>
          <h2>{{ group.title }}</h2>
          <p>{{ group.description }}</p>
        </div>

        <div class="service-group-grid mt-8">
          <service-card v-for="service in group.services" :key="service.slug" :service="service" />
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container-shell cta-banner animate-rise">
        <h2>Need something outside the standard list?</h2>
        <p>
          Custom scopes are now part of the service architecture too, so bespoke jobs, mixed spaces, and unusual requests still have a clear place in the site journey.
        </p>
        <div class="hero-actions mt-6">
          <router-link to="/custom-clean" class="button-primary">View custom scope cleaning</router-link>
          <router-link to="/contact-us" class="button-secondary">Send a bespoke enquiry</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ServiceCard from '@/components/ServiceCard.vue';
import { serviceGroups } from '@/data/siteContent';

export default {
  components: {
    ServiceCard,
  },
  data() {
    return {
      groups: serviceGroups,
    };
  },
};
</script>
