<template>
  <div class="w-full h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">Restroom Sanitization</h1>
    <p class="text-lg text-gray-600 mb-6 text-center max-w-3xl">
      A thorough cleaning and sanitization service to keep restrooms pristine and hygienic for your staff and visitors.
    </p>
    <div class="max-w-lg bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">What’s Included:</h2>
      <ul class="list-disc list-inside text-gray-600 mb-6">
        <li>Cleaning and sanitizing of toilets, sinks, and urinals</li>
        <li>Refilling of soap and paper products</li>
        <li>Trash removal and bin sanitization</li>
        <li>Cleaning of mirrors and surfaces</li>
        <li>Deep sanitization of floors and tiled areas</li>
      </ul>
      <p class="text-lg text-gray-700 mb-6">
        Price: <span class="font-bold">£30</span> per session or hourly rates available upon request.
      </p>
      <router-link
        to="/book-online"
        class="bg-[#10b981] text-white px-6 py-3 rounded shadow hover:bg-[#0f9773] transition"
      >
        Book Restroom Sanitization
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
