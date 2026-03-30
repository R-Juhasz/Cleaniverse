<template>
  <router-link :to="`/${service.slug}`" class="service-card animate-rise">
    <div class="service-card-top">
      <span class="eyebrow-chip">{{ service.groupEyebrow }}</span>
      <span class="service-price">{{ service.price }}</span>
    </div>
    <h3>{{ service.title }}</h3>
    <p>{{ service.shortDescription }}</p>
    <div class="service-card-bottom">
      <span>{{ service.perfectFor }}</span>
      <span class="service-link-copy">View service</span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
};
</script>
