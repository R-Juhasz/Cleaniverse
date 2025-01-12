<template>
  <div class="w-full h-auto flex flex-col items-center bg-gradient-to-b from-blue-50 to-gray-100 px-4 py-16">
    <!-- Header Section -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Secure Payment</h1>
      <p class="text-lg text-gray-600">
        Please ensure you have booked your service and received a payment number before proceeding.
      </p>
    </div>

    <!-- Payment Form -->
    <div class="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">Payment Details</h2>

      <form @submit.prevent="handlePayment">
        <!-- Payment Number -->
        <div class="mb-4">
          <label for="paymentNumber" class="block text-gray-700 font-medium mb-2">Payment Number</label>
          <input
            type="text"
            id="paymentNumber"
            v-model="paymentNumber"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your payment number"
            required
          />
        </div>

        <!-- Amount -->
        <div class="mb-4">
          <label for="amount" class="block text-gray-700 font-medium mb-2">Amount</label>
          <input
            type="number"
            id="amount"
            v-model="amount"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the amount"
            required
          />
        </div>

        <!-- Card Details -->
        <div class="mb-4">
          <label for="cardDetails" class="block text-gray-700 font-medium mb-2">Card Details</label>
          <input
            type="text"
            id="cardDetails"
            v-model="cardDetails"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Card Number"
            required
          />
        </div>

        <!-- Expiry Date -->
        <div class="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label for="expiryDate" class="block text-gray-700 font-medium mb-2">Expiry Date</label>
            <input
              type="text"
              id="expiryDate"
              v-model="expiryDate"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MM/YY"
              required
            />
          </div>

          <!-- CVV -->
          <div>
            <label for="cvv" class="block text-gray-700 font-medium mb-2">CVV</label>
            <input
              type="text"
              id="cvv"
              v-model="cvv"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="CVV"
              required
            />
          </div>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition transform hover:scale-105 w-full"
        >
          Pay Now
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentNumber: '',
      amount: '',
      cardDetails: '',
      expiryDate: '',
      cvv: '',
    };
  },
  methods: {
    handlePayment() {
      if (!this.paymentNumber || !this.amount || !this.cardDetails || !this.expiryDate || !this.cvv) {
        alert('Please fill out all fields.');
        return;
      }

      // Simulate payment processing
      alert(`Payment successful for Payment Number: ${this.paymentNumber}`);
      // Redirect to a success page or perform further actions
      this.$router.push('/payment-success');
    },
  },
};
</script>

<style scoped>
/* Add any additional custom styles if necessary */
</style>
