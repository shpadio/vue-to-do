import { createWebHistory, createRouter } from "vue-router";
import Chess from "@/components/Chess.vue";
import ToDo from "@/components/ToDo.vue";
import Weather from "@/components/Weather.vue";
import Images from "@/components/Images.vue";
import CurrencyCalculator from "@/components/CurrencyCalculator.vue";
import Sun from "@/components/Sun.vue";

const routes = [
  {
    path: "/todo",
    name: "ToDo",
    component: ToDo,
  },
  {
    path: "/chess",
    name: "Chess",
    component: Chess,
  },
  {
    path: "/images",
    name: "Images",
    component: Images,
  },
  {
    path: "/weather",
    name: "Weather",
    component: Weather,
  },
  {
    path: "/calculator",
    name: "CurrencyCalculator",
    component: CurrencyCalculator,
  },
  {
    path: "/sun",
    name: "Sun",
    component: Sun,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
