/* ==========================================================================
   TÜBİTAK Bilgisayar 1. Aşama — Tracker
   Veri: data/plan.json (ayrı dosya).  İlerleme: localStorage.
   Kural: konu "kapsam"ı varsayılan olarak GİZLİDİR, tıklanınca açılır.
   ========================================================================== */

const ANAHTAR = "tubitak-bilgisayar-1asama-v1";
const DURUMLAR = ["baslamadi", "calisiliyor", "tamamlandi"];
const DURUM_AD = { baslamadi: "başlamadı", calisiliyor: "çalışılıyor", tamamlandi: "tamamlandı" };

let P = null;                 // plan verisi (data/plan.json)
let S = varsayilanDurum();    // kullanıcı durumu (localStorage)
let konuHarita = new Map();   // id -> konu
let acikKonu = null;          // panelde açık olan konu id
let aktifSekme = "panel";

/* ---------------------------------------------------------------- durum -- */

function varsayilanDurum() {
  return {
    konuDurum: {},        // { "M20": "tamamlandi", ... }
    denemeler: [],        // [{no,tarih,kaynak,m,c,a,sure,desen,aksiyon}]
    kesilen: [],          // kapsam modu: müfredattan düşülen konu id'leri
    eklenen: [],          // geri eklenen (cikarilanKonular) id'leri
    devredilen: {},       // { "B0": ["M4","M5"] }
    tema: null,
    uretkenHaftaElle: null
  };
}

function durumuYukle() {
  try {
    const ham = localStorage.getItem(ANAHTAR);
    if (ham) S = Object.assign(varsayilanDurum(), JSON.parse(ham));
  } catch (e) { /* bozuk kayıt → varsayılan */ }
}

function durumuKaydet() {
  try { localStorage.setItem(ANAHTAR, JSON.stringify(S)); } catch (e) {}
}

/* -------------------------------------------------------------- yardımcı -- */

const $ = (s, k = document) => k.querySelector(s);
const $$ = (s, k = document) => Array.from(k.querySelectorAll(s));
const kacir = (t) => String(t == null ? "" : t)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const AYLAR = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
function tarihYaz(iso) {
  if (!iso) return "—";
  const d = new Date(iso + "T00:00:00");
  return d.getDate() + " " + AYLAR[d.getMonth()] + " " + d.getFullYear();
}
function tarihKisa(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.getDate() + " " + AYLAR[d.getMonth()];
}
function bugunISO() {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function bildir(mesaj) {
  const b = $("#bildirim");
  b.textContent = mesaj;
  b.classList.add("gorunur");
  clearTimeout(b._z);
  b._z = setTimeout(() => b.classList.remove("gorunur"), 2600);
}

/* ------------------------------------------------------- türetilmiş veri -- */

function konu(id) { return konuHarita.get(id); }
function durum(id) { return S.konuDurum[id] || "baslamadi"; }
function kesikMi(id) { return S.kesilen.includes(id); }

/** Müfredatın o anki hâli: kesilenler düşülmüş, geri eklenenler katılmış. */
function aktifKonular() {
  const temel = P.konular.filter(k => !kesikMi(k.id));
  const ek = S.eklenen
    .map(id => P.cikarilanKonular.find(c => c.id === id))
    .filter(Boolean)
    .map(c => ({
      id: c.id, hat: c.hat, ad: c.ad, puan: c.puan, faz: c.eklenecekFaz,
      blok: null, hafta: null, cekirdek: false, onkosul: [],
      kapsam: ["Bu konu K7 ile müfredattan çıkarılmıştı, kapsam modunda geri eklendi.",
               "Kapsam tanımı yok — Faz " + c.eklenecekFaz + " zincirine yerleştir."],
      sonradanEklendi: true
    }));
  return temel.concat(ek);
}

function toplamlar() {
  const liste = aktifKonular();
  const t = { puan: 0, konu: liste.length, bittiPuan: 0, bittiKonu: 0, calisilan: 0, hat: {} };
  for (const h of P.hatlar) t.hat[h.id] = { puan: 0, bitti: 0, konu: 0, bittiKonu: 0 };
  for (const k of liste) {
    t.puan += k.puan;
    t.hat[k.hat].puan += k.puan;
    t.hat[k.hat].konu++;
    const d = durum(k.id);
    if (d === "tamamlandi") {
      t.bittiPuan += k.puan; t.bittiKonu++;
      t.hat[k.hat].bitti += k.puan; t.hat[k.hat].bittiKonu++;
    } else if (d === "calisiliyor") t.calisilan++;
  }
  return t;
}

/** Bugünün tarihine göre aktif hafta. */
function aktifHafta() {
  const b = bugunISO();
  const h = P.haftalar.find(w => b >= w.bas && b <= w.bit);
  if (h) return h;
  if (b < P.haftalar[0].bas) return P.haftalar[0];
  return P.haftalar[P.haftalar.length - 1];
}

function blok(id) { return P.bloklar.find(b => b.id === id); }

/** Faz ilerlemesi (kesilenler hariç). */
function fazIlerleme(f) {
  const ids = f.zincir.filter(id => !kesikMi(id));
  const eklenenler = S.eklenen
    .map(id => P.cikarilanKonular.find(c => c.id === id))
    .filter(c => c && c.eklenecekFaz === f.no).map(c => c.id);
  const hepsi = ids.concat(eklenenler);
  const tumKonular = aktifKonular();
  const bul = id => tumKonular.find(k => k.id === id);
  let puan = 0, bitti = 0, bittiAdet = 0;
  for (const id of hepsi) {
    const k = bul(id); if (!k) continue;
    puan += k.puan;
    if (durum(id) === "tamamlandi") { bitti += k.puan; bittiAdet++; }
  }
  return { ids: hepsi, puan, bitti, adet: hepsi.length, bittiAdet, tamam: hepsi.length > 0 && bittiAdet === hepsi.length };
}

/** Şu anki faz = tamamlanmamış ilk faz (ilerleme takvim değil puandır — K4). */
function simdikiFaz() {
  return P.fazlar.find(f => !fazIlerleme(f).tamam) || P.fazlar[P.fazlar.length - 1];
}
function sonrakiFaz(f) {
  return P.fazlar.find(x => x.no === f.no + 1) || null;
}

/** Ön koşulları tamamlanmış mı? */
function onkosulEksikleri(k) {
  return (k.onkosul || []).filter(id => !kesikMi(id) && durum(id) !== "tamamlandi");
}

function hizPaneli() {
  const t = toplamlar();
  const ah = aktifHafta();
  const gecen = S.uretkenHaftaElle != null
    ? S.uretkenHaftaElle
    : P.haftalar.filter(w => w.tip === "uretken" && w.w < ah.w).length;
  const hiz = gecen > 0 ? t.bittiPuan / gecen : null;
  const yazMi = blok(ah.blok).haftalikSaat === 25;
  const referans = yazMi ? P.meta.referansHizYaz : P.meta.referansHizDonem;
  const sonrakiBlok = P.bloklar.find(b => b.haftaAralik[0] > ah.w);
  const tahmin = hiz != null && sonrakiBlok ? hiz * sonrakiBlok.uretkenHafta : null;
  return { gecen, hiz, referans, sonrakiBlok, tahmin, oran: hiz != null ? hiz / referans : null };
}

function karisabilirUyari(id) {
  return P.karisabilecekIsimler.filter(g => g.konular.some(k => k.id.split(",").includes(id)));
}

/* ================================================================ ÇİZİM == */

function ciz() {
  cizPanel();
  cizKonular();
  cizFazlar();
  cizTakvim();
  cizDenemeler();
  cizKararlar();
  cizKapsam();
  cizPromptlar();
  cizGerisayim();
}

/* ------------------------------------------------------------- panel ---- */

function fazKartHTML(f, tur) {
  if (!f) {
    return `<div class="faz-kart"><div class="faz-etiket">Sıradaki</div>
      <div class="faz-no">—</div><div class="faz-ad">Müfredat bitti</div>
      <div class="faz-alt">Yeni konu kalmadı. Kalan zaman tekrar ve deneme.</div></div>`;
  }
  const ip = fazIlerleme(f);
  const zincir = ip.ids.map(id => {
    const k = aktifKonular().find(x => x.id === id);
    if (!k) return "";
    const d = durum(id);
    const kilit = d !== "tamamlandi" && onkosulEksikleri(k).length > 0;
    const sinif = [k.hat, d === "tamamlandi" ? "bitti" : "", d === "calisiliyor" ? "calisiliyor" : "", kilit ? "kilitli" : ""].join(" ");
    return `<button class="rozet ${sinif}" data-konuya="${k.id}" title="${kacir(k.ad)}">${k.id}</button>`;
  }).join('<span class="ok">→</span>');

  const alt = tur === "simdi"
    ? `<b>${ip.bitti} / ${ip.puan} puan</b> · ${ip.bittiAdet}/${ip.adet} konu bitti`
    : `<b>${ip.puan} puan</b> · ${ip.adet} konu · ${kacir(f.haftalar)}`;

  return `<div class="faz-kart ${tur}">
    <div class="faz-etiket">${tur === "simdi" ? "Şu an buradasın" : "Sıradaki aşama"}</div>
    <div class="faz-no">Faz ${f.no}</div>
    <div class="faz-ad">${kacir(f.ad)}</div>
    <div class="faz-alt">${alt}</div>
    <div class="faz-zincir">${zincir}</div>
  </div>`;
}

function cizPanel() {
  const t = toplamlar();
  const ah = aktifHafta();
  const bl = blok(ah.blok);
  const fs = simdikiFaz();
  const fn = sonrakiFaz(fs);
  const hp = hizPaneli();
  const yuzde = t.puan ? Math.round(t.bittiPuan / t.puan * 100) : 0;

  const haftaKonulari = ah.konular.filter(id => !kesikMi(id));
  const buHafta = ah.tip === "tampon"
    ? `<b>TAMPON — yeni konu yok.</b> Geri kalanı toparla, tekrar et${ah.deneme ? ", <b>Deneme #" + ah.deneme + "</b>" : ""}.`
    : ah.tip === "tekrar" ? `<b>Tam tekrar haftası.</b> ${kacir(ah.notlar.join(" · "))}`
    : ah.tip === "sinav" ? `<b>SINAV HAFTASI.</b> ${kacir(ah.notlar.join(" · "))}`
    : haftaKonulari.length
      ? "Bu hafta: " + haftaKonulari.map(id => `<button class="rozet ${konu(id).hat} ${durum(id) === "tamamlandi" ? "bitti" : ""}" data-konuya="${id}">${id}</button>`).join(" ")
      : "Konu atanmamış.";

  const notlar = ah.notlar.length
    ? `<div class="uyari">⚠️ ${ah.notlar.map(kacir).join(" · ")}</div>` : "";

  const hatlar = P.hatlar.map(h => {
    const x = t.hat[h.id];
    const y = x.puan ? Math.round(x.bitti / x.puan * 100) : 0;
    return `<div>
      <div class="satir-arasi"><span class="kucuk"><b>${h.id}</b> — ${kacir(h.ad)}</span>
        <span class="ufak">${x.bitti}/${x.puan} p · %${y}</span></div>
      <div class="cubuk ${h.id}"><i style="width:${y}%"></i></div>
      <div class="ufak">sınav ağırlığı %${Math.round(h.sinavAgirligi * 100)} · ${h.soruSayisi} soru · ${x.bittiKonu}/${x.konu} konu</div>
    </div>`;
  }).join("");

  const hizMetin = hp.hiz == null
    ? `<div class="puan-buyuk">—</div><div class="ufak">henüz üretken hafta geçmedi</div>`
    : `<div class="puan-buyuk">${hp.hiz.toFixed(1)}<small> puan/hafta</small></div>
       <div class="ufak">referans ${hp.referans.toFixed(1)} · gerçekleşen %${Math.round(hp.oran * 100)}</div>`;

  const hizUyari = hp.oran != null && hp.oran < 0.7
    ? `<div class="uyari kirmizi">${kacir(P.hizUyarisi)}</div>` : "";

  $("#panel").innerHTML = `
    <div class="hero">
      ${fazKartHTML(fs, "simdi")}
      ${fazKartHTML(fn, "sonraki")}
    </div>

    <div class="kart aralik">
      <div class="satir-arasi">
        <div>
          <span class="olcu-etiket">Takvimde neredesin</span>
          <div class="baskerville" style="font-size:1.25rem;margin-top:.15rem">
            W${ah.w} · Blok ${ah.blok} (${ah.blokIci}/${bl.hafta}) · ${kacir(bl.ad)}
          </div>
          <div class="kucuk">${tarihKisa(ah.bas)} – ${tarihKisa(ah.bit)} · ${ah.tip}${ah.ozel ? " · " + kacir(ah.ozel) : ""} · ${ah.saat} sa/hafta${ah.faz.length ? " · Faz " + ah.faz.join("–") : ""}</div>
        </div>
        <div class="kucuk" style="text-align:right">${buHafta}</div>
      </div>
      ${notlar}
    </div>

    <div class="izgara i3 aralik">
      <div class="kart">
        <span class="olcu-etiket">Tamamlanan puan</span>
        <div class="puan-buyuk">${t.bittiPuan}<small> / ${t.puan}</small></div>
        <div class="cubuk toplam"><i style="width:${yuzde}%"></i></div>
        <div class="ufak">%${yuzde} · ${t.bittiKonu} / ${t.konu} konu · ${t.calisilan} konu çalışılıyor</div>
      </div>
      <div class="kart">
        <span class="olcu-etiket">Ölçülen hız</span>
        ${hizMetin}
        <div class="ufak">${hp.gecen} üretken hafta geçti${hp.sonrakiBlok && hp.tahmin != null
          ? ` · ${hp.sonrakiBlok.id} tahmini kapasite ~${hp.tahmin.toFixed(0)} puan` : ""}</div>
      </div>
      <div class="kart">
        <span class="olcu-etiket">Sınava kalan</span>
        <div class="puan-buyuk" id="kalan-gun">—</div>
        <div class="ufak">${tarihYaz(P.meta.sinavTarihi)} · başvuru ${tarihYaz(P.meta.basvuruSonTarih)}</div>
      </div>
    </div>
    ${hizUyari}

    <div class="baslik-2">Hat ilerlemesi</div>
    <div class="kart"><div class="izgara i3">${hatlar}</div></div>

    <div class="baslik-2">42 hafta</div>
    <div class="kart">
      <div class="kaydir"><div class="serit" id="serit-panel"></div></div>
      <div id="serit-detay" class="kucuk"></div>
    </div>

    <div class="baslik-2">Karışabilecek isimler</div>
    <div class="kart">
      ${P.karisabilecekIsimler.map(g => `
        <div style="margin-bottom:.9rem">
          <b class="baskerville">"${kacir(g.terim)}"</b>
          <ul class="kapsam-liste">
            ${g.konular.map(k => `<li><span class="mono">${kacir(k.id)}</span> — ${kacir(k.anlam)} <span class="ufak">(${kacir(k.hat)})</span></li>`).join("")}
          </ul>
          <div class="ufak">${kacir(g.not)}</div>
        </div>`).join("")}
    </div>

    <div class="baslik-2">Haftalık iskelet — ${bl.haftalikSaat === 25 ? "yaz" : "dönem"}</div>
    <div class="kart">
      <div class="kaydir"><table>
        <thead><tr><th>Gün</th><th>Hat</th><th class="sayi">Saat</th><th>Not</th></tr></thead>
        <tbody>${(bl.haftalikSaat === 25 ? P.haftalikIskelet.yaz : P.haftalikIskelet.donem).map(g =>
          `<tr><td>${kacir(g.gun)}</td><td>${kacir(g.hat)}</td><td class="sayi">${g.saat}</td><td class="ufak">${kacir(g.not || "")}</td></tr>`).join("")}
        </tbody></table></div>
      <div class="ufak aralik">${kacir(P.haftalikIskelet.not)}</div>
    </div>`;

  cizSerit($("#serit-panel"), $("#serit-detay"));
  cizGerisayim();
}

function cizGerisayim() {
  const hedef = new Date(P.meta.sinavTarihi + "T00:00:00");
  const gun = Math.max(0, Math.ceil((hedef - new Date()) / 86400000));
  const g = $("#gerisayim-gun"); if (g) g.textContent = gun;
  const k = $("#kalan-gun"); if (k) k.innerHTML = gun + "<small> gün</small>";
}

/* ------------------------------------------------------- hafta şeridi ---- */

function cizSerit(kap, detay) {
  if (!kap) return;
  const ah = aktifHafta();
  kap.innerHTML = P.haftalar.map(w => {
    const sinif = ["hucre"];
    if (w.tip === "tampon") sinif.push("tampon");
    if (w.w === ah.w) sinif.push("aktif");
    if (w.tip === "sinav") sinif.push("sinav");
    if (w.w === P.meta.sonYeniKonuHaftasi) sinif.push("sonyeni");
    const im = w.tip === "sinav" ? "★" : w.deneme ? "D" : w.kapanis ? "◆" : "";
    return `<div class="${sinif.join(" ")}" data-blok="${w.blok}" data-hafta="${w.w}"
      title="W${w.w} · ${w.blok} · ${w.tip}">${im ? `<span class="im">${im}</span>` : ""}${w.w}</div>`;
  }).join("");

  const goster = (w) => {
    const konular = w.konular.filter(id => !kesikMi(id));
    detay.innerHTML = `<div class="uyari" style="border-left-color:var(--v-aktif);background:color-mix(in srgb,var(--v-aktif) 10%,transparent)">
      <b>W${w.w}</b> · ${w.blok} (${w.blokIci}) · ${tarihKisa(w.bas)} – ${tarihKisa(w.bit)} ·
      <b>${w.tip.toUpperCase()}</b>${w.ozel ? " · " + kacir(w.ozel) : ""} · ${w.saat} sa · ${w.puan} puan
      ${w.deneme ? " · <b>Deneme #" + w.deneme + "</b>" : ""}${w.kapanis ? " · <b>" + w.kapanis + " KAPANIŞI</b>" : ""}
      ${konular.length ? "<br>Konular: " + konular.map(id => `<button class="rozet ${konu(id).hat} ${durum(id) === "tamamlandi" ? "bitti" : ""}" data-konuya="${id}">${id}</button>`).join(" ") : ""}
      ${w.notlar.length ? "<br><span class='ufak'>" + w.notlar.map(kacir).join(" · ") + "</span>" : ""}
    </div>`;
  };
  goster(ah);
  $$(".hucre", kap).forEach(h => h.addEventListener("click", () => {
    goster(P.haftalar.find(w => w.w === +h.dataset.hafta));
  }));
}

/* ------------------------------------------------------------ konular ---- */

let konuFiltre = { hat: "hepsi", durum: "hepsi", ara: "" };

function cizKonular() {
  const liste = aktifKonular().filter(k => {
    if (konuFiltre.hat !== "hepsi" && k.hat !== konuFiltre.hat) return false;
    if (konuFiltre.durum === "kalan" && durum(k.id) === "tamamlandi") return false;
    if (konuFiltre.durum === "cekirdek" && !k.cekirdek) return false;
    if (konuFiltre.ara) {
      const q = konuFiltre.ara.toLocaleLowerCase("tr");
      if (!(k.id + " " + k.ad).toLocaleLowerCase("tr").includes(q)) return false;
    }
    return true;
  });

  const t = toplamlar();
  const gruplu = {};
  for (const k of liste) (gruplu[k.hat] = gruplu[k.hat] || []).push(k);

  const govde = P.hatlar.filter(h => gruplu[h.id]).map(h => `
    <div class="baslik-2">${h.id} — ${kacir(h.ad)} · ${gruplu[h.id].length} konu ·
      ${t.hat[h.id].bitti}/${t.hat[h.id].puan} puan</div>
    ${gruplu[h.id].map(konuSatirHTML).join("")}`).join("");

  $("#konular").innerHTML = `
    <div class="filtreler">
      <div class="secim" data-filtre="hat">
        ${["hepsi", "M", "C", "A"].map(v => `<button data-v="${v}" aria-pressed="${konuFiltre.hat === v}">${v === "hepsi" ? "Tümü" : v}</button>`).join("")}
      </div>
      <div class="secim" data-filtre="durum">
        ${[["hepsi", "Hepsi"], ["kalan", "Kalanlar"], ["cekirdek", "Çekirdek ✅"]].map(([v, a]) =>
          `<button data-v="${v}" aria-pressed="${konuFiltre.durum === v}">${a}</button>`).join("")}
      </div>
      <input type="text" id="konu-ara" placeholder="konu ara…" value="${kacir(konuFiltre.ara)}" style="flex:1;min-width:160px">
      <span class="ufak">${liste.length} konu gösteriliyor</span>
    </div>
    <div class="ufak" style="margin-bottom:.8rem">Kapsam gizlidir — bir konuya tıkla, ne öğrenileceği ve <b>nerede durulacağı</b> açılsın.</div>
    ${govde || '<div class="kart">Eşleşen konu yok.</div>'}`;

  if (acikKonu) {
    const el = $(`.konu-satir[data-id="${acikKonu}"]`);
    if (el) acKonuPanel(el, acikKonu);
  }
}

function konuSatirHTML(k) {
  const d = durum(k.id);
  const eksik = onkosulEksikleri(k);
  return `<div class="konu-satir ${d}" data-id="${k.id}" data-hat="${k.hat}">
    <button class="konu-bas" data-ac="${k.id}">
      <span class="durum-nokta ${d}"></span>
      <span class="konu-id">${k.id}</span>
      <span class="konu-ad">${kacir(k.ad)}${k.cekirdek ? ' <span class="yildiz" title="çekirdek — asla kesilmez">✅</span>' : ""}</span>
      <span class="konu-meta">${k.puan} p · Faz ${k.faz}${k.hafta ? " · W" + k.hafta : ""}${eksik.length ? " · 🔒" : ""}</span>
    </button>
  </div>`;
}

function acKonuPanel(satir, id) {
  const k = aktifKonular().find(x => x.id === id);
  if (!k) return;
  const d = durum(id);
  const eksik = onkosulEksikleri(k);
  const uyarilar = karisabilirUyari(id);

  const kapsam = (k.kapsam || []).map(m => {
    let s = "";
    if (/^DUR:/.test(m)) s = "dur";
    else if (/^TUZAK:/.test(m)) s = "tuzak";
    else if (/^(KLASİK SORU:|KLASIK SORU:|SINAVDA ÇOK SIK)/.test(m)) s = "klasik";
    return `<li class="${s}">${kacir(m)}</li>`;
  }).join("");

  const onkosul = (k.onkosul || []).length
    ? (k.onkosul || []).map(o => {
        const ok = durum(o) === "tamamlandi";
        return `<button class="rozet ${konu(o) ? konu(o).hat : ""} ${ok ? "bitti" : ""}" data-konuya="${o}"
          title="${kacir(konu(o) ? konu(o).ad : o)}">${o}${ok ? " ✓" : ""}</button>`;
      }).join(" ")
    : '<span class="ufak">yok</span>';

  const bagimlilar = P.konular.filter(x => (x.onkosul || []).includes(id));

  const eskiPanel = satir.querySelector(".konu-panel");
  if (eskiPanel) eskiPanel.remove();

  const panel = document.createElement("div");
  panel.className = "konu-panel";
  panel.innerHTML = `
    <div class="yigin" style="margin:.7rem 0">
      <span class="ufak">Durum:</span>
      <div class="secim" data-durum-icin="${id}">
        ${DURUMLAR.map(v => `<button data-v="${v}" aria-pressed="${d === v}">${DURUM_AD[v]}</button>`).join("")}
      </div>
      <span class="ufak">Faz ${k.faz}${k.hafta ? " · W" + k.hafta : ""}${k.blok ? " · " + k.blok : ""} · ${k.puan} puan${k.cekirdek ? " · çekirdek" : ""}</span>
    </div>
    ${eksik.length ? `<div class="uyari">🔒 Ön koşulu bitmemiş: <b>${eksik.join(", ")}</b>. Zincir kırılırsa konu havada kalır.</div>` : ""}
    ${uyarilar.map(g => `<div class="uyari kirmizi">⚠️ <b>"${kacir(g.terim)}"</b> karışabilir — ${kacir(g.not)}</div>`).join("")}
    <div class="ufak">Kapsam — ne öğrenilecek, nerede durulacak</div>
    <ul class="kapsam-liste">${kapsam}</ul>
    <div class="yigin"><span class="ufak">Ön koşullar:</span> ${onkosul}</div>
    ${bagimlilar.length ? `<div class="yigin" style="margin-top:.4rem"><span class="ufak">Buna bağımlı:</span>
      ${bagimlilar.map(b => `<button class="rozet ${b.hat}" data-konuya="${b.id}">${b.id}</button>`).join(" ")}</div>` : ""}
    <div class="yigin" style="margin-top:.7rem">
      <button class="dugme kucuk" data-prompt-konu="${id}">Prompt 4 — bu konu için çalışma oturumu üret</button>
    </div>`;
  satir.appendChild(panel);
}

/* -------------------------------------------------------------- fazlar --- */

function cizFazlar() {
  const fs = simdikiFaz();
  const tum = aktifKonular();

  $("#fazlar").innerHTML = `
    <div class="ufak" style="margin-bottom:1rem">Faz sırası ve faz içi sıra bağlayıcıdır. Tamamlananlar dolu,
      ön koşulu bitmemişler soluk. Bir rozete tıkla → konu listesinde kapsamı açılır.</div>
    ${P.fazlar.map(f => {
      const ip = fazIlerleme(f);
      const zincir = ip.ids.map(id => {
        const k = tum.find(x => x.id === id); if (!k) return "";
        const d = durum(id);
        const kilit = d !== "tamamlandi" && onkosulEksikleri(k).length > 0;
        return `<button class="rozet ${k.hat} ${d === "tamamlandi" ? "bitti" : ""} ${d === "calisiliyor" ? "calisiliyor" : ""} ${kilit ? "kilitli" : ""}"
          data-konuya="${id}" title="${kacir(k.ad)} — ${k.puan} puan">${id}</button>`;
      }).join('<span class="ok">→</span>');
      const y = ip.puan ? Math.round(ip.bitti / ip.puan * 100) : 0;
      return `<div class="faz-blok ${f.no === fs.no ? "aktif" : ""}">
        <div class="satir-arasi">
          <h3>Faz ${f.no} · ${kacir(f.ad)}</h3>
          <span class="ufak">${ip.adet} konu · ${ip.bitti}/${ip.puan} puan · ${kacir(f.haftalar)}</span>
        </div>
        <div class="cubuk toplam" style="margin-bottom:.7rem"><i style="width:${y}%"></i></div>
        <div class="faz-zincir">${zincir}</div>
        <div class="faz-gerekce">${kacir(f.gerekce)}</div>
      </div>`;
    }).join("")}`;
}

/* ------------------------------------------------------------- takvim ---- */

function cizTakvim() {
  const ah = aktifHafta();
  const t = toplamlar();

  const bloklar = P.bloklar.map(b => {
    const kendi = aktifKonular().filter(k => k.blok === b.id);
    const bittiP = kendi.filter(k => durum(k.id) === "tamamlandi").reduce((s, k) => s + k.puan, 0);
    const toplamP = kendi.reduce((s, k) => s + k.puan, 0);
    const eksik = kendi.filter(k => durum(k.id) !== "tamamlandi");
    const dev = S.devredilen[b.id] || [];
    const aktifMi = ah.w >= b.haftaAralik[0] && ah.w <= b.haftaAralik[1];
    return `<div class="blok-kart ${aktifMi ? "aktif" : ""}">
      <div class="satir-arasi"><h4>${b.id} · ${kacir(b.ad)}</h4>
        <span class="ufak">W${b.haftaAralik[0]}–${b.haftaAralik[1]}</span></div>
      <div class="ufak">${tarihKisa(b.baslangic)} – ${tarihKisa(b.bitis)} · ${b.uretkenHafta} üretken hafta ·
        ${b.kapasiteSaat} sa kapasite${b.doluluk ? " · doluluk %" + Math.round(b.doluluk * 100) : ""}</div>
      <div class="cubuk toplam"><i style="width:${toplamP ? Math.round(bittiP / toplamP * 100) : 0}%"></i></div>
      <div class="ufak">${bittiP}/${toplamP} puan · ${kendi.length} konu · ${kacir(b.fazKapsam)}</div>
      ${b.not ? `<div class="ufak" style="margin-top:.3rem">⚠️ ${kacir(b.not)}</div>` : ""}
      ${dev.length ? `<div class="uyari" style="margin:.5rem 0 0">Devredilen: <b>${dev.join(", ")}</b></div>` : ""}
      ${eksik.length ? `<div class="yigin" style="margin-top:.6rem">
        <button class="dugme kucuk" data-devret="${b.id}">Devret (${eksik.length} konu → sonraki blok)</button></div>` : ""}
    </div>`;
  }).join("");

  $("#takvim").innerHTML = `
    <div class="kart">
      <div class="kaydir"><div class="serit" id="serit-takvim"></div></div>
      <div id="serit-detay-2"></div>
      <div class="efsane aralik">
        ${P.bloklar.map(b => `<span><i class="kutucuk" style="background:color-mix(in srgb,${{
          B0: "var(--v-m)", B1: "var(--v-a)", B2: "var(--v-uyari)", B3: "var(--v-aktif)", B4: "var(--v-c)", B5: "var(--lacivert)"
        }[b.id]} 22%, var(--kart))"></i>${b.id} ${kacir(b.ad)}</span>`).join("")}
        <span><i class="kutucuk tampon"></i>tampon</span>
        <span>D = deneme</span><span>◆ = blok kapanışı</span><span>★ = sınav</span>
      </div>
    </div>

    <div class="baslik-2">Bloklar</div>
    <div class="izgara i3">${bloklar}</div>

    <div class="baslik-2">Hafta hafta</div>
    <div class="kart kaydir">
      <table>
        <thead><tr><th>W</th><th>Blok</th><th>Tarih</th><th>Tip</th><th class="sayi">Sa</th><th>Faz</th><th>Konular</th><th class="sayi">P</th></tr></thead>
        <tbody>${P.haftalar.map(w => `<tr style="${w.w === ah.w ? "background:color-mix(in srgb,var(--v-aktif) 12%,transparent)" : ""}">
          <td><b>${w.w}</b></td><td>${w.blok} (${w.blokIci})</td>
          <td class="ufak">${tarihKisa(w.bas)} – ${tarihKisa(w.bit)}</td>
          <td>${w.tip === "tampon" ? "<b>TAMPON</b>" : w.tip === "sinav" ? "<b>SINAV</b>" : kacir(w.tip)}${w.deneme ? ` · D#${w.deneme}` : ""}${w.kapanis ? ` · ${w.kapanis}◆` : ""}</td>
          <td class="sayi">${w.saat}</td><td>${w.faz.join("–") || "—"}</td>
          <td>${w.konular.map(id => `<button class="rozet ${konu(id).hat} ${durum(id) === "tamamlandi" ? "bitti" : ""} ${kesikMi(id) ? "kilitli" : ""}" data-konuya="${id}">${id}</button>`).join(" ")}
            ${w.notlar.length ? `<div class="ufak">${w.notlar.map(kacir).join(" · ")}</div>` : ""}</td>
          <td class="sayi">${w.puan}</td></tr>`).join("")}</tbody>
      </table>
    </div>

    <div class="baslik-2">Bütçe aritmetiği</div>
    <div class="kart">
      <div class="kaydir"><table>
        <thead><tr><th>Kalem</th><th class="sayi">Hafta</th><th class="sayi">Saat</th></tr></thead>
        <tbody>${P.butce.kalemler.map(k => `<tr><td>${k.toplam ? "<b>" + kacir(k.kalem) + "</b>" : kacir(k.kalem)}</td>
          <td class="sayi">${k.hafta}</td><td class="sayi">${k.toplam ? "<b>" + k.saat + "</b>" : k.saat}</td></tr>`).join("")}</tbody>
      </table></div>
      <div class="uyari aralik">${kacir(P.butce.pay)}</div>
      <div class="kucuk">${kacir(P.butce.not)}</div>
      <div class="ufak aralik">💡 ${kacir(P.butce.ipucu)} · 1 puan ≈ ${P.meta.puanBasinaSaat} saat (ilk geçiş)</div>
      <div class="uyari" style="border-left-color:var(--v-a)">${kacir(P.tamponKurali)}</div>
    </div>

    <div class="baslik-2">Blok kapanış ritüeli</div>
    <div class="kart">
      <div class="ufak">${kacir(P.blokKapanisRitueli.nezaman)}</div>
      <ol class="kapsam-liste">${P.blokKapanisRitueli.adimlar.map(a =>
        `<li><b>${kacir(a.ad)}.</b> ${kacir(a.metin)}</li>`).join("")}</ol>
      <div class="ufak">${kacir(P.blokKapanisRitueli.son)}</div>
      <div class="yigin aralik"><button class="dugme" data-prompt-blok="1">Prompt 2 — blok kapanışı promptunu üret</button></div>
    </div>`;

  cizSerit($("#serit-takvim"), $("#serit-detay-2"));
}

/* ---------------------------------------------------------- denemeler ---- */

function cizDenemeler() {
  const d = S.denemeler.slice().sort((a, b) => a.no - b.no);
  const sonraki = (d.length ? Math.max(...d.map(x => x.no)) : 0) + 1;

  $("#denemeler").innerHTML = `
    <div class="izgara i2">
      <div class="kart">
        <div class="baslik-2" style="margin-top:0">Deneme gir</div>
        <form id="deneme-form" class="izgara" style="gap:.6rem">
          <div class="yigin">
            <label class="ufak">No <input type="number" name="no" value="${sonraki}" min="1" style="width:70px"></label>
            <label class="ufak">Tarih <input type="date" name="tarih" value="${bugunISO()}"></label>
          </div>
          <label class="ufak">Kaynak / yıl <input type="text" name="kaynak" placeholder="2023 1. aşama" style="width:100%"></label>
          <div class="yigin">
            <label class="ufak">M /20 <input type="number" name="m" min="0" max="20" value="0" style="width:70px"></label>
            <label class="ufak">C /15 <input type="number" name="c" min="0" max="15" value="0" style="width:70px"></label>
            <label class="ufak">A /15 <input type="number" name="a" min="0" max="15" value="0" style="width:70px"></label>
          </div>
          <label class="ufak">Süre yetti mi
            <select name="sure"><option>evet</option><option>hayır</option></select></label>
          <label class="ufak">En büyük hata deseni
            <input type="text" name="desen" placeholder="ör. C4 tip dönüşümü" style="width:100%"></label>
          <label class="ufak">Aksiyon
            <input type="text" name="aksiyon" placeholder="tampon haftasına atanacak iş" style="width:100%"></label>
          <div class="yigin"><button class="dugme ana" type="submit">Kaydet</button>
            <button class="dugme" type="button" data-prompt-deneme="1">Prompt 3 — analiz promptu üret</button></div>
        </form>
      </div>
      <div class="kart">
        <div class="baslik-2" style="margin-top:0">Netlerin seyri</div>
        ${d.length ? denemeGrafik(d) : '<div class="ufak">Henüz deneme yok. İlk deneme W4 (17–23 Ağu 2026).</div>'}
        <div class="efsane aralik">
          <span><i class="kutucuk" style="background:var(--v-m)"></i>M /20</span>
          <span><i class="kutucuk" style="background:var(--v-c)"></i>C /15</span>
          <span><i class="kutucuk" style="background:var(--v-a)"></i>A /15</span>
        </div>
      </div>
    </div>

    <div class="baslik-2">Deneme kaydı</div>
    <div class="kart kaydir">
      <table>
        <thead><tr><th>#</th><th>Tarih</th><th>Kaynak</th><th class="sayi">M/20</th><th class="sayi">C/15</th>
          <th class="sayi">A/15</th><th class="sayi">Top/50</th><th>Süre</th><th>Hata deseni</th><th>Aksiyon</th><th></th></tr></thead>
        <tbody>${d.length ? d.map(x => `<tr>
          <td><b>${x.no}</b></td><td class="ufak">${tarihKisa(x.tarih)}</td><td class="ufak">${kacir(x.kaynak)}</td>
          <td class="sayi">${x.m}</td><td class="sayi">${x.c}</td><td class="sayi">${x.a}</td>
          <td class="sayi"><b>${x.m + x.c + x.a}</b></td><td class="ufak">${kacir(x.sure)}</td>
          <td class="ufak">${kacir(x.desen)}</td><td class="ufak">${kacir(x.aksiyon)}</td>
          <td><button class="dugme kucuk" data-deneme-sil="${x.no}">sil</button></td></tr>`).join("")
          : '<tr><td colspan="11" class="ufak">Kayıt yok.</td></tr>'}</tbody>
      </table>
    </div>

    <div class="baslik-2">Protokol</div>
    <div class="kart">
      <div class="kucuk">${kacir(P.denemeProtokolu.kural)}</div>
      <ol class="kapsam-liste aralik">${P.denemeProtokolu.kurallar.map(k => `<li>${kacir(k)}</li>`).join("")}</ol>
      <div class="kaydir"><table>
        <thead><tr><th>#</th><th>Hafta</th><th>Tarih</th></tr></thead>
        <tbody>${P.denemeProtokolu.takvim.map(t => `<tr><td>${kacir(t.no)}</td><td>${kacir(t.hafta)}</td><td class="ufak">${kacir(t.tarih)}</td></tr>`).join("")}</tbody>
      </table></div>
    </div>`;
}

function denemeGrafik(d) {
  const W = 460, H = 220, L = 32, R = 12, T = 14, B = 26;
  const n = d.length;
  const x = i => L + (n === 1 ? (W - L - R) / 2 : i * (W - L - R) / (n - 1));
  const y = v => T + (20 - v) * (H - T - B) / 20;
  const cizgi = (alan, renk) => {
    const p = d.map((x0, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(x0[alan]).toFixed(1)}`).join(" ");
    const nok = d.map((x0, i) => `<circle cx="${x(i).toFixed(1)}" cy="${y(x0[alan]).toFixed(1)}" r="3" fill="${renk}"/>`).join("");
    return `<path d="${p}" fill="none" stroke="${renk}" stroke-width="2" stroke-linejoin="round"/>${nok}`;
  };
  const kilavuz = [0, 5, 10, 15, 20].map(v =>
    `<line class="kilavuz" x1="${L}" y1="${y(v)}" x2="${W - R}" y2="${y(v)}"/>
     <text x="${L - 6}" y="${y(v) + 3}" text-anchor="end">${v}</text>`).join("");
  const etiket = d.map((x0, i) => `<text x="${x(i)}" y="${H - 8}" text-anchor="middle">#${x0.no}</text>`).join("");
  return `<svg class="grafik" viewBox="0 0 ${W} ${H}" role="img" aria-label="Deneme netleri">
    ${kilavuz}${etiket}
    ${cizgi("m", "var(--v-m)")}${cizgi("c", "var(--v-c)")}${cizgi("a", "var(--v-a)")}
  </svg>`;
}

/* ----------------------------------------------------------- kararlar ---- */

function cizKararlar() {
  $("#kararlar").innerHTML = `
    <div class="kart">
      <div class="ufak">Bu bölüm planın hafızasıdır. Her karar, tarihi ve gerekçesiyle burada.
        Bir sonraki oturumda bunlar yeniden tartışılmaz — sadece yeni bilgi geldiyse revize edilir.</div>
    </div>

    <div class="baslik-2">Künye</div>
    <div class="kart kaydir"><table><tbody>
      ${P.kunye.map(k => `<tr><th style="width:34%">${kacir(k.alan)}</th><td>${kacir(k.deger)}</td></tr>`).join("")}
    </tbody></table></div>

    <div class="baslik-2">Başlangıç durumu (${tarihYaz(P.baslangicDurumu.tarih)})</div>
    <div class="kart">
      <div class="kaydir"><table>
        <thead><tr><th>Hat</th><th>Tahmini net</th><th>Not</th></tr></thead>
        <tbody>${P.baslangicDurumu.hatlar.map(h => `<tr><td><b>${h.hat}</b> — ${kacir(h.ad)}</td>
          <td>${kacir(h.tahminiNet)}</td><td class="ufak">${kacir(h.not)}</td></tr>`).join("")}</tbody>
      </table></div>
      <div class="uyari">${kacir(P.baslangicDurumu.not)}</div>
    </div>

    <div class="baslik-2">Sınav kompozisyonu</div>
    <div class="kart">
      <div class="kaydir"><table>
        <thead><tr><th>Blok</th><th class="sayi">Soru</th><th class="sayi">Ağırlık</th><th>İçerik</th></tr></thead>
        <tbody>${P.sinavKompozisyonu.bloklar.map(b => `<tr><td><b>${b.hat}</b> — ${kacir(b.ad)}</td>
          <td class="sayi">~${b.soru}</td><td class="sayi">%${Math.round(b.agirlik * 100)}</td>
          <td class="ufak">${kacir(b.icerik)}</td></tr>`).join("")}</tbody>
      </table></div>
      <div class="uyari" style="border-left-color:var(--v-a)"><b>${kacir(P.sinavKompozisyonu.not)}</b></div>
    </div>

    <div class="baslik-2">Karar kaydı — K1…K10</div>
    ${P.kararlar.map(k => `<div class="karar">
      <h3>${k.id} · ${kacir(k.baslik)}</h3>
      <div class="tarih">${tarihYaz(k.tarih)}</div>
      <dl>${k.bolumler.map(b => `<dt>${kacir(b.etiket)}</dt><dd>${kacir(b.metin)}</dd>`).join("")}</dl>
    </div>`).join("")}

    <div class="baslik-2">Reddedilen seçenekler — tekrar önerilmesin</div>
    <div class="kart kaydir"><table>
      <thead><tr><th>Seçenek</th><th>Neden reddedildi</th></tr></thead>
      <tbody>${P.reddedilenler.map(r => `<tr><td>${kacir(r.secenek)}</td><td class="ufak">${kacir(r.neden)}</td></tr>`).join("")}</tbody>
    </table></div>

    <div class="baslik-2">Açık sorular</div>
    <div class="kart kaydir"><table>
      <thead><tr><th>#</th><th>Soru</th><th>Ne zaman netleşir</th></tr></thead>
      <tbody>${P.acikSorular.map(s => `<tr><td><b>${s.id}</b></td><td>${kacir(s.soru)}</td><td class="ufak">${kacir(s.nezaman)}</td></tr>`).join("")}</tbody>
    </table></div>

    <div class="baslik-2">Perspektif</div>
    <div class="kart">${P.perspektif.map(p => `<p>${kacir(p)}</p>`).join("")}</div>

    <div class="baslik-2">Sürüm geçmişi</div>
    <div class="kart kaydir"><table>
      <thead><tr><th>Sürüm</th><th>Tarih</th><th>Değişiklik</th></tr></thead>
      <tbody>${P.surumGecmisi.map(s => `<tr><td><b>${kacir(s.surum)}</b></td><td class="ufak">${kacir(s.tarih)}</td>
        <td class="ufak">${kacir(s.degisiklik)}</td></tr>`).join("")}</tbody>
    </table></div>`;
}

/* ------------------------------------------------------------- kapsam ---- */

function kesilebilirMi(id) {
  const k = konu(id);
  if (!k) return { olur: false, neden: "Konu bulunamadı." };
  if (k.cekirdek) return { olur: false, neden: "Çekirdek konu (✅) — asla kesilmez." };
  const bagimli = P.konular.filter(x => !kesikMi(x.id) && (x.onkosul || []).includes(id));
  if (bagimli.length) return { olur: false, neden: "Başkasının ön koşulu: " + bagimli.map(b => b.id).join(", ") + ". Zincir bozulur." };
  return { olur: true };
}

function cizKapsam() {
  const t = toplamlar();
  const kesmeSirasi = P.sonrakiKesmeSirasi.map(id => {
    const k = konu(id); const ks = kesilebilirMi(id); const kesik = kesikMi(id);
    return `<tr><td><b>${id}</b></td><td>${kacir(k.ad)}</td><td class="sayi">${k.puan}</td>
      <td>${kesik ? '<span class="ufak">kesildi</span>' : ks.olur ? '<span class="ufak">kesilebilir</span>' : '<span class="ufak">🔒 ' + kacir(ks.neden) + "</span>"}</td>
      <td>${kesik ? `<button class="dugme kucuk" data-geri-al="${id}">geri al</button>`
        : `<button class="dugme kucuk" data-kes="${id}" ${ks.olur ? "" : "disabled"}>kes</button>`}</td></tr>`;
  }).join("");

  const eklenebilir = P.cikarilanKonular.map(c => {
    const ekli = S.eklenen.includes(c.id);
    return `<tr><td><b>${c.id}</b></td><td>${kacir(c.ad)}</td><td class="sayi">${c.puan}</td>
      <td class="ufak">${c.geriEklemeSirasi}. sıra · Faz ${c.eklenecekFaz}</td>
      <td>${ekli ? `<button class="dugme kucuk" data-cikar="${c.id}">çıkar</button>`
        : `<button class="dugme kucuk" data-ekle="${c.id}">ekle</button>`}</td></tr>`;
  }).join("");

  const cekirdek = P.konular.filter(k => k.cekirdek);

  $("#kapsam").innerHTML = `
    <div class="kart">
      <div class="satir-arasi">
        <div><span class="olcu-etiket">Güncel müfredat</span>
          <div class="puan-buyuk">${t.puan}<small> puan</small></div>
          <div class="ufak">${t.konu} konu · başlangıç 108 puan / 57 konu</div></div>
        <div class="ufak" style="max-width:56ch">Kesme ve ekleme zinciri bozamaz. Bir konuyu düşürürken
          <span class="mono">onkosul</span> alanına bakılır: o konu başkasının ön koşuluysa düşürülemez.
          Çekirdek işaretli <b>${cekirdek.length} konu</b> dokunulmazdır.</div>
      </div>
    </div>

    <div class="baslik-2">Daha da geri kalınırsa kesilecek sıra</div>
    <div class="kart kaydir"><table>
      <thead><tr><th>ID</th><th>Konu</th><th class="sayi">P</th><th>Durum</th><th></th></tr></thead>
      <tbody>${kesmeSirasi}</tbody></table>
      <div class="ufak aralik">Sıra: ${P.sonrakiKesmeSirasi.join(" → ")}</div>
    </div>

    <div class="baslik-2">Müfredat dışı bırakılanlar (K7) — hız yeterse geri eklenir</div>
    <div class="kart kaydir"><table>
      <thead><tr><th>ID</th><th>Konu</th><th class="sayi">P</th><th>Geri ekleme</th><th></th></tr></thead>
      <tbody>${eklenebilir}</tbody></table>
      <div class="ufak aralik">Geri ekleme koşulu: W22'de ölçülen hız beklentiyi aşarsa, kesme listesinin tersinden eklenir (K7).</div>
    </div>

    <div class="baslik-2">Çekirdek konular — asla kesilmez (${cekirdek.length})</div>
    <div class="kart"><div class="faz-zincir">
      ${cekirdek.map(k => `<button class="rozet ${k.hat}" data-konuya="${k.id}" title="${kacir(k.ad)}">${k.id}</button>`).join("")}
    </div></div>

    <div class="baslik-2">Veri</div>
    <div class="kart">
      <div class="yigin">
        <button class="dugme" id="disa-aktar">İlerlemeyi JSON olarak indir</button>
        <label class="dugme" style="cursor:pointer">İçe aktar<input type="file" id="ice-aktar" accept="application/json" hidden></label>
        <button class="dugme" id="sifirla">Tüm ilerlemeyi sıfırla</button>
      </div>
      <div class="ufak aralik">Müfredat verisi <span class="mono">data/plan.json</span> dosyasında durur ve değişmez.
        Burada dışa aktarılan yalnızca senin ilerlemendir (konu durumları, denemeler, kesme/ekleme kararları).</div>
    </div>`;
}

/* ----------------------------------------------------------- promptlar --- */

function promptDoldur(p) {
  const ah = aktifHafta(), bl = blok(ah.blok), t = toplamlar(), hp = hizPaneli();
  const bitmis = aktifKonular().filter(k => durum(k.id) === "tamamlandi").map(k => k.id);
  const bitmemis = aktifKonular().filter(k => k.blok === ah.blok && durum(k.id) !== "tamamlandi").map(k => k.id);
  const son = S.denemeler.slice().sort((a, b) => b.no - a.no)[0];

  const s = {
    "{{HAFTA}}": "W" + ah.w,
    "{{BLOK}}": ah.blok + " · " + bl.ad,
    "{{BLOK_ICI}}": ah.blokIci + "/" + bl.hafta,
    "{{TIP}}": ah.tip,
    "{{FAZ}}": ah.faz.join("–") || String(simdikiFaz().no),
    "{{KONULAR}}": ah.konular.filter(id => !kesikMi(id)).map(id => id + " (" + konu(id).ad + ", " + konu(id).puan + "p)").join("; ") || "yok",
    "{{ISKELET}}": bl.haftalikSaat === 25 ? "yaz (25 sa)" : "dönem (15 sa)",
    "{{TARIH}}": tarihYaz(bugunISO()),
    "{{PUAN}}": String(t.bittiPuan),
    "{{KONU}}": String(t.bittiKonu),
    "{{HIZ}}": hp.hiz != null ? hp.hiz.toFixed(1) + " puan/hafta" : "henüz ölçülmedi",
    "{{URETKEN_HAFTA}}": String(hp.gecen),
    "{{TAMAMLANAN}}": bitmis.join(", ") || "yok",
    "{{TAMAMLANMAYAN}}": bitmemis.join(", ") || "yok",
    "{{DENEMELER}}": S.denemeler.length
      ? S.denemeler.map(d => `#${d.no} ${d.m}/20 ${d.c}/15 ${d.a}/15 = ${d.m + d.c + d.a}/50`).join("; ") : "yok",
    "{{KAYNAK}}": son ? son.kaynak || "[...]" : "[...]",
    "{{M}}": son ? String(son.m) : "[..]",
    "{{C}}": son ? String(son.c) : "[..]",
    "{{A}}": son ? String(son.a) : "[..]",
    "{{SURE}}": son ? son.sure : "[evet/hayır]"
  };
  let m = p.metin.join("\n");
  for (const [k, v] of Object.entries(s)) m = m.split(k).join(v);
  return m;
}

function promptKonuDoldur(id) {
  const k = aktifKonular().find(x => x.id === id);
  const p = P.promptlar.find(x => x.no === 4);
  let m = promptDoldur(p);
  m = m.split("{{KONU_ID}}").join(k.id)
       .split("{{KONU_AD}}").join(k.ad)
       .split("{{ONKOSUL}}").join((k.onkosul || []).length
         ? k.onkosul.map(o => o + " (" + konu(o).ad + ")").join(", ") : "yok")
       .split("{{KAPSAM}}").join((k.kapsam || []).map(x => "  - " + x).join("\n"));
  return m;
}

function cizPromptlar() {
  $("#promptlar").innerHTML = `
    <div class="kart">
      <div class="baslik-2" style="margin-top:0">Prompt 1 — HTML tracker'a çevir</div>
      <div class="kucuk">✔ Uygulandı: <b>bu uygulamanın kendisi</b>. Kapsamlar gizli, ilerleme puan tabanlı,
        faz zinciri, hafta şeridi, blok kartları, hız paneli, deneme grafiği, karar kaydı ve kapsam modu bu arayüzde.</div>
    </div>
    <div class="ufak" style="margin:1rem 0">Aşağıdaki promptlar bulunduğun haftaya, ilerlemene ve son denemene göre
      <b>otomatik doldurulur</b>. Kopyala, AI oturumuna yapıştır.</div>
    ${P.promptlar.map(p => `
      <div class="kart" style="margin-bottom:1rem">
        <div class="satir-arasi">
          <h3 class="baskerville" style="font-size:1.05rem;margin:0">Prompt ${p.no} — ${kacir(p.ad)}</h3>
          <button class="dugme kucuk" data-kopyala="${p.no}">kopyala</button>
        </div>
        <div class="ufak" style="margin:.2rem 0 .6rem">${kacir(p.aciklama)}</div>
        ${p.no === 4 ? `<div class="yigin" style="margin-bottom:.6rem">
          <span class="ufak">Konu:</span>
          <select id="prompt-konu-sec">${aktifKonular().map(k =>
            `<option value="${k.id}">${k.id} — ${kacir(k.ad)}</option>`).join("")}</select></div>` : ""}
        <div class="prompt-kutu" id="prompt-${p.no}">${kacir(p.no === 4 ? promptKonuDoldur(aktifKonular()[0].id) : promptDoldur(p))}</div>
      </div>`).join("")}`;

  const sec = $("#prompt-konu-sec");
  if (sec) sec.addEventListener("change", () => { $("#prompt-4").textContent = promptKonuDoldur(sec.value); });
}

/* ================================================================ olay === */

function sekmeGec(id) {
  aktifSekme = id;
  $$(".sekme").forEach(b => b.setAttribute("aria-selected", String(b.dataset.sekme === id)));
  $$("section.bolum").forEach(s => s.classList.toggle("acik", s.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function durumDegistir(id, yeni) {
  const k = aktifKonular().find(x => x.id === id);
  if (yeni === "tamamlandi") {
    const eksik = onkosulEksikleri(k);
    if (eksik.length) bildir("⚠️ " + id + " işaretlendi ama ön koşulu eksik: " + eksik.join(", "));
  }
  S.konuDurum[id] = yeni;
  durumuKaydet();
  acikKonu = id;
  ciz();
  const el = $(`.konu-satir[data-id="${id}"]`);
  if (el && aktifSekme === "konular") el.scrollIntoView({ block: "center", behavior: "smooth" });
}

function panoyaKopyala(metin, mesaj) {
  navigator.clipboard.writeText(metin).then(
    () => bildir(mesaj || "Kopyalandı."),
    () => bildir("Kopyalanamadı — metni elle seç.")
  );
}

function olaylariBagla() {
  // sekmeler
  $("#sekme-ic").addEventListener("click", e => {
    const b = e.target.closest(".sekme"); if (b) sekmeGec(b.dataset.sekme);
  });

  // tema
  $("#tema-btn").addEventListener("click", () => {
    const yeni = document.documentElement.dataset.tema === "dark" ? "light" : "dark";
    document.documentElement.dataset.tema = yeni;
    S.tema = yeni; durumuKaydet();
    $("#tema-btn").textContent = yeni === "dark" ? "☀︎" : "☾";
  });

  // genel tıklama yönlendirmesi
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-ac],[data-konuya],[data-durum-icin] button,[data-kes],[data-geri-al],[data-ekle],[data-cikar],[data-devret],[data-deneme-sil],[data-kopyala],[data-prompt-konu],[data-prompt-blok],[data-prompt-deneme],[data-filtre] button");
    if (!el) return;

    // konu aç / kapa
    if (el.dataset.ac) {
      const id = el.dataset.ac;
      const satir = el.closest(".konu-satir");
      const acik = satir.querySelector(".konu-panel");
      $$(".konu-panel").forEach(p => p.remove());
      if (acik) { acikKonu = null; return; }
      acikKonu = id; acKonuPanel(satir, id); return;
    }

    // bir rozete tıklandı → konu listesine git ve aç
    if (el.dataset.konuya) {
      const id = el.dataset.konuya;
      if (!aktifKonular().some(k => k.id === id)) { bildir(id + " şu an müfredat dışı."); return; }
      acikKonu = id;
      konuFiltre = { hat: "hepsi", durum: "hepsi", ara: "" };
      cizKonular();
      sekmeGec("konular");
      setTimeout(() => {
        const s = $(`.konu-satir[data-id="${id}"]`);
        if (s) s.scrollIntoView({ block: "center", behavior: "smooth" });
      }, 60);
      return;
    }

    // durum üçlüsü
    const gr = el.closest("[data-durum-icin]");
    if (gr && el.dataset.v) { durumDegistir(gr.dataset.durumIcin, el.dataset.v); return; }

    // filtreler
    const f = el.closest("[data-filtre]");
    if (f && el.dataset.v) { konuFiltre[f.dataset.filtre] = el.dataset.v; cizKonular(); return; }

    // kapsam modu
    if (el.dataset.kes) {
      const ks = kesilebilirMi(el.dataset.kes);
      if (!ks.olur) { bildir("Kesilemez — " + ks.neden); return; }
      S.kesilen.push(el.dataset.kes); durumuKaydet(); ciz();
      bildir(el.dataset.kes + " müfredattan düşüldü."); return;
    }
    if (el.dataset.geriAl) {
      S.kesilen = S.kesilen.filter(x => x !== el.dataset.geriAl); durumuKaydet(); ciz();
      bildir(el.dataset.geriAl + " geri alındı."); return;
    }
    if (el.dataset.ekle) {
      S.eklenen.push(el.dataset.ekle); durumuKaydet(); ciz();
      bildir(el.dataset.ekle + " müfredata eklendi."); return;
    }
    if (el.dataset.cikar) {
      S.eklenen = S.eklenen.filter(x => x !== el.dataset.cikar); durumuKaydet(); ciz();
      bildir(el.dataset.cikar + " çıkarıldı."); return;
    }

    // devir
    if (el.dataset.devret) {
      const b = el.dataset.devret;
      const eksik = aktifKonular().filter(k => k.blok === b && durum(k.id) !== "tamamlandi").map(k => k.id);
      const sonraki = P.bloklar[P.bloklar.findIndex(x => x.id === b) + 1];
      if (!sonraki) { bildir("Sonraki blok yok."); return; }
      S.devredilen[sonraki.id] = Array.from(new Set((S.devredilen[sonraki.id] || []).concat(eksik)));
      durumuKaydet(); ciz();
      bildir(eksik.length + " konu " + sonraki.id + " bloğuna devredildi. Silinmedi.");
      return;
    }

    // deneme sil
    if (el.dataset.denemeSil) {
      S.denemeler = S.denemeler.filter(x => x.no !== +el.dataset.denemeSil);
      durumuKaydet(); cizDenemeler(); return;
    }

    // promptlar
    if (el.dataset.kopyala) {
      const no = +el.dataset.kopyala;
      panoyaKopyala($("#prompt-" + no).textContent, "Prompt " + no + " kopyalandı.");
      return;
    }
    if (el.dataset.promptKonu) {
      panoyaKopyala(promptKonuDoldur(el.dataset.promptKonu), "Prompt 4 kopyalandı (" + el.dataset.promptKonu + ").");
      return;
    }
    if (el.dataset.promptBlok) {
      panoyaKopyala(promptDoldur(P.promptlar.find(p => p.no === 2)), "Prompt 2 kopyalandı.");
      return;
    }
    if (el.dataset.promptDeneme) {
      panoyaKopyala(promptDoldur(P.promptlar.find(p => p.no === 3)), "Prompt 3 kopyalandı.");
      return;
    }
  });

  // arama + form + veri
  document.addEventListener("input", e => {
    if (e.target.id === "konu-ara") {
      konuFiltre.ara = e.target.value;
      cizKonular();
      const i = $("#konu-ara"); if (i) { i.focus(); i.setSelectionRange(i.value.length, i.value.length); }
    }
  });

  document.addEventListener("submit", e => {
    if (e.target.id !== "deneme-form") return;
    e.preventDefault();
    const f = new FormData(e.target);
    const kayit = {
      no: +f.get("no"), tarih: f.get("tarih"), kaynak: f.get("kaynak") || "",
      m: +f.get("m"), c: +f.get("c"), a: +f.get("a"),
      sure: f.get("sure"), desen: f.get("desen") || "", aksiyon: f.get("aksiyon") || ""
    };
    S.denemeler = S.denemeler.filter(x => x.no !== kayit.no).concat(kayit);
    durumuKaydet(); cizDenemeler(); cizPromptlar();
    bildir("Deneme #" + kayit.no + " kaydedildi.");
  });

  document.addEventListener("change", e => {
    if (e.target.id === "ice-aktar") {
      const dosya = e.target.files[0]; if (!dosya) return;
      const fr = new FileReader();
      fr.onload = () => {
        try {
          S = Object.assign(varsayilanDurum(), JSON.parse(fr.result));
          durumuKaydet(); ciz(); bildir("İlerleme içe aktarıldı.");
        } catch (x) { bildir("Dosya okunamadı."); }
      };
      fr.readAsText(dosya);
    }
  });

  document.addEventListener("click", e => {
    if (e.target.id === "disa-aktar") {
      const veri = JSON.stringify({ kaynak: "tubitak-plan", surum: P.meta.surum, tarih: bugunISO(), durum: S }, null, 2);
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([veri], { type: "application/json" }));
      a.download = "ilerleme-" + bugunISO() + ".json";
      a.click(); URL.revokeObjectURL(a.href);
      bildir("İndirildi.");
    }
    if (e.target.id === "sifirla") {
      if (e.target.dataset.emin) {
        S = varsayilanDurum(); durumuKaydet(); ciz(); bildir("Sıfırlandı.");
      } else {
        e.target.dataset.emin = "1";
        e.target.textContent = "Emin misin? Tekrar tıkla";
        setTimeout(() => { const b = $("#sifirla"); if (b) { delete b.dataset.emin; b.textContent = "Tüm ilerlemeyi sıfırla"; } }, 4000);
      }
    }
  });
}

/* ================================================================= açılış */

async function baslat() {
  durumuYukle();
  const tema = S.tema || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.dataset.tema = tema;
  $("#tema-btn").textContent = tema === "dark" ? "☀︎" : "☾";

  const yedek = $("#icerik").innerHTML;
  try {
    const y = await fetch("data/plan.json", { cache: "no-cache" });
    if (!y.ok) throw new Error(y.status);
    P = await y.json();
  } catch (e) {
    $("#icerik").innerHTML = `<div class="kart">
      <h2 class="baskerville">Veri dosyası yüklenemedi</h2>
      <p class="kucuk">Plan verisi ayrı bir dosyada duruyor: <span class="mono">data/plan.json</span>.
      Tarayıcı <span class="mono">file://</span> ile açıldığında bu dosyayı okumaya izin vermez.</p>
      <p class="kucuk">Çözüm — biri yeterli:</p>
      <ul class="kapsam-liste">
        <li>Siteyi GitHub Pages adresinden aç.</li>
        <li>Klasörde yerel sunucu çalıştır: <span class="mono">python -m http.server 8000</span>,
          sonra <span class="mono">http://localhost:8000</span>.</li>
        <li>Ya da dosyayı elle seç:
          <input type="file" id="elle-veri" accept="application/json"></li>
      </ul></div>`;
    const gir = $("#elle-veri");
    if (gir) gir.addEventListener("change", () => {
      const fr = new FileReader();
      fr.onload = () => {
        try { P = JSON.parse(fr.result); } catch (x) { bildir("Dosya okunamadı — geçerli bir plan.json seç."); return; }
        $("#icerik").innerHTML = yedek;
        kur();
      };
      fr.readAsText(gir.files[0]);
    });
    return;
  }
  kur();
}

function kur() {
  konuHarita = new Map(P.konular.map(k => [k.id, k]));
  for (const c of P.cikarilanKonular) if (!konuHarita.has(c.id)) konuHarita.set(c.id, c);
  document.title = "TÜBİTAK Bilgisayar · 1. Aşama Takip";
  ciz();
  olaylariBagla();
  sekmeGec("panel");
}

baslat();
