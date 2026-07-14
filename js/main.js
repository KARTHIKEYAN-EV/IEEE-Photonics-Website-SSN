/* ==========================================================================
   SSN IEEE Photonics Society — shared behaviour
   ========================================================================== */

/* -------------------------- EVENT DATA (edit here) ------------------------ */
/* To add a new event: copy an object below and fill in the fields.
   date format: "YYYY-MM-DD" (24h not required), type: "upcoming" | "past"   */
const EVENTS = [

  {
    id: "evt-12",
    title: "Tech Talk: Recent Developments in Image Processing",
    date: "2022-10-28",
    time: "11:00 AM – 12:00 PM",
    venue: "Central Seminar Hall",
    category: "Guest Lecture",
    type: "past",
    desc: "IEEE Day celebration talk by Dr. R. Nithya on gray level transformation, histogram processing, filtering, and retinal disease detection.",
    recap: "Organized as part of IEEE Day celebrations, Dr. R. Nithya (Assistant Professor, BME, SSN) delivered a talk on recent developments in image processing. Topics included gray level transformation, histogram processing, filtering, frequency domain filtering, hybrid filter-based image enhancement, and her research on retinal disease detection."
  },
  {
    id: "evt-13",
    title: "Photonics Outreach Program",
    date: "2023-09-27",
    time: "12:00 PM – 4:00 PM",
    venue: "Govt. Girls Higher Secondary School, Thiruporur",
    category: "Society",
    type: "past",
    desc: "Outreach program for 130+ 11th-grade girls featuring lectures and live experiments on light, IR sensors, and spectrophotometers.",
    recap: "Led by Dr. N. Venkateswaran and Dr. S. Allwyn, the team visited Govt. Girls Higher Secondary School, Thiruporur. Dr. Allwyn lectured 130+ 11th-grade girls on light, its properties, and device applications. 14 student volunteers from the Photonics Society core committee, led by Chair Supraja Vaidhyanathan, demonstrated live experiments including IR sensors, digital microscopes, and spectrophotometers. Students received hands-on time with circuits and all attendees were given certificates."
  },
  {
    id: "evt-15",
    title: "Presentation on Photonic Devices — International Light Day",
    date: "2024-05-20",
    time: "6:30 PM – 8:30 PM",
    venue: "Online (Webinar)",
    category: "Seminar",
    type: "past",
    desc: "International Light Day webinar by Dr. Esther Florence S. covering photonics fundamentals, LED principles, lasers, and medical applications.",
    recap: "Dr. Esther Florence S. presented an webinar on photonic devices as part of International Light Day celebrations. She introduced photonics fundamentals and everyday applications (mobile phones, projectors, medical devices), explained LED principles including semiconductor physics and p-n junctions, and covered laser sources, optical feedback, Fabry-Perot resonators, and medical applications in surgery and optical coherence tomography."
  },
  {
    id: "evt-16",
    title: "Cryptic Code Crash (C3) — Unveil the Mystery",
    date: "2024-10-29",
    time: "9:00 AM – 12:00 PM",
    venue: "ECE Seminar Hall",
    category: "Competition",
    type: "past",
    desc: "A two-round cryptic competition with Morse Code Mania and Pictionary Puzzles, drawing 40+ students across 15 teams.",
    recap: "Organized by the IEEE Photonics Society, ~40 students across 15 teams participated. Round 1 (Morse Code Mania) featured multi-layered Q&A with scoring twists . Top 2 teams (3rd-year ECE and IT students) won cash prizes for their performance across both rounds."
  },
  {
    id: "evt-08",
    title: "Chapter Inauguration — SSN IEEE Photonics Society",
    date: "2025-07-28",
    time: "2:00 PM – 3:30 PM",
    venue: "Chemical Seminar Hall",
    category: "Society",
    type: "past",
    desc: "Official inauguration ceremony of the SSN IEEE Photonics Society Student Chapter.",
    recap: "The chapter was formally inaugurated with speeches from Dr. N. Venkateswaran and Dr. S. Allwyn. The guest of honor, Dr. Gowri Annasamy (Assistant Professor, IIITDM Kanchipuram), delivered a keynote on photonics applications — from biophotonics in healthcare to LiDAR in autonomous systems. A badge distribution ceremony formally inducted the core committee members, and a memento was presented to the chief guest. The event marked the official launch of the IEEE Photonics Society SSN Chapter."
  },
  {
    id: "evt-09",
    title: "LIGHTSCAPE — Online Photography Contest",
    date: "2025-07-02",
    time: "Online",
    venue: "Online",
    category: "Competition",
    type: "past",
    desc: "An online photography contest organized in collaboration with the SSN Photography Club — 'Capture Light, Reveal Science: From Nature to Everyday Glow.'",
    recap: "Organized in collaboration with the SSN Photography Club from July 2 to 7, 2025, LIGHTSCAPE invited participants to capture the role of light in science and everyday life. Winners: Best Photon Shot — Adithya Sivakumar, Best Conceptual Photo — B. Raaghavan, Creative Composition Award — M. Vishal Venkat. Results were announced on the society's Instagram page."
  },
  {
    id: "evt-10",
    title: "Talk on \"Mapping Neuromuscular Pathways Using Non-invasive Multimodal Techniques\"",
    date: "2026-01-07",
    time: "10:00 AM – 2:00 PM",
    venue: "Central Seminar Hall, ECE Annexure",
    category: "Guest Lecture",
    type: "past",
    desc: "A joint IEEE Photonics Society and IEEE SPS talk exploring multi-scale neuromuscular mapping via EEG, fMRI, fNIRS, and rehabilitation robotics.",
    recap: "Organized jointly with the IEEE Signal Processing Society (SPS) Student Chapter, this talk explored challenges in neuromuscular mapping due to the system's distributed, multi-scale nature. Non-invasive multimodal approaches boosted by ML/modeling were discussed, with applications in neurorehabilitation and disease phenotyping (stroke, spinal cord injury, dystonia, ALS). Brain mapping tools covered included EEG, fMRI, fNIRS, and transcranial focused ultrasound, along with neuromodulation techniques (TMS, tDCS, tACS) and peripheral/spinal mapping methods (EMG, motion capture, rehabilitation robotics). Live demos of exoskeletons and brain-computer interfaces generated strong student interest in AI/ML applications for neurotechnology."
  },
  {
    id: "evt-11",
    title: "Talk on \"Sensing with Light: The Evolving Landscape of Photonics Technologies\"",
    date: "2026-01-21",
    time: "2:00 PM – 4:00 PM",
    venue: "ECE Annexure Building",
    category: "Guest Lecture",
    type: "past",
    desc: "Guest lecture by Dr. Srijith on Fiber Bragg Grating sensors, optical interrogation techniques, and wearable biomedical applications.",
    recap: "Dr. Srijith delivered an engaging talk to ~100 students from Biomedical and ECE departments. He introduced light as an electromagnetic waveform and explained Fiber Bragg Grating (FBG) working principles — periodic refractive index variation reflecting the Bragg wavelength, shifted by strain and temperature. Optical interrogation techniques for detecting wavelength shifts were covered, along with biomedical applications including embedded sensors for continuous physiological monitoring, gait cycle measurement via cuff-based sensors, hand gesture analysis through wristband sensors, speech interpretation via neck-region strain detection, and pressure/strain distribution analysis. The session sparked strong interest in interdisciplinary research on optical sensing and wearable biomedical technologies."
  }
];

/* -------------------------------- THEME ----------------------------------- */
(function initTheme(){
  const saved = localStorage.getItem("ssnps-theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
})();

function toggleTheme(){
  const html = document.documentElement;
  const next = html.getAttribute("data-theme") === "light" ? "dark" : "light";
  if (next === "light") html.setAttribute("data-theme", "light");
  else html.removeAttribute("data-theme");
  localStorage.setItem("ssnps-theme", next);
  updateThemeIcon();
}

function updateThemeIcon(){
  const isLight = document.documentElement.getAttribute("data-theme") === "light";
  document.querySelectorAll("[data-theme-icon]").forEach(el=>{
    el.innerHTML = isLight
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v1M12 20v1M4.2 4.2l.7.7M19.1 19.1l.7.7M3 12h1M20 12h1M4.2 19.8l.7-.7M19.1 4.9l.7-.7"/><circle cx="12" cy="12" r="4"/></svg>'
      : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>';
  });
}

/* --------------------------------- NAV -------------------------------------- */
function initNav(){
  const toggle = document.querySelector(".hamburger");
  const panel = document.querySelector(".nav-mobile-panel");
  if (toggle && panel){
    toggle.addEventListener("click", ()=>{
      panel.classList.toggle("open");
    });
    panel.querySelectorAll("a").forEach(a=>a.addEventListener("click", ()=>panel.classList.remove("open")));
  }
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .nav-mobile-panel a").forEach(a=>{
    const href = a.getAttribute("href");
    if (href === current || (current === "" && href === "index.html")) a.classList.add("active");
  });
}

/* ------------------------------ SCROLL FX ------------------------------------ */
function initScrollFx(){
  const scrollTopBtn = document.querySelector(".scroll-top");
  window.addEventListener("scroll", ()=>{
    if (scrollTopBtn) scrollTopBtn.classList.toggle("visible", window.scrollY > 500);
  });
  if (scrollTopBtn){
    scrollTopBtn.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));
  }

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if (e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: .15 });
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
}

/* -------------------------------- TOAST --------------------------------------- */
function showToast(msg){
  let toast = document.querySelector(".toast");
  if (!toast){
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=> toast.classList.remove("show"), 3200);
}

/* -------------------------------- COUNTDOWN ------------------------------------ */
function initCountdown(){
  const el = document.querySelector("[data-countdown]");
  if (!el) return;
  const upcoming = EVENTS.filter(e=>e.type==="upcoming").sort((a,b)=> new Date(a.date)-new Date(b.date))[0];
  if (!upcoming){ el.closest(".countdown-bar")?.remove(); return; }
  el.querySelector(".cd-title").textContent = upcoming.title;

  function tick(){
    const now = new Date();
    const target = new Date(upcoming.date + "T09:00:00");
    let diff = Math.max(0, target - now);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.querySelector('[data-cd="d"]').textContent = String(d).padStart(2,"0");
    el.querySelector('[data-cd="h"]').textContent = String(h).padStart(2,"0");
    el.querySelector('[data-cd="m"]').textContent = String(m).padStart(2,"0");
    el.querySelector('[data-cd="s"]').textContent = String(s).padStart(2,"0");
  }
  tick();
  setInterval(tick, 1000);
}

/* --------------------------------- CALENDAR ------------------------------------- */
function initCalendar(){
  const grid = document.querySelector("[data-cal-grid]");
  if (!grid) return;
  const monthLabel = document.querySelector("[data-cal-month]");
  const detail = document.querySelector("[data-cal-detail]");
  const prevBtn = document.querySelector("[data-cal-prev]");
  const nextBtn = document.querySelector("[data-cal-next]");

  const eventMap = {};
  EVENTS.forEach(e=>{ (eventMap[e.date] = eventMap[e.date] || []).push(e); });

  let view = new Date();
  view.setDate(1);

  function render(){
    grid.querySelectorAll(".cal-day").forEach(n=>n.remove());
    const year = view.getFullYear(), month = view.getMonth();
    monthLabel.textContent = view.toLocaleDateString("en-US", { month:"long", year:"numeric" });

    const firstDow = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month+1, 0).getDate();
    const daysInPrev = new Date(year, month, 0).getDate();
    const todayStr = new Date().toISOString().slice(0,10);

    const cells = [];
    for (let i=firstDow-1; i>=0; i--){
      cells.push({ day: daysInPrev-i, muted:true });
    }
    for (let d=1; d<=daysInMonth; d++){
      const dateStr = `${year}-${String(month+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
      cells.push({ day:d, dateStr, today: dateStr===todayStr, events: eventMap[dateStr] });
    }
    while (cells.length % 7 !== 0){
      cells.push({ day: cells.length, muted:true });
    }

    cells.forEach(c=>{
      const cell = document.createElement("div");
      cell.className = "cal-day" + (c.muted ? " muted":"") + (c.today ? " today":"") + (c.events ? " has-event":"");
      cell.textContent = c.day;
      if (c.events){
        cell.addEventListener("click", ()=> renderDetail(c.dateStr, c.events));
        cell.setAttribute("tabindex","0");
        cell.setAttribute("role","button");
        cell.setAttribute("aria-label", `${c.events.length} event(s) on ${c.dateStr}`);
        cell.addEventListener("keypress", (e)=>{ if(e.key==="Enter") renderDetail(c.dateStr, c.events); });
      }
      grid.appendChild(cell);
    });
  }

  function renderDetail(dateStr, events){
    detail.innerHTML = `<h4>${new Date(dateStr+"T00:00:00").toDateString()}</h4>` +
      events.map(e=>`
        <div class="cal-detail-body" style="margin-bottom:16px;">
          <strong>${e.title}</strong>
          <p>🕒 ${e.time}</p>
          <p>📍 ${e.venue}</p>
          <p>${e.desc}</p>
          <span class="tag">${e.category}</span>
        </div>`).join("");
  }

  prevBtn.addEventListener("click", ()=>{ view.setMonth(view.getMonth()-1); render(); });
  nextBtn.addEventListener("click", ()=>{ view.setMonth(view.getMonth()+1); render(); });

  render();

  // auto-open nearest upcoming event's month
  const nearest = EVENTS.filter(e=>e.type==="upcoming").sort((a,b)=> new Date(a.date)-new Date(b.date))[0];
  if (nearest){
    const nd = new Date(nearest.date);
    view = new Date(nd.getFullYear(), nd.getMonth(), 1);
    render();
    renderDetail(nearest.date, eventMap[nearest.date]);
  } else {
    detail.innerHTML = `<p class="cal-empty">Select a highlighted date to view event details.</p>`;
  }
}

/* --------------------------------- EVENTS PAGE ------------------------------------ */
function initEventsPage(){
  const list = document.querySelector("[data-event-list]");
  if (!list) return;
  const filterBtns = document.querySelectorAll("[data-event-filter]");
  const searchInput = document.querySelector("[data-event-search]");
  let activeFilter = "all";

  function card(e){
    const gradientMap = {
      Workshop: "var(--spec-cyan), var(--spec-blue)",
      "Guest Lecture": "var(--spec-violet), var(--ieee-blue)",
      Competition: "var(--spec-amber), var(--spec-red)",
      Society: "var(--ieee-blue), var(--spec-cyan)",
      Seminar: "var(--spec-green), var(--spec-cyan)",
      Conference: "var(--spec-violet), var(--spec-blue)",
      "Industrial Visit": "var(--spec-amber), var(--spec-green)"
    };
    const grad = gradientMap[e.category] || "var(--ieee-blue), var(--spec-cyan)";
    const dateFmt = new Date(e.date+"T00:00:00").toLocaleDateString("en-US", { day:"2-digit", month:"short", year:"numeric" });
    return `
    <article class="card event-card reveal ${e.type==='past'?'past':''}" data-title="${e.title.toLowerCase()}" data-cat="${e.category}">
      <div class="event-media" style="background:linear-gradient(135deg, ${grad});">
        <span class="badge">${e.category}</span>
      </div>
      <div class="event-body">
        <h3>${e.title}</h3>
        <div class="event-meta-row">
          <span>📅 ${dateFmt}</span>
          <span>🕒 ${e.time}</span>
        </div>
        <div class="event-meta-row"><span>📍 ${e.venue}</span></div>
        <p class="desc">${e.desc}</p>
        <button class="btn ${e.type==='past'?'btn-ghost':'btn-primary'} btn-sm" data-details="${e.id}">${e.type==='past' ? 'View Recap' : 'View Details'}</button>
      </div>
    </article>`;
  }

  function draw(){
    const term = (searchInput?.value || "").toLowerCase();
    const filtered = EVENTS.filter(e=>{
      const matchFilter = activeFilter === "all" || e.type === activeFilter;
      const matchTerm = e.title.toLowerCase().includes(term) || e.category.toLowerCase().includes(term);
      return matchFilter && matchTerm;
    }).sort((a,b)=> new Date(b.date) - new Date(a.date));
    list.innerHTML = filtered.length ? filtered.map(card).join("") : `<p style="color:var(--text-faint);grid-column:1/-1;">No events match your search.</p>`;
    list.querySelectorAll(".reveal").forEach(el=>el.classList.add("in"));
    list.querySelectorAll("[data-details]").forEach(btn=>{
      btn.addEventListener("click", ()=> showEventRecap(btn.dataset.details));
    });
  }

  filterBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      filterBtns.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.eventFilter;
      draw();
    });
  });
  searchInput?.addEventListener("input", draw);
  draw();
}

/* --------------------------------- EVENT RECAP --------------------------------------- */
function showEventRecap(id){
  const event = EVENTS.find(e => e.id === id);
  if (!event) return;
  const modal = document.querySelector("[data-event-modal]");
  const body = document.querySelector("[data-event-modal-body]");
  if (!modal || !body) return;
  const dateFmt = new Date(event.date+"T00:00:00").toLocaleDateString("en-US", { day:"2-digit", month:"long", year:"numeric" });
  body.innerHTML = `
    <strong>${event.title}</strong>
    <div class="event-modal-meta">${dateFmt} · ${event.time} · ${event.venue}</div>
    <p class="desc">${event.desc}</p>
    <span class="tag">${event.category}</span>
    ${event.recap ? `<span class="recap-label">Event Recap</span><p class="recap-text">${event.recap}</p>` : ''}
  `;
  modal.classList.add("open");
}

function initEventRecap(){
  const modal = document.querySelector("[data-event-modal]");
  if (!modal) return;
  modal.querySelector(".event-modal-close")?.addEventListener("click", ()=> modal.classList.remove("open"));
  modal.addEventListener("click", (e)=>{ if (e.target === modal) modal.classList.remove("open"); });
  document.addEventListener("keydown", (e)=>{ if (e.key === "Escape") modal.classList.remove("open"); });
}

/* --------------------------------- TEAM / GALLERY FILTER --------------------------- */
function initSimpleFilter(groupSelector, itemSelector, dataAttr){
  const btns = document.querySelectorAll(groupSelector);
  if (!btns.length) return;
  btns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      btns.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      const val = btn.dataset.filter;
      document.querySelectorAll(itemSelector).forEach(item=>{
        const show = val === "all" || item.getAttribute(dataAttr) === val;
        item.style.display = show ? "" : "none";
      });
    });
  });
}

/* --------------------------------- LIGHTBOX ---------------------------------------- */
function initLightbox(){
  const lb = document.querySelector(".lightbox");
  if (!lb) return;
  const lbBody = lb.querySelector("[data-lightbox-body]");
  document.querySelectorAll("[data-gallery-item]").forEach(item=>{
    item.addEventListener("click", ()=>{
      lbBody.innerHTML = item.querySelector(".ph")?.outerHTML || "";
      lb.classList.add("open");
    });
  });
  lb.querySelector(".lightbox-close")?.addEventListener("click", ()=> lb.classList.remove("open"));
  lb.addEventListener("click", (e)=>{ if (e.target === lb) lb.classList.remove("open"); });
}

/* --------------------------------- FORMS -------------------------------------------- */
function initForms(){
  document.querySelectorAll("[data-form]").forEach(form=>{
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      showToast(form.dataset.successMsg || "Submitted successfully. We'll get back to you soon.");
      form.reset();
    });
  });
}

/* --------------------------------- INIT --------------------------------------------- */
document.addEventListener("DOMContentLoaded", ()=>{
  updateThemeIcon();
  initNav();
  initScrollFx();
  initCountdown();
  initCalendar();
  initEventsPage();
  initEventRecap();
  initSimpleFilter("[data-team-filter]", "[data-team-item]", "data-category");
  initSimpleFilter("[data-gallery-filter]", "[data-gallery-item]", "data-category");
  initSimpleFilter("[data-ach-filter]", "[data-ach-item]", "data-category");
  initLightbox();
  initForms();

  document.querySelectorAll("[data-theme-toggle]").forEach(btn=>btn.addEventListener("click", toggleTheme));
});
