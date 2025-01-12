<template>
  <div class="w-full h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">Deep Office Cleaning</h1>
    <p class="max-w-3xl text-lg text-gray-600 text-center mb-6">
      Experience a comprehensive deep cleaning service for your office. We meticulously clean every corner of your workspace, ensuring a fresh and inviting environment for your team and clients.
    </p>
    <div class="max-w-lg bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">What’s Included:</h2>
      <ul class="list-disc list-inside text-gray-600 mb-6">
        <li>Thorough dusting and cleaning of all surfaces</li>
        <li>Detailed sanitization of restrooms and break areas</li>
        <li>Deep carpet and upholstery cleaning</li>
        <li>Window washing for a clear, professional view</li>
        <li>Disinfection of frequently touched areas</li>
      </ul>
      <p class="text-lg text-gray-700 mb-6">
        Price: <span class="font-bold">$120</span>
      </p>
      <router-link
        to="/book-online"
        class="bg-[#10b981] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#0f9773] transition-colors"
      >
        Book Deep Office Cleaning
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
