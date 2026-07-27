# TÜBİTAK Bilgisayar · 1. Aşama Takip

35. Bilim Olimpiyatları Birinci Aşama (Bilgisayar) hazırlık planının çalışan hâli.
**57 konu · 108 puan · 9 faz · 42 hafta · 6 blok · 27 üretken hafta.**

Plan sürümü **3.3** (27 Tem 2026). Sınav: ~15 Mayıs 2027.
🔗 **https://e7lektronxf.github.io/Plan/**

---

## Ne yapar

Altı sekme. Ana sayfada büyük ve kalın: **şu anki faz** ve **sıradaki faz.**

| Sekme | İçerik |
|---|---|
| **Bugün** | Şu anki ve sıradaki aşama (büyük, kalın, konu zinciriyle). Tek şeritte dört ölçü: tamamlanan puan, takvimdeki yer, ölçülen hız, sınava kalan gün. Bu haftanın konuları, üç hattın ilerlemesi. |
| **Müfredat** | 57 konu. İki görünüm: **Dizin** (hat/durum/MEB filtreli, aramalı) ve **Faz zinciri** (9 fazın bağımlılık zinciri, oklarla). **Kapsam gizlidir** — konuya tıkla: ne öğrenilecek, `DUR:` nerede durulacak, `TUZAK:` ve `KLASİK SORU:` vurgulu, ön koşullar ve bağımlılar tıklanabilir rozet, üç durumlu işaret. |
| **Takvim** | 42 hafta şeridi, blok kartları + devir butonu, hafta hafta tablo, hafta tipleri (üretken/tampon/tekrar/sınav — hangisi hız hesabına girer), bütçe, tampon kuralı ve **B2/B5 istisnaları**, haftalık iskelet, blok kapanış ritüeli. |
| **Denemeler** | Deneme girişi, kayıt tablosu, üç hattın net grafiği, protokol ve deneme takvimi. |
| **Karar kaydı** | Künye, başlangıç durumu + sınav kompozisyonu, **M hattı × MEB müfredat eşleştirmesi**, K1–K12 kararları gerekçeleriyle, reddedilen seçenekler, açık sorular, perspektif, sürüm geçmişi. |
| **Araçlar** | **Dışa Aktar / İçeri Aktar**, kapsam modu (kesme/ekleme), AI prompt kütüphanesi (Prompt 2–6, bulunduğun haftaya göre otomatik dolu, tek tıkla kopyala). |

İlerleme göstergesi takvim değil **puandır** (K4). Takvim gecikmesi uyarısı yoktur.

---

## Verini kaybetmemek için — Dışa Aktar / İçeri Aktar

İlerlemen (konu durumları, denemeler, kesme/ekleme kararları) bu tarayıcının
`localStorage`'ında durur. Tarayıcı verisi silinirse ya da başka bir cihaza geçersen kaybolur.

İki tuş, sağ üstte ve Araçlar sekmesinde:

- **⭳ Dışa Aktar** → `tubitak-durum-YYYY-AA-GG.json` dosyasını indirir. İçinde plan sürümü,
  kayıt tarihi, özet (kaç puan / kaç konu / kaç deneme) ve ilerlemenin tamamı vardır.
- **⭱ İçeri Aktar** → dosyayı seç. Yüklemeden **önce** bir onay ekranı çıkar: dosyanın tarihi,
  plan sürümü, gelen ilerleme ve üzerine yazılacak mevcut ilerleme yan yana gösterilir.
  Onaylayınca o duruma dönersin.

Geçersiz ya da alakasız bir dosya seçilirse hiçbir şey değişmez.
**Her blok kapanışında (W6, W14, W22, W30, W38) dışa aktarma alışkanlığı edin.**

---

## MEB eşleştirmesi ve "Ne eksik?" tuşu (K11)

M hattındaki 20 konunun her birinde Maarif Modeli karşılığı var. Konu satırında küçük bir renk noktası:

- 🟢 **tam** (5 konu, 8 p) — okulda da göreceksin, ders tekrar işlevi görür
- 🟡 **kısmi** (7 konu, 11 p) — konuyu duyacaksın ama olimpiyat için gereken kısım eksik kalacak
- ⚪ **yok** (8 konu, 16 p) — tamamen kendi başına, okuldan destek yok

Kısmi olanlarda konu panelinde ayrı bir **"Ne eksik?"** tuşu var. Basmadan `ortusmeyen`
listesi görünmez. Basınca iki sütun açılır: *Okulda göreceksin* (yeşil) / *Okulda
GÖRMEYECEKSİN* (kırmızı). Bu tuş, "okulda gördüm, biliyorum" yanılgısını kırmak için var.

Filtre: **MEB'de yok** → okuldan hiç destek gelmeyecek konuları listeler.

---

## Dosya düzeni

```
index.html                                     arayüz + tüm mantık (Design Component formatı)
support.js                                      bileşeni ayağa kaldıran çalışma zamanı (CDN'den React/ReactDOM yükler)
_ds/classical-.../styles.css                    tasarım sistemi tokenleri (yazı tipi, renk, buton/form/tablo stilleri)
data/plan.json                                  TÜM PLAN VERİSİ — tek kaynak
```

`index.html` bir **Design Component** (`.dc.html`) belgesidir: `<x-dc>` şablonu ve
`<script data-dc-script>` içindeki mantığı `support.js` tarayıcıda çalışırken ayrıştırıp
React ile render eder. `support.js` React, ReactDOM ve (gerekirse) Babel'i unpkg CDN'den
kendisi yükler — internet bağlantısı ister, ekstra bir build adımı gerektirmez.

`data/plan.json` planın tek doğruluk kaynağıdır: konular, kapsamlar, `onkosul` zinciri,
`kesilebilir` bayrakları, `mebKarsiligi` alanları, fazlar, bloklar, 42 hafta, K1–K12
kararları, prompt kütüphanesi. Plan değişirse **sadece bu dosya** değişir.

---

## Nasıl açılır

Veri ayrı dosyada olduğu için `index.html`'i çift tıklayarak açtığında (`file://`)
tarayıcı JSON'u okumaya izin vermez. İki yol:

1. **GitHub Pages** — https://e7lektronxf.github.io/Plan/ (kurulu, `main` dalına her push'ta güncellenir)
2. **Yerel sunucu** — klasörün içinde `python -m http.server 8000`, sonra `http://localhost:8000`

Her iki durumda da internet bağlantısı gerekir: sayfa React/ReactDOM'u ve iki yazı
tipini (Cormorant Garamond, Lora) CDN'den yükler.

---

## Planı güncellemek

Blok kapanışında (W6, W14, W22, W30, W38):

1. **Dışa Aktar** ile ilerlemeyi yedekle.
2. Araçlar sekmesinden **Prompt 2**'yi kopyala, AI'ya ver.
3. Dönen yeni hafta dağılımına göre `data/plan.json` içindeki `haftalar` ve `durum` alanlarını güncelle.
4. Yeni kararı `kararlar` dizisine `K13`, `K14`… olarak ekle; `surumGecmisi`'ne satır at, `meta.surum`'u yükselt.

⚠️ Konu düşerken iki koşul birden gerekir: **çekirdek olmayacak** ve **hiçbir konunun ön koşulu
olmayacak** (K12/D2). Uygulama bunu makine düzeyinde denetler ve gerekçesiyle reddeder.
Çekirdek işaretli **34 konu** dokunulmazdır. Kesme sırası: **A15 → A22 → A6 → M13 → C20** (11 puan).
