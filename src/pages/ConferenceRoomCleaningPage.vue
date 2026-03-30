<template>
  <div class="w-full h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">Conference Room Cleaning</h1>
    <p class="text-lg text-gray-600 mb-6 text-center max-w-3xl">
      Ensure your meeting rooms are clean, sanitized, and ready for important discussions. Perfect for maintaining a professional environment.
    </p>
    <div class="max-w-lg bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">What’s Included:</h2>
      <ul class="list-disc list-inside text-gray-600 mb-6">
        <li>Dusting and sanitizing of all surfaces</li>
        <li>Vacuuming and mopping of floors</li>
        <li>Trash removal and bin sanitization</li>
        <li>Spot-cleaning of walls and glass surfaces</li>
        <li>Sanitization of frequently touched areas</li>
      </ul>
      <p class="text-lg text-gray-700 mb-6">
        Price: <span class="font-bold">£100</span>
      </p>
      <router-link
        to="/book-online"
        class="bg-[#10b981] text-white px-6 py-3 rounded shadow hover:bg-[#0f9773] transition"
      >
        Book Conference Room Cleaning
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Additional custom styles if necessary */
</style>
