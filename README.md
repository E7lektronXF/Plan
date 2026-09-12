# TÜBİTAK Bilgisayar · 1. Aşama Takip

35. Bilim Olimpiyatları Birinci Aşama (Bilgisayar) hazırlık planının çalışan hâli.
**34 konu · ~67 saat müfredat · 5 hat (M, C, A, G, P) · 35 hafta · 5 blok · haftada 9 saat (7 sınav hattı + 2 IOI hattı).**

Plan sürümü **5.0** (10 Eyl 2026). Başlangıç: 14 Eylül 2026. Sınav: ~15 Mayıs 2027.
🔗 **https://e7lektronxf.github.io/Plan/**

---

## v5.0 ne değiştirdi

Önceki sürümler konuların *ağırlığını* ölçmüştü ama *derinliğini* fazla almıştı. v5.0 derinliği
TÜBİTAK'ın resmî 1. aşama müfredat belgesine göre yeniden ayarlıyor:

| | v4.4 | v5.0 |
|---|---|---|
| Konu | 63 | **34** |
| Yatırım | 692 saat | **~280 saat** |
| Hat | M, C, A, P, L | **M, C, A, G, P** |
| Hafta | 42 | **35** |
| İlerleme ölçüsü | puan (108) | **konu ve saat** |
| Ek hat | — | **IOI tohum hattı (2 sa/hafta)** |

Puan aritmetiği, 10 fazlı bağımlılık zinciri ve karar kaydı kaldırıldı; yerlerine her konunun kendi
**DUR (derinlik tavanı)** satırı, iki **karar noktası** ve **IOI hattı** geldi. Ön koşul sayısı beşe indi:
M12→C10, C4→C7, C6→A2, M10→P1, M1→sayma konuları.

---

## Ne yapar

Beş ekran, karanlık zeminli editoryal düzen: Archivo + EB Garamond + JetBrains Mono, İsviçre ızgarası,
hat başına tek vurgu rengi (M altın · C yeşil · A mavi · G mor · P pembe) — **karanlık ve aydınlık mod**.

| Ekran | İçerik |
|---|---|
| **Bugün** | Günde tek iş. Ekranın tamamı o oturuma ayrılır: konu kimliği + adı, kapsam özeti, süre, ön koşul ve **DUR (derinlik tavanı)** kutusu, oturumu başlat / video / soru düğmeleri. Altta haftanın geri kalanı üç noktaya iner. Sağ rayda dört sayı: konu 15/34, gecikme (yapılan saat − planlanan saat), IOI tohum hattı (çözülen problem, hedef 120) ve sınava kalan gün. |
| **Konular** | **Tuğla duvarı:** her konu bir tuğla, genişliği o konunun saati. Dolu tuğla bitti, kesikli çerçeve bu hafta, boş tuğla duruyor — duvarın yarısı geçilince müfredatın yarısı geçilmiş olur. Hat filtresi (Hepsi / M / C / A / G / P) ve arama. Tuğlaya tıkla: konu detayı açılır (📺 video · 📖 kaynak · ✏️ soru · ⏱ süre, DUR kartı, kapsam/dikkat, ön koşul rozetleri, *bitti olarak işaretle* ve konu başına **hata defteri notu**). Altta 35 haftalık ısı şeridi. |
| **Takvim** | **Beş hat, metro şeması:** M/C/A/G/P hatlarının 35 hafta boyunca paralel ilerleyişi; arkada blok bantları, istasyonlar konu haftalarında. İki iğne — takvim konumu ve saat birikiminden hesaplanan gerçek konum; aradaki şerit gecikmedir. Altında sıradaki istasyon, henüz açılmamış hatlar ve IOI kartı; hafta şeridinden bir haftaya tıkla: o haftanın konuları, IOI işi ve notları. |
| **Denemeler** | Yedi deneme (#1 kısmi, #2–#7 tam). Beklenen net bandı, 40 net hedef çizgisi, gerçekleşen eğri ve **bu gidişle** tahmini tek grafikte; bugün çizgisi bulunduğun haftada. Tabloda bir denemeye tıkla: doğru/yanlış/boş → otomatik net (4 yanlış 1 doğruyu götürür), süre ve en zayıf hat girişi. Deneme #4'te 1 Mart karar noktası uyarısı otomatik çıkar. Altında geçmiş sınav takvimi ve sınav taktiği. |
| **Arşiv** | Karar noktaları (KN1 · 1 Mart 2027, KN2 · Kasım 2026), planın tam metni (Bölüm 0–9, markdown olarak render edilir), kaynak kataloğu, video kanalları, alınmayacaklar / çıkarılanlar / eklenenler, IOI hattının gerekçesi, ilerlemeyi dışa–içe aktar ve sıfırla. |

İlerleme göstergesi takvim değil **tamamlanan konu ve saattir.** Tamamlanan konular, deneme skorları,
konu notları, IOI problem sayacı ve tema tercihi `localStorage`'da durur.

700 pikselin altında düzen tek sütuna iner ve gezinme alt sekme çubuğuna geçer.

---

## Dosya düzeni

```
index.html        arayüz + tüm mantık (Design Component formatı)
support.js        bileşeni ayağa kaldıran çalışma zamanı (CDN'den React/ReactDOM yükler)
plan.json         YAPISAL VERİ — konular, hatlar, bloklar, 35 hafta, IOI hattı, denemeler, kaynaklar
metin.json        DÜZYAZI VERİ — planın tamamı, bölüm bölüm (markdown)
source/theplan.md planın okunabilir tam metni (v5.0) — insan tarafından düzenlenen kaynak
```

`index.html` bir **Design Component** (`.dc.html`) belgesidir: `<x-dc>` şablonu ve
`<script data-dc-script>` içindeki mantığı `support.js` tarayıcıda çalışırken ayrıştırıp
React ile render eder. `support.js` React ve ReactDOM'u CDN'den kendisi yükler — internet
bağlantısı ister, ekstra bir build adımı gerektirmez.

`plan.json` + `metin.json` birlikte planın tek doğruluk kaynağıdır: biri yapısal (konu/hat/hafta/
blok, `onkosul` zinciri, `dur` derinlik tavanı, konu başına `calisma` kartı, `ioiHatti`, `denemeler`,
`kararNoktalari`, `sinavTaktigi`, `kaynakKatalogu`), diğeri düzyazı (planın tam metni).
`source/theplan.md` insan tarafından okunan ve düzenlenen orijinal belgedir.

---

## Tema

Sağ üstteki **☾ / ☀** düğmesi temayı değiştirir. Tercih `localStorage`'da tutulur; hiç seçim
yapılmamışsa işletim sisteminin `prefers-color-scheme` ayarı kullanılır — varsayılan karanlıktır.
Renkler `:root` üzerinde CSS değişkeni olarak tanımlıdır (`--zemin`, `--murekkep`, `--vurgu`,
`--hatM`…`--hatP`); aydınlık palet `:root[data-tema="acik"]` altında. Gölge yoktur, ayrım kenarlıkla
yapılır.

---

## Nasıl açılır

Veri ayrı dosyalarda olduğu için `index.html`'i çift tıklayarak açtığında (`file://`)
tarayıcı JSON'u okumaya izin vermez. İki yol:

1. **GitHub Pages** — https://e7lektronxf.github.io/Plan/ (`main` dalına her push'ta güncellenir)
2. **Yerel sunucu** — klasörün içinde `python -m http.server 8000`, sonra `http://localhost:8000`

Her iki durumda da internet bağlantısı gerekir: sayfa React/ReactDOM'u ve üç yazı
tipini (Archivo, EB Garamond, JetBrains Mono) CDN'den yükler.

---

## Planı güncellemek

`source/theplan.md`'yi güncelle, sonra bu belgeden `plan.json`'daki alanları (`haftalar`, `konular`,
`denemeler`, `ioiHatti`, ...) ve `metin.json`'daki `bolumler`'i senkronize et. `metin.json`
doğrudan `source/theplan.md`'nin `## ` başlıklarından üretilir.

Derinlik tavanı (`dur`) her konunun kendi satırındadır ve planın üç kuralına bağlıdır:
**bir konu bir oturum**, **teorem değil kalıp**, **elle izle kod yazma**. Bir konu iki haftaya
yayılıyorsa fazla derin alınmış demektir.
