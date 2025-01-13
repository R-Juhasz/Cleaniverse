import { createRouter, createWebHistory } from 'vue-router';

// Import existing pages
import HomePage from '../pages/HomePage.vue';
import CleansPage from '../pages/CleansPage.vue';
import PaymentPage from '../pages/PaymentPage.vue';
import TeamPage from '../pages/TeamPage.vue';

import GeneralHouseCleaningPage from '../pages/GeneralHouseCleaningPage.vue';
import MoveInOutCleaningPage from '../pages/MoveInOutCleaningPage.vue';
import DeepCleaningPage from '../pages/DeepCleaningPage.vue';
import PostRenovationCleaningPage from '../pages/PostRenovationCleaningPage.vue';
import EcoFriendlyCleaningPage from '../pages/EcoFriendlyCleaningPage.vue';
import OvenCleaningPage from '../pages/OvenCleaningPage.vue'; // Added Oven Cleaning page
import CustomCleanPage from '../pages/CustomCleanPage.vue';

import ContactUsPage from '../pages/ContactUsPage.vue';
import FAQPage from '../pages/FAQPage.vue';
import BookOnlinePage from '../pages/BookOnlinePage.vue';

// Import new pages for Office Cleaning
import DeepOfficeCleaningPage from '../pages/DeepOfficeCleaningPage.vue';
import StandardOfficeCleaningPage from '../pages/StandardOfficeCleaningPage.vue';
import ConferenceRoomCleaningPage from '../pages/ConferenceRoomCleaningPage.vue';
import RestroomSanitizationPage from '../pages/RestroomSanitizationPage.vue';
import LobbyReceptionCleaningPage from '../pages/LobbyReceptionCleaningPage.vue';
import AfterHoursOfficeCleaningPage from '../pages/AfterHoursOfficeCleaningPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/cleans', name: 'Cleans', component: CleansPage },
  { path: '/payment', name: 'Payment', component: PaymentPage },
  { path: '/team', name: 'Team', component: TeamPage },
  { path: '/contact-us', name: 'ContactUs', component: ContactUsPage },
  { path: '/faq', name: 'FAQ', component: FAQPage },
  { path: '/book-online', name: 'BookOnline', component: BookOnlinePage },

  // Routes for Home Cleaning types
  { path: '/general-house-cleaning', name: 'GeneralHouseCleaning', component: GeneralHouseCleaningPage },
  { path: '/move-in-out-cleaning', name: 'MoveInOutCleaning', component: MoveInOutCleaningPage },
  { path: '/deep-cleaning', name: 'DeepCleaning', component: DeepCleaningPage },
  { path: '/post-renovation-cleaning', name: 'PostRenovationCleaning', component: PostRenovationCleaningPage },
  { path: '/eco-friendly-cleaning', name: 'EcoFriendlyCleaning', component: EcoFriendlyCleaningPage },
  { path: '/oven-cleaning', name: 'OvenCleaning', component: OvenCleaningPage }, // Added Oven Cleaning route
  { path: '/custom-clean', name: 'CustomClean', component: CustomCleanPage },

  // Routes for Office Cleaning types
  { path: '/deep-office-cleaning', name: 'DeepOfficeCleaning', component: DeepOfficeCleaningPage },
  { path: '/standard-office-cleaning', name: 'StandardOfficeCleaning', component: StandardOfficeCleaningPage },
  { path: '/conference-room-cleaning', name: 'ConferenceRoomCleaning', component: ConferenceRoomCleaningPage },
  { path: '/restroom-sanitization', name: 'RestroomSanitization', component: RestroomSanitizationPage },
  { path: '/lobby-reception-cleaning', name: 'LobbyReceptionCleaning', component: LobbyReceptionCleaningPage },
  { path: '/after-hours-office-cleaning', name: 'AfterHoursOfficeCleaning', component: AfterHoursOfficeCleaningPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;



