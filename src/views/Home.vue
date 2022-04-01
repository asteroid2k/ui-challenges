<script setup>
import { projects } from "../projects";
const imgURL = (path) => {
  return new URL(`../assets/${path}`, import.meta.url);
};
</script>

<template>
  <div class="h-full min-h-screen">
    <div class="px-6">
      <h2 class="h2">Timeline</h2>
      <ul class="timeline mt-2 flex flex-wrap gap-6">
        <li
          v-for="project in projects"
          :key="project.name"
          class="relative block w-fit cursor-pointer rounded-md border border-transparent p-2 text-xs shadow-slate-50 transition-shadow hover:border-red-200 hover:shadow-sm"
        >
          <div class="flex flex-col gap-[2px]">
            <p class="text-slate-400">{{ project.date }}</p>
            <p class="font-medium uppercase text-slate-700">
              {{ project.lname }}
            </p>
          </div>
        </li>
      </ul>
    </div>

    <div class="projects mt-4 p-6">
      <h2 class="h2">Projects</h2>
      <p class="sub">Click on a project to view</p>
      <ul class="home-projects-list">
        <li v-for="project in projects" class="rounded-md">
          <router-link
            class="home-projects-item"
            :style="{
              'background-color': project.bgColor,
              color: project.color,
              'background-image': `url(${imgURL(project.img)}`,
              'text-shadow': `0 1px 8px ${project.shadow}`,
            }"
            :to="{ name: project.routeName }"
            ><p class="break-all">{{ project.name }}</p></router-link
          >
        </li>
      </ul>
    </div>
    <router-view
      class="display m-2 h-full overflow-x-auto rounded"
    ></router-view>
  </div>
</template>

<style scoped>
.timeline li:not(:first-of-type)::before {
  content: "";
  position: absolute;
  left: -24px;
  top: 50%;
  width: 24px;
  height: 1px;
  background-color: rgb(244 63 94);
}

.home-projects-list::-webkit-scrollbar {
  height: 5px;
}

/* .home-projects-list::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.034);
} */

.home-projects-list::-webkit-scrollbar-thumb {
  background-color: rgb(51 65 85 / 70);
}
</style>
