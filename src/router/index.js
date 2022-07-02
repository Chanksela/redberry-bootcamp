import { createRouter, createWebHistory } from "vue-router";
import WelcomePageVue from "@/views/WelcomePage.vue";
import InfoPageVue from "@/views/InfoPage.vue";
import ExperiencePageVue from "@/views/ExperiencePage.vue";
import ThankYouPageVue from "@/views/ThankYouPage.vue";
const routes = [
  { path: "/", name: "Welcome", component: WelcomePageVue },
  { path: "/info", name: "Personal Info", component: InfoPageVue },
  { path: "/experience", name: "Experience", component: ExperiencePageVue },
  { path: "/thanks", name: "Thank You", component: ThankYouPageVue },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
