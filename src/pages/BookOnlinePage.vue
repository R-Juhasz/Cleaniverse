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
    submitForm() {
      if (
        this.form.name &&
        this.form.email &&
        this.form.service &&
        this.form.date
      ) {
        alert(`Thank you, ${this.form.name}! Your booking has been submitted.`);
        this.form = {
          name: "",
          email: "",
          service: "",
          date: "",
          comments: "",
        };
      } else {
        alert("Please fill out all required fields.");
      }
    },
  },
};
</script>

<style scoped>
/* Custom styles for the booking page */
</style>
