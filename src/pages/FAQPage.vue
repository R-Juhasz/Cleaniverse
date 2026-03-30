<template>
  <div>
    <section class="page-hero">
      <div class="container-shell split-panel">
        <div class="hero-copy animate-rise">
          <span class="hero-kicker">Frequently asked questions</span>
          <h1>Cleaner answers for services, booking, pricing, and payments.</h1>
          <p>
            The FAQ is now easier to scan and actually supports the rest of the site journey instead of feeling like a long list dropped on a blank page.
          </p>
          <div class="tag-list">
            <span v-for="category in categories" :key="category">{{ category }}</span>
          </div>
        </div>

        <div class="quote-card animate-rise">
          <span class="eyebrow-chip">Still unsure?</span>
          <h3 class="mt-4">If your question is specific to a property, tell us about the space.</h3>
          <p class="mt-3">
            The service and booking pages are designed to gather the right detail quickly, so custom questions usually get a better answer when they include property type, service type, and timing.
          </p>
          <div class="hero-actions mt-6">
            <router-link to="/book-online" class="button-primary">Book online</router-link>
            <router-link to="/contact-us" class="button-secondary">Ask a question</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section section-muted">
      <div class="container-shell">
        <faq-accordion :items="items" />
      </div>
    </section>
  </div>
</template>

<script>
import FaqAccordion from '@/components/FaqAccordion.vue';
import { faqItems } from '@/data/siteContent';

export default {
  components: {
    FaqAccordion,
  },
  data() {
    return {
      items: faqItems,
      categories: [...new Set(faqItems.map((item) => item.category))],
    };
  },
};
</script>
