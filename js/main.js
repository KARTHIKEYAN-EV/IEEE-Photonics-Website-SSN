/* ==========================================================================
   SSN IEEE Photonics Society — shared behaviour
   ========================================================================== */

/* -------------------------- EVENT DATA (edit here) ------------------------ */
/* To add a new event: copy an object below and fill in the fields.
   date format: "YYYY-MM-DD" (24h not required), type: "upcoming" | "past"   */
const EVENTS = [
  {
    id: "evt-01",
    title: "Introduction to Fiber Optics — Hands-on Workshop",
    date: "2026-07-18",
    time: "10:00 AM – 1:00 PM",
    venue: "Photonics Lab, ECE Block",
    category: "Workshop",
    type: "upcoming",
    desc: "A beginner-friendly session on fiber optic communication, splicing demos, and loss measurement using an OTDR."
  },
  {
    id: "evt-02",
    title: "Guest Lecture: Silicon Photonics in Data Centers",
    date: "2026-07-26",
    time: "3:00 PM – 4:30 PM",
    venue: "Seminar Hall 2",
    category: "Guest Lecture",
    type: "upcoming",
    desc: "Industry expert session on integrated photonic circuits and their role in next-gen optical interconnects."
  },
  {
    id: "evt-03",
    title: "PhotonHack — 24hr Optics & Photonics Hackathon",
    date: "2026-08-09",
    time: "9:00 AM onwards",
    venue: "Innovation Centre",
    category: "Competition",
    type: "upcoming",
    desc: "Teams design working prototypes around light-based sensing, imaging, or communication. Prizes for top 3 teams."
  },
  {
    id: "evt-04",
    title: "IEEE Photonics Society Chapter Induction",
    date: "2026-08-22",
    time: "11:00 AM",
    venue: "Main Auditorium",
    category: "Society",
    type: "upcoming",
    desc: "Formal induction of the new executive committee and welcome session for incoming first-year members."
  },
  {
    id: "evt-05",
    title: "Laser Safety & Applications Seminar",
    date: "2026-05-14",
    time: "2:00 PM – 3:30 PM",
    venue: "Seminar Hall 1",
    category: "Seminar",
    type: "past",
    desc: "Covered laser classification, safety protocols, and applications in medicine, manufacturing, and research."
  },
  {
    id: "evt-06",
    title: "National Conference on Optical Communication (attended)",
    date: "2026-03-02",
    time: "Full day",
    venue: "IIT Madras",
    category: "Conference",
    type: "past",
    desc: "Delegation of 12 members attended paper presentations and poster sessions on optical networking."
  },
  {
    id: "evt-07",
    title: "Industrial Visit — Optical Fiber Manufacturing Plant",
    date: "2026-01-20",
    time: "9:00 AM – 4:00 PM",
    venue: "Off-campus",
    category: "Industrial Visit",
    type: "past",
    desc: "Students observed the full fiber-drawing process, from preform fabrication to spooling and testing."
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
      btn.addEventListener("click", ()=> showToast("Full event page coming soon — check back or contact the team for details."));
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
  initSimpleFilter("[data-team-filter]", "[data-team-item]", "data-category");
  initSimpleFilter("[data-gallery-filter]", "[data-gallery-item]", "data-category");
  initSimpleFilter("[data-ach-filter]", "[data-ach-item]", "data-category");
  initLightbox();
  initForms();

  document.querySelectorAll("[data-theme-toggle]").forEach(btn=>btn.addEventListener("click", toggleTheme));
});
