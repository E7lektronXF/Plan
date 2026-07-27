/* ==========================================================================
   TÜBİTAK Bilgisayar 1. Aşama — Tracker · plan sürüm 3.3
   Veri: data/plan.json (ayrı dosya).  İlerleme: localStorage + JSON dışa/içe.
   İki kural:
     1) Konu "kapsam"ı gizlidir — konuya tıklanınca açılır.
     2) MEB "ortusmeyen" listesi gizlidir — "Ne eksik?" tuşuna basılınca açılır.
   ========================================================================== */

const ANAHTAR = "tubitak-bilgisayar-1asama-v1";
const DURUMLAR = ["baslamadi", "calisiliyor", "tamamlandi"];
const DURUM_AD = { baslamadi: "başlamadı", calisiliyor: "çalışılıyor", tamamlandi: "tamamlandı" };
const MEB_AD = { tam: "MEB ✓ müfredatta var", kismi: "MEB ⚠ KISMİ", yok: "MEB ✗ müfredatta yok" };

let P = null;                 // plan verisi
let S = varsayilanDurum();    // kullanıcı ilerlemesi
let konuHarita = new Map();
let acikKonu = null;          // paneli açık konu
let acikNeEksik = null;       // "Ne eksik?" açık olan konu
let aktifSekme = "panel";
let bekleyenIceAktarim = null;

/* ---------------------------------------------------------------- durum -- */

function varsayilanDurum() {
  return {
    konuDurum: {}, denemeler: [], kesilen: [], eklenen: [], devredilen: {},
    tema: null, uretkenHaftaElle: null, sonDisaAktarma: null
  };
}
function durumuYukle() {
  try { const h = localStorage.getItem(ANAHTAR); if (h) S = Object.assign(varsayilanDurum(), JSON.parse(h)); }
  catch (e) {}
}
function durumuKaydet() { try { localStorage.setItem(ANAHTAR, JSON.stringify(S)); } catch (e) {} }

/* -------------------------------------------------------------- yardımcı -- */

const $ = (s, k = document) => k.querySelector(s);
const $$ = (s, k = document) => Array.from(k.querySelectorAll(s));
const kacir = t => String(t == null ? "" : t)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const AYLAR = ["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"];
const tarihYaz = iso => { if (!iso) return "—"; const d = new Date(iso + "T00:00:00");
  return d.getDate() + " " + AYLAR[d.getMonth()] + " " + d.getFullYear(); };
const tarihKisa = iso => { const d = new Date(iso + "T00:00:00"); return d.getDate() + " " + AYLAR[d.getMonth()]; };
const bugunISO = () => { const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };

function bildir(mesaj) {
  const b = $("#bildirim"); if (!b) return;
  b.textContent = mesaj; b.classList.add("gorunur");
  clearTimeout(b._z); b._z = setTimeout(() => b.classList.remove("gorunur"), 3000);
}

/* ------------------------------------------------------- türetilmiş veri -- */

function konu(id) { return konuHarita.get(id); }
function durum(id) { return S.konuDurum[id] || "baslamadi"; }
function kesikMi(id) { return S.kesilen.includes(id); }

/** Müfredatın o anki hâli: kesilenler düşülmüş, geri eklenenler katılmış. */
let _aktifOnbellek = null;
function aktifKonular() {
  if (_aktifOnbellek) return _aktifOnbellek;
  const ek = S.eklenen.map(id => P.cikarilanKonular.find(c => c.id === id)).filter(Boolean).map(c => ({
    id: c.id, hat: c.hat, ad: c.ad, puan: c.puan, faz: c.eklenecekFaz, blok: null, hafta: null,
    cekirdek: false, kesilebilir: true, onkosul: [], sonradanEklendi: true,
    kapsam: ["Bu konu K7 ile müfredattan çıkarılmıştı, kapsam modunda geri eklendi.",
             "Kapsam tanımı yok — Faz " + c.eklenecekFaz + " zincirine yerleştir."]
  }));
  _aktifOnbellek = P.konular.filter(k => !kesikMi(k.id)).concat(ek);
  return _aktifOnbellek;
}
function onbellegiTemizle() { _aktifOnbellek = null; }
function aktifKonu(id) { return aktifKonular().find(k => k.id === id); }

function toplamlar() {
  const liste = aktifKonular();
  const t = { puan: 0, konu: liste.length, bittiPuan: 0, bittiKonu: 0, calisilan: 0, hat: {} };
  for (const h of P.hatlar) t.hat[h.id] = { puan: 0, bitti: 0, konu: 0, bittiKonu: 0 };
  for (const k of liste) {
    t.puan += k.puan; t.hat[k.hat].puan += k.puan; t.hat[k.hat].konu++;
    const d = durum(k.id);
    if (d === "tamamlandi") { t.bittiPuan += k.puan; t.bittiKonu++; t.hat[k.hat].bitti += k.puan; t.hat[k.hat].bittiKonu++; }
    else if (d === "calisiliyor") t.calisilan++;
  }
  return t;
}

function aktifHafta() {
  const b = bugunISO();
  return P.haftalar.find(w => b >= w.bas && b <= w.bit)
      || (b < P.haftalar[0].bas ? P.haftalar[0] : P.haftalar[P.haftalar.length - 1]);
}
function blok(id) { return P.bloklar.find(b => b.id === id); }

function fazIlerleme(f) {
  const ek = S.eklenen.map(id => P.cikarilanKonular.find(c => c.id === id))
    .filter(c => c && c.eklenecekFaz === f.no).map(c => c.id);
  const ids = f.zincir.filter(id => !kesikMi(id)).concat(ek);
  let puan = 0, bitti = 0, bittiAdet = 0;
  for (const id of ids) {
    const k = aktifKonu(id); if (!k) continue;
    puan += k.puan;
    if (durum(id) === "tamamlandi") { bitti += k.puan; bittiAdet++; }
  }
  return { ids, puan, bitti, adet: ids.length, bittiAdet, tamam: ids.length > 0 && bittiAdet === ids.length };
}

/** Şu anki faz = tamamlanmamış ilk faz. İlerleme takvim değil puandır (K4). */
function simdikiFaz() { return P.fazlar.find(f => !fazIlerleme(f).tamam) || P.fazlar[P.fazlar.length - 1]; }
function sonrakiFaz(f) { return P.fazlar.find(x => x.no === f.no + 1) || null; }
function onkosulEksikleri(k) { return (k.onkosul || []).filter(id => !kesikMi(id) && durum(id) !== "tamamlandi"); }

function hizPaneli() {
  const t = toplamlar(), ah = aktifHafta();
  const gecen = S.uretkenHaftaElle != null ? S.uretkenHaftaElle
    : P.haftalar.filter(w => w.tip === "uretken" && w.w < ah.w).length;
  const hiz = gecen > 0 ? t.bittiPuan / gecen : null;
  const referans = blok(ah.blok).haftalikSaat === 25 ? P.meta.referansHizYaz : P.meta.referansHizDonem;
  const sonrakiBlok = P.bloklar.find(b => b.haftaAralik[0] > ah.w && b.uretkenHafta > 0);
  return { gecen, hiz, referans, sonrakiBlok,
    tahmin: hiz != null && sonrakiBlok ? hiz * sonrakiBlok.uretkenHafta : null,
    oran: hiz != null ? hiz / referans : null };
}

function karisabilirUyari(id) {
  return P.karisabilecekIsimler.filter(g => g.konular.some(k => k.id.split(",").includes(id)));
}

/** "Ne eksik?" tuşu — ortusmeyen listesi ancak bu açıldığında görünür (K11). */
function neEksikToggle(id) { acikNeEksik = acikNeEksik === id ? null : id; }

/** Kesme denetimi: çekirdek değil + kimsenin ön koşulu değil (K12/D2). */
function kesilebilirMi(id) {
  const k = konu(id);
  if (!k) return { olur: false, neden: "Konu bulunamadı." };
  if (k.cekirdek) return { olur: false, neden: "Çekirdek konu — asla kesilmez." };
  const bagimli = P.konular.filter(x => !kesikMi(x.id) && (x.onkosul || []).includes(id));
  if (bagimli.length) return { olur: false, neden: bagimli.map(b => b.id).join(", ") + " bu konuya bağımlı; zincir kırılır." };
  if (k.kesilebilir === false) return { olur: false, neden: "Veride kesilebilir: false işaretli." };
  return { olur: true };
}

const rozetHTML = (id, ekSinif = "") => {
  const k = aktifKonu(id) || konu(id); if (!k) return "";
  const d = durum(id);
  const kilit = d !== "tamamlandi" && onkosulEksikleri(k).length > 0;
  return `<button class="rozet ${k.hat} ${d === "tamamlandi" ? "bitti" : d === "calisiliyor" ? "calisiliyor" : ""} ${kilit ? "kilitli" : ""} ${ekSinif}"
    data-konuya="${id}" title="${kacir(k.ad)} — ${k.puan} puan">${id}</button>`;
};

/* ================================================================ ÇİZİM == */

function ciz() {
  onbellegiTemizle();
  cizPanel(); cizKonular(); cizTakvim(); cizDenemeler(); cizKararlar(); cizAraclar(); cizGerisayim();
}

function cizGerisayim() {
  const gun = Math.max(0, Math.ceil((new Date(P.meta.sinavTarihi + "T00:00:00") - new Date()) / 86400000));
  const g = $("#gerisayim-gun"); if (g) g.textContent = gun;
  const k = $("#kalan-gun"); if (k) k.innerHTML = gun + "<small> gün</small>";
}

/* --------------------------------------------------------------- panel --- */

function fazKartHTML(f, tur) {
  if (!f) return `<div class="faz-kart"><div class="faz-etiket">Sıradaki aşama</div>
    <div class="faz-no">—</div><div class="faz-ad">Müfredat bitti</div>
    <div class="faz-alt">Yeni konu kalmadı. Kalan zaman tekrar ve deneme.</div></div>`;
  const ip = fazIlerleme(f);
  return `<div class="faz-kart ${tur}">
    <div class="faz-etiket">${tur === "simdi" ? "Şu anki aşama" : "Sıradaki aşama"}</div>
    <div class="faz-no">Faz ${f.no}</div>
    <div class="faz-ad">${kacir(f.ad)}</div>
    <div class="faz-alt">${tur === "simdi"
      ? `<b>${ip.bitti} / ${ip.puan} puan</b> · ${ip.bittiAdet}/${ip.adet} konu bitti`
      : `<b>${ip.puan} puan</b> · ${ip.adet} konu · ${kacir(f.haftalar)}`}</div>
    <div class="zincir">${ip.ids.map(id => rozetHTML(id)).join('<span class="ok">→</span>')}</div>
  </div>`;
}

function cizPanel() {
  const t = toplamlar(), ah = aktifHafta(), bl = blok(ah.blok);
  const fs = simdikiFaz(), hp = hizPaneli();
  const yuzde = t.puan ? Math.round(t.bittiPuan / t.puan * 100) : 0;

  const haftaKonulari = ah.konular.filter(id => !kesikMi(id));
  const buHafta = ah.tip === "tampon"
    ? `<b>TAMPON — yeni konu yok.</b> Geri kalanı toparla, tekrar et${ah.deneme ? `, <b>Deneme #${ah.deneme}</b>` : ""}.`
    : ah.tip === "tekrar" ? `<b>Tam tekrar haftası.</b> ${kacir(ah.notlar.join(" · "))}`
    : ah.tip === "sinav" ? `<b>SINAV HAFTASI.</b> ${kacir(ah.notlar.join(" · "))}`
    : haftaKonulari.length ? haftaKonulari.map(id => rozetHTML(id)).join(" ") : "Konu atanmamış.";

  $("#panel").innerHTML = `
    <div class="hero">${fazKartHTML(fs, "simdi")}${fazKartHTML(sonrakiFaz(fs), "sonraki")}</div>

    <div class="kart aralik">
      <div class="olcu-serit">
        <div class="olcu">
          <span class="olcu-etiket">Tamamlanan puan</span>
          <div class="olcu-buyuk">${t.bittiPuan}<small> / ${t.puan}</small></div>
          <div class="cubuk toplam"><i style="width:${yuzde}%"></i></div>
          <div class="ufak">%${yuzde} · ${t.bittiKonu}/${t.konu} konu</div>
        </div>
        <div class="olcu">
          <span class="olcu-etiket">Takvimdeki yer</span>
          <div class="olcu-buyuk">W${ah.w}<small> / 42</small></div>
          <div class="ufak">${ah.blok} (${ah.blokIci}/${bl.hafta}) · ${kacir(ah.ozel || ah.tip)}<br>${tarihKisa(ah.bas)} – ${tarihKisa(ah.bit)} · ${ah.saat} sa</div>
        </div>
        <div class="olcu">
          <span class="olcu-etiket">Ölçülen hız</span>
          <div class="olcu-buyuk">${hp.hiz == null ? "—" : hp.hiz.toFixed(1) + "<small> p/hafta</small>"}</div>
          <div class="ufak">${hp.hiz == null ? "henüz üretken hafta geçmedi"
            : `referans ${hp.referans.toFixed(1)} · %${Math.round(hp.oran * 100)} · ${hp.gecen} hafta geçti`}</div>
        </div>
        <div class="olcu">
          <span class="olcu-etiket">Sınava kalan</span>
          <div class="olcu-buyuk" id="kalan-gun">—</div>
          <div class="ufak">${tarihYaz(P.meta.sinavTarihi)}<br>başvuru ${tarihYaz(P.meta.basvuruSonTarih)}</div>
        </div>
      </div>
    </div>

    <div class="kart">
      <span class="olcu-etiket">Bu hafta</span>
      <div class="yigin" style="margin-top:.35rem">${buHafta}</div>
      ${ah.notlar.length && ah.tip === "uretken" ? `<div class="uyari">⚠️ ${ah.notlar.map(kacir).join(" · ")}</div>` : ""}
      ${hp.oran != null && hp.oran < 0.7 ? `<div class="uyari kirmizi">${kacir(P.hizUyarisi)}</div>` : ""}
    </div>

    <div class="kart">
      <span class="olcu-etiket">Hat ilerlemesi</span>
      <div class="izgara i3" style="margin-top:.5rem">
        ${P.hatlar.map(h => {
          const x = t.hat[h.id], y = x.puan ? Math.round(x.bitti / x.puan * 100) : 0;
          return `<div>
            <div class="satir-arasi"><span class="kucuk"><b>${h.id}</b> ${kacir(h.ad)}</span>
              <span class="ufak">${x.bitti}/${x.puan} p</span></div>
            <div class="cubuk ${h.id}"><i style="width:${y}%"></i></div>
            <div class="ufak">%${y} · ${x.bittiKonu}/${x.konu} konu · sınav ağırlığı %${Math.round(h.sinavAgirligi * 100)}</div>
          </div>`;
        }).join("")}
      </div>
    </div>

    <div class="kart">
      <span class="olcu-etiket">42 hafta</span>
      <div class="kaydir" style="margin-top:.5rem"><div class="serit" id="serit-panel"></div></div>
      <div id="serit-detay"></div>
    </div>`;

  cizSerit($("#serit-panel"), $("#serit-detay"));
  cizGerisayim();
}

/* -------------------------------------------------------- hafta şeridi --- */

function cizSerit(kap, detay) {
  if (!kap) return;
  const ah = aktifHafta();
  kap.innerHTML = P.haftalar.map(w => {
    const s = ["hucre"];
    if (w.tip === "tampon") s.push("tampon");
    if (w.w === ah.w) s.push("aktif");
    if (w.tip === "sinav") s.push("sinav");
    if (w.w === P.meta.sonYeniKonuHaftasi) s.push("sonyeni");
    const im = w.tip === "sinav" ? "★" : w.deneme ? "D" : w.kapanis ? "◆" : "";
    return `<div class="${s.join(" ")}" data-blok="${w.blok}" data-hafta="${w.w}"
      title="W${w.w} · ${w.blok} · ${w.tip}">${im ? `<span class="im">${im}</span>` : ""}${w.w}</div>`;
  }).join("");

  const goster = w => {
    const konular = w.konular.filter(id => !kesikMi(id));
    detay.innerHTML = `<div class="uyari mor">
      <b>W${w.w}</b> · ${w.blok} (${w.blokIci}) · ${tarihKisa(w.bas)} – ${tarihKisa(w.bit)} ·
      <b>${(w.ozel || w.tip).toUpperCase()}</b> · ${w.saat} sa · ${w.puan} puan
      ${w.deneme ? ` · <b>Deneme #${w.deneme}</b>` : ""}${w.kapanis ? ` · <b>${w.kapanis} KAPANIŞI</b>` : ""}
      ${konular.length ? "<br>" + konular.map(id => rozetHTML(id)).join(" ") : ""}
      ${w.notlar.length ? `<br><span class="ufak">${w.notlar.map(kacir).join(" · ")}</span>` : ""}
    </div>`;
  };
  goster(ah);
  $$(".hucre", kap).forEach(h => h.addEventListener("click",
    () => goster(P.haftalar.find(w => w.w === +h.dataset.hafta))));
}

/* ------------------------------------------------------------- konular --- */

let filtre = { hat: "hepsi", durum: "hepsi", ara: "", gorunum: "liste" };

function cizKonular() {
  const kap = $("#konular");
  if (filtre.gorunum === "faz") { kap.innerHTML = filtreCubuguHTML() + fazGorunumuHTML(); return; }

  const liste = aktifKonular().filter(k => {
    if (filtre.hat !== "hepsi" && k.hat !== filtre.hat) return false;
    if (filtre.durum === "kalan" && durum(k.id) === "tamamlandi") return false;
    if (filtre.durum === "cekirdek" && !k.cekirdek) return false;
    if (filtre.durum === "mebyok" && !(k.mebKarsiligi && k.mebKarsiligi.durum === "yok")) return false;
    if (filtre.ara) {
      const q = filtre.ara.toLocaleLowerCase("tr");
      if (!(k.id + " " + k.ad).toLocaleLowerCase("tr").includes(q)) return false;
    }
    return true;
  });

  const t = toplamlar(), gruplu = {};
  for (const k of liste) (gruplu[k.hat] = gruplu[k.hat] || []).push(k);

  kap.innerHTML = filtreCubuguHTML(liste.length) + `
    <details class="katlanir">
      <summary>⚠️ Karışabilecek isimler — üç terim birden fazla anlamda geçiyor</summary>
      ${P.karisabilecekIsimler.map(g => `<div style="margin-bottom:.7rem">
        <b class="serif">"${kacir(g.terim)}"</b>
        <ul class="kapsam">${g.konular.map(x =>
          `<li><span class="mono">${kacir(x.id)}</span> — ${kacir(x.anlam)} <span class="ufak">(${kacir(x.hat)})</span></li>`).join("")}</ul>
        <div class="ufak">${kacir(g.not)}</div></div>`).join("")}
    </details>
    ${P.hatlar.filter(h => gruplu[h.id]).map(h => `
      <div class="baslik-2">${h.id} — ${kacir(h.ad)} · ${gruplu[h.id].length} konu · ${t.hat[h.id].bitti}/${t.hat[h.id].puan} puan</div>
      ${gruplu[h.id].map(konuSatirHTML).join("")}`).join("")
      || '<div class="kart">Eşleşen konu yok.</div>'}`;

  if (acikKonu) { const el = $(`.konu-satir[data-id="${acikKonu}"]`); if (el) acKonuPanel(el, acikKonu); }
}

function filtreCubuguHTML(sayi) {
  return `<div class="filtreler">
    <div class="secim" data-filtre="gorunum">
      ${[["liste","Liste"],["faz","Faz zinciri"]].map(([v,a]) =>
        `<button data-v="${v}" aria-pressed="${filtre.gorunum === v}">${a}</button>`).join("")}
    </div>
    ${filtre.gorunum === "liste" ? `
      <div class="secim" data-filtre="hat">
        ${["hepsi","M","C","A"].map(v => `<button data-v="${v}" aria-pressed="${filtre.hat === v}">${v === "hepsi" ? "Tümü" : v}</button>`).join("")}
      </div>
      <div class="secim" data-filtre="durum">
        ${[["hepsi","Hepsi"],["kalan","Kalanlar"],["cekirdek","Çekirdek"],["mebyok","MEB'de yok"]].map(([v,a]) =>
          `<button data-v="${v}" aria-pressed="${filtre.durum === v}">${a}</button>`).join("")}
      </div>
      <input type="text" id="konu-ara" placeholder="ara…" value="${kacir(filtre.ara)}" style="flex:1;min-width:130px">
      <span class="ufak">${sayi} konu</span>` : ""}
  </div>
  <div class="ufak" style="margin:-.3rem 0 .9rem">Konuya tıkla → kapsamı açılır: ne öğrenilecek ve <b>nerede durulacak</b>.</div>`;
}

function konuSatirHTML(k) {
  const d = durum(k.id), eksik = onkosulEksikleri(k), meb = k.mebKarsiligi;
  return `<div class="konu-satir ${d}" data-id="${k.id}" data-hat="${k.hat}">
    <button class="konu-bas" data-ac="${k.id}">
      <span class="durum-nokta ${d}"></span>
      <span class="konu-id">${k.id}</span>
      <span class="konu-ad">${kacir(k.ad)}${k.cekirdek ? ' <span class="yildiz" title="çekirdek — asla kesilmez">✅</span>' : ""}</span>
      ${meb ? `<span class="meb-nokta ${meb.durum}" title="MEB: ${meb.durum}"></span>` : ""}
      <span class="konu-meta">${k.puan} p · F${k.faz}${k.hafta ? " · W" + k.hafta : ""}${eksik.length ? " · 🔒" : ""}</span>
    </button>
  </div>`;
}

function mebPanelHTML(k) {
  const m = k.mebKarsiligi; if (!m) return "";
  const kimlik = m.durum === "yok" ? "" :
    ` · ${m.sinif}. sınıf · ${kacir(m.tema)}${m.kazanim ? ` (${m.kazanim})` : ""}`;
  const acik = acikNeEksik === k.id;
  return `<div class="yigin" style="margin:.7rem 0 .3rem">
      <span class="meb ${m.durum}">${MEB_AD[m.durum]}${kimlik}</span>
      ${m.durum === "kismi" ? `<button class="dugme kucuk" data-neeksik="${k.id}">${acik ? "Kapat" : "Ne eksik?"}</button>` : ""}
    </div>
    ${m.durum !== "kismi" ? `<div class="ufak">${kacir(m.not)}</div>` : ""}
    ${m.durum === "kismi" && acik ? `
      <div class="meb-sutunlar">
        <div class="meb-sutun var"><h4>Okulda göreceksin</h4>
          <ul>${m.ortusen.map(x => `<li>${kacir(x)}</li>`).join("")}</ul></div>
        <div class="meb-sutun eksik"><h4>Okulda GÖRMEYECEKSİN</h4>
          <ul>${m.ortusmeyen.map(x => `<li>${kacir(x)}</li>`).join("")}</ul></div>
      </div>
      <div class="ufak" style="margin-top:.4rem">${kacir(m.not)}</div>` : ""}`;
}

function acKonuPanel(satir, id) {
  const k = aktifKonu(id); if (!k) return;
  const d = durum(id), eksik = onkosulEksikleri(k), uyarilar = karisabilirUyari(id);
  const bagimlilar = P.konular.filter(x => (x.onkosul || []).includes(id));
  const ks = kesilebilirMi(id);

  const eski = satir.querySelector(".konu-panel"); if (eski) eski.remove();
  const panel = document.createElement("div");
  panel.className = "konu-panel";
  panel.innerHTML = `
    <div class="yigin" style="margin:.6rem 0">
      <div class="secim" data-durum-icin="${id}">
        ${DURUMLAR.map(v => `<button data-v="${v}" aria-pressed="${d === v}">${DURUM_AD[v]}</button>`).join("")}
      </div>
      <span class="ufak">Faz ${k.faz}${k.hafta ? " · W" + k.hafta : ""}${k.blok ? " · " + k.blok : ""} · ${k.puan} puan
        · ${k.cekirdek ? "çekirdek" : ks.olur ? "kesilebilir" : "kesilemez"}</span>
    </div>
    ${eksik.length ? `<div class="uyari">🔒 Ön koşulu bitmemiş: <b>${eksik.join(", ")}</b>. Zincir kırılırsa konu havada kalır.</div>` : ""}
    ${uyarilar.map(g => `<div class="uyari kirmizi">⚠️ <b>"${kacir(g.terim)}"</b> karışabilir — ${kacir(g.not)}</div>`).join("")}
    ${mebPanelHTML(k)}
    <div class="ufak" style="margin-top:.7rem">Kapsam — ne öğrenilecek, nerede durulacak</div>
    <ul class="kapsam">${(k.kapsam || []).map(m => {
      const s = /^DUR:/.test(m) ? "dur" : /^TUZAK:/.test(m) ? "tuzak"
        : /^(KLASİK SORU:|KLASIK SORU:|SINAVDA ÇOK SIK)/.test(m) ? "klasik" : "";
      return `<li class="${s}">${kacir(m)}</li>`;
    }).join("")}</ul>
    <div class="yigin"><span class="ufak">Ön koşullar:</span>
      ${(k.onkosul || []).length ? k.onkosul.map(o => rozetHTML(o)).join(" ") : '<span class="ufak">yok</span>'}</div>
    ${bagimlilar.length ? `<div class="yigin" style="margin-top:.35rem"><span class="ufak">Buna bağımlı:</span>
      ${bagimlilar.map(b => rozetHTML(b.id)).join(" ")}</div>` : ""}
    <div class="yigin" style="margin-top:.7rem">
      <button class="dugme kucuk" data-prompt-konu="${id}">Prompt 4 — bu konu için çalışma oturumu üret</button>
    </div>`;
  satir.appendChild(panel);
}

function fazGorunumuHTML() {
  const fs = simdikiFaz();
  return `<div class="ufak" style="margin-bottom:.8rem">Faz sırası ve faz içi sıra bağlayıcıdır.
    Tamamlananlar dolu, ön koşulu bitmemişler soluk. Rozete tıkla → kapsamı açılır.</div>
    ${P.fazlar.map(f => {
      const ip = fazIlerleme(f), y = ip.puan ? Math.round(ip.bitti / ip.puan * 100) : 0;
      return `<div class="faz-blok ${f.no === fs.no ? "aktif" : ""}">
        <div class="satir-arasi"><h3>Faz ${f.no} · ${kacir(f.ad)}</h3>
          <span class="ufak">${ip.adet} konu · ${ip.bitti}/${ip.puan} puan · ${kacir(f.haftalar)}</span></div>
        <div class="cubuk toplam" style="margin-bottom:.6rem"><i style="width:${y}%"></i></div>
        <div class="zincir">${ip.ids.map(id => rozetHTML(id)).join('<span class="ok">→</span>')}</div>
        <div class="faz-gerekce">${kacir(f.gerekce)}</div>
      </div>`;
    }).join("")}`;
}

/* -------------------------------------------------------------- takvim --- */

function cizTakvim() {
  const ah = aktifHafta(), bl = blok(ah.blok);
  const renk = { B0: "var(--v-m)", B1: "var(--v-a)", B2: "var(--v-uyari)", B3: "var(--v-aktif)", B4: "var(--v-c)", B5: "var(--lacivert)" };

  $("#takvim").innerHTML = `
    <div class="kart">
      <div class="kaydir"><div class="serit" id="serit-takvim"></div></div>
      <div id="serit-detay-2"></div>
      <div class="efsane aralik">
        ${P.bloklar.map(b => `<span><i class="kutucuk" style="background:color-mix(in srgb,${renk[b.id]} 20%, var(--kart))"></i>${b.id}</span>`).join("")}
        <span><i class="kutucuk tampon"></i>tampon</span><span>D deneme</span><span>◆ kapanış</span><span>★ sınav</span>
      </div>
    </div>

    <div class="baslik-2">Bloklar</div>
    <div class="izgara i3">${P.bloklar.map(b => {
      const kendi = aktifKonular().filter(k => k.blok === b.id);
      const bittiP = kendi.filter(k => durum(k.id) === "tamamlandi").reduce((s, k) => s + k.puan, 0);
      const toplamP = kendi.reduce((s, k) => s + k.puan, 0);
      const eksik = kendi.filter(k => durum(k.id) !== "tamamlandi");
      const dev = S.devredilen[b.id] || [];
      const aktifMi = ah.w >= b.haftaAralik[0] && ah.w <= b.haftaAralik[1];
      return `<div class="blok-kart ${aktifMi ? "aktif" : ""}">
        <div class="satir-arasi"><h4>${b.id} · ${kacir(b.ad)}</h4><span class="ufak">W${b.haftaAralik[0]}–${b.haftaAralik[1]}</span></div>
        <div class="ufak">${tarihKisa(b.baslangic)} – ${tarihKisa(b.bitis)} · ${b.uretkenHafta} üretken hafta · ${b.kapasiteSaat} sa${b.doluluk ? ` · doluluk %${Math.round(b.doluluk * 100)}` : ""}</div>
        <div class="cubuk toplam"><i style="width:${toplamP ? Math.round(bittiP / toplamP * 100) : 0}%"></i></div>
        <div class="ufak">${bittiP}/${toplamP} puan · ${kendi.length} konu · ${kacir(b.fazKapsam)}</div>
        ${b.not ? `<div class="ufak" style="margin-top:.25rem">⚠️ ${kacir(b.not)}</div>` : ""}
        ${dev.length ? `<div class="uyari" style="margin:.45rem 0 0">Devredilen: <b>${dev.join(", ")}</b></div>` : ""}
        ${eksik.length ? `<div class="yigin" style="margin-top:.5rem"><button class="dugme kucuk" data-devret="${b.id}">Devret (${eksik.length} konu)</button></div>` : ""}
      </div>`;
    }).join("")}</div>

    <div class="baslik-2">Hafta hafta</div>
    <div class="kart kaydir"><table>
      <thead><tr><th>W</th><th>Blok</th><th>Tarih</th><th>Tip</th><th class="sayi">Sa</th><th>Faz</th><th>Konular</th><th class="sayi">P</th></tr></thead>
      <tbody>${P.haftalar.map(w => `<tr class="${w.w === ah.w ? "vurgu" : ""}">
        <td><b>${w.w}</b></td><td>${w.blok} (${w.blokIci})</td>
        <td class="ufak">${tarihKisa(w.bas)} – ${tarihKisa(w.bit)}</td>
        <td>${w.ozel ? `<b>${kacir(w.ozel)}</b>` : w.tip === "tampon" ? "<b>TAMPON</b>" : w.tip === "sinav" ? "<b>SINAV</b>" : kacir(w.tip)}${w.deneme ? ` · D#${w.deneme}` : ""}${w.kapanis ? ` · ${w.kapanis}◆` : ""}</td>
        <td class="sayi">${w.saat}</td><td>${w.faz.join("–") || "—"}</td>
        <td>${w.konular.map(id => rozetHTML(id)).join(" ")}
          ${w.notlar.length ? `<div class="ufak">${w.notlar.map(kacir).join(" · ")}</div>` : ""}</td>
        <td class="sayi">${w.puan}</td></tr>`).join("")}</tbody>
    </table></div>

    <div class="baslik-2">Hafta tipleri ve bütçe</div>
    <div class="kart">
      <div class="kaydir"><table>
        <thead><tr><th>Tip</th><th class="sayi">Hafta</th><th class="sayi">Saat</th><th>Hız hesabına girer mi</th></tr></thead>
        <tbody>${P.haftaTipleri.map(h => `<tr><td>${kacir(h.ad)}</td><td class="sayi">${h.hafta}</td>
          <td class="sayi">${h.saat}</td><td>${h.hizaGirer ? "✅ evet" : "❌ hayır"}${h.not ? ` <span class="ufak">(${kacir(h.not)})</span>` : ""}</td></tr>`).join("")}
          <tr><td><b>Toplam yatırım</b></td><td class="sayi"><b>${P.meta.toplamHafta}</b></td>
            <td class="sayi"><b>${P.meta.toplamYatirimSaat}</b></td><td></td></tr></tbody>
      </table></div>
      <div class="uyari aralik">${kacir(P.butce.pay)} · 1 puan ≈ ${P.meta.puanBasinaSaat} saat</div>
      <div class="kucuk">${kacir(P.butce.not)}</div>
      <div class="ufak aralik">💡 ${kacir(P.butce.ipucu)}</div>
    </div>

    <div class="baslik-2">Tampon haftası kuralı</div>
    <div class="kart">
      <div class="uyari yesil">${kacir(P.tamponKurali.kural)}</div>
      ${P.tamponKurali.istisnalar.map(i => `<div class="kucuk" style="margin-top:.5rem">• ${kacir(i)}</div>`).join("")}
    </div>

    <div class="baslik-2">Haftalık iskelet — ${bl.haftalikSaat === 25 ? "yaz, 25 sa" : "dönem, 15 sa"}</div>
    <div class="kart">
      <div class="kaydir"><table>
        <thead><tr><th>Gün</th><th>Hat</th><th class="sayi">Saat</th><th>Not</th></tr></thead>
        <tbody>${(bl.haftalikSaat === 25 ? P.haftalikIskelet.yaz : P.haftalikIskelet.donem).map(g =>
          `<tr><td>${kacir(g.gun)}</td><td>${kacir(g.hat)}</td><td class="sayi">${g.saat}</td>
           <td class="ufak">${kacir(g.not || "")}</td></tr>`).join("")}</tbody>
      </table></div>
      <div class="ufak aralik">${kacir(P.haftalikIskelet.not)}<br>${kacir(P.haftalikIskelet.nedenKarisik)}</div>
    </div>

    <div class="baslik-2">Blok kapanış ritüeli</div>
    <div class="kart">
      <div class="ufak">${kacir(P.blokKapanisRitueli.nezaman)}</div>
      <ol class="kapsam">${P.blokKapanisRitueli.adimlar.map(a => `<li><b>${kacir(a.ad)}.</b> ${kacir(a.metin)}</li>`).join("")}</ol>
      <div class="ufak">${kacir(P.blokKapanisRitueli.son)}</div>
      <div class="yigin aralik"><button class="dugme" data-prompt-no="2">Prompt 2 — blok kapanışı promptunu kopyala</button></div>
    </div>`;

  cizSerit($("#serit-takvim"), $("#serit-detay-2"));
}

/* ----------------------------------------------------------- denemeler --- */

function cizDenemeler() {
  const d = S.denemeler.slice().sort((a, b) => a.no - b.no);
  const sonraki = (d.length ? Math.max(...d.map(x => x.no)) : 0) + 1;

  $("#denemeler").innerHTML = `
    <div class="izgara i2">
      <div class="kart">
        <span class="olcu-etiket">Deneme gir</span>
        <form id="deneme-form" class="izgara" style="gap:.55rem;margin-top:.5rem">
          <div class="yigin">
            <label class="ufak">No <input type="number" name="no" value="${sonraki}" min="1" style="width:66px"></label>
            <label class="ufak">Tarih <input type="date" name="tarih" value="${bugunISO()}"></label>
          </div>
          <label class="ufak">Kaynak / yıl <input type="text" name="kaynak" placeholder="2023 1. aşama" style="width:100%"></label>
          <div class="yigin">
            <label class="ufak">M /20 <input type="number" name="m" min="0" max="20" value="0" style="width:66px"></label>
            <label class="ufak">C /15 <input type="number" name="c" min="0" max="15" value="0" style="width:66px"></label>
            <label class="ufak">A /15 <input type="number" name="a" min="0" max="15" value="0" style="width:66px"></label>
          </div>
          <div class="yigin">
            <label class="ufak">Süre yetti mi <select name="sure"><option>evet</option><option>hayır</option></select></label>
          </div>
          <label class="ufak">En büyük hata deseni <input type="text" name="desen" placeholder="ör. C4 tip dönüşümü" style="width:100%"></label>
          <label class="ufak">Aksiyon <input type="text" name="aksiyon" placeholder="tampon haftasına atanacak iş" style="width:100%"></label>
          <div class="yigin"><button class="dugme ana" type="submit">Kaydet</button>
            <button class="dugme" type="button" data-prompt-no="3">Prompt 3 — analiz promptu</button></div>
        </form>
      </div>
      <div class="kart">
        <span class="olcu-etiket">Netlerin seyri</span>
        ${d.length ? denemeGrafik(d) : '<div class="ufak" style="margin-top:.5rem">Henüz deneme yok. İlk deneme W4 (17–23 Ağu 2026).</div>'}
        <div class="efsane aralik">
          <span><i class="kutucuk" style="background:var(--v-m)"></i>M /20</span>
          <span><i class="kutucuk" style="background:var(--v-c)"></i>C /15</span>
          <span><i class="kutucuk" style="background:var(--v-a)"></i>A /15</span>
        </div>
      </div>
    </div>

    <div class="baslik-2">Deneme kaydı</div>
    <div class="kart kaydir"><table>
      <thead><tr><th>#</th><th>Tarih</th><th>Kaynak</th><th class="sayi">M</th><th class="sayi">C</th><th class="sayi">A</th>
        <th class="sayi">Top/50</th><th>Süre</th><th>Hata deseni</th><th>Aksiyon</th><th></th></tr></thead>
      <tbody>${d.length ? d.map(x => `<tr>
        <td><b>${x.no}</b></td><td class="ufak">${tarihKisa(x.tarih)}</td><td class="ufak">${kacir(x.kaynak)}</td>
        <td class="sayi">${x.m}</td><td class="sayi">${x.c}</td><td class="sayi">${x.a}</td>
        <td class="sayi"><b>${x.m + x.c + x.a}</b></td><td class="ufak">${kacir(x.sure)}</td>
        <td class="ufak">${kacir(x.desen)}</td><td class="ufak">${kacir(x.aksiyon)}</td>
        <td><button class="dugme kucuk" data-deneme-sil="${x.no}">sil</button></td></tr>`).join("")
        : '<tr><td colspan="11" class="ufak">Kayıt yok.</td></tr>'}</tbody>
    </table></div>

    <div class="baslik-2">Protokol</div>
    <div class="kart">
      <div class="kucuk">${kacir(P.denemeProtokolu.kural)}</div>
      <ol class="kapsam aralik">${P.denemeProtokolu.kurallar.map(k => `<li>${kacir(k)}</li>`).join("")}</ol>
      <div class="kaydir"><table>
        <thead><tr><th>#</th><th>Hafta</th><th>Tarih</th></tr></thead>
        <tbody>${P.denemeProtokolu.takvim.map(t =>
          `<tr><td>${kacir(t.no)}</td><td>${kacir(t.hafta)}</td><td class="ufak">${kacir(t.tarih)}</td></tr>`).join("")}</tbody>
      </table></div>
    </div>`;
}

function denemeGrafik(d) {
  const W = 460, H = 210, L = 30, R = 10, T = 12, B = 24, n = d.length;
  const x = i => L + (n === 1 ? (W - L - R) / 2 : i * (W - L - R) / (n - 1));
  const y = v => T + (20 - v) * (H - T - B) / 20;
  const cizgi = (alan, renk) =>
    `<path d="${d.map((o, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(o[alan]).toFixed(1)}`).join(" ")}"
      fill="none" stroke="${renk}" stroke-width="2" stroke-linejoin="round"/>` +
    d.map((o, i) => `<circle cx="${x(i).toFixed(1)}" cy="${y(o[alan]).toFixed(1)}" r="3" fill="${renk}"/>`).join("");
  return `<svg class="grafik" viewBox="0 0 ${W} ${H}" role="img" aria-label="Deneme netleri">
    ${[0,5,10,15,20].map(v => `<line class="kilavuz" x1="${L}" y1="${y(v)}" x2="${W-R}" y2="${y(v)}"/>
      <text x="${L-5}" y="${y(v)+3}" text-anchor="end">${v}</text>`).join("")}
    ${d.map((o, i) => `<text x="${x(i)}" y="${H-7}" text-anchor="middle">#${o.no}</text>`).join("")}
    ${cizgi("m","var(--v-m)")}${cizgi("c","var(--v-c)")}${cizgi("a","var(--v-a)")}
  </svg>`;
}

/* ------------------------------------------------------------ kararlar --- */

function cizKararlar() {
  const m = P.mebOzet;
  const mKonular = P.konular.filter(k => k.hat === "M" && k.mebKarsiligi);
  const sirali = ["tam","kismi","yok"].flatMap(d => mKonular.filter(k => k.mebKarsiligi.durum === d));

  $("#kararlar").innerHTML = `
    <div class="kart">
      <div class="kucuk">Bu bölüm planın hafızasıdır. Her karar, tarihi ve gerekçesiyle burada.
        Bir sonraki oturumda bunlar yeniden tartışılmaz — sadece yeni bilgi geldiyse revize edilir.</div>
    </div>

    <div class="baslik-2">Künye</div>
    <div class="kart kaydir"><table><tbody>
      ${P.kunye.map(k => `<tr><th style="width:34%">${kacir(k.alan)}</th><td>${kacir(k.deger)}</td></tr>`).join("")}
    </tbody></table></div>

    <div class="baslik-2">Başlangıç durumu (${tarihYaz(P.baslangicDurumu.tarih)}) ve sınav kompozisyonu</div>
    <div class="kart">
      <div class="kaydir"><table>
        <thead><tr><th>Hat</th><th>Tahmini net</th><th class="sayi">Soru</th><th class="sayi">Ağırlık</th><th>Not</th></tr></thead>
        <tbody>${P.baslangicDurumu.hatlar.map((h, i) => {
          const s = P.sinavKompozisyonu.bloklar[i];
          return `<tr><td><b>${h.hat}</b> ${kacir(h.ad)}</td><td>${kacir(h.tahminiNet)}</td>
            <td class="sayi">~${s.soru}</td><td class="sayi">%${Math.round(s.agirlik * 100)}</td>
            <td class="ufak">${kacir(h.not)}</td></tr>`; }).join("")}</tbody>
      </table></div>
      <div class="uyari kirmizi">${kacir(P.baslangicDurumu.not)}</div>
      <div class="uyari yesil"><b>${kacir(P.sinavKompozisyonu.not)}</b> ${P.sinavKompozisyonu.soruSayisi} çoktan seçmeli soru.</div>
    </div>

    <div class="baslik-2">${kacir(m.baslik)}</div>
    <div class="kart">
      <div class="kucuk">${kacir(m.program)}</div>
      <div class="uyari">${kacir(m.tespit)}</div>
      <div class="izgara i3 aralik">${m.dagilim.map(d => `<div>
        <span class="meb ${d.durum}">${MEB_AD[d.durum]}</span>
        <div class="olcu-buyuk" style="font-size:1.4rem">${d.sayi}<small> konu · ${d.puan} p</small></div>
        <div class="yigin">${d.konular.map(id => rozetHTML(id)).join(" ")}</div></div>`).join("")}
      </div>
      <div class="kaydir aralik"><table>
        <thead><tr><th>ID</th><th>Durum</th><th>Sınıf</th><th>Tema / Kazanım</th></tr></thead>
        <tbody>${sirali.map(k => { const x = k.mebKarsiligi;
          return `<tr><td>${rozetHTML(k.id)}</td>
            <td><span class="meb-nokta ${x.durum}"></span> ${x.durum === "tam" ? "tam" : x.durum === "kismi" ? "<b>kısmi</b>" : "yok"}</td>
            <td>${x.sinif || "—"}</td>
            <td class="ufak">${x.durum === "yok" ? kacir(x.not) : kacir(x.tema) + (x.kazanim ? " · " + x.kazanim : "") +
              (x.ortusmeyen ? ` — <b>eksik:</b> ${kacir(x.ortusmeyen[0])}${x.ortusmeyen.length > 1 ? ` (+${x.ortusmeyen.length - 1})` : ""}` : "")}</td>
          </tr>`; }).join("")}</tbody>
      </table></div>
      <div class="ufak aralik">Tam listeyi görmek için Konular sekmesinde konuya tıkla → kısmi olanlarda <b>"Ne eksik?"</b> tuşuna bas.</div>
      ${m.okumaBicimi.map(o => `<div class="kucuk" style="margin-top:.3rem"><span class="meb-nokta ${o.durum}"></span> <b>${o.durum}</b> — ${kacir(o.anlam)}</div>`).join("")}
      <div class="uyari kirmizi aralik">${kacir(m.derinlikUyarisi)}</div>
      <div class="uyari yesil">${kacir(m.zamanlamaAvantaji)}</div>
      <div class="kucuk aralik"><b>${kacir(m.sonuc)}</b></div>
    </div>

    <div class="baslik-2">Karar kaydı — K1…K${P.kararlar.length}</div>
    ${P.kararlar.map(k => `<div class="karar">
      <h3>${k.id} · ${kacir(k.baslik)}</h3>
      <div class="ufak">${tarihYaz(k.tarih)}</div>
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
    <div class="kart">${P.perspektif.map(p => `<p class="kucuk">${kacir(p)}</p>`).join("")}</div>

    <div class="baslik-2">Sürüm geçmişi</div>
    <div class="kart kaydir"><table>
      <thead><tr><th>Sürüm</th><th>Tarih</th><th>Değişiklik</th></tr></thead>
      <tbody>${P.surumGecmisi.map(s => `<tr><td><b>${kacir(s.surum)}</b></td><td class="ufak">${kacir(s.tarih)}</td>
        <td class="ufak">${kacir(s.degisiklik)}</td></tr>`).join("")}</tbody>
    </table></div>`;
}

/* ------------------------------------------------------------- araçlar --- */

function cizAraclar() {
  const t = toplamlar();
  const cekirdek = P.konular.filter(k => k.cekirdek);

  $("#araclar").innerHTML = `
    <div class="baslik-2">Verini yedekle</div>
    <div class="kart">
      <div class="kucuk">İlerlemen bu tarayıcının <span class="mono">localStorage</span>'ında duruyor.
        Tarayıcı verisi silinirse ya da başka bir cihaza geçersen kaybolur.
        <b>Dışa Aktar</b> ile JSON dosyası olarak indir, <b>İçeri Aktar</b> ile geri yükle.</div>
      <div class="yigin aralik">
        <button class="dugme ana" data-disa-aktar="1">⭳ Dışa Aktar</button>
        <button class="dugme" data-ice-aktar="1">⭱ İçeri Aktar</button>
      </div>
      <div class="kaydir aralik"><table><tbody>
        <tr><th>Dosyaya yazılan</th><td class="kucuk">${t.bittiKonu} konu durumu · ${S.denemeler.length} deneme ·
          ${S.kesilen.length} kesilen · ${S.eklenen.length} geri eklenen · devir kayıtları</td></tr>
        <tr><th>Son dışa aktarma</th><td class="kucuk">${S.sonDisaAktarma ? tarihYaz(S.sonDisaAktarma.slice(0, 10)) : "henüz yapılmadı"}</td></tr>
        <tr><th>Plan verisi</th><td class="kucuk"><span class="mono">data/plan.json</span> — sürüm ${P.meta.surum}, dosyaya yazılmaz, değişmez</td></tr>
      </tbody></table></div>
      <div class="yigin aralik"><button class="dugme" id="sifirla">Tüm ilerlemeyi sıfırla</button></div>
    </div>

    <div class="baslik-2">Kapsam modu — kesme ve ekleme</div>
    <div class="kart">
      <div class="satir-arasi">
        <div><span class="olcu-etiket">Güncel müfredat</span>
          <div class="olcu-buyuk">${t.puan}<small> puan · ${t.konu} konu</small></div>
          <div class="ufak">başlangıç ${P.meta.toplamPuan} puan / ${P.meta.toplamKonu} konu</div></div>
        <div class="ufak" style="max-width:58ch">${kacir(P.kesmeKurali)}
          Çekirdek işaretli <b>${cekirdek.length} konu</b> dokunulmazdır.</div>
      </div>
    </div>
    <div class="kart">
      <span class="olcu-etiket">Geri kalınırsa kesilecek sıra — ${P.sonrakiKesmeSirasi.join(" → ")}</span>
      <div class="kaydir aralik"><table>
        <thead><tr><th>ID</th><th>Konu</th><th class="sayi">P</th><th>Durum</th><th></th></tr></thead>
        <tbody>${P.sonrakiKesmeSirasi.map(id => {
          const k = konu(id), ks = kesilebilirMi(id), kesik = kesikMi(id);
          return `<tr><td><b>${id}</b></td><td>${kacir(k.ad)}</td><td class="sayi">${k.puan}</td>
            <td class="ufak">${kesik ? "kesildi" : ks.olur ? "kesilebilir" : "🔒 " + kacir(ks.neden)}</td>
            <td>${kesik ? `<button class="dugme kucuk" data-geri-al="${id}">geri al</button>`
              : `<button class="dugme kucuk" data-kes="${id}" ${ks.olur ? "" : "disabled"}>kes</button>`}</td></tr>`;
        }).join("")}</tbody>
      </table></div>
      ${P.kesmeDisiTutulan.map(x => `<div class="uyari">🚫 <b>${x.id}</b> (${x.puan} p) listede yok — ${kacir(x.sebep)}</div>`).join("")}
    </div>
    <div class="kart">
      <span class="olcu-etiket">Müfredat dışı bırakılanlar (K7) — hız yeterse geri eklenir</span>
      <div class="kaydir aralik"><table>
        <thead><tr><th>ID</th><th>Konu</th><th class="sayi">P</th><th>Geri ekleme</th><th></th></tr></thead>
        <tbody>${P.cikarilanKonular.map(c => {
          const ekli = S.eklenen.includes(c.id);
          return `<tr><td><b>${c.id}</b></td><td>${kacir(c.ad)}</td><td class="sayi">${c.puan}</td>
            <td class="ufak">${c.geriEklemeSirasi}. sıra · Faz ${c.eklenecekFaz}</td>
            <td>${ekli ? `<button class="dugme kucuk" data-cikar="${c.id}">çıkar</button>`
              : `<button class="dugme kucuk" data-ekle="${c.id}">ekle</button>`}</td></tr>`;
        }).join("")}</tbody>
      </table></div>
      <div class="ufak aralik">Koşul: W22'de ölçülen hız beklentiyi aşarsa, kesme listesinin tersinden eklenir (K7).</div>
    </div>
    <div class="kart">
      <span class="olcu-etiket">Çekirdek konular — asla kesilmez (${cekirdek.length})</span>
      <div class="zincir">${cekirdek.map(k => rozetHTML(k.id)).join("")}</div>
    </div>

    <div class="baslik-2">AI prompt kütüphanesi</div>
    <div class="kart">
      <div class="kucuk"><b>Prompt 1 — HTML tracker'a çevir:</b> ✔ uygulandı, bu uygulamanın kendisi.</div>
      <div class="ufak aralik">Aşağıdakiler bulunduğun haftaya, ilerlemene ve son denemene göre otomatik doldurulur.</div>
    </div>
    ${P.promptlar.map(p => `<div class="kart">
      <div class="satir-arasi">
        <h3 class="serif" style="font-size:1rem">Prompt ${p.no} — ${kacir(p.ad)}</h3>
        <button class="dugme kucuk" data-kopyala="${p.no}">kopyala</button>
      </div>
      <div class="ufak" style="margin:.2rem 0 .5rem">${kacir(p.aciklama)}</div>
      ${p.no === 4 ? `<div class="yigin" style="margin-bottom:.5rem"><span class="ufak">Konu:</span>
        <select id="prompt-konu-sec">${aktifKonular().map(k =>
          `<option value="${k.id}">${k.id} — ${kacir(k.ad)}</option>`).join("")}</select></div>` : ""}
      <div class="prompt-kutu" id="prompt-${p.no}">${kacir(p.no === 4
        ? promptKonuDoldur(aktifKonular()[0].id) : promptDoldur(p))}</div>
    </div>`).join("")}`;

  const sec = $("#prompt-konu-sec");
  if (sec) sec.addEventListener("change", () => { $("#prompt-4").textContent = promptKonuDoldur(sec.value); });
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
    "{{TIP}}": ah.ozel || ah.tip,
    "{{FAZ}}": ah.faz.join("–") || String(simdikiFaz().no),
    "{{KONULAR}}": ah.konular.filter(id => !kesikMi(id))
      .map(id => `${id} (${konu(id).ad}, ${konu(id).puan}p)`).join("; ") || "yok",
    "{{ISKELET}}": bl.haftalikSaat === 25 ? "yaz (25 sa)" : "dönem (15 sa)",
    "{{TARIH}}": tarihYaz(bugunISO()),
    "{{PUAN}}": String(t.bittiPuan), "{{KONU}}": String(t.bittiKonu),
    "{{HIZ}}": hp.hiz != null ? hp.hiz.toFixed(1) + " puan/hafta" : "henüz ölçülmedi",
    "{{URETKEN_HAFTA}}": String(hp.gecen),
    "{{TAMAMLANAN}}": bitmis.join(", ") || "yok",
    "{{TAMAMLANMAYAN}}": bitmemis.join(", ") || "yok",
    "{{DENEMELER}}": S.denemeler.length
      ? S.denemeler.map(d => `#${d.no} ${d.m}/20 ${d.c}/15 ${d.a}/15 = ${d.m + d.c + d.a}/50`).join("; ") : "yok",
    "{{KAYNAK}}": son ? son.kaynak || "[...]" : "[...]",
    "{{M}}": son ? String(son.m) : "[..]", "{{C}}": son ? String(son.c) : "[..]",
    "{{A}}": son ? String(son.a) : "[..]", "{{SURE}}": son ? son.sure : "[evet/hayır]"
  };
  let m = p.metin.join("\n");
  for (const [k, v] of Object.entries(s)) m = m.split(k).join(v);
  return m;
}

function promptKonuDoldur(id) {
  const k = aktifKonu(id), p = P.promptlar.find(x => x.no === 4);
  const mb = k.mebKarsiligi;
  const mebMetin = !mb ? "" : mb.durum === "kismi"
    ? `\nMEB (Maarif Modeli) durumu: KISMİ — ${mb.sinif}. sınıf, ${mb.tema} (${mb.kazanim}).\n`
      + `Okulda görülecek: ${mb.ortusen.join("; ")}\n`
      + `Okulda GÖRÜLMEYECEK (asıl odak burada olsun): ${mb.ortusmeyen.join("; ")}\n`
    : mb.durum === "tam"
      ? `\nMEB durumu: TAM — ${mb.sinif}. sınıf ${mb.tema} (${mb.kazanim}). Okulda da göreceğim, ama MEB formül akıcılığı vermiyor; sınav hızı için formülleri ayrıca çalıştır.\n`
      : `\nMEB durumu: YOK — bu konu 9–12 programında hiç geçmiyor, tamamen sıfırdan öğreneceğim.\n`;
  return promptDoldur(p)
    .split("{{KONU_ID}}").join(k.id)
    .split("{{KONU_AD}}").join(k.ad)
    .split("{{ONKOSUL}}").join((k.onkosul || []).length
      ? k.onkosul.map(o => `${o} (${konu(o).ad})`).join(", ") : "yok")
    .split("{{KAPSAM}}").join((k.kapsam || []).map(x => "  - " + x).join("\n"))
    .split("{{MEB}}").join(mebMetin);
}

/* ============================================================ dışa/içe == */

function disaAktar() {
  const t = toplamlar();
  S.sonDisaAktarma = new Date().toISOString();
  durumuKaydet();
  const paket = {
    tur: "tubitak-plan-durum",
    planSurum: P.meta.surum,
    kayitTarihi: S.sonDisaAktarma,
    ozet: { tamamlananPuan: t.bittiPuan, toplamPuan: t.puan, tamamlananKonu: t.bittiKonu,
            toplamKonu: t.konu, deneme: S.denemeler.length },
    durum: S
  };
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([JSON.stringify(paket, null, 2)], { type: "application/json" }));
  a.download = `tubitak-durum-${bugunISO()}.json`;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  bildir(`Dışa aktarıldı: ${t.bittiPuan}/${t.puan} puan, ${S.denemeler.length} deneme.`);
  cizAraclar();
}

function iceAktarmaBaslat() { $("#dosya-gir").value = ""; $("#dosya-gir").click(); }

function iceAktarmaOku(dosya) {
  const fr = new FileReader();
  fr.onload = () => {
    let paket;
    try { paket = JSON.parse(fr.result); }
    catch (e) { bildir("Dosya okunamadı — geçerli bir JSON değil."); return; }
    const yeni = paket && paket.durum ? paket.durum : paket;
    if (!yeni || typeof yeni !== "object" || !yeni.konuDurum) {
      bildir("Bu dosya bir ilerleme yedeği değil."); return;
    }
    bekleyenIceAktarim = Object.assign(varsayilanDurum(), yeni);
    const t = toplamlar();
    const yeniBitti = Object.values(bekleyenIceAktarim.konuDurum).filter(v => v === "tamamlandi").length;
    $("#katman-ic").innerHTML = `
      <h3 class="serif">İçeri aktarılacak</h3>
      <div class="kaydir"><table><tbody>
        <tr><th>Dosya</th><td class="kucuk">${kacir(dosya.name)}</td></tr>
        <tr><th>Kayıt tarihi</th><td class="kucuk">${paket.kayitTarihi ? tarihYaz(paket.kayitTarihi.slice(0, 10)) : "belirtilmemiş"}</td></tr>
        <tr><th>Plan sürümü</th><td class="kucuk">${kacir(paket.planSurum || "belirtilmemiş")}${
          paket.planSurum && paket.planSurum !== P.meta.surum ? ` <b>(şu anki: ${P.meta.surum})</b>` : ""}</td></tr>
        <tr><th>Gelen ilerleme</th><td class="kucuk">${yeniBitti} tamamlanmış konu · ${(bekleyenIceAktarim.denemeler || []).length} deneme</td></tr>
        <tr><th>Üzerine yazılacak</th><td class="kucuk">${t.bittiKonu} tamamlanmış konu · ${S.denemeler.length} deneme</td></tr>
      </tbody></table></div>
      <div class="uyari kirmizi">Şu anki ilerlemen bu dosyayla <b>değiştirilecek</b>. Geri alınamaz.</div>
      <div class="yigin" style="justify-content:flex-end">
        <button class="dugme" data-ice-iptal="1">İptal</button>
        <button class="dugme ana" data-ice-onay="1">Yükle</button>
      </div>`;
    $("#katman").hidden = false;
  };
  fr.readAsText(dosya);
}

function iceAktarmaOnayla() {
  S = bekleyenIceAktarim; bekleyenIceAktarim = null;
  durumuKaydet();
  document.documentElement.dataset.tema = S.tema || document.documentElement.dataset.tema;
  $("#katman").hidden = true;
  acikKonu = null; acikNeEksik = null;
  ciz();
  const t = toplamlar();
  bildir(`İçeri aktarıldı: ${t.bittiPuan}/${t.puan} puan, ${t.bittiKonu} konu, ${S.denemeler.length} deneme.`);
}

/* ================================================================ olay === */

function sekmeGec(id) {
  aktifSekme = id;
  $$(".sekme").forEach(b => b.setAttribute("aria-selected", String(b.dataset.sekme === id)));
  $$("section.bolum").forEach(s => s.classList.toggle("acik", s.id === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function durumDegistir(id, yeni) {
  const eksik = onkosulEksikleri(aktifKonu(id));
  if (yeni === "tamamlandi" && eksik.length) bildir(`⚠️ ${id} işaretlendi ama ön koşulu eksik: ${eksik.join(", ")}`);
  S.konuDurum[id] = yeni; durumuKaydet(); acikKonu = id; ciz();
  if (aktifSekme === "konular") {
    const el = $(`.konu-satir[data-id="${id}"]`);
    if (el) el.scrollIntoView({ block: "center", behavior: "smooth" });
  }
}

function panoyaKopyala(metin, mesaj) {
  navigator.clipboard.writeText(metin).then(() => bildir(mesaj), () => bildir("Kopyalanamadı — metni elle seç."));
}

function olaylariBagla() {
  $("#sekme-ic").addEventListener("click", e => {
    const b = e.target.closest(".sekme"); if (b) sekmeGec(b.dataset.sekme);
  });

  $("#tema-btn").addEventListener("click", () => {
    const yeni = document.documentElement.dataset.tema === "dark" ? "light" : "dark";
    document.documentElement.dataset.tema = yeni;
    S.tema = yeni; durumuKaydet();
    $("#tema-btn").textContent = yeni === "dark" ? "☀︎" : "☾";
  });

  $("#dosya-gir").addEventListener("change", e => {
    if (e.target.files && e.target.files[0]) iceAktarmaOku(e.target.files[0]);
  });

  document.addEventListener("click", e => {
    const el = e.target.closest("[data-ac],[data-konuya],[data-neeksik],[data-durum-icin] button,[data-filtre] button," +
      "[data-kes],[data-geri-al],[data-ekle],[data-cikar],[data-devret],[data-deneme-sil]," +
      "[data-kopyala],[data-prompt-konu],[data-prompt-no],[data-disa-aktar],[data-ice-aktar]," +
      "[data-ice-onay],[data-ice-iptal],#sifirla");
    if (!el) return;
    const d = el.dataset;

    if (d.ac) {
      const satir = el.closest(".konu-satir"), zatenAcik = satir.querySelector(".konu-panel");
      $$(".konu-panel").forEach(p => p.remove());
      if (zatenAcik) { acikKonu = null; acikNeEksik = null; return; }
      acikKonu = d.ac; acKonuPanel(satir, d.ac); return;
    }

    if (d.konuya) {
      const id = d.konuya;
      if (!aktifKonu(id)) { bildir(id + " şu an müfredat dışı."); return; }
      acikKonu = id; filtre.gorunum = "liste"; filtre.hat = "hepsi"; filtre.durum = "hepsi"; filtre.ara = "";
      cizKonular(); sekmeGec("konular");
      setTimeout(() => { const s = $(`.konu-satir[data-id="${id}"]`);
        if (s) s.scrollIntoView({ block: "center", behavior: "smooth" }); }, 60);
      return;
    }

    if (d.neeksik) {
      neEksikToggle(d.neeksik);
      acKonuPanel(el.closest(".konu-satir"), d.neeksik); return;
    }

    const gr = el.closest("[data-durum-icin]");
    if (gr && d.v) { durumDegistir(gr.dataset.durumIcin, d.v); return; }

    const f = el.closest("[data-filtre]");
    if (f && d.v) { filtre[f.dataset.filtre] = d.v; cizKonular(); return; }

    if (d.kes) {
      const ks = kesilebilirMi(d.kes);
      if (!ks.olur) { bildir("Kesilemez — " + ks.neden); return; }
      S.kesilen.push(d.kes); durumuKaydet(); ciz(); bildir(d.kes + " müfredattan düşüldü."); return;
    }
    if (d.geriAl) { S.kesilen = S.kesilen.filter(x => x !== d.geriAl); durumuKaydet(); ciz();
      bildir(d.geriAl + " geri alındı."); return; }
    if (d.ekle) { S.eklenen.push(d.ekle); durumuKaydet(); ciz(); bildir(d.ekle + " müfredata eklendi."); return; }
    if (d.cikar) { S.eklenen = S.eklenen.filter(x => x !== d.cikar); durumuKaydet(); ciz();
      bildir(d.cikar + " çıkarıldı."); return; }

    if (d.devret) {
      const eksik = aktifKonular().filter(k => k.blok === d.devret && durum(k.id) !== "tamamlandi").map(k => k.id);
      const sonraki = P.bloklar[P.bloklar.findIndex(x => x.id === d.devret) + 1];
      if (!sonraki) { bildir("Sonraki blok yok."); return; }
      S.devredilen[sonraki.id] = Array.from(new Set((S.devredilen[sonraki.id] || []).concat(eksik)));
      durumuKaydet(); ciz();
      bildir(`${eksik.length} konu ${sonraki.id} bloğuna devredildi. Silinmedi.`); return;
    }

    if (d.denemeSil) { S.denemeler = S.denemeler.filter(x => x.no !== +d.denemeSil);
      durumuKaydet(); cizDenemeler(); cizAraclar(); return; }

    if (d.kopyala) { panoyaKopyala($("#prompt-" + d.kopyala).textContent, `Prompt ${d.kopyala} kopyalandı.`); return; }
    if (d.promptKonu) { panoyaKopyala(promptKonuDoldur(d.promptKonu), `Prompt 4 kopyalandı (${d.promptKonu}).`); return; }
    if (d.promptNo) { panoyaKopyala(promptDoldur(P.promptlar.find(p => p.no === +d.promptNo)),
      `Prompt ${d.promptNo} kopyalandı.`); return; }

    if (d.disaAktar) { disaAktar(); return; }
    if (d.iceAktar) { iceAktarmaBaslat(); return; }
    if (d.iceOnay) { iceAktarmaOnayla(); return; }
    if (d.iceIptal) { bekleyenIceAktarim = null; $("#katman").hidden = true; return; }

    if (el.id === "sifirla") {
      if (el.dataset.emin) { S = varsayilanDurum(); durumuKaydet(); ciz(); bildir("İlerleme sıfırlandı."); }
      else {
        el.dataset.emin = "1"; el.textContent = "Emin misin? Tekrar tıkla";
        setTimeout(() => { const b = $("#sifirla");
          if (b) { delete b.dataset.emin; b.textContent = "Tüm ilerlemeyi sıfırla"; } }, 4000);
      }
    }
  });

  document.addEventListener("input", e => {
    if (e.target.id !== "konu-ara") return;
    filtre.ara = e.target.value; cizKonular();
    const i = $("#konu-ara"); if (i) { i.focus(); i.setSelectionRange(i.value.length, i.value.length); }
  });

  document.addEventListener("submit", e => {
    if (e.target.id !== "deneme-form") return;
    e.preventDefault();
    const f = new FormData(e.target);
    const kayit = { no: +f.get("no"), tarih: f.get("tarih"), kaynak: f.get("kaynak") || "",
      m: +f.get("m"), c: +f.get("c"), a: +f.get("a"), sure: f.get("sure"),
      desen: f.get("desen") || "", aksiyon: f.get("aksiyon") || "" };
    S.denemeler = S.denemeler.filter(x => x.no !== kayit.no).concat(kayit);
    durumuKaydet(); cizDenemeler(); cizAraclar();
    bildir("Deneme #" + kayit.no + " kaydedildi.");
  });

  $("#katman").addEventListener("click", e => {
    if (e.target.id === "katman") { bekleyenIceAktarim = null; $("#katman").hidden = true; }
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
      <h2 class="serif">Veri dosyası yüklenemedi</h2>
      <p class="kucuk">Plan verisi ayrı bir dosyada: <span class="mono">data/plan.json</span>.
      Tarayıcı <span class="mono">file://</span> ile açıldığında bu dosyayı okumaya izin vermez.</p>
      <p class="kucuk">Çözüm — biri yeterli:</p>
      <ul class="kapsam">
        <li>Siteyi GitHub Pages adresinden aç: <a href="https://e7lektronxf.github.io/Plan/">e7lektronxf.github.io/Plan</a></li>
        <li>Klasörde yerel sunucu çalıştır: <span class="mono">python -m http.server 8000</span></li>
        <li>Ya da plan dosyasını elle seç: <input type="file" id="elle-veri" accept="application/json"></li>
      </ul></div>`;
    const gir = $("#elle-veri");
    if (gir) gir.addEventListener("change", () => {
      const fr = new FileReader();
      fr.onload = () => {
        try { P = JSON.parse(fr.result); }
        catch (x) { bildir("Geçerli bir plan.json seç."); return; }
        $("#icerik").innerHTML = yedek; kur();
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
  ciz(); olaylariBagla(); sekmeGec("panel");
}

baslat();
