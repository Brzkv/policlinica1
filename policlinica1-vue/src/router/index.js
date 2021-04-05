import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Services from "../views/Services.vue";
import Covid19 from "../views/Covid19.vue";
import Analizi from "../views/Analizi.vue";
import Diagnostika from "../views/Diagnostika.vue";
import Kosmetologiya from "../views/Kosmetologiya.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/medcentr",
    name: "Medcenter",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
    import(/* webpackChunkName: "medcenter" */ "../views/Medcenter.vue"),
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/covid19",
    name: "Covid19",
    component: Covid19,
  },
  {
    path: "/analizi",
    name: "Analizi",
    component: Analizi,
    meta: {
      breadcrumbsTitle: 'Анализы'
    }
  },
  {
    path: "/diagnostika",
    name: "Diagnostika",
    component: Diagnostika,
  },
  {
    path: "/kosmetologiya",
    name: "Kosmetologiya",
    component: Kosmetologiya,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
