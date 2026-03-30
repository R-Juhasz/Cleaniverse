<template>
  <div v-if="service">
    <section class="page-hero">
      <div class="container-shell detail-grid">
        <div class="hero-copy animate-rise">
          <span class="hero-kicker">{{ service.groupEyebrow }}</span>
          <h1>{{ service.title }}</h1>
          <p>{{ service.heroBlurb }}</p>
          <div class="hero-actions">
            <router-link to="/book-online" class="button-primary">Book this service</router-link>
            <router-link to="/contact-us" class="button-secondary">Ask a question</router-link>
          </div>
        </div>

        <aside class="detail-sidebar animate-rise">
          <div class="glass-card p-6">
            <span class="eyebrow-chip">Quick summary</span>
            <ul class="detail-list mt-6">
              <li><strong>Starting from:</strong> {{ service.price }}</li>
              <li><strong>Best for:</strong> {{ service.perfectFor }}</li>
              <li><strong>Typical fit:</strong> {{ service.timeline }}</li>
            </ul>
          </div>

          <div class="mini-card">
            <span class="mini-label">Short description</span>
            <p>{{ service.shortDescription }}</p>
          </div>
        </aside>
      </div>
    </section>

    <section class="page-section section-muted">
      <div class="container-shell three-column-grid">
        <article class="feature-panel animate-rise">
          <span class="eyebrow-chip">Included</span>
          <h3 class="mt-4">What the clean covers</h3>
          <ul class="check-list mt-6">
            <li v-for="item in service.includes" :key="item">{{ item }}</li>
          </ul>
        </article>

        <article class="feature-panel animate-rise">
          <span class="eyebrow-chip">Best fit</span>
          <h3 class="mt-4">Who books this most often</h3>
          <ul class="check-list mt-6">
            <li v-for="item in service.bestFor" :key="item">{{ item }}</li>
          </ul>
        </article>

        <article class="feature-panel animate-rise">
          <span class="eyebrow-chip">Optional extras</span>
          <h3 class="mt-4">Ways to tailor the visit</h3>
          <ul class="check-list mt-6">
            <li v-for="item in service.addOns" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="page-section">
      <div class="container-shell split-panel">
        <div class="quote-card animate-rise">
          <span class="eyebrow-chip">Need a hand deciding?</span>
          <h3 class="mt-4">Tell us about the space and we can help choose the right service.</h3>
          <p class="mt-3">
            If the job overlaps multiple service types, the custom scope option is there for a reason. The new site structure is designed to keep that journey clear.
          </p>
          <div class="hero-actions mt-6">
            <router-link to="/book-online" class="button-primary">Start a booking</router-link>
            <router-link to="/custom-clean" class="button-secondary">View custom scope cleaning</router-link>
          </div>
        </div>

        <div class="form-panel animate-rise">
          <div>
            <span class="eyebrow-chip">Related services</span>
            <h3 class="mt-4">You might also want</h3>
          </div>

          <div v-if="relatedServices.length" class="footer-links">
            <router-link v-for="item in relatedServices" :key="item.slug" :to="`/${item.slug}`" class="soft-card">
              <strong>{{ item.title }}</strong>
              <p class="mt-2">{{ item.shortDescription }}</p>
            </router-link>
          </div>
          <p v-else>No related services are configured for this route yet.</p>
        </div>
      </div>
    </section>
  </div>

  <section v-else class="page-section">
    <div class="container-shell cta-banner">
      <h2>That service could not be found.</h2>
      <p>The route is still valid site-wide, but this page does not currently have service data behind it.</p>
      <div class="hero-actions mt-6">
        <router-link to="/cleans" class="button-primary">Browse all services</router-link>
        <router-link to="/" class="button-secondary">Back home</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { allServices, findServiceBySlug } from '@/data/siteContent';

export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    service() {
      return findServiceBySlug(this.slug);
    },
    relatedServices() {
      if (!this.service) {
        return [];
      }

      return allServices
        .filter((item) => item.groupId === this.service.groupId && item.slug !== this.service.slug)
        .slice(0, 3);
    },
  },
};
</script>
