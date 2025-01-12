<template>
  <div class="w-full bg-gray-100 py-12 px-6">
    <h1 class="text-4xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h1>
    <div class="max-w-4xl mx-auto space-y-6">
      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="bg-white p-4 rounded-lg shadow-lg"
      >
        <div
          @click="toggleAnswer(index)"
          class="flex justify-between items-center cursor-pointer"
        >
          <h2 class="text-lg font-semibold text-gray-800">{{ faq.question }}</h2>
          <span class="text-gray-600">
            <i
              :class="{
                'fas fa-chevron-down': !faq.showAnswer,
                'fas fa-chevron-up': faq.showAnswer,
              }"
            ></i>
          </span>
        </div>
        <p
          v-if="faq.showAnswer"
          class="mt-4 text-gray-600"
        >
          {{ faq.answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "What cleaning services do you offer?",
          answer:
            "We offer a range of services including house cleaning, office cleaning, deep cleaning, move-in/move-out cleaning, and eco-friendly cleaning.",
          showAnswer: false,
        },
        {
          question: "Do you bring your own cleaning supplies?",
          answer:
            "Yes, we bring all necessary supplies and equipment. If you have specific products you'd like us to use, let us know.",
          showAnswer: false,
        },
        {
          question: "How much do your cleaning services cost?",
          answer:
            "Our pricing depends on the service type and the size of your space. Contact us for a free quote.",
          showAnswer: false,
        },
        {
          question: "Are your cleaning products safe for pets and children?",
          answer:
            "Yes, we use eco-friendly and non-toxic cleaning products that are safe for pets and children.",
          showAnswer: false,
        },
        {
          question: "Do I need to be home during the cleaning?",
          answer:
            "It's up to you! Many clients provide access instructions, while others prefer to be home.",
          showAnswer: false,
        },
        {
          question: "Do you offer same-day cleaning services?",
          answer:
            "We try to accommodate same-day requests depending on our schedule. Please contact us for availability.",
          showAnswer: false,
        },
        {
          question: "What happens if I’m not satisfied with the cleaning?",
          answer:
            "Customer satisfaction is our top priority. If you're unhappy, let us know within 24 hours, and we'll make it right.",
          showAnswer: false,
        },
        {
          question: "How can I pay for your services?",
          answer:
            "We accept payments through cash, credit/debit cards, and online payment systems like PayPal.",
          showAnswer: false,
        },
        {
          question: "Are your cleaners insured and background-checked?",
          answer:
            "Yes, all our cleaners are fully insured and have undergone thorough background checks.",
          showAnswer: false,
        },
        {
          question: "Do you offer discounts for recurring services?",
          answer:
            "Yes, we offer discounts for weekly, bi-weekly, and monthly cleaning plans.",
          showAnswer: false,
        },
        {
          question: "What is your cancellation policy?",
          answer:
            "We require at least 24 hours' notice for cancellations or rescheduling. Fees may apply for last-minute cancellations.",
          showAnswer: false,
        },
        {
          question: "What areas do you service?",
          answer:
            "We currently service all neighborhoods within a 30-mile radius of our main office.",
          showAnswer: false,
        },
        {
          question: "Can I customize the cleaning services?",
          answer:
            "Absolutely! We can tailor our cleaning services to your specific needs and preferences.",
          showAnswer: false,
        },
        {
          question: "Do you clean carpets and upholstery?",
          answer:
            "Yes, we offer carpet and upholstery cleaning as an add-on service. Contact us for more details.",
          showAnswer: false,
        },
        {
          question: "Do you clean windows?",
          answer:
            "Yes, window cleaning is included in some packages or available as an add-on service.",
          showAnswer: false,
        },
        {
          question: "What should I do to prepare for the cleaning?",
          answer:
            "Please declutter surfaces and floors as much as possible to ensure our cleaners can work efficiently.",
          showAnswer: false,
        },
        {
          question: "Do you offer green cleaning options?",
          answer:
            "Yes, we specialize in eco-friendly cleaning using sustainable and non-toxic products.",
          showAnswer: false,
        },
        {
          question: "How long will the cleaning take?",
          answer:
            "The duration depends on the size of your space and the type of cleaning. Most services take 2-4 hours.",
          showAnswer: false,
        },
        {
          question: "Can I book a cleaning service online?",
          answer:
            "Yes, you can easily book our services online through our website or by contacting us directly.",
          showAnswer: false,
        },
        {
          question: "Do you offer gift cards for your services?",
          answer:
            "Yes, we offer gift cards that make great presents for friends and family.",
          showAnswer: false,
        },
      ],
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].showAnswer = !this.faqs[index].showAnswer;
    },
  },
};
</script>

<style>
/* Add custom styling if needed */
</style>
