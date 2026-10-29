<script setup lang="ts">
import { ref } from 'vue'
import { Volume2 } from 'lucide-vue-next'
import { playJapaneseAudio } from '@/utils/speech'

const props = withDefaults(
  defineProps<{
    text: string
    size?: 'sm' | 'md' | 'lg'
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
    rate?: number
  }>(),
  {
    size: 'md',
    variant: 'secondary',
    rate: 0.9
  }
)

const isPlaying = ref(false)

const handlePlay = async (e?: Event) => {
  if (e) e.stopPropagation()
  if (isPlaying.value || !props.text) return
  isPlaying.value = true
  try {
    await playJapaneseAudio(props.text, props.rate)
  } catch (err) {
    console.error('Audio play error:', err)
  } finally {
    isPlaying.value = false
  }
}
</script>

<template>
  <button
    type="button"
    @click.stop="handlePlay"
    :title="`Nghe phát âm: ${text}`"
    :class="[
      'inline-flex items-center justify-center rounded-xl transition-all duration-200 cursor-pointer active:scale-95 select-none',
      isPlaying ? 'scale-105 ring-2 ring-rose-400 ring-offset-1' : '',
      size === 'sm' ? 'w-8 h-8 text-xs' : size === 'lg' ? 'w-12 h-12 text-base' : 'w-10 h-10 text-sm',
      variant === 'primary'
        ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-sm shadow-rose-200'
        : variant === 'ghost'
        ? 'hover:bg-white/10 text-slate-500'
        : variant === 'outline'
        ? 'border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
        : 'bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600'
    ]"
  >
    <Volume2
      :class="[
        isPlaying ? 'animate-pulse text-rose-500' : '',
        size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'
      ]"
    />
  </button>
</template>
