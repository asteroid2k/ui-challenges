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
        component: () => import(`${PROJECTS_DIR}planets/Index.vue`),
        children: [
          {
            path: "*",
            redirect: "/planets/Earth",
            component: () => import(`${PROJECTS_DIR}/planets/Planet.vue`),
          },
          {
            path: ":planet",
            name: "Planet",
            component: () => import(`${PROJECTS_DIR}/planets/Planet.vue`),
          },
        ],
      },
      // Room site
      {
        path: "/room",
        name: "Room",
        component: () => import(`${PROJECTS_DIR}/room/Index.vue`),
      },
      //Rest Countries
      {
        path: "/countries",
        name: "Countries",
        component: () => import(`${PROJECTS_DIR}/countries/Index.vue`),
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
