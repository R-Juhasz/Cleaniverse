<template>
  <div>
    <section class="page-hero">
      <div class="container-shell split-panel">
        <div class="hero-copy animate-rise">
          <span class="hero-kicker">The team behind the clean</span>
          <h1>Less stock-template energy, more trust, care, and consistency.</h1>
          <p>
            Instead of placeholder staff cards, this page now explains how the Cleaniverse team operates: what standards shape the work, how different crews support different spaces, and why that matters to clients.
          </p>
        </div>

        <div class="three-column-grid">
          <article v-for="principle in principles" :key="principle.title" class="soft-card animate-rise">
            <span class="eyebrow-chip">Team standard</span>
            <h3 class="mt-4">{{ principle.title }}</h3>
            <p class="mt-3">{{ principle.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section section-muted">
      <div class="container-shell">
        <div class="section-header">
          <span class="hero-kicker">Who does what</span>
          <h2>A service model built around the spaces we clean.</h2>
          <p>
            This gives the website a more believable team story without inventing headshots or overcomplicated bios.
          </p>
        </div>

        <div class="three-column-grid mt-8">
          <article v-for="role in roles" :key="role.name" class="role-card animate-rise">
            <span class="avatar-badge">{{ role.initials }}</span>
            <h3 class="mt-5">{{ role.name }}</h3>
            <p class="mt-3">{{ role.summary }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container-shell split-panel">
        <div class="quote-card animate-rise">
          <span class="eyebrow-chip">Service standards</span>
          <h3 class="mt-4">What every clean should feel like</h3>
          <ul class="check-list mt-6">
            <li v-for="standard in standards" :key="standard">{{ standard }}</li>
          </ul>
        </div>

        <div class="cta-banner animate-rise">
          <h2>Want to add real staff bios or photography later?</h2>
          <p>
            This new structure leaves room for that. For now, it gives the site a stronger and more credible team page without relying on fake imagery.
          </p>
          <div class="hero-actions mt-6">
            <router-link to="/contact-us" class="button-primary">Contact Cleaniverse</router-link>
            <router-link to="/book-online" class="button-secondary">Book a visit</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { standardsList, teamPrinciples, teamRoles } from '@/data/siteContent';

export default {
  data() {
    return {
      principles: teamPrinciples,
      roles: teamRoles,
      standards: standardsList,
    };
  },
};
</script>
