export type KanaType = 'hiragana' | 'katakana'

export interface KanaItem {
  id: string
  character: string
  romaji: string
  type: KanaType
  category: 'seion' | 'dakuon' | 'handakuon' | 'yoon' // Âm thuần, Âm đục, Âm bán đục, Ảo âm
  example?: {
    word: string
    reading: string
    meaning: string
  }
}

export type JlptLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1'

export interface VocabItem {
  id: string
  word: string // Chữ Kanji hoặc Kana chính
  reading: string // Cách đọc Hiragana
  romaji: string
  meaningVi: string // Nghĩa tiếng Việt
  jlptLevel: JlptLevel
  partOfSpeech: string // Danh từ, Động từ nhóm 1, Tính từ -i, ...
  exampleJp: string // Câu ví dụ tiếng Nhật
  exampleReading: string // Cách đọc câu ví dụ
  exampleVi: string // Dịch nghĩa câu ví dụ
}

export interface KanjiExample {
  word: string
  reading: string
  meaning: string
}

export interface KanjiItem {
  id: string
  kanji: string
  hanViet: string // Âm Hán-Việt (ví dụ: NHẬT, NGUYỆT)
  onyomi: string[] // Âm On (Katakana)
  kunyomi: string[] // Âm Kun (Hiragana)
  meaningVi: string
  strokeCount: number
  jlptLevel: JlptLevel
  examples: KanjiExample[]
}

export type QuizType = 'meaning' | 'reading' | 'typing'

export interface QuizQuestion {
  id: string
  type: QuizType
  question: string
  subQuestion?: string
  options?: string[]
  correctAnswer: string
  explanation: string
}

