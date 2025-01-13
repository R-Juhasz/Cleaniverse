<template>
  <div class="w-full h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">After-Hours Office Cleaning</h1>
    <p class="text-lg text-gray-600 mb-6 text-center max-w-3xl">
      Enjoy a spotless workspace without interruptions. Our after-hours cleaning service ensures your office is clean, sanitized, and ready for the next day.
    </p>
    <div class="max-w-lg bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">What’s Included:</h2>
      <ul class="list-disc list-inside text-gray-600 mb-6">
        <li>Vacuuming and mopping of floors</li>
        <li>Dusting and wiping of desks and furniture</li>
        <li>Sanitizing high-touch surfaces</li>
        <li>Trash removal and bin cleaning</li>
        <li>Basic restroom cleaning and sanitization</li>
      </ul>
      <p class="text-lg text-gray-700 mb-6">
        Price: <span class="font-bold">£20PH</span>
      </p>
      <router-link
        to="/book-online"
        class="bg-[#10b981] text-white px-6 py-3 rounded-lg shadow hover:bg-[#0f9773] transition"
      >
        Book After-Hours Office Cleaning
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Add any additional custom styles if needed */
</style>
