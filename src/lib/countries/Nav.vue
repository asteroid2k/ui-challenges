<script setup>
import { ref, computed } from "vue";
import { MoonIcon } from "@heroicons/vue/outline";
</script>

<template>
  <nav>
    <p>Where in the world?</p>
    <button>
      <span><MoonIcon /></span>
      <p>Dark Mode</p>
    </button>
  </nav>
</template>

<style scoped></style>
