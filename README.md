# TÜBİTAK Bilgisayar · 1. Aşama Takip

35. Bilim Olimpiyatları Birinci Aşama (Bilgisayar) hazırlık planının çalışan hâli.
**57 konu · 108 puan · 9 faz · 42 hafta · 6 blok.**

Plan sürümü **3.1** (26 Tem 2026). Sınav: ~15 Mayıs 2027.

---

## Ne yapar

| Bölüm | İçerik |
|---|---|
| **Panel** | Ana sayfada büyük ve kalın: **şu anki faz** ve **sıradaki faz**. Altında takvimdeki yer, tamamlanan puan, ölçülen hız, sınava kalan gün, hat ilerlemeleri, 42 haftalık şerit, karışabilecek isimler, haftalık iskelet. |
| **Konular** | 57 konu, hat ve duruma göre filtreli. **Kapsam gizlidir** — konuya tıklayınca açılır: ne öğrenilecek, `DUR:` nerede durulacak, `TUZAK:` ve `KLASİK SORU:` vurgulu, ön koşullar tıklanabilir rozet. Üç durumlu işaret: başlamadı / çalışılıyor / tamamlandı. |
| **Fazlar** | 9 fazın bağımlılık zinciri. Tamamlananlar dolu, ön koşulu bitmemişler soluk. |
| **Takvim** | 42 hafta şeridi (bloklar renkli, tamponlar taralı, denemeler ve blok kapanışları işaretli), blok kartları + devir butonu, hafta hafta tablo, bütçe aritmetiği, blok kapanış ritüeli. |
| **Denemeler** | Deneme girişi, kayıt tablosu, üç hattın net grafiği, deneme protokolü ve takvimi. |
| **Karar kaydı** | Künye, başlangıç durumu, sınav kompozisyonu, K1–K10 kararları gerekçeleriyle, reddedilen seçenekler, açık sorular, perspektif, sürüm geçmişi. |
| **Kapsam modu** | Kesme sırası ve geri ekleme listesi. **Çekirdek konular ve başkasının ön koşulu olanlar kesilemez** — uygulama gerekçesiyle reddeder. İlerlemeyi JSON olarak dışa/içe aktarma. |
| **Promptlar** | Plandaki Prompt 2–6, bulunduğun haftaya ve ilerlemene göre **otomatik doldurulmuş** hâlde. Tek tıkla kopyala, AI oturumuna yapıştır. (Prompt 1 zaten bu uygulamanın kendisi.) |

İlerleme göstergesi takvim değil **puandır** (K4). Takvim gecikmesi uyarısı yoktur.

---

## Dosya düzeni

```
index.html          arayüz iskeleti
assets/style.css    palet, tipografi, karanlık mod
assets/app.js       tüm mantık (bağımlılık yok)
data/plan.json      TÜM PLAN VERİSİ — tek kaynak
```

- **`data/plan.json` planın tek doğruluk kaynağıdır.** Konular, kapsamlar, ön koşullar,
  fazlar, bloklar, 42 hafta, kararlar, promptlar hep orada. Plan değişirse sadece bu dosya değişir.
- **İlerlemen** (konu durumları, denemeler, kesme/ekleme kararları) tarayıcıda `localStorage`'da durur,
  JSON dosyasına yazılmaz. Kapsam modundan dışa aktarıp yedekleyebilirsin.

---

## Nasıl açılır

Veri ayrı bir dosyada olduğu için tarayıcı `index.html`'i doğrudan çift tıklayarak açtığında
(`file://`) JSON'u okumaya izin vermez. Üç yol var:

1. **GitHub Pages** (önerilen) — repo ayarlarından: `Settings → Pages → Source: Deploy from a branch → main / (root) → Save`.
   Bir iki dakika sonra `https://e7lektronxf.github.io/Plan/` adresinde açılır.
2. **Yerel sunucu** — klasörün içinde:
   ```
   python -m http.server 8000
   ```
   sonra `http://localhost:8000`.
3. **Elle yükle** — `file://` ile açtığında çıkan ekrandan `data/plan.json` dosyasını seç.

---

## Planı güncellemek

Blok kapanışında (W6, W14, W22, W30, W38):

1. Promptlar sekmesinden **Prompt 2**'yi kopyala, AI'ya ver.
2. Dönen yeni hafta dağılımına göre `data/plan.json` içindeki `haftalar` ve `durum` alanlarını güncelle.
3. Yeni kararı `kararlar` dizisine `K11`, `K12`… olarak ekle.
4. `surumGecmisi`'ne satır at, `meta.surum`'u yükselt.

⚠️ Konu düşerken `onkosul` alanına bak: o konu başkasının ön koşuluysa düşürülemez.
Çekirdek işaretli 27 konu dokunulmazdır.
