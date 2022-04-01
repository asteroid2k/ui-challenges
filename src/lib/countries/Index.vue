<script setup>
import { ref, computed } from "vue";
import Nav from "./Nav.vue";

const getImageUrl = (dir) => {
  return new URL(`./assets/${dir}`, import.meta.url);
};
</script>

<template>
  <Nav />
  <div>Countries</div>
</template>

<style lang="scss" src=""></style>
