# 🌸 Nihongo Master - Ứng Dụng Học Tiếng Nhật (Vue 3 + Vite + TypeScript)

Ứng dụng web học tiếng Nhật toàn diện được xây dựng bằng **Vue 3 (Composition API & `<script setup>`)**, **Vite**, **TypeScript**, **Tailwind CSS**, và **Pinia**.

---

## 🚀 Các Tính Năng Đã Được Cài Đặt Sẵn

1. **Bảng Chữ Cái Kana (Hiragana & Katakana)**:
   - Ma trận 46 chữ cái cơ bản chuẩn Seion.
   - Phát âm âm thanh chuẩn người bản xứ (Web Speech API `ja-JP`).
   - Xem chi tiết chữ cái, Romaji, từ vựng ví dụ minh họa và nghĩa tiếng Việt.
   - Chế độ ẩn/hiện Romaji để tự kiểm tra trí nhớ.

2. **Từ Vựng Flashcard 3D (JLPT N5)**:
   - Thẻ lật hiệu ứng không gian 3D mượt mà.
   - Mặt trước: Chữ Hán/Kana chính, Romaji, nút phát âm, đánh dấu yêu thích/cần ôn.
   - Mặt sau: Dịch nghĩa tiếng Việt, câu ví dụ thực tế kèm phiên âm và dịch nghĩa.
   - Bộ lọc linh hoạt: *Tất cả*, *Cần học*, *Đã thuộc*, *Yêu thích*.
   - Chuyển đổi giữa chế độ **Flashcard Deck** và chế độ **Bảng danh sách (Table)**.

3. **Chữ Hán Kanji (JLPT N5)**:
   - Thẻ chữ Hán hiển thị nét chữ to rõ, số nét viết, âm Hán-Việt in hoa nổi bật.
   - Phân biệt rõ ràng giữa âm **On (Onyomi)** và âm **Kun (Kunyomi)**.
   - Modal xem chi tiết danh sách các từ ghép thông dụng nhất kèm nút nghe phát âm.
   - Đánh dấu đã nhớ chữ Hán.

4. **Luyện Tập & Quiz Phản Xạ**:
   - Trắc nghiệm 4 lựa chọn nghĩa từ vựng và âm Hán-Việt.
   - **Gõ Hiragana trực tiếp**: Tích hợp thư viện `wanakana`, tự động chuyển đổi Romaji khi gõ (ví dụ gõ `taberu` sẽ thành `たべる`).
   - Giải thích đáp án tức thì, thanh tiến độ, tính điểm.
   - Hiệu ứng pháo hoa chúc mừng (`canvas-confetti`) khi hoàn thành bài quiz.

5. **Lưu Tiến Độ & Streak**:
   - Sử dụng Pinia Store kết hợp `localStorage` để tự động lưu chuỗi ngày học (streak) và danh sách các từ/chữ Hán đã thuộc mà không bị mất khi F5 trang.

---

## 📁 Cấu Trúc Thư Mục Dự Án

```text
nihongo-app/
├── src/
│   ├── assets/             # Hình ảnh, font chữ, icon tĩnh
│   ├── components/
│   │   ├── common/         # Component dùng chung (Navbar, AudioButton, ProgressBar)
│   │   └── flashcard/      # Thẻ Flashcard 3D (FlashcardItem)
│   ├── data/               # Dữ liệu học (có thể mở rộng thêm N4, N3...)
│   │   ├── kanaData.ts     # Bảng Hiragana & Katakana
│   │   ├── vocabN5Data.ts  # Danh sách từ vựng N5 mẫu
│   │   └── kanjiN5Data.ts  # Danh sách Kanji N5 mẫu
│   ├── router/
│   │   └── index.ts        # Định tuyến Vue Router (/kana, /vocab, /kanji, /quiz)
│   ├── stores/
│   │   └── useStudyStore.ts# Quản lý State bằng Pinia (tiến độ, streak, localStorage)
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces (VocabItem, KanjiItem, KanaItem)
│   ├── utils/
│   │   └── speech.ts       # Web Speech API phát âm tiếng Nhật
│   ├── views/
│   │   ├── HomeView.vue    # Trang chủ dashboard tổng quan
│   │   ├── KanaView.vue    # Trang bảng chữ cái Kana
│   │   ├── VocabView.vue   # Trang học từ vựng Flashcard
│   │   ├── KanjiView.vue   # Trang tra cứu & học Kanji
│   │   └── QuizView.vue    # Trang trắc nghiệm & luyện gõ
│   ├── App.vue             # Root component
│   ├── main.ts             # Điểm khởi động ứng dụng
│   └── style.css           # Cấu hình Tailwind CSS & hiệu ứng 3D
```

---

## 🛠️ Hướng Dẫn Chạy & Phát Triển

### 1. Di chuyển vào thư mục dự án
```bash
cd nihongo-app
```

### 2. Chạy môi trường phát triển (Dev server)
```bash
npm run dev
```
Sau đó mở trình duyệt tại địa chỉ hiển thị trên terminal (mặc định: `http://localhost:5173/`).

### 3. Build sản phẩm (Production)
```bash
npm run build
```

---

## 💡 Hướng Dẫn Mở Rộng Thêm Dữ Liệu
- **Thêm từ vựng mới**: Mở file `src/data/vocabN5Data.ts` và thêm object mới theo cấu trúc `VocabItem`.
- **Thêm cấp độ N4, N3**: Tạo thêm file dữ liệu mới như `vocabN4Data.ts` trong thư mục `src/data/` và import vào `VocabView.vue`.
- **Thêm Kanji mới**: Thêm vào `src/data/kanjiN5Data.ts`.
# nihongo-app
