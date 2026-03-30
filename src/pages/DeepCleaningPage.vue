<template>
  <div class="w-full h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">Deep Cleaning</h1>
    <p class="max-w-3xl text-lg text-gray-600 text-center mb-6">
      Detailed cleaning for every corner of your home. Perfect for an intensive refresh.
    </p>
    <div class="max-w-lg bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">What’s Included:</h2>
      <ul class="list-disc list-inside text-gray-600 mb-6">
        <li>Thorough cleaning of all surfaces</li>
        <li>Detailed cleaning of kitchens and bathrooms</li>
        <li>Deep cleaning of carpets and upholstery</li>
        <li>Window and glass cleaning</li>
        <li>Removing tough stains and grime</li>
      </ul>
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Pricing:</h2>
      <ul class="list-disc list-inside text-gray-600 mb-6">
        <li>1 Bed: <span class="font-bold">£200</span></li>
        <li>2 Bed: <span class="font-bold">£250</span></li>
        <li>3 Bed: <span class="font-bold">£300</span></li>
        <li>4 Bed: <span class="font-bold">£350</span></li>
        <li>Bigger houses: <span class="font-bold">Get in touch for a quote</span></li>
      </ul>
      <router-link
        to="/book-online"
        class="bg-[#10b981] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#0f9773] transition-colors"
      >
        Book Deep Cleaning
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
