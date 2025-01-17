<template>
  <div
    class="w-screen min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-between overflow-hidden"
    :style="{ backgroundImage: `url('https://via.placeholder.com/1920x1080?text=Cleans+Background')` }"
  >
    <!-- Header -->
    <header class="text-center mt-4 md:mt-8">
      <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black drop-shadow-lg">
        <b>SERVICES</b>
      </h1>
    </header>

    <!-- Services Overview -->
    <section class="flex-1 flex flex-col justify-center items-center w-full px-4">
      <h2 class="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        Our Services
      </h2>
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl px-4">
        <!-- Home Cleaning Section -->
        <div
          class="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        >
          <h3 class="text-lg sm:text-xl font-bold mb-4 text-gray-800">Home Cleaning</h3>
          <button
            class="mt-4 bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
            @click="openDialog('homeCleans')"
          >
            View Details
          </button>
        </div>

        <!-- Office Cleaning Section -->
        <div
          class="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        >
          <h3 class="text-lg sm:text-xl font-bold mb-4 text-gray-800">Office Cleaning</h3>
          <button
            class="mt-4 bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
            @click="openDialog('officeCleans')"
          >
            View Details
          </button>
        </div>

        <!-- Custom Cleaning Section -->
        <div
          class="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        >
          <h3 class="text-lg sm:text-xl font-bold mb-4 text-gray-800">Custom Cleaning</h3>
          <button
            class="mt-4 bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
            @click="openDialog('customCleans')"
          >
            View Details
          </button>
        </div>
      </div>
    </section>

    <!-- Dialog -->
    <div
      v-if="showDialog"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
      @click.self="closeDialog"
    >
      <div class="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 class="text-lg sm:text-2xl font-bold text-gray-800 mb-4 text-center">
          {{ currentDialogTitle }}
        </h2>
        <ul class="text-gray-800 space-y-4">
          <li
            v-for="(clean, index) in currentCleans"
            :key="index"
            class="group relative bg-gray-100 p-4 rounded-lg shadow hover:bg-[#10b981] hover:text-white transition-colors duration-300"
            @click="navigateToClean(clean.route)"
          >
            <span class="text-sm sm:text-lg font-semibold">{{ clean.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
      currentDialogTitle: '',
      currentCleans: [],
      homeCleans: [
        { name: 'General House Cleaning', route: '/general-house-cleaning' },
        { name: 'Deep Cleaning', route: '/deep-cleaning' },
        { name: 'Eco-Friendly Cleaning', route: '/eco-friendly-cleaning' },
        { name: 'Move-In/Move-Out Cleaning', route: '/move-in-out-cleaning' },
        { name: 'Post-Renovation Cleaning', route: '/post-renovation-cleaning' },
        { name: 'Oven Cleaning', route: '/Oven-cleaning' },

      ],
      officeCleans: [
        { name: 'Standard Office Cleaning', route: '/standard-office-cleaning' },
        { name: 'Deep Office Cleaning', route: '/deep-office-cleaning' },
        { name: 'Conference Room Cleaning', route: '/conference-room-cleaning' },
        { name: 'Restroom Sanitization', route: '/restroom-sanitization' },
        { name: 'Lobby & Reception Cleaning', route: '/lobby-reception-cleaning' },
        { name: 'After-Hours Office Cleaning', route: '/after-hours-office-cleaning' },
      ],
      customCleans: [
        { name: 'Tailored Services', route: '/custom-clean' },
      ],
    };
  },
  methods: {
    openDialog(type) {
      this.showDialog = true;
      if (type === 'homeCleans') {
        this.currentDialogTitle = 'Types of Home Cleaning';
        this.currentCleans = this.homeCleans;
      } else if (type === 'officeCleans') {
        this.currentDialogTitle = 'Types of Office Cleaning';
        this.currentCleans = this.officeCleans;
      } else if (type === 'customCleans') {
        this.currentDialogTitle = 'Types of Custom Cleaning';
        this.currentCleans = this.customCleans;
      }
    },
    closeDialog() {
      this.showDialog = false;
    },
    navigateToClean(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
/* Prevent horizontal overflow */
html,
body {
  overflow-x: hidden;
}

/* Improve box shadows for better appearance */
.shadow-lg {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
}
</style>
