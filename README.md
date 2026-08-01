# TÜBİTAK Bilgisayar · 1. Aşama Takip

35. Bilim Olimpiyatları Birinci Aşama (Bilgisayar) hazırlık planının çalışan hâli.
**63 konu · 108 puan · 10 faz · 5 hat (M, C, A, P, L) · 42 hafta · 6 blok · 27 üretken hafta.**

Plan sürümü **4.3** (1 Ağu 2026). Sınav: ~15 Mayıs 2027.
🔗 **https://e7lektronxf.github.io/Plan/**

---

## Ne yapar

Beş ekran, sade ve minimal (EB Garamond / Libre Baskerville, siyah-beyaz + hat başına tek vurgu rengi).

| Ekran | İçerik |
|---|---|
| **Ana** | Şu anki konumum (aktif hafta, blok, o haftanın konuları), gelecek konumum (sıradaki tamamlanmamış konu, çalışma kartına tek tıkla git), genel durumum (tamamlanan puan/108, beş hattın ayrı ilerleme çubuğu). |
| **Konular** | 63 konu, hat filtreli (M/C/A/P/L) ve aramalı. Her konu kapalı gelir; açınca **sabit dört satırlı çalışma kartı**: 📺 video (doğrudan arama linki) · 📖 kaynak · ✏️ soru · ⏱ süre. Altında katlanır bölümler: Kapsam (ne öğreneceğim), Dikkat (tuzaklar/DUR), Ön koşullar, MEB müfredatı, Etiketler (çekirdek/kesilebilir). Karışabilecek isimler (fonksiyon, ikili, yineleme, dinamik programlama) konu açılınca otomatik uyarı olarak çıkar. |
| **Takvim** | 42 haftalık ızgara — taralı haftalar tampon, • işaretli haftalarda deneme, ★ sınav haftası, ↺ tekrar haftası. Bir haftaya tıkla: o haftanın konuları ve notları. |
| **Denemeler** | Beş hatta ayrı net girişi (M/12, C/16, A/16, P/4, L/1) + blok başına süre + boş sayısı. Otomatik net hesabı (4 yanlış 1 doğruyu götürür) ve uyarılar (süre aşımı, boş bırakma). İki denemeden sonra net eğrisi grafiği. |
| **Arşiv** | Sınav günü kuralları (süre aritmetiği, negatif puan stratejisi), deneme rezervi (hangi yılların "yakıldığı"), **K1–K15 karar kaydı** (katlanır), **planın tamamı** bölüm bölüm (Bölüm 0–12 + Ek, markdown olarak render edilir), kaynak kataloğu, video kanalları, dışa/içe aktar. |

İlerleme göstergesi takvim değil **puandır**. Tamamlanan konular ve deneme skorları `localStorage`'da durur.

---

## Dosya düzeni

```
index.html        arayüz + tüm mantık (Design Component formatı)
support.js         bileşeni ayağa kaldıran çalışma zamanı (CDN'den React/ReactDOM yükler)
plan.json          YAPISAL VERİ — konular, hatlar, fazlar, bloklar, 42 hafta, kaynak kataloğu
metin.json         DÜZYAZI VERİ — K1–K15 karar kaydı ve planın tamamı (Bölüm 0–12), markdown
source/theplan.md  planın okunabilir tam metni (v4.3) — insan tarafından düzenlenen kaynak
```

`index.html` bir **Design Component** (`.dc.html`) belgesidir: `<x-dc>` şablonu ve
`<script data-dc-script>` içindeki mantığı `support.js` tarayıcıda çalışırken ayrıştırıp
React ile render eder. `support.js` React ve ReactDOM'u CDN'den kendisi yükler — internet
bağlantısı ister, ekstra bir build adımı gerektirmez.

`plan.json` + `metin.json` birlikte planın tek doğruluk kaynağıdır: biri yapısal (konu/hat/faz/
hafta/blok, `onkosul` zinciri, `kesilebilir`/`cekirdek` bayrakları, `mebKarsiligi`, konu başına
`calisma` kartı — video/kaynak/soru/süre, `kaynakKatalogu`, `videoKanallari`), diğeri düzyazı
(karar kaydı ve planın tam metni, konu paneli ve Arşiv ekranındaki dahili markdown render'la
gösterilir). Plan değişirse bu iki dosya değişir; `source/theplan.md` insan tarafından okunan
ve düzenlenen orijinal belgedir.

---

## Nasıl açılır

Veri ayrı dosyalarda olduğu için `index.html`'i çift tıklayarak açtığında (`file://`)
tarayıcı JSON'u okumaya izin vermez. İki yol:

1. **GitHub Pages** — https://e7lektronxf.github.io/Plan/ (kurulu, `main` dalına her push'ta güncellenir)
2. **Yerel sunucu** — klasörün içinde `python -m http.server 8000`, sonra `http://localhost:8000`

Her iki durumda da internet bağlantısı gerekir: sayfa React/ReactDOM'u ve iki yazı
tipini (Libre Baskerville, EB Garamond) CDN'den yükler.

---

## Planı güncellemek

`source/theplan.md`'yi güncelle (yeni karar, yeni ölçüm, yeni sürüm notu), sonra bu belgeden
`plan.json`'daki ilgili alanları (`haftalar`, `durum`, `konular`, ...) ve `metin.json`'daki
`kararlar`/`bolumler`'i elle senkronize et. `plan.json`'da konu düşürme/ekleme UI'si yok —
kesme kararları artık doğrudan `source/theplan.md`'nin Bölüm 2 ve 9'unda, karar kaydı olarak
tutuluyor.

Çekirdek işaretli konular asla kesilmez; kesilebilir konular hiçbir konunun ön koşulu değildir
(41 çekirdek + 22 kesilebilir = 63). Yeni bir 1. aşama sınavı yayımlandığında Bölüm 11'deki
**Prompt 7**'yi kullan — K13'ün 150 soruluk ampirik tabanını genişletir ve gerekirse müfredatı
yeniden ölçer.
