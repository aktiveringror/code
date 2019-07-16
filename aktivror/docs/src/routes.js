import Installation from "./pages/Installation.vue";
import MainPage from "./pages/MainPage.vue";

export default [
  { path: "/aktivror", component: MainPage },
  { path: "*", redirect: "/aktivror" }
];
