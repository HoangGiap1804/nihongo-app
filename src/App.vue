<script setup lang="ts">
import AppNavbar from '@/components/common/AppNavbar.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex flex-col font-sans">
    <AppNavbar />

    <main class="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
      <router-view />
    </main>

    <footer class="border-t border-slate-200 bg-white py-6 mt-12 text-center text-xs text-slate-400">
      <p>Nihongo Learning App • Xây dựng với Vue 3 + Vite + Tailwind CSS + Pinia</p>
    </footer>
  </div>
</template>
