<template>
  <div class="font-sans text-gray-800 min-h-screen flex flex-col">
    <header class="bg-white shadow-md fixed w-full z-10">
      <!-- Navbar -->
      <nav class="container mx-auto flex justify-end items-center py-2 px-4">
        <!-- Book Now Button -->
        <router-link
          to="/book-online"
          class="bg-[#10b981] text-white font-semibold py-2 px-5 rounded-lg text-sm hover:bg-[#0f9773] shadow hover:shadow-md transition-transform transform hover:-translate-y-0.5 mr-auto"
        >
          Book Now
        </router-link>
        <!-- Navigation Links -->
        <ul class="flex gap-8 text-sm font-medium">
          <li><router-link to="/" class="hover:text-blue-500">Home</router-link></li>
          <li><router-link to="/cleans" class="hover:text-blue-500">Services</router-link></li>
          <li><router-link to="/payment" class="hover:text-blue-500">Payment</router-link></li>
          <li><router-link to="/team" class="hover:text-blue-500">The Team</router-link></li>
          <li><router-link to="/contact-us" class="hover:text-blue-500">Contact Us</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- Page content will appear here -->
    <div class="flex-grow pt-[60px]">
      <router-view />
    </div>

    <!-- Footer -->
    <footer class="bg-blue-500 text-white py-6 text-center w-full">
      <p>&copy; 2024 Cleaniverse. All rights reserved.</p>
      <p>
        <router-link to="/faq" class="text-white underline hover:text-gray-200 transition-colors duration-300">
          FAQ
        </router-link>
      </p>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Slim navbar */
header {
  height: 60px;
}

/* Adjust logo */
img {
  margin-top: 0; /* Optional adjustment for alignment */
}
</style>

