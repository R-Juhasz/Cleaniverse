<template>
  <div class="w-full h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">Oven Cleaning</h1>
    <p class="max-w-3xl text-lg text-gray-600 text-center mb-6">
      A specialized cleaning service to make your oven spotless and ready to use. We ensure thorough cleaning of all parts for a like-new shine.
    </p>
    <div class="max-w-lg bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">What’s Included:</h2>
      <ul class="list-disc list-inside text-gray-600 mb-6">
        <li>Removal of grease and baked-on food</li>
        <li>Deep cleaning of oven interiors and racks</li>
        <li>Exterior cleaning for a polished finish</li>
        <li>Safe use of eco-friendly cleaning products</li>
      </ul>
      <p class="text-lg text-gray-700 mb-6">
        Price: <span class="font-bold">£50</span>
      </p>
      <router-link
        to="/book-online"
        class="bg-[#10b981] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#0f9773] transition-colors"
      >
        Book Oven Cleaning
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Add custom styles if necessary */
</style>
