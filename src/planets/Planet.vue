<script>
import { findPlanet } from "./data";
export default {
  data() {
    return {
      info: "overview",
    };
  },
  computed: {
    planet: function () {
      return findPlanet(this.$route.params.planet);
    },
    imgURL() {
      let img = this.info === "geology" ? "overview" : this.info;
      return new URL(`./assets/${this.planet.images[img]}`, import.meta.url);
    },
    surfaceImg() {
      return new URL(`./assets/${this.planet.images.geology}`, import.meta.url);
    },
    surface: function () {
      return this.info === "geology" ? "visible" : "hidden";
    },

  },
  methods: {
    changeView(e) {
      this.info = e.target.getAttribute("data-view");
    },
  },
};
</script>

<template>
  <section
    class="main pb-16 md:pt-20 font-[Spartan] flex flex-col gap-8 h-full max-w-[1300px] lg:mx-auto"
  >
    <!-- info -->
    <div class="info md:px-8 lg:px-20">
      <!-- images container -->
      <div
        class="images mb-16 w-full flex flex-col justify-center items-center relative md:flex-shrink-0"
      >
        <img :src="imgURL" :alt="planet.name" class="planet-img" />
        <img
          v-show="info === 'geology'"
          :src="surfaceImg"
          alt="geology"
          class="surface-img absolute -bottom-6 w-20"
        />
      </div>
      <!-- text content -->
      <div
        class="planet-text px-8 md:px-0 text-center flex flex-col gap-6 md:max-w-[420px] md:text-left lg:max-w-[330px] lg:ml-auto"
      >
        <!-- planet name -->
        <h2 class="text-[50px] font-[Antonio] uppercase text-white">{{ planet.name }}</h2>
        <!-- overview content -->
        <p
          v-show="info === 'overview'"
          class="text-white/80 font-medium text-[13px]"
        >{{ planet.overview.content }}</p>
        <p
          v-show="info === 'structure'"
          class="text-white/80 font-medium text-[13px]"
        >{{ planet.structure.content }}</p>
        <p
          v-show="info === 'geology'"
          class="text-white/80 font-medium text-[13px]"
        >{{ planet.geology.content }}</p>

        <p class="flex gap-1 text-sm justify-center text-white/70 md:justify-start">
          <span class="font-medium text-white/50">Source :</span>
          <a
            class="flex items-baseline gap-1 font-semibold underline"
            :href="planet.geology.source"
          >
            Wikipedia
            <span>
              <img src="./assets/icon-source.svg" alt />
            </span>
          </a>
        </p>
      </div>
      <!-- content tabs -->
      <div
        class="planet-tabs px-8 md:px-0 w-full -order-1 flex justify-between border-b border-white/20 mb-[70px] text-white md:order-2 md:w-[320px] md:flex-col md:ml-auto md:border-0 md:m-0 md:justify-start md:gap-5 lg:max-w-[330px]"
      >
        <button
          :class="`planet-tab ${this.info === 'overview' ? 'tab-active' : ''}`"
          @click="changeView"
          data-view="overview"
        >
          <span class="text-white/60 text-[0.8rem] hidden md:block" data-view="overview">01</span>
          <span class="uppercase" data-view="overview">Overview</span>
        </button>
        <button
          :class="`planet-tab ${this.info === 'structure' ? 'tab-active' : ''}`"
          @click="changeView"
          data-view="structure"
        >
          <span class="text-white/60 text-[0.8rem] hidden md:block" data-view="structure">02</span>
          <span class="uppercase" data-view="structure">
            <span class="hidden md:inline-block">Internal</span> Structure
          </span>
        </button>
        <button
          :class="`planet-tab ${this.info === 'geology' ? 'tab-active' : ''}`"
          @click="changeView"
          data-view="geology"
        >
          <span class="text-white/60 text-[0.8rem] hidden md:block" data-view="geology">03</span>
          <span class="uppercase" data-view="geology">
            Surface
            <span class="hidden md:inline-block" data-view="geology">Geology</span>
          </span>
        </button>
      </div>
    </div>
    <!-- statistics -->
    <div class="stats flex flex-col gap-2 px-8 lg:px-20 md:grid md:grid-cols-4">
      <div class="stat">
        <p>Rotation Time</p>
        <p>{{ planet.rotation }}</p>
      </div>
      <div class="stat">
        <p>Revolution Time</p>
        <p>{{ planet.revolution }}</p>
      </div>
      <div class="stat">
        <p>Radius</p>
        <p>{{ planet.radius }}</p>
      </div>
      <div class="stat">
        <p>Average Temp.</p>
        <p>{{ planet.temperature }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.info {
  display: grid;
  grid-template-areas:
    "tabs"
    "image"
    "text";
}
.images {
  grid-area: image;
}
.planet-text {
  grid-area: text;
}
.planet-tabs {
  grid-area: tabs;
}
.planet-img {
  width: v-bind("`${planet.size.mobile}px`");
}
.surface-img {
  margin-top: -50%;
  visibility: v-bind("surface");
}
.tab-active {
  border-bottom-color: v-bind("planet.color");
}

@media (min-width: 640px) {
  .planet-img {
    width: v-bind("`${planet.size.tablet}px`");
  }
}
@media (min-width: 768px) {
  .info {
    gap: 50px;
    grid-template-areas:
      "image image"
      "text tabs";
  }
  .tab-active {
    border-color: v-bind("planet.color");
    background-color: v-bind("planet.color");
  }
}
@media (min-width: 960px) {
  .planet-img {
    width: v-bind("`${planet.size.web}px`");
  }
}
@media (min-width: 1024px) {
  .info {
    grid-template-areas:
      "image text"
      "image tabs";
  }
}
</style>
