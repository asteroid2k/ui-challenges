import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

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
        component: () => import("../planets/Index.vue"),
        children: [
          {
            path: "*",
            redirect: "/planets/Earth",
            component: () => import("../planets/Planet.vue"),
          },
          {
            path: ":planet",
            name: "Planet",
            component: () => import("../planets/Planet.vue"),
          },
        ],
      },
      // Room site
      {
        path: "/room",
        name: "Room",
        component: () => import("../room/Index.vue"),
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
