# TÜBİTAK Bilim Olimpiyatları — Bilgisayar, 1. Aşama Hazırlık Planı

> **Sürüm 4.4** · Son güncelleme: 7 Ağustos 2026
> Bu dosya kendi kendine yeterlidir. Bir sonraki oturumda bunu tek başına verdiğinde, aramızda geçen tüm kararlar ve gerekçeleri Bölüm 2'de kayıtlıdır.
>
> **v4.4 — B0 yeniden kuruldu, deneme protokolü değişti.** 8 Ağu – 5 Eyl arası bilgisayar erişimi olmayacağı için **C hattı B0'dan tamamen çıkarıldı** ve boşalan 100 saat **M hattıyla dolduruldu** (K16). W1 ve W2 tamamlanmadı, 14 puan devrediyor. **Deneme #1–#4 iptal**, yerine rezerv tüketmeyen madencilik setleri; ilk tam koşullu deneme **W18** (K17). Tracker takvim-öncelikliden **puan-öncelikli** görünüme geçti (K18). Müfredat, puan ve konu sayısı **değişmedi** — yalnızca sıra değişti.
>
> **v4.0'ta ne değişti — planın tarihindeki en büyük revizyon.** Müfredat artık varsayımla değil, **ölçümle** boyutlandırılıyor. 2024, 2025 ve 2026 birinci aşama sınavlarının **150 sorusu tek tek konu ID'siyle etiketlendi** (K13). Sonuç: M hattı %40 değil **%24**, ve M'nin yaklaşık yarısı TYT/AYT seviyesinde. İki yeni hat açıldı (**P** mantık kurgu, **L** lise cebiri), dinamik programlama geri eklendi, graf bloğu bir blok öne çekildi, altı konu kesildi. Konu 57 → **63**, puan 108 (sabit), faz 9 → **10**.
>
> **v4.3 — denetim ve denge düzeltmesi.** Beş sorun bulundu: (1) kitap değişiminde M19 ve P2'ye Gürlü'de **var olmayan** bir bölüm atanmıştı; (2) kesme listesi kendi kuralını çiğniyordu (A8, A5, C12'nin bağımlıları vardı); (3) altı konu ne çekirdek ne kesilebilir işaretliydi; (4) W1 %128 doluluktaydı; (5) A hattı ölçülen ağırlığın 7 puan üstünde, P hattı 4 puan altındaydı. Hepsi düzeltildi — **A2, A6, A10'dan alınan 3 puan P hattına aktarıldı**; sapmalar artık en fazla ±4.
>
> **v4.2 — sunuş sadeleştirildi.** İçerik aynı; **her konu artık sabit dört satırla açılıyor** (📺 video · 📖 kaynak · ✏️ soru · ⏱ süre), kapsam ve ön koşullar kapalı geliyor. **59 konuya Türkçe YouTube anlatımı** atandı — matematik için Tunç Kurt, C ve algoritma için Şadi Evren Şeker. **Özdemir 2 yerine Gürlü** (güvercin yuvası, indirgemeli diziler, oyun stratejileri, içerme-dışarma — dördü de "kaynak yok" işaretliydi). Kitap sayısı 3 → **2**, bütçe ~₺500.
>
> **v4.1 — kaynak listesi plana dahil edildi.** Ayrı dosyada duran kaynak listesi **Bölüm 7B** olarak plana taşındı: model (hat başına bir omurga), satın alma listesi, ücretsiz omurgalar, koşullu ve reddedilenler, tam katalog, ters indeks, blok ve hat bazlı kullanım kuralları. Plan artık kaynak tarafında da kendi kendine yeterli.
>
> **v3.3'te ne değişti:** Tam tutarlılık denetimi yapıldı, dört hata düzeltildi (K12). Her konuya `kesilebilir` bayrağı eklendi.
>
> **v3.2'de ne değişti:** M hattındaki konulara MEB müfredat eşleştirmesi eklendi (K11).
>
> **v3.1'de ne değişti:** Karışabilecek konu adları ayrıştırıldı, her konuya kapsam tanımı eklendi (K10).

---

## 0. Künye

| | |
|---|---|
| **Hedef sınav** | 35. Bilim Olimpiyatları Birinci Aşama, Bilgisayar dalı |
| **Tahmini sınav tarihi** | ~15 Mayıs 2027 (34.'sü 16 Mayıs 2026'da yapıldı) |
| **Sınav biçimi** | 50 çoktan seçmeli soru · **150 dakika** · 5 şık · **4 yanlış 1 doğruyu götürür** |
| **Yasak** | Hesap makinesi, karalama kâğıdı (sadece kitapçık boşlukları) |
| **Başvuru son tarihi** | ~15 Nisan 2027, TYBS üzerinden bireysel |
| **Hedef sonuç** | Yaz Okulu + 2. Aşama daveti (Bilgisayar dalında ~55 kişi) |
| **Plan başlangıcı** | 27 Temmuz 2026 (Hafta 1) |
| **Plan bitişi** | 16 Mayıs 2027 (Hafta 42) |
| **Toplam süre** | 42 hafta / 6 blok / 27 üretken hafta |
| **Müfredat** | **63 konu / 108 puan / 10 faz** |
| **Ampirik taban** | 2024 + 2025 + 2026 sınavlarının 150 sorusu etiketlendi (K13) |
| **Kaynaklar** | Her konunun **çalışma kartı** JSON'un `calisma` alanında: 📺 video · 📖 kaynak · ✏️ soru · ⏱ süre |
| **Video** | 📺 Tunç Kurt Matematik (matematik) · Şadi Evren Şeker (C, algoritma) — bkz. 7B |
| **Zorunlu bütçe** | **~₺500 · 2 kitap** (Gürlü + PKO soru bankası) |
| **Öğrenci** | 10. sınıf (2026–27), TED Konya Koleji |
| **Uzun vadeli bağlam** | MIT Brain & Cognitive Sciences başvurusu, Kasım 2028 |
| **Devredilen** | W1, W2 tamamlanmadı — 14 puan devrediyor (K16) |
| **B0 durumu** | W3–W6 yeniden kuruldu: M hattı öne çekildi, C ertelendi (K16) |

### Rekabet — doğrulanmış (K13)

| Yıl | Başvuru (9 dal) | 2. aşamaya geçen | Oran |
|---|---|---|---|
| 2024 (32.) | 14.188 | 515 | %3,6 |
| 2026 (34.) | 20.828 | 517 | %2,5 |

İki yılda başvuru **%47 arttı, kontenjan sabit kaldı.** 2027 varsayımı buna göre kurulmalı: eşik yükseliyor.

### Başlangıç durumu (kendi tahmini, 26 Tem 2026)

| Hat | Tahmini net | Not |
|---|---|---|
| M — Matematik | ~2 / 12 | Kombinatorik sıfır |
| C — C dili | ~2 / 16 | Aktif C öğreniyor ama **yanlış beceriyi** çalışıyordu (bkz. K8) |
| A — Algoritma | 0 / 16 | Hiç başlanmadı |
| P — Mantık kurgu | ? / 4 | Hiç denenmedi |
| L — Lise cebiri | ? / 1 | Okul desteği var |

**Sıfır taban.** Plan buna göre kurulmuştur.

---

## 1. Durum paneli — HER OTURUMDA ÖNCE BUNU GÜNCELLE

```
BUGÜNÜN TARİHİ        : ____________
BULUNDUĞUM HAFTA      : W__  (Bölüm 6'daki tablodan bak)
BULUNDUĞUM BLOK       : B__
BLOK İÇİ HAFTA        : __ / __
BULUNDUĞUM FAZ        : Faz __ (Bölüm 4)
BU HAFTA TAMPON MU?   : evet / hayır

TAMAMLANAN PUAN       : ___ / 108   (%__)
TAMAMLANAN KONU       : ___ / 63
GEÇEN ÜRETKEN HAFTA   : ___
ÖLÇÜLEN HIZ           : ___ puan/hafta

TAMAMLANAN KONU ID'LERİ:
  M: ____________________________________
  C: ____________________________________
  A: ____________________________________
  P: ____________________________________
  L: ____________________________________

DEVREDİLEN HAFTALAR   : ______________________________
TAKVİM PUANI          : ___ / 108   (takvime göre olman gereken)
GERÇEK PUAN           : ___ / 108   (gerçekte bitirdiğin)
BORÇ                  : ___ puan  ≈  ___ hafta
DEVREDİLEN (yarım kalan) KONULAR:
  ______________________________________

SON DENEME            : #__ , ___/50
  (M __/12  C __/16  A __/16  P __/4  L __/1)
AÇIK SORUN / TAKILDIĞIM YER:
  ______________________________________
```

**7 Ağu 2026 itibarıyla:** Devredilen haftalar W1, W2. Gerçek puan 0/108. Takvim puanı 14/108. Borç 14 puan ≈ 2,3 hafta.

### Referans hızlar

| Dönem | Beklenen hız |
|---|---|
| Yaz (25 sa/hafta) | ~6.0 puan/üretken hafta |
| Dönem (15 sa/hafta) | ~3.6 puan/üretken hafta |

Ölçtüğün hız beklenenin %70'inin altındaysa sorun konu zorluğunda değil, **iskelettedir**. Önce oturma saatlerini denetle, sonra kapsam kıs.

---

## 2. Karar kaydı

> Bu bölüm planın hafızasıdır. Her karar, tarihi, gerekçesi ve reddedilen alternatifiyle burada. Bir sonraki oturumda bunlar yeniden tartışılmaz — sadece yeni bilgi geldiyse revize edilir.

### K1 · IOI 2027 hedefi değildir — 26 Tem 2026

**Karar:** Bu sezonun hedefi 1. aşamayı geçip Yaz Okulu'na davet almak. IOI takımı hedef listesinde değil.

**Gerekçe:** İki farklı zorluk türü var. *Edinme süresi* (kombinatorik teoremleri, C semantiği, algoritma tanımları) sıkıştırılabilir — saat koyarsan alırsın. *Olgunlaşma süresi* (görülmemiş problemi yarışma koşulunda çözme) sıkıştırılamaz. Kaba büyüklükler: ulusal madalya seviyesi ~300–500 çözülmüş problem, IOI takım seviyesi 1500–3000+. Okul + TFO + SAT yüküyle günde gerçekçi 2–3 problem → 500 problem ≈ 8 ay, 2000 problem ≈ 3 yıl. Engel zekâ ya da çalışkanlık değil, **takvim**.

**Sonuç:** Duvar 1. aşamada değil, takım seçmesinde. 1. aşama kod yazma sınavı olmadığı için erişilebilir.

### K2 · Felsefe olimpiyatı ayrı bir yapıdır — 26 Tem 2026

**Karar:** TFO (Türkiye Felsefe Olimpiyatı) Türkiye Felsefe Kurumu tarafından düzenlenir, TÜBİTAK ile ilgisi yoktur. TÜBİTAK Bilim Olimpiyatları'nda felsefe dalı yoktur.

**Detaylar:** ~6 Aralık'ta yapılır. Üç filozoftan alıntı verilir, biri seçilip 4 saatte deneme yazılır. Puanlama: felsefe tarihi bilgisi 30, özgünlük 30, tez destekleme/çürütme 30, felsefe dili 10. Konu alanları: Felsefe Nedir, Ontoloji, Epistemoloji, Sanat Felsefesi, Toplum Felsefesi, Etik. İlk 10'a girenler arasından yabancı dil sınavıyla 2 kişi IPO'ya gider.

**İlk darboğaz:** Okullar tek temsilci bildiriyor. Önce TED Konya'nın temsilcisi olmak gerekiyor → felsefe öğretmeniyle Eylül ilk haftası görüşme (W7).

**2026 hedefi derece değil**, formatı öğrenmek. Madalya hedefi Aralık 2027.

### K3 · AP ertelendi — 26 Tem 2026

**Karar:** Bu yıl AP önceliği değil. Düşünülenler: Computer Science A, Psychology. Calculus 11. sınıfa ertelendi.

**Gerekçe (kabul edildi):** Calculus'u *öğrenmek* ile AP Calculus *sınavına girmek* farklı şeyler. Matematik zaten TÜBİTAK için çalışılacak; sınav ertelenebilir.

**Uyarı (kayda geçti):** AP CS A, olimpiyat seviyesinde çalışan biri için neredeyse hiç sinyal taşımaz. Alınacaksa ucuz bir ek olarak alınmalı. AP Psychology bilişsel bilim omurgasına doğrudan oturuyor.

**Lojistik:** AP sınavları Türkiye'de sadece İstanbul'da (Prometric / ABC Horizon, Fatih). Kayıt son tarihi ~7 Kasım. Karar tarihi: **Kasım 2026 başı (W15)**.

### K4 · Blok + hız sistemi benimsendi — 26 Tem 2026

**Karar:** Plan sabit 42 haftalık takvim değil, 6 blok halinde ilerler. Sadece aktif blok kesindir.

**Birleştirici mekanizma:** `HIZ = tamamlanan puan / üretken hafta`. Sonraki blok kapasitesi = HIZ × sonraki bloktaki üretken hafta.

**İlerleme göstergesi takvim değil puandır.** "5. haftadayım, 7'de olmalıydım" → suçluluk → sistemi bırakma. "108 puanın 31'ini bitirdim" → ilerleme görünür.

**Devir kuralı:** Blok sonunda tamamlanmamış konular silinmez, sonraki bloğun başına taşınır.

### K5 · Tam tanı denemesi iptal edildi — 26 Tem 2026

**Karar:** 3 saat çözme + 3 saat analizlik tam tanı denemesi yapılmayacak.

**Gerekçe:** Sıfıra yakın bir tabanda ölçme işlevi ayırt edici bilgi üretmez. 6 saat + moral maliyeti buna değmez.

**Yerine geçen:** **45 dakika, geçmiş yıl sınavı, cevap anahtarı açık, çözmeden.** Soru → cevap → neden bu cevap. → W1'e atandı.

### K6 · A hattı W8'de başlar — 26 Tem 2026

**Karar:** Algoritma hattı Blok 0'da hiç başlamaz, W8'de A1 ile başlar ve bir daha rotasyondan çıkmaz.

**Gerekçe:** Karışık çalışma kuralı *öğrendiğini unutmamak* içindir; henüz başlanmamış bir hattın unutulacak içeriği yoktur. Ayrıca gerçek bağımlılık var: bağlı liste ve ağaç yapıları pointer'sız çalışılamaz, karmaşıklık analizi de üzerine uygulanacak bir algoritma olmadan havada kalır.

### K7 · Müfredat 122 → 108 puana kısıldı — 26 Tem 2026

**Karar:** 7 konu / 14 puan baştan çıkarıldı.

**Çıkarılanlar:** A20 (dinamik programlama, 3), A17 (MST, 2), A18 (union-find, 2), M14 (Catalan, 2), C18 (fonksiyon pointer'ları, 1), A16 (Dijkstra, 2), M21 (graf sayma, 2).

**Gerekçe:** Hepsi ya 2. aşama konusu ya da 1. aşamada seyrek. 14 puanı sonradan panikle kesmektense şimdi kesmek daha sağlıklı.

**Geri ekleme koşulu:** W22'de ölçülen hız beklentiyi aşarsa, kesme listesinin tersinden eklenir.

### K8 · C çalışma yöntemi değişti — 26 Tem 2026

**Karar:** C çalışması "program yazma"dan "çıktı tahmin etme"ye döner.

**Gerekçe (tanı):** Aktif C öğrenilmesine rağmen tahmini net 2/15. Sınav C ile program yazmayı sormuyor; kod parçası verip "ekrana ne yazar" diye soruyor. Bu farklı bir beceri ve Visual Studio'da program yazarak gelişmiyor.

**Yeni döngü:**
> Kısa kod parçası al → çıktıyı **kağıda** tahmin et → sonra MSVC'de çalıştır → tuttu mu bak.

Debugger cevap anahtarıdır.

### K9 · Sıralama bağımlılık zincirine göre yeniden kuruldu — 26 Tem 2026

**Karar:** Müfredat 9 fazlı bir bağımlılık zinciri olarak yeniden dizildi (Bölüm 4). Denetimde bulunan yedi hata düzeltildi.

**H1 — Sistematik sıralama hatası (ciddi).** M18, M19, M20, M22 "1 puanlık, hafif" diye sona atılmıştı. Ama hafif *çünkü* temel — hepsi başkalarının ön koşulu:

| Ön koşul | Bağımlı | v2.0'daki durum |
|---|---|---|
| M18 (ikilik taban) | C5 (bit operatörleri) | 32 hafta ters |
| M19 (önerme mantığı) | C6 (kısa devre) | 30 hafta ters |
| M20 (kümeler) | M7 (dahil-hariç) | 29 hafta ters |
| M22 (Σ notasyonu) | M4 (binom kimlikleri) | 10 hafta ters |

Dördü de W1'e çekildi. **Faz 1 artık planın ilk haftası.**

**H2 — M15/M16 ters.** Modüler aritmetik bölünebilme ve Öklid üstüne kurulur. Sıra düzeltildi: M16 → M17 → M15.

**H3 — C7 çok geçti.** Döngü takibi W5'teydi; sınavın hemen her kod-izleme sorusunda döngü var. W2'ye alındı.

**H4 — A13 ile A14 arası 13 hafta.** Graf gösterimi tek başına anlamsız, sadece BFS/DFS'in ön koşulu. Yan yana getirildi (W32, W33).

**H5 — İç çelişki.** W18 hem "TAMPON" işaretliydi hem A6 atanmıştı. A6 W17'ye alındı.

**H6 — Son ayda yeni ağır konu.** **Tüm yeni konular W37'de biter.** B5 tamamen tekrar ve denemedir.

**H7 — Kapasite şişik hesaplanmıştı.** 31 üretken hafta yazılmıştı. *(v3.2 notu: bu düzeltmenin kendisi de eksikti — 30 denmişti, doğrusu 27. Bkz. K12.)*

**Doğrulama:** 39 ön koşul ilişkisi denetlendi, ihlal yok.

### K10 · İsim ayrıştırması ve kapsam tanımları — 26 Tem 2026

**Tespit (Furkan):** M20 "fonksiyon türleri" içeriyor ama C13 de "Fonksiyonlar" — ilk hafta bir fonksiyon konusu, aylar sonra başka bir fonksiyon konusu var, kafa karıştırıcı.

**Değerlendirme:** Sıralama hatası değil. M20'deki matematiksel fonksiyon (birebir/örten), C13'teki C alt programı; ön koşul ilişkisi yok. M20 kombinatorikte durur çünkü *"5 elemanlı kümeden 3 elemanlıya kaç örten fonksiyon yazılır"* tipi sorular saf sayma problemidir. **Ama belge, bağlamsız okuyan biri için yanıltıcıydı** — bu işlevsel bir kusur.

**Denetimde bulunan diğer iki çakışma:**

| Terim | Çakışan konular | İlişki |
|---|---|---|
| "fonksiyon" | M20 (matematiksel) · C13 (C alt programı) | İlgisiz |
| "ikili" | M18 (ikilik taban) · A2 (ikili arama = algoritma) · A10 (ikili arama ağacı = veri yapısı) | A2 ile A10 arası 22 hafta, adları neredeyse aynı |
| "yineleme / özyineleme" | M12, M13 (recurrence, matematiksel denklem) · C14, C15 (recursion, kod) | **Gerçekten akraba** — özyinelemeli algoritmanın karmaşıklığı yineleme bağıntısıyla yazılır. Bilerek bağlarsan avantaj, karıştırırsan kayıp. |

**Karar 1 — İsimler ayrıştırıcı hale getirildi.** Konu adı artık hangi hatta ait olduğunu kendi başına söylüyor (İngilizce karşılıklar parantez içinde).

**Karar 2 — Her konuya `kapsam` alanı eklendi.** "Kümeler" yeterli değil — hangi kümeler, nereye kadar? Kapsam alanı hem öğrenilecekleri hem de **nerede durulacağını** listeler. Aşırı çalışmayı da eksik çalışmayı da engeller.

**Karar 3 — Kapsam varsayılan olarak gizlidir.** 57 konunun kapsamı tablolara yazılırsa belge okunmaz hale gelir. Kapsamlar sadece Bölüm 10'daki JSON'da durur; tracker'da konuya tıklanınca açılır. Bölüm 7'deki tablolar sade kalır.

### K11 · MEB müfredat eşleştirmesi — 27 Tem 2026

**Karar:** M hattındaki 20 konunun tamamı Türkiye Yüzyılı Maarif Modeli 9–12. sınıf matematik programıyla eşleştirildi. Sonuç JSON'daki `mebKarsiligi` alanında.

**Önce bir müfredat tespiti:** 2018 programındaki ayrı "Kümeler" ve "Mantık" üniteleri **artık yok.** Maarif Modeli tema yapısına geçmiş ve bu konular Sayılar temasının içine dağıtılmış. 2026-27'de 10. sınıf Maarif ile okutuluyor, dolayısıyla eski müfredat listelerine göre planlama yapılmamalı.

**Yöntem:** Eşleştirme zorlanmadı. Bir konu ancak programda karşılığı gerçekten varsa işaretlendi; yaklaşık benzerlikler "eşleşme yok" sayıldı.

| Durum | Sayı | Konular |
|---|---|---|
| **tam** | 5 | M1, M3, M6, M9, M10 |
| **kısmi** | 7 | M2, M4, M5, M12, M18, M19, M20 |
| **yok** | 8 | M7, M8, M11, M13, M15, M16, M17, M22 |

**Kısmi eşleşenlerde iki ayrı liste tutuluyor:** `ortusen` (programda olan) ve `ortusmeyen` (olimpiyat için gerekli ama programda olmayan). İkincisi kritik — okulda gördüğün için "bu konuyu biliyorum" yanılgısına düşmeni engelliyor.

**Derinlik uyarısı:** Program açıkça "stratejileri formüllere dönüştürmek yerine genel sayma yaklaşımlarını anlamlandırma ön planda tutulur" diyor. MEB kasten formül ezberletmiyor. TÜBİTAK 1. aşama ise 50 soruyu sınırlı sürede istiyor; orada formül akıcılığı şart. **Okul kavramı verir, hızı vermez.**

**Zamanlama avantajı:** 10.3 yılın üçüncü teması (~Kasım–Ocak), 10.7 son teması (~Mayıs–Haziran). Senin planında M1–M6 W2–W7'de, M9–M10 W12–W13'te. Yani okul konuyu işlemeye başladığında sen bitirmiş olacaksın — ders senin için tekrar olacak. Bu tesadüf değil, korunması gereken bir avantaj.

**Bulunmayan alanların anlamı:** M16, M17 ortaokul konusu (6–8. sınıf). M11 (beklenen değer) hiçbir lise kademesinde yok — Maarif'te olasılık 10. sınıfta bitiyor. M7, M8, M13, M15, M22 hiçbir kademede yok. Bu sekiz konu tamamen kendi başına öğrenilecek; okuldan destek gelmeyecek.

### K12 · Denetim düzeltmeleri — 27 Tem 2026

**Karar:** Tam bir tutarlılık denetimi yapıldı (57 konu, 42 hafta, 39 ön koşul, markdown ↔ JSON çapraz kontrol). Dört hata bulundu ve düzeltildi.

**D1 — Üretken hafta sayısı yanlıştı (ikinci kez).** Belge 30 üretken hafta diyordu, doğrusu **27**. Hata şuradan geliyordu: B5'in üç tekrar haftası (W39–41) üretken sayılmıştı. Ama o haftalarda yeni konu yok, dolayısıyla puan üretmiyorlar ve hız hesabına giremezler.

Bu hatanın ilginç tarafı: K9/H7 zaten "31 yazılmıştı, gerçekte 30" diye bir düzeltme kaydıydı. Yani düzeltmenin kendisi de yanlıştı. Doğru dağılım artık Bölüm 3'te tablo halinde:

| üretken 27 | tampon 11 | tekrar 3 | sınav 1 | = 42 |
|---|---|---|---|---|
| 455 sa | 177 sa | 45 sa | 15 sa | 692 sa |

**D2 — Kesme listesi kendi kuralını çiğniyordu.** `sonrakiKesmeSirasi` içinde A12 ve C19 vardı. Ama A12, A13'ün ön koşulu; C19, C20'nin ön koşulu. Yani listedeki iki kalem kesilirse zincir kırılıyordu — oysa Bölüm 9'daki kural "başkasının ön koşulu olan konu düşürülemez" diyordu.

Yeni liste: **A15 → A22 → A6 → M13 → C20** (11 puan). Her biri hem çekirdek dışı hem de kimsenin ön koşulu değil.

Ayrıca her konuya `kesilebilir` bayrağı eklendi; artık tracker bunu makine düzeyinde denetleyebilir. Kesilebilir toplam 6 konu / 14 puan var, ama A19 (Huffman) kasıtlı olarak listeye alınmadı — yapısal olarak güvenli ama sınavda çok sık soruluyor.

**D3 — Çekirdek konu sayısı yanlış yazılmıştı.** Metin iki yerde "27 konu" diyordu; envanter tablolarındaki ✅ işaretleri ve JSON birlikte **34** veriyor. Düzeltildi.

**D4 — Tampon kuralı istisnaları yazılı değildi.** "Her bloğun 4. ve son haftası tampondur" kuralı iki blokta tutmuyordu: B2'de üç tampon var (W19 = TFO haftası), B5'te hiç yok. İkisi de artık kuralın altında açıkça yazılı.

**Denetimde temiz çıkanlar:** 39 ön koşul ilişkisinin tamamı sırayla tutuyor. Markdown tabloları ile JSON arasında sıfır sapma. Blok puanları, hat toplamları, hafta puanları, faz zincirleri, deneme numaralandırması, meta alanlarının tamamı tutarlı.

**Yapısal not (gelecekte dikkat):** `onkosul` alanı iki farklı şeyi karıştırıyor — gerçek bağımlılıklar (C9 → C10, pointer olmadan dizi-pointer eşdeğerliği anlaşılmaz) ve sadece sıra bağları (A12 → A13, hash tablosu graf gösteriminin ön koşulu değil, sadece zincirde önce geliyor). D2'nin kök sebebi bu. Şimdilik `kesilebilir` bayrağı sorunu pratikte çözüyor; ayrıştırma gerekirse ileride yapılır.

### K13 · Müfredat ölçümle yeniden boyutlandırıldı — 31 Tem 2026

**Karar:** Sınav kompozisyonu varsayımı bırakıldı. **2024, 2025 ve 2026 birinci aşama Bilgisayar sınavlarının 150 sorusunun tamamı** konu ID'leriyle etiketlendi ve müfredat ölçülen dağılıma göre yeniden boyutlandırıldı.

**Ölçülen dağılım:**

| Kategori | 2024 | 2025 | 2026 | Toplam | Ölçülen % | v3.3 varsayımı |
|---|---|---|---|---|---|---|
| M — Matematik | 9 | 14 | 13 | 36 | **%24** | %40 |
| C — C dili | 15 | 15 | 19 | 49 | **%33** | %30 |
| A — Algoritma | 20 | 16 | 12 | 48 | **%32** | %30 |
| P — Mantık kurgu | 6 | 5 | 2 | 13 | **%9** | %0 |
| L — Lise cebiri | 0 | 0 | 4 | 4 | %3 | %0 |

**C ve A varsayımları zaten doğruydu.** C bloğu 2024 ve 2025'te tam 15 soru (kitapçık başlığı: "[36-50] Sorular İçin Açıklama"), 2026'da 19 (başlık: "[Soru 32-50]"). 2026 aykırı değerdir, kural değil.

**Asıl bulgu M'de ve ağırlıktan daha derin:** M sorularının yaklaşık **yarısı TYT/AYT soru bankası seviyesindedir.** 2024 Q20 ("8×8 tahtada kaç kare"), 2026 Q8 (log₂x + log₂(x−3) = 2), 2026 Q21 ("8 kitap, 3'ü yan yana gelmesin") — üçü de her standart soru bankasında bulunur. Gerçek olimpiyat matematiği sınavın yalnızca **%11'idir** (≈5 soru).

**Bunun sonucu yöntemseldir, sadece ağırlıksal değil.** TYT seviyesindeki sorular *derinlik* değil *hız* ister. M hattı bu yüzden ikiye ayrıldı:
- **M-temel** (~10 puan): süreli drill, standart AYT soru bankası, hedef soru başına 90 saniye
- **M-üstü** (~14 puan): yıldız-çubuk, küme parçalanışı, düzensizlik, döngü ayrışımı, binom kimlikleri

**Kesilenler (6 konu):** M11 (beklenen değer, 0/150), M13 (karakteristik denklem, 0/150), M17 (M16 ile birleşti), C17 (malloc/free, 0/150), C19 (printf/scanf, 0/150), A12 (hash, 1/150 ve o da modüler aritmetikti — K12 zaten sahte ön koşul olduğunu tespit etmişti).

**Ölçüm sırasında doğrulanan iki nokta:**
- Süre kısıtı hiç fiyatlanmamıştı: 50 soru / 150 dakika = **soru başına 3 dakika**, hesap makinesi ve karalama kâğıdı yasak. C bloğundaki kod izleme soruları gerçekte 4–6 dakika alır. **Matematikteki hız, C bloğu için zaman satın alır.**
- Negatif puan aritmetiği: 5 şık, 4 yanlış 1 doğruyu götürür → boş atışın beklenen değeri **tam olarak 0**. Tek bir şık elenirse **+0,0625**. Kural: *bir şık bile eleyebiliyorsan işaretle, eleyemiyorsan boş bırak.*

**Reddedilen alternatif:** "Sadece 2026'ya bakıp güncelleyelim." n=1 üç yanlış sonuç üretmişti (C hattının büyüdüğü, L'nin kalıcı bir blok olduğu, DP kanıtının 7 soru olduğu). Üç yıl bakılınca ikisi çürüdü, biri düzeldi.

### K14 · Kesme listesi hatası düzeltildi, graf öne çekildi — 31 Tem 2026

**Karar 1 — A20 (dinamik programlama) geri eklendi ve ikiye bölündü.** K7 onu "2. aşama konusu" diye kesmişti. Ölçüm: **5 kesin + 2 tartışmalı soru / 150.**

| Yıl | Sorular |
|---|---|
| 2024 | 9, 10 — İstanbul/Ankara kâr optimizasyonu, yineleme bağıntısı verilmiş |
| 2025 | 12, 13 — yan yana seçilemeyen maksimum toplam |
| 2026 | 33 — memoization çağrı sayısı · (18, 19 tartışmalı: blok birleştirme) |

Kritik ayrıntı: sınav DP'yi **kod yazdırarak değil, bağıntıyı verip tablo doldurtarak** soruyor. Yani K7'nin "yazılamaz, o yüzden kesilir" gerekçesi konuya hiç uymuyordu. Yeni hâli: **A20** (bağıntıdan tabloya, 2p) + **A26** (memoization ve çağrı sayısı, 2p).

**Karar 2 — Açgözlü 3 → 5 puan ve ikiye bölündü.** 10/150 soru. 2024'ün 27–29 kümesi tek bir sıralama kuralına (Σw·C en küçükleme) dayanıyor: kuralı bilmeyen üç soruyu birden kaybediyor. Yeni hâli: **A19** (strateji ve karşı örnek, 2p) + **A25** (Huffman, 3p).

**Karar 3 — Graf bloğu B4'ten B3'e çekildi.** 18/150 soru, üç yılın en istikrarlı kümesi. v3.3'te W31–W35'teydi — sınavdan yedi hafta önce. Artık W25–W27. A14 ikiye bölündü: **A14** (BFS, 2p) + **A24** (DFS, keşif/bitiş zamanları, kenar sınıflandırma, 3p).

**Karar 4 — Yeni konu: A23, algoritma tasarım muhakemesi (3p).** Sınavın en özgün ve hiç fark edilmemiş soru tipi: bir problem ve çözüm adımları verilir, *"hangi adım gerekli değildir / hangi ifade yanlıştır"* sorulur. 8/150 soru (2024 Q13, 16, 17, 19; 2025 Q27, 28, 29; 2026 Q29). Bu bir algoritma bilgisi değil, bir **muhakeme kalıbı** — ve öğrenilebilir.

**Karar 5 — Özyineleme 5 → 8 puan.** C bloğunun **%33'ü** (16/49). Yeni hâli: C14 (çağrı yığını, 3p) + **C21** (çoklu dallanma ve çağrı sayısı, 2p) + C15 (çıktı sırası, 3p).

**Karar 6 — Küme sorularının asimetrik riski kayda geçti.** Sınav ortak gövdeli üçlü kümeler kullanıyor. Bilmediğin tek bir konu 1 değil **3 puan** götürüyor. İki konu bu şekilde vurdu ve ikisi de v3.3'te hiç yoktu:

| Konu | Sorular | Nereye eklendi |
|---|---|---|
| Permütasyon döngü ayrışımı (min takas = n − döngü) | 2024 Q23, 24, 25 | M2 kapsamı |
| Küme parçalanışı / Stirling sayıları | 2025 Q9, 10, 11 | M5 kapsamı |

Ayrıca fonksiyon ve bağıntı **bileşkesi** M20 kapsamına eklendi (2026 Q3, Q4).

### K15 · İki yeni hat: P ve L — 31 Tem 2026

**Karar:** Müfredat üç hattan **beşe** çıkarıldı.

**P — Mantık Kurgu Bulmacaları (5 puan, 4 konu).** 13/150 soru, yani **%9** ve v3.3'te tamamen görünmezdi. LSAT analitik muhakeme formatı: 2024 Q1–5 (bina gruplama, laboratuvar çizelgeleme), 2024 Q30 (doğrucu/yalancı), 2025 Q14–18 (ızgara bulmacası, aile takımları), 2025 Q20–21 (tartma, oyun).

Bunlar "zeka sorusu" değil, **teknikleri olan** bir tür: kısıt sembolleştirme, karşıt ters kullanımı, vaka ağacı, çelişkiyle eleme, adversaryal analiz. M19 (önerme mantığı) üstüne oturuyor — yani ön koşulu zaten müfredatta.

**L — Lise Cebiri Tazeleme (2 puan, 2 konu).** 4/150 soru ve **hepsi 2026'da**. 2024 ve 2025'te sıfır. Bu yüzden **tam bir hat kurulmadı**, sadece iki puanlık bir sigorta konuldu: logaritma/üslü devir (L1) ve polinom/temel geometri (L2). Okulda zaten görülüyor; maliyeti düşük, riski kapatıyor.

**Neden ayrı hat, M'nin içine gömmek yerine:** İkisi de farklı bir çalışma yöntemi istiyor. P bulmaca çözerek, L hız drilli yaparak öğrenilir — ikisi de Rosen okuyarak öğrenilmez. Ayrı hat olmaları tracker'da ayrı ilerleme çubuğu ve denemede ayrı net takibi demek.

**Not — M6 kasıtlı olarak korundu.** Güvercin yuvası 150 soruda **sıfır** kez çıktı. Yine de kesilmedi: 1 puanlık, klasik bir olimpiyat aracı ve üç yıl gelmemiş olması dördüncüde gelmeyeceğini göstermez. Aynı mantığın tersi M8 için işledi: düzensizlik "kesilebilir" işaretliydi ama 2/150 çıktı, **çekirdek yapıldı.**

### K16 · C hattı B0'dan çıkarıldı, M hattı öne çekildi — 7 Ağu 2026

**Karar:** W3–W6 aralığındaki tüm C konuları ertelendi. Boşalan 100 saatlik kapasite M hattıyla dolduruldu.

**Gerekçe:** 8 Ağu – 5 Eyl arası kişisel bilgisayar erişimi yok. K8'in çalışma döngüsü "kâğıda tahmin → doğrula" biçiminde; doğrulama katmanı olmadan yapılan C çalışması **doğrulanmamış zihinsel model** üretir — ki K8 tam olarak bunu önlemek için kurulmuştu. Telefon tarayıcısında pythontutor teorik olarak çalışır, pratikte 4 hafta boyunca sürdürülebilir değil.

**Ertelenen C konuları (14 puan):** C1, C2, C3, C7, C4, C6, C5

**Öne çekilen konular (13 puan):** M19, M20, M22, M1 *(W1–W2 devri)* · M4, M5 *(W7'den)* · M6, M7 *(W8'den)* · M8 *(W9'dan)* · M9 *(W12'den)* · M10 *(W15'ten)* · M12 *(W27'den)* · P2 *(W13'ten)*

**Reddedilen alternatif — "C'yi ertele, B0'ı küçült."** W3–W6'da geriye 6 puan kalırdı; 100 saatlik kapasitenin dörtte üçü boşa giderdi. B0 planın **tek 25 sa/hafta bloğu**; W7'den sonra her şey 15 sa. Boş geçirmek, ertelemekten pahalıdır.

**Geri ödeme mekanizması — bu madde bağlayıcıdır.** M hattı öne çekildiği için dönem iskeletindeki **Pazartesi (M, 2 sa)** slotu W7'den itibaren boşalır. Bu slot **C'ye devredilir** → C haftada 4 değil **6 saat** olur. Bu yazılmazsa C hattı, sınavın %33'ü olmasına rağmen eksik kapanır.

**Retansiyon riski ve karşılığı.** Yıldız-çubuk (M5) ve düzensizlik (M8) Ağustos'ta öğrenilip Mayıs'a kadar dokunulmazsa uçar. W7'den itibaren Cumartesi bloğuna **haftada 30 dk karışık M seti** eklendi (bkz. Bölüm 5).

### K17 · Deneme protokolü yeniden kurgulandı — 7 Ağu 2026

**Karar:** Deneme #1–#4 (W4, W6, W10, W14) tam koşullu deneme olmaktan çıkarıldı. İlk tam koşullu deneme **W18**'e alındı. Yerlerine **madencilik seti** kondu.

**Gerekçe 1 — israf.** Müfredatın %20'si bitmeden 50 soruluk tam deneme çözmek, rezerv kâğıdı ~8 net karşılığında yakmaktır. Ölçüm değeri düşük, maliyet geri alınamaz.

**Gerekçe 2 — aritmetik.** Protokol 13 oturum istiyordu, elde 10 kâğıt var (2019–23 rezerv + 2014–18 yarı rezerv; 2024–26 K13'te yakıldı). **Açık zaten vardı.** Dört oturumun düşmesi bu açığı kapatıyor: 10 oturum / 10 kâğıt.

**Reddedilen alternatif — "tüm denemeleri son haftalara al."** Denemenin erken işlevi puan değil **süre bütçesidir**: Bölüm 3'e göre sınav 174 dakikalık iş, bütçe 150. Bu kriz konu bazlı setlerde görünmez. Nisan'da keşfedilirse geç olur. W18 (~%50 müfredat) alt sınırdır.

**Madencilik seti tanımı:** 2000–2013 havuzundan **yalnızca işlenmiş konu ID'lerine** ait sorular · 15 soru / 45 dk · kronometreli · hesap makinesi ve karalama kâğıdı yok · netler beş hatta ayrı yazılır. Rezerv tüketmez.

### K18 · Tracker puan-öncelikli görünüme geçti — 7 Ağu 2026

**Karar:** Tracker'da takvim haftası artık navigasyon birimi değil. Ana görünüm **"sıradaki konular" kuyruğudur**; takvim konumu ile gerçek konum ayrı ayrı gösterilir ve aradaki fark açıkça hesaplanır.

**Gerekçe:** Mevcut tracker bugünün tarihine bakıp W2'yi açıyordu — W1 bitmemiş olmasına rağmen. Bu, planın kendi ilkesiyle çelişiyor: *ilerleme puanla takip edilir, haftayla değil.* Takvimi otorite saymak, bitmemiş işi görünmez kılar ve "kaçırılmış hafta" diye telafi edilemeyen sahte bir kategori üretir. Gerçekte kaçırılmış hafta yoktur; **bitmemiş konu** vardır.

### Reddedilen seçenekler (tekrar önerilmesin)

| Seçenek | Neden reddedildi |
|---|---|
| Blok blok çalışma (önce tüm C, sonra tüm M) | Eylül'de bitirilen C, Mayıs'a kadar unutulur. Sınav üç bloğu aynı gün sorar. |
| Denemeyi Mart'a saklamak | Denemenin erken işlevi puan ölçmek değil, sınavın *sormadığı* şeyleri öğrenmeyi engellemek. |
| 5–6 AP dersi | Altı tane 4 puan, üç tane 5 puandan zayıf sinyal. Mayıs 2027'de TÜBİTAK ile çakışıyor. |
| IOI'yi 2027 hedefi yapmak | Bkz. K1. |
| Tam tanı denemesi | Bkz. K5. |
| Hafif konuları sona bırakmak | Bkz. K9/H1. Puan ağırlığı zorluğu değil *kapsamı* ölçer; hafif konular çoğu zaman temel konulardır. |
| Kapsam tanımlarını tabloya yazmak | Bkz. K10/Karar 3. 57 konunun kapsamı tabloda belgeyi okunmaz yapar. |

| 2026'yı tek başına örneklem saymak | Bkz. K13. n=1 üç yanlış sonuç üretti. Karar ancak üç yıl birden bakılınca alınır. |
| M hattını Rosen'le derinleştirmek | Bkz. K13. M'nin yarısı TYT seviyesi; orada eksik olan bilgi değil hız. |


### Açık sorular

| # | Soru | Ne zaman netleşir |
|---|---|---|
| S1 | TED Konya TFO temsilcisi olacak mı? | W7 — felsefe öğretmeni görüşmesi |
| S2 | Gerçek hız beklentiyi tutuyor mu? | W6 — Blok 0 kapanışı |
| S4 | Hangi AP dersleri, kaç tane? | W15 — Kasım kayıt tarihi |
| S5 | SAT ilk deneme ne zaman? | 11. sınıf güzü, bu planın dışında |
| **S6** | L hattı kalıcı mı, 2026'ya özgü mü? | 2027 sınavı — öncesinde karar verilemez, 2 puanlık sigorta olarak kalır |
| **S7** | P hattı gerçekten öğrenilebilir mi, yoksa ham muhakeme mi? | W22 — Deneme #6'da P netleri ölçülür |

*S3 (kesilen konular geri eklenecek mi) K14 ile kapandı: A20 geri eklendi, kalanlar ölçüme göre yeniden düzenlendi.*

---

## 3. Sistem nasıl çalışıyor

### Sınav kompozisyonu — ölçülmüş (K13)

50 çoktan seçmeli soru, 150 dakika, beş kategori:

| Blok | Ölçülen soru | Ağırlık | İçerik |
|---|---|---|---|
| **C — C dili semantiği** | ~16 | %33 | Kod parçası verilir, "ekrana ne yazar". Kitapçıkta ayrı bölüm başlığı var. |
| **A — Algoritma okuryazarlığı** | ~16 | %32 | Yapı davranışı, graf, açgözlü, DP, tasarım muhakemesi |
| **M — Matematik** | ~12 | %24 | Yarısı TYT/AYT seviyesi, yarısı olimpiyat kombinatoriği |
| **P — Mantık kurgu** | ~4 | %9 | Kısıt bulmacaları, doğrucu/yalancı, oyun/tartma |
| **L — Lise cebiri** | ~1 | %3 | Logaritma, polinom, temel geometri |

**Bu bir kod yazma sınavı değil.** Beş blok da öğrenilebilir bilgi.

### Süre aritmetiği — v4.0'ta eklendi

```
150 dakika / 50 soru = soru başına 3.0 dakika
```

Ama süre eşit dağılmaz:

| Blok | Gerçekçi süre | Toplam |
|---|---|---|
| C — kod izleme | 4–6 dk | ~80 dk |
| A — muhakeme | 3–4 dk | ~55 dk |
| M-üstü | 3 dk | ~18 dk |
| **M-temel** | **90 sn** | **~9 dk** |
| P — küme başına | 8 dk / 3 soru | ~12 dk |

Toplam ~174 dakika. **Bütçe 150.** Fark, M-temel ve L'de hızlanarak kapatılır — başka yerden çıkmaz. M hattında hedefin doğruluk değil **hız** olmasının sebebi budur.

**Hesap makinesi ve karalama kâğıdı yasaktır.** Tüm ara işlem kitapçık boşluklarında, elle. Bu, "formülü biliyorum" ile "formülü akıcı uyguluyorum" arasındaki farkı puana çeviriyor.

### Negatif puan stratejisi

5 şık · 4 yanlış = 1 doğru → her yanlış −0,25 net.

| Durum | Beklenen değer |
|---|---|
| Hiçbir şık elenemedi | **0,00** — boş bırakmakla aynı |
| Bir şık elendi | **+0,06** |
| İki şık elendi | **+0,17** |

**Kural: bir şık bile eleyebiliyorsan işaretle. Hiç eleyemiyorsan boş bırak** — kayıp yok ama süre kazancı var.

### Tampon haftası kuralı

**Her bloğun 4. ve son haftası tampondur.** Yeni konu yok. Sadece geri kalınanı toparlama, tekrar, deneme. Tampon haftaları **hız hesabına girmez**. Yapacak bir şeyin yoksa doldurmaya çalışma — dinlen.

İki istisna var:
- **B2'de üç tampon var** (W18, W19, W22). Fazladan olan W19, TFO haftası — o hafta TÜBİTAK tamamen duruyor.
- **B5'te tampon yok.** Blok zaten tamamen tekrardan oluşuyor (W39–W41) ve W42 sınav haftası.

### Hafta tipleri

| Tip | Hafta | Saat | Hız hesabına girer mi |
|---|---|---|---|
| **üretken** — yeni konu öğrenilir | 27 | 455 | ✅ evet |
| **tampon** — tekrar, deneme, taşma | 11 | 177 | ❌ hayır |
| **tekrar** — B5 tam tekrar (W39–41) | 3 | 45 | ❌ hayır |
| **sınav** — W42 | 1 | 15 | ❌ hayır |
| **Toplam yatırım** | **42** | **692** | |

### Bütçe aritmetiği

1 puan ≈ 4 saat (ilk geçiş)

```
Yeni konu kapasitesi 455 sa  −  Müfredat 432 sa  =  23 sa pay  (%5)
```

**Üretken haftalardaki pay dardır (%5). Gerçek pay tampon haftalarındadır (177 sa).**

💡 Yarıyıl tatili (W27) yaz temposuna dönerek +10 saat kazandırır; hesaba dahil.

⚠️ **Bazı dönem haftaları nominal olarak 16 sa görünür (4 puan × 4 sa), bütçe 15 sa.** Bu %107'lik aşım kasıtlıdır ve v3.3'ten devralınan toleransın altındadır (orada W11 %133'tü). Bir saatlik taşma tampon haftasında kapanır.

---

## 4. Konu zinciri — öğrenme sırası

> **Bu bölüm planın omurgasıdır.** Faz sırası ve faz içi sıra bağlayıcıdır. Fazlar arası geçiş keskin değildir — haftalar hatları bilinçli olarak iç içe geçirir. Bağlayıcı olan **hat içi sıradır**.
>
> **Denetim durumu (31 Tem 2026):** 63 konunun ön koşul grafı yeniden kuruldu. **Kırık ön koşul: 0. Ters bağımlılık: 0.** (v3.3'ten devralınan altı kırık ve altı ters bağ v4.0'ta düzeltildi — kesilen konulara yapılan atıflar ve graf öne çekilince oluşan sıra ihlalleri.)

### ⚠️ Karışabilecek isimler

Dört terim bu müfredatta birden fazla anlamda geçiyor. Karıştırma:

| Terim | Konu | Ne demek | Hat |
|---|---|---|---|
| **fonksiyon** | M20 | Matematiksel fonksiyon: birebir, örten, **bileşke** | Küme teorisi |
| | C13 | C alt programı: parametre geçirme, kapsam | Kod |
| **ikili** | M18 | İkilik sayı sistemi (taban 2) | Sayı gösterimi |
| | A2 | İkili arama (binary search) — bir **algoritma** | Arama |
| | A10 | İkili arama ağacı (BST) — bir **veri yapısı** | Yapı |
| **yineleme** | M12 | Yineleme bağıntısı (recurrence) — matematiksel denklem | Matematik |
| | C14, C21, C15 | Özyineleme (recursion) — fonksiyonun kendini çağırması | Kod |
| **dinamik** ★ | A20 | DP: bağıntıdan tablo doldurma (aşağıdan yukarı) | Optimizasyon |
| | A26 | DP: memoization (yukarıdan aşağı, özyineli) | Optimizasyon |

**M12 ile A20 kasıtlı olarak bitişiktir.** M12 bağıntıyı *kurar*, A20 onu *çözer*. Sınav bağıntıyı sana verir — yani A20 asıl iş, M12 okuma yeteneği.

**C21 ile A26 de akrabadır.** Memoization'ın çağrı sayısını sayabilmek için çağrı ağacını okuyabilmek gerekir.


### Faz 1 · Notasyon ve dil — 4 konu, 5 puan

```
M20 (2p) → M22 (1p) → M18 (1p) → M19 (1p)
```

Hepsi başka konuların dili; M18→C5, M19→C6 ve P hattı, M20→M7, M22→M4


### Faz 2 · C mikro-semantiği — 7 konu, 14 puan

```
C1 (1p) → C2 (2p) → C3 (3p) → C7 (3p) → C4 (1p) → C6 (1p) → C5 (3p)
```

Sınavın C bloğunun tamamı bunların bileşimi. C3 ve C7 ağırlığı 2 puan artırıldı (K13: 11/150)


### Faz 3 · Kombinatorik çekirdeği — 8 konu, 13 puan

```
M1 (1p) → M2 (3p) → M3 (2p) → M4 (1p) → M5 (3p) → M6 (1p) → M7 (1p) → M8 (1p)
```

M2 ve M5 genişletildi (döngü ayrışımı, küme parçalanışı). Düşük frekanslılar küçültüldü.


### Faz 4 · Algoritma temeli ve bellek — 6 konu, 12 puan

```
A1 (2p) → C8 (2p) → A2 (1p) → A3 (2p) → C9 (3p) → C10 (2p)
```

A hattı başlar; C9 tüm bağlantılı yapıların ön koşulu


### Faz 5 · Olasılık ve sıralama — 6 konu, 6 puan

```
M9 (1p) → M10 (1p) → A21 (1p) → A4 (1p) → A5 (1p) → A6 (1p)
```

Küçültüldü: sıralama algoritmalarının mekaniği 150 soruda doğrudan sorulmadı, kavram yeter


### Faz 6 · İleri C ve özyineleme — 7 konu, 15 puan

```
C11 (2p) → C12 (1p) → C13 (1p) → C14 (3p) → C21 (2p) → C15 (3p) → A7 (3p)
```

C bloğunun ağırlık merkezi. Özyineleme 5→8 puan (K13: 16/49 C sorusu)


### Faz 7 · Graf — 4 konu, 9 puan

```
A13 (2p) → A14 (2p) → A24 (3p) → A15 (2p)
```

ÖNE ÇEKİLDİ (K14). B4'ten B3'e. 18/150 soru — üç yılın en istikrarlı kümesi.


### Faz 8 · Optimizasyon ve tasarım muhakemesi — 5 konu, 12 puan

```
A19 (3p) → A25 (2p) → A20 (2p) → A26 (2p) → A23 (3p)
```

YENİ FAZ. Açgözlü + Huffman + DP + tasarım muhakemesi = 30/150 soru.


### Faz 9 · Bağlantılı yapılar, sayı teorisi ve kapanış — 10 konu, 12 puan

```
C16 (1p) → A8 (1p) → A9 (2p) → A10 (1p) → A11 (1p) → M12 (1p) → M16 (2p) → M15 (1p) → A22 (1p) → C20 (1p)
```

Düşük frekanslılar sona toplandı. Buradan kesme yapılırsa zincir kırılmaz.


### Faz 10 · Mantık kurgu ve lise cebiri — 6 konu, 10 puan

```
P2 (2p) → P1 (2p) → P4 (2p) → P3 (2p) → L1 (1p) → L2 (1p)
```

YENİ HAT (K15). Diğer fazlardan bağımsız, araya serpiştirilir. 17/150 soru.


### Faz özeti


| Faz | Ad | Konu | Puan | Haftalar |

|---|---|---|---|---|

| 1 | Notasyon ve dil | 4 | 5 | W1–W3 |

| 2 | C mikro-semantiği | 7 | 14 | W1–W5 |

| 3 | Kombinatorik çekirdeği | 8 | 13 | W2–W9 |

| 4 | Algoritma temeli ve bellek | 6 | 12 | W8–W13 |

| 5 | Olasılık ve sıralama | 6 | 6 | W12–W16 |

| 6 | İleri C ve özyineleme | 7 | 15 | W17–W24 |

| 7 | Graf | 4 | 9 | W25–W27 |

| 8 | Optimizasyon ve tasarım muhakemesi | 5 | 12 | W29–W33 |

| 9 | Bağlantılı yapılar, sayı teorisi ve kapanış | 10 | 12 | W27–W36 |

| 10 | Mantık kurgu ve lise cebiri | 6 | 10 | W13–W37 |

| | **Toplam** | **63** | **108** | |


---

## 5. Haftalık iskelet

İskelet **sabittir ve değişmez.** Taahhüdün "bu hafta M7'yi bitireceğim" değil, **"salı akşamı C çalışacağım."**

### Yaz iskeleti — 25 sa (W1–W6)

| Gün | Hat | Saat |
|---|---|---|
| Pazartesi | Matematik | 4 |
| Salı | C dili | 4 |
| Çarşamba | Matematik | 4 |
| Perşembe | C dili | 4 |
| Cuma | Matematik *(B0'da A hattı yok)* | 4 |
| Cumartesi | Karma tekrar + problem seti | 5 |
| Pazar | — | 0 |

#### W3–W6 istisnası — C hattı yok (K16)

| Gün | Hat | Saat |
|---|---|---|
| Pazartesi | Matematik | 4 |
| Salı | Matematik | 4 |
| Çarşamba | Matematik | 4 |
| Perşembe | Matematik | 4 |
| Cuma | Matematik | 4 |
| Cumartesi | Karma tekrar + P bulmaca + madencilik seti | 5 |
| Pazar | — | 0 |

**Monotonluk uyarısı:** Beş gün üst üste kombinatorik yorucudur. Cumartesi bloğunu koruma; hat değiştirmenin yerini o tutuyor. Pazar tam boş kalacak.

### Dönem iskeleti — 15 sa (W7–W42)

| Gün | Hat | Saat |
|---|---|---|
| Pazartesi | **C dili** *(v4.4: M'den alındı — K16 geri ödemesi)* | 2 |
| Salı | C dili | 2 |
| Çarşamba | Algoritma | 2 |
| Perşembe | **C dili** *(v4.0: M'den alındı — C %33)* | 2 |
| Cuma | Algoritma | 2 |
| Cumartesi | Tekrar + problem / deneme | 5 |
| Pazar | — | 0 |

**v4.4 değişikliği:** Pazartesi M'den C'ye çevrildi. M hattının büyük kısmı B0'da bitirildiği için (K16) bu slot boşaldı. Haftalık dağılım artık **M 0 sa (bakım hariç), C 6 sa, A 4 sa.** M hattı için Cumartesi bloğunda **30 dk karışık bakım seti** ayrılmıştır — yeni konu değil, unutma önleyici.

### P ve L hatları nereye giriyor

Bu iki hat **kendi günü olmayan hatlardır.** Sebebi: ikisi de kısa oturumlarla, aralıklı çalışılır.

| Hat | Ne zaman | Nasıl |
|---|---|---|
| **P** — mantık kurgu | Cumartesi karma bloğunun ilk 45 dakikası | Haftada 1 bulmaca kümesi (3 soru), süreli |
| **L** — lise cebiri | Ayrılmış saat yok | Okul dersinin üstüne, atandığı haftada 4 saat |
| **M-temel hızlandırma** | Akşam boşlukları, telefon | Günde 10–15 soru, 90 saniye hedefi |
| **M bakım** | Cumartesi bloğunun ilk 30 dakikası | Bitirilmiş M konularından karışık 10 soru, kronometreli |

**Neden karışık:** Sınav beş bloğu da aynı gün sorar. Ayrıca kombinatorik ile kod takibi farklı zihinsel modlardır — gün içinde değiştirmek yorgunluğu azaltır.

---

## 6. Ana takvim — 42 hafta / 6 blok

> **"Neredeyim?" sorusunun tek cevabı bu tablodur.**

| W | Blok | Blok içi | Tarih | Tip | Sa | Faz | Konular | P |
|---|---|---|---|---|---|---|---|---|

| 1 | B0 | 1/6 | 27 Tem – 2 Ağu | **DEVREDİLDİ** | 25 | — | ⛔ *Tamamlanmadı — M20, M22, M19, C1, C2 devretti* | 0 |

| 2 | B0 | 2/6 | 3 – 9 Ağu | **DEVREDİLDİ** | 25 | — | ⛔ *Tamamlanmadı — C3, C7, M1 devretti* | 0 |

| 3 | B0 | 3/6 | 10 – 16 Ağu | üretken | 25 | 1,3 | M19, M20, M22, M1, M18 | 6 |

| 4 | B0 | 4/6 | 17 – 23 Ağu | üretken | 25 | 3 | M2, M3, M4 · **Madencilik seti #1** | 6 |

| 5 | B0 | 5/6 | 24 – 30 Ağu | üretken | 25 | 3 | M5, M6, M7, M8 | 6 |

| 6 | B0 | 6/6 | 31 Ağu – 6 Eyl | üretken | 25 | 5,9,10 | M9, M10, M12, P2 · **Madencilik seti #2** · **B0 KAPANIŞI** | 5 |

**W6 notu:** Konular Pazartesi–Perşembe'ye sığdırılır. **Cuma–Pazar B0 kapanış ritüeli + telafi payıdır.** B0'ın tek tamponu budur; W4 ve W6 artık üretken hafta.

**Esneme payı:** Toplam 23 puan / 100 saat = 4,3 sa/puan. Referans yaz hızı 6,0 puan/hafta, plan 5,75. Hedefin altında kalırsan **M12 ve P2 W7'ye devreder** — kesme sırası budur, M5 ve M8'e dokunma.

**İsteğe bağlı uzatma:** Program erken biterse L1 ve L2 (2 puan) eklenebilir. Kaynakları video + 30 soru, kâğıtla yapılabilir.

| 7 | B1 | 1/8 | 7 – 13 Eyl | üretken | 15 | 3 | ⚠️ *TFO temsilcilik görüşmesi* · *(boş — W6 kapanışında yeniden doldurulacak, K16)* | 0 |

| 8 | B1 | 2/8 | 14 – 20 Eyl | üretken | 15 | 3,4 | A1 | 2 |

| 9 | B1 | 3/8 | 21 – 27 Eyl | üretken | 15 | 3,4 | C8 | 2 |

| 10 | B1 | 4/8 | 28 Eyl – 4 Eki | **TAMPON** | 15 | — | Tekrar · **Madencilik seti #3** | 0 |

| 11 | B1 | 5/8 | 5 – 11 Eki | üretken | 15 | 4 | A2, A3 | 3 |

| 12 | B1 | 6/8 | 12 – 18 Eki | üretken | 15 | 4,5 | C9 | 3 |

| 13 | B1 | 7/8 | 19 – 25 Eki | üretken | 15 | 4,10 | C10 | 2 |

| 14 | B1 | 8/8 | 26 Eki – 1 Kas | **TAMPON** | 15 | — | **Madencilik seti #4** · **B1 KAPANIŞI** | 0 |

| 15 | B2 | 1/8 | 2 – 8 Kas | üretken | 15 | 5,10 | A21, L1 · ⚠️ *AP kayıt kararı* | 2 |

| 16 | B2 | 2/8 | 9 – 15 Kas | üretken | 15 | 5 | A4, A5, A6 | 3 |

| 17 | B2 | 3/8 | 16 – 22 Kas | üretken | 15 | 6 | C11, C12, C13 | 4 |

| 18 | B2 | 4/8 | 23 – 29 Kas | **TAMPON** | 15 | — | Tekrar · **İlk tam koşullu deneme (#1)** | 0 |

| 19 | B2 | 5/8 | 30 Kas – 6 Ara | **TFO HAFTASI** | 7 | — | ⚠️ *TFO ~6 Aralık.* TÜBİTAK durur | 0 |

| 20 | B2 | 6/8 | 7 – 13 Ara | üretken | 15 | 6 | C14 | 3 |

| 21 | B2 | 7/8 | 14 – 20 Ara | üretken | 15 | 6,10 | C21, L2 | 3 |

| 22 | B2 | 8/8 | 21 – 27 Ara | **TAMPON** | 15 | — | **Deneme #2** · **B2 KAPANIŞI** · *S7 kararı* | 0 |

| 23 | B3 | 1/8 | 28 Ara – 3 Oca | üretken | 15 | 6 | C15 | 3 |

| 24 | B3 | 2/8 | 4 – 10 Oca | üretken | 15 | 6 | A7 | 3 |

| 25 | B3 | 3/8 | 11 – 17 Oca | üretken | 15 | 7 | A13, A14 | 4 |

| 26 | B3 | 4/8 | 18 – 24 Oca | **TAMPON** | 15 | — | Tekrar · **Deneme #3** | 0 |

| 27 | B3 | 5/8 | 25 – 31 Oca | üretken | 25 | 7,9 | A24, A15 · 💡 *Yarıyıl tatili, yaz temposu* | 5 |

| 28 | B3 | 6/8 | 1 – 7 Şub | üretken | 15 | 9 | C16, A8, A9 | 4 |

| 29 | B3 | 7/8 | 8 – 14 Şub | üretken | 15 | 8 | A19 | 3 |

| 30 | B3 | 8/8 | 15 – 21 Şub | **TAMPON** | 15 | — | **Deneme #4** · **B3 KAPANIŞI** | 0 |

| 31 | B4 | 1/8 | 22 – 28 Şub | üretken | 15 | 8,10 | A25, P1 · ⚠️ **TYBS BAŞVURUSU** | 4 |

| 32 | B4 | 2/8 | 1 – 7 Mar | üretken | 15 | 8 | A20, A26 | 4 |

| 33 | B4 | 3/8 | 8 – 14 Mar | üretken | 15 | 8 | A23 | 3 |

| 34 | B4 | 4/8 | 15 – 21 Mar | **TAMPON** | 15 | — | Tekrar · **Deneme #5** | 0 |

| 35 | B4 | 5/8 | 22 – 28 Mar | üretken | 15 | 9 | A10, A11, C20, A22 | 4 |

| 36 | B4 | 6/8 | 29 Mar – 4 Nis | üretken | 15 | 9 | M16, M15 | 3 |

| 37 | B4 | 7/8 | 5 – 11 Nis | üretken | 15 | 10 | P4, P3 · **SON YENİ KONU** | 4 |

| 38 | B4 | 8/8 | 12 – 18 Nis | **TAMPON** | 15 | — | **Deneme #6** · **B4 KAPANIŞI** | 0 |

| 39 | B5 | 1/4 | 19 – 25 Nis | tekrar | 15 | — | **M + P + L tam tekrar** | 0 |

| 40 | B5 | 2/4 | 26 Nis – 2 May | tekrar | 15 | — | **C hattı tam tekrar** | 0 |

| 41 | B5 | 3/4 | 3 – 9 May | tekrar | 15 | — | **A hattı tam tekrar** · **Deneme #7, #8** | 0 |

| 42 | B5 | 4/4 | 10 – 16 May | **SINAV** | 15 | — | Gün aşırı tam deneme + hata analizi | 0 |


### Blok özetleri


| Blok | Hafta | Üretken | Kapasite | Yük | Doluluk | Faz kapsamı |

|---|---|---|---|---|---|---|

| B0 · Yaz Yoğunlaştırma | W1–6 | 4 | 100 sa | 23 p / 100 sa | %92 | Faz 1, 3, 5 (kısmen), 9–10 (kısmen) |

| B1 · Dönem Başlangıcı | W7–14 | 6 | 90 sa | 22 p / 88 sa | %98 | Faz 3 sonu, 4, 10 (P başlar) |

| B2 · Güz Sonu | W15–22 | 5 | 75 sa | 16 p / 64 sa | %85 | Faz 5, 6 (başı), 10 |

| B3 · Kış | W23–30 | 6 | 100 sa | 23 p / 92 sa | %92 | Faz 6 sonu, 7, 8 (başı), 9 (başı) |

| B4 · İlkbahar | W31–38 | 6 | 90 sa | 22 p / 88 sa | %98 | Faz 8 sonu, 9, 10 kapanış |

| B5 · Final | W39–42 | **0** *(3 tekrar + 1 sınav)* | 45 sa | 0 p — **tam tekrar** | — | — |


**Uyarı — W1 nominal olarak şişkin görünür.** 8 puan × 4 saat = 32 saat, bütçenin (25 sa) üstünde. Ama Faz 1'in dört konusu gerçekte 1–2 saatlik işlerdir. **W1 gerçekte ~22 saat sürer.** Aksi çıkarsa W4 tamponu devralır.

**v4.0'ta blok dengesi düzeldi.** v3.3'te B1 %98 doluluktaydı; şimdi hiçbir blok %96'yı geçmiyor. Sebep: M hattının küçülmesiyle açılan bütçenin geç bloklara değil, orta bloklara dağıtılması.

### ⚠️ W7–W15 yeniden planlama borcu (K16)

**14 puanlık C borcu** W6 kapanışında Prompt 2 ile yerleştirilecek. Yerleştirmede bağlayıcı olan üç kural:

1. **C hat içi sırası değiştirilemez:** C1 → C2 → C3 → C7 → C4 → C6 → C5 → C8 → …
2. **Pazartesi slotu C'ye aittir** (K16 geri ödemesi) → dönem haftalarında C kapasitesi 6 sa/hafta.
3. **Boşalan slotlar:** W7 (4p), W8 (2p), W9 (1p), W12 (1p), W13 (2p), W15 (1p), W27 (1p) = 12 puan. Kalan 2 puan tampon haftalarından karşılanır — **yeni konu W37'den sonraya taşmaz.**

---

## 7. Konu envanteri — 63 konu / 108 puan


> Her konunun **kapsamı** Bölüm 10'daki JSON'un `kapsam` alanındadır. Tracker'da konuya tıklayınca açılır.


> ★ işaretli kapsam maddeleri v4.0'ta ölçüme dayanarak eklenmiştir.


### M — Matematik & Kombinatorik (17 konu, 24 puan · ölçülen 36/150 soru (2024-25-26))


| ID | Konu | P | Hafta | 📺 Video | 📖 Kaynak |

|---|---|---|---|---|---|

| **M19** | Önerme mantığı, doğruluk tabloları, De Morgan | 1 | W1 | [Mantık ve önermeler](https://www.youtube.com/results?search_query=Tunç+Kurt+Mantık+ve+önermeler) | PKO soru bankası |

| **M20** | Kümeler, bağıntılar, matematiksel fonksiyon türleri (birebir/örten) | 2 | W1 | [Kümeler ve fonksiyonlar](https://www.youtube.com/results?search_query=Tunç+Kurt+Kümeler+ve+fonksiyonlar) | Gürlü · Olimpik Sonlu Matematik |

| **M22** | Σ ve Π notasyonu, teleskopik toplamlar | 1 | W1 | [Diziler ve toplam sembolü](https://www.youtube.com/results?search_query=Tunç+Kurt+Diziler+ve+toplam+sembolü) | Gürlü · Olimpik Sonlu Matematik |

| **M1** | Sayma temelleri: toplama ve çarpma ilkesi | 1 | W2 | [Sayma yöntemleri / toplama-çarpma ilkesi](https://www.youtube.com/results?search_query=Tunç+Kurt+Sayma+yöntemleri+/+toplama-çarpma+ilkesi) | Gürlü · Olimpik Sonlu Matematik |

| **M18** | Sayı sistemleri: ikilik/onaltılık taban dönüşümü | 1 | W3 | [Sayı sistemleri / taban aritmetiği](https://www.youtube.com/results?search_query=Tunç+Kurt+Sayı+sistemleri+/+taban+aritmetiği) | PKO soru bankası |

| **M2** | Permütasyon: basit, tekrarlı, dairesel | 3 | W3 | [Permütasyon](https://www.youtube.com/results?search_query=Tunç+Kurt+Permütasyon) | Gürlü · Olimpik Sonlu Matematik |

| **M3** | Kombinasyon, binom katsayıları, Pascal üçgeni | 2 | W5 | [Kombinasyon](https://www.youtube.com/results?search_query=Tunç+Kurt+Kombinasyon) | Gürlü · Olimpik Sonlu Matematik |

| **M4** | Binom teoremi ve kombinatoryel kimlikler | 1 | W7 | [Binom açılımı](https://www.youtube.com/results?search_query=Tunç+Kurt+Binom+açılımı) | Gürlü · Olimpik Sonlu Matematik |

| **M5** | Yıldızlar ve çubuklar (tekrarlı seçim) | 3 | W7 | [tekrarlı kombinasyon dağılım problemleri](https://www.youtube.com/results?search_query=Tunç+Kurt+tekrarlı+kombinasyon+dağılım+problemleri) | Gürlü · Olimpik Sonlu Matematik |

| **M6** | Güvercin yuvası ilkesi | 1 | W8 | [güvercin yuvası prensibi](https://www.youtube.com/results?search_query=matematik+olimpiyat+güvercin+yuvası+prensibi) | Gürlü · Olimpik Sonlu Matematik |

| **M7** | Dahil-hariç ilkesi | 1 | W8 | [Kümelerde işlemler / içerme-dışarma](https://www.youtube.com/results?search_query=Tunç+Kurt+Kümelerde+işlemler+/+içerme-dışarma) | Gürlü · Olimpik Sonlu Matematik |

| **M8** | Düzensizlikler (derangement), sabit noktalar | 1 | W9 | [içerme dışarma prensibi düzensizlik](https://www.youtube.com/results?search_query=matematik+olimpiyat+içerme+dışarma+prensibi+düzensizlik) | Gürlü · Olimpik Sonlu Matematik |

| **M9** | Olasılık temelleri: örnek uzay, koşullu olasılık | 1 | W12 | [Olasılık](https://www.youtube.com/results?search_query=Tunç+Kurt+Olasılık) | Gürlü · Olimpik Sonlu Matematik |

| **M10** | Bayes teoremi, bağımsızlık | 1 | W15 | [Koşullu olasılık](https://www.youtube.com/results?search_query=Tunç+Kurt+Koşullu+olasılık) | Gürlü · Olimpik Sonlu Matematik |

| **M12** | Yineleme bağıntısı (recurrence) kurma — matematik | 1 | W27 | [indirgemeli diziler rekürans bağıntısı](https://www.youtube.com/results?search_query=matematik+olimpiyat+indirgemeli+diziler+rekürans+bağıntısı) | Gürlü · Olimpik Sonlu Matematik |

| **M15** | Modüler aritmetik | 1 | W36 | [Bölünebilme ve modüler aritmetik](https://www.youtube.com/results?search_query=Tunç+Kurt+Bölünebilme+ve+modüler+aritmetik) | PKO soru bankası |

| **M16** | Sayı teorisi temelleri: bölünebilme, EBOB/EKOK, Öklid, asallar | 2 | W36 | [EBOB – EKOK](https://www.youtube.com/results?search_query=Tunç+Kurt+EBOB+–+EKOK) | PKO soru bankası |


### C — C Dili Semantiği (18 konu, 35 puan · ölçülen 49/150 soru (15+15+19))


| ID | Konu | P | Hafta | 📺 Video | 📖 Kaynak |

|---|---|---|---|---|---|

| **C1** | Veri tipleri, boyutlar, taşma davranışı | 1 | W1 | [C veri tipleri ve bellek](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+veri+tipleri+ve+bellek) | gateoverflow.in |

| **C2** | Operatör önceliği ve birleşme yönü | 2 | W1 | [C operatörler ve öncelik](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+operatörler+ve+öncelik) | gateoverflow.in |

| **C3** | a++ vs ++a, yan etkiler | 3 | W2 | [C artırma azaltma operatörleri](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+artırma+azaltma+operatörleri) | gateoverflow.in |

| **C7** | Döngü takibi: for/while/do-while, break/continue | 3 | W2 | [C döngüler](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+döngüler) | gateoverflow.in |

| **C4** | Tip dönüşümleri, integer promotion | 1 | W3 | [C tip dönüşümü](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+tip+dönüşümü) | gateoverflow.in |

| **C6** | Koşullar ve kısa devre değerlendirme | 1 | W3 | [C koşul ifadeleri](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+koşul+ifadeleri) | gateoverflow.in |

| **C5** | Bit operatörleri | 3 | W5 | [bit düzeyi operatörler](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+bit+düzeyi+operatörler) | gateoverflow.in |

| **C8** | Diziler ve bellek yerleşimi | 2 | W9 | [C diziler](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+diziler) | gateoverflow.in |

| **C9** | Pointer temelleri: &, *, pointer aritmetiği | 3 | W12 | [C pointer gösterici](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+pointer+gösterici) | gateoverflow.in |

| **C10** | Dizi–pointer eşdeğerliği | 2 | W13 | [C dizi ve pointer ilişkisi](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+dizi+ve+pointer+ilişkisi) | gateoverflow.in |

| **C11** | Çok boyutlu diziler ve pointer'lar | 2 | W17 | [C iki boyutlu diziler](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+iki+boyutlu+diziler) | gateoverflow.in |

| **C12** | Stringler: null sonlandırma, string.h | 1 | W17 | [C karakter dizileri string](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+karakter+dizileri+string) | gateoverflow.in |

| **C13** | C fonksiyonları: parametre geçirme (değer/referans) | 1 | W17 | [C fonksiyonlar](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+fonksiyonlar) | gateoverflow.in |

| **C14** | Özyineleme (recursion): çağrı yığını takibi | 3 | W20 | [özyineleme recursion](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+özyineleme+recursion) | pythontutor.com |

| **C21** | **Özyineleme**: çoklu dallanma, çağrı sayısı, ağaç yapısı — *kod* | 2 | W21 | [özyineleme çağrı ağacı](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+özyineleme+çağrı+ağacı) | pythontutor.com |

| **C15** | Özyineleme: çıktı sırası (ön/son işlem) | 3 | W23 | [özyineleme çalışma sırası](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+özyineleme+çalışma+sırası) | pythontutor.com |

| **C16** | struct, union, typedef | 1 | W28 | [C yapılar struct](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+yapılar+struct) | gateoverflow.in |

| **C20** | Tanımsız davranış, off-by-one, yaygın tuzaklar | 1 | W35 | [C tanımsız davranış undefined behavior](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+tanımsız+davranış+undefined+behavior) | van der Linden |


### A — Algoritma Okuryazarlığı (22 konu, 39 puan · ölçülen 48/150 soru)


| ID | Konu | P | Hafta | 📺 Video | 📖 Kaynak |

|---|---|---|---|---|---|

| **A1** | Karmaşıklık: büyük O, en iyi/ortalama/en kötü | 2 | W8 | [algoritma karmaşıklık analizi big O](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+algoritma+karmaşıklık+analizi+big+O) | visualgo.net |

| **A2** | Doğrusal arama, ikili arama (binary search) — algoritma | 1 | W11 | [ikili arama binary search](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+ikili+arama+binary+search) | visualgo.net |

| **A3** | Basit sıralamalar: kabarcık, seçme, ekleme | 2 | W11 | [sıralama algoritmaları](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+sıralama+algoritmaları) | visualgo.net |

| **A21** | Böl ve yönet paradigması | 1 | W15 | [böl ve yönet divide and conquer](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+böl+ve+yönet+divide+and+conquer) | visualgo.net |

| **A4** | Birleştirme sıralaması (merge sort) | 1 | W16 | [birleştirme sıralaması merge sort](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+birleştirme+sıralaması+merge+sort) | visualgo.net |

| **A5** | Hızlı sıralama (quicksort) | 1 | W16 | [hızlı sıralama quick sort](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+hızlı+sıralama+quick+sort) | visualgo.net |

| **A6** | Sayma / kova / radix sıralama | 1 | W16 | [sayma sıralaması counting sort](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+sayma+sıralaması+counting+sort) | visualgo.net |

| **A7** | Yığın (stack) ve kuyruk (queue) | 3 | W24 | [yığın stack ve kuyruk queue](https://www.youtube.com/results?search_query=veri+yapıları+yığın+stack+ve+kuyruk+queue) | visualgo.net |

| **A13** | Graf gösterimi: komşuluk matrisi ve listesi | 2 | W25 | [graf gösterimi komşuluk matrisi listesi](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+graf+gösterimi+komşuluk+matrisi+listesi) | Gürlü · Olimpik Sonlu Matematik |

| **A14** | BFS ve DFS | 2 | W25 | [genişlik öncelikli arama BFS](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+genişlik+öncelikli+arama+BFS) | Gürlü · Olimpik Sonlu Matematik |

| **A15** | Topolojik sıralama | 2 | W27 | [topolojik sıralama](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+topolojik+sıralama) | visualgo.net |

| **A24** | **DFS**: yığın, keşif/bitiş zamanları, kenar sınıflandırma | 3 | W27 | [derinlik öncelikli arama DFS](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+derinlik+öncelikli+arama+DFS) | visualgo.net |

| **A8** | Bağlı liste | 1 | W28 | [bağlı liste linked list](https://www.youtube.com/results?search_query=veri+yapıları+bağlı+liste+linked+list) | visualgo.net |

| **A9** | İkili ağaçlar ve dolaşımlar | 2 | W28 | [ikili ağaç dolaşımı tree traversal](https://www.youtube.com/results?search_query=veri+yapıları+ikili+ağaç+dolaşımı+tree+traversal) | visualgo.net |

| **A19** | Açgözlü strateji ve karşı örnek | 3 | W29 | [açgözlü algoritma greedy](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+açgözlü+algoritma+greedy) | Çıkmış sorular |

| **A25** | Huffman kodlama ve önek kodları | 2 | W31 | [huffman kodlama](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+huffman+kodlama) | visualgo.net |

| **A20** | **Dinamik programlama**: yineleme bağıntısından tabloya | 2 | W32 | [dinamik programlama](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+dinamik+programlama) | Claude — Prompt 4 |

| **A26** | **Dinamik programlama**: memoization ve çağrı sayısı | 2 | W32 | [memoization dinamik programlama](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+memoization+dinamik+programlama) | pythontutor.com |

| **A23** | Algoritma tasarım muhakemesi: hangi adım gereksiz/yanlış | 3 | W33 | — | Çıkmış sorular |

| **A10** | İkili arama ağacı (BST) — veri yapısı | 1 | W35 | [ikili arama ağacı BST](https://www.youtube.com/results?search_query=veri+yapıları+ikili+arama+ağacı+BST) | visualgo.net |

| **A11** | Heap, heapsort, öncelik kuyruğu | 1 | W35 | [heap öncelik kuyruğu](https://www.youtube.com/results?search_query=veri+yapıları+heap+öncelik+kuyruğu) | visualgo.net |

| **A22** | Geri izleme (backtracking) | 1 | W35 | [geri izleme backtracking](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+geri+izleme+backtracking) | visualgo.net |


### P — Mantık Kurgu Bulmacaları (4 konu, 8 puan · ölçülen 13/150 soru)


| ID | Konu | P | Hafta | 📺 Video | 📖 Kaynak |

|---|---|---|---|---|---|

| **P2** | Doğrucu/yalancı ve önerme çıkarımı bulmacaları | 2 | W13 | [önermeler mantık çıkarım](https://www.youtube.com/results?search_query=Tunç+Kurt+önermeler+mantık+çıkarım) | Çıkmış sorular + LSAT |

| **P1** | Kısıt bulmacaları: gruplama ve yerleştirme | 2 | W31 | — | LSAT Logic Games |

| **P3** | Oyun, tartma ve en kötü durum bulmacaları | 2 | W37 | — | Gürlü · Olimpik Sonlu Matematik |

| **P4** | Kısıt bulmacaları: çizelgeleme ve sıralama | 2 | W37 | — | LSAT Logic Games |


### L — Lise Cebiri Tazeleme (2 konu, 2 puan · ölçülen 4/150 soru — hepsi 2026'da)


| ID | Konu | P | Hafta | 📺 Video | 📖 Kaynak |

|---|---|---|---|---|---|

| **L1** | Logaritma, üslü ifadeler ve devirli kalanlar — tazeleme | 1 | W15 | [Logaritma](https://www.youtube.com/results?search_query=Tunç+Kurt+Logaritma) | Claude — Prompt 4 |

| **L2** | Polinom ve temel geometri — tazeleme | 1 | W21 | [Polinomlar](https://www.youtube.com/results?search_query=Tunç+Kurt+Polinomlar) | Claude — Prompt 4 |


### Müfredat dışı bırakılanlar

| ID | Konu | Gerekçe | Geri ekleme sırası |
|---|---|---|---|

| M11 | M11 | 0/150 — beklenen değer üç sınavın hiçbirinde sorulmadı; MEB'de de yok | 1 |

| M13 | M13 | 0/150 — karakteristik denklem üç sınavın hiçbirinde sorulmadı | 2 |

| M17 | M17 | M16 ile birleştirildi (tek konu: sayı teorisi temelleri) | 3 |

| C17 | C17 | 0/150 — malloc/free doğrudan sorulmadı | 4 |

| C19 | C19 | 0/150 — printf/scanf format belirteci doğrudan sorulmadı | 5 |

| A12 | A12 | 1/150 ve o da modüler aritmetik sorusuydu; K12'de sahte ön koşul olduğu zaten tespit edilmişti | 6 |

| A17 | Minimum örten ağaç (Kruskal) | 2/150 — sadece 2024 Q6-Q7 | 7 |

| A18 | Birleştir-bul (union-find) | Sadece Kruskal kılıfında; A17 ile birlikte gelir | 8 |

| A16 | Dijkstra | 0/150 | 9 |

| M21 | Graf sayma: derece toplamı | A13 kapsamına taşındı | — |

| M14 | Catalan sayıları | 0/150 | 10 |

| C18 | Fonksiyon pointer'ları | 0/150 | 11 |


**Daha da geri kalınırsa kesilecek sıradakiler:** L2 → P4 → P3 → A22 → A6 → A11 → C20 → A4

**Kesme kuralı (v4.0'ta üçüncü koşul eklendi):** Bir konu ancak ÜÇ koşulu birden sağlarsa kesilebilir: (1) çekirdek olmayacak, (2) hiçbir konunun ön koşulu olmayacak, (3) 150 soruluk ampirik tabanda frekansı 2'den az olacak. v4.3: kesme sırası programatik doğrulanıyor — bağımlısı olan konu listeye giremez.

**Kesme dışı tutulanlar:**

| ID | Gerekçe |
|---|---|

| M6 | 150 soruda 0 ama 1 puanlık ve klasik bir olimpiyat aracı; kesmek riski karşılamaz |

| C20 | Doğrudan 0 ama tuzak bilgisi tüm C bloğuna yayılıyor |


**Çekirdek işaretli 41 konu asla kesilmez.**

---


---

## 7B. Kaynaklar

Her konunun **çalışma kartı** aynı dört satırdan oluşur. Tracker'da bir konuya tıkladığında gördüğün şey budur:

```
📺 VİDEO    Hangi kanalda, hangi arama terimiyle
📖 KAYNAK   Hangi kitap/site, hangi bölüm
✏️ SORU     Hangi çıkmış sorular
⏱ SÜRE     Kaç saat
```

Ayrıntılar (kapsam listesi, ön koşullar) **kapalı gelir**, isteyince açılır.

### Video kanalları

| Kanal | Hangi hat | Not |
|---|---|---|

| **Tunç Kurt Matematik** | M, L | ★ 1. TERCİH. Matematik ve lise cebiri konularının tamamı. Bir konuyu anlatmıyorsa aşağıdakilere bak. |

| **Rehber Matematik** | M, L | Yedek. "Bebek Adımları" oynatma listesi daha yavaş tempolu. |

| **Şadi Evren Şeker · Bilgisayar Kavramları** | C, A | ★ C ve algoritma için 1. tercih. Türkçe, üniversite düzeyi ama sade. Sıralama, graf, ağaç, karmaşıklık. |

| **Olimpiyat konuları — YouTube araması** | M | Bu konularda tek bir kanal yok. Verilen arama terimiyle ara, en anlaşılır anlatımı seç. Video bulamazsan Gürlü kitabı zaten omurga, video bonus. |

| **Türkçe "Veri Yapıları ve Algoritmalar" ders serileri** | A | Üniversite ders kayıtları. Konu adıyla ara: "veri yapıları [konu] konu anlatımı". |


**Kural:** Önce Tunç Kurt'a bak. O konuyu anlatmıyorsa yedek kanala geç. Her konunun `calisma.video.url` alanı doğrudan arama bağlantısıdır.

### Kitaplar ve siteler

| Ne | Hangi hat | Para |
|---|---|---|
| **Gürlü · Olimpik Sonlu Matematik** | Matematik (olimpiyat) | ₺300–450 |
| **PKO branşal soru bankası** (TYT+AYT) | Matematik (temel) | ₺150–250 |
| `gateoverflow.in` | C dili, algoritma | ₺0 |
| `pythontutor.com` (C modu) | Özyineleme | ₺0 |
| `visualgo.net` | Algoritma | ₺0 |
| **TÜBİTAK çıkmış sorular** | Hepsi | ₺0 |
| **LSAT Logic Games** (2024 öncesi) | Mantık bulmacası · *W20'de al* | ₺200–500 |

**Şimdi alacağın 2 kitap, ~₺500.**

#### Neden Gürlü

İçindekiler: Sayma Yöntemleri · Permütasyon · Kombinasyon · Olasılık · Binom · **İçerme-Dışarma** · **Güvercin Yuvası** · **İndirgemeli Diziler** · Değişmezlik · Boyama · **Oyun Stratejileri** · Graf Teori.

Kalın olanlar başka hiçbir kaynakta yok; dördü de planda "kaynak yok" işaretliydi. Alt başlığı zaten *"Matematik ve **Bilgisayar** Olimpiyatlarına Hazırlık"*.

Önsözündeki tavsiye planla birebir aynı: *önce lise seviyesinde sayma/permütasyon/kombinasyon/olasılık tara, sonra bu kitaba geç.* Ayrıca TÜBİTAK çıkmış sorularını **bilerek kullanmamış** — arşiv zaten bedava elinde, kitap onu tekrar etmiyor.

#### PKO soru bankası — saf AYT alma

M-temel sorularının çoğu TYT bandında (2024 Q20, 2026 Q21, 2026 Q24, 2025 Q4). Saf AYT gereğinden zordur ve 90 sn hedefini bozar. Ama binom (M4) AYT bandında → **"TYT-AYT" ibareli branşal fasikül.**

### Kaynağı olmayan dört konu

**A23** (tasarım muhakemesi, 3p) · **P1, P3, P4** (bulmacalar, 4p)

Bunlar için kitap ya da video yok. A23 bir konu değil, bir **okuma alışkanlığı**: sekiz çıkmış soruyu ayrı dosyaya al, her birinde dört doğru şıkkı *neden doğru olduklarıyla* yaz — kalıp üçüncü soruda görünür. P hattı LSAT kitabı + çıkmış sorularla çalışılır.

### Koşullu — şimdi alma

| Kaynak | Ne zaman |
|---|---|
| Rosen · Ayrık Matematik | W22'de algoritma geride kalırsa. VisuAlgo + GATE zaten kapatıyor. |
| Roughgarden · Algorithms Illuminated P3 | W30'da açgözlü/DP netleri düşükse. Önce yazarın ücretsiz videoları. |
| van der Linden · Expert C Programming | W37, C20. Kütüphane yeterli. |

**Reddedilenler:** CLRS · Özdemir 2 *(Gürlü üç boşluğu daha kapatıyor)* · Alizade · MIT 6.042J · Grokking · K&R · Kanetkar · Smullyan · Alcumus.

### Hat başına tek kural

| Hat | Kural |
|---|---|
| **Matematik (temel)** | Video izle → kronometre, 10 soru/15 dk. **Hedef 90 sn/soru.** Yanlışları değil *yetişmeyenleri* işaretle. |
| **Matematik (olimpiyat)** | Gürlü'de konuyu oku → örnekleri çöz → **çözümleri mutlaka oku**. |
| **C dili** | Önce **kâğıda** tahmin, sonra pythontutor'da doğrula. Program yazma. |
| **Algoritma** | Önce VisuAlgo'da **elle izle**, kodunu ezberleme. Sınav davranış soruyor. |
| **Mantık bulmacası** | Haftada 1 küme, kronometre **8 dakika**. |
| **Lise cebiri** | Video → 30 soru → geç. Derinleşme. |


## 8. Deneme protokolü

4 haftada bir, tampon haftalarında, baştan itibaren.

### ⚠️ Deneme rezervi — v4.0'ta eklenen kural

Elinde çözümüyle birlikte **~23 lise Bilgisayar sınavı** var (2000–2026, TÜBİTAK arşivi). Protokol 13 oturum istiyor. **İsraf edilemez.**

| Kullanım | Yıllar | Adet | Kural |
|---|---|---|---|
| **Rezerv — tam koşullu deneme** | 2019–2023 | 5 | Dokunma. Sırayla aç. |
| **Yarı rezerv** | 2014–2018 | 5 | W30 sonrası denemeler |
| **Madencilik — konu bazlı** | 2000–2013 | ~14 | Serbest. **Madencilik setlerinin kaynağı budur** (K17). Bir konu bitince o konunun sorularını tara. |
| **Kalibrasyon (W1)** | 2013 | 1 | Cevap anahtarı açık, çözmeden, 45 dk (K5) |
| **⛔ YAKILDI** | 2024, 2025, 2026 | 3 | K13 etiketlemesinde kullanıldı — deneme olarak kullanılamaz |

**2024–2026 artık deneme değil, referanstır.** Bunları müfredat ölçümü için harcadık; karşılığında 150 soruluk bir dağılım haritası aldık. Doğru takas, ama geri alınamaz.

### Takvim

| # | Hafta | Tarih | Tip |
|---|---|---|---|
| — | W4 | 17–23 Ağu 2026 | **Madencilik seti #1** — 15 soru / 45 dk |
| — | W6 | 31 Ağu – 6 Eyl | **Madencilik seti #2** — 15 soru / 45 dk |
| — | W10 | 28 Eyl – 4 Eki | **Madencilik seti #3** — 20 soru / 60 dk |
| — | W14 | 26 Eki – 1 Kas | **Madencilik seti #4** — 20 soru / 60 dk |
| 1 | W18 | 23–29 Kas | **İlk tam koşullu deneme** |
| 2 | W22 | 21–27 Ara | tam |
| 3 | W26 | 18–24 Oca 2027 | tam |
| 4 | W30 | 15–21 Şub | tam |
| 5 | W34 | 15–21 Mar | tam |
| 6 | W38 | 12–18 Nis | tam |
| 7–8 | W41 | 3–9 May | tam |
| 9+ | W42 | 10–16 May | Gün aşırı tam |

W19'da hiçbir şey yok — TFO haftası.

**Rezerv aritmetiği artık tutuyor:** 9–10 oturum / 10 kâğıt (2019–23 rezerv + 2014–18 yarı rezerv).

### Kurallar

0. **Madencilik seti ≠ deneme.** Yalnızca **bitirilmiş konu ID'lerinden** soru seçilir, süre orantılı kısaltılır (15 soru / 45 dk), rezerv tüketmez. Amacı puan ölçmek değil **süre disiplinini erken kurmaktır** — hesap makinesi ve karalama kâğıdı yasağı burada da geçerlidir.
1. **Tam süre, tam koşul.** 50 soru, **150 dakika tek oturum**, telefon kapalı, kağıt üzerinde, **hesap makinesi yok, karalama kâğıdı yok.** Son iki madde v4.0'ta eklendi — gerçek sınav koşulu bu.
2. **İlk denemelerde puan önemsiz.** Deneme #1'de 50'de 8 yaparsın. Normal ve beklenen.
3. **Netleri beş hatta ayrı yaz:** M __/12, C __/16, A __/16, P __/4, L __/1.
4. **Süre ölçümü puandan önemlidir.** Her blokta kaç dakika harcadığını yaz. M bloğu 25 dakikayı geçiyorsa sorun bilgi değil hızdır.
5. **Boş bırakılanları ayrı say.** "Bilmiyordum" ile "yetişmedi" farklı sorunlardır ve farklı çözümleri vardır.

### Deneme kayıt tablosu

| # | W | Tarih | M/12 | C/16 | A/16 | P/4 | L/1 | Net | Süre yetti mi | Boş | En zayıf hat |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | W4 | | | | | | | | | | |
| 2 | W6 | | | | | | | | | | |
| 3 | W10 | | | | | | | | | | |
| 4 | W14 | | | | | | | | | | |
| 5 | W18 | | | | | | | | | | |
| 6 | W22 | | | | | | | | | | |
| 7 | W26 | | | | | | | | | | |
| 8 | W30 | | | | | | | | | | |
| 9 | W34 | | | | | | | | | | |
| 10 | W38 | | | | | | | | | | |
| 11 | W41 | | | | | | | | | | |
| 12 | W41 | | | | | | | | | | |

---

## 9. Blok kapanış ritüeli

Her blok sonunda (W6, W14, W22, W30, W38), 30 dakika, beş adım:

**1. Say.** Tamamlanan konuları işaretle, puanı topla, Bölüm 1'i güncelle.

**2. Hızı hesapla.** `HIZ = tamamlanan puan / üretken hafta sayısı`

**3. Karşılaştır.** Referans hız yazda 6.0, dönemde 3.6. Fark %30'dan fazlaysa sebebi belirle: konu zorluğu mu, iskelete uyulmaması mı?

**4. Sonraki bloğu boyutlandır.** `Kapasite = HIZ × sonraki bloktaki üretken hafta`

⚠️ **Kesme ve ekleme zinciri bozamaz.** Bir konuyu düşürürken JSON'daki `onkosul` alanına bak: o konu başkasının ön koşuluysa düşürülemez. Çekirdek işaretli 34 konu bu yüzden dokunulmazdır.

**5. Devret.** Tamamlanmamış konuları sonraki bloğun başına taşı. **Silme.**

Sonra Bölüm 2'ye yeni karar kaydı ekle (K11, K12, …).

---


**v4.0 eki — kapanışta artık ölçüm sorusu da sorulur:**

> Bu blokta çıkan denemelerde, plandaki ağırlıklarla gerçekleşen soru dağılımı tutuyor mu? Sapma varsa K13'ün 150 soruluk tabanına yeni bir sınav eklenmiş demektir — müfredat yeniden boyutlandırılabilir.

---

## 10. Makine-okunur veri


> HTML dönüşümünde bu bloğu doğrudan kullan. `kapsam` alanı **varsayılan olarak gizlidir**, konuya tıklanınca açılır.


```json

{
  "meta": {
    "surum": "4.4",
    "guncelleme": "2026-08-07",
    "mebProgrami": "Türkiye Yüzyılı Maarif Modeli (2026-27'de 10. sınıf bu programla okutuluyor)",
    "hedef": "TÜBİTAK 35. Bilim Olimpiyatları 1. Aşama — Bilgisayar",
    "sinavTarihi": "2027-05-15",
    "basvuruSonTarih": "2027-04-15",
    "planBaslangic": "2026-07-27",
    "planBitis": "2027-05-16",
    "toplamHafta": 42,
    "uretkenHafta": 27,
    "tamponHafta": 11,
    "tekrarHafta": 3,
    "sinavHafta": 1,
    "toplamPuan": 108,
    "toplamKonu": 63,
    "toplamFaz": 10,
    "puanBasinaSaat": 4,
    "yeniKonuKapasiteSaat": 455,
    "mufredatYukSaat": 432,
    "tamponSaat": 177,
    "tekrarSaat": 45,
    "sinavSaat": 15,
    "toplamYatirimSaat": 692,
    "yazHaftalikSaat": 25,
    "donemHaftalikSaat": 15,
    "referansHizYaz": 6.0,
    "referansHizDonem": 3.6,
    "sonYeniKonuHaftasi": 37,
    "ampirikTemel": "2024, 2025 ve 2026 birinci aşama sınavlarının 150 sorusu konu ID'leriyle etiketlendi (K13)",
    "olculenDagilim": {
      "M": "24%",
      "C": "33%",
      "A": "32%",
      "P": "9%",
      "L": "3%"
    },
    "sinavSuresi": 150,
    "soruSayisi": 50,
    "soruBasinaDakika": 3.0,
    "yanlisCezasi": "4 yanlış 1 doğruyu götürür",
    "bosAtisBeklenenDeger": 0.0,
    "birSikElenirseBeklenenDeger": 0.0625,
    "hesapMakinesi": false,
    "karalamaKagidi": false,
    "rekabet2024": {
      "basvuru": 14188,
      "gecen": 515
    },
    "rekabet2026": {
      "basvuru": 20828,
      "gecen": 517
    },
    "devredilenHaftalar": [1, 2],
    "devredilenPuan": 14,
    "gercekPuan": 0,
    "ilkTamDeneme": 18,
    "cHattiErteleme": {
      "karar": "K16",
      "ertelenenKonular": ["C1", "C2", "C3", "C7", "C4", "C6", "C5"],
      "ertelenenPuan": 14,
      "bosalanPuan": 12,
      "yerlestirmeHaftasi": 6,
      "pazartesiSlotuC": true
    }
  },
  "durum": {
    "guncelHafta": 1,
    "guncelBlok": "B0",
    "guncelFaz": 1,
    "tamamlananPuan": 0,
    "tamamlananKonu": [],
    "devredilenKonu": [],
    "gecenUretkenHafta": 0,
    "olculenHiz": null
  },
  "karisabilecekIsimler": [
    {
      "terim": "fonksiyon",
      "konular": [
        {
          "id": "M20",
          "anlam": "Matematiksel fonksiyon: birebir, örten, birebir örten",
          "hat": "küme teorisi"
        },
        {
          "id": "C13",
          "anlam": "C alt programı: parametre geçirme, kapsam",
          "hat": "kod"
        }
      ],
      "not": "İlgisiz. M20 kombinatoriktedir çünkü örten fonksiyon sayma bir sayma problemidir."
    },
    {
      "terim": "ikili",
      "konular": [
        {
          "id": "M18",
          "anlam": "İkilik sayı sistemi (taban 2)",
          "hat": "sayı gösterimi"
        },
        {
          "id": "A2",
          "anlam": "İkili arama (binary search) — ALGORİTMA",
          "hat": "arama"
        },
        {
          "id": "A10",
          "anlam": "İkili arama ağacı (BST) — VERİ YAPISI",
          "hat": "yapı"
        }
      ],
      "not": "A2 ile A10 arası 22 hafta var, adları neredeyse aynı."
    },
    {
      "terim": "yineleme / özyineleme",
      "konular": [
        {
          "id": "M12,M13",
          "anlam": "Yineleme bağıntısı (recurrence) — matematiksel denklem",
          "hat": "matematik"
        },
        {
          "id": "C14,C15",
          "anlam": "Özyineleme (recursion) — fonksiyonun kendini çağırması",
          "hat": "kod"
        }
      ],
      "not": "GERÇEKTEN AKRABA: özyinelemeli algoritmanın karmaşıklığı yineleme bağıntısıyla yazılır. Bilerek bağla."
    }
  ],
  "hatlar": [
    {
      "id": "M",
      "ad": "Matematik & Kombinatorik",
      "sinavAgirligi": 0.24,
      "soruSayisi": 12,
      "puan": 24,
      "konuSayisi": 17,
      "olculen": "36/150 soru (2024-25-26)"
    },
    {
      "id": "C",
      "ad": "C Dili Semantiği",
      "sinavAgirligi": 0.33,
      "soruSayisi": 16,
      "puan": 35,
      "konuSayisi": 18,
      "olculen": "49/150 soru (15+15+19)"
    },
    {
      "id": "A",
      "ad": "Algoritma Okuryazarlığı",
      "sinavAgirligi": 0.32,
      "soruSayisi": 16,
      "puan": 39,
      "konuSayisi": 22,
      "olculen": "48/150 soru"
    },
    {
      "id": "P",
      "ad": "Mantık Kurgu Bulmacaları",
      "sinavAgirligi": 0.09,
      "soruSayisi": 4,
      "puan": 8,
      "konuSayisi": 4,
      "olculen": "13/150 soru"
    },
    {
      "id": "L",
      "ad": "Lise Cebiri Tazeleme",
      "sinavAgirligi": 0.03,
      "soruSayisi": 1,
      "puan": 2,
      "konuSayisi": 2,
      "olculen": "4/150 soru — hepsi 2026'da"
    }
  ],
  "fazlar": [
    {
      "no": 1,
      "ad": "Notasyon ve dil",
      "zincir": [
        "M20",
        "M22",
        "M18",
        "M19"
      ],
      "puan": 5,
      "konuSayisi": 4,
      "gerekce": "Hepsi başka konuların dili; M18→C5, M19→C6 ve P hattı, M20→M7, M22→M4"
    },
    {
      "no": 2,
      "ad": "C mikro-semantiği",
      "zincir": [
        "C1",
        "C2",
        "C3",
        "C7",
        "C4",
        "C6",
        "C5"
      ],
      "puan": 14,
      "konuSayisi": 7,
      "gerekce": "Sınavın C bloğunun tamamı bunların bileşimi. C3 ve C7 ağırlığı 2 puan artırıldı (K13: 11/150)"
    },
    {
      "no": 3,
      "ad": "Kombinatorik çekirdeği",
      "zincir": [
        "M1",
        "M2",
        "M3",
        "M4",
        "M5",
        "M6",
        "M7",
        "M8"
      ],
      "puan": 13,
      "konuSayisi": 8,
      "gerekce": "M2 ve M5 genişletildi (döngü ayrışımı, küme parçalanışı). Düşük frekanslılar küçültüldü."
    },
    {
      "no": 4,
      "ad": "Algoritma temeli ve bellek",
      "zincir": [
        "A1",
        "C8",
        "A2",
        "A3",
        "C9",
        "C10"
      ],
      "puan": 12,
      "konuSayisi": 6,
      "gerekce": "A hattı başlar; C9 tüm bağlantılı yapıların ön koşulu"
    },
    {
      "no": 5,
      "ad": "Olasılık ve sıralama",
      "zincir": [
        "M9",
        "M10",
        "A21",
        "A4",
        "A5",
        "A6"
      ],
      "puan": 6,
      "konuSayisi": 6,
      "gerekce": "Küçültüldü: sıralama algoritmalarının mekaniği 150 soruda doğrudan sorulmadı, kavram yeter"
    },
    {
      "no": 6,
      "ad": "İleri C ve özyineleme",
      "zincir": [
        "C11",
        "C12",
        "C13",
        "C14",
        "C21",
        "C15",
        "A7"
      ],
      "puan": 15,
      "konuSayisi": 7,
      "gerekce": "C bloğunun ağırlık merkezi. Özyineleme 5→8 puan (K13: 16/49 C sorusu)"
    },
    {
      "no": 7,
      "ad": "Graf",
      "zincir": [
        "A13",
        "A14",
        "A24",
        "A15"
      ],
      "puan": 9,
      "konuSayisi": 4,
      "gerekce": "ÖNE ÇEKİLDİ (K14). B4'ten B3'e. 18/150 soru — üç yılın en istikrarlı kümesi."
    },
    {
      "no": 8,
      "ad": "Optimizasyon ve tasarım muhakemesi",
      "zincir": [
        "A19",
        "A25",
        "A20",
        "A26",
        "A23"
      ],
      "puan": 12,
      "konuSayisi": 5,
      "gerekce": "YENİ FAZ. Açgözlü + Huffman + DP + tasarım muhakemesi = 30/150 soru."
    },
    {
      "no": 9,
      "ad": "Bağlantılı yapılar, sayı teorisi ve kapanış",
      "zincir": [
        "C16",
        "A8",
        "A9",
        "A10",
        "A11",
        "M12",
        "M16",
        "M15",
        "A22",
        "C20"
      ],
      "puan": 12,
      "konuSayisi": 10,
      "gerekce": "Düşük frekanslılar sona toplandı. Buradan kesme yapılırsa zincir kırılmaz."
    },
    {
      "no": 10,
      "ad": "Mantık kurgu ve lise cebiri",
      "zincir": [
        "P2",
        "P1",
        "P4",
        "P3",
        "L1",
        "L2"
      ],
      "puan": 10,
      "konuSayisi": 6,
      "gerekce": "YENİ HAT (K15). Diğer fazlardan bağımsız, araya serpiştirilir. 17/150 soru."
    }
  ],
  "bloklar": [
    {
      "id": "B0",
      "ad": "Yaz Yoğunlaştırma",
      "haftaAralik": [
        1,
        6
      ],
      "baslangic": "2026-07-27",
      "bitis": "2026-09-06",
      "hafta": 6,
      "uretkenHafta": 4,
      "haftalikSaat": 25,
      "puan": 25,
      "kapasiteSaat": 100,
      "kesin": true
    },
    {
      "id": "B1",
      "ad": "Dönem Başlangıcı",
      "haftaAralik": [
        7,
        14
      ],
      "baslangic": "2026-09-07",
      "bitis": "2026-11-01",
      "hafta": 8,
      "uretkenHafta": 6,
      "haftalikSaat": 15,
      "puan": 22,
      "kapasiteSaat": 90,
      "kesin": false,
      "not": "En dolu blok (%98), C9 burada"
    },
    {
      "id": "B2",
      "ad": "Güz Sonu",
      "haftaAralik": [
        15,
        22
      ],
      "baslangic": "2026-11-02",
      "bitis": "2026-12-27",
      "hafta": 8,
      "uretkenHafta": 5,
      "haftalikSaat": 15,
      "puan": 16,
      "kapasiteSaat": 75,
      "kesin": false,
      "not": "Üç tampon: W18, W19 (TFO), W22"
    },
    {
      "id": "B3",
      "ad": "Kış",
      "haftaAralik": [
        23,
        30
      ],
      "baslangic": "2026-12-28",
      "bitis": "2027-02-21",
      "hafta": 8,
      "uretkenHafta": 6,
      "haftalikSaat": 15,
      "puan": 23,
      "kapasiteSaat": 100,
      "kesin": false,
      "not": "W27 yarıyıl tatili, yaz temposu"
    },
    {
      "id": "B4",
      "ad": "İlkbahar",
      "haftaAralik": [
        31,
        38
      ],
      "baslangic": "2027-02-22",
      "bitis": "2027-04-18",
      "hafta": 8,
      "uretkenHafta": 6,
      "haftalikSaat": 15,
      "puan": 22,
      "kapasiteSaat": 90,
      "kesin": false,
      "not": "W31 TYBS başvurusu; W37 son yeni konu"
    },
    {
      "id": "B5",
      "ad": "Final",
      "haftaAralik": [
        39,
        42
      ],
      "baslangic": "2027-04-19",
      "bitis": "2027-05-16",
      "hafta": 4,
      "uretkenHafta": 0,
      "tekrarHafta": 3,
      "haftalikSaat": 15,
      "puan": 0,
      "kapasiteSaat": 45,
      "kesin": false,
      "not": "Yeni konu yok. 3 tekrar haftası + 1 sınav haftası. Hız hesabına girmez."
    }
  ],
  "haftalar": [
    {
      "w": 1,
      "blok": "B0",
      "blokIci": 1,
      "bas": "2026-07-27",
      "bit": "2026-08-02",
      "tip": "devredildi",
      "saat": 25,
      "faz": [],
      "konular": [],
      "puan": 0,
      "devredilenKonular": ["M20", "M22", "M19", "C1", "C2"],
      "notlar": ["Tamamlanmadı (K16)"]
    },
    {
      "w": 2,
      "blok": "B0",
      "blokIci": 2,
      "bas": "2026-08-03",
      "bit": "2026-08-09",
      "tip": "devredildi",
      "saat": 25,
      "faz": [],
      "konular": [],
      "puan": 0,
      "devredilenKonular": ["C3", "C7", "M1"],
      "notlar": ["Tamamlanmadı (K16)"]
    },
    {
      "w": 3,
      "blok": "B0",
      "blokIci": 3,
      "bas": "2026-08-10",
      "bit": "2026-08-16",
      "tip": "uretken",
      "saat": 25,
      "faz": [
        1,
        3
      ],
      "konular": [
        "M19",
        "M20",
        "M22",
        "M1",
        "M18"
      ],
      "puan": 6,
      "notlar": []
    },
    {
      "w": 4,
      "blok": "B0",
      "blokIci": 4,
      "bas": "2026-08-17",
      "bit": "2026-08-23",
      "tip": "uretken",
      "saat": 25,
      "faz": [
        3
      ],
      "konular": [
        "M2",
        "M3",
        "M4"
      ],
      "puan": 6,
      "madencilikSeti": 1,
      "notlar": []
    },
    {
      "w": 5,
      "blok": "B0",
      "blokIci": 5,
      "bas": "2026-08-24",
      "bit": "2026-08-30",
      "tip": "uretken",
      "saat": 25,
      "faz": [
        3
      ],
      "konular": [
        "M5",
        "M6",
        "M7",
        "M8"
      ],
      "puan": 6,
      "notlar": []
    },
    {
      "w": 6,
      "blok": "B0",
      "blokIci": 6,
      "bas": "2026-08-31",
      "bit": "2026-09-06",
      "tip": "uretken",
      "saat": 25,
      "faz": [
        5,
        9,
        10
      ],
      "konular": [
        "M9",
        "M10",
        "M12",
        "P2"
      ],
      "puan": 5,
      "madencilikSeti": 2,
      "kapanis": "B0",
      "notlar": [
        "Cuma–Pazar kapanış + telafi payı — B0'ın tek tamponu",
        "Geride kalınırsa önce M12 ve P2 devreder"
      ]
    },
    {
      "w": 7,
      "blok": "B1",
      "blokIci": 1,
      "bas": "2026-09-07",
      "bit": "2026-09-13",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        3
      ],
      "konular": [],
      "puan": 0,
      "notlar": [
        "TFO temsilcilik görüşmesi",
        "Boş — W6 kapanışında yeniden doldurulacak (K16)"
      ]
    },
    {
      "w": 8,
      "blok": "B1",
      "blokIci": 2,
      "bas": "2026-09-14",
      "bit": "2026-09-20",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        3,
        4
      ],
      "konular": [
        "A1"
      ],
      "puan": 2,
      "notlar": [
        "A hattı başlar"
      ]
    },
    {
      "w": 9,
      "blok": "B1",
      "blokIci": 3,
      "bas": "2026-09-21",
      "bit": "2026-09-27",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        3,
        4
      ],
      "konular": [
        "C8"
      ],
      "puan": 2,
      "notlar": []
    },
    {
      "w": 10,
      "blok": "B1",
      "blokIci": 4,
      "bas": "2026-09-28",
      "bit": "2026-10-04",
      "tip": "tampon",
      "saat": 15,
      "faz": [],
      "konular": [],
      "puan": 0,
      "madencilikSeti": 3,
      "notlar": []
    },
    {
      "w": 11,
      "blok": "B1",
      "blokIci": 5,
      "bas": "2026-10-05",
      "bit": "2026-10-11",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        4
      ],
      "konular": [
        "A2",
        "A3"
      ],
      "puan": 3,
      "notlar": [
        "C9 3 puanlık, ağır hafta"
      ]
    },
    {
      "w": 12,
      "blok": "B1",
      "blokIci": 6,
      "bas": "2026-10-12",
      "bit": "2026-10-18",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        4,
        5
      ],
      "konular": [
        "C9"
      ],
      "puan": 3,
      "notlar": []
    },
    {
      "w": 13,
      "blok": "B1",
      "blokIci": 7,
      "bas": "2026-10-19",
      "bit": "2026-10-25",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        4,
        10
      ],
      "konular": [
        "C10"
      ],
      "puan": 2,
      "notlar": []
    },
    {
      "w": 14,
      "blok": "B1",
      "blokIci": 8,
      "bas": "2026-10-26",
      "bit": "2026-11-01",
      "tip": "tampon",
      "saat": 15,
      "faz": [],
      "konular": [],
      "puan": 0,
      "madencilikSeti": 4,
      "kapanis": "B1",
      "notlar": []
    },
    {
      "w": 15,
      "blok": "B2",
      "blokIci": 1,
      "bas": "2026-11-02",
      "bit": "2026-11-08",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        5,
        10
      ],
      "konular": [
        "A21",
        "L1"
      ],
      "puan": 2,
      "notlar": [
        "AP kayıt kararı"
      ]
    },
    {
      "w": 16,
      "blok": "B2",
      "blokIci": 2,
      "bas": "2026-11-09",
      "bit": "2026-11-15",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        5
      ],
      "konular": [
        "A4",
        "A5",
        "A6"
      ],
      "puan": 3,
      "notlar": []
    },
    {
      "w": 17,
      "blok": "B2",
      "blokIci": 3,
      "bas": "2026-11-16",
      "bit": "2026-11-22",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        6
      ],
      "konular": [
        "C11",
        "C12",
        "C13"
      ],
      "puan": 4,
      "notlar": []
    },
    {
      "w": 18,
      "blok": "B2",
      "blokIci": 4,
      "bas": "2026-11-23",
      "bit": "2026-11-29",
      "tip": "tampon",
      "saat": 15,
      "faz": [],
      "konular": [],
      "puan": 0,
      "deneme": 1,
      "notlar": []
    },
    {
      "w": 19,
      "blok": "B2",
      "blokIci": 5,
      "bas": "2026-11-30",
      "bit": "2026-12-06",
      "tip": "tampon",
      "saat": 7,
      "faz": [],
      "konular": [],
      "puan": 0,
      "notlar": [
        "TFO ~6 Aralık — TÜBİTAK durur"
      ]
    },
    {
      "w": 20,
      "blok": "B2",
      "blokIci": 6,
      "bas": "2026-12-07",
      "bit": "2026-12-13",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        6
      ],
      "konular": [
        "C14"
      ],
      "puan": 3,
      "notlar": []
    },
    {
      "w": 21,
      "blok": "B2",
      "blokIci": 7,
      "bas": "2026-12-14",
      "bit": "2026-12-20",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        6,
        10
      ],
      "konular": [
        "C21",
        "L2"
      ],
      "puan": 3,
      "notlar": [
        "C14 3 puanlık, ağır hafta"
      ]
    },
    {
      "w": 22,
      "blok": "B2",
      "blokIci": 8,
      "bas": "2026-12-21",
      "bit": "2026-12-27",
      "tip": "tampon",
      "saat": 15,
      "faz": [],
      "konular": [],
      "puan": 0,
      "deneme": 2,
      "kapanis": "B2",
      "notlar": [
        "S3: kesilen konular geri eklenecek mi"
      ]
    },
    {
      "w": 23,
      "blok": "B3",
      "blokIci": 1,
      "bas": "2026-12-28",
      "bit": "2027-01-03",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        6
      ],
      "konular": [
        "C15"
      ],
      "puan": 3,
      "notlar": []
    },
    {
      "w": 24,
      "blok": "B3",
      "blokIci": 2,
      "bas": "2027-01-04",
      "bit": "2027-01-10",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        6
      ],
      "konular": [
        "A7"
      ],
      "puan": 3,
      "notlar": []
    },
    {
      "w": 25,
      "blok": "B3",
      "blokIci": 3,
      "bas": "2027-01-11",
      "bit": "2027-01-17",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        7
      ],
      "konular": [
        "A13",
        "A14"
      ],
      "puan": 4,
      "notlar": []
    },
    {
      "w": 26,
      "blok": "B3",
      "blokIci": 4,
      "bas": "2027-01-18",
      "bit": "2027-01-24",
      "tip": "tampon",
      "saat": 15,
      "faz": [],
      "konular": [],
      "puan": 0,
      "deneme": 3,
      "notlar": []
    },
    {
      "w": 27,
      "blok": "B3",
      "blokIci": 5,
      "bas": "2027-01-25",
      "bit": "2027-01-31",
      "tip": "uretken",
      "saat": 25,
      "faz": [
        7,
        9
      ],
      "konular": [
        "A24",
        "A15"
      ],
      "puan": 5,
      "notlar": [
        "Yarıyıl tatili — yaz temposu",
        "M13 3 puanlık"
      ]
    },
    {
      "w": 28,
      "blok": "B3",
      "blokIci": 6,
      "bas": "2027-02-01",
      "bit": "2027-02-07",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        9
      ],
      "konular": [
        "C16",
        "A8",
        "A9"
      ],
      "puan": 4,
      "notlar": []
    },
    {
      "w": 29,
      "blok": "B3",
      "blokIci": 7,
      "bas": "2027-02-08",
      "bit": "2027-02-14",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        8
      ],
      "konular": [
        "A19"
      ],
      "puan": 3,
      "notlar": []
    },
    {
      "w": 30,
      "blok": "B3",
      "blokIci": 8,
      "bas": "2027-02-15",
      "bit": "2027-02-21",
      "tip": "tampon",
      "saat": 15,
      "faz": [],
      "konular": [],
      "puan": 0,
      "deneme": 4,
      "kapanis": "B3",
      "notlar": []
    },
    {
      "w": 31,
      "blok": "B4",
      "blokIci": 1,
      "bas": "2027-02-22",
      "bit": "2027-02-28",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        8,
        10
      ],
      "konular": [
        "A25",
        "P1"
      ],
      "puan": 4,
      "notlar": [
        "TYBS BAŞVURUSU",
        "A11 3 puanlık"
      ]
    },
    {
      "w": 32,
      "blok": "B4",
      "blokIci": 2,
      "bas": "2027-03-01",
      "bit": "2027-03-07",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        8
      ],
      "konular": [
        "A20",
        "A26"
      ],
      "puan": 4,
      "notlar": []
    },
    {
      "w": 33,
      "blok": "B4",
      "blokIci": 3,
      "bas": "2027-03-08",
      "bit": "2027-03-14",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        8
      ],
      "konular": [
        "A23"
      ],
      "puan": 3,
      "notlar": [
        "A14 3 puanlık, ağır hafta"
      ]
    },
    {
      "w": 34,
      "blok": "B4",
      "blokIci": 4,
      "bas": "2027-03-15",
      "bit": "2027-03-21",
      "tip": "tampon",
      "saat": 15,
      "faz": [],
      "konular": [],
      "puan": 0,
      "deneme": 5,
      "notlar": []
    },
    {
      "w": 35,
      "blok": "B4",
      "blokIci": 5,
      "bas": "2027-03-22",
      "bit": "2027-03-28",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        9
      ],
      "konular": [
        "A10",
        "A11",
        "C20",
        "A22"
      ],
      "puan": 4,
      "notlar": [
        "A19 3 puanlık"
      ]
    },
    {
      "w": 36,
      "blok": "B4",
      "blokIci": 6,
      "bas": "2027-03-29",
      "bit": "2027-04-04",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        9
      ],
      "konular": [
        "M16",
        "M15"
      ],
      "puan": 3,
      "notlar": []
    },
    {
      "w": 37,
      "blok": "B4",
      "blokIci": 7,
      "bas": "2027-04-05",
      "bit": "2027-04-11",
      "tip": "uretken",
      "saat": 15,
      "faz": [
        10
      ],
      "konular": [
        "P4",
        "P3"
      ],
      "puan": 4,
      "notlar": [
        "SON YENİ KONU"
      ]
    },
    {
      "w": 38,
      "blok": "B4",
      "blokIci": 8,
      "bas": "2027-04-12",
      "bit": "2027-04-18",
      "tip": "tampon",
      "saat": 15,
      "faz": [],
      "konular": [],
      "puan": 0,
      "deneme": 6,
      "kapanis": "B4",
      "notlar": []
    },
    {
      "w": 39,
      "blok": "B5",
      "blokIci": 1,
      "bas": "2027-04-19",
      "bit": "2027-04-25",
      "tip": "tekrar",
      "saat": 15,
      "faz": [],
      "konular": [],
      "puan": 0,
      "notlar": [
        "M hattı tam tekrar — 20 konu, 35 puan"
      ]
    },
    {
      "w": 40,
      "blok": "B5",
      "blokIci": 2,
      "bas": "2027-04-26",
      "bit": "2027-05-02",
      "tip": "tekrar",
      "saat": 15,
      "faz": [],
      "konular": [],
      "puan": 0,
      "notlar": [
        "C hattı tam tekrar — 19 konu, 36 puan"
      ]
    },
    {
      "w": 41,
      "blok": "B5",
      "blokIci": 3,
      "bas": "2027-05-03",
      "bit": "2027-05-09",
      "tip": "tekrar",
      "saat": 15,
      "faz": [],
      "konular": [],
      "puan": 0,
      "deneme": 7,
      "notlar": [
        "A hattı tam tekrar — 18 konu, 37 puan",
        "Deneme 7 ve 8"
      ]
    },
    {
      "w": 42,
      "blok": "B5",
      "blokIci": 4,
      "bas": "2027-05-10",
      "bit": "2027-05-16",
      "tip": "sinav",
      "saat": 15,
      "faz": [],
      "konular": [],
      "puan": 0,
      "deneme": 9,
      "notlar": [
        "Gün aşırı tam deneme",
        "Yeni konu yok"
      ]
    }
  ],
  "konular": [
    {
      "id": "M19",
      "hat": "M",
      "ad": "Önerme mantığı, doğruluk tabloları, De Morgan",
      "puan": 1,
      "faz": 1,
      "blok": "B0",
      "hafta": 3,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "M20"
      ],
      "kapsam": {
        "ogren": [
          "Bağlaçlar: ∧, ∨, ¬, →, ↔ ve anlamları",
          "Doğruluk tablosu kurma (2^n satır)",
          "De Morgan yasaları",
          "Koşullu önerme: karşıt, ters, karşıt ters (contrapositive)",
          "Totoloji, çelişki, mantıksal denklik"
        ],
        "dikkat": [
          "DUR: yüklem mantığı (∀, ∃) yüzeysel yeterli"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "Mantık ve önermeler",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+Mantık+ve+önermeler"
        },
        "kaynak": {
          "ad": "PKO soru bankası",
          "yer": "Mantık ve önermeler bölümü (TYT) — video yeterli"
        },
        "soru": "2025 Q14, Q18 · 2026 Q2",
        "sure": "~4 saat"
      },
      "mebKarsiligi": {
        "durum": "kismi",
        "sinif": 9,
        "tema": "1. Tema: Sayılar",
        "dersSaati": 38,
        "kazanim": "MAT.9.1.4",
        "ortusen": [
          "Önerme kavramı",
          "Önermenin değili",
          "Mantık bağlaçları: ve, veya, ya da, ise, ancak ve ancak",
          "Niceleyiciler: her, bazı",
          "Sözel ↔ sembolik dil çevirisi"
        ],
        "ortusmeyen": [
          "Doğruluk tablosu kurma",
          "De Morgan yasaları",
          "Karşıt, ters, karşıt ters önerme",
          "Totoloji ve çelişki"
        ],
        "not": "10. sınıf MAT.10.3.2'de mantık bağlaçları algoritma bağlamında tekrar geçiyor."
      }
    },
    {
      "id": "M20",
      "hat": "M",
      "ad": "Kümeler, bağıntılar, matematiksel fonksiyon türleri (birebir/örten)",
      "puan": 2,
      "faz": 1,
      "blok": "B0",
      "hafta": 3,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [],
      "kapsam": {
        "ogren": [
          "Küme işlemleri: birleşim, kesişim, fark, tümleyen, simetrik fark",
          "Kartezyen çarpım; kuvvet kümesi eleman sayısı 2^n",
          "Bağıntı özellikleri: yansıma, simetri, geçişme (denklik bağıntısı)",
          "Fonksiyon türleri: birebir (injective), örten (surjective), birebir örten (bijective)",
          "n elemanlıdan m elemanlıya toplam fonksiyon sayısı: m^n",
          "Birebir fonksiyon sayısı: m!/(m-n)!"
        ],
        "dikkat": [
          "DUR: örten fonksiyon SAYISI formülü M7'de (dahil-hariç) gelecek; burada sadece kavramı bil",
          "★ v4.0 EKİ (K13): Fonksiyon BİLEŞKESİ (f∘g) ve ters fonksiyon — çok katmanlı bileşkeyi geriye çözme",
          "★ v4.0 EKİ: Bağıntı bileşkesi S∘R = {(a,c) | ∃b: (a,b)∈R ve (b,c)∈S} — eleman sayısı sayma"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "Kümeler ve fonksiyonlar",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+Kümeler+ve+fonksiyonlar"
        },
        "kaynak": {
          "ad": "Gürlü · Olimpik Sonlu Matematik",
          "yer": "Sayma Yöntemleri (giriş)"
        },
        "soru": "2026 Q3, Q4 (bileşke)",
        "sure": "~8 saat"
      },
      "mebKarsiligi": {
        "durum": "kismi",
        "sinif": 9,
        "tema": "1. Tema: Sayılar",
        "dersSaati": 38,
        "kazanim": "MAT.9.1.2",
        "ortusen": [
          "Küme sembol ve işlemleri",
          "Eleman olma-olmama, eleman sayısı",
          "Listeleme ve ortak özellik yöntemleri",
          "Alt küme, boş küme",
          "Birleşim, kesişim, fark, tümleme"
        ],
        "ortusmeyen": [
          "Bağıntı özellikleri (yansıma, simetri, geçişme)",
          "Matematiksel fonksiyon türleri: birebir, örten, birebir örten",
          "Kartezyen çarpım",
          "Kuvvet kümesi eleman sayısı 2^n",
          "Fonksiyon sayma formülleri: m^n ve m!/(m−n)!"
        ],
        "not": "MEB kümeyi formel tanıma girmeden, gerçek sayı aralıkları bağlamında ele alıyor."
      }
    },
    {
      "id": "M22",
      "hat": "M",
      "ad": "Σ ve Π notasyonu, teleskopik toplamlar",
      "puan": 1,
      "faz": 1,
      "blok": "B0",
      "hafta": 3,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "M20"
      ],
      "kapsam": {
        "ogren": [
          "Σ ve Π okuma/yazma, indis kaydırma",
          "Doğrusallık: Σ(a+b)=Σa+Σb, Σca=cΣa",
          "Standart toplamlar: Σk, Σk², Σk³ kapalı formları",
          "Geometrik toplam formülü",
          "Teleskopik toplam tekniği",
          "Çift toplam (ΣΣ) ve toplama sırasını değiştirme"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "Diziler ve toplam sembolü",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+Diziler+ve+toplam+sembolü"
        },
        "kaynak": {
          "ad": "Gürlü · Olimpik Sonlu Matematik",
          "yer": "Sayma Yöntemleri (giriş)"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~4 saat"
      },
      "mebKarsiligi": {
        "durum": "yok",
        "not": "Σ ve Π notasyonu 9–12 programında anahtar kavram olarak geçmiyor. 12. sınıf dizi toplamlarında dolaylı kullanılabilir ama konu olarak öğretilmiyor."
      }
    },
    {
      "id": "M1",
      "hat": "M",
      "ad": "Sayma temelleri: toplama ve çarpma ilkesi",
      "puan": 1,
      "faz": 3,
      "blok": "B0",
      "hafta": 3,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "M20"
      ],
      "kapsam": {
        "ogren": [
          "Toplama ilkesi (ayrık durumlar) vs çarpma ilkesi (ardışık seçimler)",
          "Hangisinin ne zaman kullanılacağını ayırt etme",
          "Ağaç diyagramı ile doğrulama",
          "Tümleyen sayma: 'en az bir' = tamamı − hiçbiri",
          "Klasik örnekler: plaka, şifre, yol sayma"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "Sayma yöntemleri / toplama-çarpma ilkesi",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+Sayma+yöntemleri+/+toplama-çarpma+ilkesi"
        },
        "kaynak": {
          "ad": "Gürlü · Olimpik Sonlu Matematik",
          "yer": "Sayma Yöntemleri"
        },
        "soru": "2024 Q20 (8×8 kaç kare)",
        "sure": "~4 saat"
      },
      "mebKarsiligi": {
        "durum": "tam",
        "sinif": 10,
        "tema": "3. Tema: Sayma, Algoritma ve Bilişim",
        "kazanim": "MAT.10.3.1",
        "dersSaati": 28,
        "not": "Toplama ve çarpma yoluyla sayma. El sıkışma problemi ve çokgende köşegen sayısı programda adı geçen örnekler."
      }
    },
    {
      "id": "M18",
      "hat": "M",
      "ad": "Sayı sistemleri: ikilik/onaltılık taban dönüşümü",
      "puan": 1,
      "faz": 1,
      "blok": "B0",
      "hafta": 3,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [],
      "kapsam": {
        "ogren": [
          "Taban dönüşümü: 10 ↔ 2, 8, 16",
          "İkilik toplama ve çıkarma",
          "İkinin tümleyeni (two's complement) ve negatif sayı gösterimi",
          "Bit sayısı ↔ değer aralığı (n bit → 0..2^n−1)",
          "Onaltılık ↔ ikilik hızlı dönüşüm (4 bit = 1 hex basamağı)"
        ],
        "dikkat": [
          "DUR: kayan nokta (float) iç gösterimi gerekmiyor"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "Sayı sistemleri / taban aritmetiği",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+Sayı+sistemleri+/+taban+aritmetiği"
        },
        "kaynak": {
          "ad": "PKO soru bankası",
          "yer": "İlgili bölüm — süreli çöz"
        },
        "soru": "2026 Q7 · ortaokul soruları",
        "sure": "~4 saat"
      },
      "mebKarsiligi": {
        "durum": "kismi",
        "sinif": 10,
        "tema": "3. Tema: Sayma, Algoritma ve Bilişim",
        "kazanim": "MAT.10.3.1",
        "dersSaati": 28,
        "ortusen": [
          "İkili (ikilik) sayı sistemi",
          "Bit/byte hesapları"
        ],
        "ortusmeyen": [
          "Onaltılık taban ve dönüşümleri",
          "İkinin tümleyeni (negatif sayı gösterimi)",
          "n bit ↔ değer aralığı ilişkisi (0..2^n−1)"
        ],
        "not": "MEB ikili sistemi bağımsız bir konu olarak değil, sadece sıralama gerektiren sayma problemleri bağlamında ele alıyor."
      }
    },
    {
      "id": "M2",
      "hat": "M",
      "ad": "Permütasyon: basit, tekrarlı, dairesel",
      "puan": 3,
      "faz": 3,
      "blok": "B0",
      "hafta": 4,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "M1"
      ],
      "kapsam": {
        "ogren": [
          "P(n,r) = n!/(n−r)!",
          "Tekrarlı permütasyon: n!/(n1!·n2!···)",
          "Dairesel permütasyon: (n−1)!",
          "Kolye/yansıma varsa: (n−1)!/2",
          "Belirli elemanların yan yana veya ayrı olması koşulları",
          "0! = 1 ve faktöriyel büyüme hızı"
        ],
        "dikkat": [
          "★ v4.0 EKİ (K13): Permütasyonun DÖNGÜ AYRIŞIMI. Minimum takas sayısı = n − döngü sayısı.",
          "★ v4.0 EKİ: Maksimum takas sayısı = n − 1 (tek döngü hâli)",
          "★ v4.0 EKİ: Sözlük sırası — verilen permütasyonun kaçıncı olduğunu / k. permütasyonu bulma"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "Permütasyon",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+Permütasyon"
        },
        "kaynak": {
          "ad": "Gürlü · Olimpik Sonlu Matematik",
          "yer": "Permütasyon"
        },
        "soru": "2024 Q23–25 (ÜÇLÜ KÜME, döngü) · 2024 Q18 · 2025 Q4",
        "sure": "~12 saat"
      },
      "mebKarsiligi": {
        "durum": "kismi",
        "sinif": 10,
        "tema": "3. Tema: Sayma, Algoritma ve Bilişim",
        "kazanim": "MAT.10.3.1",
        "dersSaati": 28,
        "ortusen": [
          "Sıralama sayısı (permütasyon)",
          "Faktöriyel gösterimi",
          "İçinde özdeş nesneler olan topluluğun sıralanması (tekrarlı permütasyon)"
        ],
        "ortusmeyen": [
          "Dairesel permütasyon (n−1)!",
          "Kolye/yansıma durumu (n−1)!/2",
          "Belirli elemanların yan yana veya ayrı olması koşulları"
        ],
        "not": "Program P(n,r)'yi 'formel tanımlamaya girilmeden' ele alıyor."
      }
    },
    {
      "id": "M3",
      "hat": "M",
      "ad": "Kombinasyon, binom katsayıları, Pascal üçgeni",
      "puan": 2,
      "faz": 3,
      "blok": "B0",
      "hafta": 4,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "M2"
      ],
      "kapsam": {
        "ogren": [
          "C(n,r) = n!/(r!(n−r)!)",
          "Simetri: C(n,r) = C(n,n−r)",
          "Pascal özdeşliği: C(n,r) = C(n−1,r−1) + C(n−1,r)",
          "Pascal üçgeni ve satır toplamı = 2^n",
          "Permütasyon ile fark: sıra önemli mi değil mi",
          "AYIRT ETME BECERİSİ: soruda sıra var mı yok mu"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "Kombinasyon",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+Kombinasyon"
        },
        "kaynak": {
          "ad": "Gürlü · Olimpik Sonlu Matematik",
          "yer": "Kombinasyon"
        },
        "soru": "2026 Q22, Q23 · 2025 Q19",
        "sure": "~8 saat"
      },
      "mebKarsiligi": {
        "durum": "tam",
        "sinif": 10,
        "tema": "3. Tema: Sayma, Algoritma ve Bilişim",
        "kazanim": "MAT.10.3.1",
        "dersSaati": 28,
        "not": "Seçme sayısı ve Pascal üçgeni programda açıkça geçiyor (Ömer Hayyam bağlantısıyla). MEB formül ezberi yerine strateji anlamlandırmayı önceliyor."
      }
    },
    {
      "id": "M4",
      "hat": "M",
      "ad": "Binom teoremi ve kombinatoryel kimlikler",
      "puan": 1,
      "faz": 3,
      "blok": "B0",
      "hafta": 4,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "M3",
        "M22"
      ],
      "kapsam": {
        "ogren": [
          "(x+y)^n açılımı ve genel terim formülü",
          "Belirli bir terimin katsayısını bulma",
          "Σ C(n,k) = 2^n ve Σ(−1)^k C(n,k) = 0",
          "Vandermonde özdeşliği (temel düzey)",
          "Hokey sopası özdeşliği",
          "Çok terimli (multinomial) katsayı kavramı"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "Binom açılımı",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+Binom+açılımı"
        },
        "kaynak": {
          "ad": "Gürlü · Olimpik Sonlu Matematik",
          "yer": "Binom Açılımı"
        },
        "soru": "2026 Q5, Q6 (binom kimliği)",
        "sure": "~4 saat"
      },
      "mebKarsiligi": {
        "durum": "kismi",
        "sinif": 10,
        "tema": "3. Tema: Sayma, Algoritma ve Bilişim",
        "kazanim": "MAT.10.3.1",
        "dersSaati": 28,
        "ortusen": [
          "Pascal üçgeni ve satır yapısı",
          "Seçme sayılarının listelenmesiyle üçgenin kurulması"
        ],
        "ortusmeyen": [
          "Binom teoremi açılımı (x+y)^n",
          "Genel terim formülü ve belirli terimin katsayısı",
          "Σ C(n,k) = 2^n kimliği",
          "Vandermonde ve hokey sopası özdeşlikleri",
          "Çok terimli (multinomial) katsayı"
        ],
        "not": "Pascal üçgeni var ama binom açılımı programda yok."
      }
    },
    {
      "id": "M5",
      "hat": "M",
      "ad": "Yıldızlar ve çubuklar (tekrarlı seçim)",
      "puan": 3,
      "faz": 3,
      "blok": "B0",
      "hafta": 5,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "M4"
      ],
      "kapsam": {
        "ogren": [
          "n özdeş nesnenin k kutuya dağıtılması: C(n+k−1, k−1)",
          "Boş kutu yasaksa: C(n−1, k−1)",
          "x1+x2+···+xk = n denkleminin negatif olmayan çözüm sayısı",
          "Alt sınır kısıtlı varyantlar (değişken kaydırma)",
          "Özdeş vs ayırt edilebilir nesne ayrımı"
        ],
        "dikkat": [
          "★ v4.0 EKİ (K13): KÜME PARÇALANIŞI — n nesneyi k boş olmayan gruba ayırma (Stirling S(n,k))",
          "★ v4.0 EKİ: S(n,k) = k·S(n−1,k) + S(n−1,k−1) yineleme bağıntısıyla tablo kurma",
          "★ v4.0 EKİ: \"gruplar adsız\" ile \"gruplar adlı\" farkı — k! çarpanı",
          "★ v4.0 EKİ: Zar toplamları — n zarla m toplamı kaç şekilde (yıldız-çubuk + üst sınır düzeltmesi)"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "tekrarlı kombinasyon dağılım problemleri",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+tekrarlı+kombinasyon+dağılım+problemleri"
        },
        "kaynak": {
          "ad": "Gürlü · Olimpik Sonlu Matematik",
          "yer": "Sayma Yöntemleri (dağılım)"
        },
        "soru": "2025 Q1–3 (yıldız-çubuk) · 2025 Q9–11 (Stirling, ÜÇLÜ KÜME)",
        "sure": "~12 saat"
      },
      "mebKarsiligi": {
        "durum": "kismi",
        "sinif": 10,
        "tema": "3. Tema: Sayma, Algoritma ve Bilişim",
        "kazanim": "MAT.10.3.1",
        "dersSaati": 28,
        "ortusen": [
          "Özdeş nesneli sıralama tekniği",
          "Kafes yolu örneği (3 sağa, 2 yukarı → 10 yol)",
          "'Bir doğal sayı kaç farklı biçimde toplam olarak yazılır' proje ödevi"
        ],
        "ortusmeyen": [
          "C(n+k−1, k−1) genel formülü",
          "Boş kutu yasağı varyantı: C(n−1, k−1)",
          "Alt sınır kısıtlı problemler",
          "x1+...+xk = n çözüm sayısı formülasyonu"
        ],
        "not": "Teknik programda var ama formül olarak verilmiyor."
      }
    },
    {
      "id": "M6",
      "hat": "M",
      "ad": "Güvercin yuvası ilkesi",
      "puan": 1,
      "faz": 3,
      "blok": "B0",
      "hafta": 5,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "M5"
      ],
      "kapsam": {
        "ogren": [
          "Temel ilke: n+1 nesne n kutuya → en az bir kutuda 2",
          "Genelleştirilmiş biçim: ⌈n/k⌉",
          "Klasik uygulamalar: aynı kalan, aynı renk, aynı doğum günü",
          "Sayı teorisi uygulaması (bir alt kümenin toplamı n'e bölünür)",
          "En kötü durum senaryosu kurma"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Olimpiyat konuları — YouTube araması",
          "ara": "güvercin yuvası prensibi",
          "url": "https://www.youtube.com/results?search_query=matematik+olimpiyat+güvercin+yuvası+prensibi"
        },
        "kaynak": {
          "ad": "Gürlü · Olimpik Sonlu Matematik",
          "yer": "Güvercin Yuvası Prensibi"
        },
        "soru": "Matematik dalı arşivi — güvercin yuvası bol",
        "sure": "~4 saat"
      },
      "mebKarsiligi": {
        "durum": "tam",
        "sinif": 10,
        "tema": "3. Tema: Sayma, Algoritma ve Bilişim",
        "kazanim": "MAT.10.3.1",
        "dersSaati": 28,
        "not": "Programda adıyla geçiyor: 'güvercin yuvası ilkesinin kullanılabileceği sayma problemlerine yer verilir'."
      }
    },
    {
      "id": "M7",
      "hat": "M",
      "ad": "Dahil-hariç ilkesi",
      "puan": 1,
      "faz": 3,
      "blok": "B0",
      "hafta": 5,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "M6",
        "M20"
      ],
      "kapsam": {
        "ogren": [
          "İki ve üç küme formülü",
          "Genel formül (işaret değişimli toplam)",
          "ÖRTEN FONKSİYON SAYISI (M20'de kavramı verilmişti, formülü burada)",
          "'En az bir özelliği sağlayan' tipi sorular",
          "Euler phi ile ilişkisi (M17'de tekrar gelecek)",
          "Venn şemasıyla doğrulama"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "Kümelerde işlemler / içerme-dışarma",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+Kümelerde+işlemler+/+içerme-dışarma"
        },
        "kaynak": {
          "ad": "Gürlü · Olimpik Sonlu Matematik",
          "yer": "İçerme-Dışarma Prensibi"
        },
        "soru": "2026 Q25 · 2024 Q21",
        "sure": "~4 saat"
      },
      "mebKarsiligi": {
        "durum": "yok",
        "not": "Küme işlemleri 9.1'de var ama dahil-hariç SAYMA ilkesi (formül) 9–12 programında geçmiyor."
      }
    },
    {
      "id": "M8",
      "hat": "M",
      "ad": "Düzensizlikler (derangement), sabit noktalar",
      "puan": 1,
      "faz": 3,
      "blok": "B0",
      "hafta": 5,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "M7"
      ],
      "kapsam": {
        "ogren": [
          "Derangement D(n): hiçbir eleman kendi yerinde değil",
          "D(n) = n!·Σ(−1)^k/k! formülü (dahil-hariçten türetilir)",
          "Yineleme: D(n) = (n−1)(D(n−1)+D(n−2))",
          "EZBER: D(1)=0, D(2)=1, D(3)=2, D(4)=9, D(5)=44",
          "Tam olarak k eleman yerinde: C(n,k)·D(n−k)"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Olimpiyat konuları — YouTube araması",
          "ara": "içerme dışarma prensibi düzensizlik",
          "url": "https://www.youtube.com/results?search_query=matematik+olimpiyat+içerme+dışarma+prensibi+düzensizlik"
        },
        "kaynak": {
          "ad": "Gürlü · Olimpik Sonlu Matematik",
          "yer": "İçerme-Dışarma Prensibi (düzensizlik)"
        },
        "soru": "2024 Q31 · 2025 Q7",
        "sure": "~4 saat"
      },
      "mebKarsiligi": {
        "durum": "yok",
        "not": "Düzensizlik (derangement) 9–12 programında yok."
      }
    },
    {
      "id": "M9",
      "hat": "M",
      "ad": "Olasılık temelleri: örnek uzay, koşullu olasılık",
      "puan": 1,
      "faz": 5,
      "blok": "B0",
      "hafta": 6,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "M8"
      ],
      "kapsam": {
        "ogren": [
          "Örnek uzay, olay, eşit olasılıklı durum modeli",
          "P(A∪B) = P(A) + P(B) − P(A∩B)",
          "Koşullu olasılık P(A|B) tanımı",
          "Bağımsızlık tanımı",
          "Tümleyen olasılığı",
          "Kombinatorikle bağlantı: sayarak olasılık bulma"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "Olasılık",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+Olasılık"
        },
        "kaynak": {
          "ad": "Gürlü · Olimpik Sonlu Matematik",
          "yer": "Olasılık"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~4 saat"
      },
      "mebKarsiligi": {
        "durum": "tam",
        "sinif": 10,
        "tema": "7. Tema: Veriden Olasılığa",
        "kazanim": "MAT.10.7.1",
        "dersSaati": 18,
        "not": "Temel olasılık (örnek uzay, deneysel/teorik) 9. sınıf 7. Tema'da veriliyor ve 10.7'nin ön koşulu sayılıyor. Koşullu olasılık ve bağımlı/bağımsız olaylar 10.7.1'de."
      }
    },
    {
      "id": "M10",
      "hat": "M",
      "ad": "Bayes teoremi, bağımsızlık",
      "puan": 1,
      "faz": 5,
      "blok": "B0",
      "hafta": 6,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "M9"
      ],
      "kapsam": {
        "ogren": [
          "Bayes formülü",
          "Toplam olasılık teoremi",
          "Ağaç diyagramıyla çözüm tekniği",
          "Klasik problemler: hastalık testi, iki torba, Monty Hall"
        ],
        "dikkat": [
          "TUZAK: bağımsız olmak ile ayrık olmak farklı şeyler"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "Koşullu olasılık",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+Koşullu+olasılık"
        },
        "kaynak": {
          "ad": "Gürlü · Olimpik Sonlu Matematik",
          "yer": "Olasılık"
        },
        "soru": "2026 Q1 (Naive Bayes)",
        "sure": "~4 saat"
      },
      "mebKarsiligi": {
        "durum": "tam",
        "sinif": 10,
        "tema": "7. Tema: Veriden Olasılığa",
        "kazanim": "MAT.10.7.2",
        "dersSaati": 18,
        "not": "Bayes teoremi temanın açık amacı. Zenginleştirmede Naive Bayes ve makine öğrenmesi bağlantısı da var."
      }
    },
    {
      "id": "M12",
      "hat": "M",
      "ad": "Yineleme bağıntısı (recurrence) kurma — matematik",
      "puan": 1,
      "faz": 9,
      "blok": "B0",
      "hafta": 6,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "M22",
        "M2"
      ],
      "kapsam": {
        "ogren": [
          "Problemi a(n) cinsinden a(n−1), a(n−2)'ye indirgeme",
          "Başlangıç koşullarını doğru belirleme",
          "Klasik örnekler: Fibonacci, Hanoi kuleleri, ikili dizide desen sayma",
          "Sayma problemini yinelemeye çevirme becerisi",
          "NOT: bu MATEMATİKSEL DENKLEM; C14'teki özyineleme KOD. Ama bağlantılı: özyinelemeli fonksiyonun adım sayısı bir yineleme bağıntısıdır."
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Olimpiyat konuları — YouTube araması",
          "ara": "indirgemeli diziler rekürans bağıntısı",
          "url": "https://www.youtube.com/results?search_query=matematik+olimpiyat+indirgemeli+diziler+rekürans+bağıntısı"
        },
        "kaynak": {
          "ad": "Gürlü · Olimpik Sonlu Matematik",
          "yer": "İndirgemeli Diziler"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~4 saat"
      },
      "mebKarsiligi": {
        "durum": "kismi",
        "sinif": 12,
        "tema": "1. Tema: Nicelikler ve Değişimler (1)",
        "kazanim": "MAT.12.1.1",
        "ortusen": [
          "Sayı örüntülerinin ardışık terimleri",
          "Ardışık terimler arası ortak fark/oran ilişkisi",
          "Genel terim",
          "Aritmetik ve geometrik diziler"
        ],
        "ortusmeyen": [
          "Yineleme bağıntısı kavramının kendisi: a(n) = f(a(n−1), a(n−2))",
          "Fibonacci ve Hanoi kuleleri tipi kurma problemleri",
          "Sayma problemini yinelemeye çevirme becerisi",
          "Başlangıç koşullarını belirleme"
        ],
        "not": "Aritmetik/geometrik dizi aslında en basit yineleme bağıntısıdır ama MEB bunu 'recurrence' çerçevesiyle sunmuyor. Ayrıca 12. sınıf, sınavından bir buçuk yıl SONRA."
      }
    },
    {
      "id": "M15",
      "hat": "M",
      "ad": "Modüler aritmetik",
      "puan": 1,
      "faz": 9,
      "blok": "B4",
      "hafta": 36,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "M16"
      ],
      "kapsam": {
        "ogren": [
          "Kongrüans tanımı ve temel özellikleri",
          "Toplama ve çarpmada mod alma",
          "Hızlı üs alma (modüler exponentiation) — böl-yönet uygulaması",
          "Fermat'ın küçük teoremi (temel düzey)",
          "Modüler ters (modular inverse) kavramı",
          "UYGULAMA: son basamak bulma, döngüsel desenler"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "Bölünebilme ve modüler aritmetik",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+Bölünebilme+ve+modüler+aritmetik"
        },
        "kaynak": {
          "ad": "PKO soru bankası",
          "yer": "İlgili bölüm — süreli çöz"
        },
        "soru": "2026 Q7",
        "sure": "~4 saat"
      },
      "mebKarsiligi": {
        "durum": "yok",
        "not": "Modüler aritmetik 9–12 programında yok."
      }
    },
    {
      "id": "M16",
      "hat": "M",
      "ad": "Sayı teorisi temelleri: bölünebilme, EBOB/EKOK, Öklid, asallar",
      "puan": 2,
      "faz": 9,
      "blok": "B4",
      "hafta": 36,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [],
      "kapsam": {
        "ogren": [
          "Bölünebilme kuralları ve bölen sayısı formülü d(n)",
          "EBOB/EKOK; EBOB(a,b)·EKOK(a,b) = a·b",
          "Öklid algoritması — hem el hesabı hem özyineli kod hâli",
          "Asal çarpanlara ayırma; asallık testi √n'e kadar deneme"
        ],
        "dikkat": [
          "DUR: Fermat/Euler/Wilson teoremleri ve Çin kalan teoremi GEREKMİYOR (0/150)"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "EBOB – EKOK",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+EBOB+–+EKOK"
        },
        "kaynak": {
          "ad": "PKO soru bankası",
          "yer": "İlgili bölüm — süreli çöz"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~8 saat"
      },
      "mebKarsiligi": {
        "durum": "yok",
        "not": "Bölünebilme, EBOB/EKOK ve Öklid algoritması lise programında yok — ortaokul (6–8. sınıf) konusu."
      }
    },
    {
      "id": "C1",
      "hat": "C",
      "ad": "Veri tipleri, boyutlar, taşma davranışı",
      "puan": 1,
      "faz": 2,
      "blok": null,
      "hafta": null,
      "beklemede": true,
      "beklemeNedeni": "K16 — bilgisayar erişimi yok, W6 kapanışında yerleştirilecek",
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [],
      "kapsam": {
        "ogren": [
          "char, short, int, long, long long tipik boyutları",
          "signed vs unsigned değer aralıkları",
          "Taşma: unsigned sarmalanır, signed TANIMSIZ davranış",
          "sizeof operatörü ve dönüş tipi",
          "float/double kabaca",
          "Sınav varsayımı: genelde int = 4 byte"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "C veri tipleri ve bellek",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+veri+tipleri+ve+bellek"
        },
        "kaynak": {
          "ad": "gateoverflow.in",
          "yer": "C → Data Types & overflow"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~4 saat"
      }
    },
    {
      "id": "C2",
      "hat": "C",
      "ad": "Operatör önceliği ve birleşme yönü",
      "puan": 2,
      "faz": 2,
      "blok": null,
      "hafta": null,
      "beklemede": true,
      "beklemeNedeni": "K16 — bilgisayar erişimi yok, W6 kapanışında yerleştirilecek",
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "C1"
      ],
      "kapsam": {
        "ogren": [
          "Öncelik sırası: () [] → ++ -- ! ~ → * / % → + - → << >> → < > → == != → & → ^ → | → && → || → ?: → =",
          "Birleşme yönü: çoğu soldan sağa, atama ve tekli operatörler sağdan sola",
          "Zincir atama: a = b = c sağdan çözülür",
          "?: üçlü operatörü",
          "Virgül operatörü ve değeri"
        ],
        "dikkat": [
          "TUZAK: << ile + karışması, & ile == karışması (parantez gerekir)"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "C operatörler ve öncelik",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+operatörler+ve+öncelik"
        },
        "kaynak": {
          "ad": "gateoverflow.in",
          "yer": "C → Operator precedence"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~8 saat"
      }
    },
    {
      "id": "C3",
      "hat": "C",
      "ad": "a++ vs ++a, yan etkiler",
      "puan": 3,
      "faz": 2,
      "blok": null,
      "hafta": null,
      "beklemede": true,
      "beklemeNedeni": "K16 — bilgisayar erişimi yok, W6 kapanışında yerleştirilecek",
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "C2"
      ],
      "kapsam": {
        "ogren": [
          "Ön ek (++a) vs son ek (a++): ifadenin değeri ne zaman alınır",
          "b = a++ ile b = ++a farkı",
          "Dizi indisinde kullanım: arr[i++]",
          "Sıra noktası (sequence point) kavramı",
          "TANIMSIZ: i = i++ + ++i gibi ifadeler",
          "Sınav genelde tek yan etkili net örnekler sorar"
        ],
        "dikkat": [
          "★ v4.0 EKİ (K13): Tek koşulda birden çok yan etki — if (--x > y++ && x-- == ++y) tipi",
          "★ v4.0 EKİ: Kısa devre ile yan etkinin birleşimi — sağdaki işlenen hiç çalışmayabilir"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "C artırma azaltma operatörleri",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+artırma+azaltma+operatörleri"
        },
        "kaynak": {
          "ad": "gateoverflow.in",
          "yer": "C → Side effects, sequence points"
        },
        "soru": "2025 Q39 (çoklu yan etki)",
        "sure": "~12 saat"
      }
    },
    {
      "id": "C7",
      "hat": "C",
      "ad": "Döngü takibi: for/while/do-while, break/continue",
      "puan": 3,
      "faz": 2,
      "blok": null,
      "hafta": null,
      "beklemede": true,
      "beklemeNedeni": "K16 — bilgisayar erişimi yok, W6 kapanışında yerleştirilecek",
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "C3"
      ],
      "kapsam": {
        "ogren": [
          "for / while / do-while birbirine çevirme",
          "Döngü değişkeninin döngü BİTTİKTEN sonraki değeri",
          "break vs continue davranışı",
          "İç içe döngüde break hangi döngüden çıkar",
          "YÖNTEM: kağıda iterasyon tablosu çıkar (i, koşul, gövde, çıktı)"
        ],
        "dikkat": [
          "TUZAK: for(...); noktalı virgül (boş gövde)",
          "★ v4.0 EKİ (K13): İç içe döngülerde toplam yineleme sayısını sayma (i<j koşullu üçgen döngüler)",
          "★ v4.0 EKİ: Çarpımsal ilerleyen döngüler (i=i<<1, j*=2) ve logaritmik yineleme sayısı",
          "★ v4.0 EKİ: Döngü değişkeninin gövde içinde değiştirilmesi (j = i++ tipi)"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "C döngüler",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+döngüler"
        },
        "kaynak": {
          "ad": "gateoverflow.in",
          "yer": "C → Loop counting"
        },
        "soru": "2026 Q36 · 2025 Q40 · 2024 Q44",
        "sure": "~12 saat"
      }
    },
    {
      "id": "C4",
      "hat": "C",
      "ad": "Tip dönüşümleri, integer promotion",
      "puan": 1,
      "faz": 2,
      "blok": null,
      "hafta": null,
      "beklemede": true,
      "beklemeNedeni": "K16 — bilgisayar erişimi yok, W6 kapanışında yerleştirilecek",
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "C7"
      ],
      "kapsam": {
        "ogren": [
          "Örtük dönüşüm kuralları (usual arithmetic conversions)",
          "Integer promotion: char/short → int",
          "signed ve unsigned karışık işlemde unsigned kazanır",
          "Tam sayı bölmesi: 5/2 = 2, 5.0/2 = 2.5",
          "Açık dönüşüm (cast) ve veri kaybı"
        ],
        "dikkat": [
          "TUZAK: int/int sonucunu float'a atamak"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "C tip dönüşümü",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+tip+dönüşümü"
        },
        "kaynak": {
          "ad": "gateoverflow.in",
          "yer": "C → Type conversion"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~4 saat"
      }
    },
    {
      "id": "C6",
      "hat": "C",
      "ad": "Koşullar ve kısa devre değerlendirme",
      "puan": 1,
      "faz": 2,
      "blok": null,
      "hafta": null,
      "beklemede": true,
      "beklemeNedeni": "K16 — bilgisayar erişimi yok, W6 kapanışında yerleştirilecek",
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "C4",
        "M19"
      ],
      "kapsam": {
        "ogren": [
          "&& ve || kısa devre davranışı",
          "Yan etkili ifadenin ÇALIŞMAMASI: a++ && b++",
          "C'de doğruluk: 0 yanlış, sıfırdan farklı doğru",
          "M19'daki De Morgan'ın koşula uygulanması"
        ],
        "dikkat": [
          "TUZAK: a < b < c zincirleme karşılaştırma",
          "TUZAK: = ile == karışması"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "C koşul ifadeleri",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+koşul+ifadeleri"
        },
        "kaynak": {
          "ad": "gateoverflow.in",
          "yer": "C → Short-circuit evaluation"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~4 saat"
      }
    },
    {
      "id": "C5",
      "hat": "C",
      "ad": "Bit operatörleri",
      "puan": 3,
      "faz": 2,
      "blok": null,
      "hafta": null,
      "beklemede": true,
      "beklemeNedeni": "K16 — bilgisayar erişimi yok, W6 kapanışında yerleştirilecek",
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "C6",
        "M18"
      ],
      "kapsam": {
        "ogren": [
          "&, |, ^, ~ doğruluk tabloları",
          "<< ve >> kaydırma; 2^k ile çarpma/bölme karşılığı",
          "Maskeleme: bit okuma x&(1<<k), set etme, temizleme, çevirme",
          "XOR özellikleri: x^x=0, x^0=x, XOR ile takas",
          "İşaretli sayıda >> davranışı (aritmetik kaydırma)",
          "M18'deki ikilik gösterim burada doğrudan kullanılır"
        ],
        "dikkat": [
          "★ v4.0 EKİ (K13): x & (x−1) — en sağdaki 1 bitini sıfırlar (2'nin kuvveti testi)",
          "★ v4.0 EKİ: popcount döngüsü — while(n){c += n&1; n >>= 1;}",
          "★ v4.0 EKİ: XOR ile takas ve XOR'un kendini götürme özelliği (a^b^b = a)",
          "★ v4.0 EKİ: n ^ (1 << m) — m. biti ters çevirme"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "bit düzeyi operatörler",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+bit+düzeyi+operatörler"
        },
        "kaynak": {
          "ad": "gateoverflow.in",
          "yer": "C → Bit manipulation"
        },
        "soru": "2026 Q35, Q44, Q50 · 2024 Q46",
        "sure": "~12 saat"
      }
    },
    {
      "id": "C8",
      "hat": "C",
      "ad": "Diziler ve bellek yerleşimi",
      "puan": 2,
      "faz": 4,
      "blok": "B1",
      "hafta": 9,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "C5"
      ],
      "kapsam": {
        "ogren": [
          "Dizi bildirimi, 0 tabanlı indisleme",
          "Bellekte ardışık (contiguous) yerleşim",
          "sizeof(dizi) ve eleman sayısı hesaplama",
          "Sınır dışı erişimin tanımsız davranış olması",
          "İlk değer atama: int a[5] = {0} ne yapar",
          "Dizinin fonksiyona geçirilmesi (C10'un ön izlemesi)"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "C diziler",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+diziler"
        },
        "kaynak": {
          "ad": "gateoverflow.in",
          "yer": "C → Arrays"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~8 saat"
      }
    },
    {
      "id": "C9",
      "hat": "C",
      "ad": "Pointer temelleri: &, *, pointer aritmetiği",
      "puan": 3,
      "faz": 4,
      "blok": "B1",
      "hafta": 12,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "C8"
      ],
      "kapsam": {
        "ogren": [
          "& (adres alma) ve * (içeriğe erişme)",
          "Pointer bildirimi; tipin neden önemli olduğu",
          "Pointer aritmetiği: p+1, tipin boyutu kadar ilerler",
          "NULL pointer ve kontrolü",
          "Pointer'a pointer (**p)",
          "void* kavramı",
          "YÖNTEM: her problemde bellek diyagramı çiz"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "C pointer gösterici",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+pointer+gösterici"
        },
        "kaynak": {
          "ad": "gateoverflow.in",
          "yer": "C → Pointers"
        },
        "soru": "2026 Q45 · 2025 Q43",
        "sure": "~12 saat"
      }
    },
    {
      "id": "C10",
      "hat": "C",
      "ad": "Dizi–pointer eşdeğerliği",
      "puan": 2,
      "faz": 4,
      "blok": "B1",
      "hafta": 13,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "C9"
      ],
      "kapsam": {
        "ogren": [
          "arr[i] ≡ *(arr+i) ≡ *(i+arr) ≡ i[arr]",
          "Dizi adının pointer'a bozunması (array decay)",
          "Dizi vs pointer farkı: sizeof davranışı",
          "Fonksiyona dizi geçirince boyut bilgisi neden kaybolur",
          "Pointer farkı (p2−p1) eleman sayısı verir"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "C dizi ve pointer ilişkisi",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+dizi+ve+pointer+ilişkisi"
        },
        "kaynak": {
          "ad": "gateoverflow.in",
          "yer": "C → Array–pointer equivalence"
        },
        "soru": "2026 Q37",
        "sure": "~8 saat"
      }
    },
    {
      "id": "C11",
      "hat": "C",
      "ad": "Çok boyutlu diziler ve pointer'lar",
      "puan": 2,
      "faz": 6,
      "blok": "B2",
      "hafta": 17,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "C10"
      ],
      "kapsam": {
        "ogren": [
          "int a[3][4] bellekte satır sıralı (row-major) yerleşim",
          "a[i][j] ≡ *(*(a+i)+j)",
          "Fonksiyona geçirirken ikinci boyut neden zorunlu",
          "Pointer dizisi (int* a[]) vs 2B dizi (int a[][]) farkı",
          "sizeof davranışları"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "C iki boyutlu diziler",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+iki+boyutlu+diziler"
        },
        "kaynak": {
          "ad": "gateoverflow.in",
          "yer": "C → 2D arrays"
        },
        "soru": "2026 Q43",
        "sure": "~8 saat"
      }
    },
    {
      "id": "C12",
      "hat": "C",
      "ad": "Stringler: null sonlandırma, string.h",
      "puan": 1,
      "faz": 6,
      "blok": "B2",
      "hafta": 17,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "C11"
      ],
      "kapsam": {
        "ogren": [
          "char dizisi + '\\0' sonlandırıcı; \"abc\" gerçekte 4 byte",
          "strlen, strcpy, strcmp, strcat davranışları ve dönüş değerleri",
          "strlen vs sizeof farkı",
          "String literal değiştirilemez (read-only)"
        ],
        "dikkat": [
          "TUZAK: sonlandırıcıyı unutmak, buffer taşması"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "C karakter dizileri string",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+karakter+dizileri+string"
        },
        "kaynak": {
          "ad": "gateoverflow.in",
          "yer": "C → Strings"
        },
        "soru": "2026 Q41",
        "sure": "~4 saat"
      }
    },
    {
      "id": "C13",
      "hat": "C",
      "ad": "C fonksiyonları: parametre geçirme (değer/referans)",
      "puan": 1,
      "faz": 6,
      "blok": "B2",
      "hafta": 17,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "C12"
      ],
      "kapsam": {
        "ogren": [
          "C'de HER ŞEY değer ile geçer (pass by value)",
          "Referans etkisi pointer ile nasıl elde edilir",
          "Dizi geçirmenin neden 'referans gibi' davrandığı",
          "Yerel değişken, kapsam (scope), yaşam süresi",
          "static yerel değişken davranışı (çağrılar arası kalıcılık)",
          "NOT: bu C alt programı; M20'deki matematiksel fonksiyonla ilgisi yok"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "C fonksiyonlar",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+fonksiyonlar"
        },
        "kaynak": {
          "ad": "gateoverflow.in",
          "yer": "C → Functions, parameter passing"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~4 saat"
      }
    },
    {
      "id": "C14",
      "hat": "C",
      "ad": "Özyineleme (recursion): çağrı yığını takibi",
      "puan": 3,
      "faz": 6,
      "blok": "B2",
      "hafta": 20,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "C13"
      ],
      "kapsam": {
        "ogren": [
          "Taban durum ve özyinelemeli adım",
          "Çağrı yığınının (call stack) büyümesi ve küçülmesi",
          "Yığın çerçevesi (stack frame): her çağrının kendi yerel değişkenleri",
          "Yığın taşması (stack overflow) ne zaman olur",
          "YÖNTEM: çağrı ağacı çizerek adım adım izleme",
          "Kuyruk özyinelemesi (tail recursion) kavramı",
          "BAĞLANTI: adım sayısı M12'deki yineleme bağıntısıyla yazılır"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "özyineleme recursion",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+özyineleme+recursion"
        },
        "kaynak": {
          "ad": "pythontutor.com",
          "yer": "Özyineleme: çağrı yığınını görsel izle"
        },
        "soru": "2026 Q38, Q39, Q47 · 2024 Q40",
        "sure": "~12 saat"
      }
    },
    {
      "id": "C21",
      "hat": "C",
      "ad": "**Özyineleme**: çoklu dallanma, çağrı sayısı, ağaç yapısı — *kod*",
      "puan": 2,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "C14"
      ],
      "kapsam": {
        "ogren": [
          "İki veya daha fazla özyineli çağrı içeren fonksiyonlar: f(n-1) + f(n-2), foo(n-1) iki kez",
          "Çağrı ağacını çizme; toplam çağrı sayısını yaprak/düğüm sayısından okuma",
          "Aynı fonksiyonun kaç kez çalıştığını sayma (yazdırma sayısı ≠ çağrı sayısı)",
          "Memoization varken çağrı sayısının nasıl düştüğü (A26 ile bağla)"
        ],
        "dikkat": [
          "KLASİK SORU: \"foo(3) çağrılırsa ekrana kaç yıldız basar\" — 2^n−1 kalıbı",
          "TUZAK: çağrıdan ÖNCE ve SONRA yazdırma birlikte olduğunda sıra",
          "DUR: kuyruk özyinelemesi optimizasyonu (tail call) gerekmiyor"
        ]
      },
      "faz": 6,
      "blok": "B2",
      "hafta": 21,
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "özyineleme çağrı ağacı",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+özyineleme+çağrı+ağacı"
        },
        "kaynak": {
          "ad": "pythontutor.com",
          "yer": "Özyineleme: çağrı AĞACI, yaprak/düğüm sayma"
        },
        "soru": "2026 Q40, Q42, Q48 · 2024 Q41",
        "sure": "~8 saat"
      },
      "mebKarsiligi": {
        "durum": "yok"
      }
    },
    {
      "id": "C15",
      "hat": "C",
      "ad": "Özyineleme: çıktı sırası (ön/son işlem)",
      "puan": 3,
      "faz": 6,
      "blok": "B3",
      "hafta": 23,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "C14"
      ],
      "kapsam": {
        "ogren": [
          "printf özyinelemeli çağrıdan ÖNCE vs SONRA olması",
          "Ön işlem (pre-order) vs son işlem (post-order) çıktısı",
          "Çoklu özyinelemede (f(n-1) ve f(n-2)) çağrı sırası",
          "Fibonacci çağrı ağacı ve tekrar eden hesaplamalar"
        ],
        "dikkat": [
          "KLASİK SORU: f(n){print(n);f(n-1);} ile f(n){f(n-1);print(n);} farkı"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "özyineleme çalışma sırası",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+özyineleme+çalışma+sırası"
        },
        "kaynak": {
          "ad": "pythontutor.com",
          "yer": "Özyineleme: çağrı öncesi/sonrası yazdırma sırası"
        },
        "soru": "2026 Q42 · 2025 Q45",
        "sure": "~12 saat"
      }
    },
    {
      "id": "C16",
      "hat": "C",
      "ad": "struct, union, typedef",
      "puan": 1,
      "faz": 9,
      "blok": "B3",
      "hafta": 28,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "C15"
      ],
      "kapsam": {
        "ogren": [
          "struct tanımı; üye erişimi . ve ->",
          "Bellek hizalama (padding) ve sizeof sürprizleri",
          "İç içe struct",
          "union: aynı belleği paylaşan üyeler",
          "typedef ile isim kısaltma",
          "Kendine referans veren struct (bağlı liste düğümü — A8'in ön koşulu)"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "C yapılar struct",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+yapılar+struct"
        },
        "kaynak": {
          "ad": "gateoverflow.in",
          "yer": "C → Structures & padding"
        },
        "soru": "2026 Q34",
        "sure": "~4 saat"
      }
    },
    {
      "id": "C20",
      "hat": "C",
      "ad": "Tanımsız davranış, off-by-one, yaygın tuzaklar",
      "puan": 1,
      "faz": 9,
      "blok": "B4",
      "hafta": 35,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "C7",
        "C9"
      ],
      "kapsam": {
        "ogren": [
          "Tanımsız davranış kataloğu: sınır dışı erişim, ilklenmemiş değişken, signed taşma, i=i++",
          "Off-by-one: <= vs <, dizinin son indisi n−1",
          "Tam sayı bölmesinde kayıp",
          "= ile == karışması",
          "Kısa devre yüzünden çalışmayan yan etki",
          "Makro tuzakları: #define kare(x) x*x → kare(a+b)",
          "sizeof(dizi) fonksiyon içinde neden bozulur"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "C tanımsız davranış undefined behavior",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+tanımsız+davranış+undefined+behavior"
        },
        "kaynak": {
          "ad": "van der Linden",
          "yer": "İlgili bölümler — sadece W37"
        },
        "soru": "C bloğuna yayılmış tuzaklar",
        "sure": "~4 saat"
      }
    },
    {
      "id": "A1",
      "hat": "A",
      "ad": "Karmaşıklık: büyük O, en iyi/ortalama/en kötü",
      "puan": 2,
      "faz": 4,
      "blok": "B1",
      "hafta": 8,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [],
      "kapsam": {
        "ogren": [
          "Büyük O tanımı ve sezgisel anlamı",
          "Sınıflar: O(1), O(log n), O(n), O(n log n), O(n²), O(2^n), O(n!)",
          "Baskın terim; sabitlerin ve alt terimlerin atılması",
          "En iyi / ortalama / en kötü durum ayrımı",
          "İç içe döngüden karmaşıklık okuma",
          "Ω ve Θ kabaca"
        ],
        "dikkat": [
          "DUR: master teoremi gerekmiyor, böl-yönet sezgisi yeterli"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "algoritma karmaşıklık analizi big O",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+algoritma+karmaşıklık+analizi+big+O"
        },
        "kaynak": {
          "ad": "visualgo.net",
          "yer": "Big-O / karmaşıklık modülü"
        },
        "soru": "2026 Q9 · 2024 Q38",
        "sure": "~8 saat"
      }
    },
    {
      "id": "A2",
      "hat": "A",
      "ad": "Doğrusal arama, ikili arama (binary search) — algoritma",
      "puan": 1,
      "faz": 4,
      "blok": "B1",
      "hafta": 11,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "A1",
        "C8"
      ],
      "kapsam": {
        "ogren": [
          "Doğrusal arama O(n)",
          "İkili arama O(log n); ÖN KOŞUL: dizi sıralı olmalı",
          "Adım adım izleme: kaç karşılaştırma yapıldı, hangi aralık kaldı",
          "lower_bound / upper_bound mantığı",
          "BONUS: cevap üzerinde ikili arama (parametrik arama)",
          "NOT: bu bir ALGORİTMA; A10'daki BST bir VERİ YAPISI"
        ],
        "dikkat": [
          "TUZAK: while(l<r) vs while(l<=r), orta = l+(r−l)/2"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "ikili arama binary search",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+ikili+arama+binary+search"
        },
        "kaynak": {
          "ad": "visualgo.net",
          "yer": "Binary Search + quiz"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~4 saat"
      }
    },
    {
      "id": "A3",
      "hat": "A",
      "ad": "Basit sıralamalar: kabarcık, seçme, ekleme",
      "puan": 2,
      "faz": 4,
      "blok": "B1",
      "hafta": 11,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "A2"
      ],
      "kapsam": {
        "ogren": [
          "Üç algoritmanın adım adım çalışması",
          "Karmaşıklıkları; karşılaştırma ve takas sayıları",
          "Kararlılık (stability) kavramı: hangisi kararlı",
          "Kısmen sıralı dizide ekleme sıralamasının avantajı"
        ],
        "dikkat": [
          "KLASİK SORU: k. geçişten sonra dizinin durumu ne olur"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "sıralama algoritmaları",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+sıralama+algoritmaları"
        },
        "kaynak": {
          "ad": "visualgo.net",
          "yer": "Sorting (bubble, selection, insertion)"
        },
        "soru": "2026 Q20 (pancake sort)",
        "sure": "~8 saat"
      }
    },
    {
      "id": "A21",
      "hat": "A",
      "ad": "Böl ve yönet paradigması",
      "puan": 1,
      "faz": 5,
      "blok": "B2",
      "hafta": 15,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "A3"
      ],
      "kapsam": {
        "ogren": [
          "Üç adım: böl, çöz, birleştir",
          "Karmaşıklığı yineleme bağıntısıyla yazma: T(n)=2T(n/2)+n",
          "Örnekler: ikili arama, merge sort, hızlı üs alma",
          "Ne zaman uygulanabilir, ne zaman uygulanamaz"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "böl ve yönet divide and conquer",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+böl+ve+yönet+divide+and+conquer"
        },
        "kaynak": {
          "ad": "visualgo.net",
          "yer": "Merge Sort — böl-yönet mantığı"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~4 saat"
      }
    },
    {
      "id": "A4",
      "hat": "A",
      "ad": "Birleştirme sıralaması (merge sort)",
      "puan": 1,
      "faz": 5,
      "blok": "B2",
      "hafta": 16,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "A21"
      ],
      "kapsam": {
        "ogren": [
          "Birleştirme (merge) adımı nasıl çalışır, kaç karşılaştırma",
          "O(n log n) — her durumda aynı",
          "Kararlı sıralama",
          "O(n) ek bellek gereksinimi",
          "UYGULAMA: ters çift (inversion) sayma"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "birleştirme sıralaması merge sort",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+birleştirme+sıralaması+merge+sort"
        },
        "kaynak": {
          "ad": "visualgo.net",
          "yer": "Merge Sort"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~4 saat"
      }
    },
    {
      "id": "A5",
      "hat": "A",
      "ad": "Hızlı sıralama (quicksort)",
      "puan": 1,
      "faz": 5,
      "blok": "B2",
      "hafta": 16,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "M9",
        "A21"
      ],
      "kapsam": {
        "ogren": [
          "Pivot seçimi ve bölümleme (partition) adım adım",
          "Ortalama O(n log n), en kötü O(n²)",
          "En kötü durum NE ZAMAN oluşur (sıralı dizi + kötü pivot)",
          "Kararsız sıralama",
          "Yerinde (in-place) çalışması",
          "Quickselect: k. en küçük elemanı bulma"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "hızlı sıralama quick sort",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+hızlı+sıralama+quick+sort"
        },
        "kaynak": {
          "ad": "visualgo.net",
          "yer": "Quick Sort"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~4 saat"
      }
    },
    {
      "id": "A6",
      "hat": "A",
      "ad": "Sayma / kova / radix sıralama",
      "puan": 1,
      "faz": 5,
      "blok": "B2",
      "hafta": 16,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "A5"
      ],
      "kapsam": {
        "ogren": [
          "Counting sort: değer aralığı küçükken O(n+k)",
          "Karşılaştırma tabanlı sıralamanın O(n log n) ALT SINIRI ve bunların neden aşabildiği",
          "Radix sort: basamak basamak, LSD/MSD",
          "Bucket sort mantığı",
          "Ne zaman kullanılır, ne zaman kullanılmaz"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "sayma sıralaması counting sort",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+sayma+sıralaması+counting+sort"
        },
        "kaynak": {
          "ad": "visualgo.net",
          "yer": "Radix / Counting Sort"
        },
        "soru": "2025 Q29",
        "sure": "~4 saat"
      }
    },
    {
      "id": "A7",
      "hat": "A",
      "ad": "Yığın (stack) ve kuyruk (queue)",
      "puan": 3,
      "faz": 6,
      "blok": "B3",
      "hafta": 24,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "C15"
      ],
      "kapsam": {
        "ogren": [
          "Stack: LIFO — push, pop, top",
          "Queue: FIFO — enqueue, dequeue, front",
          "Dizi ve bağlı liste ile gerçekleme",
          "Dairesel kuyruk (circular queue) ve dolu/boş ayrımı",
          "UYGULAMALAR: parantez eşleme, postfix hesaplama, çağrı yığını, BFS",
          "Deque kavramı"
        ],
        "dikkat": [
          "★ v4.0 EKİ (K13): Yığın üzerinde koşullu kural izleme — \"üstteki eleman x'e eşitse sil, değilse |üst−x| ile değiştir\"",
          "★ v4.0 EKİ: Bir dizinin yığınla işlendiğinde son durumunu elle simüle etme"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Türkçe \"Veri Yapıları ve Algoritmalar\" ders serileri",
          "ara": "yığın stack ve kuyruk queue",
          "url": "https://www.youtube.com/results?search_query=veri+yapıları+yığın+stack+ve+kuyruk+queue"
        },
        "kaynak": {
          "ad": "visualgo.net",
          "yer": "Stack & Queue"
        },
        "soru": "2026 Q16–17 (İKİLİ KÜME, yığın izleme)",
        "sure": "~12 saat"
      }
    },
    {
      "id": "A13",
      "hat": "A",
      "ad": "Graf gösterimi: komşuluk matrisi ve listesi",
      "puan": 2,
      "faz": 7,
      "blok": "B3",
      "hafta": 25,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [],
      "kapsam": {
        "ogren": [
          "Terminoloji: yönlü/yönsüz, ağırlıklı, derece, yol, döngü, bağlantılı bileşen",
          "Komşuluk matrisi: O(V²) yer, O(1) kenar sorgusu",
          "Komşuluk listesi: O(V+E) yer, komşuları gezmek hızlı",
          "Hangisi ne zaman tercih edilir",
          "Kenar listesi gösterimi",
          "Derece toplamı = 2E (el sıkışma lemması)"
        ],
        "dikkat": [
          "★ v4.0 EKİ (K13): Komşuluk matrisindeki 1 sayısı yönsüz basit çizgede 2e'dir",
          "★ v4.0 EKİ: Matris simetrisi, satırdaki 1 sayısı = derece; bellek O(V²) vs O(V+E)"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "graf gösterimi komşuluk matrisi listesi",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+graf+gösterimi+komşuluk+matrisi+listesi"
        },
        "kaynak": {
          "ad": "Gürlü · Olimpik Sonlu Matematik",
          "yer": "Graf Teori"
        },
        "soru": "2024 Q15 · 2025 Q35 · 2026 Q29",
        "sure": "~8 saat"
      }
    },
    {
      "id": "A14",
      "hat": "A",
      "ad": "BFS ve DFS",
      "puan": 2,
      "faz": 7,
      "blok": "B3",
      "hafta": 25,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "A13",
        "A7"
      ],
      "kapsam": {
        "ogren": [
          "BFS: kuyruk kullanır, katman katman, ağırlıksız grafta en kısa yol",
          "DFS: yığın/özyineleme kullanır, derinlemesine",
          "Karmaşıklık O(V+E)",
          "UYGULAMALAR: bağlantılı bileşen sayma, döngü tespiti, iki parçalılık (bipartite)",
          "DFS ağacı; keşif ve bitiş zamanları"
        ],
        "dikkat": [
          "KLASİK SORU: verilen graftan ziyaret sırasını çıkarma"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "genişlik öncelikli arama BFS",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+genişlik+öncelikli+arama+BFS"
        },
        "kaynak": {
          "ad": "Gürlü · Olimpik Sonlu Matematik",
          "yer": "Graf Teori"
        },
        "soru": "2026 Q27",
        "sure": "~8 saat"
      }
    },
    {
      "id": "A15",
      "hat": "A",
      "ad": "Topolojik sıralama",
      "puan": 2,
      "faz": 7,
      "blok": "B3",
      "hafta": 27,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "A24"
      ],
      "kapsam": {
        "ogren": [
          "ÖN KOŞUL: yönlü çevrimsiz graf (DAG) olmalı",
          "Kahn algoritması (giren derece / in-degree yöntemi)",
          "DFS tabanlı yöntem (bitiş zamanına göre ters sıralama)",
          "Birden fazla geçerli sıralama olabilir",
          "Döngü varsa topolojik sıralama YOKTUR",
          "UYGULAMA: iş sıralama, bağımlılık çözme"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "topolojik sıralama",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+topolojik+sıralama"
        },
        "kaynak": {
          "ad": "visualgo.net",
          "yer": "Topological Sort"
        },
        "soru": "2026 Q26",
        "sure": "~8 saat"
      }
    },
    {
      "id": "A24",
      "hat": "A",
      "ad": "**DFS**: yığın, keşif/bitiş zamanları, kenar sınıflandırma",
      "puan": 3,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "A14",
        "C14"
      ],
      "kapsam": {
        "ogren": [
          "DFS'in özyineli ve yığınlı iki yazımı; komşuluk listesi sırasının çıktıyı belirlemesi",
          "Keşif zamanı d[u] ve bitiş zamanı f[u] atama; sayaç her keşif VE her bitişte artar",
          "Parantez teoremi: aralıklar ya iç içedir ya ayrıktır, kesişmez",
          "Kenar sınıflandırma: ağaç, geri (back), ileri (forward), çapraz (cross)",
          "Geri kenar ⇔ yönlü çizgede döngü var",
          "Güçlü bağlı bileşen (SCC) kavramı ve yoğuşum çizgesinin döngüsüz olması"
        ],
        "dikkat": [
          "KLASİK SORU: verilen komşuluk listesi için d[] ve f[] tablosunu doldur",
          "DUR: Tarjan/Kosaraju algoritmalarının kendisi gerekmiyor, SCC kavramı yeter"
        ]
      },
      "faz": 7,
      "blok": "B3",
      "hafta": 27,
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "derinlik öncelikli arama DFS",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+derinlik+öncelikli+arama+DFS"
        },
        "kaynak": {
          "ad": "visualgo.net",
          "yer": "Graph Traversal → DFS, adım adım"
        },
        "soru": "2026 Q30 (d[]/f[]) · 2026 Q28 (SCC) · 2025 Q33",
        "sure": "~12 saat"
      },
      "mebKarsiligi": {
        "durum": "yok"
      }
    },
    {
      "id": "A8",
      "hat": "A",
      "ad": "Bağlı liste",
      "puan": 1,
      "faz": 9,
      "blok": "B3",
      "hafta": 28,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "C16",
        "C9"
      ],
      "kapsam": {
        "ogren": [
          "Tekli, çiftli, dairesel bağlı liste",
          "Ekleme, silme, arama karmaşıklıkları",
          "Diziyle karşılaştırma: erişim O(n) vs ekleme O(1)",
          "Baş ve kuyruk işaretçileri",
          "YÖNTEM: pointer'ları kutu-ok diyagramıyla takip et"
        ],
        "dikkat": [
          "KLASİK: ters çevirme, ortayı bulma, döngü tespiti (Floyd tavşan-kaplumbağa)"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Türkçe \"Veri Yapıları ve Algoritmalar\" ders serileri",
          "ara": "bağlı liste linked list",
          "url": "https://www.youtube.com/results?search_query=veri+yapıları+bağlı+liste+linked+list"
        },
        "kaynak": {
          "ad": "visualgo.net",
          "yer": "Linked List"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~4 saat"
      }
    },
    {
      "id": "A9",
      "hat": "A",
      "ad": "İkili ağaçlar ve dolaşımlar",
      "puan": 2,
      "faz": 9,
      "blok": "B3",
      "hafta": 28,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "A8"
      ],
      "kapsam": {
        "ogren": [
          "Terminoloji: kök, yaprak, derinlik, yükseklik, derece, alt ağaç",
          "İkili ağaç türleri: tam (full), eksiksiz (complete), dengeli",
          "Dolaşımlar: preorder, inorder, postorder, level-order",
          "Düğüm sayısı ↔ yükseklik ilişkisi (2^h−1)",
          "Özyinelemeli dolaşım kodunu adım adım izleme"
        ],
        "dikkat": [
          "KLASİK SORU: iki dolaşım verilince ağacı kurma"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Türkçe \"Veri Yapıları ve Algoritmalar\" ders serileri",
          "ara": "ikili ağaç dolaşımı tree traversal",
          "url": "https://www.youtube.com/results?search_query=veri+yapıları+ikili+ağaç+dolaşımı+tree+traversal"
        },
        "kaynak": {
          "ad": "visualgo.net",
          "yer": "Binary Tree + traversal"
        },
        "soru": "2025 Q36 · 2024 Q36",
        "sure": "~8 saat"
      }
    },
    {
      "id": "A19",
      "hat": "A",
      "ad": "Açgözlü strateji ve karşı örnek",
      "puan": 3,
      "faz": 8,
      "blok": "B3",
      "hafta": 29,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "A1"
      ],
      "kapsam": {
        "ogren": [
          "Açgözlü seçim özelliği: yerel en iyi seçim global en iyiye götürür mü",
          "Doğru olduğu klasik durumlar: aktivite seçimi, en küçük ağırlıklı eşleme",
          "Sıralama kuralı çıkarma: Σw_jC_j'yi en küçükleyen sıra p_j/w_j artan sıradır (değiş-tokuş argümanı)",
          "KARŞI ÖRNEK BULMA: bir açgözlü stratejinin optimal OLMADIĞINI gösteren girdiyi seçme",
          "Eşleştirme kalıbı: en büyükle en küçüğü eşle (pil ömrü, kapasite problemleri)"
        ],
        "dikkat": [
          "TUZAK: sezgisel (heuristic) arama hızlıdır ama optimalliği garanti etmez — bu ayrım sık soruluyor",
          "DUR: ispat yazmak gerekmiyor, hangi stratejinin çalıştığını tanımak yeterli"
        ]
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "açgözlü algoritma greedy",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+açgözlü+algoritma+greedy"
        },
        "kaynak": {
          "ad": "Çıkmış sorular",
          "yer": "★ 2024 Q27–29 (ÜÇLÜ KÜME, sıralama kuralı) · 2024 Q11, Q33, Q34 · 2025 Q8, Q30 · 2026 Q31"
        },
        "soru": "2024 Q27–29 (ÜÇLÜ KÜME, sıralama kuralı) · 2024 Q11, Q33, Q34 · 2025 Q8, Q30 · 2026 Q31",
        "sure": "~12 saat"
      }
    },
    {
      "id": "A25",
      "hat": "A",
      "ad": "Huffman kodlama ve önek kodları",
      "puan": 2,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "A19",
        "A9"
      ],
      "kapsam": {
        "ogren": [
          "Frekans tablosundan Huffman ağacı kurma; her adımda en küçük iki frekansı birleştir",
          "Sol dal 0, sağ dal 1; yaprak = sembol",
          "Önek kodu (prefix-free) neden gerekli, çözümlemede belirsizliği nasıl engelliyor",
          "Ortalama kod uzunluğu hesabı: Σ (frekans × kod uzunluğu)",
          "Sıkıştırma oranı ve sabit uzunluklu kodlamayla karşılaştırma"
        ],
        "dikkat": [
          "KLASİK SORU: \"hangisi Huffman'ın adımlarından biri DEĞİLDİR\"",
          "TUZAK: eşit frekanslarda ağaç tek değildir ama ortalama uzunluk tektir",
          "DUR: aritmetik kodlama, LZW gerekmiyor"
        ]
      },
      "faz": 8,
      "blok": "B4",
      "hafta": 31,
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "huffman kodlama",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+huffman+kodlama"
        },
        "kaynak": {
          "ad": "visualgo.net",
          "yer": "Huffman Coding animasyonu"
        },
        "soru": "2025 Q23–25",
        "sure": "~8 saat"
      },
      "mebKarsiligi": {
        "durum": "yok"
      }
    },
    {
      "id": "A20",
      "hat": "A",
      "ad": "**Dinamik programlama**: yineleme bağıntısından tabloya",
      "puan": 2,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "M12",
        "A21"
      ],
      "kapsam": {
        "ogren": [
          "Optimal alt yapı ve örtüşen alt problemler — DP'yi böl-yönetten ayıran iki koşul",
          "Verilen bir yineleme bağıntısını tablo doldurarak elle çözme (aşağıdan yukarı)",
          "Klasik kalıp 1: yan yana seçilemez (maksimum bağımsız toplam) — F(i)=max(F(i-1), F(i-2)+T[i])",
          "Klasik kalıp 2: iki durum arası geçiş maliyeti (konum değiştirme, uçuş maliyeti)",
          "Klasik kalıp 3: merdiven/basamak maliyeti — F(i)=min(F(i-1),F(i-2))+c[i]"
        ],
        "dikkat": [
          "KLASİK SORU: bağıntı SANA VERİLİR, sen tabloyu doldurup sonucu bulursun. Bağıntıyı kurman istenmiyor.",
          "DUR: sırt çantası ve LCS gerekmiyor; 1. aşamada bağıntı hep veriliyor"
        ]
      },
      "faz": 8,
      "blok": "B4",
      "hafta": 32,
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "dinamik programlama",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+dinamik+programlama"
        },
        "kaynak": {
          "ad": "Claude — Prompt 4",
          "yer": "Bağıntıdan tablo doldurma — sınav bağıntıyı VERİYOR"
        },
        "soru": "2024 Q9–10 · 2025 Q12–13 · 2026 Q18–19",
        "sure": "~8 saat"
      },
      "mebKarsiligi": {
        "durum": "yok"
      }
    },
    {
      "id": "A26",
      "hat": "A",
      "ad": "**Dinamik programlama**: memoization ve çağrı sayısı",
      "puan": 2,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "A20",
        "C21"
      ],
      "kapsam": {
        "ogren": [
          "Yukarıdan aşağıya memoization: özyineli fonksiyon + önbellek dizisi",
          "Memoization'lı fonksiyonun toplam çağrı sayısı — dolu önbellekten hemen dönenler dahil",
          "Neden O(n): her alt problem bir kez hesaplanır, gerisi sabit sürede döner",
          "Memoization'sız halin üstel olması (Fibonacci ağacı) ile karşılaştırma"
        ],
        "dikkat": [
          "KLASİK SORU: \"F(n) fonksiyonu toplam kaç kez çağrılır\" → An+B biçiminde cevap",
          "TUZAK: \"kaç kez HESAPLANIR\" ile \"kaç kez ÇAĞRILIR\" farklı sayılardır"
        ]
      },
      "faz": 8,
      "blok": "B4",
      "hafta": 32,
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "memoization dinamik programlama",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+memoization+dinamik+programlama"
        },
        "kaynak": {
          "ad": "pythontutor.com",
          "yer": "Memoization'lı özyinelemede çağrı sayısını gözle say"
        },
        "soru": "2026 Q33 (F(n) kaç kez çağrılır → An+B)",
        "sure": "~8 saat"
      },
      "mebKarsiligi": {
        "durum": "yok"
      }
    },
    {
      "id": "A23",
      "hat": "A",
      "ad": "Algoritma tasarım muhakemesi: hangi adım gereksiz/yanlış",
      "puan": 3,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "A1",
        "A14"
      ],
      "kapsam": {
        "ogren": [
          "Sınavın en özgün soru tipi: bir problem + çözüm adımları verilir, \"hangisi gerekli DEĞİLDİR\" sorulur",
          "Doğru veri yapısı seçimi muhakemesi: küme (tekrar engelleme), kuyruk, sözlük, histogram",
          "Tek geçişte (single pass) hesaplanabilenler ile hesaplanamayanları ayırt etme — medyan tek geçişte bulunamaz",
          "Bir adımın maliyetinin toplam maliyet içindeki payını kestirme (bir kez yapılan iş ihmal edilir)",
          "Ön işleme + hızlı sorgu kalıbı: kümülatif dizi kurup ikili arama ile sorgulamak",
          "Sınır durumları: dizi başı/sonu taşması, ziyaret edilen düğüm işaretlemesi, sonsuz döngü",
          "Yöntem: her şıkkı ayrı ayrı doğrula; dördü doğruysa beşinci cevaptır"
        ],
        "dikkat": [
          "KLASİK SORU: \"aşağıdaki ifadelerden hangisi YANLIŞTIR / hangi adım GEREKLİ DEĞİLDİR\""
        ]
      },
      "faz": 8,
      "blok": "B4",
      "hafta": 33,
      "calisma": {
        "video": null,
        "kaynak": {
          "ad": "Çıkmış sorular",
          "yer": "★★ TEK KAYNAK. 2024 Q13, Q16, Q17, Q19 · 2025 Q27, Q28, Q29 · 2026 Q29"
        },
        "soru": "TEK KAYNAK. 2024 Q13, Q16, Q17, Q19 · 2025 Q27, Q28, Q29 · 2026 Q29",
        "sure": "~12 saat"
      },
      "mebKarsiligi": {
        "durum": "yok"
      }
    },
    {
      "id": "A10",
      "hat": "A",
      "ad": "İkili arama ağacı (BST) — veri yapısı",
      "puan": 1,
      "faz": 9,
      "blok": "B4",
      "hafta": 35,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "A9"
      ],
      "kapsam": {
        "ogren": [
          "BST özelliği: sol alt ağaç < kök < sağ alt ağaç",
          "Arama, ekleme, silme (silmenin ÜÇ durumu: yaprak, tek çocuk, iki çocuk)",
          "inorder dolaşımın sıralı çıktı vermesi",
          "Ortalama O(log n), en kötü O(n) — dejenere (zincir) ağaç",
          "Dengeleme kavramı (AVL yüzeysel)",
          "NOT: A2'deki 'ikili arama' bir ALGORİTMA, bu bir VERİ YAPISI"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Türkçe \"Veri Yapıları ve Algoritmalar\" ders serileri",
          "ara": "ikili arama ağacı BST",
          "url": "https://www.youtube.com/results?search_query=veri+yapıları+ikili+arama+ağacı+BST"
        },
        "kaynak": {
          "ad": "visualgo.net",
          "yer": "BST + quiz"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~4 saat"
      }
    },
    {
      "id": "A11",
      "hat": "A",
      "ad": "Heap, heapsort, öncelik kuyruğu",
      "puan": 1,
      "faz": 9,
      "blok": "B4",
      "hafta": 35,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "A9"
      ],
      "kapsam": {
        "ogren": [
          "Min-heap / max-heap özelliği",
          "DİZİ GÖSTERİMİ: çocuklar 2i+1 ve 2i+2, ebeveyn (i−1)/2",
          "sift-up (yukarı süzme) ve sift-down (aşağı süzme)",
          "Ekleme O(log n), kök çıkarma O(log n)",
          "Heap kurma neden O(n), O(n log n) değil",
          "Heapsort adım adım",
          "Öncelik kuyruğu olarak kullanımı",
          "SINAVDA ÇOK SIK: verilen diziden heap kurma"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Türkçe \"Veri Yapıları ve Algoritmalar\" ders serileri",
          "ara": "heap öncelik kuyruğu",
          "url": "https://www.youtube.com/results?search_query=veri+yapıları+heap+öncelik+kuyruğu"
        },
        "kaynak": {
          "ad": "visualgo.net",
          "yer": "Binary Heap"
        },
        "soru": "Konu bitince 2000–2013 arşivinde bu konuyu tara",
        "sure": "~4 saat"
      }
    },
    {
      "id": "A22",
      "hat": "A",
      "ad": "Geri izleme (backtracking)",
      "puan": 1,
      "faz": 9,
      "blok": "B4",
      "hafta": 35,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "A14"
      ],
      "kapsam": {
        "ogren": [
          "Sistematik deneme + geri dönme mantığı",
          "Karar ağacı ve budama (pruning)",
          "Klasik: n-vezir, sudoku, permütasyon üretme, alt küme üretme",
          "DFS ile ilişkisi (backtracking = budamalı DFS)",
          "Karmaşıklık genelde üstel",
          "Durum uzayı büyüklüğü hesaplama"
        ],
        "dikkat": []
      },
      "calisma": {
        "video": {
          "kanal": "Şadi Evren Şeker · Bilgisayar Kavramları",
          "ara": "geri izleme backtracking",
          "url": "https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+geri+izleme+backtracking"
        },
        "kaynak": {
          "ad": "visualgo.net",
          "yer": "Recursion / backtracking"
        },
        "soru": "2024 Q17",
        "sure": "~4 saat"
      }
    },
    {
      "id": "P2",
      "hat": "P",
      "ad": "Doğrucu/yalancı ve önerme çıkarımı bulmacaları",
      "puan": 2,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "M19"
      ],
      "kapsam": {
        "ogren": [
          "Doğrucu/yalancı: her kişi için varsayım yap, çelişki ara",
          "Kendine gönderme yapan ifadeler (\"ben yalancıyım\" tipi) ve tutarlılık",
          "Kısmi doğru ifadeler: \"iki isimden biri doğru\" tipi sayım kısıtları",
          "Verilen önerme kümesinden ÇIKARILAMAYAN sonucu bulma — dört şıkkı türet, kalan cevaptır",
          "Modus ponens, modus tollens, hipotetik tasım zinciri"
        ],
        "dikkat": [
          "TUZAK: \"veya\" kapsayıcıdır (ikisi birden olabilir) — Türkçe kullanım yanıltır"
        ]
      },
      "faz": 10,
      "blok": "B0",
      "hafta": 6,
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "önermeler mantık çıkarım",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+önermeler+mantık+çıkarım"
        },
        "kaynak": {
          "ad": "Çıkmış sorular + LSAT",
          "yer": "2024 Q30 · 2025 Q14, Q18 · LSAT basit çıkarım oyunları"
        },
        "soru": "2024 Q30 · 2025 Q14, Q18",
        "sure": "~8 saat"
      },
      "mebKarsiligi": {
        "durum": "yok"
      }
    },
    {
      "id": "P1",
      "hat": "P",
      "ad": "Kısıt bulmacaları: gruplama ve yerleştirme",
      "puan": 2,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [
        "M19",
        "P2"
      ],
      "kapsam": {
        "ogren": [
          "Koşul listesini sembolleştirme: \"A grup 1'deyse B de grup 1'de\" → A₁ → B₁",
          "Karşıt ters (contrapositive) kullanımı: ¬B₁ → ¬A₁ — çıkarımın yarısı buradan gelir",
          "Kısıt tablosu kurma; kesin olanları önce yerleştirme, sonra vaka açma",
          "Vaka ağacı: en çok kısıtlanmış nesneden dallanmaya başla, en azdan değil",
          "Çelişkiyle eleme: bir dal çelişkiye giderse tüm alt dalları düşer",
          "Soru tipleri: \"hangisi DOĞRU OLMALIDIR\", \"hangisi DOĞRU OLAMAZ\", \"hangisi MÜMKÜNDÜR\"",
          "İki nitelikli ızgara bulmacaları (kişi × renk × spor) — matris işaretleme yöntemi",
          "Zaman sınırı: bir küme 3 soruysa toplam 8 dakikayı geçmesin; kurgu bir kez kurulur, üç soruda kullanılır"
        ],
        "dikkat": []
      },
      "faz": 10,
      "blok": "B4",
      "hafta": 31,
      "calisma": {
        "video": null,
        "kaynak": {
          "ad": "LSAT Logic Games",
          "yer": "Grouping games — kronometre 8 dk/küme"
        },
        "soru": "2024 Q1–2 · 2025 Q15–17",
        "sure": "~8 saat"
      },
      "mebKarsiligi": {
        "durum": "yok"
      }
    },
    {
      "id": "P3",
      "hat": "P",
      "ad": "Oyun, tartma ve en kötü durum bulmacaları",
      "puan": 2,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "M15"
      ],
      "kapsam": {
        "ogren": [
          "Kazanan/kaybeden konum analizi: sondan geriye doğru etiketleme",
          "Nim benzeri oyunlarda periyot bulma (1,2,3 adım → mod 4)",
          "Tartma problemleri: bilgi teorisi alt sınırı — k tartımla en fazla 3^k durum ayrılır",
          "En kötü durum ile ortalama durumu ayırt etme; soru hangisini soruyor",
          "Adversaryal düşünme: rakip/şans sana en kötüsünü verirse ne olur"
        ],
        "dikkat": []
      },
      "faz": 10,
      "blok": "B4",
      "hafta": 37,
      "calisma": {
        "video": null,
        "kaynak": {
          "ad": "Gürlü · Olimpik Sonlu Matematik",
          "yer": "Oyun Stratejileri"
        },
        "soru": "TEK KAYNAK. 2025 Q20 (9 bilye) · 2025 Q21 (adım oyunu)",
        "sure": "~8 saat"
      },
      "mebKarsiligi": {
        "durum": "yok"
      }
    },
    {
      "id": "P4",
      "hat": "P",
      "ad": "Kısıt bulmacaları: çizelgeleme ve sıralama",
      "puan": 2,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [
        "P1"
      ],
      "kapsam": {
        "ogren": [
          "Zaman dilimlerine yerleştirme: gün × öğle öncesi/sonrası ızgarası",
          "Öncelik kısıtları: \"X, Y tamamlandıktan sonraki bir dilimde\" → kısmi sıralama",
          "Kapasite kısıtları: her dilimde en fazla k öğe",
          "En erken/en geç mümkün konum bulma (ileri ve geri yayılım)",
          "Bunun A15 topolojik sıralamayla akraba olduğunu gör — aynı kısmi sıra mantığı"
        ],
        "dikkat": []
      },
      "faz": 10,
      "blok": "B4",
      "hafta": 37,
      "calisma": {
        "video": null,
        "kaynak": {
          "ad": "LSAT Logic Games",
          "yer": "Sequencing & scheduling games"
        },
        "soru": "2024 Q3–5",
        "sure": "~8 saat"
      },
      "mebKarsiligi": {
        "durum": "yok"
      }
    },
    {
      "id": "L1",
      "hat": "L",
      "ad": "Logaritma, üslü ifadeler ve devirli kalanlar — tazeleme",
      "puan": 1,
      "cekirdek": true,
      "kesilebilir": false,
      "onkosul": [],
      "kapsam": {
        "ogren": [
          "log kuralları: çarpım, bölüm, üs; taban değiştirme formülü",
          "log_a(x) + log_a(y) = log_a(xy) tipi denklem çözme + tanım kümesi kontrolü",
          "Algoritma karmaşıklığı kılıfındaki log sadeleştirmeleri: log₈(n³) = log₂(n)",
          "Üslü sayılarda son basamak / mod devri: 2^100 mod 7 tipi",
          "Bu konu olimpiyat değil AYT içeriğidir; hedef derinlik değil hızdır"
        ],
        "dikkat": [
          "TUZAK: logaritmik denklemde bulunan kökün tanım kümesinde olup olmadığını kontrol et"
        ]
      },
      "faz": 10,
      "blok": "B2",
      "hafta": 15,
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "Logaritma",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+Logaritma"
        },
        "kaynak": {
          "ad": "Claude — Prompt 4",
          "yer": "★ Kitap YOK, okul dersi YOK (log 11–12. sınıf). Video + tek oturum. Hedef HIZ, derinlik değil."
        },
        "soru": "2026 Q8 (log denklemi) · 2026 Q9 (taban dönüşümü) · 2026 Q7 (üs devri)",
        "sure": "~4 saat"
      },
      "mebKarsiligi": {
        "durum": "tam",
        "sinif": 12,
        "not": "AYT müfredatında var; okul desteği mevcut."
      }
    },
    {
      "id": "L2",
      "hat": "L",
      "ad": "Polinom ve temel geometri — tazeleme",
      "puan": 1,
      "cekirdek": false,
      "kesilebilir": true,
      "onkosul": [],
      "kapsam": {
        "ogren": [
          "Polinom bölme, kalan teoremi, çarpanlara ayırma (kök verilmişse sentetik bölme)",
          "Kök–katsayı ilişkileri (yeterli, ezber gerekmez)",
          "Temel alan/çevre; bir şeklin parçalanmasında çevrenin nasıl arttığı",
          "Örüntü/limit tipi geometri sorularında \"sonsuz\" şıkkını ciddiye alma refleksi",
          "Bu konu olimpiyat değil AYT içeriğidir; hedef derinlik değil hızdır"
        ],
        "dikkat": []
      },
      "faz": 10,
      "blok": "B2",
      "hafta": 21,
      "calisma": {
        "video": {
          "kanal": "Tunç Kurt Matematik",
          "ara": "Polinomlar",
          "url": "https://www.youtube.com/results?search_query=Tunç+Kurt+Polinomlar"
        },
        "kaynak": {
          "ad": "Claude — Prompt 4",
          "yer": "★ Kitap YOK, okul dersi YOK. Video + tek oturum. Kesme listesinde 1. sırada."
        },
        "soru": "2026 Q10 (çarpanlara ayırma) · 2026 Q14 (kare parçalama çevre)",
        "sure": "~4 saat"
      },
      "mebKarsiligi": {
        "durum": "tam",
        "sinif": 10,
        "not": "AYT müfredatında var; okul desteği mevcut."
      }
    }
  ],
  "cikarilanKonular": [
    {
      "id": "M11",
      "gerekce": "0/150 — beklenen değer üç sınavın hiçbirinde sorulmadı; MEB'de de yok",
      "geriEklemeSirasi": 1
    },
    {
      "id": "M13",
      "gerekce": "0/150 — karakteristik denklem üç sınavın hiçbirinde sorulmadı",
      "geriEklemeSirasi": 2
    },
    {
      "id": "M17",
      "gerekce": "M16 ile birleştirildi (tek konu: sayı teorisi temelleri)",
      "geriEklemeSirasi": 3
    },
    {
      "id": "C17",
      "gerekce": "0/150 — malloc/free doğrudan sorulmadı",
      "geriEklemeSirasi": 4
    },
    {
      "id": "C19",
      "gerekce": "0/150 — printf/scanf format belirteci doğrudan sorulmadı",
      "geriEklemeSirasi": 5
    },
    {
      "id": "A12",
      "gerekce": "1/150 ve o da modüler aritmetik sorusuydu; K12'de sahte ön koşul olduğu zaten tespit edilmişti",
      "geriEklemeSirasi": 6
    },
    {
      "id": "A17",
      "ad": "Minimum örten ağaç (Kruskal)",
      "puan": 2,
      "gerekce": "2/150 — sadece 2024 Q6-Q7",
      "geriEklemeSirasi": 7
    },
    {
      "id": "A18",
      "ad": "Birleştir-bul (union-find)",
      "puan": 2,
      "gerekce": "Sadece Kruskal kılıfında; A17 ile birlikte gelir",
      "geriEklemeSirasi": 8
    },
    {
      "id": "A16",
      "ad": "Dijkstra",
      "puan": 2,
      "gerekce": "0/150",
      "geriEklemeSirasi": 9
    },
    {
      "id": "M21",
      "ad": "Graf sayma: derece toplamı",
      "puan": 2,
      "gerekce": "A13 kapsamına taşındı",
      "geriEklemeSirasi": null
    },
    {
      "id": "M14",
      "ad": "Catalan sayıları",
      "puan": 2,
      "gerekce": "0/150",
      "geriEklemeSirasi": 10
    },
    {
      "id": "C18",
      "ad": "Fonksiyon pointer'ları",
      "puan": 1,
      "gerekce": "0/150",
      "geriEklemeSirasi": 11
    }
  ],
  "kesmeKurali": "Bir konu ancak ÜÇ koşulu birden sağlarsa kesilebilir: (1) çekirdek olmayacak, (2) hiçbir konunun ön koşulu olmayacak, (3) 150 soruluk ampirik tabanda frekansı 2'den az olacak. v4.3: kesme sırası programatik doğrulanıyor — bağımlısı olan konu listeye giremez.",
  "sonrakiKesmeSirasi": [
    "L2",
    "P4",
    "P3",
    "A22",
    "A6",
    "A11",
    "C20",
    "A4"
  ],
  "kesmeDisiTutulan": [
    {
      "id": "M6",
      "gerekce": "150 soruda 0 ama 1 puanlık ve klasik bir olimpiyat aracı; kesmek riski karşılamaz"
    },
    {
      "id": "C20",
      "gerekce": "Doğrudan 0 ama tuzak bilgisi tüm C bloğuna yayılıyor"
    }
  ],
  "haftalikIskelet": {
    "yaz": [
      {
        "gun": "Pazartesi",
        "hat": "M",
        "saat": 4
      },
      {
        "gun": "Salı",
        "hat": "C",
        "saat": 4
      },
      {
        "gun": "Çarşamba",
        "hat": "M",
        "saat": 4
      },
      {
        "gun": "Perşembe",
        "hat": "C",
        "saat": 4
      },
      {
        "gun": "Cuma",
        "hat": "M",
        "saat": 4,
        "not": "B0'da A hattı yok"
      },
      {
        "gun": "Cumartesi",
        "hat": "karma",
        "saat": 5
      },
      {
        "gun": "Pazar",
        "hat": "izin",
        "saat": 0
      }
    ],
    "donem": [
      {
        "gun": "Pazartesi",
        "hat": "M",
        "saat": 2
      },
      {
        "gun": "Salı",
        "hat": "C",
        "saat": 2
      },
      {
        "gun": "Çarşamba",
        "hat": "A",
        "saat": 2
      },
      {
        "gun": "Perşembe",
        "hat": "M",
        "saat": 2
      },
      {
        "gun": "Cuma",
        "hat": "C",
        "saat": 2
      },
      {
        "gun": "Cumartesi",
        "hat": "karma",
        "saat": 5
      },
      {
        "gun": "Pazar",
        "hat": "izin",
        "saat": 0
      }
    ]
  },
  "denemeler": [],
  "kaynakKatalogu": [
    {
      "id": "OZDEMIR2",
      "ad": "Mustafa Özdemir · Matematik Olimpiyatlarına Hazırlık 2 — Temel Bilgiler II",
      "tur": "olimpiyat-kitabi",
      "erisim": "satin-al",
      "maliyet": "₺320",
      "url": "https://www.altinnokta.com.tr/matematik-olimpiyatlarina-hazirlik--2-temel-bilgiler--2-174567-9789756146637",
      "not_": "★ M-ÜSTÜNÜN TEK KİTABI. 416 sayfa, 17. baskı, STOKTA. Kapsam: Toplamlar, Çarpımlar, Permütasyon, Kombinasyon, Dağılım, Olasılık, Binom, İspat Yöntemleri. Format: konu anlatımı → çözümlü örnek → çözümlü test → olimpiyat problemleri. İçinde TÜBİTAK ve AÜMO çıkmış soruları çözümlü. ÜCRETSİZ EK: 6 bölümün sunum PDF'i dahimatik.com/lise-olimpiyat sayfasında — kitabı almadan önce indir, bak."
    },
    {
      "id": "PKO-SB",
      "ad": "Permütasyon–Kombinasyon–Olasılık branşal soru bankası (TYT+AYT birlikte)",
      "tur": "soru-bankasi",
      "erisim": "satin-al",
      "maliyet": "₺150–250",
      "url": null,
      "not_": "★ M-TEMELİN TEK KİTABI. ⚠️ SAF AYT DEĞİL — \"TYT-AYT\" ya da \"TYT+AYT\" ibaresi olan BRANŞAL (konu bazlı) PKO fasikülü al. Gerekçe: sınavda çıkan M-temel sorularının çoğu TYT bandında (2024 Q20, 2026 Q21, 2026 Q24, 2025 Q4); saf AYT bankası gereğinden zor ve 90 sn hedefini bozar. Binom (M4) AYT bandındadır, o yüzden ikisi bir arada olan kitap gerekiyor. Ölçüt: TAM ÇÖZÜMLÜ + konu anlatımlı + zorluk kademeli. KULLANIM: TYT bandını süreli çöz (10 soru/15 dk, hedef 90 sn). AYT bandının en zor %20'sini ATLA — o seviye sınavda yok, M-üstü konularının yeri Özdemir 2."
    },
    {
      "id": "YT-SENOL",
      "ad": "YouTube · Şenol Hoca — Permütasyon, Kombinasyon, Olasılık, Binom",
      "tur": "youtube",
      "erisim": "ucretsiz",
      "maliyet": 0,
      "url": "https://www.youtube.com/results?search_query=%C5%9Fenol+hoca+perm%C3%BCtasyon+kombinasyon+olas%C4%B1l%C4%B1k",
      "not_": "★ M-TEMEL + L İÇİN KONU ANLATIMI. AYT seviyesi, Türkçe, ücretsiz. Konuya başlarken önce videoyu izle, sonra soru bankasını süreli çöz. Alternatif: Rehber Matematik \"Bebek Adımları\" oynatma listesi."
    },
    {
      "id": "YT-OZDEMIR",
      "ad": "YouTube · Prof. Dr. Mustafa Özdemir (@mozdemir07)",
      "tur": "youtube",
      "erisim": "ucretsiz",
      "maliyet": 0,
      "url": "https://www.youtube.com/@mozdemir07",
      "not_": "★ M-ÜSTÜ İÇİN VİDEO. Olimpiyat soru çözümleri (Antalya Matematik Olimpiyatı 1. aşama). OZDEMIR2 kitabının yazarı — aynı dil, aynı yöntem. Kitapla birlikte kullan."
    },
    {
      "id": "TUBITAK-ARSIV",
      "ad": "TÜBİTAK çıkmış sorular arşivi (Bilgisayar + Matematik + Ortaokul)",
      "tur": "soru-bankasi",
      "erisim": "ucretsiz",
      "maliyet": 0,
      "url": "https://bilimolimpiyatlari.tubitak.gov.tr/tr/gecmis-sinav-sorulari",
      "not_": "★ EN DEĞERLİ KAYNAK. Bilgisayar 2000–2026 (~23 sınav, 2007+ gerekçeli çözümlü). Matematik dalı 1998–2019 (M-üstü havuzu). Ortaokul (düşük seviye rampası). 2024–2026 K13'te etiketlendi → artık deneme değil, konu bazlı REFERANS."
    },
    {
      "id": "GATE",
      "ad": "GATE CSE çıkmış sorular — gateoverflow.in",
      "tur": "soru-bankasi",
      "erisim": "ucretsiz",
      "maliyet": 0,
      "url": "https://gateoverflow.in/",
      "not_": "★ C VE A HATTININ TEK SORU BANKASI. Format birebir: kod verilir, çıktı sorulur, çözümlü. ~%30'u 1. aşama seviyesinin üstünde — 3 dk'dan fazla takılma. Kolay başlangıç isterse: indiabix.com/technical/c/ (\"Find Output of Program\")."
    },
    {
      "id": "PYTUTOR",
      "ad": "pythontutor.com (C modu)",
      "tur": "arac",
      "erisim": "ucretsiz",
      "maliyet": 0,
      "url": "https://pythontutor.com/c.html",
      "not_": "★ ÖZYİNELEMENİN TEK ARACI (C hattının %33'ü). Çağrı yığınını görsel gösterir. YÖNTEM: önce KÂĞIDA çiz, sonra burada adım adım ilerlet, sapmayı bul. Derleyici doğrulaması için: godbolt.org"
    },
    {
      "id": "VISUALGO",
      "ad": "VisuAlgo.net",
      "tur": "gorsellestirme",
      "erisim": "ucretsiz",
      "maliyet": 0,
      "url": "https://visualgo.net/",
      "not_": "★ A HATTININ TEK OMURGASI. Adım adım animasyon + yerleşik QUIZ MODU (sınav formatında soru üretir). W25'te graf başlarken aç, sınava kadar kapatma."
    },
    {
      "id": "LSAT-LG",
      "ad": "LSAT Logic Games / Analytical Reasoning (2024 ÖNCESİ basım)",
      "tur": "soru-bankasi",
      "erisim": "satin-al",
      "maliyet": "₺200–500 (2.el)",
      "url": null,
      "not_": "★ P HATTININ TEK KİTABI. LSAC bölümü Ağu 2024'te kaldırdı → ~2.000 resmî soru ucuzladı ve DONDU. Format TÜBİTAK P sorularıyla birebir. ⚠️ 2024 SONRASI baskı alma. Sadece Logic Games çalış. Ücretsiz çözüm videoları: 7sage.com. KULLANIM: haftada 1 küme, kronometre 8 dk."
    },
    {
      "id": "OKUL",
      "ad": "Okul dersi (10. sınıf matematik)",
      "tur": "okul",
      "erisim": "ucretsiz",
      "maliyet": 0,
      "url": null,
      "not_": "⚠️ SADECE M-TEMEL İÇİN. 10. sınıfta permütasyon, kombinasyon, olasılık işleniyor (MEB 10.3 teması) — plan bunları W7–W15 arasında bitiriyor, yani okul dersi SENİN İÇİN TEKRAR olacak. L hattı (logaritma 11–12, polinom 10 sonu/11) bu yıl okulda GÖRÜLMÜYOR — L için okul kaynağı yoktur."
    },
    {
      "id": "PROMPT4",
      "ad": "Claude · Prompt 4 (tek konu çalışma oturumu)",
      "tur": "uretilen",
      "erisim": "ucretsiz",
      "maliyet": 0,
      "url": null,
      "not_": "Hazır kaynağı olmayan konular için. JSON'daki \"kapsam\" listesini oturum iskeleti olarak kullanır."
    },
    {
      "id": "ROSEN",
      "ad": "Kenneth H. Rosen · Ayrık Matematik ve Uygulamaları (Palme)",
      "tur": "ders-kitabi",
      "erisim": "kosullu",
      "maliyet": "₺650 (2.el) – ₺1.600",
      "url": null,
      "not_": "⚪ ARTIK ZORUNLU DEĞİL (v2.2). Özdemir 2 M-üstünü, VisuAlgo+GATE A hattını kapatıyor. Sadece W22 ölçümünde A hattı geride kalırsa ve İngilizce/kalın kitap seni yormuyorsa al. Alırsan değeri: böl. 10–11 (graf, ağaç) ve böl. 3 (karmaşıklık)."
    },
    {
      "id": "ROUGH",
      "ad": "Tim Roughgarden · Algorithms Illuminated Part 3 (Greedy & DP)",
      "tur": "ders-kitabi",
      "erisim": "kosullu",
      "maliyet": "₺400–700",
      "url": "https://www.algorithmsilluminated.org/",
      "not_": "⚪ KOŞULLU. Yazarın ders videoları YouTube'da ÜCRETSİZ — önce onları izle, kitap gerekmeyebilir. Tetikleyici: W30 denemesinde A19/A20/A25 netleri düşükse."
    },
    {
      "id": "VDL",
      "ad": "Peter van der Linden · Expert C Programming",
      "tur": "ders-kitabi",
      "erisim": "kutuphane",
      "maliyet": 0,
      "url": null,
      "not_": "⚪ Sadece C20 (tuzaklar), sadece W37. Kütüphane yeterli, satın alma."
    }
  ],
  "videoKanallari": [
    {
      "id": "TUNC",
      "ad": "Tunç Kurt Matematik",
      "hat": "M, L",
      "tercih": 1,
      "not_": "★ 1. TERCİH. Matematik ve lise cebiri konularının tamamı. Bir konuyu anlatmıyorsa aşağıdakilere bak."
    },
    {
      "id": "REHBER",
      "ad": "Rehber Matematik",
      "hat": "M, L",
      "tercih": 2,
      "not_": "Yedek. \"Bebek Adımları\" oynatma listesi daha yavaş tempolu."
    },
    {
      "id": "SADI",
      "ad": "Şadi Evren Şeker · Bilgisayar Kavramları",
      "hat": "C, A",
      "tercih": 1,
      "not_": "★ C ve algoritma için 1. tercih. Türkçe, üniversite düzeyi ama sade. Sıralama, graf, ağaç, karmaşıklık."
    },
    {
      "id": "OLIMP",
      "ad": "Olimpiyat konuları — YouTube araması",
      "hat": "M",
      "tercih": 1,
      "not_": "Bu konularda tek bir kanal yok. Verilen arama terimiyle ara, en anlaşılır anlatımı seç. Video bulamazsan Gürlü kitabı zaten omurga, video bonus."
    },
    {
      "id": "VY",
      "ad": "Türkçe \"Veri Yapıları ve Algoritmalar\" ders serileri",
      "hat": "A",
      "tercih": 2,
      "not_": "Üniversite ders kayıtları. Konu adıyla ara: \"veri yapıları [konu] konu anlatımı\"."
    }
  ]
}

```

---

## 11. AI prompt kütüphanesi

### Prompt 1 — HTML tracker'a çevir

```
Ekteki markdown planı tek dosyalık, çevrimdışı çalışan bir HTML ilerleme
takip uygulamasına çevir. Bölüm 10'daki JSON veri kaynağıdır.

EN ÖNEMLİ KURAL: SADE GÖRÜNSÜN.
Kullanıcı 10. sınıf öğrencisi. Uygulamayı açtığında "şimdi ne yapacağım"
sorusunun cevabı EKRANDA HAZIR OLMALI, aramak zorunda kalmamalı.

ANA EKRAN — sadece şunlar, başka hiçbir şey:
  • Bu hafta: W__ , şu konular
  • İlerleme: __ / 108 puan
  • Sıradaki iş: [tek bir konu kartı]
  • [Konulara git] [Takvim] [Denemeler] butonları

KONU KARTI — her konu AYNI dört satırla açılır, sırası hiç değişmez:
  📺 VİDEO   → calisma.video: kanal + arama terimi, url tıklanabilir
  📖 KAYNAK  → calisma.kaynak: ad + yer
  ✏️ SORU    → calisma.soru
  ⏱ SÜRE    → calisma.sure
  [Tamamlandı] butonu

Bu dört satırın ALTINDA, KAPALI olarak (tıklayınca açılır):
  ▸ Kapsam — ne öğreneceğim   (kapsam.ogren)
  ▸ Dikkat — tuzaklar ve DUR  (kapsam.dikkat)
  ▸ Ön koşullar               (onkosul, tıklanabilir)

KAPALI olanları asla varsayılan açık yapma. Konu açıldığında ekranda
4 satır + 3 kapalı başlık görünsün. Fazlası kafa karıştırır.

KONU LİSTESİ: hat filtresi (M/C/A/P/L), tamamlandı işaretleme, arama.
Her satır tek satır: ID · ad · puan · hafta. Kaynak bilgisi satırda GÖRÜNMESİN,
karta tıklayınca çıksın.

TAKVİM: 42 haftalık yatay şerit. Tamponlar taralı, denemeler işaretli,
aktif hafta vurgulu. Haftaya tıklayınca o haftanın konuları.

DENEMELER: beş hat ayrı net girişi (M/12, C/16, A/16, P/4, L/1),
blok başına süre, boş sayısı. Basit çizgi grafik.

AYRI SEKMEDE (ana akışı kirletmesin):
  • Karar kaydı K1–K15
  • Kaynak kataloğu ve video kanalları
  • Deneme rezervi sayacı (2024/2025/2026 = YAKILDI)
  • Sınav günü kartı: boş bırakma kuralı + süre dağılımı

UYARI ROZETLERİ (sessiz olsun, uyarı penceresi açma):
  • Ön koşulu tamamlanmadan işaretlenen konu
  • Karışabilecek isimler: M20/C13, M18/A2/A10, M12/C14-C21-C15, A20/A26

TASARIM
- Libre Baskerville (başlık) + EB Garamond (gövde)
- Derin lacivert + maun, beş hat için beş vurgu rengi
- Bol beyaz alan. Mobilde okunabilir. Karanlık mod.
- Bir ekranda 7'den fazla tıklanabilir öğe olmasın.

Tüm veri localStorage'da. JSON dışa/içe aktarım.
Tek .html dosyası, harici bağımlılık yok (font hariç).
```


### Prompt 2 — Blok kapanışı ve yeniden planlama

```
Ekteki planda bir blok bitti. Bölüm 9'daki kapanış ritüelini uygula.

GİRDİLER
- Biten blok: [B0 / B1 / ...]
- Üretken hafta sayısı: [N]
- Tamamlanan konu ID'leri: [...]
- Tamamlanamayan konu ID'leri: [...]
- Bu blokta girilen denemeler ve netleri: [...]
- Plandan sapan bir şey oldu mu: [...]

YAPMANI İSTEDİĞİM
1. Gerçekleşen hızı hesapla (puan / üretken hafta).
2. Referans hızla karşılaştır. Fark %30'dan fazlaysa sebebin konu
   zorluğu mu iskelet mi olduğunu SOR, varsayma.
3. Sonraki bloğun kapasitesini gerçek hızla yeniden boyutlandır.
4. Devredilen konuları sonraki bloğun başına yerleştir, haftaları kaydır.
   ⚠️ Zinciri koru: bir konu devredildiyse ona bağımlı olanlar da kayar
   (JSON'daki "onkosul" alanına bak).
5. Kapasite yetmiyorsa sonrakiKesmeSirasi'ndan düş. ÇEKİRDEK KONULARI
   VE BAŞKASININ ÖN KOŞULU OLANLARI DÜŞÜRME. Fazlaysa cikarilanKonular'dan
   "eklenecekFaz" alanına göre ekle.
6. Deneme netlerine bakarak hangi hattın geri kaldığını söyle.
7. Sonraki bloğun hafta hafta tablosunu üret.
8. Bölüm 2'ye eklenecek yeni karar kaydını (K11, K12...) yaz.
9. JSON'un "durum" alanını güncellenmiş haliyle ver.

Moral konuşması yapma, sayıları göster.
```


### Prompt 3 — Deneme analizi

```
Bir 1. aşama denemesi çözdüm.

- Deneme kaynağı / yıl: [...]
- M: [doğru]/12  C: [doğru]/16  A: [doğru]/16  P: [doğru]/4  L: [doğru]/1
- Blok blok harcadığım süre: M [..] dk, C [..] dk, A [..] dk, P [..] dk
- Boş bıraktıklarım: [kaç tane, hangi blokta]
- Yanlış yaptığım soruların konuları: [liste]

İSTEDİĞİM
1. Yanlışları plandaki konu ID'leriyle eşleştir.
2. Rastgele hata mı sistematik boşluk mu ayır (aynı konudan 2+ yanlış = sistematik).
3. HATAYI ÜÇE AYIR: bilgi eksiği mi, HIZ eksiği mi, dikkat hatası mı?
   - Süre yetmediyse bu bilgi sorunu değildir, müfredata iş ekleme.
   - M bloğunda 25 dakikayı aştıysam bu bir hız alarmıdır.
4. Sistematik boşluk konunun KENDİSİNDE mi ÖN KOŞULUNDA mı, ayır.
5. Boşluğun konunun "kapsam" listesindeki HANGİ MADDEYE denk geldiğini söyle.
6. Boş bıraktıklarımı denetle: kaç tanesinde bir şık elenebilirdi? (Elenebiliyorsa
   işaretlemeliydim — beklenen değer pozitif.)
7. Bunu en yakın tampon haftasına atanacak iş listesine çevir.
8. Bölüm 8'deki tabloya eklenecek satırı yaz.

Puan tahmini yapma, eşik tahmini yapma. Sadece boşlukları göster.
```

### Prompt 4 — Tek konu çalışma oturumu

```
Ekteki plandan [KONU ID] konusunu çalışacağım. Elimde [N] saat var.

Bağlam: 10. sınıf, TÜBİTAK Bilgisayar 1. aşamaya hazırlanıyorum.
Sınav çoktan seçmeli, kod yazdırmıyor, 150 dakikada 50 soru.
Bu konuda seviyem: [sıfır / temel var / tekrar].

OTURUM YAPISI
0. JSON'daki "calisma" alanını bana oku: video (kanal + arama terimi),
   kaynak (kitap + bölüm), soru (hangi çıkmış sorular). Oturumdan önce
   neyi açacağımı bileyim.
1. JSON'daki "onkosul" alanına bak. Ön koşul varsa 3-4 cümlede tazele.
2. JSON'daki "kapsam.ogren" listesini oturumun İSKELETİ olarak kullan.
   Her maddeyi sırayla işle. Kapsam dışına ÇIKMA.
3. "kapsam.dikkat" listesindeki TUZAK, KLASİK SORU ve DUR maddelerine
   özel ağırlık ver — DUR maddeleri nerede duracağımı söylüyor.
4. Her kapsam maddesi için: kavramı en kısa yoldan kur, sınavın o
   maddeyi nasıl sorduğunu 1 örnekle göster.
5. Sonunda artan zorlukta 8 problem. Cevaplar ayrı bölümde.
6. "TUZAK:" ve "KLASİK SORU:" maddelerine özel ağırlık ver.
7. "Bunu bildim" demem için 3 kontrol sorusu.

HAT BAZLI ÖZEL KURALLAR
- C hattı (K8): problem tipi "şu programı yaz" DEĞİL, "şu kod parçası ne
  yazdırır" olsun. Kağıda tahmin edip MSVC'de doğrulayacağım.
- M-temel konuları (M1,M2,M3,M4,M7,M9,M10 ve L hattı): hedef derinlik
  değil HIZ. Problemleri süreli ver, hedef soru başına 90 saniye.
  Uzun ispat gösterme; kalıbı ve kısayolu göster.
- M-üstü konuları (M5,M8,M12,M15,M16,M20,M22): normal derinlik.
- A hattı: her yapı için önce DAVRANIŞINI göster (elle izleme tablosu),
  kodunu değil. Sınav davranış soruyor.
- A23: kod veya algoritma öğretme. "Hangi adım gereksiz" tipi soruların
  ELEME MANTIĞINI öğret; her şıkkı ayrı doğrulama alışkanlığı kur.
- P hattı: teori anlatma. Doğrudan bulmaca ver, ben çözeyim, sonra benim
  yolumla en kısa yolu karşılaştır. Süreli çalışacağım (3 soru / 8 dk).

Türkçe anlat. Matematik için LaTeX kullan.
```

### Prompt 5 — Haftalık plan üret

```
Ekteki planın [W__] haftasındayım.

- Bu hafta gerçekten ayırabileceğim saat: [N]
- Geçen haftadan devreden yarım iş: [...]

Bölüm 6'dan bu haftanın konularını al, Bölüm 5'teki iskeleti kullanarak
gün gün planı üret. Her konunun "kapsam" listesini günlere böl.

Kurallar:
- İskeleti bozma (hangi gün hangi hat sabittir)
- Konu sırası Bölüm 4'teki zincire uymak zorunda
- Bir güne 1 konudan fazla ağır iş yükleme
- 3 puanlık konular haftayı tek başına alır
- P hattı atandıysa cumartesi bloğunun ilk 45 dakikasına koy
- L hattı atandıysa okul dersinin üstüne bindir, ayrı saat açma
- Cumartesi karma tekrarda o hafta işlenen hatlardan soru olsun
- Tampon haftasıysa yeni konu atama
- Saat planlanandan azsa neyi düşürdüğünü açıkça söyle
- ★ Haftanın başında "bu hafta açılacak kaynaklar" listesi ver: o haftanın
  konularının "kaynaklar" alanındaki omurga kayıtlarının birleşimi, "yer"
  bilgisiyle birlikte (hangi bölüm, hangi sorular)
```

### Prompt 6 — Yeni oturum açılışı

```
Ekteki dosya TÜBİTAK Bilgisayar 1. aşama hazırlık planım (v4.0).

Önce Bölüm 1'deki durum panelini oku, sonra Bölüm 2'deki karar kaydını.
Bu kararlar alınmış ve gerekçeleri yazılı — tekrar tartışmaya açma,
sadece yeni bilgi geldiyse revize et.

ÖNEMLİ: v4.0'taki ağırlıklar 150 soruluk ampirik etiketlemeye dayanıyor
(K13). "M hattı sınavın %40'ı" gibi eski varsayımları kullanma; ölçülen
dağılım M %24, C %33, A %32, P %9, L %3'tür.

Bugün [TARİH]. Bölüm 6'dan hangi haftada, Bölüm 4'ten hangi fazda
olduğumu bul ve teyit et.

Bugünkü işim: [...]
```

### Prompt 7 — Yeni sınav çıktığında müfredatı yeniden ölçme ★ v4.0

```
Yeni bir 1. aşama Bilgisayar sınavı yayımlandı: [YIL].
Ekte soruları var.

YAPMANI İSTEDİĞİM
1. 50 sorunun her birini ekteki planın konu ID'leriyle etiketle.
   Hiçbirine uymayanı "?" işaretle ve ne olduğunu açıkla.
2. Her soruyu seviyeye göre de işaretle: TYT/AYT seviyesi mi, üstü mü?
3. Kategori dağılımını çıkar (M / C / A / P / L) ve K13'teki 150 soruluk
   tabana ekleyerek yeni toplamı ver.
4. Hangi bulguların değiştiğini, hangilerinin sağlamlaştığını söyle.
   Tek yıllık sapmayı yapısal değişiklikle KARIŞTIRMA — bir bulgunun
   değişmesi için en az iki yılda tekrarlaması gerekir.
5. Ağırlık değişikliği gerekiyorsa hangi konuların puanı artmalı/azalmalı,
   bütçe nötr kalacak şekilde öner (toplam 108'de kalsın).
6. Bölüm 2'ye eklenecek yeni karar kaydını yaz.

Moral konuşması yapma, sayıları göster.
```

---

## 12. Perspektif

Temmuz 2026'da sıfır taban, Mayıs 2027 sınavı için anormal bir başlangıç değil. Bu sınavın erişilebilir olmasının sebebi tam olarak şu: **refleks değil, bilgi ölçüyor.** Contest reflekslerini 10 ayda edinemezsin ama C semantiğini, algoritma davranışını ve kombinatorik kalıplarını edinebilirsin.

**v4.0 bunu bir adım daha netleştirdi.** Bu sınav sandığından daha az "olimpiyat matematiği" sınavı. Gerçek olimpiyat kombinatoriği sınavın yalnızca %11'i. Geri kalanı kod izleme, algoritma davranışı, muhakeme kalıpları ve orta seviye matematiği **hızlı** yapabilme. Bunların hepsi 432 saatle edinilebilir şeyler.

432 saat koyan biriyle "yıllardır yapıyorum" diyen biri arasındaki fark 1. aşamada küçüktür. Asıl fark 2. aşamada açılır — ki oraya varmak zaten bu yılın hedefi değil.

Ama bir şey değişti: **rekabet sertleşiyor.** İki yılda başvuru %47 arttı, kontenjan sabit kaldı. Bu, planın yürütülmesindeki gevşekliğin eskisinden daha pahalı olduğu anlamına geliyor.

Ve şunu bir kenara yaz: bu planın en büyük riski geri kalmak değil, **bırakmak.** Tampon haftaları, ölçüme dayalı müfredat, puan bazlı takip, bağımlılık zinciri, kapsam sınırları — beşi de tek bir soruna karşı tasarlandı. Kötü bir hafta geçirdiğinde sistem seni cezalandırmamalı ki geri dönebilesin.

Son bir şey. v4.0'ın varlık sebebi senin bir gözlemin: *"bu soruların çoğu TYT-AYT seviyesinde."* Plan üç sürüm boyunca kendi varsayımını doğrulamıştı; onu kıran şey veriye bakmak oldu. **Bunu bir alışkanlık yap.** Prompt 7 tam olarak bunun için var.

---

## Ek · Sürüm geçmişi

| Sürüm | Tarih | Değişiklik |
|---|---|---|
| 1.0 | 26 Tem 2026 | İlk plan. 122 puan, 64 konu, blok + hız sistemi. |
| 2.0 | 26 Tem 2026 | Karar kaydı ve durum paneli eklendi. Müfredat 108 puana kısıldı (K7). |
| 3.0 | 26 Tem 2026 | Konu zinciri eklendi — 9 faz, bağımlılık sıralı. Yedi mantık hatası düzeltildi (K9). |
| 3.1 | 26 Tem 2026 | Karışabilecek isimler ayrıştırıldı, 57 konuya kapsam tanımı eklendi (K10). |
| 3.2 | 27 Tem 2026 | M hattına MEB müfredat eşleştirmesi eklendi (K11). |
| 3.3 | 27 Tem 2026 | Tam tutarlılık denetimi (K12). Üretken hafta 30 → 27. Kesme listesi düzeltildi. |
| **4.4** | **7 Ağu 2026** | W1–W2 devredildi (0 puan). C hattı B0'dan çıkarıldı, 13 M/P konusu öne çekildi (K16). Deneme #1–#4 iptal, ilk tam deneme W18'e alındı, madencilik seti tanımlandı (K17). Tracker puan-öncelikli görünüme geçti (K18). Puan (108), konu (63) ve faz (10) sayıları değişmedi. |
| **4.3** | **1 Ağu 2026** | **Tam denetim + denge düzeltmesi.** ❶ **Kitap değişimi hatası:** M19 ve P2'nin kaynağı "Gürlü Böl. 6 — İspat Yöntemleri" yazıyordu; Gürlü'de öyle bir bölüm yok (Özdemir'den taşınmış). M19 → PKO bankası TYT mantık bölümü, P2 → çıkmış sorular + LSAT. ❷ **Kesme listesi kuralını çiğniyordu:** A8, A5, C12'nin bağımlıları vardı. Liste artık programatik doğrulanıyor. ❸ **Bayrak tutarsızlığı:** M10, M16, C11, C16, A21, A10 ne çekirdek ne kesilebilirdi → kesilebilir. Artık 41+22=63. ❹ **W1 %128 → %112:** M18 W3'e taşındı. ❺ **Ağırlık dengesi:** A hattı %39 (sınav %32), P hattı %5 (sınav %9) idi. **A2 2→1, A6 2→1, A10 2→1**; açılan 3 puan **P1 2→3, P2 1→2, P4 1→2**. Yeni sapmalar: A +4, P −2. P1 ve P2 çekirdek yapıldı. |
| **4.2** | **1 Ağu 2026** | **Sunuş sadeleştirildi, içerik korundu.** Değişken uzunluktaki `kaynaklar` listesi, her konuda aynı olan **4 slotluk `calisma` kartına** çevrildi (video/kaynak/soru/süre). `kapsam` ikiye ayrıldı: `ogren` ve `dikkat` (TUZAK, KLASİK SORU, DUR). **59/63 konuya Türkçe YouTube anlatımı** atandı, her biri doğrudan arama bağlantısıyla: Tunç Kurt (matematik, lise cebiri), Şadi Evren Şeker (C, algoritma), yedek kanallar. **Özdemir 2 → Gürlü · Olimpik Sonlu Matematik** değişimi: Gürlü M6, M7, M8, M12 ve P3'ü de kapsıyor. Zorunlu kitap 3 → **2**, bütçe ₺670–1.070 → **~₺500**. Tracker promptu "ana ekranda 7'den fazla tıklanabilir öğe olmasın" kuralıyla yeniden yazıldı. |
| **4.1** | **1 Ağu 2026** | **Kaynak listesi plana dahil edildi (Bölüm 7B).** Model: hat başına bir omurga; katalog 28 → **14**, zorunlu satın alma 5 → **3 kalem** (₺670–1.070). **Özdemir 2 M-üstünün tek kitabı** oldu (stok hatası düzeltildi), **Rosen koşullu listeye indi**, Türkçe YouTube omurgaları eklendi. **TYT/AYT düzeltmesi:** M-temel için "TYT+AYT branşal PKO fasikülü" (saf AYT değil — sorular çoğunlukla TYT bandında). **L hattının okul kaynağı kaldırıldı** — logaritma ve polinom 10. sınıfta işlenmiyor; YouTube + Prompt 4 ile kapatıldı. Okul dersi desteği M-temele taşındı. |
| **4.0** | **31 Tem 2026** | **Ampirik yeniden boyutlandırma (K13, K14, K15).** 2024+2025+2026 sınavlarının 150 sorusu etiketlendi. M %40 → **%24**; M'nin yarısının TYT/AYT seviyesi olduğu tespit edildi ve hat M-temel/M-üstü diye ayrıldı. **İki yeni hat: P** (mantık kurgu, 5p) **ve L** (lise cebiri, 2p). **A20 (DP) geri eklendi** ve ikiye bölündü; açgözlü 3→5, özyineleme 5→8, graf B4→B3. **Yeni konu A23** (tasarım muhakemesi). 6 konu kesildi (M11, M13, M17, C17, C19, A12). Ön koşul grafındaki 6 kırık ve 6 ters bağ onarıldı. Süre aritmetiği ve negatif puan stratejisi eklendi. Deneme rezervi kuralı yazıldı. Konu 57 → **63**, faz 9 → **10**, puan **108 (sabit)**. |