import type { KanaItem } from '@/types'

export const HIRAGANA_DATA: KanaItem[] = [
  // A row
  { id: 'h-a', character: 'あ', romaji: 'a', type: 'hiragana', category: 'seion', example: { word: 'あさ (asa)', reading: 'asa', meaning: 'Buổi sáng' } },
  { id: 'h-i', character: 'い', romaji: 'i', type: 'hiragana', category: 'seion', example: { word: 'いぬ (inu)', reading: 'inu', meaning: 'Con chó' } },
  { id: 'h-u', character: 'う', romaji: 'u', type: 'hiragana', category: 'seion', example: { word: 'うみ (umi)', reading: 'umi', meaning: 'Biển' } },
  { id: 'h-e', character: 'え', romaji: 'e', type: 'hiragana', category: 'seion', example: { word: 'えき (eki)', reading: 'eki', meaning: 'Nhà ga' } },
  { id: 'h-o', character: 'お', romaji: 'o', type: 'hiragana', category: 'seion', example: { word: 'お茶 (ocha)', reading: 'ocha', meaning: 'Trà' } },

  // Ka row
  { id: 'h-ka', character: 'か', romaji: 'ka', type: 'hiragana', category: 'seion', example: { word: 'かさ (kasa)', reading: 'kasa', meaning: 'Cái ô (dù)' } },
  { id: 'h-ki', character: 'き', romaji: 'ki', type: 'hiragana', category: 'seion', example: { word: 'き (ki)', reading: 'ki', meaning: 'Cái cây' } },
  { id: 'h-ku', character: 'く', romaji: 'ku', type: 'hiragana', category: 'seion', example: { word: 'くるま (kuruma)', reading: 'kuruma', meaning: 'Xe hơi' } },
  { id: 'h-ke', character: 'け', romaji: 'ke', type: 'hiragana', category: 'seion', example: { word: 'けさ (kesa)', reading: 'kesa', meaning: 'Sáng nay' } },
  { id: 'h-ko', character: 'こ', romaji: 'ko', type: 'hiragana', category: 'seion', example: { word: 'こども (kodomo)', reading: 'kodomo', meaning: 'Trẻ em' } },

  // Sa row
  { id: 'h-sa', character: 'さ', romaji: 'sa', type: 'hiragana', category: 'seion', example: { word: 'さかな (sakana)', reading: 'sakana', meaning: 'Con cá' } },
  { id: 'h-shi', character: 'し', romaji: 'shi', type: 'hiragana', category: 'seion', example: { word: 'しろ (shiro)', reading: 'shiro', meaning: 'Màu trắng' } },
  { id: 'h-su', character: 'す', romaji: 'su', type: 'hiragana', category: 'seion', example: { word: 'すし (sushi)', reading: 'sushi', meaning: 'Món Sushi' } },
  { id: 'h-se', character: 'せ', romaji: 'se', type: 'hiragana', category: 'seion', example: { word: 'せんせい (sensei)', reading: 'sensei', meaning: 'Thầy/Cô giáo' } },
  { id: 'h-so', character: 'そ', romaji: 'so', type: 'hiragana', category: 'seion', example: { word: 'そら (sora)', reading: 'sora', meaning: 'Bầu trời' } },

  // Ta row
  { id: 'h-ta', character: 'た', romaji: 'ta', type: 'hiragana', category: 'seion', example: { word: 'たまご (tamago)', reading: 'tamago', meaning: 'Quả trứng' } },
  { id: 'h-chi', character: 'ち', romaji: 'chi', type: 'hiragana', category: 'seion', example: { word: 'ちず (chizu)', reading: 'chizu', meaning: 'Bản đồ' } },
  { id: 'h-tsu', character: 'つ', romaji: 'tsu', type: 'hiragana', category: 'seion', example: { word: 'つき (tsuki)', reading: 'tsuki', meaning: 'Mặt trăng' } },
  { id: 'h-te', character: 'て', romaji: 'te', type: 'hiragana', category: 'seion', example: { word: 'て (te)', reading: 'te', meaning: 'Bàn tay' } },
  { id: 'h-to', character: 'と', romaji: 'to', type: 'hiragana', category: 'seion', example: { word: 'ともだち (tomodachi)', reading: 'tomodachi', meaning: 'Bạn bè' } },

  // Na row
  { id: 'h-na', character: 'な', romaji: 'na', type: 'hiragana', category: 'seion', example: { word: 'なつ (natsu)', reading: 'natsu', meaning: 'Mùa hè' } },
  { id: 'h-ni', character: 'に', romaji: 'ni', type: 'hiragana', category: 'seion', example: { word: 'にほん (nihon)', reading: 'nihon', meaning: 'Nhật Bản' } },
  { id: 'h-nu', character: 'ぬ', romaji: 'nu', type: 'hiragana', category: 'seion', example: { word: 'ぬいぐるみ (nuigurumi)', reading: 'nuigurumi', meaning: 'Gấu bông' } },
  { id: 'h-ne', character: 'ね', romaji: 'ne', type: 'hiragana', category: 'seion', example: { word: 'ねこ (neko)', reading: 'neko', meaning: 'Con mèo' } },
  { id: 'h-no', character: 'の', romaji: 'no', type: 'hiragana', category: 'seion', example: { word: 'のみもの (nomimono)', reading: 'nomimono', meaning: 'Đồ uống' } },

  // // Ha row
  // { id: 'h-ha', character: 'は', romaji: 'ha', type: 'hiragana', category: 'seion', example: { word: 'はな (hana)', reading: 'hana', meaning: 'Bông hoa' } },
  // { id: 'h-hi', character: 'ひ', romaji: 'hi', type: 'hiragana', category: 'seion', example: { word: 'ひと (hito)', reading: 'hito', meaning: 'Người' } },
  // { id: 'h-fu', character: 'ふ', romaji: 'fu', type: 'hiragana', category: 'seion', example: { word: 'ふね (fune)', reading: 'fune', meaning: 'Thuyền' } },
  // { id: 'h-he', character: 'へ', romaji: 'he', type: 'hiragana', category: 'seion', example: { word: 'へや (heya)', reading: 'heya', meaning: 'Căn phòng' } },
  // { id: 'h-ho', character: 'ほ', romaji: 'ho', type: 'hiragana', category: 'seion', example: { word: 'ほん (hon)', reading: 'hon', meaning: 'Quyển sách' } },

  // // Ma row
  // { id: 'h-ma', character: 'ま', romaji: 'ma', type: 'hiragana', category: 'seion', example: { word: 'まち (machi)', reading: 'machi', meaning: 'Thành phố/Khu phố' } },
  // { id: 'h-mi', character: 'み', romaji: 'mi', type: 'hiragana', category: 'seion', example: { word: 'みず (mizu)', reading: 'mizu', meaning: 'Nước' } },
  // { id: 'h-mu', character: 'む', romaji: 'mu', type: 'hiragana', category: 'seion', example: { word: 'むし (mushi)', reading: 'mushi', meaning: 'Côn trùng' } },
  // { id: 'h-me', character: 'め', romaji: 'me', type: 'hiragana', category: 'seion', example: { word: 'め (me)', reading: 'me', meaning: 'Mắt' } },
  // { id: 'h-mo', character: 'も', romaji: 'mo', type: 'hiragana', category: 'seion', example: { word: 'もり (mori)', reading: 'mori', meaning: 'Khu rừng' } },

  // // Ya row
  // { id: 'h-ya', character: 'や', romaji: 'ya', type: 'hiragana', category: 'seion', example: { word: 'やま (yama)', reading: 'yama', meaning: 'Núi' } },
  // { id: 'h-yu', character: 'ゆ', romaji: 'yu', type: 'hiragana', category: 'seion', example: { word: 'ゆき (yuki)', reading: 'yuki', meaning: 'Tuyết' } },
  // { id: 'h-yo', character: 'よ', romaji: 'yo', type: 'hiragana', category: 'seion', example: { word: 'よる (yoru)', reading: 'yoru', meaning: 'Buổi tối' } },

  // // Ra row
  // { id: 'h-ra', character: 'ら', romaji: 'ra', type: 'hiragana', category: 'seion', example: { word: 'らいげつ (raigetsu)', reading: 'raigetsu', meaning: 'Tháng sau' } },
  // { id: 'h-ri', character: 'り', romaji: 'ri', type: 'hiragana', category: 'seion', example: { word: 'りんご (ringo)', reading: 'ringo', meaning: 'Quả táo' } },
  // { id: 'h-ru', character: 'る', romaji: 'ru', type: 'hiragana', category: 'seion', example: { word: 'るす (rusu)', reading: 'rusu', meaning: 'Vắng nhà' } },
  // { id: 'h-re', character: 'れ', romaji: 're', type: 'hiragana', category: 'seion', example: { word: 'れいぞうこ (reizouko)', reading: 'reizouko', meaning: 'Tủ lạnh' } },
  // { id: 'h-ro', character: 'ろ', romaji: 'ro', type: 'hiragana', category: 'seion', example: { word: 'ろうそく (rousoku)', reading: 'rousoku', meaning: 'Cây nến' } },

  // // Wa, Wo, N
  // { id: 'h-wa', character: 'わ', romaji: 'wa', type: 'hiragana', category: 'seion', example: { word: 'わたし (watashi)', reading: 'watashi', meaning: 'Tôi' } },
  // { id: 'h-wo', character: 'を', romaji: 'wo', type: 'hiragana', category: 'seion', example: { word: '本を読む (hon o yomu)', reading: 'hon o yomu', meaning: 'Đọc sách' } },
  // { id: 'h-n', character: 'ん', romaji: 'n', type: 'hiragana', category: 'seion', example: { word: 'おんな (onna)', reading: 'onna', meaning: 'Phụ nữ' } },
]

export const KATAKANA_DATA: KanaItem[] = [
  // A row
  { id: 'k-a', character: 'ア', romaji: 'a', type: 'katakana', category: 'seion', example: { word: 'アイス (aisu)', reading: 'aisu', meaning: 'Kem' } },
  { id: 'k-i', character: 'イ', romaji: 'i', type: 'katakana', category: 'seion', example: { word: 'インク (inku)', reading: 'inku', meaning: 'Mực' } },
  { id: 'k-u', character: 'ウ', romaji: 'u', type: 'katakana', category: 'seion', example: { word: 'ウェブ (webu)', reading: 'webu', meaning: 'Web' } },
  { id: 'k-e', character: 'エ', romaji: 'e', type: 'katakana', category: 'seion', example: { word: 'エアコン (eakon)', reading: 'eakon', meaning: 'Điều hòa' } },
  { id: 'k-o', character: 'オ', romaji: 'o', type: 'katakana', category: 'seion', example: { word: 'オレンジ (orenji)', reading: 'orenji', meaning: 'Quả cam' } },

  // Ka row
  { id: 'k-ka', character: 'カ', romaji: 'ka', type: 'katakana', category: 'seion', example: { word: 'カメラ (kamera)', reading: 'kamera', meaning: 'Máy ảnh' } },
  { id: 'k-ki', character: 'キ', romaji: 'ki', type: 'katakana', category: 'seion', example: { word: 'キーボード (kiiboodo)', reading: 'kiiboodo', meaning: 'Bàn phím' } },
  { id: 'k-ku', character: 'ク', romaji: 'ku', type: 'katakana', category: 'seion', example: { word: 'クラス (kurasu)', reading: 'kurasu', meaning: 'Lớp học' } },
  { id: 'k-ke', character: 'ケ', romaji: 'ke', type: 'katakana', category: 'seion', example: { word: 'ケーキ (keeki)', reading: 'keeki', meaning: 'Bánh kem' } },
  { id: 'k-ko', character: 'コ', romaji: 'ko', type: 'katakana', category: 'seion', example: { word: 'コーヒー (koohii)', reading: 'koohii', meaning: 'Cà phê' } },

  // Sa row
  { id: 'k-sa', character: 'サ', romaji: 'sa', type: 'katakana', category: 'seion', example: { word: 'サラダ (sarada)', reading: 'sarada', meaning: 'Salad' } },
  { id: 'k-shi', character: 'シ', romaji: 'shi', type: 'katakana', category: 'seion', example: { word: 'シャツ (shatsu)', reading: 'shatsu', meaning: 'Áo sơ mi' } },
  { id: 'k-su', character: 'ス', romaji: 'su', type: 'katakana', category: 'seion', example: { word: 'スポーツ (supootsu)', reading: 'supootsu', meaning: 'Thể thao' } },
  { id: 'k-se', character: 'セ', romaji: 'se', type: 'katakana', category: 'seion', example: { word: 'セーター (seetaa)', reading: 'seetaa', meaning: 'Áo len' } },
  { id: 'k-so', character: 'ソ', romaji: 'so', type: 'katakana', category: 'seion', example: { word: 'ソファ (sofa)', reading: 'sofa', meaning: 'Ghế sofa' } },

  // Ta row
  { id: 'k-ta', character: 'タ', romaji: 'ta', type: 'katakana', category: 'seion', example: { word: 'タクシー (takushii)', reading: 'takushii', meaning: 'Xe taxi' } },
  { id: 'k-chi', character: 'チ', romaji: 'chi', type: 'katakana', category: 'seion', example: { word: 'チーズ (chiizu)', reading: 'chiizu', meaning: 'Phô mai' } },
  { id: 'k-tsu', character: 'ツ', romaji: 'tsu', type: 'katakana', category: 'seion', example: { word: 'ツアー (tsuaa)', reading: 'tsuaa', meaning: 'Chuyến tham quan' } },
  { id: 'k-te', character: 'テ', romaji: 'te', type: 'katakana', category: 'seion', example: { word: 'テレビ (terebi)', reading: 'terebi', meaning: 'Tivi' } },
  { id: 'k-to', character: 'ト', romaji: 'to', type: 'katakana', category: 'seion', example: { word: 'トマト (tomato)', reading: 'tomato', meaning: 'Cà chua' } },

  // Na row
  { id: 'k-na', character: 'ナ', romaji: 'na', type: 'katakana', category: 'seion', example: { word: 'ナイフ (naifu)', reading: 'naifu', meaning: 'Con dao' } },
  { id: 'k-ni', character: 'ニ', romaji: 'ni', type: 'katakana', category: 'seion', example: { word: 'ニュース (nyuusu)', reading: 'nyuusu', meaning: 'Tin tức' } },
  { id: 'k-nu', character: 'ヌ', romaji: 'nu', type: 'katakana', category: 'seion', example: { word: 'ヌードル (nuudoru)', reading: 'nuudoru', meaning: 'Mì sợi' } },
  { id: 'k-ne', character: 'ネ', romaji: 'ne', type: 'katakana', category: 'seion', example: { word: 'ネクタイ (nekutai)', reading: 'nekutai', meaning: 'Cà vạt' } },
  { id: 'k-no', character: 'ノ', romaji: 'no', type: 'katakana', category: 'seion', example: { word: 'ノート (nooto)', reading: 'nooto', meaning: 'Vở ghi chép' } },

  // Ha row
  { id: 'k-ha', character: 'ハ', romaji: 'ha', type: 'katakana', category: 'seion', example: { word: 'ハンバーガー (hanbaagaa)', reading: 'hanbaagaa', meaning: 'Bánh burger' } },
  { id: 'k-hi', character: 'ヒ', romaji: 'hi', type: 'katakana', category: 'seion', example: { word: 'ヒーター (hiitaa)', reading: 'hiitaa', meaning: 'Máy sưởi' } },
  { id: 'k-fu', character: 'フ', romaji: 'fu', type: 'katakana', category: 'seion', example: { word: 'フォーク (fooku)', reading: 'fooku', meaning: 'Cái nĩa' } },
  { id: 'k-he', character: 'ヘ', romaji: 'he', type: 'katakana', category: 'seion', example: { word: 'ヘリコプター (herikoputaa)', reading: 'herikoputaa', meaning: 'Trực thăng' } },
  { id: 'k-ho', character: 'ホ', romaji: 'ho', type: 'katakana', category: 'seion', example: { word: 'ホテル (hoteru)', reading: 'hoteru', meaning: 'Khách sạn' } },

  // Ma row
  { id: 'k-ma', character: 'マ', romaji: 'ma', type: 'katakana', category: 'seion', example: { word: 'マスク (masuku)', reading: 'masuku', meaning: 'Khẩu trang' } },
  { id: 'k-mi', character: 'ミ', romaji: 'mi', type: 'katakana', category: 'seion', example: { word: 'ミルク (miruku)', reading: 'miruku', meaning: 'Sữa tươi' } },
  { id: 'k-mu', character: 'ム', romaji: 'mu', type: 'katakana', category: 'seion', example: { word: 'ムービー (muubii)', reading: 'muubii', meaning: 'Phim ảnh' } },
  { id: 'k-me', character: 'メ', romaji: 'me', type: 'katakana', category: 'seion', example: { word: 'メニュー (menyuu)', reading: 'menyuu', meaning: 'Thực đơn' } },
  { id: 'k-mo', character: 'モ', romaji: 'mo', type: 'katakana', category: 'seion', example: { word: 'モニター (monitaa)', reading: 'monitaa', meaning: 'Màn hình' } },

  // Ya row
  { id: 'k-ya', character: 'ヤ', romaji: 'ya', type: 'katakana', category: 'seion', example: { word: 'ヤング (yangu)', reading: 'yangu', meaning: 'Trẻ trung' } },
  { id: 'k-yu', character: 'ユ', romaji: 'yu', type: 'katakana', category: 'seion', example: { word: 'ユーザー (yuuzaa)', reading: 'yuuzaa', meaning: 'Người dùng' } },
  { id: 'k-yo', character: 'ヨ', romaji: 'yo', type: 'katakana', category: 'seion', example: { word: 'ヨーグルト (yooguruto)', reading: 'yooguruto', meaning: 'Sữa chua' } },

  // Ra row
  { id: 'k-ra', character: 'ラ', romaji: 'ra', type: 'katakana', category: 'seion', example: { word: 'ラジオ (rajio)', reading: 'rajio', meaning: 'Đài radio' } },
  { id: 'k-ri', character: 'リ', romaji: 'ri', type: 'katakana', category: 'seion', example: { word: 'リンゴ (ringo)', reading: 'ringo', meaning: 'Quả táo' } },
  { id: 'k-ru', character: 'ル', romaji: 'ru', type: 'katakana', category: 'seion', example: { word: 'ルール (ruuru)', reading: 'ruuru', meaning: 'Luật lệ' } },
  { id: 'k-re', character: 'レ', romaji: 're', type: 'katakana', category: 'seion', example: { word: 'レストラン (resutoran)', reading: 'resutoran', meaning: 'Nhà hàng' } },
  { id: 'k-ro', character: 'ロ', romaji: 'ro', type: 'katakana', category: 'seion', example: { word: 'ロボット (robotto)', reading: 'robotto', meaning: 'Người máy' } },

  // Wa, Wo, N
  { id: 'k-wa', character: 'ワ', romaji: 'wa', type: 'katakana', category: 'seion', example: { word: 'ワイン (wain)', reading: 'wain', meaning: 'Rượu vang' } },
  { id: 'k-wo', character: 'ヲ', romaji: 'wo', type: 'katakana', category: 'seion', example: { word: 'ヲタク (wotaku)', reading: 'wotaku', meaning: 'Otaku' } },
  { id: 'k-n', character: 'ン', romaji: 'n', type: 'katakana', category: 'seion', example: { word: 'パン (pan)', reading: 'pan', meaning: 'Bánh mì' } },
]
