<template>
  <div class="app-shell">
    <site-header />
    <main class="app-main">
      <router-view />
    </main>
    <site-footer />
  </div>
</template>

<script>
import SiteFooter from '@/components/SiteFooter.vue';
import SiteHeader from '@/components/SiteHeader.vue';

export default {
  components: {
    SiteFooter,
    SiteHeader,
  },
};
</script>
