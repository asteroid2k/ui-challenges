<script setup>

</script>

<template>
  <div class="app bg-slate-100 min-h-screen">
    <nav
      class="main-nav flex justify-center py-4 gap-6 font-[Inter] uppercase shadow text-slate-600 mb-6 items-center"
    >
      <router-link class="text-base font-bold" to="/">Home</router-link>
      <router-link class="text-base font-bold" to="/about">About</router-link>
      <a
        class="text-sm text-slate-500 font-medium rounded-full p-2 w-10 block shadow-sm group hover:bg-slate-400 transition-colors"
        href="https://github.com/asteroid2k/ui-challenges"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-github stroke-slate-600 group-hover:stroke-slate-50"
        >
          <path
            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
          />
        </svg>
      </a>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style >
</style>
