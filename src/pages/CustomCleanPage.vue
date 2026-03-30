<template>
  <div class="w-full h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">Custom Clean</h1>
    <p class="max-w-3xl text-lg text-gray-600 text-center mb-6">
      Tailored cleaning services to suit your unique needs. Leave a message with the details of your requirements,
      and we’ll get in touch to ensure your tailored clean is exactly what you want.
    </p>
    <div class="max-w-lg bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
      <p class="text-gray-600 mb-4">
        Please fill out the form below or email us at
        <a href="mailto:cleaniverseLTD@gmail.com" class="text-blue-500 underline">
          cleaniverseLTD@gmail.com
        </a>.
        Our team will reach out to discuss your tailored cleaning needs.
      </p>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-medium mb-1">Name:</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            placeholder="Enter your name"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981]"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-medium mb-1">Email:</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            placeholder="Enter your email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981]"
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-gray-700 font-medium mb-1">Message:</label>
          <textarea
            id="message"
            v-model="formData.message"
            required
            placeholder="Provide details about your cleaning requirements"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#10b981]"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full bg-[#10b981] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#0f9773] transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        // Update the URL to match your Express server endpoint
        const response = await fetch('http://localhost:3000/api/sendEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.formData),
        });
        if (!response.ok) {
          throw new Error('Failed to send message');
        }
        alert('Your message has been sent successfully!');
        // Reset form fields
        this.formData = { name: '', email: '', message: '' };
      } catch (error) {
        console.error('Error sending message:', error);
        alert('Something went wrong. Please try again.');
      }
    },
  },
};
</script>
