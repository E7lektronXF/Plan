# TÜBİTAK Bilgisayar Olimpiyatı — 1. Aşama Planı

**Sürüm 5.0 · Başlangıç 11 Eylül 2026 · Hedef sınav ~15 Mayıs 2027**
Öğrenci: 10. sınıf, TED Koleji Konya · Uzun vadeli hedef: **IOI 2028** ve MIT başvurusu (Kasım 2028)

> **v5.0 neyi değiştirdi.** Önceki sürümler konuların *ağırlığını* ölçmüştü ama *derinliğini* fazla almıştı. Bu sürüm derinliği TÜBİTAK'ın kendi resmî müfredat belgesine ve sınava girmiş kişilerin yazdıklarına göre yeniden ayarlıyor. Sonuç: konu 63 → **34**, saat 692 → **~280**, ve müfredata yeni bir hat eklendi: **IOI tohum hattı**, çünkü 1. aşamaya çalışmak IOI'ye çalışmak değildir.

---

## 0. Künye

| | |
|---|---|
| Sınav | 35. Bilim Olimpiyatları 1. Aşama, Bilgisayar dalı |
| Tarih | ~15 Mayıs 2027 (34.'sü 16 Mayıs 2026'daydı) |
| Biçim | 50 çoktan seçmeli · 150 dk · 5 şık · 4 yanlış 1 doğruyu götürür |
| Yasak | Hesap makinesi, karalama kâğıdı |
| Başvuru | ~Nisan 2027, TYBS üzerinden bireysel |
| Hedef | Yaz Okulu + 2. Aşama daveti |
| **Gerçek baraj** | **Özel okul kategorisi** — değerlendirme devlet/özel ayrı yapılıyor. Hedef net: **40+** |
| Plan süresi | 35 hafta (14 Eyl 2026 – 15 May 2027) |
| Haftalık yük | 9 saat (7 sınav hattı + 2 IOI hattı) · toplam ~280 saat |
| Müfredat | 34 konu · 5 blok |
| Bütçe | 1 kitap (~₺300) + ücretsiz kaynaklar |

### Rekabet

| Yıl | Başvuru (9 dal) | 2. aşamaya geçen |
|---|---|---|
| 2024 | 14.188 | 515 |
| 2025 | 18.463 | 511 |
| 2026 | 20.828 | 517 |

Başvuru artıyor, kontenjan sabit. Bilgisayar dalında yaklaşık 55 kişi geçiyor ve bunlar devlet/özel diye ikiye bölünüyor.

---

## 1. Derinlik ayarı — planın asıl düzeltmesi

Eski plan, sınavın *ne sorduğunu* doğru ölçmüştü ama *ne kadar derin sorduğunu* yanlış tahmin etmişti. TÜBİTAK'ın kendi 1. aşama müfredat belgesi bu konuda açık:

| Kaynağın söylediği | Sonuç |
|---|---|
| "İleri matematik" soruları **ağırlıklı olarak Ortaokul Matematik Olimpiyatları seviyesinde**, zaman zaman lise olimpiyat seviyesinde | Kombinatorik teorisi değil, sayma becerisi çalışılacak |
| "Temel matematik" = **YGS/TYT konuları** | Rosen değil, TYT soru bankası |
| **Geometri sorusu sorulmuyor** | Geometri müfredatta yok |
| Algoritma soruları için "**algoritma bilgisine sahip olmak gerekmiyor, soru metni yeterli**" | Algoritmalar ezberlenmeyecek, *davranışları* elle izlenecek |
| Genel yetenek ve zekâ soruları analitik beceri ölçüyor | Teori yok, sadece pratik |
| C bölümü: kod parçası verilip **"sonuç ne olur"** soruluyor | Program yazma değil, çıktı okuma |
| C konu listesi somut ve sonlu: akış diyagramı, yapısal programlama, diziler, fonksiyonlar, pointer, string/tip, struct/union, dosya, bit işlemleri, önişlemci | Üniversitede bir dönemlik giriş dersi kadar |

Sınava girmiş kişilerin ortak tarifi de bunu doğruluyor: bir kombinatorik/sonlu matematik kitabı, C'ye giriş (ince ayrıntılar önemli) ve eski 1. aşama sorularını deneme formatında çözmek. Sınavın "bilgiden çok yatkınlık ölçtüğü", C bilgisi ölçen soru sayısının 10–12 civarında olduğu da tekrarlanan bir tespit.

### Derinlik tavanı — üç kural

1. **Bir konu, bir oturum.** Hiçbir konu iki haftaya yayılmaz. İki hafta gerekiyorsa konu fazla derin alınmıştır.
2. **Teorem değil kalıp.** Bir sonucun ispatı sorulmuyor; ne zaman kullanılacağı soruluyor. Formülü öğren, ispatı atla.
3. **Elle izle, kod yazma.** Algoritma ve veri yapıları için ölçüt şudur: 8 elemanlı bir örneği kağıtta adım adım yürütebiliyor musun? Yeterli. Kodunu yazabiliyor musun? Bu 2. aşama işi.

### Somut örnekler — nereye kadar

| Konu | Eski derinlik | v5 derinliği |
|---|---|---|
| Küme parçalanışı | Stirling sayıları, üreteç fonksiyonları | 3–4 elemanlı örnekleri elle sayma + S(n,2) ve S(n,n−1) kalıbı |
| Permütasyon döngüleri | Döngü ayrışımı teorisi | Tek bilgi: minimum takas = n − döngü sayısı |
| Yineleme bağıntıları | Karakteristik denklem çözümü | Bağıntı verilince tabloyu doldurma |
| Dinamik programlama | Algoritma tasarımı | Bağıntı verilmiş, tabloyu doldur; memoization'da çağrı sayısı |
| Huffman | Kodlama teorisi | Ağacı elle kur, kod uzunluklarını oku |
| Çizge | SCC algoritmaları (Tarjan) | BFS/DFS'i elle yürüt, keşif sırasını yaz, topolojik sıra çıkar |
| Pointer | Dinamik bellek yönetimi | `*`, `&`, dizi-pointer eşdeğerliği, `p+1`'in ne kadar kaydığı |
| Modüler aritmetik | Sayı teorisi teoremleri | Kalan bulma, son basamak, devirli örüntü |

---

## 2. İki hat — ve neden ayrılar

Bu planın en önemli yapısal kararı bu.

**Sınav hattı (7 sa/hafta).** 1. aşamayı geçmek için gereken şey: sayma kalıpları, C çıktısı okuma, algoritma davranışı, bulmaca pratiği. Bu hattın tamamı *okuma ve tanıma* becerisidir.

**IOI tohum hattı (2 sa/hafta).** IOI 2028 hedefi için gereken şey bambaşka: klavyede, saat baskısı altında, görülmemiş problemi çözen kod yazmak. Bu beceri 1. aşamada hiç ölçülmüyor — ve tam da bu yüzden Mayıs 2027'ye kadar hiç dokunulmazsa, Aralık 2027'deki 2. aşamaya sekiz ay kalmış olur.

Sınava girenlerin aktardığı yol şu: 2. aşamada asıl gelişme TÜBİTAK kamplarında oluyor, pratik için USACO ve COCI öneriliyor, katılımcıların ezici çoğunluğu C++ kullanıyor. Kamplar 1. aşamayı geçenlere açık; yani kamp senin için Ağustos–Eylül 2027'de başlıyor. O tarihe kadar temel kod yazma refleksi kurulmuş olmalı ki kamp seni sıfırdan değil, ortadan alsın.

**IOI 2028 takvimi:**

| Ne zaman | Ne |
|---|---|
| ~15 May 2027 | 1. aşama · **bu planın hedefi** |
| Ağu–Eyl 2027 | Yaz Okulu (2 hafta, davetli) |
| Kas–Ara 2027 | 2. aşama — IOI formatı, 2 gün, günde 3 soru, 5 saat · **madalya burada** |
| Oca–Şub 2028 | Kış Okulu |
| ~Nis 2028 | Takım seçme — 4 kişi |
| Ağu 2028 | IOI 2028 |

Sen o dönemde 11. sınıf olacaksın, yani takvim tutuyor. Ama dürüst olmak gerekirse dar bir kapı: yılda dört kişi. Bu planın işi seni Mayıs 2027'de kapıdan geçirmek ve kampa hazır göndermek; takım kararı Nisan 2028'de verilir ve o karar bu planın kapsamı dışındadır.

**IOI hattının haftalık işi (2 saat):** hafta içi bir gün 45 dk, hafta sonu 75 dk.
- W1–W8: C'de gerçekten program yazma (döngü, dizi, fonksiyon) — `usaco.org/usacogate` başlangıç bölümü
- W9–W20: Codeforces Div. 2 A ve B seviyesinde haftada 3–4 soru
- W21–W35: USACO Bronze bölümü, haftada 2 soru; sınav ayında 1 soru
- Kümülatif hedef Mayıs 2027: **~120 çözülmüş problem.** Bu bir madalya seviyesi değil; kampa "kod yazabilen" olarak gitmenin eşiği.

---

## 3. Müfredat — 34 konu

Sütunlar: **Süre** = tek oturumda hedeflenen saat. **DUR** = derinlik tavanı.

### M — Matematik (14 konu, ~28 saat)

| # | Konu | Süre | DUR |
|---|---|---|---|
| M1 | Sayma temelleri: toplama/çarpma kuralı, permütasyon, kombinasyon | 2 | TYT+ seviyesi. Formül türetme yok |
| M2 | Tekrarlı ve dairesel permütasyon | 1,5 | Standart kalıplar; kolye/simetri sayma yok |
| M3 | Yıldız-çubuk (özdeş nesne dağıtma) | 2 | Alt sınırlı ve sınırsız iki temel durum |
| M4 | Binom açılımı, Pascal üçgeni, temel kimlikler | 2 | C(n,k)=C(n,n−k), toplam kimliği. İspat yok |
| M5 | İçerme–dışarma | 1,5 | İki ve üç küme. Genel n-küme formülü yok |
| M6 | Küme parçalanışı ve düzensizlik (derangement) | 2 | Küçük n'i elle sayma + kalıbı tanıma |
| M7 | Olasılık | 1,5 | TYT seviyesi. Beklenen değer yok |
| M8 | Bölünebilme, EBOB/EKOK, asal çarpanlara ayırma | 1,5 | Ortaokul seviyesi tazeleme |
| M9 | Modüler aritmetik | 2 | Kalan bulma, son basamak, devir. Teorem yok |
| M10 | Mantık: önerme, doğruluk tablosu, koşullu, karşıt ters | 2 | Sembolleştirme ve tablo. Yüklem mantığı yok |
| M11 | Kümeler, bağıntı, fonksiyon, bileşke | 2 | Birebir/örten sayma soruları dahil |
| M12 | İkilik taban ve taban dönüşümleri | 1,5 | C'nin bit işlemlerinin ön koşulu |
| M13 | Logaritma, üslü ifadeler, polinom | 2 | Saf TYT/AYT. Sadece hız |
| M14 | Matris ve basit yineleme bağıntıları | 2 | Matris çarpımı; bağıntı verilince tablo doldurma |

### C — C dili (11 konu, ~26 saat)

Yöntem her konuda aynı: kısa kod parçasını al, çıktıyı **kağıda** tahmin et, sonra derleyicide doğrula. Derleyici cevap anahtarıdır.

| # | Konu | Süre | DUR |
|---|---|---|---|
| C1 | Değişkenler, aritmetik, işlem önceliği, `++`/`--` (ön/son ek) | 3 | Bu konu sınavın klasiğidir, cimrilik yapma |
| C2 | Koşullar: `if-else`, `?:`, `switch`, mantıksal operatörler, kısa devre | 2,5 | `switch` içinde `break` düşme davranışı dahil |
| C3 | Döngüler: `for`, `while`, `do-while`, `break`, `continue` | 3 | İç içe döngüde toplam yineleme sayısı |
| C4 | Diziler 1D/2D | 2 | Sınır dışı erişim davranışı dahil |
| C5 | Fonksiyonlar: tanım, `return`, parametre kopyalanması, kapsam, `static` | 2,5 | Referansla geçiş C'de yok — bu bir tuzak |
| C6 | Özyineleme: çağrı yığını, çıktı sırası, çağrı sayısı | 3 | En çok soru gelen C konusu. Ağaç çizerek çalış |
| C7 | Pointer: `&`, `*`, dizi–pointer eşdeğerliği, pointer aritmetiği | 3 | Çift pointer ve fonksiyon pointer'ı yok |
| C8 | String'ler ve ASCII | 2 | `\0`, karakter aritmetiği, temel kütüphane fonksiyonları |
| C9 | Tip davranışı: tamsayı bölmesi, tip dönüşümü, taşma, `unsigned` | 2 | Bellek düzeni ayrıntısına inme |
| C10 | Bit işlemleri: kaydırma, `&` `\|` `^` `~`, maskeleme | 2 | M12 sonrası. Bit hilesi ezberi yok |
| C11 | `struct`, `typedef`, `union`, `enum`, bağlı liste örneği | 1,5 | Yapının okunması yeter; liste yazma 2. aşama işi |

### A — Algoritma davranışı (6 konu, ~11 saat)

Resmî müfredat bu soruların algoritma bilgisi gerektirmediğini söylüyor. Buradaki amaç bilgi değil, **elle izleme hızı**.

| # | Konu | Süre | DUR |
|---|---|---|---|
| A1 | Karmaşıklık sezgisi (O gösterimi) | 1,5 | Sıralama karşılaştırması kadar. İspat yok |
| A2 | Sıralama algoritmalarının davranışı | 2 | 8 elemanlı diziyi kağıtta yürütmek |
| A3 | İkili arama ve ikili arama ağacı | 2 | Adım sayısı, ağaçta gezinme sırası |
| A4 | Yığın (heap) ve öncelik kuyruğu | 2 | Ekleme/çıkarma sonrası ağacın hali |
| A5 | Açgözlü strateji ve Huffman | 2 | Ağacı elle kur; karşı örnek bulma alışkanlığı |
| A6 | Tasarım muhakemesi: "hangi adım gereksiz / hangi ifade yanlış" | 1,5 | Şık şık eleme alışkanlığı. Bu bir sınav becerisi |

### G — Çizge (2 konu, ~4 saat)

| # | Konu | Süre | DUR |
|---|---|---|---|
| G1 | Çizge tanımı, komşuluk matrisi ve listesi, derece | 1,5 | Temsil dönüşümü yapabilmek |
| G2 | BFS, DFS, topolojik sıralama, bağlı bileşen | 2,5 | Elle yürütme ve ziyaret sırası. Dijkstra/MST yok |

### P — Bulmaca ve genel yetenek (1 konu, süreklilik)

| # | Konu | Süre | DUR |
|---|---|---|---|
| P1 | Kısıt bulmacaları, doğrucu/yalancı, tartma, ızgara | haftada 20 dk | Teori anlatımı yok. Sadece çözüp süre tutmak |

---

## 4. Takvim

Haftalar pazartesi başlar. Okul tatilleri yaklaşık; MEB takvimiyle teyit et.

### Blok 1 — Temel kurma (W1–W7 · 14 Eyl – 1 Kas)

| Hafta | Sınav hattı | IOI hattı |
|---|---|---|
| W1 · 14 Eyl | M1 · C1 · geçmiş sınav incelemesi (çözmeden, cevap anahtarı açık — 45 dk) | C'de ilk programlar |
| W2 · 21 Eyl | M10 · C1 devam | usacogate 1–3 |
| W3 · 28 Eyl | M12 · C2 | usacogate 4–6 |
| W4 · 5 Eki | M11 · C2 devam | usacogate 7–9 |
| W5 · 12 Eki | M8 · C3 | usacogate 10–12 |
| W6 · 19 Eki | M2 · C3 devam | usacogate 13–15 |
| W7 · 26 Eki | **Tampon** + Deneme #1 (sadece C ve matematik bloğu, 60 dk) | serbest |

### Blok 2 — Sayma ve C'nin gövdesi (W8–W16 · 2 Kas – 3 Oca)

| Hafta | Sınav hattı | IOI hattı |
|---|---|---|
| W8 · 2 Kas | M4 · C4 | CF Div2 A ×3 |
| W9 · 9 Kas | M3 · C4 devam | CF Div2 A ×3 |
| W10 · 16 Kas | *(ara tatil)* Deneme #2 — tam sınav, 150 dk | CF Div2 A ×4 |
| W11 · 23 Kas | M5 · C5 | CF Div2 A ×3 |
| W12 · 30 Kas | M6 · C5 devam | CF Div2 A/B ×3 |
| W13 · 7 Ara | M7 · C6 | CF Div2 B ×3 |
| W14 · 14 Ara | M9 · C6 devam | CF Div2 B ×3 |
| W15 · 21 Ara | **Tampon** + geçmiş sınav C bloğu tekrarı | CF Div2 B ×3 |
| W16 · 28 Ara | M13 · C7 | serbest |

### Blok 3 — Pointer, algoritma, çizge (W17–W24 · 4 Oca – 28 Şub)

| Hafta | Sınav hattı | IOI hattı |
|---|---|---|
| W17 · 4 Oca | C7 devam · A1 | USACO Bronze ×2 |
| W18 · 11 Oca | M14 · C8 | USACO Bronze ×2 |
| W19 · 18 Oca | Deneme #3 — tam sınav | USACO Bronze ×2 |
| W20 · 25 Oca | *(sömestr)* C9 · A2 — yoğun hafta, çift oturum | USACO Bronze ×3 |
| W21 · 1 Şub | *(sömestr)* A3 · A4 | USACO Bronze ×3 |
| W22 · 8 Şub | C10 · G1 | USACO Bronze ×2 |
| W23 · 15 Şub | G2 · A5 | USACO Bronze ×2 |
| W24 · 22 Şub | **Tampon** + Deneme #4 | USACO Bronze ×2 |

### Blok 4 — Geçmiş sınavlar (W25–W31 · 1 Mar – 18 Nis)

Bu blokta **yeni konu yok.** Her hafta bir geçmiş yıl sınavı, blok blok çözülür: matematik bloğu → C bloğu → kalanlar. Çözülen her soru "hata defteri"ne kaydedilir: hangi konu, neden kaçtı.

| Hafta | Sınav hattı | IOI hattı |
|---|---|---|
| W25 · 1 Mar | C11 · A6 (son yeni konular) | USACO Bronze ×2 |
| W26 · 8 Mar | 2019 + 2018 sınavları, blok blok | ×2 |
| W27 · 15 Mar | 2021 + 2020 | ×2 |
| W28 · 22 Mar | Deneme #5 — tam sınav · hata defteri taraması | ×1 |
| W29 · 29 Mar | 2023 + 2022 | ×2 |
| W30 · 5 Nis | 2024 + 2025 | ×1 |
| W31 · 12 Nis | *(ara tatil)* 2026 + zayıf konuların tekrarı | ×2 |

### Blok 5 — Deneme ve keskinleştirme (W32–W35 · 19 Nis – 15 May)

| Hafta | Sınav hattı |
|---|---|
| W32 · 19 Nis | Deneme #6 — tam sınav, gerçek koşul (hesap makinesi yok, karalama yok) + analiz |
| W33 · 26 Nis | Hata defterindeki en sık üç konu · 2009–2017 arası eski sınavlardan seçme sorular |
| W34 · 3 May | Deneme #7 · **AP sınav haftası çakışması — bu hafta yükü yarıya indir** |
| W35 · 10 May | Hafif tekrar, süre provası, sınav günü rutini. **~15 May: sınav** |

**Denemeler:** #1 kısmi, #2–#7 tam sınav. Hepsi 150 dakika, hesap makinesiz, karalama kâğıtsız. Deneme sonrası analiz, denemenin kendisi kadar uzun sürer.

---

## 5. Sınav taktiği

**Negatif puan aritmetiği.** 5 şık, 4 yanlış 1 doğruyu götürür. Rastgele işaretlemenin beklenen değeri tam olarak sıfırdır. Bir şıkkı bile eleyebiliyorsan işaretle; eleyemiyorsan boş bırak.

**Süre.** 50 soru / 150 dakika = soru başına 3 dakika. Ama C bloğundaki kod izleme soruları gerçekte 4–6 dakika alır. Matematikteki hız, C bloğu için zaman satın alır. Bu yüzden M13 gibi "kolay" konularda hedef derinlik değil süre: soru başına 90 saniye.

**Sıra.** Kolay matematik → C → algoritma/çizge → bulmacalar. Bulmacalar en çok süre yiyen ve en az öngörülebilir kısım; sona bırak.

**Küme soruları.** Sınav ortak gövdeli üçlü soru kümeleri kullanıyor. Bilmediğin bir konu 1 değil 3 puan götürür. Bir kümede takılırsan tümünü boş bırakıp devam et, sonra dön.

---

## 6. Kaynaklar

**Zorunlu, tek kitap.** Bir sonlu matematik / kombinatorik kaynağı. Toplulukta tekrar tekrar önerilenler: Alizade–Ufuktepe *Sonlu Matematik* (Altın Nokta, "mor kitap") ve Ertan Kaya *Kombinatorik — Saymadan Saymak*. Birini al, ikisini alma. Kitabın **yarısı** bu sınava hitap ediyor; sayma ve olasılık bölümlerini çalış, gerisini bırak.

**Geçmiş sınavlar — asıl kaynak.** `bilimolimpiyatlari.tubitak.gov.tr` üzerinde geçmiş sınav soruları yayımlanıyor, cevaplarıyla birlikte. Ortaokul Bilgisayar kitapçıklarında da iyi C soruları var; onları da çöz. Bu, planın en yüksek getirili tek kalemi.

**C için.** TÜBİTAK'ın kendi kaynak listesinde Kernighan–Ritchie *The C Programming Language* ve Deitel *C How to Program* geçiyor; ikisi de referans olarak tutulur, baştan sona okunmaz. Çıktı tahmini pratiği için geeksforgeeks'in C quiz bölümü sınavın soru tipine birebir benziyor. Türkçe video anlatım için Şadi Evren Şeker'in C ve algoritma dersleri.

**IOI hattı için.** `usaco.org` (training bölümü ve Bronze), `cses.fi/book.pdf` (Competitive Programmer's Handbook), Codeforces, inzva Algorithm Programme'ın açık ders notları. Bunlar Mayıs 2027 öncesi için değil, sonrası için asıl kütüphane.

**Ek problem havuzu.** Hong Kong Preliminary Selection Contest soruları (2003–2010) Türkçeye çevrilmiş halde dolaşımda; 1. aşamayla aynı mantıkta bir sınav. Geçmiş TÜBİTAK sınavları bittiğinde buraya geç.

**Alınmayacaklar:** Cormen *Introduction to Algorithms* (resmî listede var ama 1. aşama için fazlasıyla derin — 2. aşamada aç), Rosen *Discrete Mathematics*, üreteç fonksiyonları üzerine herhangi bir kaynak.

---

## 7. Ölçüm ve karar noktaları

Takip için tek sayı yeterli: **son denemedeki net.**

| Deneme | Hafta | Beklenen net |
|---|---|---|
| #2 | W10 | 12–18 |
| #3 | W19 | 20–26 |
| #4 | W24 | 26–32 |
| #5 | W28 | 30–36 |
| #6 | W32 | 34–40 |
| #7 | W34 | 38+ |

**Karar noktası — 1 Mart 2027 (W25).** Deneme #4'teki net:

- **30 üzeri:** hedef geçerli. Blok 4'ü planlandığı gibi yürüt.
- **22–30:** hedef geçerli ama IOI hattını Mayıs'a kadar dondur, o iki saati geçmiş sınavlara aktar.
- **22 altı:** hedefi değiştir. Bu yıl sınav "format öğrenme" turu olur, gerçek hedef Mayıs 2028'e kayar. Bu bir başarısızlık değil — 11. sınıfta girmek 10. sınıfta girmekten daha yaygın bir yol. Ama IOI 2028 takvimi bu durumda kapanır, çünkü takıma Aralık 2027 madalyasından gidiliyor.

**İkinci karar noktası — Kasım 2026 (W11).** AP kaydı. Mayıs 2027'de AP sınavları TÜBİTAK 1. aşamasıyla aynı ay. İki AP'den fazlası bu takvimde taşınmaz.

---

## 8. Neyin çıkarıldığı ve niçin

| Çıkarılan | Sebep |
|---|---|
| Sürüm numaraları, karar kaydı, denetim kayıtları | Bakım maliyeti var, net getirisi yok |
| Puan aritmetiği (108 puan, hat dengesi, hız hesabı) | Planı yönetmek çalışmanın yerini alıyordu |
| 63 konu kimliği ve 10 fazlı bağımlılık zinciri | Gerçek ön koşul sayısı beşi geçmiyor: M12→C10, C4→C7, C6 sonrası A2, M10→P1, M1→hepsi |
| Stirling sayıları, üreteç fonksiyonları, karakteristik denklem, Catalan | Sınav bu seviyeyi sormuyor; resmî müfredat "ortaokul olimpiyatı seviyesi" diyor |
| Dijkstra, MST, union-find, segment tree | 2. aşama konuları. Kampta öğrenilecek |
| Dinamik programlama tasarımı | Sınav bağıntıyı veriyor, tasarım istemiyor |
| Ayrı "M-temel / M-üstü" ayrımı | Gereksiz bölme; derinlik tavanı her konunun kendi satırında yazılı |

| Eklenen | Sebep |
|---|---|
| **IOI tohum hattı** | 1. aşama becerisi IOI becerisi değil. Kod yazma pratiği Mayıs 2027'de değil, şimdi başlamalı |
| Özel okul barajı vurgusu | Değerlendirme devlet/özel ayrı yapılıyor; hedef net buna göre 40+ |
| Hata defteri | Geçmiş sınav çözmenin getirisi, çözmekte değil kaydında |
| Sınav taktiği bölümü | Süre ve negatif puan, 3–4 net değerinde |

---

## 9. Son not

Bu sınavın erişilebilir olmasının sebebi refleks değil bilgi ölçmesi; sekiz ayda edinilebilecek şeyler soruyor. Sınava girenlerin ortak gözlemi de bu yönde: hazırlanan sayısı diğer dallara göre az, düzgün çalışan geçiyor. Ama aynı kişiler barajın oynak olduğunu ve sonucun kısmen şansa bağlı olduğunu da söylüyor — iyi kod yazan birinin iki yıl üst üste kıl payı kaçırdığı bir sınav bu.

Bunun pratik sonucu şu: planın işi garanti vermek değil, **iki yıllık bir hattın ilk yılını ucuza kapatmak.** 280 saat bunun için yeterli. Kalan zamanı asıl duvarın olduğu yere — kod yazmaya — ayır.
