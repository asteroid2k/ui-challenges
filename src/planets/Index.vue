<script setup>
import { ref, computed } from "vue"
import { planets } from "./data";
import { ChevronRightIcon } from "@heroicons/vue/solid"

let expanded = ref(false)
let listState = computed(() => expanded.value ? "show" : "")
let scrollLock = computed(() => expanded.value ? "lock" : "")

const toggleNav = () => {
  expanded.value = !expanded.value
}
</script>

<template>
  <section :class="`main ${scrollLock} min-h-full`">
    <nav
      class="relative flex justify-between items-center uppercase p-6 border-b-2 border-white/20 md:flex-col"
    >
      <div class="brand flex w-full justify-between md:justify-center">
        <p class="text-white text-3xl font-medium md:text-center">
          <router-link to="/planets">The Planets</router-link>
        </p>
        <button @click="toggleNav" class="md:hidden">
          <img src="./assets/icon-hamburger.svg" alt />
        </button>
      </div>
      <ul
        :class="`nav-list ${listState} absolute left-0 top-24 bg-[#070724] z-10 px-4 h-[100vh] w-full flex-col flex gap-4 md:relative md:top-0 md:h-fit md:mt-14 md:flex-row md:justify-between md:px-14`"
      >
        <li @click="toggleNav" v-for="(planet, id) in planets" :key="id" class="planet-link">
          <router-link :to="{ name: 'Planet', params: { planet: planet.name } }">
            <div
              class="font-semibold text-base text-white/75 flex gap-4 items-center px-2 py-4 rounded-full hover:bg-sky-300/50 md:p-0 md:text-sm md:hover:bg-transparent"
            >
              <span
                class="block rounded-full w-4 h-4 md:hidden"
                :style="{ backgroundColor: planet.color }"
              ></span>
              <span>{{ planet.name }}</span>
              <span class="h-6 w-6 ml-auto md:hidden">
                <ChevronRightIcon />
              </span>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </section>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap");

nav {
  font-family: Spartan;
  position: relative;
}
nav .brand {
  font-family: Antonio;
}

section {
  background-color: #070724;
  background-image: url("./assets/background-stars.svg");
}
.planet-link .router-link-exact-active {
  background-color: beige;
  font-size: 20rem;
}
.nav-list {
  display: none;
}
.nav-list.show {
  display: flex;
}
.main.lock {
  overflow: hidden;
  height: 100vh;
}
@media screen and (min-width: 768px) {
  .nav-list {
    display: flex;
  }
  .main.lock {
    overflow: auto;
    height: auto;
  }
}
</style>
