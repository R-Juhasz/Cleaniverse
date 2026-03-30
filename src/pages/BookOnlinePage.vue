<template>
  <div>
    <section class="page-hero">
      <div class="container-shell split-panel">
        <div class="hero-copy animate-rise">
          <span class="hero-kicker">Book online</span>
          <h1>Request a clean with the details we actually need to quote it well.</h1>
          <p>
            The booking experience now asks for service type, property type, timing, and notes up front so follow-up feels more useful and less back-and-forth.
          </p>
          <ul class="detail-list">
            <li v-for="note in bookingNotes" :key="note">{{ note }}</li>
          </ul>
        </div>

        <div class="media-card animate-rise">
          <img :src="heroImage" alt="Cleaner smiling while tidying a bright room" />
          <div class="floating-note note-top">
            <span class="mini-label">Booking flow</span>
            <span class="mini-value">Enquiry first. Confirmation second. Payment only after the clean is properly scoped.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container-shell split-panel">
        <div class="quote-card animate-rise">
          <span class="eyebrow-chip">What to expect</span>
          <h3 class="mt-4">A better brief means a better visit.</h3>
          <p class="mt-3">
            Tell us the service you want, the type of space, and anything unusual about the job. That lets us recommend the right clean and confirm a sensible price.
          </p>
          <ul class="check-list mt-6">
            <li>Choose from the full residential, commercial, and specialist service range.</li>
            <li>Share your preferred date so we can check availability against the right crew and scope.</li>
            <li>Add notes for access, parking, problem areas, or special requests.</li>
          </ul>
        </div>

        <form class="form-panel animate-rise" @submit.prevent="submitForm">
          <div>
            <span class="eyebrow-chip">Quote request form</span>
            <h3 class="mt-4">Tell us about the clean</h3>
          </div>

          <div class="form-grid">
            <div class="field-group">
              <label for="booking-name" class="field-label">Full name</label>
              <input id="booking-name" v-model="form.name" type="text" class="field-input" required />
            </div>

            <div class="field-group">
              <label for="booking-email" class="field-label">Email</label>
              <input id="booking-email" v-model="form.email" type="email" class="field-input" required />
            </div>

            <div class="field-group">
              <label for="booking-phone" class="field-label">Phone</label>
              <input id="booking-phone" v-model="form.phone" type="tel" class="field-input" />
            </div>

            <div class="field-group">
              <label for="booking-service" class="field-label">Service</label>
              <select id="booking-service" v-model="form.service" class="field-select" required>
                <option disabled value="">Select a service</option>
                <option v-for="service in serviceOptions" :key="service.slug" :value="service.title">
                  {{ service.title }}
                </option>
              </select>
            </div>

            <div class="field-group">
              <label for="booking-property" class="field-label">Property type</label>
              <select id="booking-property" v-model="form.propertyType" class="field-select" required>
                <option disabled value="">Select property type</option>
                <option>Home or flat</option>
                <option>Office or studio</option>
                <option>Shared building or communal area</option>
                <option>Other</option>
              </select>
            </div>

            <div class="field-group">
              <label for="booking-frequency" class="field-label">Visit frequency</label>
              <select id="booking-frequency" v-model="form.frequency" class="field-select" required>
                <option disabled value="">Select frequency</option>
                <option>One-off clean</option>
                <option>Weekly</option>
                <option>Fortnightly</option>
                <option>Monthly</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div class="field-group">
              <label for="booking-date" class="field-label">Preferred date</label>
              <input id="booking-date" v-model="form.preferredDate" :min="minDate" type="date" class="field-input" required />
            </div>

            <div class="field-group">
              <label for="booking-postcode" class="field-label">Area or postcode</label>
              <input id="booking-postcode" v-model="form.postcode" type="text" class="field-input" />
            </div>

            <div class="field-group is-full">
              <label for="booking-notes" class="field-label">Notes about the job</label>
              <textarea
                id="booking-notes"
                v-model="form.notes"
                class="field-textarea"
                placeholder="Tell us about rooms, problem areas, access instructions, or anything else that matters."
              ></textarea>
            </div>
          </div>

          <p v-if="status.message" class="status-message" :class="status.kind === 'success' ? 'status-success' : 'status-error'">
            {{ status.message }}
          </p>

          <button type="submit" class="button-primary" :disabled="isSubmitting">
            {{ isSubmitting ? 'Sending request...' : 'Send booking request' }}
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
import heroImage from '@/assets/images/homepagepic.jpg';
import { allServices } from '@/data/siteContent';
import { buildApiUrl } from '@/utils/api';

function todayForInput() {
  return new Date().toLocaleDateString('en-CA');
}

export default {
  data() {
    return {
      heroImage,
      serviceOptions: allServices,
      bookingNotes: [
        'Use this form for homes, offices, specialist jobs, or custom scopes.',
        'We confirm the right service and final details before asking for payment.',
        'The more detail you give us here, the faster we can respond with the right next step.',
      ],
      minDate: todayForInput(),
      isSubmitting: false,
      status: {
        kind: '',
        message: '',
      },
      form: {
        name: '',
        email: '',
        phone: '',
        service: '',
        propertyType: '',
        frequency: '',
        preferredDate: '',
        postcode: '',
        notes: '',
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
          `Booking request for: ${this.form.service}`,
          `Phone: ${this.form.phone || 'Not provided'}`,
          `Property type: ${this.form.propertyType}`,
          `Frequency: ${this.form.frequency}`,
          `Preferred date: ${this.form.preferredDate}`,
          `Area or postcode: ${this.form.postcode || 'Not provided'}`,
          `Notes: ${this.form.notes || 'No additional notes'}`,
        ].join('\n'),
      };

      try {
        const response = await fetch(buildApiUrl('/api/sendEmail'), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Failed to send booking request');
        }

        this.status = {
          kind: 'success',
          message: 'Your booking request has been sent. Cleaniverse can now review the scope and confirm the next step by email.',
        };
        this.form = {
          name: '',
          email: '',
          phone: '',
          service: '',
          propertyType: '',
          frequency: '',
          preferredDate: '',
          postcode: '',
          notes: '',
        };
      } catch (error) {
        console.error('Booking request error:', error);
        this.status = {
          kind: 'error',
          message: 'The request could not be sent right now. Please try again or contact Cleaniverse by email.',
        };
      } finally {
        this.isSubmitting = false;
      }
    },
  },
};
</script>
