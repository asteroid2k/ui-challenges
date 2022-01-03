<script setup>
import { ref, computed } from "vue"
import { getImageUrl } from "../util"
import { data } from "./data"

let expanded = ref(false)
let currentSlide = ref(0)


let slideData = computed(() => {
    return data[currentSlide.value]
})
let listState = computed(() => expanded.value ? "show" : "hide")
let hamIcon = computed(() => {
    let img = "./room/assets/"
    img += expanded.value ? "icon-close.svg" : "icon-hamburger.svg"
    return getImageUrl(img)
})

const toggleNav = () => {
    expanded.value = !expanded.value
}
const prevSlide = () => {
    if (currentSlide.value <= 0) {
        currentSlide.value = 2
        return
    }
    currentSlide.value = (currentSlide.value - 1);
};
const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % 3;
};


</script>

<template>
    <div class="main text-xs font-medium h-[150vh]">
        <section class="content flex flex-col relative">
            <nav class="absolute z-10 top-0 px-6 py-12 w-full flex">
                <button class="absolute z-30" @click="toggleNav">
                    <img :src="hamIcon" alt />
                </button>
                <div class="brand mx-auto">
                    <img src="./assets/logo.svg" alt="room logo" />
                </div>
                <div
                    :class="`navlist ${listState} absolute z-20 left-0 top-0 flex items-center justify-between w-full  h-full px-6 transition-all duration-300 `"
                >
                    <ul class="font-semibold text-sm flex gap-6 ml-auto">
                        <li>home</li>
                        <li>shop</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </div>
            </nav>
            <section>
                <div
                    class="slide-img h-[500px] bg-cover bg-no-repeat bg-top relative bg-transparent"
                >
                    <div class="hero absolute right-0 bottom-0 flex slide-nav">
                        <button
                            class="py-4 px-5 bg-black hover:bg-[color:var(--gray-800)] transition-colors group"
                            @click="prevSlide"
                        >
                            <img src="./assets/icon-angle-left.svg" alt />
                        </button>
                        <button
                            class="py-4 px-5 bg-black hover:bg-[color:var(--gray-800)] transition-colors group"
                            @click="nextSlide"
                        >
                            <img src="./assets/icon-angle-right.svg" alt />
                        </button>
                    </div>
                </div>
                <div class="slide-text px-6 flex flex-col gap-4 py-16 max-w-[90%]">
                    <h2 class="text-2xl font-bold">{{ slideData.heading }}</h2>
                    <p class="leading-5">{{ slideData.text }}</p>
                    <button
                        class="text-xs p-2 font-semibold uppercase flex tracking-[0.8em] hover:text-[color:var(--gray-800)] gap-4 items-center mt-8 transition-colors group"
                    >
                        shop now
                        <span class="group-hover:translate-x-1 transition">
                            <img src="./assets/icon-arrow.svg" alt />
                        </span>
                    </button>
                </div>
                <section class="about flex flex-col">
                    <div class="h-[300px] about-img bg-cover bg-bottom"></div>

                    <div class="px-6 py-10">
                        <h2 class="text-base font-bold uppercase mb-4">About our furniture</h2>
                        <p class="leading-5">
                            Our multifunctional collection blends design and function to suit your individual taste.
                            Make each room unique, or pick a cohesive theme that best express your interests and what
                            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                            or anything in between. Product specialists are available to help you create your dream space.
                        </p>
                    </div>
                    <div class="h-[300px] about-img2 bg-cover bg-bottom"></div>
                </section>
            </section>
        </section>
    </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Spartan:wght@500;600;700&display=swap");

.main {
    --gray-600: hsl(0, 0%, 63%);
    --gray-800: hsl(0, 0%, 27%);
    --white: hsl(0, 0%, 100%);
    --black: hsl(0, 0%, 0%);
}
.main {
    font-family: "Spartan";
}
p {
    color: var(--gray-600);
}

.navlist.hide {
    opacity: 0;
    background-color: transparent;
    transform: translateX(-100%);
}
.navlist.show {
    opacity: 1;
    background-color: var(--white);
    transform: translateX(0);
}
.slide-img {
    background-image: v-bind("`url(${getImageUrl(slideData.imageMobile)})`");
}
.slide-nav button:hover {
    background-color: var(--gray-800);
}
.about-img {
    background-image: v-bind(
        "`url(${getImageUrl('./room/assets/pexels-medhat-ayad-800305-mobile.jpg')})`"
    );
}
.about-img2 {
    background-image: v-bind(
        "`url(${getImageUrl('./room/assets/ellen-qin-bxLhqZIp2LI-unsplash-mobile.jpg')})`"
    );
}
@media screen and (min-width: 640px) {
    .slide-img {
        background-image: v-bind(
            "`url(${getImageUrl(slideData.imageDesktop)})`"
        );
    }
}
</style>
