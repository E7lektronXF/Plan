# TÜBİTAK Bilgisayar · 1. Aşama Takip

35. Bilim Olimpiyatları Birinci Aşama (Bilgisayar) hazırlık planının çalışan hâli.
**63 konu · 108 puan · 10 faz · 5 hat (M, C, A, P, L) · 42 hafta · 6 blok · 26 üretken hafta.**
**Taahhüt kapsamı: Tier B — 41 çekirdek konu / 79 puan** (K26). Kuyruk 12 puan, kesilen 17 puan.

Plan sürümü **4.6** (24 Ağu 2026). Sınav: ~15 Mayıs 2027.
🔗 **https://e7lektronxf.github.io/Plan/**

---

## Ne yapar

Beş ekran, sade ve minimal (EB Garamond / Libre Baskerville, siyah-beyaz + hat başına tek vurgu rengi).

| Ekran | İçerik |
|---|---|
| **Ana** | En üstte, sayfanın en büyük yazısıyla **sıradaki konu** — aynı anda tek bir iş: takvim sırasında (hafta hafta, hafta içinde önce birincil sonra ikincil slot) ilk bitmemiş parça. Yanında "bitirdim" düğmesi var; basınca kendiliğinden bir sonrakine geçer, hafta bitince sonraki haftaya. Altında şu anki konumum (aktif hafta, hafta tipi ve saati, borç), **kapsam taahhüdü** (çekirdek / kuyruk / kesildi dağılımı ve W26 kapısının durumu), genel durumum (tamamlanan puan/**79**), "bundan sonrası" listesi ve beş hattın ayrı ilerleme çubuğu (payda hattın çekirdeği). |
| **Konular** | 63 konu, hat filtreli (M/C/A/P/L), **kapsam filtreli** (çekirdek/kuyruk/kesildi) ve aramalı. Her konu kapalı gelir; açınca **sabit dört satırlı çalışma kartı**: 📺 video (doğrudan arama linki) · 📖 kaynak · ✏️ soru · ⏱ süre. Altında **parça listesi** — 2+ puanlık konular 4 saatlik parçalara bölünmüştür (K24) ve her parça ayrı işaretlenir; bütün parçalar bitince konu kendiliğinden kapanır. Sonra katlanır bölümler: Kapsam, Dikkat (tuzaklar/DUR), Ön koşullar, MEB müfredatı, Etiketler. Karışabilecek isimler (fonksiyon, ikili, yineleme, dinamik programlama) konu açılınca otomatik uyarı olarak çıkar. |
| **Takvim** | 42 haftalık ızgara, her hücrede haftanın saati — taralı haftalar tampon, • tam deneme, · madencilik seti, † W26 kapısı, ★ sınav haftası, ↺ tekrar haftası, ⛔ devredilen. Bir haftaya tıkla: **birincil ve ikincil slot ayrı ayrı**, hangi konunun hangi parçası, yerleştirilen saat / kapasite, kümülatif puan ve notlar. |
| **Denemeler** | 9 tam koşullu oturum + 3 madencilik seti (`plan.json`'daki `denemeler[]` dizisinden). Her oturumun maliyeti ve o haftaya oranı görünür — deneme bir oturumdur, bir hafta değil (K19). Beş hatta ayrı net girişi (M/12, C/16, A/16, P/4, L/1) + blok başına süre + boş sayısı. Otomatik net hesabı (4 yanlış 1 doğruyu götürür) ve uyarılar (süre aşımı, boş bırakma). İki denemeden sonra net eğrisi grafiği. |
| **Arşiv** | Sınav günü kuralları (süre aritmetiği, negatif puan stratejisi), deneme rezervi (hangi yılların "yakıldığı"), **K1–K26 karar kaydı** (katlanır), **planın tamamı** bölüm bölüm (Bölüm 0–12 + Ek, markdown olarak render edilir), kaynak kataloğu, video kanalları, dışa/içe aktar. |

İlerleme göstergesi takvim değil **puandır** — ve v4.6'dan beri konu değil **parça** düzeyinde sayılır. Tamamlanan konular/parçalar ve deneme skorları `localStorage`'da durur; dışa aktarım formatı değişmedi (parçalar `"M2#1"` biçiminde aynı dizide tutulur).

---

## Dosya düzeni

```
index.html        arayüz + tüm mantık (Design Component formatı)
support.js         bileşeni ayağa kaldıran çalışma zamanı (CDN'den React/ReactDOM yükler)
plan.json          YAPISAL VERİ — konular, hatlar, fazlar, bloklar, 42 hafta, kaynak kataloğu
metin.json         DÜZYAZI VERİ — K1–K15 karar kaydı ve planın tamamı (Bölüm 0–12), markdown
source/theplan.md         planın okunabilir tam metni (v4.6) — insan tarafından düzenlenen kaynak
source/v4.6-revizyon.md   v4.6 revizyon belgesi (K19–K26'nın geldiği kaynak, olduğu gibi)
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

Bir revizyon belgesi (`source/v4.6-revizyon.md` gibi) yazılır, sonra `source/theplan.md` ona göre
güncellenir; oradan da `plan.json`'daki alanlar (`meta`, `durum`, `haftalar`, `konular`,
`denemeler`, ...) ve `metin.json`'daki `kararlar`/`bolumler` senkronize edilir.
`metin.json`'un `bolumler` gövdeleri `source/theplan.md`'nin `## N.` bölümleriyle **birebir aynıdır**;
biri değişirse diğeri de değişmeli. `plan.json`'da konu düşürme/ekleme UI'si yok —
kesme kararları artık doğrudan `source/theplan.md`'nin Bölüm 2 ve 9'unda, karar kaydı olarak
tutuluyor.

Çekirdek işaretli konular asla kesilmez; kesilebilir konular hiçbir konunun ön koşulu değildir
(41 çekirdek + 22 kesilebilir = 63). v4.6'dan beri bu ayrım `konular[].tier` alanında da duruyor:
`"B"` (çekirdek, 79 puan) · `"kuyruk"` (W35–W37 geri çağırma penceresi, 12 puan) · `"kesildi"`
(bu sezon çalışılmıyor, 17 puan). Kapsam kısma kararı artık serbest değil — **tek kapı W26'dır** (K26).

Yeni bir 1. aşama sınavı yayımlandığında Bölüm 11'deki
**Prompt 7**'yi kullan — K13'ün 150 soruluk ampirik tabanını genişletir ve gerekirse müfredatı
yeniden ölçer.
