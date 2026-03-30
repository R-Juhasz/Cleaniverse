<template>
  <div class="w-full h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">Post-Renovation Cleaning</h1>
    <p class="max-w-3xl text-lg text-gray-600 text-center mb-6">
      Specialized cleaning to remove construction dust and debris. Enjoy your newly renovated space without the mess.
    </p>
    <div class="max-w-lg bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">What’s Included:</h2>
      <ul class="list-disc list-inside text-gray-600 mb-6">
        <li>Removal of fine dust and debris from all surfaces</li>
        <li>Detailed cleaning of walls, ceilings, and windows</li>
        <li>Sanitization and polishing of newly installed fixtures</li>
        <li>Vacuuming and mopping of floors to remove dirt</li>
        <li>Disposal of leftover materials and waste</li>
      </ul>
      <p class="text-lg text-gray-700 mb-6">
        Price:<span class="font-bold">£17PH</span>
      </p>
      <router-link
        to="/book-online"
        class="bg-[#10b981] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#0f9773] transition-colors"
      >
        Book Post-Renovation Cleaning
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Add any additional custom styles if necessary */
</style>
