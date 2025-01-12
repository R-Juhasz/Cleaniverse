<template>
  <div class="font-sans text-gray-800 min-h-screen flex flex-col">
    <!-- Navbar -->
    <header class="bg-white shadow-md fixed w-full z-10">
      <nav class="container mx-auto flex items-center justify-between py-2 px-4">
        <!-- Logo -->
        <router-link to="/">
          <img
            src="@/assets/images/cleaniverselogo-removebg.jpeg"
            alt="Cleaniverse Logo"
            class="h-8 w-auto"
          />
        </router-link>

        <!-- Desktop Links -->
        <ul class="hidden md:flex gap-8 text-sm font-medium">
          <li><router-link to="/" class="hover:text-blue-500">Home</router-link></li>
          <li><router-link to="/cleans" class="hover:text-blue-500">Services</router-link></li>
          <li><router-link to="/payment" class="hover:text-blue-500">Payment</router-link></li>
          <li><router-link to="/team" class="hover:text-blue-500">The Team</router-link></li>
          <li><router-link to="/contact-us" class="hover:text-blue-500">Contact Us</router-link></li>
        </ul>

        <!-- Hamburger Menu (Mobile) -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-gray-800 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div
        v-if="menuOpen"
        class="md:hidden bg-white shadow-md px-4 py-2 absolute w-full left-0 top-[60px] z-20"
      >
        <ul class="flex flex-col gap-4">
          <li><router-link to="/" class="hover:text-blue-500" @click="toggleMenu">Home</router-link></li>
          <li><router-link to="/cleans" class="hover:text-blue-500" @click="toggleMenu">Services</router-link></li>
          <li><router-link to="/payment" class="hover:text-blue-500" @click="toggleMenu">Payment</router-link></li>
          <li><router-link to="/team" class="hover:text-blue-500" @click="toggleMenu">The Team</router-link></li>
          <li><router-link to="/contact-us" class="hover:text-blue-500" @click="toggleMenu">Contact Us</router-link></li>
        </ul>
      </div>
    </header>

    <!-- Page Content -->
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
export default {
  data() {
    return {
      menuOpen: false, // State for the mobile menu
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* Ensure navbar stays visible on all screen sizes */
header {
  height: 60px;
}

/* Add smooth transitions for the mobile menu */
.menu-enter-active, .menu-leave-active {
  transition: opacity 0.3s ease;
}
.menu-enter, .menu-leave-to {
  opacity: 0;
}
</style>
