<template>
  <div class="min-h-screen bg-gray-50 py-8 px-4">
    <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">Book Online</h1>
    <p class="text-center text-gray-600 mb-6">
      Schedule your cleaning appointment with ease. Fill out the form below, and we’ll confirm your booking.
    </p>

    <!-- Booking Form -->
    <div class="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
      <form @submit.prevent="submitForm">
        <!-- Name -->
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-medium mb-2">Your Name</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your name"
            required
          />
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Enter your email"
            required
          />
        </div>

        <!-- Service Type -->
        <div class="mb-4">
          <label for="service" class="block text-gray-700 font-medium mb-2">Service Type</label>
          <select
            id="service"
            v-model="form.service"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            required
          >
            <option value="" disabled>Select a service</option>
            <option v-for="service in services" :key="service" :value="service">
              {{ service }}
            </option>
          </select>
        </div>

        <!-- Date -->
        <div class="mb-4">
          <label for="date" class="block text-gray-700 font-medium mb-2">Preferred Date</label>
          <input
            type="date"
            id="date"
            v-model="form.date"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <!-- Comments -->
        <div class="mb-4">
          <label for="comments" class="block text-gray-700 font-medium mb-2">Additional Comments</label>
          <textarea
            id="comments"
            v-model="form.comments"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Any specific instructions or requests"
            rows="4"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-[#10b981] text-white py-3 rounded-lg font-medium hover:bg-[#0f9773] transition-colors"
        >
          Submit Booking
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        service: "",
        date: "",
        comments: "",
      },
      services: [
        "General House Cleaning",
        "Spring Cleaning",
        "Move-In/Move-Out Cleaning",
        "Deep Cleaning",
        "Post-Renovation Cleaning",
        "Eco-Friendly Cleaning",
      ],
    };
  },
  methods: {
    async submitForm() {
      // We'll combine these fields into one "message" property
      const consolidatedMessage = `
        Service: ${this.form.service}
        Preferred Date: ${this.form.date}
        Comments: ${this.form.comments}
      `;

      // Build the payload for the API
      const payload = {
        name: this.form.name,
        email: this.form.email,
        message: consolidatedMessage,
      };

      try {
        const response = await fetch('http://localhost:3000/api/sendEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Failed to send booking request');
        }

        alert(`Thank you, ${this.form.name}! Your booking has been submitted.`);
        // Reset the form
        this.form = {
          name: "",
          email: "",
          service: "",
          date: "",
          comments: "",
        };
      } catch (error) {
        console.error('Booking error:', error);
        alert('Something went wrong. Please try again.');
      }
    },
  },
};
</script>

<style scoped>
/* Custom styles for the booking page */
</style>
