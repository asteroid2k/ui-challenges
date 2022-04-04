import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const PROJECTS_DIR = "../lib/";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      // Planet fact site
      {
        path: "/planets",
        redirect: "/planets/Earth",
        name: "Planets",
        component: () => import("../lib/planets/Index.vue"),
        children: [
          {
            path: "*",
            redirect: "/planets/Earth",
            component: () => import("../lib/planets/Planet.vue"),
          },
          {
            path: ":planet",
            name: "Planet",
            component: () => import("../lib/planets/Planet.vue"),
          },
        ],
      },
      // Room site
      {
        path: "/room",
        name: "Room",
        component: () => import("../lib/room/Index.vue"),
      },
      //Rest Countries
      {
        path: "/countries",
        name: "Countries",
        component: () => import("../lib/countries/Index.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
