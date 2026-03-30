<template>
  <div class="faq-stack">
    <article
      v-for="(item, index) in items"
      :key="item.question"
      class="faq-item animate-rise"
    >
      <button
        type="button"
        class="faq-trigger"
        :aria-expanded="openIndex === index ? 'true' : 'false'"
        @click="toggle(index)"
      >
        <span>
          <span class="eyebrow-chip">{{ item.category }}</span>
          <strong>{{ item.question }}</strong>
        </span>
        <span class="faq-icon">{{ openIndex === index ? '-' : '+' }}</span>
      </button>
      <p v-if="openIndex === index" class="faq-answer">{{ item.answer }}</p>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      openIndex: 0,
    };
  },
  methods: {
    toggle(index) {
      this.openIndex = this.openIndex === index ? -1 : index;
    },
  },
};
</script>
