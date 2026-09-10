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

Beş ekran, sade ve minimal (EB Garamond / Libre Baskerville, hat başına tek vurgu rengi) — **aydınlık ve karanlık mod**.

| Ekran | İçerik |
|---|---|
| **Ana** | Takvim konumu (biten haftalara kadar planlanan saat), gerçek konum (işaretlenen konuların saati), gecikme; bu haftanın konuları + **IOI hattının bu haftaki işi** ve çözülen problem sayacı (hedef 120); sıradaki konular kuyruğu; beş hattın ilerleme çubuğu. |
| **Konular** | 34 konu, hat filtreli (M/C/A/G/P) ve aramalı. Her konu kapalı gelir; açınca çalışma kartı: 📺 video · 📖 kaynak · ✏️ soru · ⏱ süre · **DUR (derinlik tavanı)**. Altında katlanır bölümler: Kapsam, Dikkat, Ön koşullar, Yerleşim. Karışabilecek isimler (fonksiyon, ikili, yineleme) konu açılınca uyarı olarak çıkar. |
| **Takvim** | 35 haftalık ızgara — taralı haftalar tampon, • deneme, ↺ geçmiş sınav haftası, ★ sınav haftası. Bir haftaya tıkla: o haftanın sınav hattı konuları (devam oturumları işaretli), IOI hattı işi ve notlar. |
| **Denemeler** | Yedi deneme (#1 kısmi, #2–#7 tam). Doğru/yanlış/boş → otomatik net (4 yanlış 1 doğruyu götürür), süre ve en zayıf hat girişi. Beklenen net aralığı grafikte gri bant olarak çizilir, 40 net hedef çizgisi işaretlidir. Deneme #4'te 1 Mart karar noktası uyarısı otomatik çıkar. Altında Blok 4'ün geçmiş sınav takvimi. |
| **Arşiv** | Sınav taktiği (negatif puan, süre, sıra, küme soruları), karar noktaları (KN1 · 1 Mart 2027, KN2 · Kasım 2026), IOI 2028 takvimi, planın tamamı (Bölüm 0–9, markdown olarak render edilir), kaynak kataloğu + alınmayacaklar, v5.0'ta çıkarılan/eklenenler, dışa/içe aktar. |

İlerleme göstergesi takvim değil **tamamlanan konu ve saattir.** Tamamlanan konular, deneme skorları,
IOI problem sayacı ve tema tercihi `localStorage`'da durur.

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

## Karanlık mod

Sağ üstteki **☾ Karanlık / ☀ Aydınlık** düğmesi temayı değiştirir. Tercih `localStorage`'da tutulur;
hiç seçim yapılmamışsa işletim sisteminin `prefers-color-scheme` ayarı kullanılır. Renkler
`:root` üzerinde CSS değişkeni olarak tanımlıdır (`--kagit`, `--murekkep`, `--vurgu`, hat renkleri…),
karanlık palet `:root[data-tema="koyu"]` altında.

---

## Nasıl açılır

Veri ayrı dosyalarda olduğu için `index.html`'i çift tıklayarak açtığında (`file://`)
tarayıcı JSON'u okumaya izin vermez. İki yol:

1. **GitHub Pages** — https://e7lektronxf.github.io/Plan/ (`main` dalına her push'ta güncellenir)
2. **Yerel sunucu** — klasörün içinde `python -m http.server 8000`, sonra `http://localhost:8000`

Her iki durumda da internet bağlantısı gerekir: sayfa React/ReactDOM'u ve iki yazı
tipini (Libre Baskerville, EB Garamond) CDN'den yükler.

---

## Planı güncellemek

`source/theplan.md`'yi güncelle, sonra bu belgeden `plan.json`'daki alanları (`haftalar`, `konular`,
`denemeler`, `ioiHatti`, ...) ve `metin.json`'daki `bolumler`'i senkronize et. `metin.json`
doğrudan `source/theplan.md`'nin `## ` başlıklarından üretilir.

Derinlik tavanı (`dur`) her konunun kendi satırındadır ve planın üç kuralına bağlıdır:
**bir konu bir oturum**, **teorem değil kalıp**, **elle izle kod yazma**. Bir konu iki haftaya
yayılıyorsa fazla derin alınmış demektir.
