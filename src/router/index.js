import { createRouter, createWebHistory } from 'vue-router';
import { allServices } from '@/data/siteContent';
import BookOnlinePage from '@/pages/BookOnlinePage.vue';
import CleansPage from '@/pages/CleansPage.vue';
import ContactUsPage from '@/pages/ContactUsPage.vue';
import FAQPage from '@/pages/FAQPage.vue';
import HomePage from '@/pages/HomePage.vue';
import PaymentPage from '@/pages/PaymentPage.vue';
import ServiceDetailPage from '@/pages/ServiceDetailPage.vue';
import TeamPage from '@/pages/TeamPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { title: 'Simply Clean | Modern Cleaning Services' },
  },
  {
    path: '/cleans',
    name: 'services',
    component: CleansPage,
    meta: { title: 'Services | Simply Clean' },
  },
  {
    path: '/book-online',
    name: 'book-online',
    component: BookOnlinePage,
    meta: { title: 'Book Online | Simply Clean' },
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: ContactUsPage,
    meta: { title: 'Contact Us | Simply Clean' },
  },
  {
    path: '/payment',
    name: 'payment',
    component: PaymentPage,
    meta: { title: 'Payment Support | Simply Clean' },
  },
  {
    path: '/team',
    name: 'team',
    component: TeamPage,
    meta: { title: 'Our Team | Simply Clean' },
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQPage,
    meta: { title: 'FAQ | Simply Clean' },
  },
  ...allServices.map((service) => ({
    path: `/${service.slug}`,
    name: service.slug,
    component: ServiceDetailPage,
    props: { slug: service.slug },
    meta: { title: `${service.title} | Simply Clean` },
  })),
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((to) => {
  document.title = to.meta?.title || 'Simply Clean | Modern Cleaning Services';
});

export default router;


