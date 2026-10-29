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
const isTransitioning = ref(false)

// Thẻ hiển thị tạm thời khi đang lật chuyển trang
const frontCard = ref<KanaItem | null>(null)
const backCard = ref<KanaItem | null>(null)

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
    frontCard.value = null
    backCard.value = null
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
  if (isTransitioning.value) return

  const nextDeck = studyMode.value === 'random' ? shuffle(HIRAGANA_DATA) : HIRAGANA_DATA

  if (isFlipped.value) {
    const current = currentCard.value
    const first = nextDeck[0]

    backCard.value = current
    frontCard.value = first
    isTransitioning.value = true
    isFlipped.value = false

    setTimeout(() => {
      if (studyMode.value === 'random') {
        randomizedCards.value = nextDeck
      }
      currentIndex.value = 0
      frontCard.value = null
      backCard.value = null
      isTransitioning.value = false
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      })
    }, 320)
  } else {
    if (studyMode.value === 'random') {
      randomizedCards.value = nextDeck
    }
    currentIndex.value = 0
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    })
  }
}

const nextCard = () => {
  if (isTransitioning.value) return

  if (currentIndex.value < cards.value.length - 1) {
    if (isFlipped.value) {
      // Đang mở mặt sau: lật về mặt trước và mặt trước là chữ mới luôn!
      const current = currentCard.value
      const next = cards.value[currentIndex.value + 1]

      backCard.value = current
      frontCard.value = next
      isTransitioning.value = true
      isFlipped.value = false

      setTimeout(() => {
        currentIndex.value++
        frontCard.value = null
        backCard.value = null
        isTransitioning.value = false
      }, 320)
    } else {
      currentIndex.value++
    }
  } else {
    // Đã học hết số lượng, reload để học lại
    restartStudy()
  }
}

const prevCard = () => {
  if (isTransitioning.value) return

  if (currentIndex.value > 0) {
    if (isFlipped.value) {
      // Đang mở mặt sau: lật về mặt trước của chữ cái trước đó!
      const current = currentCard.value
      const prev = cards.value[currentIndex.value - 1]

      backCard.value = current
      frontCard.value = prev
      isTransitioning.value = true
      isFlipped.value = false

      setTimeout(() => {
        currentIndex.value--
        frontCard.value = null
        backCard.value = null
        isTransitioning.value = false
      }, 320)
    } else {
      currentIndex.value--
    }
  }
}

const toggleFlip = () => {
  if (isTransitioning.value) return
  isFlipped.value = !isFlipped.value
}

const setDirection = (dir: StudyDirection) => {
  if (isTransitioning.value || studyDirection.value === dir) return
  isFlipped.value = false
  studyDirection.value = dir
}

const setMode = (mode: StudyMode) => {
  if (isTransitioning.value || studyMode.value === mode) return
  isFlipped.value = false
  studyMode.value = mode
}

// Keyboard shortcuts
const handleKeydown = (e: KeyboardEvent) => {
  if (isTransitioning.value) return
  if (e.code === 'Space' || e.code === 'Enter' || e.code === 'ArrowTop' || e.code === 'ArrowBottom' || e.code === 'KeyW' || e.code === 'KeyS') {
    e.preventDefault()
    toggleFlip()
  } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
    e.preventDefault()
    nextCard()
  } else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
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
            @click="setMode('order')"
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
            @click="setMode('random')"
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
        :front-item="frontCard"
        :back-item="backCard"
        :direction="studyDirection"
        :is-flipped="isFlipped"
        :is-transitioning="isTransitioning"
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
          :disabled="isTransitioning"
          title="Học lại từ đầu"
          class="p-1 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-slate-100 transition-colors cursor-pointer disabled:opacity-50"
        >
          <RotateCcw class="w-3.5 h-3.5" />
        </button>
      </div>

      <!-- Các nút Trước - Lật - Sau -->
      <div class="flex items-center justify-between gap-3">
        <button
          type="button"
          @click="prevCard"
          :disabled="isTransitioning || currentIndex === 0"
          :class="[
            'flex-1 h-13 flex items-center justify-center rounded-2xl border transition-all cursor-pointer select-none active:scale-95',
            currentIndex === 0 || isTransitioning
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
          :disabled="isTransitioning"
          :class="[
            'flex-1 h-13 flex items-center justify-center rounded-2xl bg-slate-900 hover:bg-slate-800 text-white transition-all cursor-pointer select-none active:scale-95 shadow-sm',
            isTransitioning ? 'opacity-70 cursor-not-allowed' : ''
          ]"
          title="Lật thẻ"
        >
          <RotateCw :class="['w-5 h-5 stroke-[2.2] text-rose-400 transition-transform duration-300', isFlipped && 'rotate-180']" />
        </button>

        <!-- Nút Sau / Nút Học lại khi hết thẻ -->
        <button
          type="button"
          @click="nextCard"
          :disabled="isTransitioning"
          :class="[
            'flex-1 h-13 flex items-center justify-center rounded-2xl bg-rose-500 hover:bg-rose-600 text-white shadow-xs transition-all cursor-pointer select-none active:scale-95',
            isTransitioning ? 'opacity-70 cursor-not-allowed' : ''
          ]"
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
