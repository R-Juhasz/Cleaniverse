<template>
  <div class="w-full relative">
    <!-- Hero Section -->
    <div
      class="w-full h-auto md:h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-white px-4 py-8 border-b-4 border-gray-300"
      :style="{ backgroundColor: '#f4f4f4' }"
    >
      <h1 class="text-2xl sm:text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-4 text-black text-center border-b-2 border-gray-100 pb-2">
        Sparkling Spaces, Happy Faces
      </h1>
      <!-- Logo Positioned Independently -->
      <div>
        <img
          :src="require('@/assets/images/cleaniverselogo-removebg.jpeg')"
          alt="Cleaniverse Logo"
          class="h-20 sm:h-24 md:h-28 w-auto"
        />
      </div>
      <p class="max-w-md text-sm sm:text-base md:text-lg mb-6 text-center text-black">
        We bring shine to your home and office with eco-friendly, professional cleaning.
      </p>
      <router-link
        to="/cleans"
        class="bg-[#10b981] text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded hover:bg-[#0f9773] transition-colors border border-gray-200 shadow-md"
      >
        Take a look at our cleans
      </router-link>
    </div>

    <!-- About Section -->
    <section class="py-10 sm:py-16 bg-white text-center px-4 border-b-4 border-gray-300">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 border-b-2 border-gray-200 inline-block pb-2">
        About Cleaniverse
      </h2>
      <p class="max-w-3xl mx-auto text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg border-l-4 border-[#10b981] pl-4">
        At Cleaniverse, we are committed to providing outstanding cleanliness and unparalleled reliability in every service we offer. Our dedicated team takes
        pride in making your life easier by transforming your home or office into a spotless, inviting space you’ll love to spend time in. With attention to detail
        and a focus on excellence, we strive to exceed expectations and create a clean, comfortable environment tailored to your unique needs. Let us bring the sparkle
        back to your surroundings and ensure you always feel at home.
      </p>
    </section>

    <!-- Testimonials -->
    <section class="py-10 sm:py-16 bg-gray-50 text-center px-4 border-t-4 border-gray-300">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800 border-b-2 border-gray-200 inline-block pb-2">
        What Our Clients Say
      </h2>
      <div class="max-w-3xl mx-auto space-y-6 sm:space-y-8">
        <div class="p-4 sm:p-6 bg-white rounded-lg shadow border border-gray-200">
          <p class="text-gray-700 italic text-sm sm:text-base md:text-lg">
            "Cleaniverse transformed my home! Their friendly staff and attention to detail are unmatched."
          </p>
          <p class="text-gray-500 mt-4 text-xs sm:text-sm md:text-base border-t border-gray-200 pt-2">
            - Sarah J.
          </p>
        </div>
        <div class="p-4 sm:p-6 bg-white rounded-lg shadow border border-gray-200">
          <p class="text-gray-700 italic text-sm sm:text-base md:text-lg">
            "Our office is spotless every morning. It’s improved our team’s morale immensely."
          </p>
          <p class="text-gray-500 mt-4 text-xs sm:text-sm md:text-base border-t border-gray-200 pt-2">
            - David R.
          </p>
        </div>
      </div>
    </section>

    <!-- Privacy and Cookies Popup -->
    <div
      v-if="showPopup"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div class="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-11/12 max-w-sm sm:max-w-md">
        <h2 class="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Privacy & Cookies</h2>
        <p class="text-gray-600 mb-4 text-sm sm:text-base">
          We use cookies to improve your experience on our website. By continuing, you agree to our use of cookies.
          Please read our <a href="/privacy-policy" class="text-blue-500 underline">Privacy Policy</a> for more details.
        </p>
        <div class="flex justify-end gap-2 sm:gap-4">
          <button
            @click="acceptCookies"
            class="bg-[#10b981] text-white py-1 sm:py-2 px-3 sm:px-4 rounded hover:bg-[#0f9773] transition-colors"
          >
            Accept
          </button>
          <button
            @click="closePopup"
            class="bg-gray-300 text-gray-800 py-1 sm:py-2 px-3 sm:px-4 rounded hover:bg-gray-400 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: true, // Show the privacy and cookies popup
    };
  },
  methods: {
    acceptCookies() {
      // Logic to handle cookie acceptance (e.g., store preference in localStorage)
      localStorage.setItem("cookiesAccepted", "true");
      this.showPopup = false;
    },
    closePopup() {
      this.showPopup = false;
    },
  },
  mounted() {
    // Check if the user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted) {
      this.showPopup = false;
    }
  },
};
</script>

<style scoped>
/* Ensure the logo scales properly on all screens */
img {
  margin: auto;
  max-width: 100%;
}
</style>

