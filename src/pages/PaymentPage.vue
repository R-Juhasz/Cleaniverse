<template>
  <div>
    <section class="page-hero">
      <div class="container-shell split-panel">
        <div class="hero-copy animate-rise">
          <span class="hero-kicker">Payment support</span>
          <h1>A safer, more credible payment experience for a service business.</h1>
          <p>
            The old payment page collected card details in the browser without a real checkout behind it. This version replaces that with the right message: booking first, secure payment instructions second.
          </p>
          <ul class="check-list">
            <li>Use this page if you need a payment link, invoice reference, or receipt support.</li>
            <li>Cleaniverse does not ask for raw card details through this form.</li>
            <li>If you have not booked yet, start with the booking page instead.</li>
          </ul>
          <div class="hero-actions">
            <router-link to="/book-online" class="button-primary">Book a clean first</router-link>
            <a href="mailto:cleaniverseLTD@gmail.com" class="button-secondary">Email for support</a>
          </div>
        </div>

        <div class="quote-card animate-rise">
          <span class="eyebrow-chip">How payments now work</span>
          <ul class="check-list mt-6">
            <li>Send a booking request or speak to the team about the job.</li>
            <li>Receive the confirmed scope, price, and payment reference.</li>
            <li>Pay through the secure method supplied by Cleaniverse.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="page-section section-muted">
      <div class="container-shell split-panel">
        <div class="quote-card animate-rise">
          <span class="eyebrow-chip">Need help?</span>
          <h3 class="mt-4">Request invoice or payment assistance</h3>
          <p class="mt-3">
            Include your booking name, email, and any invoice or reference details you already have. That gives the team a practical starting point without pretending the website is the payment processor.
          </p>
        </div>

        <form class="form-panel animate-rise" @submit.prevent="submitForm">
          <div>
            <span class="eyebrow-chip">Support form</span>
            <h3 class="mt-4">Ask for a payment link or invoice help</h3>
          </div>

          <div class="form-grid">
            <div class="field-group">
              <label for="payment-name" class="field-label">Full name</label>
              <input id="payment-name" v-model="form.name" type="text" class="field-input" required />
            </div>

            <div class="field-group">
              <label for="payment-email" class="field-label">Email</label>
              <input id="payment-email" v-model="form.email" type="email" class="field-input" required />
            </div>

            <div class="field-group">
              <label for="payment-reference" class="field-label">Booking or invoice reference</label>
              <input id="payment-reference" v-model="form.reference" type="text" class="field-input" />
            </div>

            <div class="field-group">
              <label for="payment-amount" class="field-label">Amount discussed</label>
              <input id="payment-amount" v-model="form.amount" type="text" class="field-input" placeholder="Optional" />
            </div>

            <div class="field-group is-full">
              <label for="payment-message" class="field-label">What do you need?</label>
              <textarea
                id="payment-message"
                v-model="form.message"
                class="field-textarea"
                placeholder="Example: please resend the payment link for my booking, or I need a copy of the invoice."
                required
              ></textarea>
            </div>
          </div>

          <p v-if="status.message" class="status-message" :class="status.kind === 'success' ? 'status-success' : 'status-error'">
            {{ status.message }}
          </p>

          <button type="submit" class="button-primary" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending request...' : 'Send payment support request' }}
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import { buildApiUrl } from '@/utils/api';

export default {
  data() {
    return {
      isSubmitting: false,
      status: {
        kind: '',
        message: '',
      },
      form: {
        name: '',
        email: '',
        reference: '',
        amount: '',
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
        message: [
          'Payment support request',
          `Reference: ${this.form.reference || 'Not provided'}`,
          `Amount: ${this.form.amount || 'Not provided'}`,
          '',
          this.form.message,
        ].join('\n'),
      };

      try {
        const response = await fetch(buildApiUrl('/api/sendEmail'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Failed to send support request');
        }

        this.status = {
          kind: 'success',
          message: 'Your payment support request has been sent. Cleaniverse can now follow up with the right invoice or payment details.',
        };
        this.form = {
          name: '',
          email: '',
          reference: '',
          amount: '',
          message: '',
        };
      } catch (error) {
        console.error('Payment support error:', error);
        this.status = {
          kind: 'error',
          message: 'The request could not be sent right now. Please try again or email Cleaniverse directly.',
        };
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>
