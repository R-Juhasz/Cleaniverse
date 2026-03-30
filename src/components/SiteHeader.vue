<template>
  <header class="site-header">
    <div class="announcement-bar">
      <div class="container-shell announcement-inner">
        <p>Homes, offices, and specialist cleans with a calmer, more modern booking experience.</p>
        <router-link to="/payment" class="announcement-link">Invoice and payment support</router-link>
      </div>
    </div>

    <div class="nav-shell">
      <div class="container-shell nav-inner">
        <router-link to="/" class="brand-link" aria-label="Cleaniverse home">
          <span class="brand-orb"></span>
          <span class="brand-copy">
            <strong>Cleaniverse</strong>
            <small>Fresh spaces for homes and workplaces</small>
          </span>
        </router-link>

        <nav class="hidden lg:flex nav-links" aria-label="Primary navigation">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="nav-link"
            :class="{ 'is-active': $route.path === link.to }"
          >
            {{ link.label }}
          </router-link>
        </nav>

        <div class="hidden lg:flex nav-actions">
          <router-link to="/payment" class="button-secondary">Pay invoice</router-link>
          <router-link to="/book-online" class="button-primary">Book a clean</router-link>
        </div>

        <button
          type="button"
          class="menu-toggle lg:hidden"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          aria-label="Toggle navigation"
          @click="menuOpen = !menuOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <transition name="fade-slide">
        <div v-if="menuOpen" class="mobile-nav lg:hidden">
          <div class="container-shell mobile-nav-inner">
            <router-link
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="mobile-nav-link"
            >
              {{ link.label }}
            </router-link>
            <router-link to="/payment" class="button-secondary mobile-button">Pay invoice</router-link>
            <router-link to="/book-online" class="button-primary mobile-button">Book a clean</router-link>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import { primaryNavLinks } from '@/data/siteContent';

export default {
  data() {
    return {
      menuOpen: false,
      navLinks: primaryNavLinks,
    };
  },
  watch: {
    $route() {
      this.menuOpen = false;
    },
  },
};
</script>
