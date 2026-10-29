<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="flex items-center gap-2.5 font-bold text-lg text-slate-800 hover:text-rose-600 transition-colors">
        <div class="w-9 h-9 rounded-xl bg-linear-to-tr from-rose-500 to-red-600 flex items-center justify-center text-white shadow-md shadow-rose-200">
          <span class="font-japanese font-black text-xl leading-none">日</span>
        </div>
        <div class="flex flex-col">
          <span class="tracking-tight text-base font-extrabold bg-linear-to-r from-rose-600 to-orange-500 bg-clip-text text-transparent">
            Nihongo App
          </span>
        </div>
      </RouterLink>
      </div>
  </header>
</template>

