import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const STORAGE_KEY = 'nihongo_study_progress_v1'

interface SavedState {
  learnedVocabIds: string[]
  bookmarkedVocabIds: string[]
  learnedKanjiIds: string[]
  learnedKanaIds?: string[]
  bookmarkedKanaIds?: string[]
  streakDays: number
  lastStudyDate: string
}

export const useStudyStore = defineStore('study', () => {
  // Load saved state or default
  const getInitialState = (): SavedState => {
    try {
      const data = localStorage.getItem(STORAGE_KEY)
      if (data) return JSON.parse(data)
    } catch (e) {
      console.error('Failed to load study store from localStorage', e)
    }
    return {
      learnedVocabIds: [],
      bookmarkedVocabIds: [],
      learnedKanjiIds: [],
      learnedKanaIds: [],
      bookmarkedKanaIds: [],
      streakDays: 1,
      lastStudyDate: new Date().toISOString().split('T')[0]
    }
  }

  const initial = getInitialState()
  const learnedVocabIds = ref<string[]>(initial.learnedVocabIds || [])
  const bookmarkedVocabIds = ref<string[]>(initial.bookmarkedVocabIds || [])
  const learnedKanjiIds = ref<string[]>(initial.learnedKanjiIds || [])
  const learnedKanaIds = ref<string[]>(initial.learnedKanaIds || [])
  const bookmarkedKanaIds = ref<string[]>(initial.bookmarkedKanaIds || [])
  const streakDays = ref<number>(initial.streakDays || 1)
  const lastStudyDate = ref<string>(initial.lastStudyDate || new Date().toISOString().split('T')[0])

  const saveToStorage = () => {
    try {
      const state: SavedState = {
        learnedVocabIds: learnedVocabIds.value,
        bookmarkedVocabIds: bookmarkedVocabIds.value,
        learnedKanjiIds: learnedKanjiIds.value,
        learnedKanaIds: learnedKanaIds.value,
        bookmarkedKanaIds: bookmarkedKanaIds.value,
        streakDays: streakDays.value,
        lastStudyDate: lastStudyDate.value
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (e) {
      console.error('Failed to save to localStorage', e)
    }
  }

  // Actions
  const toggleLearnedVocab = (id: string) => {
    const idx = learnedVocabIds.value.indexOf(id)
    if (idx >= 0) {
      learnedVocabIds.value.splice(idx, 1)
    } else {
      learnedVocabIds.value.push(id)
      recordStudyActivity()
    }
    saveToStorage()
  }

  const toggleBookmarkVocab = (id: string) => {
    const idx = bookmarkedVocabIds.value.indexOf(id)
    if (idx >= 0) {
      bookmarkedVocabIds.value.splice(idx, 1)
    } else {
      bookmarkedVocabIds.value.push(id)
    }
    saveToStorage()
  }

  const toggleLearnedKanji = (id: string) => {
    const idx = learnedKanjiIds.value.indexOf(id)
    if (idx >= 0) {
      learnedKanjiIds.value.splice(idx, 1)
    } else {
      learnedKanjiIds.value.push(id)
      recordStudyActivity()
    }
    saveToStorage()
  }

  const toggleLearnedKana = (id: string) => {
    const idx = learnedKanaIds.value.indexOf(id)
    if (idx >= 0) {
      learnedKanaIds.value.splice(idx, 1)
    } else {
      learnedKanaIds.value.push(id)
      recordStudyActivity()
    }
    saveToStorage()
  }

  const toggleBookmarkKana = (id: string) => {
    const idx = bookmarkedKanaIds.value.indexOf(id)
    if (idx >= 0) {
      bookmarkedKanaIds.value.splice(idx, 1)
    } else {
      bookmarkedKanaIds.value.push(id)
    }
    saveToStorage()
  }

  const isVocabLearned = (id: string) => learnedVocabIds.value.includes(id)
  const isVocabBookmarked = (id: string) => bookmarkedVocabIds.value.includes(id)
  const isKanjiLearned = (id: string) => learnedKanjiIds.value.includes(id)
  const isKanaLearned = (id: string) => learnedKanaIds.value.includes(id)
  const isKanaBookmarked = (id: string) => bookmarkedKanaIds.value.includes(id)

  const recordStudyActivity = () => {
    const today = new Date().toISOString().split('T')[0]
    if (lastStudyDate.value === today) return

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
    if (lastStudyDate.value === yesterday) {
      streakDays.value += 1
    } else if (lastStudyDate.value !== today) {
      streakDays.value = 1
    }
    lastStudyDate.value = today
    saveToStorage()
  }

  const totalLearned = computed(() => learnedVocabIds.value.length + learnedKanjiIds.value.length + learnedKanaIds.value.length)

  return {
    learnedVocabIds,
    bookmarkedVocabIds,
    learnedKanjiIds,
    learnedKanaIds,
    bookmarkedKanaIds,
    streakDays,
    totalLearned,
    toggleLearnedVocab,
    toggleBookmarkVocab,
    toggleLearnedKanji,
    toggleLearnedKana,
    toggleBookmarkKana,
    isVocabLearned,
    isVocabBookmarked,
    isKanjiLearned,
    isKanaLearned,
    isKanaBookmarked,
    recordStudyActivity
  }
})

