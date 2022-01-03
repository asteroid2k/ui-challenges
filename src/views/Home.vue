<script setup>
import { projects } from "../projects";
const imgURL = (path) => {
  return new URL(`../assets/${path}`, import.meta.url);
};
</script>

<template>
  <div class="min-h-screen h-full">
    <div class="px-6">
      <h2 class="h2">Timeline</h2>
      <ul class="timeline flex flex-wrap mt-2 gap-6">
        <li
          v-for="project in projects"
          :key="project.name"
          class="relative block border border-transparent text-xs p-2 hover:shadow-sm hover:border-slate-200 shadow-slate-50 w-fit rounded-sm cursor-pointer transition-shadow"
        >
          <div class="flex flex-col gap-[2px]">
            <p class="text-slate-400">{{ project.date }}</p>
            <p class="text-slate-700 uppercase font-medium">{{ project.lname }}</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="projects p-6 mt-4">
      <h2 class="h2">Projects</h2>
      <p class="sub">Click on a project to view</p>
      <ul
        class="home-projects-list p-2 mt-4 mb-2 border border-slate-200 shadow-md shadow-slate-200 rounded-md"
      >
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
          >{{ project.name }}</router-link>
        </li>
      </ul>
    </div>
    <router-view class="display m-2 rounded h-full overflow-x-auto"></router-view>
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
