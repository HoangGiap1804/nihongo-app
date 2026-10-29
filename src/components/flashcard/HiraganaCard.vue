<script setup lang="ts">
import type { KanaItem } from '@/types'

const props = defineProps<{
  item: KanaItem
  frontItem?: KanaItem | null
  backItem?: KanaItem | null
  direction: 'romaji-first' | 'kana-first'
  isFlipped: boolean
  isTransitioning?: boolean
}>()

const emit = defineEmits<{
  (e: 'flip'): void
}>()

const handleCardClick = () => {
  if (props.isTransitioning) return
  emit('flip')
}
</script>

<template>
  <div
    class="w-full max-w-sm mx-auto h-80 sm:h-96 perspective-1000 select-none cursor-pointer"
    @click="handleCardClick"
  >
    <div
      :class="[
        'w-full h-full relative transition-transform duration-300 ease-out transform-style-preserve-3d rounded-3xl shadow-md hover:shadow-lg border border-slate-200',
        isFlipped ? 'rotate-y-180' : ''
      ]"
    >
      <!-- ==================== MẶT TRƯỚC ==================== -->
      <div
        class="absolute inset-0 w-full h-full backface-hidden bg-white rounded-3xl p-6 flex flex-col justify-between items-center text-center"
      >
        <div class="my-auto">
          <div
            v-if="direction === 'romaji-first'"
            class="text-8xl sm:text-9xl font-black text-slate-800 tracking-tight font-sans"
          >
            {{ (frontItem || item).romaji }}
          </div>

          <div
            v-else
            class="font-japanese text-8xl sm:text-9xl font-black text-slate-800 tracking-normal"
          >
            {{ (frontItem || item).character }}
          </div>
        </div>
      </div>

      <!-- ==================== MẶT SAU ==================== -->
      <div
        class="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-slate-900 text-white rounded-3xl p-6 flex flex-col justify-between items-center text-center"
      >
        <div class="my-auto flex flex-col items-center justify-center">
          <div v-if="direction === 'romaji-first'" class="flex items-baseline justify-center gap-3">
            <span class="font-japanese text-8xl sm:text-9xl font-black text-white">
              {{ (backItem || item).character }}
            </span>
            <span class="text-3xl sm:text-4xl font-extrabold text-rose-400">
              {{ (backItem || item).romaji }}
            </span>
          </div>

          <div v-else class="flex items-baseline justify-center gap-3">
            <span class="text-8xl sm:text-9xl font-black text-white font-sans">
              {{ (backItem || item).romaji }}
            </span>
            <span class="font-japanese text-3xl sm:text-4xl font-extrabold text-rose-400">
              {{ (backItem || item).character }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
