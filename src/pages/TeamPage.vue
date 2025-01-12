<template>
  <div
    class="w-screen min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center pt-16 px-4"
    :style="{ backgroundImage: `url('https://via.placeholder.com/1920x1080?text=Team+Background')` }"
  >
    <h1 class="text-4xl font-extrabold text-black drop-shadow-lg text-center mb-6">
      Our Team
    </h1>
    <p class="text-lg text-black leading-relaxed text-center max-w-2xl mb-12">
      Meet our dedicated professionals who ensure top-quality cleaning and exceptional customer service.
    </p>

    <!-- Team Section -->
    <div class="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Member 1 -->
      <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
        <img
          src="https://via.placeholder.com/200x200?text=Employee+1"
          alt="Employee 1"
          class="w-40 h-40 rounded-full mb-4 object-cover"
        />
        <h3 class="text-xl font-bold text-gray-800 mb-2">Jessica Bowman</h3>
        <p class="text-gray-600 mb-4">Lead Cleaner</p>
        <ul class="text-gray-600 text-sm space-y-2">
          <li><strong>Experience:</strong> 5 years</li>
          <li><strong>Specialty:</strong> Deep Cleaning</li>
          <li><strong>Fun Fact:</strong> Loves baking in her free time.</li>
        </ul>
      </div>

      <!-- Member 2 -->
      <div class="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
        <img
          src="https://via.placeholder.com/200x200?text=Employee+2"
          alt="Employee 2"
          class="w-40 h-40 rounded-full mb-4 object-cover"
        />
        <h3 class="text-xl font-bold text-gray-800 mb-2">Keeley Munden</h3>
        <p class="text-gray-600 mb-4">Office Cleaner</p>
        <ul class="text-gray-600 text-sm space-y-2">
          <li><strong>Experience:</strong> 5 years</li>
          <li><strong>Specialty:</strong> Office Cleaning</li>
          <li><strong>Fun Fact:</strong> Enjoys painting landscapes.</li>
        </ul>
      </div>
    </div>

    <router-link
      to="/"
      class="inline-block bg-[#10b981] text-white font-medium py-3 px-8 rounded-full hover:bg-[#0f9773] transition-colors duration-300 ease-in-out shadow-sm mt-12"
    >
      Back to Home
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Add custom styles if needed */
</style>
