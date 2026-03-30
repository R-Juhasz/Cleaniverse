<template>
  <div>
    <section class="page-hero">
      <div class="container-shell hero-grid">
        <div class="hero-copy animate-rise">
          <span class="hero-kicker">Modern cleaning company</span>
          <h1>Fresh spaces that feel instantly lighter.</h1>
          <p>
            Cleaniverse delivers residential and commercial cleaning with a calmer, more polished experience from the first enquiry to the final walkthrough.
          </p>
          <div class="hero-actions">
            <router-link to="/book-online" class="button-primary">Request a quote</router-link>
            <router-link to="/cleans" class="button-secondary">Explore services</router-link>
          </div>
          <div class="pill-list">
            <span v-for="highlight in highlights" :key="highlight">{{ highlight }}</span>
          </div>
        </div>

        <div class="media-card animate-rise">
          <img :src="heroImage" alt="Cleaner polishing a bright modern interior" />
          <div class="floating-note note-top">
            <span class="mini-label">What makes it different</span>
            <span class="mini-value">Clear scopes, cleaner design, smoother booking.</span>
          </div>
          <div class="floating-note note-bottom">
            <span class="mini-label">Most requested</span>
            <span class="mini-value">Routine home cleans, office upkeep, and move-ready resets.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container-shell">
        <div class="section-header">
          <span class="hero-kicker">Popular services</span>
          <h2>Built around the spaces people need cleaned most.</h2>
          <p>
            Whether you need dependable weekly support, a one-off deep reset, or a tidy workplace ready for tomorrow morning, the service range is now easier to browse and compare.
          </p>
        </div>

        <div class="service-group-grid mt-8">
          <service-card v-for="service in featuredServices" :key="service.slug" :service="service" />
        </div>
      </div>
    </section>

    <section class="page-section section-muted">
      <div class="container-shell">
        <div class="section-header">
          <span class="hero-kicker">Why it feels modern</span>
          <h2>A cleaning brand that looks and works more professionally.</h2>
        </div>

        <div class="three-column-grid mt-8">
          <article v-for="item in differentiators" :key="item.title" class="soft-card animate-rise">
            <span class="eyebrow-chip">{{ item.eyebrow }}</span>
            <h3 class="mt-4">{{ item.title }}</h3>
            <p class="mt-3">{{ item.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container-shell split-panel">
        <div class="section-header">
          <span class="hero-kicker">Simple process</span>
          <h2>Three clear steps from enquiry to a space that feels reset.</h2>
          <p>
            The site now guides visitors toward the right service quickly, while keeping the actual booking process practical and straightforward.
          </p>
        </div>

        <div class="process-grid">
          <article v-for="step in steps" :key="step.title" class="quote-card animate-rise">
            <span class="eyebrow-chip">Step</span>
            <h3 class="mt-4">{{ step.title }}</h3>
            <p class="mt-3">{{ step.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section section-muted">
      <div class="container-shell split-panel">
        <div class="section-header">
          <span class="hero-kicker">Questions answered</span>
          <h2>Common booking, pricing, and service questions in one place.</h2>
          <p>
            A cleaner FAQ experience makes it easier for visitors to understand what happens next before they enquire.
          </p>
          <div class="hero-actions">
            <router-link to="/faq" class="button-secondary">View all FAQs</router-link>
            <router-link to="/contact-us" class="button-primary">Talk to Cleaniverse</router-link>
          </div>
        </div>

        <faq-accordion :items="faqPreview" />
      </div>
    </section>

    <section class="page-section">
      <div class="container-shell">
        <div class="cta-banner animate-rise">
          <h2>Need a cleaner website and a cleaner booking journey to match?</h2>
          <p>
            This refreshed version now positions Cleaniverse more like a modern service brand: sharper messaging, safer payment guidance, and a stronger path to enquiry.
          </p>
          <div class="hero-actions mt-6">
            <router-link to="/book-online" class="button-primary">Book online</router-link>
            <router-link to="/contact-us" class="button-secondary">Ask about a custom clean</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import heroImage from '@/assets/images/homepagepic.jpg';
import FaqAccordion from '@/components/FaqAccordion.vue';
import ServiceCard from '@/components/ServiceCard.vue';
import { allServices, faqItems, featuredServiceSlugs, processSteps, trustHighlights } from '@/data/siteContent';

export default {
  components: {
    FaqAccordion,
    ServiceCard,
  },
  data() {
    return {
      heroImage,
      highlights: trustHighlights,
      steps: processSteps,
      faqPreview: faqItems.slice(0, 4),
      featuredServices: allServices.filter((service) => featuredServiceSlugs.includes(service.slug)),
      differentiators: [
        {
          eyebrow: 'Clearer positioning',
          title: 'The brand now speaks to homes and workplaces with more confidence.',
          description:
            'Stronger headlines, cleaner service categories, and a more premium visual system help the business feel current instead of templated.',
        },
        {
          eyebrow: 'Better conversion',
          title: 'Visitors can move from browsing to booking without getting lost.',
          description:
            'Services are grouped more logically, the booking page asks for the right details, and the primary calls to action are consistent across the site.',
        },
        {
          eyebrow: 'Safer experience',
          title: 'Payment guidance is now professional instead of misleading.',
          description:
            'The old raw card form has been replaced with a payment support flow that fits the actual service process and sets better expectations.',
        },
      ],
    };
  },
};
</script>
