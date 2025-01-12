<template>
  <div class="w-full min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-8">
    <!-- Page Heading -->
    <h1 class="text-4xl font-extrabold text-gray-800 mb-6">Contact Us</h1>
    <p class="text-lg text-gray-600 text-center max-w-2xl mb-8">
      Have questions or need assistance? Reach out to us, and we'll get back to you as soon as possible.
    </p>

    <!-- Contact Form -->
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
      <form @submit.prevent="submitForm">
        <div class="grid gap-6">
          <!-- Name Input -->
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              v-model="formData.name"
              class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          <!-- Email Input -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <!-- Message Textarea -->
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              v-model="formData.message"
              class="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              rows="5"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="bg-[#10b981] text-white font-semibold py-3 px-6 rounded-md shadow hover:bg-[#0f9773] transition-colors w-full"
            >
              {{ isSubmitting ? "Submitting..." : "Submit" }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      isSubmitting: false,
    };
  },
  methods: {
    submitForm() {
      this.isSubmitting = true;
      fetch("https://example.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to submit the form");
          }
          return response.json();
        })
        .then(() => {
          alert("Thank you for reaching out! We'll get back to you shortly.");
          this.formData = { name: "", email: "", message: "" };
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Something went wrong. Please try again later.");
        })
        .finally(() => {
          this.isSubmitting = false;
        });
    },
  },
};
</script>

<style scoped>
/* Hover effect for form */
.bg-white:hover {
  transform: scale(1.02);
  transition: transform 0.2s ease-in-out;
}
</style>
