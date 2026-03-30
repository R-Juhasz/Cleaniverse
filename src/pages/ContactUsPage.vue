<template>
  <div>
    <section class="page-hero">
      <div class="container-shell split-panel">
        <div class="hero-copy animate-rise">
          <span class="hero-kicker">Contact Cleaniverse</span>
          <h1>Use the right contact path for quotes, support, or custom cleaning requests.</h1>
          <p>
            The contact page now works like a proper service business contact hub instead of just a plain form. Visitors can message the team, jump to booking, or get payment help from here.
          </p>
        </div>

        <div class="three-column-grid">
          <article v-for="card in cards" :key="card.title" class="soft-card animate-rise">
            <span class="eyebrow-chip">{{ card.title }}</span>
            <p class="mt-4">{{ card.detail }}</p>
            <router-link v-if="card.href.startsWith('/')" :to="card.href" class="inline-link mt-4">
              Open page
            </router-link>
            <a v-else :href="card.href" class="inline-link mt-4">Send email</a>
          </article>
        </div>
      </div>
    </section>

    <section class="page-section section-muted">
      <div class="container-shell split-panel">
        <div class="quote-card animate-rise">
          <span class="eyebrow-chip">Best for</span>
          <h3 class="mt-4">Use this page when the job needs context.</h3>
          <ul class="check-list mt-6">
            <li>Commercial quotes or recurring contract conversations.</li>
            <li>Custom cleaning requests that do not match a standard package.</li>
            <li>General questions before booking or after a visit has been arranged.</li>
          </ul>
        </div>

        <form class="form-panel animate-rise" @submit.prevent="submitForm">
          <div>
            <span class="eyebrow-chip">Contact form</span>
            <h3 class="mt-4">Send a message</h3>
          </div>

          <div class="form-grid">
            <div class="field-group">
              <label for="contact-name" class="field-label">Full name</label>
              <input id="contact-name" v-model="form.name" type="text" class="field-input" required />
            </div>

            <div class="field-group">
              <label for="contact-email" class="field-label">Email</label>
              <input id="contact-email" v-model="form.email" type="email" class="field-input" required />
            </div>

            <div class="field-group is-full">
              <label for="contact-type" class="field-label">What do you need help with?</label>
              <select id="contact-type" v-model="form.inquiryType" class="field-select" required>
                <option disabled value="">Select an enquiry type</option>
                <option>General enquiry</option>
                <option>Commercial quote</option>
                <option>Custom scope cleaning</option>
                <option>Existing booking support</option>
                <option>Payment help</option>
              </select>
            </div>

            <div class="field-group is-full">
              <label for="contact-message" class="field-label">Message</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                class="field-textarea"
                placeholder="Tell us what you need, the property type, and any useful context."
                required
              ></textarea>
            </div>
          </div>

          <p v-if="status.message" class="status-message" :class="status.kind === 'success' ? 'status-success' : 'status-error'">
            {{ status.message }}
          </p>

          <button type="submit" class="button-primary" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending message...' : 'Send message' }}
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { contactCards } from '@/data/siteContent';
import { buildApiUrl } from '@/utils/api';

export default {
  data() {
    return {
      cards: contactCards,
      isSubmitting: false,
      status: {
        kind: '',
        message: '',
      },
      form: {
        name: '',
        email: '',
        inquiryType: '',
        message: '',
      },
    };
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      this.status = { kind: '', message: '' };

      const payload = {
        name: this.form.name,
        email: this.form.email,
        message: `Enquiry type: ${this.form.inquiryType}\n\n${this.form.message}`,
      };

      try {
        const response = await fetch(buildApiUrl('/api/sendEmail'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        this.status = {
          kind: 'success',
          message: 'Your message has been sent. Cleaniverse can now pick this up and reply with the right next step.',
        };
        this.form = {
          name: '',
          email: '',
          inquiryType: '',
          message: '',
        };
      } catch (error) {
        console.error('Contact form error:', error);
        this.status = {
          kind: 'error',
          message: 'The message could not be sent right now. Please try again or email Cleaniverse directly.',
        };
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>
