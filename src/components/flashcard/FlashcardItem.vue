<script setup lang="ts">
import { ref } from 'vue'
import { Bookmark, CheckCircle2, RotateCw } from 'lucide-vue-next'
import type { VocabItem } from '@/types'
import { useStudyStore } from '@/stores/useStudyStore'
import AudioButton from '@/components/common/AudioButton.vue'

const props = defineProps<{
  vocab: VocabItem
}>()

const isFlipped = ref(false)
const studyStore = useStudyStore()

const toggleFlip = () => {
  isFlipped.value = !isFlipped.value
}
</script>

<template>
  <div class="relative w-full h-80 perspective-1000 select-none cursor-pointer" @click="toggleFlip">
    <div
      :class="[
        'w-full h-full relative transition-transform duration-500 transform-style-preserve-3d rounded-2xl shadow-sm hover:shadow-md border border-slate-200/80',
        isFlipped ? 'rotate-y-180' : ''
      ]"
    >
      <!-- FRONT SIDE -->
      <div
        class="absolute inset-0 w-full h-full backface-hidden bg-white rounded-2xl p-6 flex flex-col justify-between items-center text-center"
      >
        <!-- Top Toolbar -->
        <div class="w-full flex items-center justify-between">
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-100">
            {{ vocab.jlptLevel }} • {{ vocab.partOfSpeech }}
          </span>

          <div class="flex items-center gap-1">
            <button
              type="button"
              @click.stop="studyStore.toggleBookmarkVocab(vocab.id)"
              :class="[
                'p-2 rounded-full transition-colors cursor-pointer',
                studyStore.isVocabBookmarked(vocab.id)
                  ? 'text-amber-500 bg-amber-50'
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
              ]"
              title="Đánh dấu cần xem lại"
            >
              <Bookmark :class="['w-4 h-4', studyStore.isVocabBookmarked(vocab.id) && 'fill-amber-500']" />
            </button>
            <AudioButton :text="vocab.reading" size="sm" />
          </div>
        </div>

        <!-- Center Word -->
        <div class="my-auto flex flex-col items-center gap-2">
          <p class="text-xs font-medium text-slate-400 tracking-wider">
            {{ vocab.reading }} ({{ vocab.romaji }})
          </p>
          <h2 class="font-japanese text-4xl sm:text-5xl font-bold text-slate-800 tracking-wide">
            {{ vocab.word }}
          </h2>
        </div>

        <!-- Bottom Actions -->
        <div class="w-full flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-400">
          <span class="flex items-center gap-1 text-slate-400">
            <RotateCw class="w-3.5 h-3.5" /> Chạm để lật mặt sau
          </span>

          <button
            type="button"
            @click.stop="studyStore.toggleLearnedVocab(vocab.id)"
            :class="[
              'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer',
              studyStore.isVocabLearned(vocab.id)
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
            ]"
          >
            <CheckCircle2 :class="['w-3.5 h-3.5', studyStore.isVocabLearned(vocab.id) && 'fill-emerald-500 text-white']" />
            {{ studyStore.isVocabLearned(vocab.id) ? 'Đã thuộc' : 'Chưa thuộc' }}
          </button>
        </div>
      </div>

      <!-- BACK SIDE -->
      <div
        class="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-b from-slate-900 to-slate-800 text-white rounded-2xl p-6 flex flex-col justify-between"
      >
        <!-- Header Back -->
        <div class="w-full flex items-center justify-between text-xs text-slate-400">
          <span class="font-japanese text-sm text-rose-300 font-semibold">{{ vocab.word }}</span>
          <AudioButton :text="vocab.exampleJp" size="sm" variant="ghost" class="text-slate-300 hover:text-white" />
        </div>

        <!-- Meaning Content -->
        <div class="my-auto space-y-3">
          <div>
            <span class="text-[11px] uppercase tracking-wider text-rose-400 font-semibold block mb-0.5">Ý nghĩa</span>
            <p class="text-xl font-bold text-white leading-snug">
              {{ vocab.meaningVi }}
            </p>
          </div>

          <!-- Example Sentence -->
          <div class="p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-left">
            <span class="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block mb-1">Ví dụ minh họa:</span>
            <p class="font-japanese text-sm font-medium text-slate-100 mb-0.5">
              {{ vocab.exampleJp }}
            </p>
            <p class="text-xs text-slate-400 mb-1">
              {{ vocab.exampleReading }}
            </p>
            <p class="text-xs text-rose-300 italic">
              ↳ {{ vocab.exampleVi }}
            </p>
          </div>
        </div>

        <!-- Footer Back -->
        <div class="w-full flex items-center justify-between pt-2 border-t border-slate-700 text-xs text-slate-400">
          <span class="flex items-center gap-1">
            <RotateCw class="w-3.5 h-3.5" /> Chạm để quay lại
          </span>

          <button
            type="button"
            @click.stop="studyStore.toggleLearnedVocab(vocab.id)"
            :class="[
              'flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer',
              studyStore.isVocabLearned(vocab.id)
                ? 'bg-emerald-500 text-white'
                : 'bg-slate-700 text-slate-200 hover:bg-emerald-600'
            ]"
          >
            <CheckCircle2 class="w-3.5 h-3.5" />
            {{ studyStore.isVocabLearned(vocab.id) ? 'Đã thuộc ✓' : 'Đánh dấu đã thuộc' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

