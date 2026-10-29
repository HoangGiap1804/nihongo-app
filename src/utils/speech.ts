/**
 * Web Speech API helper to speak Japanese text
 */
export function playJapaneseAudio(text: string, rate: number = 0.9): Promise<void> {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported in this browser.')
      resolve()
      return
    }

    // Cancel any previous utterances
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'ja-JP'
    utterance.rate = rate // Slightly slower for language learners

    // Try to find a native Japanese voice if available
    const voices = window.speechSynthesis.getVoices()
    const jaVoice = voices.find(
      (v) => v.lang === 'ja-JP' || v.lang.startsWith('ja') || v.name.includes('Japanese') || v.name.includes('Kyoko')
    )
    if (jaVoice) {
      utterance.voice = jaVoice
    }

    utterance.onend = () => resolve()
    utterance.onerror = () => resolve()

    window.speechSynthesis.speak(utterance)
  })
}

