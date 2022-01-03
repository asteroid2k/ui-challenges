<script setup>
import { projects } from "../projects";
import { HeartIcon } from "@heroicons/vue/solid"

</script>

<template>
    <div class="about px-8 flex flex-col gap-10 min-h-screen">
        <div>
            <h2 class="h2 mb-2">What is this project?</h2>
            <p class="sub max-w-2xl">
                This is just a collection of my implementation of random UI designs I find online. This is to help me become better at Frontend. I didn't really like Frontend, but I've been learning CSS (properly) to improve my skills.
                <br />Also learning UI/UX and might make awesome designs myself, soon🤌.
                <br />
                <span class="text-xl text-rose-600 animate-pulse mt-4 block">
                    <a
                        href="https://portfolio-asteroid2k.vercel.app"
                        target="_blank"
                        rel="noreferrer noopener"
                    >View my portfolio🚀</a>
                </span>
            </p>
        </div>
        <div>
            <h2 class="h2 mb-2">Inspo</h2>
            <p class="sub">Resources for my projects</p>
            <ul>
                <li v-for="(project,id) in projects" :key="id">
                    <p class="text-slate-600">
                        <span class="text-base font-medium text-slate-400">{{ id + 1 }}</span>
                        {{ project.lname }}
                        <span
                            class="text-rose-500 hover:text-rose-700 font-medium ml-2"
                        >
                            <a :href="project.link" target="_blank">View</a>
                        </span>
                    </p>
                </li>
            </ul>
        </div>
        <div
            class="absolute bottom-2 left-2 p-3 shadow w-fit rounded-md group hover:bg-rose-100 hover:shadow-md transition-all"
        >
            <p
                class="text-lg text-slate-500 font-medium flex items-center group-hover:text-slate-700"
            >
                Built with Vue, Tailwind &
                <span class="w-6">
                    <HeartIcon class="group-hover:fill-rose-700" />
                </span>
            </p>
        </div>
    </div>
</template>

<style></style>
