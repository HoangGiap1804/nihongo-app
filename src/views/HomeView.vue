<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight, RotateCw, RotateCcw, Shuffle, ListOrdered } from 'lucide-vue-next'
import confetti from 'canvas-confetti'
import { HIRAGANA_DATA } from '@/data/kanaData'
import type { KanaItem } from '@/types'
import HiraganaCard from '@/components/flashcard/HiraganaCard.vue'

// Types
type StudyMode = 'order' | 'random'
type StudyDirection = 'romaji-first' | 'kana-first'

// State
const studyMode = ref<StudyMode>('order')
const studyDirection = ref<StudyDirection>('romaji-first')
const currentIndex = ref(0)
const isFlipped = ref(false)

// Randomized cards
const randomizedCards = ref<KanaItem[]>([])

const shuffle = (array: KanaItem[]): KanaItem[] => {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// Watch mode changes
watch(
  studyMode,
  (mode) => {
    if (mode === 'random') {
      randomizedCards.value = shuffle(HIRAGANA_DATA)
    }
    currentIndex.value = 0
    isFlipped.value = false
  },
  { immediate: true }
)

const cards = computed<KanaItem[]>(() => {
  return studyMode.value === 'random' ? randomizedCards.value : HIRAGANA_DATA
})

const currentCard = computed<KanaItem>(() => {
  return cards.value[currentIndex.value] || cards.value[0]
})

const restartStudy = () => {
  confetti({
    particleCount: 50,
    spread: 60,
    origin: { y: 0.7 }
  })
  if (studyMode.value === 'random') {
    randomizedCards.value = shuffle(HIRAGANA_DATA)
  }
  currentIndex.value = 0
  isFlipped.value = false
}

const nextCard = () => {
  if (currentIndex.value < cards.value.length - 1) {
    currentIndex.value++
    isFlipped.value = false
  } else {
    // Đã học hết số lượng, reload để học lại
    restartStudy()
  }
}

const prevCard = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    isFlipped.value = false
  }
}

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
}

const setDirection = (dir: StudyDirection) => {
  studyDirection.value = dir
  isFlipped.value = false
}

// Keyboard shortcuts
const handleKeydown = (e: KeyboardEvent) => {
  if (e.code === 'Space' || e.code === 'Enter') {
    e.preventDefault()
    toggleFlip()
  } else if (e.code === 'ArrowRight') {
    e.preventDefault()
    nextCard()
  } else if (e.code === 'ArrowLeft') {
    e.preventDefault()
    prevCard()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="max-w-md mx-auto py-6 sm:py-10 px-4 space-y-6">
    <!-- NÚT CHỌN CHẾ ĐỘ & CHIỀU HỌC -->
    <div class="flex flex-col gap-3">
      <!-- 1. Chế độ: Thứ tự hoặc Ngẫu nhiên -->
      <div class="flex items-center justify-between bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs">
        <span class="text-xs font-semibold text-slate-500 pl-2">Chế độ:</span>
        <div class="inline-flex gap-1">
          <button
            type="button"
            @click="studyMode = 'order'"
            :class="[
              'inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer',
              studyMode === 'order'
                ? 'bg-slate-900 text-white'
                : 'text-slate-600 hover:text-slate-900'
            ]"
          >
            <ListOrdered class="w-3.5 h-3.5" />
            <span>Thứ tự</span>
          </button>

          <button
            type="button"
            @click="studyMode = 'random'"
            :class="[
              'inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer',
              studyMode === 'random'
                ? 'bg-rose-500 text-white'
                : 'text-slate-600 hover:text-slate-900'
            ]"
          >
            <Shuffle class="w-3.5 h-3.5" />
            <span>Ngẫu nhiên</span>
          </button>
        </div>
      </div>

      <!-- 2. Nút chọn học chữ a hoặc chữ あ -->
      <div class="flex items-center justify-between bg-white p-1.5 rounded-2xl border border-slate-200 shadow-xs">
        <span class="text-xs font-semibold text-slate-500 pl-2">Học chữ:</span>
        <div class="inline-flex gap-1">
          <button
            type="button"
            @click="setDirection('romaji-first')"
            :class="[
              'px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer',
              studyDirection === 'romaji-first'
                ? 'bg-rose-500 text-white'
                : 'text-slate-600 hover:text-slate-900'
            ]"
          >
            Chữ a (Romaji)
          </button>

          <button
            type="button"
            @click="setDirection('kana-first')"
            :class="[
              'px-3 py-1.5 rounded-xl text-xs font-bold transition-colors cursor-pointer font-japanese',
              studyDirection === 'kana-first'
                ? 'bg-rose-500 text-white'
                : 'text-slate-600 hover:text-slate-900'
            ]"
          >
            Chữ あ (Hiragana)
          </button>
        </div>
      </div>
    </div>

    <!-- FLASHCARD -->
    <div v-if="currentCard" class="pt-2">
      <HiraganaCard
        :item="currentCard"
        :direction="studyDirection"
        :is-flipped="isFlipped"
        @flip="toggleFlip"
      />
    </div>

    <!-- TIẾN ĐỘ & ĐIỀU KHIỂN CHUYỂN THẺ -->
    <div class="space-y-4 pt-2">
      <!-- Số thứ tự thẻ & nút reload -->
      <div class="flex items-center justify-center gap-2">
        <span class="text-sm font-bold text-slate-500">
          {{ currentIndex + 1 }} / {{ cards.length }}
        </span>
        <button
          type="button"
          @click="restartStudy"
          title="Học lại từ đầu"
          class="p-1 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <RotateCcw class="w-3.5 h-3.5" />
        </button>
      </div>

      <!-- Các nút Trước - Lật - Sau -->
      <div class="flex items-center justify-between gap-3">
        <button
          type="button"
          @click="prevCard"
          :disabled="currentIndex === 0"
          :class="[
            'flex-1 h-13 flex items-center justify-center rounded-2xl border transition-all cursor-pointer select-none active:scale-95',
            currentIndex === 0
              ? 'border-slate-200 bg-slate-100 text-slate-300 cursor-not-allowed'
              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-xs'
          ]"
          title="Thẻ trước"
        >
          <ChevronLeft class="w-6 h-6 stroke-[2.5]" />
        </button>

        <button
          type="button"
          @click="toggleFlip"
          class="flex-1 h-13 flex items-center justify-center rounded-2xl bg-slate-900 hover:bg-slate-800 text-white transition-all cursor-pointer select-none active:scale-95 shadow-sm"
          title="Lật thẻ"
        >
          <RotateCw :class="['w-5 h-5 stroke-[2.2] text-rose-400 transition-transform duration-300', isFlipped && 'rotate-180']" />
        </button>

        <!-- Nút Sau / Nút Học lại khi hết thẻ -->
        <button
          type="button"
          @click="nextCard"
          class="flex-1 h-13 flex items-center justify-center rounded-2xl bg-rose-500 hover:bg-rose-600 text-white shadow-xs transition-all cursor-pointer select-none active:scale-95"
          :title="currentIndex === cards.length - 1 ? 'Đã hết - Nhấn để học lại' : 'Thẻ tiếp theo'"
        >
          <RotateCcw v-if="currentIndex === cards.length - 1" class="w-5 h-5 stroke-[2.5]" />
          <ChevronRight v-else class="w-6 h-6 stroke-[2.5]" />
        </button>
      </div>

      <!-- Gợi ý phím tắt nhỏ -->
      <p class="text-center text-[11px] text-slate-400">
        Phím tắt: <kbd class="px-1 py-0.5 rounded bg-slate-200 text-slate-600 font-mono text-[10px]">Space</kbd> để lật, <kbd class="px-1 py-0.5 rounded bg-slate-200 text-slate-600 font-mono text-[10px]">←</kbd> <kbd class="px-1 py-0.5 rounded bg-slate-200 text-slate-600 font-mono text-[10px]">→</kbd> để chuyển thẻ
      </p>
    </div>
  </div>
</template>
