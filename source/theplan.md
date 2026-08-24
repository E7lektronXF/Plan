# TÜBİTAK Bilim Olimpiyatları — Bilgisayar, 1. Aşama Hazırlık Planı

> **Sürüm 4.6** · Son güncelleme: 24 Ağustos 2026
> Bu dosya kendi kendine yeterlidir. Bir sonraki oturumda bunu tek başına verdiğinde, aramızda geçen tüm kararlar ve gerekçeleri Bölüm 2'de kayıtlıdır.
>
> **v4.6 — takvim yeniden yazıldı, müfredata dokunulmadı.** M20 ≈ 8 saat sürdü: `puanBasinaSaat = 4` katsayısı **doğrulandı** (K22 kapandı). Bozuk olan tek şey haftalık saat varsayımıydı — plan 25/15 diyordu, gerçek 11–12. Bu bir ölçek değil **kalibrasyon** hatasıdır; konular olduğu yerde durur, sadece kaç haftaya yayıldıkları değişir. Yerine hafta tipine bağlı **sabit saat modeli** geçti (K23: yaz 21 · yoğun 16 · standart 11 · okul sınavı 12 · TFO 6). Hatlar artık paralel değil **kademeli** yürüyor (K25): 64 saatlik seri C zinciri W7'de kesintisiz başlar, A hattı onun ucunda asılıdır. 2+ puanlık her konu **4 saatlik parçalara** bölündü (K24) — tracker artık konu değil parça sayıyor. Ve en önemlisi: **"geçmek" hedefi daha az kapsam gerektiriyor** (K26). 4 yanlış 1 doğruyu götürdüğü için yarım bilinen konu bilinmeyenden kötüdür; taahhüt **Tier B = 41 çekirdek konu / 79 puan.** Kesilen 29 puan silinmedi, kuyruğa alındı ve W35–W37'de geri çağırma penceresi var. Konu (63), puan (108) ve faz (10) sayıları değişmedi.
>
> **v4.5 kullanılmadan yerini bu belgeye bıraktı** (saat modeli yanlış temelliydi). K16, K17, K18 yürürlükte; K19–K21 buraya taşındı; K22 kapandı, yerine K23–K26 geldi.
>
> **v4.4 — B0 yeniden kuruldu.** W1–W2 tamamlanmadı, C hattı B0'dan çıkarıldı ve M hattı öne çekildi (K16). Deneme protokolü değişti: ilk tam koşullu deneme W18'e alındı, madencilik seti tanımlandı (K17). Tracker puan-öncelikli görünüme geçti (K18).
>
> **v4.0 — planın tarihindeki en büyük revizyon.** Müfredat artık varsayımla değil, **ölçümle** boyutlandırılıyor. 2024, 2025 ve 2026 birinci aşama sınavlarının **150 sorusu tek tek konu ID'siyle etiketlendi** (K13). Sonuç: M hattı %40 değil **%24**. İki yeni hat açıldı (**P** mantık kurgu, **L** lise cebiri), dinamik programlama geri eklendi, graf bloğu bir blok öne çekildi. Konu 57 → **63**, faz 9 → **10**.

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
| **Toplam süre** | 42 hafta / 6 blok / 26 üretken hafta / 4 devredilen hafta |
| **Müfredat** | **63 konu / 108 puan / 10 faz** |
| **Taahhüt kapsamı** | **Tier B — 41 çekirdek konu / 79 puan** (K26). Kuyruk 9 konu / 12 puan · kesildi 13 konu / 17 puan |
| **Saat modeli** | Hafta tipine bağlı (K23): yaz 21 · yoğun 16 · standart 11 · okul sınavı 12 · TFO 6 · dönem ort. **13,5 sa/hafta** |
| **Kapasite** | W5–W37: **375 üretken + 82 tampon = 457 sa** · W39–W42 tekrar+sınav 60 sa |
| **Konu granülerliği** | 2+ puanlık konular 4 saatlik parçalara bölünmüştür (K24) — 33 konu, 4 sa = 1 puan |
| **Ampirik taban** | 2024 + 2025 + 2026 sınavlarının 150 sorusu etiketlendi (K13) |
| **Kaynaklar** | Her konunun **çalışma kartı** JSON'un `calisma` alanında: 📺 video · 📖 kaynak · ✏️ soru · ⏱ süre |
| **Video** | 📺 Tunç Kurt Matematik (matematik) · Şadi Evren Şeker (C, algoritma) — bkz. 7B |
| **Zorunlu bütçe** | **~₺500 · 2 kitap** (Gürlü + PKO soru bankası) |
| **Öğrenci** | 10. sınıf (2026–27), TED Konya Koleji |
| **Uzun vadeli bağlam** | MIT Brain & Cognitive Sciences başvurusu, Kasım 2028 |
| **Devredilen** | W1–W4 tamamlanmadı — yalnızca M20 (2 puan) bitti, 21 puan devretti |
| **B0 durumu** | W5–W6 yeniden kuruldu; C hattı W7'de kesintisiz başlar (K25) |

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
HAFTA TİPİ            : yaz 21 / yoğun 16 / standart 11 / okul sınavı 12 / TFO 6 / tampon
BULUNDUĞUM BLOK       : B__      BLOK İÇİ HAFTA : __ / __
BULUNDUĞUM FAZ        : Faz __ (Bölüm 4)

TAMAMLANAN PUAN       : ___ / 79   (%__)   ← payda ÇEKİRDEK, 108 değil
TAMAMLANAN KONU       : ___ / 41 çekirdek
TAMAMLANAN PARÇA      : ___ / ___ (bu haftanın konularında)
GEÇEN ÜRETKEN HAFTA   : ___
ÖLÇÜLEN HIZ           : ___ puan/üretken hafta

BİRİNCİL SLOT (C→A)   : ______________________________
İKİNCİL SLOT (M/P→A)  : ______________________________

TAMAMLANAN KONU ID'LERİ:
  M: ____________________________________
  C: ____________________________________
  A: ____________________________________
  P: ____________________________________
  L: ____________________________________

TAKVİM PUANI (Σ)      : ___ / 79   (takvime göre olman gereken)
GERÇEK PUAN           : ___ / 79   (gerçekte bitirdiğin — yarım konular parça parça sayılır)
BORÇ                  : ___ puan  ≈  ___ hafta
DEVREDİLEN (yarım kalan) KONULAR:
  ______________________________________

SON DENEME            : #__ , ___/50
  (M __/12  C __/16  A __/16  P __/4  L __/1)
AÇIK SORUN / TAKILDIĞIM YER:
  ______________________________________
```

**24 Ağu 2026 itibarıyla (v4.6 açılışı):** Devredilen haftalar W1–W4. Tamamlanan tek konu **M20** — gerçek puan 2/79. Takvim puanı W5 sonunda 7/79. Devreden konular: M5, M7, M8, M9, P2 (yeni takvimde W7–W13 arasına yerleştirildi). Ölçülen hız 2,0 puan/üretken hafta.

### Referans hızlar (K23)

| Hafta tipi | Saat | Beklenen hız |
|---|---|---|
| Yaz / yarıyıl (21 sa) | 21 | ~5,0 puan |
| Yoğun (16 sa) | 16 | ~4,0 puan |
| Okul sınavı (12 sa) | 12 | ~3,0 puan |
| Standart (11 sa) | 11 | ~2,75 puan |
| TFO (6 sa) | 6 | ~1,5 puan |
| **Dönem ortalaması** | **13,5** | **~3,4 puan** |

Ölçtüğün hız beklenenin %70'inin altındaysa sorun konu zorluğunda değil, **iskelettedir**. Önce oturma saatlerini denetle, sonra kapsam kıs — ama kapsam kısma kararı artık serbest değil: **tek kapı W26'dır** (K26).

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

### K19 · Deneme bir oturumdur, bir hafta değil — 24 Ağu 2026

**Karar:** "Deneme haftası" diye bir hafta tipi yok. W18, W22, W26, W30, W34 ve W38 **saf telafi haftalarıdır**; içlerinde bir Cumartesi oturumu vardır, o kadar.

| Tür | Sınav | Analiz | Toplam |
|---|---|---|---|
| Madencilik seti (K17) | 45 dk | 45 dk | **1,5 sa** |
| Tam koşullu deneme | 150 dk | 90 dk | **4 sa** |

**Yeni saat modelinde bir ayar:** 4 saatlik deneme, 11 saatlik haftanın %36'sı — çok pahalı. Bu yüzden tam denemeler **yoğun (16 sa) veya tampon haftalarına** yerleştirildi; madencilik setleri standart haftalarda kalabilir.

**Gerekçe:** Bir haftanın tamamını tek bir oturuma ad olarak vermek, o haftanın kalan 7–12 saatini görünmez kılıyordu. Görünmeyen saat plansız saattir.

**Veri tarafı:** `haftalar[].deneme` alanı kaldırıldı; yerine `denemeler[]` dizisi geldi — `{no, tip, hafta, tarih, sinavDk, analizDk, hedefKonular}`.

### K20 · v4.5 taslağından devreden numara — içeriği aktarılmadı — 24 Ağu 2026

v4.5 kullanılmadan yerini v4.6'ya bıraktı (saat modeli yanlış temelliydi). K19 ve K21 o taslaktan buraya taşındı; **K20'nin metni revizyon belgesinde yer almıyor.**

Numara, karar kaydının sürekliliği bozulmasın diye boş bırakıldı. v4.5 taslağı bulunursa buraya yazılacak; bulunmazsa bu kayıt olduğu gibi kalır. **Yürürlükte bir hükmü yoktur** — plana etkisi olan hiçbir şey K20'ye dayanmıyor.

### K21 · K16 geri ödemesinin tetikleyicisi tarih değil, borç — 24 Ağu 2026

**Karar:** K16 aynen geçerli; değişen tek şey tetikleyicisi.

- **v4.4:** "W7'den itibaren Pazartesi M slotu C'ye geçer."
- **v4.6:** M slotu, **devreden M/P borcu kapanana kadar M'de kalır.** (Takvimde bu W13'tür.)

**Gerekçe:** Sabit tarihli geri ödeme, borcu ödemeden faizini ödemeye benziyordu. Slot takvime değil, borcun kapanmasına bağlanır.

**Veri tarafı:** `meta.cHattiErteleme.pazartesiSlotuC` artık `true` değil `"borcKapaninca"`.

### K22 · Hız kapısı amacına ulaştı ve kapatıldı — 24 Ağu 2026

**Karar:** K22 (hız kapısı) **kapatıldı.** Yerine K23'ün sabit saat modeli geçti.

**Ölçüm:** M20 ≈ 8 saat sürdü — tahmin neyse o çıktı. Yani `puanBasinaSaat = 4` sağlam ve **692 saatlik bütçenin ölçeği doğru.** Bozuk olan tek şey haftalık saat varsayımıydı: plan 25/15 diyordu, gerçek 11–12.

**Neden bu iyi haber:** Kalibrasyon hatası ile ölçek hatası çok farklı şeylerdir. Ölçek hatası olsaydı 63 konunun tamamının süresini yeniden tahmin etmek gerekirdi. Kalibrasyon hatasında ise konular olduğu yerde durur, sadece kaç haftaya yayıldıkları değişir.

**Sonuç:** Konu envanterine dokunulmadı. Takvim yeniden yazıldı.

### K23 · Sabit saat modeli — hafta tipine göre 6/11/12/16/21 — 24 Ağu 2026

**Karar:** Haftalık saat tek bir sayı değil, hafta tipinin fonksiyonudur.

| Hafta tipi | Saat | Nerede |
|---|---|---|
| **Yaz** | 21 | W5, W6 |
| **Yoğun** | 16 | İki haftada bir, W7'den itibaren |
| **Standart** | 11 | Yoğun haftaların arası |
| **Okul sınavı** | 12 | W15, W16, W25, W35 |
| **Yarıyıl tatili** | 21 | W27 |
| **TFO** | 6 | W19 |

Dönemde ortalama ≈ **13,5 saat/hafta.** Planlama 14–21 aralığının **alt bandından** yapıldı; üst bant (18–21) bilerek boş bırakıldı — o, telafi payı.

**Gerekçe:** Planı ortalamaya göre kurup her hafta ortalamayı tutturmayı ummak, bütçeyi tavana göre yapıp hiç sapma payı bırakmamak demek olurdu.

### Kapasite

| | Saat |
|---|---|
| Üretken haftalar (W5–W37) | **375** |
| Tampon haftalar (W10, 14, 18, 22, 26, 30, 34) | 82 |
| **Toplam (W5–W37)** | **457** |
| Tekrar + sınav (W39–W42) | 60 |

| Senaryo | Kalan puan | Saat | Üretken kapasiteye oranı | Hüküm |
|---|---|---|---|---|
| **A — Tam müfredat** | 106 | 424 | %113 | ✗ Tamponun %60'ını yemeden kapanmıyor |
| **B — Çekirdek** | 77 | 308 | **%82** | ✓ **Taahhüt kapsamı.** 67 sa pay + 82 sa tampon |
| **C — Kurtarma** | 55 | 220 | %59 | Sadece W26 kapısı tetiklerse |

*(Kalan puan sütunu M20'nin bitmiş 2 puanını içermez.)*

### K24 · 2+ puanlık her konu 4 saatlik parçalara bölünür — 24 Ağu 2026

**Sorun:** 3 puanlık konu = 12 saat. Standart hafta = 11 saat. Yani M2, M5, C3, C7, C5, C9, C14, C15, A7, A23, A24 **hiçbiri bir haftaya sığmıyor.**

Bu, tracker'ı bozar: haftalarca "hiçbir konu bitmedi" görünür, halbuki iş ilerlemektedir. Puan hareket etmeyince motivasyon da ilerlemeyle birlikte ölçülemez hâle gelir.

**Karar:** 2+ puanlık her konu **4 saatlik alt-parçalara** bölünür ve tracker parça bazında ilerler. Bir parça = 4 saat = 1 puan.

| Konu | Parçalar |
|---|---|
| M2 (3p / 12sa) | basit permütasyon · tekrarlı · dairesel |
| M5 (3p / 12sa) | temel yıldız-çubuk · üst sınırlı · negatif olmayan tamsayı çözümleri |
| C3 (3p / 12sa) | `a++` vs `++a` · ifade içi yan etkiler · tanımsız davranış tuzakları |
| C7 (3p / 12sa) | `for`/`while` takibi · `do-while` · `break`/`continue` |
| C5 (3p / 12sa) | temel bit operatörleri · kaydırma · maskeleme kalıpları |

Kalan 28 konunun bölünmesi konunun kendi kapsam maddelerinden türetildi; hepsi `plan.json`'da.

**Veri tarafı:** `konular[].parcalar[]` — her parça `{no, ad, saat: 4, puan: 1, durum}`. Tracker'da işaretleme hem konu hem parça düzeyinde çalışır; bütün parçalar işaretlenince konu kendiliğinden kapanır.

### K25 · Mimari: paralel değil kademeli — 24 Ağu 2026

**Karar:** 11–16 saatlik bir haftada üç hattı birden beslemek, üçünü de yavaş beslemek demek. v4.6 hatları **kademeli** yürütür.

### Kritik yol

```
C1 → C2 → C3 → C7 → C4 → C6 → C5 → C8 → A2 → A3
```

Bu zincir tamamen seri — **64 saat**, hiçbir halkası paralelleştirilemez. Ve **A hattının tamamı bunun ucunda asılı** (A2, C8'i bekliyor).

v4.4'te bu 56 saatlik blok hiçbir haftaya yazılmamıştı; C8 W9'a konmuştu ki matematiksel olarak imkânsızdı. **K16'nın erteleme kararı doğruydu, hattın geri kalanının tarifesi güncellenmemişti.**

K16'nın gerekçesi (bilgisayar erişimi yok) **5 Eylül'de bitiyor** — tam W7'nin başı. O yüzden W7, C hattının kesintisiz başlangıcı.

### Slot yapısı

| Hafta | Birincil slot (C) | İkincil slot | Karma/deneme |
|---|---|---|---|
| Yoğun (16 sa) | 9 | 5 | 2 |
| Standart (11 sa) | 6 | 3 | 2 |
| Okul sınavı (12 sa) | 6 | 4 | 2 |

**İkincil slot sırası:** önce M/P borcu (32 sa, W7–W13), sonra A hattı (W15'ten itibaren).
**Birincil slot:** C bitince (W27) A hattına devredilir.

K16'nın Cumartesi 30 dakikalık karma M seti maddesi karma slotta duruyor, W7'de başlıyor.

### K26 · "Geçmek" hedefi daha az kapsam gerektiriyor — Tier B taahhüdü — 24 Ağu 2026

Sezgiye ters gelen ama bu sınavda belirleyici olan nokta: **4 yanlış 1 doğruyu götürüyor.**

Yarım bilinen bir konu, sınavda bilinmeyen bir konudan **daha kötüdür.** Bilmediğin soruyu boş bırakırsın, beklenen değer 0. Yarım bildiğin soruyu işaretlersin, beklenen değer negatif olabilir. 108 puanın tamamını yüzeysel gezmek, 79 puanı sağlam bilmekten düşük net getirir.

> Sınav bir depo değil, bir gümrük kapısı. Kaç kutu getirdiğin değil, kaçının belgesi tam olduğu sayılıyor — belgesiz kutu sadece geçmiyor değil, ceza yazdırıyor.

**Taahhüt: Tier B — 41 çekirdek konu, 79 puan.** Kesilen 29 puan silinmedi, **kuyruğa** alındı (K18) ve W35'ten itibaren geri çağırma penceresi var.

**Kesilenler (22 konu / 29 puan):** M6, M10, M12, M15, M16, C11, C12, C16, C20, A21, A4, A5, A6, A15, A8, A19, A10, A11, A22, P3, P4, L2

### Kuyruk geri çağırma sırası (W35–W37)

Sınav ağırlığı × maliyet oranına göre:

1. **A4, A5, A6** (3p / 12sa) — sıralama algoritmaları, A hattının en çok çıkan kesilebilirleri
2. **C12** (1p / 4sa) — C13 zaten çekirdekte, yanına ucuz ekleniyor
3. **M16** (2p / 8sa) — sayı teorisi temelleri
4. **A8, A10** (2p / 8sa)
5. **P3, P4** (4p / 16sa) — P hattı ucuz ama sınav ağırlığı %9

Kalanlar (M6, M10, M12, M15, C11, C16, C20, A21, A15, A19, A11, A22, L2 — 17 puan) bu sezon çalışılmıyor.

### Tek kapı: W26 (18–24 Ocak)

Ölçüt: **kümülatif 57 puan.** Altındaysa Tier C devreye girer (A24, A25, A20, A26, A23, A9, P1 düşer). Ek tartışma yok — tampon haftasında ölçülür, karar verilir, devam edilir.

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

Karar gerektiren, ama şimdi karara bağlanmayan konular. Her birinin bir **son karar tarihi** var.

| # | Soru | Son karar |
|---|---|---|
| **S4** | AP sınavları W40–W41 ile çakışıyor — hangi seçenek? | 2026-11-01 |
| **S5** | Tam deneme sayısı 6 mı, 4 mü? | 2026-11-23 |
| **S6** | Süre krizi ne zaman ölçülebilir hâle gelir? | 2026-11-23 |
| **S7** | Okul sınav haftaları takvimde doğru yerde mi? | 2026-09-30 |
| **S8** | Kesilen konular geri eklenecek mi? | 2027-03-15 |
| **S9** | TFO ile TÜBİTAK çakışması W19'dan ibaret mi? | 2026-10-01 |
| **S10** | Tier C'nin puan tabanı hangisi — 57 mi 63 mü? | 2027-01-18 |
| **S11** | Kesme listesi ön koşul grafını kırıyor — 11 bağ kapsam dışında | 2026-09-30 |

### S4 — AP sınavları ile W40–W41 çakışması
**Son karar: 2026-11-01** (AP kaydı ~7 Kasım)
AP sınavları Mayıs'ın ilk iki haftasında, Türkiye'de yalnızca İstanbul'da. TÜBİTAK 15 Mayıs. Bu, planın W40–W41 tekrar haftalarının tam ortası — sınav öncesi en kritik iki hafta, üstüne şehir dışı seyahat.
Seçenekler: (a) 10. sınıfta AP'siz kalıp 11'de üç AP almak, (b) sadece CS Principles alıp Psychology'yi ertelemek, (c) ikisini de alıp W39–W41 tekrar planını sıkıştırmak.
**Yapılacak:** College Board 2027 takvimi yayınlanınca kesin tarihler doğrulanacak.

### S5 — Tam deneme sayısı 6 mı, 4 mü?
**Son karar: 2026-11-23** (Tam deneme #1)
K17'ye göre 10 kullanılabilir sınav kağıdı var, 9 oturum planlı. 4 saatlik oturum, 11 saatlik haftanın %36'sı. Deneme #1'in gerçek maliyeti ölçüldükten sonra karar verilecek.

### S6 — Süre krizi ne zaman ölçülebilir hâle gelir?
**Son karar: 2026-11-23**
K17'nin asıl gerekçesi: sınavın tahmini iş yükü ~174 dk, gerçek bütçe 150 dk. Bu, konu bilgisinden **bağımsız** bir sorun — bildiğin soruya yetişememe. W18'de müfredatın ancak %53'ü bitmiş olacak, yani ilk ölçüm hâlâ kısmi. Alternatif: madencilik setlerinde soru başına süreyi baştan kaydedip trend çıkarmak.

### S7 — Okul sınav haftaları takvimde doğru yerde mi?
**Son karar: 2026-09-30**
W15, W16, W25, W35 tahmini olarak yerleştirildi. Okulun 2026-27 sınav takvimi açıklanınca gerçek tarihlerle değiştirilecek — kayarsa tampon haftalarının yeri de kayar.

### S8 — Kesilen konular geri eklenecek mi? *(v4.4'ten devreden S3)*
**Son karar: 2027-03-15** (W34 tamponu)
K26'daki geri çağırma sırası taslak. W33'te çekirdek gerçekten bitmişse liste yeniden önceliklendirilecek; o tarihte elde 5 denemelik net verisi olacak ve hangi hattın zayıf olduğu tahminle değil ölçümle bilinecek.

### S9 — TFO ile TÜBİTAK çakışması W19'dan ibaret mi?
**Son karar: 2026-10-01**
W19 (30 Kasım–6 Aralık) TFO için 6 saate düşürüldü. Ama TFO temsilcilik süreci W7'de başlıyor ve okul temsilciliği darboğazı hâlâ çözülmüş değil. Temsilcilik kesinleşirse Kasım'da ek hazırlık yükü gelir — bu takvimde yok.

### S10 — Tier C'nin puan tabanı hangisi? *(v4.6'yı veriye çevirirken çıktı)*
**Son karar: 2027-01-18** (W26 kapısı)
Revizyon belgesi Tier C için üç farklı sayı veriyor: §1 tablosu **55 kalan puan** (220 sa), §6 kapı maddesi **57 puan**, ama §6'nın düşen konu listesi (A24, A25, A20, A26, A23, A9, P1 = 16 puan) 79'dan düşülünce **63** veriyor. Aradaki 6 puanlık fark, listede olmayan ama düşürülmesi düşünülmüş bir konu grubuna işaret ediyor.
`plan.json` şu an listeyi esas alıyor (`meta.kapi.kalanPuanHesaplanan = 63`) ve farkı `meta.kapi.not_` alanında taşıyor. Kapı zaten W26'da ölçülecek; sayı orada, ölçümle birlikte kesinleşir. **Kapı tetiklenmezse bu soru kendiliğinden kapanır.**

### S11 — Kesme listesi ön koşul grafını kırıyor *(v4.6'yı veriye çevirirken çıktı)*
**Son karar: 2026-09-30**
v4.6 §2, 22 kesilebilir konunun **tamamını aynı anda** düşürüyor. Ama v4.3'te programatik doğrulanan şey 22'lik liste değil, 8 konuluk **kesme sırasıydı** (L2 → P4 → P3 → A22 → A6 → A11 → C20 → A4). Hepsi birden düşünce 11 ön koşul bağı kapsam dışında kaldı — beşi doğrudan **çekirdek** konuların ön koşulu:

| Konu | Kapsam | Hafta | Kapsam dışı ön koşul |
|---|---|---|---|
| **M7** dahil-hariç | çekirdek | W9 | M6 güvercin yuvası (*kesildi*, 1p) |
| **C13** C fonksiyonları | çekirdek | W21 | C12 stringler (kuyruk, 1p) |
| **A9** ikili ağaçlar | çekirdek | W28 | A8 bağlı liste (kuyruk, 1p) |
| **A25** Huffman | çekirdek | W29 | A19 açgözlü strateji (*kesildi*, 3p) |
| **A20** DP: tablo | çekirdek | W31 | M12 yineleme bağıntısı (*kesildi*, 1p) · A21 böl ve yönet (*kesildi*, 1p) |
| C12 · A4 · A5 · A8 · P3 | kuyruk | W35–37 | C11 · A21 · A21 · C16 · M15 (hepsi *kesildi*) |

**Tracker'ın şu anki davranışı:** kapsam dışı ön koşul **kilitlemiyor**, konu panelinde uyarı olarak görünüyor. Aksi hâlde çekirdekteki bu beş konu hiç açılamaz, Tier B de matematiksel olarak kapanamazdı.

**Üç seçenek, her bağ için ayrı ayrı:**
1. Ön koşulu geri al — en pahalısı A19 (3p / 12sa), en ucuzu M6 (1p / 4sa). Beş çekirdek bağın hepsini kurtarmak 7 puan / 28 saat eder; 67 saatlik payın içinde durur.
2. Bağımlı konuyu ön koşulsuz çalışılabilir kabul et — kapsamı daraltarak (ör. A25 Huffman'ı açgözlü teorisi olmadan, kurulum tarifi olarak).
3. Bağımlı konuyu da kes — Tier B'yi 79'un altına indirir, taahhüdü bozar.

**Yapılacak:** her bağ için 1 veya 2'yi seç, kararı buraya yaz. Karar `plan.json`'un `meta.kapsamDisiOnkosul` alanında ve tracker'ın uyarı satırında görünüyor; en geç W7'nin başında (C hattı başlarken) kapanmalı — ilk çakışma M7, W9'da.

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

**Tampon haftalarında yeni konu yoktur.** Sadece geri kalınanı toparlama, tekrar, deneme. Tampon haftaları **hız hesabına girmez**. Yapacak bir şeyin yoksa doldurmaya çalışma — dinlen.

v4.6'da tampon dört haftada bir gelir: **W10, W14, W18, W22, W26, W30, W34** (ve kapanış tamponu W38). Toplam 82 saat — planın tek gerçek sapma payı budur.

İki istisna:
- **W19 tampon değil, TFO haftasıdır.** 6 saate düşer ama tamamen boş değildir.
- **B5'te tampon yok.** Blok zaten tamamen tekrardan oluşuyor (W39–W41) ve W42 sınav haftası.

### Hafta tipleri (K23)

| Tip | Hafta | Saat | Hız hesabına girer mi |
|---|---|---|---|
| **üretken** — yeni konu öğrenilir | 26 | 375 | ✅ evet |
| **tampon** — tekrar, deneme, taşma | 8 | 93 | ❌ hayır |
| **devredildi** — W1–W4 | 4 | — | ❌ hayır |
| **tekrar** — B5 tam tekrar (W39–41) | 3 | 45 | ❌ hayır |
| **sınav** — W42 | 1 | 15 | ❌ hayır |
| **Toplam (W5–W42)** | **42** | **528** | |

Üretken haftalar tek bir saate sahip değildir; hafta tipine göre 6, 11, 12, 16 veya 21 saattir (Bölüm 5).

### Bütçe aritmetiği

1 puan ≈ 4 saat (ilk geçiş) — **bu katsayı M20 ölçümüyle doğrulandı** (K22). Bozuk olan haftalık saat varsayımıydı, katsayı değil.

```
Üretken kapasite (W5–W37)        375 sa
Tier B kalan yükü (77 p × 4 sa)  308 sa
                                 -------
Pay                               67 sa  (%18)
Üstüne tampon                     82 sa
```

**Kıyas — kesme yapılmasaydı:** 106 kalan puan × 4 = 424 saat, yani üretken kapasitenin **%113'ü.** Tamponun %60'ı yenmeden kapanmazdı. Tier B taahhüdünün (K26) aritmetik gerekçesi budur.

💡 Yarıyıl tatili (W27) yaz temposuna dönerek 21 saat verir; hesaba dahil.

⚠️ **Bir haftanın yerleştirilen saati kapasitesini ±4 saat aşabilir.** Örneğin W8'de 12 saatlik iş 11 saatlik haftaya, W15'te 8 saatlik iş 12 saatlik haftaya yazılmıştır. Bu kasıtlıdır: parça sınırı 4 saattir ve parçalar bölünmez. Fark bir sonraki tampon haftasında kapanır.

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

v4.6'da iskelet gün değil **slot** üzerinden tanımlanır (K25). Sebebi: haftalık saat artık tek bir sayı değil, hafta tipinin fonksiyonudur (K23).

### Saat modeli (K23)

| Hafta tipi | Saat | Nerede |
|---|---|---|
| **Yaz** | 21 | W5, W6 |
| **Yoğun** | 16 | İki haftada bir, W7'den itibaren |
| **Standart** | 11 | Yoğun haftaların arası |
| **Okul sınavı** | 12 | W15, W16, W25, W35 |
| **Yarıyıl tatili** | 21 | W27 |
| **TFO** | 6 | W19 |

Dönemde ortalama ≈ **13,5 saat/hafta.** Planlama 14–21 aralığının **alt bandından** yapıldı; üst bant (18–21) bilerek boş bırakıldı — o, telafi payı. Planı ortalamaya göre kurup her hafta ortalamayı tutturmayı ummak, bütçeyi tavana göre yapıp hiç sapma payı bırakmamak demek olurdu.

### Slot yapısı

| Hafta | Birincil slot | İkincil slot | Karma/deneme |
|---|---|---|---|
| Yaz / yarıyıl (21 sa) | 12 | 7 | 2 |
| Yoğun (16 sa) | 9 | 5 | 2 |
| Okul sınavı (12 sa) | 6 | 4 | 2 |
| Standart (11 sa) | 6 | 3 | 2 |
| TFO (6 sa) | — | — | 6 |

- **Birincil slot:** C hattı. C bitince (W27) A hattına devredilir.
- **İkincil slot:** önce devreden M/P borcu (32 sa, W7–W13), sonra A hattı (W15'ten itibaren). Bu, K16 geri ödemesinin yeni tetikleyicisidir (K21) — sabit tarih değil, borcun kapanması.
- **Karma slot:** Cumartesi. K16'nın 30 dakikalık karma M bakım seti burada durur, W7'de başlar. Kalan süre P bulmacası, madencilik seti veya tam deneme.

### Neden kademeli, neden paralel değil

11–16 saatlik bir haftada üç hattı birden beslemek, üçünü de yavaş beslemek demek. Kritik yol (C1 → C2 → C3 → C7 → C4 → C6 → C5 → C8 → A2 → A3) **64 saat ve tamamen seri**; A hattının tamamı bunun ucunda asılı. Bu zinciri yavaşlatan her şey, A hattını da aynı miktarda geciktirir.

### Parça disiplini (K24)

3 puanlık konu 12 saattir; standart hafta 11. Yani konular haftalara sığmaz — **parçalar sığar.** Bir oturumun hedefi "M2'yi bitirmek" değil, **"M2'nin dairesel permütasyon parçasını bitirmek"**tir. Tracker da bunu sayar.

### P ve L hatları nereye giriyor

| Hat | Ne zaman | Nasıl |
|---|---|---|
| **P** — mantık kurgu | İkincil slotta, atandığı haftada (W12, W13, W29, W31) | Parça başına 4 saat, haftada 1 bulmaca kümesi süreli |
| **L** — lise cebiri | İkincil slot, W17 | L1 tek oturumda 4 saat; L2 kesildi (K26) |
| **M-temel hızlandırma** | Akşam boşlukları, telefon | Günde 10–15 soru, 90 saniye hedefi — saat bütçesine girmez |
| **M bakım** | Karma slotun ilk 30 dakikası | Bitirilmiş M konularından karışık 10 soru, kronometreli |

**Neden karışık:** Sınav beş bloğu da aynı gün sorar. Ayrıca kombinatorik ile kod takibi farklı zihinsel modlardır — gün içinde değiştirmek yorgunluğu azaltır.

---

## 6. Ana takvim — 42 hafta / 6 blok
> **"Neredeyim?" sorusunun tek cevabı bu tablodur.**

`p` = o haftanın hedef puanı · `Σ` = kümülatif · **hedef: W33'te 79 puan (Tier B kapanır)**
Parça gösterimi: `C3 (1,2/3)` = C3'ün 1. ve 2. parçası, konu toplam 3 parça (K24).

| W | Blok | Tarih | Tip | Sa | Birincil slot | İkincil slot | p | Σ | Not |
|---|---|---|---|---|---|---|---|---|---|
| 1 | B0 | 27 Tem – 2 Ağu | **DEVREDİLDİ** | — | ⛔ *M22, M19, C1, C2 devretti* | — | 0 | 0 | |
| 2 | B0 | 3 Ağu – 9 Ağu | **DEVREDİLDİ** | — | ⛔ *C3, C7, M1 devretti* | — | 0 | 0 | |
| 3 | B0 | 10 Ağu – 16 Ağu | **DEVREDİLDİ** | — | ⛔ *M19, M22, M1, M18 devretti* | — | 0 | 2 | |
| 4 | B0 | 17 Ağu – 23 Ağu | **DEVREDİLDİ** | — | ⛔ *M2, M3, M4 devretti* | — | 0 | 2 | |
| 5 | B0 | 24 Ağu – 30 Ağu | yaz | 21 | M19, M22, M1, M18 | M2 (1/3) | 5 | 7 | Yaz temposu — 21 saat |
| 6 | B0 | 31 Ağu – 6 Eyl | yaz | 21 | M2 (2,3/3) | M3, M4 | 5 | 12 | Madencilik #1 · **B0 kapanış** |
| 7 | B1 | 7 Eyl – 13 Eyl | **yoğun** | 16 | C1, C2 | M5 (1/3) | 4 | 16 | Bilgisayar döndü — K16 gerekçesi bitti, C hattı kesintisiz başlıyor · TFO temsilcilik görüşmesi |
| 8 | B1 | 14 Eyl – 20 Eyl | standart | 11 | C3 (1,2/3) | M5 (2/3) | 1 | 17 |  |
| 9 | B1 | 21 Eyl – 27 Eyl | **yoğun** | 16 | C3 (3/3), C7 (1/3) | M5 (3/3), M7 | 5 | 22 |  |
| 10 | B1 | 28 Eyl – 4 Eki | **TAMPON** | 11 | *telafi* | *telafi* | 0 | 22 | Madencilik #2 · Saf telafi haftası |
| 11 | B1 | 5 Eki – 11 Eki | **yoğun** | 16 | C7 (2,3/3) | M8, M9 | 5 | 27 |  |
| 12 | B1 | 12 Eki – 18 Eki | standart | 11 | C4, C6 | P2 (1/2) | 2 | 29 |  |
| 13 | B1 | 19 Eki – 25 Eki | **yoğun** | 16 | C5 (1,2/3) | P2 (2/2) | 3 | 32 | M/P borcu kapandı — K21 uyarınca ikincil slot A hattına devrediliyor |
| 14 | B1 | 26 Eki – 1 Kas | **TAMPON** | 11 | *telafi* | *telafi* | 0 | 32 | Madencilik #3 · **B1 kapanış** · Saf telafi haftası |
| 15 | B2 | 2 Kas – 8 Kas | okul sınavı | 12 | C5 (3/3) | A1 (1/2) | 3 | 35 | Okul sınavları · A hattı açılıyor |
| 16 | B2 | 9 Kas – 15 Kas | okul sınavı | 12 | C8 | A1 (2/2) | 3 | 38 | Okul sınavları |
| 17 | B2 | 16 Kas – 22 Kas | **yoğun** | 16 | C9 (1,2/3) | A2, L1 | 4 | 42 |  |
| 18 | B2 | 23 Kas – 29 Kas | **TAMPON** | 16 | *telafi* | *telafi* | 0 | 42 | **Tam deneme #1** · Saf telafi haftası — içinde bir Cumartesi oturumu |
| 19 | B2 | 30 Kas – 6 Ara | **TFO** | 6 | *telafi* | *telafi* | 0 | 42 | TFO ~6 Aralık — TÜBİTAK durur |
| 20 | B2 | 7 Ara – 13 Ara | **yoğun** | 16 | C9 (3/3), C10 | A3 | 5 | 47 |  |
| 21 | B2 | 14 Ara – 20 Ara | standart | 11 | C13 | A13 (1/2) | 2 | 49 |  |
| 22 | B2 | 21 Ara – 27 Ara | **TAMPON** | 11 | *telafi* | *telafi* | 0 | 49 | **Tam deneme #2** · **B2 kapanış** · Saf telafi haftası |
| 23 | B3 | 28 Ara – 3 Oca | **yoğun** | 16 | C14 (1,2/3) | A13 (2/2) | 3 | 52 |  |
| 24 | B3 | 4 Oca – 10 Oca | standart | 11 | C14 (3/3) | A14 | 3 | 55 |  |
| 25 | B3 | 11 Oca – 17 Oca | okul sınavı | 12 | C21 | A7 (1/3) | 2 | 57 | Okul sınavları |
| 26 | B3 | 18 Oca – 24 Oca | **TAMPON** | 11 | *telafi* | *telafi* | 0 | 57 | **Tam deneme #3** · **† KAPI — 57 puan** · Saf telafi haftası |
| 27 | B3 | 25 Oca – 31 Oca | yarıyıl | 21 | C15 | A7 (2,3/3) | 6 | 63 | Yarıyıl tatili — yaz temposu · C hattı bitti |
| 28 | B3 | 1 Şub – 7 Şub | **yoğun** | 16 | A24 | A9 | 5 | 68 | Birincil slot A hattına geçti |
| 29 | B3 | 8 Şub – 14 Şub | standart | 11 | A25 | P1 (1/2) | 2 | 70 |  |
| 30 | B3 | 15 Şub – 21 Şub | **TAMPON** | 11 | *telafi* | *telafi* | 0 | 70 | **Tam deneme #4** · **B3 kapanış** · Saf telafi haftası |
| 31 | B4 | 22 Şub – 28 Şub | **yoğun** | 16 | A20 | P1 (2/2) | 4 | 74 | TYBS başvurusu |
| 32 | B4 | 1 Mar – 7 Mar | standart | 11 | A26 | A23 (1/3) | 2 | 76 |  |
| 33 | B4 | 8 Mar – 14 Mar | **yoğun** | 16 | A23 (2,3/3) | *kuyruk* | 3 | 79 | ÇEKİRDEK TAMAM — Tier B kapandı · Artan kapasite kuyruğa açılır |
| 34 | B4 | 15 Mar – 21 Mar | **TAMPON** | 11 | *telafi* | *telafi* | 0 | 79 | **Tam deneme #5** · Saf telafi haftası |
| 35 | B4 | 22 Mar – 28 Mar | okul sınavı | 12 | *kuyruk* | *kuyruk* | ~3 | ~82 | Okul sınavları · Geri çağırma penceresi açıldı — kuyruk sırasına göre |
| 36 | B4 | 29 Mar – 4 Nis | **yoğun** | 16 | *kuyruk* | *kuyruk* | ~4 | ~86 | Kuyruk |
| 37 | B4 | 5 Nis – 11 Nis | **yoğun** | 16 | *kuyruk* | *kuyruk* | ~4 | ~90 | Kuyruk · Son yeni konu haftası |
| 38 | B4 | 12 Nis – 18 Nis | **TAMPON** | 11 | *telafi* | *telafi* | 0 | 90 | **Tam deneme #6** · **B4 kapanış** · Saf telafi haftası |
| 39 | B5 | 19 Nis – 25 Nis | tekrar | 15 | — | — | 0 | 90 | M hattı tam tekrar — çekirdekteki 9 konu |
| 40 | B5 | 26 Nis – 2 May | tekrar | 15 | — | — | 0 | 90 | C hattı tam tekrar — çekirdekteki 15 konu |
| 41 | B5 | 3 May – 9 May | tekrar | 15 | — | — | 0 | 90 | **Tam deneme #7** · **Tam deneme #8** · A hattı tam tekrar — çekirdekteki 13 konu |
| 42 | B5 | 10 May – 16 May | **SINAV** | 15 | — | — | 0 | 90 | **Tam deneme #9** · Gün aşırı tam deneme · Yeni konu yok · Sınav 15 Mayıs |

### Nasıl okunur

- **Birincil slot** C hattıdır; W27'de C bitince A hattına devredilir (K25).
- **İkincil slot** önce devreden M/P borcunu kapatır (W7–W13), sonra A hattına geçer (K21).
- **Tampon haftalarında iki slot da telafidir.** Yeni konu yok; içlerinde bir Cumartesi oturumu olabilir (K19).
- **W35–W37 geri çağırma penceresidir** — her iki slot da kuyruktan beslenir, puanlar tahminidir (K26).
- `Sa` sütunu haftanın **kapasitesi**, `p` sütunu hedef puandır. Bir haftanın yerleştirilen saati kapasitesini ±4 saat aşabilir; fark tampon haftasında kapanır.

### Kritik yol (K25)

```
C1 → C2 → C3 → C7 → C4 → C6 → C5 → C8 → A2 → A3
```

64 saat, tamamen seri, hiçbir halkası paralelleştirilemez. **A hattının tamamı bunun ucunda asılı** — A2, C8'i bekliyor. Bu zincirde bir hafta kayması, A hattının tamamını bir hafta kaydırır. Tampon önceliği buradadır.

### Tek kapı: W26 (18–24 Ocak)

Ölçüt: **kümülatif 57 puan.** Altındaysa Tier C devreye girer (A24, A25, A20, A26, A23, A9, P1 düşer). Ek tartışma yok — tampon haftasında ölçülür, karar verilir, devam edilir. *(Kalan puanın 57 mi 63 mü olduğu S10'da açık; bkz. Bölüm 2.)*

### Blok özetleri

| Blok | Hafta | Üretken | Tampon | Kapasite | Hedef puan |
|---|---|---|---|---|---|
| B0 · Yaz Yoğunlaştırma | W1–6 | 2 | 0 | 42 sa | 10 p |
| B1 · Dönem Başlangıcı | W7–14 | 6 | 2 | 108 sa | 20 p |
| B2 · Güz Sonu | W15–22 | 6 | 2 | 100 sa | 17 p |
| B3 · Kış | W23–30 | 6 | 2 | 109 sa | 21 p |
| B4 · İlkbahar | W31–38 | 6 | 2 | 109 sa | 20 p |
| B5 · Final | W39–42 | 0 | 0 | 60 sa | 0 p |

**W1–W4 hız hesabına girmez** — devredilen haftalardır. B0'ın gerçek üretken haftaları W5 ve W6'dır.

---

## 7. Konu envanteri — 63 konu / 108 puan
> Her konunun **kapsamı** Bölüm 10'daki JSON'un `kapsam` alanındadır. Tracker'da konuya tıklayınca açılır.

> ★ işaretli kapsam maddeleri v4.0'ta ölçüme dayanarak eklenmiştir.

**Kapsam sütunu (v4.6 · K26):** **çekirdek** = Tier B, taahhüt edilen 41 konu / 79 puan · kuyruk = W35–W37 geri çağırma penceresi (9 konu / 12 puan) · *kesildi* = bu sezon çalışılmıyor (13 konu / 17 puan).
**Parça sütunu (v4.6 · K24):** konu kaç adet 4 saatlik parçaya bölündü. 1 parça = 4 saat = 1 puan.

### M — Matematik & Kombinatorik (17 konu, 24 puan · ölçülen 36/150 soru (2024-25-26))

| ID | Konu | P | Kapsam | Hafta | Parça | 📺 Video | 📖 Kaynak |
|---|---|---|---|---|---|---|---|
| **M19** | Önerme mantığı, doğruluk tabloları, De Morgan | 1 | **çekirdek** | W5 | 1 × 4 sa | [Mantık ve önermeler](https://www.youtube.com/results?search_query=Tunç+Kurt+Mantık+ve+önermeler) | PKO soru bankası |
| **M22** | Σ ve Π notasyonu, teleskopik toplamlar | 1 | **çekirdek** | W5 | 1 × 4 sa | [Diziler ve toplam sembolü](https://www.youtube.com/results?search_query=Tunç+Kurt+Diziler+ve+toplam+sembolü) | Gürlü · Olimpik Sonlu Matematik |
| **M1** | Sayma temelleri: toplama ve çarpma ilkesi | 1 | **çekirdek** | W5 | 1 × 4 sa | [Sayma yöntemleri / toplama-çarpma ilkesi](https://www.youtube.com/results?search_query=Tunç+Kurt+Sayma+yöntemleri+/+toplama-çarpma+ilkesi) | Gürlü · Olimpik Sonlu Matematik |
| **M18** | Sayı sistemleri: ikilik/onaltılık taban dönüşümü | 1 | **çekirdek** | W5 | 1 × 4 sa | [Sayı sistemleri / taban aritmetiği](https://www.youtube.com/results?search_query=Tunç+Kurt+Sayı+sistemleri+/+taban+aritmetiği) | PKO soru bankası |
| **M2** | Permütasyon: basit, tekrarlı, dairesel | 3 | **çekirdek** | W5–W6 | 3 × 4 sa | [Permütasyon](https://www.youtube.com/results?search_query=Tunç+Kurt+Permütasyon) | Gürlü · Olimpik Sonlu Matematik |
| **M3** | Kombinasyon, binom katsayıları, Pascal üçgeni | 2 | **çekirdek** | W6 | 2 × 4 sa | [Kombinasyon](https://www.youtube.com/results?search_query=Tunç+Kurt+Kombinasyon) | Gürlü · Olimpik Sonlu Matematik |
| **M4** | Binom teoremi ve kombinatoryel kimlikler | 1 | **çekirdek** | W6 | 1 × 4 sa | [Binom açılımı](https://www.youtube.com/results?search_query=Tunç+Kurt+Binom+açılımı) | Gürlü · Olimpik Sonlu Matematik |
| **M5** | Yıldızlar ve çubuklar (tekrarlı seçim) | 3 | **çekirdek** | W7–W9 | 3 × 4 sa | [tekrarlı kombinasyon dağılım problemleri](https://www.youtube.com/results?search_query=Tunç+Kurt+tekrarlı+kombinasyon+dağılım+problemleri) | Gürlü · Olimpik Sonlu Matematik |
| **M7** | Dahil-hariç ilkesi | 1 | **çekirdek** | W9 | 1 × 4 sa | [Kümelerde işlemler / içerme-dışarma](https://www.youtube.com/results?search_query=Tunç+Kurt+Kümelerde+işlemler+/+içerme-dışarma) | Gürlü · Olimpik Sonlu Matematik |
| **M8** | Düzensizlikler (derangement), sabit noktalar | 1 | **çekirdek** | W11 | 1 × 4 sa | [içerme dışarma prensibi düzensizlik](https://www.youtube.com/results?search_query=matematik+olimpiyat+içerme+dışarma+prensibi+düzensizlik) | Gürlü · Olimpik Sonlu Matematik |
| **M9** | Olasılık temelleri: örnek uzay, koşullu olasılık | 1 | **çekirdek** | W11 | 1 × 4 sa | [Olasılık](https://www.youtube.com/results?search_query=Tunç+Kurt+Olasılık) | Gürlü · Olimpik Sonlu Matematik |
| **M20** | Kümeler, bağıntılar, matematiksel fonksiyon türleri (birebir/örten) | 2 | **çekirdek** | ✓ bitti | 2 × 4 sa | [Kümeler ve fonksiyonlar](https://www.youtube.com/results?search_query=Tunç+Kurt+Kümeler+ve+fonksiyonlar) | Gürlü · Olimpik Sonlu Matematik |
| **M16** | Sayı teorisi temelleri: bölünebilme, EBOB/EKOK, Öklid, asallar | 2 | kuyruk | W35–37 | 2 × 4 sa | [EBOB – EKOK](https://www.youtube.com/results?search_query=Tunç+Kurt+EBOB+–+EKOK) | PKO soru bankası |
| **M6** | Güvercin yuvası ilkesi | 1 | *kesildi* | — | 1 × 4 sa | [güvercin yuvası prensibi](https://www.youtube.com/results?search_query=matematik+olimpiyat+güvercin+yuvası+prensibi) | Gürlü · Olimpik Sonlu Matematik |
| **M10** | Bayes teoremi, bağımsızlık | 1 | *kesildi* | — | 1 × 4 sa | [Koşullu olasılık](https://www.youtube.com/results?search_query=Tunç+Kurt+Koşullu+olasılık) | Gürlü · Olimpik Sonlu Matematik |
| **M12** | Yineleme bağıntısı (recurrence) kurma — matematik | 1 | *kesildi* | — | 1 × 4 sa | [indirgemeli diziler rekürans bağıntısı](https://www.youtube.com/results?search_query=matematik+olimpiyat+indirgemeli+diziler+rekürans+bağıntısı) | Gürlü · Olimpik Sonlu Matematik |
| **M15** | Modüler aritmetik | 1 | *kesildi* | — | 1 × 4 sa | [Bölünebilme ve modüler aritmetik](https://www.youtube.com/results?search_query=Tunç+Kurt+Bölünebilme+ve+modüler+aritmetik) | PKO soru bankası |

### C — C Dili Semantiği (18 konu, 35 puan · ölçülen 49/150 soru (15+15+19))

| ID | Konu | P | Kapsam | Hafta | Parça | 📺 Video | 📖 Kaynak |
|---|---|---|---|---|---|---|---|
| **C1** | Veri tipleri, boyutlar, taşma davranışı | 1 | **çekirdek** | W7 | 1 × 4 sa | [C veri tipleri ve bellek](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+veri+tipleri+ve+bellek) | gateoverflow.in |
| **C2** | Operatör önceliği ve birleşme yönü | 2 | **çekirdek** | W7 | 2 × 4 sa | [C operatörler ve öncelik](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+operatörler+ve+öncelik) | gateoverflow.in |
| **C3** | a++ vs ++a, yan etkiler | 3 | **çekirdek** | W8–W9 | 3 × 4 sa | [C artırma azaltma operatörleri](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+artırma+azaltma+operatörleri) | gateoverflow.in |
| **C7** | Döngü takibi: for/while/do-while, break/continue | 3 | **çekirdek** | W9–W11 | 3 × 4 sa | [C döngüler](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+döngüler) | gateoverflow.in |
| **C4** | Tip dönüşümleri, integer promotion | 1 | **çekirdek** | W12 | 1 × 4 sa | [C tip dönüşümü](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+tip+dönüşümü) | gateoverflow.in |
| **C6** | Koşullar ve kısa devre değerlendirme | 1 | **çekirdek** | W12 | 1 × 4 sa | [C koşul ifadeleri](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+koşul+ifadeleri) | gateoverflow.in |
| **C5** | Bit operatörleri | 3 | **çekirdek** | W13–W15 | 3 × 4 sa | [bit düzeyi operatörler](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+bit+düzeyi+operatörler) | gateoverflow.in |
| **C8** | Diziler ve bellek yerleşimi | 2 | **çekirdek** | W16 | 2 × 4 sa | [C diziler](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+diziler) | gateoverflow.in |
| **C9** | Pointer temelleri: &, *, pointer aritmetiği | 3 | **çekirdek** | W17–W20 | 3 × 4 sa | [C pointer gösterici](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+pointer+gösterici) | gateoverflow.in |
| **C10** | Dizi–pointer eşdeğerliği | 2 | **çekirdek** | W20 | 2 × 4 sa | [C dizi ve pointer ilişkisi](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+dizi+ve+pointer+ilişkisi) | gateoverflow.in |
| **C13** | C fonksiyonları: parametre geçirme (değer/referans) | 1 | **çekirdek** | W21 | 1 × 4 sa | [C fonksiyonlar](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+fonksiyonlar) | gateoverflow.in |
| **C14** | Özyineleme (recursion): çağrı yığını takibi | 3 | **çekirdek** | W23–W24 | 3 × 4 sa | [özyineleme recursion](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+özyineleme+recursion) | pythontutor.com |
| **C21** | Özyineleme: çoklu dallanma, çağrı sayısı, ağaç yapısı — kod | 2 | **çekirdek** | W25 | 2 × 4 sa | [özyineleme çağrı ağacı](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+özyineleme+çağrı+ağacı) | pythontutor.com |
| **C15** | Özyineleme: çıktı sırası (ön/son işlem) | 3 | **çekirdek** | W27 | 3 × 4 sa | [özyineleme çalışma sırası](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+özyineleme+çalışma+sırası) | pythontutor.com |
| **C12** | Stringler: null sonlandırma, string.h | 1 | kuyruk | W35–37 | 1 × 4 sa | [C karakter dizileri string](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+karakter+dizileri+string) | gateoverflow.in |
| **C11** | Çok boyutlu diziler ve pointer'lar | 2 | *kesildi* | — | 2 × 4 sa | [C iki boyutlu diziler](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+iki+boyutlu+diziler) | gateoverflow.in |
| **C16** | struct, union, typedef | 1 | *kesildi* | — | 1 × 4 sa | [C yapılar struct](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+yapılar+struct) | gateoverflow.in |
| **C20** | Tanımsız davranış, off-by-one, yaygın tuzaklar | 1 | *kesildi* | — | 1 × 4 sa | [C tanımsız davranış undefined behavior](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+C+tanımsız+davranış+undefined+behavior) | van der Linden |

### A — Algoritma Okuryazarlığı (22 konu, 39 puan · ölçülen 48/150 soru)

| ID | Konu | P | Kapsam | Hafta | Parça | 📺 Video | 📖 Kaynak |
|---|---|---|---|---|---|---|---|
| **A1** | Karmaşıklık: büyük O, en iyi/ortalama/en kötü | 2 | **çekirdek** | W15–W16 | 2 × 4 sa | [algoritma karmaşıklık analizi big O](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+algoritma+karmaşıklık+analizi+big+O) | visualgo.net |
| **A2** | Doğrusal arama, ikili arama (binary search) — algoritma | 1 | **çekirdek** | W17 | 1 × 4 sa | [ikili arama binary search](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+ikili+arama+binary+search) | visualgo.net |
| **A3** | Basit sıralamalar: kabarcık, seçme, ekleme | 2 | **çekirdek** | W20 | 2 × 4 sa | [sıralama algoritmaları](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+sıralama+algoritmaları) | visualgo.net |
| **A13** | Graf gösterimi: komşuluk matrisi ve listesi | 2 | **çekirdek** | W21–W23 | 2 × 4 sa | [graf gösterimi komşuluk matrisi listesi](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+graf+gösterimi+komşuluk+matrisi+listesi) | Gürlü · Olimpik Sonlu Matematik |
| **A14** | BFS ve DFS | 2 | **çekirdek** | W24 | 2 × 4 sa | [genişlik öncelikli arama BFS](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+genişlik+öncelikli+arama+BFS) | Gürlü · Olimpik Sonlu Matematik |
| **A7** | Yığın (stack) ve kuyruk (queue) | 3 | **çekirdek** | W25–W27 | 3 × 4 sa | [yığın stack ve kuyruk queue](https://www.youtube.com/results?search_query=veri+yapıları+yığın+stack+ve+kuyruk+queue) | visualgo.net |
| **A24** | DFS: yığın, keşif/bitiş zamanları, kenar sınıflandırma | 3 | **çekirdek** | W28 | 3 × 4 sa | [derinlik öncelikli arama DFS](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+derinlik+öncelikli+arama+DFS) | visualgo.net |
| **A9** | İkili ağaçlar ve dolaşımlar | 2 | **çekirdek** | W28 | 2 × 4 sa | [ikili ağaç dolaşımı tree traversal](https://www.youtube.com/results?search_query=veri+yapıları+ikili+ağaç+dolaşımı+tree+traversal) | visualgo.net |
| **A25** | Huffman kodlama ve önek kodları | 2 | **çekirdek** | W29 | 2 × 4 sa | [huffman kodlama](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+huffman+kodlama) | visualgo.net |
| **A20** | Dinamik programlama: yineleme bağıntısından tabloya | 2 | **çekirdek** | W31 | 2 × 4 sa | [dinamik programlama](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+dinamik+programlama) | Claude — Prompt 4 |
| **A26** | Dinamik programlama: memoization ve çağrı sayısı | 2 | **çekirdek** | W32 | 2 × 4 sa | [memoization dinamik programlama](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+memoization+dinamik+programlama) | pythontutor.com |
| **A23** | Algoritma tasarım muhakemesi: hangi adım gereksiz/yanlış | 3 | **çekirdek** | W32–W33 | 3 × 4 sa | — | Çıkmış sorular |
| **A4** | Birleştirme sıralaması (merge sort) | 1 | kuyruk | W35–37 | 1 × 4 sa | [birleştirme sıralaması merge sort](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+birleştirme+sıralaması+merge+sort) | visualgo.net |
| **A5** | Hızlı sıralama (quicksort) | 1 | kuyruk | W35–37 | 1 × 4 sa | [hızlı sıralama quick sort](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+hızlı+sıralama+quick+sort) | visualgo.net |
| **A6** | Sayma / kova / radix sıralama | 1 | kuyruk | W35–37 | 1 × 4 sa | [sayma sıralaması counting sort](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+sayma+sıralaması+counting+sort) | visualgo.net |
| **A8** | Bağlı liste | 1 | kuyruk | W35–37 | 1 × 4 sa | [bağlı liste linked list](https://www.youtube.com/results?search_query=veri+yapıları+bağlı+liste+linked+list) | visualgo.net |
| **A10** | İkili arama ağacı (BST) — veri yapısı | 1 | kuyruk | W35–37 | 1 × 4 sa | [ikili arama ağacı BST](https://www.youtube.com/results?search_query=veri+yapıları+ikili+arama+ağacı+BST) | visualgo.net |
| **A21** | Böl ve yönet paradigması | 1 | *kesildi* | — | 1 × 4 sa | [böl ve yönet divide and conquer](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+böl+ve+yönet+divide+and+conquer) | visualgo.net |
| **A15** | Topolojik sıralama | 2 | *kesildi* | — | 2 × 4 sa | [topolojik sıralama](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+topolojik+sıralama) | visualgo.net |
| **A19** | Açgözlü strateji ve karşı örnek | 3 | *kesildi* | — | 3 × 4 sa | [açgözlü algoritma greedy](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+açgözlü+algoritma+greedy) | Çıkmış sorular |
| **A11** | Heap, heapsort, öncelik kuyruğu | 1 | *kesildi* | — | 1 × 4 sa | [heap öncelik kuyruğu](https://www.youtube.com/results?search_query=veri+yapıları+heap+öncelik+kuyruğu) | visualgo.net |
| **A22** | Geri izleme (backtracking) | 1 | *kesildi* | — | 1 × 4 sa | [geri izleme backtracking](https://www.youtube.com/results?search_query=Şadi+Evren+Şeker+geri+izleme+backtracking) | visualgo.net |

### P — Mantık Kurgu Bulmacaları (4 konu, 8 puan · ölçülen 13/150 soru)

| ID | Konu | P | Kapsam | Hafta | Parça | 📺 Video | 📖 Kaynak |
|---|---|---|---|---|---|---|---|
| **P2** | Doğrucu/yalancı ve önerme çıkarımı bulmacaları | 2 | **çekirdek** | W12–W13 | 2 × 4 sa | [önermeler mantık çıkarım](https://www.youtube.com/results?search_query=Tunç+Kurt+önermeler+mantık+çıkarım) | Çıkmış sorular + LSAT |
| **P1** | Kısıt bulmacaları: gruplama ve yerleştirme | 2 | **çekirdek** | W29–W31 | 2 × 4 sa | — | LSAT Logic Games |
| **P3** | Oyun, tartma ve en kötü durum bulmacaları | 2 | kuyruk | W35–37 | 2 × 4 sa | — | Gürlü · Olimpik Sonlu Matematik |
| **P4** | Kısıt bulmacaları: çizelgeleme ve sıralama | 2 | kuyruk | W35–37 | 2 × 4 sa | — | LSAT Logic Games |

### L — Lise Cebiri Tazeleme (2 konu, 2 puan · ölçülen 4/150 soru — hepsi 2026'da)

| ID | Konu | P | Kapsam | Hafta | Parça | 📺 Video | 📖 Kaynak |
|---|---|---|---|---|---|---|---|
| **L1** | Logaritma, üslü ifadeler ve devirli kalanlar — tazeleme | 1 | **çekirdek** | W17 | 1 × 4 sa | [Logaritma](https://www.youtube.com/results?search_query=Tunç+Kurt+Logaritma) | Claude — Prompt 4 |
| **L2** | Polinom ve temel geometri — tazeleme | 1 | *kesildi* | — | 1 × 4 sa | [Polinomlar](https://www.youtube.com/results?search_query=Tunç+Kurt+Polinomlar) | Claude — Prompt 4 |

### Kuyruk — geri çağırma sırası (W35–W37, 44 saat)

Sınav ağırlığı × maliyet oranına göre (K26):

| Sıra | Konular | Puan | Gerekçe |
|---|---|---|---|
| 1 | A4, A5, A6 | 3 | Sıralama algoritmaları — A hattının en çok çıkan kesilebilirleri |
| 2 | C12 | 1 | C13 zaten çekirdekte, yanına ucuz ekleniyor |
| 3 | M16 | 2 | Sayı teorisi temelleri |
| 4 | A8, A10 | 2 | Bağlı liste ve BST |
| 5 | P3, P4 | 4 | P hattı ucuz ama sınav ağırlığı %9 |

**Bu sezon çalışılmayanlar (17 puan):** M6, M10, M12, M15, C11, C16, C20, A21, A15, A19, A11, A22, L2

Bunlar müfredattan silinmedi — Tier B taahhüdünün (K26) dışında bırakıldı. Kuyruk bittikten sonra yer kalırsa yine buradan alınır; öncelikleri W34 tamponunda deneme verisiyle yeniden sıralanır (S8).

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


**W26 kapısı tetiklerse düşecekler (Tier C):** A24, A25, A20, A26, A23, A9, P1 — sıra tartışmaya açık değil, kapı tampon haftasında ölçülür ve karar orada verilir (K26).

**Kesme kuralı (v4.6'da yeniden yazıldı):** Kesme artık geri kalınca yapılan bir tepki değil, baştan verilmiş bir taahhüt. Bir konu ancak ÜÇ koşulu birden sağlarsa kesilebilir: (1) çekirdek olmayacak, (2) hiçbir konunun ön koşulu olmayacak, (3) 150 soruluk ampirik tabanda frekansı 2'den az olacak. v4.3: kesme sırası programatik doğrulanıyor — bağımlısı olan konu listeye giremez.

**Kesme dışı tutulanlar:**

| ID | Gerekçe |
|---|---|

| M6 | 150 soruda 0 ama 1 puanlık ve klasik bir olimpiyat aracı; kesmek riski karşılamaz |

| C20 | Doğrudan 0 ama tuzak bilgisi tüm C bloğuna yayılıyor |


**Çekirdek işaretli 41 konu asla kesilmez** — Tier B tam olarak bu 41 konudur (79 puan).

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

### ⚠️ Deneme bir oturumdur, bir hafta değil (K19)

| Tür | Sınav | Analiz | Toplam |
|---|---|---|---|
| Madencilik seti (K17) | 45 dk | 45 dk | **1,5 sa** |
| Tam koşullu deneme | 150 dk | 90 dk | **4 sa** |

W18, W22, W26, W30, W34 ve W38 artık "deneme haftası" değil — **saf telafi haftalarıdır**, içinde bir Cumartesi oturumu vardır.

**Yeni saat modelinde bir ayar:** 4 saatlik deneme, 11 saatlik haftanın %36'sı — çok pahalı. Bu yüzden tam denemeler **yoğun (16 sa) veya tampon haftalarına** yerleştirildi; madencilik setleri standart haftalarda kalabilir.

### ⚠️ Deneme rezervi — v4.0'ta eklenen kural

Elinde çözümüyle birlikte **~23 lise Bilgisayar sınavı** var (2000–2026, TÜBİTAK arşivi). Protokol v4.6'da **9 tam oturum + 3 madencilik seti** istiyor. **İsraf edilemez.**

| Kullanım | Yıllar | Adet | Kural |
|---|---|---|---|
| **Rezerv — tam koşullu deneme** | 2019–2023 | 5 | Dokunma. Sırayla aç. |
| **Yarı rezerv** | 2014–2018 | 5 | W30 sonrası denemeler |
| **Madencilik — konu bazlı** | 2000–2013 | ~14 | Serbest. **Madencilik setlerinin kaynağı budur** (K17). Bir konu bitince o konunun sorularını tara. |
| **Kalibrasyon (W1)** | 2013 | 1 | Cevap anahtarı açık, çözmeden, 45 dk (K5) — W1 devretti, kullanılmadı |
| **⛔ YAKILDI** | 2024, 2025, 2026 | 3 | K13 etiketlemesinde kullanıldı — deneme olarak kullanılamaz |

**2024–2026 artık deneme değil, referanstır.** Bunları müfredat ölçümü için harcadık; karşılığında 150 soruluk bir dağılım haritası aldık. Doğru takas, ama geri alınamaz.

### Takvim

| # | Hafta | Tarih | Tip | Maliyet |
|---|---|---|---|---|
| — | W6 | 31 Ağu – 6 Eyl | **Madencilik seti #1** — 15 soru / 45 dk | 1,5 sa |
| — | W10 | 28 Eyl – 4 Eki | **Madencilik seti #2** — 15 soru / 45 dk | 1,5 sa |
| — | W14 | 26 Eki – 1 Kas | **Madencilik seti #3** — 15 soru / 45 dk | 1,5 sa |
| 1 | W18 | 23 Kas – 29 Kas | **İlk tam koşullu deneme** | 4 sa |
| 2 | W22 | 21 Ara – 27 Ara | tam koşullu | 4 sa |
| 3 | W26 | 18 Oca – 24 Oca | tam koşullu | 4 sa |
| 4 | W30 | 15 Şub – 21 Şub | tam koşullu | 4 sa |
| 5 | W34 | 15 Mar – 21 Mar | tam koşullu | 4 sa |
| 6 | W38 | 12 Nis – 18 Nis | tam koşullu | 4 sa |
| 7 | W41 | 3 May – 9 May | tam koşullu | 4 sa |
| 8 | W41 | 3 May – 9 May | tam koşullu | 4 sa |
| 9 | W42 | 10 May – 16 May | tam koşullu | 4 sa |

W19'da hiçbir şey yok — TFO haftası.

**Rezerv aritmetiği tutuyor:** 9 tam oturum / 10 kâğıt (2019–23 rezerv + 2014–18 yarı rezerv). Madencilik setleri 2000–2013 arşivinden beslenir, rezerv tüketmez.

**Madencilik setleri v4.6'da dörtten üçe indi** (W6, W10, W14). Sebebi W4'ün devretmesi; kalan üç set aynı işlevi görüyor ve ilk tam deneme yine W18.

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
| 1 | W18 | 23 Kas | | | | | | | | | |
| 2 | W22 | 21 Ara | | | | | | | | | |
| 3 | W26 | 18 Oca | | | | | | | | | |
| 4 | W30 | 15 Şub | | | | | | | | | |
| 5 | W34 | 15 Mar | | | | | | | | | |
| 6 | W38 | 12 Nis | | | | | | | | | |
| 7 | W41 | 3 May | | | | | | | | | |
| 8 | W41 | 3 May | | | | | | | | | |
| 9 | W42 | 10 May | | | | | | | | | |

Madencilik setleri ayrı tutulur — onlarda yalnızca **net ve soru başına süre** kaydedilir, hat kırılımı istenmez.

| Set | W | Tarih | Net | Soru başına sn |
|---|---|---|---|---|
| #1 | W6 | 31 Ağu | | |
| #2 | W10 | 28 Eyl | | |
| #3 | W14 | 26 Eki | | |

**Soru başına süre sütunu S6 içindir.** Sınavın tahmini iş yükü ~174 dk, bütçe 150 dk — bu, konu bilgisinden bağımsız bir sorundur. Trend madencilik setlerinden çıkar; ilk tam deneme (W18) beklenmez.

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

> Planın yapısal verisi bu belgede kopyalanmaz — **tek doğruluk kaynağı `plan.json`'dur.**

`plan.json` şunları taşır: `meta` (sürüm, saat modeli, kapasite, kapı, geri çağırma penceresi),
`durum` (güncel hafta, tamamlanan puan/konu, ölçülen hız), `hatlar`, `fazlar`, `bloklar`,
`haftalar[]` (42 hafta — `haftaTipi`, `saat`, `birincil[]`, `ikincil[]`, `puan`, `kumulatif`),
`konular[]` (63 konu — `tier`, `parcalar[]`, `onkosul`, `kapsam`, `calisma`, `mebKarsiligi`),
`denemeler[]`, `kaynakKatalogu`, `videoKanallari`.

Düzyazı taraf (`kararlar` ve bu bölümlerin tamamı) `metin.json`'dadır ve `source/theplan.md` ile
birebir aynıdır. Tracker ikisini de `fetch` ile yükler.

**v4.6'da eklenen alanlar:** `meta.hedefKapsam`, `meta.cekirdekPuan`, `meta.kapi`,
`meta.geriCagirmaPenceresi`, `meta.senaryolar`, `haftalar[].haftaTipi`, `haftalar[].birincil`,
`haftalar[].ikincil`, `haftalar[].kumulatif`, `haftalar[].planlananSaat`, `konular[].tier`,
`konular[].parcalar[]`, `denemeler[]`, `tierler`.
**Kaldırılan:** `haftalar[].deneme` (yerine `denemeler[]`), `konular[].beklemede`.

_(Veri buradan doğrudan uygulamaya yüklenir — konular, haftalar, bloklar, fazlar ve kaynak
kataloğu diğer sekmelerde canlı olarak görünür.)_

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
| **4.6** | **24 Ağu 2026** | **Takvim yeniden yazıldı, müfredata dokunulmadı.** M20 ≈ 8 saat sürdü → `puanBasinaSaat = 4` **doğrulandı**, K22 hız kapısı kapandı; bozuk olan haftalık saat varsayımıydı (25/15 → gerçek 11–12). Yerine hafta tipine bağlı **sabit saat modeli** (K23: yaz 21 · yoğun 16 · standart 11 · okul sınavı 12 · yarıyıl 21 · TFO 6; dönem ort. 13,5). Kapasite W5–W37: **375 üretken + 82 tampon**. Hatlar **kademeli** yürüyor (K25): 64 saatlik seri kritik yol (C1→…→A3) W7'de kesintisiz başlar, birincil slot C, ikincil slot önce M/P borcu sonra A. K16 geri ödemesinin tetikleyicisi tarih değil **borcun kapanması** oldu (K21, W13). 2+ puanlık **33 konu 4 saatlik parçalara bölündü** (K24) — tracker parça sayar, `tamamlananPuan` kesirli olabilir. Deneme bir oturumdur, bir hafta değil (K19): `haftalar[].deneme` kaldırıldı, `denemeler[]` dizisi geldi; tam denemeler yoğun/tampon haftalarına taşındı. **Kapsam taahhüdü Tier B — 41 çekirdek konu / 79 puan** (K26): 4 yanlış 1 doğruyu götürdüğü için yarım bilinen konu bilinmeyenden kötüdür. Kesilen 29 puan silinmedi, kuyruğa alındı; W35–W37 geri çağırma penceresi (12 puan), kalan 17 puan bu sezon çalışılmıyor. Tek kapı **W26 · kümülatif 57 puan**. W1–W4 devredildi (yalnızca M20 bitti). Konu (63), puan (108) ve faz (10) sayıları değişmedi. |
| **4.5** | — | Kullanılmadı. Saat modeli yanlış temelliydi; yerini v4.6'ya bıraktı. K19–K21 oradan taşındı, K20'nin metni kayıp (bkz. K20). |
| **4.4** | **7 Ağu 2026** | W1–W2 devredildi (0 puan). C hattı B0'dan çıkarıldı, 13 M/P konusu öne çekildi (K16). Deneme #1–#4 iptal, ilk tam deneme W18'e alındı, madencilik seti tanımlandı (K17). Tracker puan-öncelikli görünüme geçti (K18). Puan (108), konu (63) ve faz (10) sayıları değişmedi. |
| **4.3** | **1 Ağu 2026** | **Tam denetim + denge düzeltmesi.** ❶ **Kitap değişimi hatası:** M19 ve P2'nin kaynağı "Gürlü Böl. 6 — İspat Yöntemleri" yazıyordu; Gürlü'de öyle bir bölüm yok (Özdemir'den taşınmış). M19 → PKO bankası TYT mantık bölümü, P2 → çıkmış sorular + LSAT. ❷ **Kesme listesi kuralını çiğniyordu:** A8, A5, C12'nin bağımlıları vardı. Liste artık programatik doğrulanıyor. ❸ **Bayrak tutarsızlığı:** M10, M16, C11, C16, A21, A10 ne çekirdek ne kesilebilirdi → kesilebilir. Artık 41+22=63. ❹ **W1 %128 → %112:** M18 W3'e taşındı. ❺ **Ağırlık dengesi:** A hattı %39 (sınav %32), P hattı %5 (sınav %9) idi. **A2 2→1, A6 2→1, A10 2→1**; açılan 3 puan **P1 2→3, P2 1→2, P4 1→2**. Yeni sapmalar: A +4, P −2. P1 ve P2 çekirdek yapıldı. |
| **4.2** | **1 Ağu 2026** | **Sunuş sadeleştirildi, içerik korundu.** Değişken uzunluktaki `kaynaklar` listesi, her konuda aynı olan **4 slotluk `calisma` kartına** çevrildi (video/kaynak/soru/süre). `kapsam` ikiye ayrıldı: `ogren` ve `dikkat` (TUZAK, KLASİK SORU, DUR). **59/63 konuya Türkçe YouTube anlatımı** atandı, her biri doğrudan arama bağlantısıyla: Tunç Kurt (matematik, lise cebiri), Şadi Evren Şeker (C, algoritma), yedek kanallar. **Özdemir 2 → Gürlü · Olimpik Sonlu Matematik** değişimi: Gürlü M6, M7, M8, M12 ve P3'ü de kapsıyor. Zorunlu kitap 3 → **2**, bütçe ₺670–1.070 → **~₺500**. Tracker promptu "ana ekranda 7'den fazla tıklanabilir öğe olmasın" kuralıyla yeniden yazıldı. |
| **4.1** | **1 Ağu 2026** | **Kaynak listesi plana dahil edildi (Bölüm 7B).** Model: hat başına bir omurga; katalog 28 → **14**, zorunlu satın alma 5 → **3 kalem** (₺670–1.070). **Özdemir 2 M-üstünün tek kitabı** oldu (stok hatası düzeltildi), **Rosen koşullu listeye indi**, Türkçe YouTube omurgaları eklendi. **TYT/AYT düzeltmesi:** M-temel için "TYT+AYT branşal PKO fasikülü" (saf AYT değil — sorular çoğunlukla TYT bandında). **L hattının okul kaynağı kaldırıldı** — logaritma ve polinom 10. sınıfta işlenmiyor; YouTube + Prompt 4 ile kapatıldı. Okul dersi desteği M-temele taşındı. |
| **4.0** | **31 Tem 2026** | **Ampirik yeniden boyutlandırma (K13, K14, K15).** 2024+2025+2026 sınavlarının 150 sorusu etiketlendi. M %40 → **%24**; M'nin yarısının TYT/AYT seviyesi olduğu tespit edildi ve hat M-temel/M-üstü diye ayrıldı. **İki yeni hat: P** (mantık kurgu, 5p) **ve L** (lise cebiri, 2p). **A20 (DP) geri eklendi** ve ikiye bölündü; açgözlü 3→5, özyineleme 5→8, graf B4→B3. **Yeni konu A23** (tasarım muhakemesi). 6 konu kesildi (M11, M13, M17, C17, C19, A12). Ön koşul grafındaki 6 kırık ve 6 ters bağ onarıldı. Süre aritmetiği ve negatif puan stratejisi eklendi. Deneme rezervi kuralı yazıldı. Konu 57 → **63**, faz 9 → **10**, puan **108 (sabit)**. |

