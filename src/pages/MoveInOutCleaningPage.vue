<template>
  <div class="w-full h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
    <h1 class="text-4xl font-bold text-gray-800 mb-4">Move-In/Move-Out Cleaning</h1>
    <p class="max-w-3xl text-lg text-gray-600 text-center mb-6">
      Comprehensive cleaning for a new or vacated home. Make your moving experience stress-free with a spotless space.
    </p>
    <div class="max-w-lg bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">What’s Included:</h2>
      <ul class="list-disc list-inside text-gray-600 mb-6">
        <li>Thorough cleaning of all rooms, including bedrooms, living areas, and hallways</li>
        <li>Deep cleaning of kitchens, including cabinets, countertops, and appliances</li>
        <li>Sanitization of bathrooms and removal of soap scum and grime</li>
        <li>Dusting and wiping down all surfaces, including baseboards</li>
        <li>Vacuuming and mopping floors</li>
        <li>Trash removal and disposal</li>
      </ul>
      <p class="text-lg text-gray-700 mb-6">
        Price: <span class="font-bold">£15PH</span>
      </p>
      <router-link
        to="/book-online"
        class="bg-[#10b981] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#0f9773] transition-colors"
      >
        Book Move-In/Move-Out Cleaning
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

