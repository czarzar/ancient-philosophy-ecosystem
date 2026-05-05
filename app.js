/* ── Tab switching ── */
function switchTab(id, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
  document.getElementById('view-' + id).classList.add('active');
  btn.classList.add('active'); btn.setAttribute('aria-selected','true');
  if (id === 'map')      initMap();
  if (id === 'emeriti')  initEmeriti();
  if (id === 'phd')      initPhd();
  if (id === 'visiting') initVisiting();
}

/* ── Avatar HTML helpers ── */
function initials(name) { return name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase(); }

function avatarHtml(s, size) {
  const cls   = size === 'lg' ? 'r-avatar-lg' : 'r-avatar';
  const icls  = size === 'lg' ? 'r-avatar-lg-initials' : 'r-avatar-initials';
  const inner = s.photo
    ? `<img src="${s.photo}" alt="${s.name}" loading="lazy" onerror="this.style.display='none';this.nextSibling.style.display='flex'">`
      + `<span class="${icls}" style="display:none">${initials(s.name)}</span>`
    : `<span class="${icls}">${initials(s.name)}</span>`;
  return `<div class="${cls}">${inner}</div>`;
}

/* ── Tag HTML helpers ── */
function themeTagsHtml(tags) {
  return (tags || []).map(t => {
    const th = THEMES[t] || { label: t, bg: '#eee', txt: '#555' };
    return `<span class="tag" style="background:${th.bg};color:${th.txt}">${th.label}</span>`;
  }).join('');
}
function ancientTagsHtml(ancients) {
  return (ancients || []).map(a =>
    `<span class="tag" style="background:${ANCT.bg};color:${ANCT.txt}">${a}</span>`
  ).join('');
}
function allTagsHtml(s) { return ancientTagsHtml(s.ancients) + themeTagsHtml(s.tags); }

/* ── Links HTML helper ── */
const ENVELOPE_SVG  = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
const ORCID_SVG     = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" style="vertical-align:-2px;fill:#A6CE39"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-1.844 4.852c.523 0 .95.427.95.95a.951.951 0 0 1-1.9 0c0-.523.427-.95.95-.95zm-2.18 2.906h1.396v9.485H7.976V7.758zm3.576 0h3.76c3.58 0 5.027 2.564 5.027 4.743 0 2.437-1.893 4.742-5.016 4.742h-3.77V7.758zm1.396 1.267v6.95h2.26c2.29 0 3.674-1.551 3.674-3.475 0-1.897-1.307-3.475-3.554-3.475h-2.38z"/></svg>`;
const GSCHOLAR_SVG  = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" style="vertical-align:-2px;fill:#4285F4"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 10a8 8 0 0 1 7.162 3.44L24 9.5z"/></svg>`;

function linksHtml(s, fontSize) {
  const fs = fontSize || '0.76rem';
  const parts = [];
  if (s.email) parts.push(`<a href="mailto:${s.email}" title="${s.email}" style="font-size:${fs};display:inline-flex;align-items:center;gap:4px">${ENVELOPE_SVG}</a>`);
  if (s.web)   parts.push(`<a href="${s.web}" target="_blank" rel="noopener" style="font-size:${fs}">Personal website</a>`);
  (s.links || []).forEach(l => {
    if (l.label === 'orcid')
      parts.push(`<a href="${l.url}" target="_blank" rel="noopener" title="ORCID" style="font-size:${fs};display:inline-flex;align-items:center;gap:4px">${ORCID_SVG} ORCID</a>`);
    else if (l.label === 'google-scholar')
      parts.push(`<a href="${l.url}" target="_blank" rel="noopener" title="Google Scholar" style="font-size:${fs};display:inline-flex;align-items:center;gap:4px">${GSCHOLAR_SVG} Google Scholar</a>`);
    else
      parts.push(`<a href="${l.url}" target="_blank" rel="noopener" style="font-size:${fs}">${l.label}</a>`);
  });
  if (!parts.length) return '';
  return `<div class="rc-links">${parts.join('<span style="color:var(--ink-faint)"> · </span>')}</div>`;
}

/* ── Full researcher side-panel HTML (network view) ── */
function scholarDetailHtml(s) {
  return `
    ${avatarHtml(s, 'lg')}
    <p class="rc-name">${s.name}</p>
    <p class="rc-pos">${s.position}</p>
    <p class="rc-dept">${s.dept}<br>${s.uni}</p>
    ${linksHtml(s)}
    <p class="rc-section">Research interests</p>
    <div class="tag-row">${allTagsHtml(s)}</div>`;
}

/* ══════════════════════════════════════
   VIEW 1 — BROWSE BY SPECIALISM
   ══════════════════════════════════════ */
/* ── Affiliation display (Option E: labelled rows) ───────
   Shows: Position · Institution · College (if present)    */
function affiliationHtml(s, showPosition) {
  const dParts = (s.dept || '').split('·').map(x => x.trim());
  const pParts = (s.position || '').split('·').map(x => x.trim());
  const deptPart = dParts[0] || '';
  const college  = dParts[1] || '';
  const facPos   = pParts[0] || '';
  const colPos   = pParts[1] || '';
  const colLabel = college ? (colPos ? colPos + ', ' + college : college) : colPos;

  /* Only append uni if it's not already contained in deptPart */
  const uni = s.uni || '';
  const instLabel = deptPart
    ? (deptPart.includes(uni) ? deptPart : deptPart + (uni ? ', ' + uni : ''))
    : uni;

  let rows = '';
  if (showPosition && facPos) rows += `<tr><td class="al">Position</td><td class="av">${facPos}</td></tr>`;
  if (instLabel) rows += `<tr><td class="al">Institution</td><td class="av">${instLabel}</td></tr>`;
  if (colLabel)  rows += `<tr><td class="al">College</td><td class="av">${colLabel}</td></tr>`;

  return `<div class="sc-affil"><table>${rows}</table></div>`;
}


/* ══════════════════════════════════════
   VIEW 1 — BROWSE BY SPECIALISM (Option D)
   Top tradition pills → sidebar subfields → results
   ══════════════════════════════════════ */
let philActiveSp   = null;   // active SPECIALISMS entry
let philActiveSub  = null;   // active sub (philosopher/school)
let philActiveTheme = null;  // active thematic refinement (for Plato/Aristotle)

function scholarsForSpecialism(sp, subKeys, themeTags, themeKeys) {
  const matchKeys = subKeys || sp.keys;
  let scholars = SCHOLARS.filter(s => (s.ancients || []).some(a => matchKeys.includes(a)));
  if (themeKeys && themeKeys.length)
    scholars = scholars.filter(s => (s.ancients || []).some(a => themeKeys.includes(a)));
  else if (themeTags && themeTags.length)
    scholars = scholars.filter(s => (s.tags || []).some(t => themeTags.includes(t)));
  return scholars;
}

(function buildSpecToolbar() {
  const toolbar = document.getElementById('spec-toolbar');
  SPECIALISMS.forEach(sp => {
    const count = scholarsForSpecialism(sp).length;
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.key = sp.key;
    btn.textContent = sp.label + (count ? ' (' + count + ')' : '');
    btn.style.opacity = count ? '1' : '0.45';
    btn.onclick = () => selectSpecialism(sp, btn);
    toolbar.appendChild(btn);
  });
})();

function selectSpecialism(sp, btn) {
  document.querySelectorAll('#spec-toolbar .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  philActiveSp    = sp;
  philActiveSub   = null;
  philActiveTheme = null;
  document.getElementById('spec-panel').style.display = 'block';
  buildSidebar(sp);
  renderSpecResults();
}

function buildSidebar(sp) {
  const sidebar = document.getElementById('spec-sidebar');
  sidebar.innerHTML = '';

  /* "All" entry */
  const allBtn = document.createElement('button');
  allBtn.className = 'spec-sb-item active';
  allBtn.textContent = 'All (' + scholarsForSpecialism(sp).length + ')';
  allBtn.onclick = () => { philActiveSub = null; philActiveTheme = null; updateSidebarActive(); renderSpecResults(); };
  sidebar.appendChild(allBtn);

  /* Sub entries */
  (sp.subs || []).forEach(sub => {
    const count = scholarsForSpecialism(sp, sub.keys).length;
    if (!count) return;

    const label = document.createElement('p');
    label.className = 'spec-sb-head';
    label.textContent = sub.label;
    sidebar.appendChild(label);

    /* Main sub button (shows all for this philosopher/school) */
    const subBtn = document.createElement('button');
    subBtn.className = 'spec-sb-item';
    subBtn.dataset.subKey = sub.label;
    subBtn.textContent = 'All (' + count + ')';
    subBtn.onclick = () => { philActiveSub = sub; philActiveTheme = null; updateSidebarActive(); renderSpecResults(); };
    sidebar.appendChild(subBtn);

    /* Thematic sub-buttons if present */
    if (sub.thematic) {
      sub.thematic.forEach(th => {
        /* th can filter by keys (individual philosophers) OR tags (themes) */
        const thCount = th.keys
          ? scholarsForSpecialism(sp, th.keys).length
          : scholarsForSpecialism(sp, sub.keys, th.tags).length;
        if (!thCount) return;
        const thBtn = document.createElement('button');
        thBtn.className = 'spec-sb-item';
        thBtn.dataset.subKey = sub.label;
        thBtn.dataset.themeKey = th.label;
        thBtn.textContent = th.label + ' (' + thCount + ')';
        thBtn.onclick = () => { philActiveSub = sub; philActiveTheme = th; updateSidebarActive(); renderSpecResults(); };
        sidebar.appendChild(thBtn);
      });
    }
  });
}

function updateSidebarActive() {
  const sidebar = document.getElementById('spec-sidebar');
  sidebar.querySelectorAll('.spec-sb-item').forEach(btn => {
    const isAll     = !btn.dataset.subKey;
    const isSub     = btn.dataset.subKey && !btn.dataset.themeKey;
    const isThematic = btn.dataset.themeKey;
    let active = false;
    if (!philActiveSub && !philActiveTheme && isAll) active = true;
    else if (philActiveSub && !philActiveTheme && isSub && btn.dataset.subKey === philActiveSub.label) active = true;
    else if (philActiveTheme && isThematic && btn.dataset.subKey === philActiveSub.label && btn.dataset.themeKey === philActiveTheme.label) active = true;
    btn.classList.toggle('active', active);
    btn.classList.toggle('thematic', active && !!philActiveTheme);
  });
}

function renderSpecResults() {
  const sp = philActiveSp;
  const sub = philActiveSub;
  const theme = philActiveTheme;
  const scholars = sortBySurname(
    scholarsForSpecialism(
      sp,
      sub ? sub.keys : null,
      theme && theme.tags ? theme.tags : null,
      theme && theme.keys ? theme.keys : null
    )
  );
  const heading = sp.label
    + (sub   ? ' · ' + sub.label   : '')
    + (theme ? ': ' + theme.label : '');
  const chips = scholars.map(s => {
    const idx = SCHOLARS.indexOf(s);
    return `
    <div class="scholar-chip" data-scholar-id="${idx}" style="cursor:pointer" title="Click to expand profile">
      <div class="chip-head">
        ${avatarHtml(s, 'sm')}
        <div class="chip-text">
          <div class="sc-name">${s.name}</div>
          <div class="sc-pos">${(s.position || '').split('·')[0].trim()}</div>
        </div>
      </div>
      <div class="chip-body">
        ${affiliationHtml(s)}
        ${linksHtml(s, '0.72rem')}
        <div class="sc-tags">${allTagsHtml(s)}</div>
      </div>
    </div>`;
  }).join('');
  document.getElementById('spec-results').innerHTML = `
    <p class="pr-heading" style="margin-bottom:1rem">${heading}
      <span style="font-size:0.8rem;font-weight:400;color:var(--ink-muted)">(${scholars.length})</span>
    </p>
    ${scholars.length
      ? `<div class="scholar-grid">${chips}</div>`
      : `<p style="color:var(--ink-faint);font-style:italic;font-family:'EB Garamond',serif">No researchers listed for this selection.</p>`}`;
}


/* ══════════════════════════════════════
   VIEW 2 — BROWSE BY INSTITUTION (MAP)
   ══════════════════════════════════════ */

function shortUniLabel(uni) {
  return uni
    .replace('University College London', 'UCL')
    .replace("King's College London", 'KCL')
    .replace('Royal Holloway, University of London', 'Royal Holloway')
    .replace('Birkbeck, University of London', 'Birkbeck')
    .replace(', University of London', '');
}

function coordKey(coord) {
  return `${coord.lat.toFixed(4)},${coord.lng.toFixed(4)}`;
}

function offsetCoord(coord, index, total) {
  if (total <= 1) return coord;

  /*
    Keep scholars.js compatible: it can continue to store city-level
    coordinates only. If several institutions share one city coordinate
    — especially London — this spreads their markers slightly so each
    institution remains separately clickable. If you later add institution
    keys to UNI_COORDS, those exact coordinates will be used instead.
  */
  const angle = (index / total) * 2 * Math.PI;
  const radius = 0.018 + Math.min(total, 8) * 0.0015;
  return {
    lat: coord.lat + Math.sin(angle) * radius,
    lng: coord.lng + Math.cos(angle) * radius,
  };
}

let mapInstance = null;
let mapMarkerLayer = null;

function initMap() {
  if (mapInstance) {
    setTimeout(() => mapInstance.invalidateSize(), 0);
    return;
  }

  mapInstance = L.map('mapF', { scrollWheelZoom: false }).setView([54.5, -3.2], 6);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd', maxZoom: 19,
  }).addTo(mapInstance);

  mapMarkerLayer = L.layerGroup().addTo(mapInstance);
  rebuildMapPins(true);
  setTimeout(() => mapInstance.invalidateSize(), 0);
}

/* Track the currently open panel so the checkbox can refresh it */
let _lastPanel = null;

function rebuildMapPins(fitBounds) {
  if (!mapInstance) return;
  mapMarkerLayer.clearLayers();
  const showEmeriti = document.getElementById('map-show-emeriti')?.checked;

  /* Tag each scholar with whether they are emeritus */
  const pool = SCHOLARS.map(s => ({...s, _emeritus: false}));
  if (showEmeriti) EMERITI.forEach(s => pool.push({...s, _emeritus: true}));

  /* Group by institution */
  const byInstitution = {};
  pool.forEach(s => {
    const key = s.uni || 'Unknown institution';
    (byInstitution[key] = byInstitution[key] || []).push(s);
  });

  /* Group institutions by coordinate */
  const byCoord = {};
  Object.entries(byInstitution).forEach(([uni, scholars]) => {
    const city = scholars[0]?.city || '';
    const baseCoord = UNI_COORDS[uni] || UNI_COORDS[city];
    if (!baseCoord) return;
    const key = coordKey(baseCoord);
    if (!byCoord[key]) byCoord[key] = { coord: baseCoord, city, institutions: [] };
    const existing = byCoord[key].institutions.find(i => i.uni === uni);
    if (existing) existing.scholars.push(...scholars);
    else byCoord[key].institutions.push({ uni, scholars: [...scholars] });
  });

  const bounds = [];

  Object.values(byCoord).forEach(({ coord, city, institutions }) => {
    bounds.push([coord.lat, coord.lng]);
    const isGrouped = institutions.length > 1;
    const activeCount = institutions.reduce((n, i) => n + i.scholars.filter(s => !s._emeritus).length, 0);
    const totalCount  = institutions.reduce((n, i) => n + i.scholars.length, 0);

    /* Skip pins with no scholars, or emeriti-only pins when checkbox is off */
    if (totalCount === 0) return;
    if (activeCount === 0 && !showEmeriti) return;

    /* Show active count normally; for emeriti-only pins show their count */
    const n = activeCount > 0 ? activeCount : totalCount;
    const pinLabel = isGrouped ? city : institutions[0].uni;
    const pinW = 36, pinH = 44, totalH = pinH + 18;
    const icon = L.divIcon({
      className: '',
      html: `
        <div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;width:${pinW}px">
          <svg width="${pinW}" height="${pinH}" viewBox="0 0 36 44" xmlns="http://www.w3.org/2000/svg">
            <path d="M18,42 Q4,28 4,16 A14,14 0 1,1 32,16 Q32,28 18,42Z" fill="#3d3480" stroke="#fff" stroke-width="1.5"/>
            <text x="18" y="19" text-anchor="middle" dominant-baseline="central"
              font-size="${n > 9 ? 9 : 11}" font-weight="600" fill="white"
              font-family="'DM Sans',sans-serif">${n}</text>
          </svg>
          <div style="font-size:10px;font-weight:500;color:#3d3480;font-family:'DM Sans',sans-serif;
            background:rgba(255,255,255,0.92);border:1px solid rgba(61,52,128,0.25);
            border-radius:10px;padding:1px 7px;margin-top:-2px;white-space:nowrap;
            box-shadow:0 1px 3px rgba(0,0,0,0.1)">${pinLabel}</div>
        </div>`,
      iconSize:   [pinW, totalH],
      iconAnchor: [pinW / 2, pinH],
    });

    L.marker([coord.lat, coord.lng], { icon }).addTo(mapMarkerLayer)
      .on('click', () => {
        if (isGrouped) {
          _lastPanel = { type: 'grouped', city, institutions };
          showGroupedPanel(city, institutions);
        } else {
          _lastPanel = { type: 'single', uni: institutions[0].uni, city, scholars: institutions[0].scholars };
          showMapPanel(institutions[0].uni, city, institutions[0].scholars);
        }
      });
  });

  if (fitBounds && bounds.length) mapInstance.fitBounds(bounds, { padding: [28, 28], maxZoom: 6 });

  /* Re-render the open panel if it exists, using fresh scholar pool */
  if (_lastPanel && !fitBounds) {
    /* Find the matching byCoord entry to get the fresh scholars */
    const freshEntry = Object.values(byCoord).find(({ city, institutions: insts }) =>
      _lastPanel.type === 'grouped'
        ? city === _lastPanel.city
        : insts.some(i => i.uni === _lastPanel.uni)
    );
    if (freshEntry) {
      if (_lastPanel.type === 'grouped') {
        showGroupedPanel(freshEntry.city, freshEntry.institutions);
      } else {
        const inst = freshEntry.institutions.find(i => i.uni === _lastPanel.uni);
        if (inst) showMapPanel(inst.uni, freshEntry.city, inst.scholars);
      }
    }
  }
}

/* Sort scholars by surname (last word of name) */
function sortBySurname(arr) {
  return [...arr].sort((a, b) => {
    const surnameA = a.name.trim().split(' ').pop().toLowerCase();
    const surnameB = b.name.trim().split(' ').pop().toLowerCase();
    return surnameA.localeCompare(surnameB);
  });
}

function showGroupedPanel(city, institutions) {
  const panel = document.getElementById('map-panel');

  function renderPanel(activeUni) {
    const inst    = institutions.find(i => i.uni === activeUni);
    const active  = sortBySurname(inst.scholars.filter(s => !s._emeritus));
    const emeriti = sortBySurname(inst.scholars.filter(s =>  s._emeritus));
    const tabs = institutions.map(({ uni }) => `
      <button class="map-inst-tab${uni === activeUni ? ' active' : ''}"
        data-uni="${uni}">${shortUniLabel(uni)}</button>`
    ).join('');

    function makeRows(list, isEmeritus) {
      return list.map(s => {
        const pool = isEmeritus ? EMERITI : SCHOLARS;
        const idx  = pool.indexOf(pool.find(p => p.name === s.name));
        const attr = isEmeritus ? `data-emeritus-id="${idx}"` : `data-scholar-id="${idx}"`;
        return `<div class="map-r-item" ${attr} style="cursor:pointer">
          <div class="map-r-top">${avatarHtml(s,'sm')}<div class="map-r-text">
            <p class="rc-name" style="font-size:1rem">${s.name}</p>
            <p class="rc-pos" style="font-size:0.78rem;margin-top:1px">${(s.position||'').split('·')[0].trim()}</p>
          </div></div>
          ${affiliationHtml(s)}
          ${linksHtml(s,'0.74rem')}
        </div>`;
      }).join('');
    }

    const emeritiSection = emeriti.length ? `
      <p style="font-size:0.7rem;font-weight:500;text-transform:uppercase;letter-spacing:0.09em;
         color:var(--ink-faint);border-left:3px solid var(--accent);padding-left:7px;
         margin:14px 0 6px">Emerita/Emeriti</p>
      ${makeRows(emeriti, true)}` : '';

    panel.innerHTML = `
      <p class="rc-name" style="margin-bottom:10px">${city}</p>
      <div class="map-inst-tabs">${tabs}</div>
      <p class="rc-name" style="font-size:1rem;margin-bottom:2px">${shortUniLabel(activeUni)}</p>
      <p class="rc-dept" style="margin-bottom:12px">${active.length} researcher${active.length !== 1 ? 's' : ''}${emeriti.length ? ' · ' + emeriti.length + ' emerit' + (emeriti.length === 1 ? 'us/a' : 'i/ae') : ''}</p>
      ${makeRows(active, false)}
      ${emeritiSection}`;

    panel.querySelectorAll('.map-inst-tab').forEach(btn => {
      btn.onclick = () => renderPanel(btn.dataset.uni);
    });
  }

  renderPanel(institutions[0].uni);
}

function showMapPanel(uni, city, scholars) {
  const active  = sortBySurname(scholars.filter(s => !s._emeritus));
  const emeriti = sortBySurname(scholars.filter(s =>  s._emeritus));

  function makeRows(list, isEmeritus) {
    return list.map(s => {
      const pool = isEmeritus ? EMERITI : SCHOLARS;
      const idx  = pool.indexOf(pool.find(p => p.name === s.name));
      const attr = isEmeritus ? `data-emeritus-id="${idx}"` : `data-scholar-id="${idx}"`;
      return `<div class="map-r-item" ${attr} style="cursor:pointer" title="Click to expand profile">
        <div class="map-r-top">
          ${avatarHtml(s, 'sm')}
          <div class="map-r-text">
            <p class="rc-name" style="font-size:1rem">${s.name}</p>
            <p class="rc-pos" style="font-size:0.78rem;margin-top:1px">${(s.position||'').split('·')[0].trim()}</p>
          </div>
        </div>
        ${affiliationHtml(s)}
        ${linksHtml(s, '0.74rem')}
      </div>`;
    }).join('');
  }

  const emeritiSection = emeriti.length ? `
    <p style="font-size:0.7rem;font-weight:500;text-transform:uppercase;letter-spacing:0.09em;
       color:var(--ink-faint);border-left:3px solid var(--accent);padding-left:7px;
       margin:14px 0 6px">Emerita/Emeriti</p>
    ${makeRows(emeriti, true)}` : '';

  document.getElementById('map-panel').innerHTML = `
    <p class="rc-name" style="margin-bottom:2px">${uni}</p>
    <p class="rc-dept" style="margin-bottom:14px">${city} · ${active.length} researcher${active.length !== 1 ? 's' : ''}${emeriti.length ? ' · ' + emeriti.length + ' emerit' + (emeriti.length === 1 ? 'us/a' : 'i/ae') : ''}</p>
    ${makeRows(active, false)}
    ${emeritiSection}`;
}

/* ══════════════════════════════════════
   VIEW 3 — RESEARCH NETWORK
   ══════════════════════════════════════ */
let netReady = false, netSelected = null, netFilter = 'all';
let dragging = null, dragOX = 0, dragOY = 0, dragMoved = false;
const R = 19;

const nodes = SCHOLARS.map((s, i) => ({ ...s, id: i, x: 0, y: 0, vx: 0, vy: 0 }));
const edges = [];
for (let i = 0; i < nodes.length; i++)
  for (let j = i + 1; j < nodes.length; j++) {
    const shared = nodes[i].tags.filter(t => nodes[j].tags.includes(t));
    if (shared.length) edges.push({ a: i, b: j, shared, strength: shared.length });
  }

function initNetwork() {
  if (netReady) return;
  netReady = true;
  const canvas = document.getElementById('net');
  const wrap   = canvas.parentElement;

  function resize() {
    canvas.width  = wrap.clientWidth;
    canvas.height = Math.max(600, Math.round(wrap.clientWidth * 0.78));
    nodes.forEach((n, i) => {
      const a = (i / nodes.length) * 2 * Math.PI;
      n.x = canvas.width  / 2 + canvas.width  * 0.27 * Math.cos(a);
      n.y = canvas.height / 2 + canvas.height * 0.34 * Math.sin(a);
      n.vx = n.vy = 0;
    });
  }
  resize();
  window.addEventListener('resize', resize);

  function visSet() {
    if (netFilter === 'all') return new Set(nodes.map(n => n.id));
    /* Scepticism matches Pyrrhonian Scepticism and Academic Scepticism too */
    const scepticismKeys = ['Scepticism', 'Pyrrhonian Scepticism', 'Academic Scepticism'];
    /* Pre-Socratics matches all individual pre-socratic philosophers */
    const preSocraticKeys = ['Pre-Socratics','Heraclitus','Parmenides','Democritus',
      'Empedocles','Anaxagoras','Protagoras','Xenophanes','Anaximander'];
    /* Peripatetics matches Aristotle and Alexander of Aphrodisias */
    const peripateticsKeys = ['Peripatetics','Aristotle','Alexander of Aphrodisias'];

    return new Set(nodes.filter(n => {
      const ancs = n.ancients || [];
      if (netFilter === 'Scepticism')   return ancs.some(a => scepticismKeys.includes(a));
      if (netFilter === 'Pre-Socratics') return ancs.some(a => preSocraticKeys.includes(a));
      if (netFilter === 'Peripatetics') return ancs.some(a => peripateticsKeys.includes(a));
      return ancs.includes(netFilter);
    }).map(n => n.id));
  }

  function simulate() {
    const vis = visSet();
    const w = canvas.width, h = canvas.height;
    nodes.forEach(n => { n.fx = 0; n.fy = 0; });
    nodes.forEach((a, i) => {
      if (!vis.has(a.id)) return;
      a.fx += (w / 2 - a.x) * 0.011; a.fy += (h / 2 - a.y) * 0.011;
      nodes.forEach((b, j) => {
        if (j <= i || !vis.has(b.id)) return;
        const dx = b.x - a.x, dy = b.y - a.y, d = Math.sqrt(dx*dx + dy*dy) || 1;
        const f = 2000 / (d * d);
        a.fx -= f*dx/d; a.fy -= f*dy/d; b.fx += f*dx/d; b.fy += f*dy/d;
      });
    });
    edges.forEach(e => {
      const a = nodes[e.a], b = nodes[e.b];
      if (!vis.has(a.id) || !vis.has(b.id)) return;
      const dx = b.x - a.x, dy = b.y - a.y, d = Math.sqrt(dx*dx + dy*dy) || 1;
      const f = (d - (e.strength >= 2 ? 100 : 175)) * 0.013 * e.strength;
      a.fx += f*dx/d; a.fy += f*dy/d; b.fx -= f*dx/d; b.fy -= f*dy/d;
    });
    nodes.forEach(n => {
      if (!vis.has(n.id) || n === dragging) return;
      n.vx = (n.vx + n.fx) * 0.80; n.vy = (n.vy + n.fy) * 0.80;
      n.x = Math.max(R+2, Math.min(w-R-2, n.x + n.vx));
      n.y = Math.max(R+2, Math.min(h-R-2, n.y + n.vy));
    });
  }

  /* Pre-load photos for canvas drawing */
  const imgCache = {};
  nodes.forEach(n => {
    if (!n.photo) return;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = n.photo;
    img.onload = () => { imgCache[n.id] = img; };
  });

  function draw() {
    const ctx = canvas.getContext('2d');
    const vis = visSet();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    edges.forEach(e => {
      const a = nodes[e.a], b = nodes[e.b];
      if (!vis.has(a.id) || !vis.has(b.id)) return;
      const hi = netSelected && (netSelected.id === e.a || netSelected.id === e.b);
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
      if (e.strength >= 2) {
        ctx.strokeStyle = hi ? '#3d3480' : 'rgba(61,52,128,0.22)';
        ctx.lineWidth = hi ? 2.4 : 1.5; ctx.setLineDash([]);
      } else {
        ctx.strokeStyle = hi ? '#8a857e' : 'rgba(180,175,165,0.38)';
        ctx.lineWidth = hi ? 1.4 : 0.9; ctx.setLineDash([5, 4]);
      }
      ctx.stroke(); ctx.setLineDash([]);
    });

    nodes.forEach(n => {
      if (!vis.has(n.id)) return;
      const isSel  = netSelected && netSelected.id === n.id;
      const isConn = netSelected && edges.some(e =>
        (e.a === netSelected.id && e.b === n.id) || (e.b === netSelected.id && e.a === n.id));
      ctx.globalAlpha = (netSelected && !isSel && !isConn) ? 0.18 : 1;

      if (isSel) {
        ctx.beginPath(); ctx.arc(n.x, n.y, R+5, 0, 2*Math.PI);
        ctx.fillStyle = FOCUS_LIGHT[n.focus] || '#eee'; ctx.fill();
      }

      /* Draw photo clipped to circle, or solid colour */
      ctx.save();
      ctx.beginPath(); ctx.arc(n.x, n.y, R, 0, 2*Math.PI); ctx.clip();
      if (imgCache[n.id]) {
        ctx.drawImage(imgCache[n.id], n.x - R, n.y - R, R*2, R*2);
        /* Subtle tint overlay so node colour is still legible */
        ctx.fillStyle = (FOCUS_HEX[n.focus] || '#888') + '44';
        ctx.fillRect(n.x - R, n.y - R, R*2, R*2);
      } else {
        ctx.fillStyle = FOCUS_HEX[n.focus] || '#888'; ctx.fill();
      }
      ctx.restore();

      /* Ring for selected */
      if (isSel) {
        ctx.beginPath(); ctx.arc(n.x, n.y, R, 0, 2*Math.PI);
        ctx.strokeStyle = '#fff'; ctx.lineWidth = 2.5; ctx.stroke();
      }

      /* Initials (only when no photo loaded) */
      if (!imgCache[n.id]) {
        ctx.fillStyle = '#fff';
        ctx.font = '500 11px "DM Sans",sans-serif';
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(initials(n.name), n.x, n.y);
      }

      /* Name label below */
      ctx.fillStyle = isSel ? FOCUS_HEX[n.focus] : 'rgba(80,75,68,0.85)';
      ctx.font = (isSel ? '500 ' : '') + '10.5px "DM Sans",sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(n.name.split(' ')[0], n.x, n.y + R + 10);
      ctx.globalAlpha = 1;
    });
  }

  function tick() { simulate(); draw(); requestAnimationFrame(tick); }
  tick();

  function hitTest(mx, my) {
    const vis = visSet();
    for (const n of nodes) {
      if (!vis.has(n.id)) continue;
      const dx = mx - n.x, dy = my - n.y;
      if (dx*dx + dy*dy < (R+6)*(R+6)) return n;
    }
    return null;
  }
  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const sx = canvas.width / rect.width, sy = canvas.height / rect.height;
    const src = e.touches ? e.touches[0] : e;
    return { x: (src.clientX - rect.left)*sx, y: (src.clientY - rect.top)*sy };
  }
  canvas.addEventListener('mousedown', e => {
    const {x,y} = getPos(e), n = hitTest(x,y);
    if (n) { dragging=n; dragOX=x-n.x; dragOY=y-n.y; dragMoved=false; }
  });
  canvas.addEventListener('mousemove', e => {
    if (!dragging) return;
    const {x,y} = getPos(e);
    dragging.x = Math.max(R+2, Math.min(canvas.width-R-2,  x-dragOX));
    dragging.y = Math.max(R+2, Math.min(canvas.height-R-2, y-dragOY));
    dragging.vx = dragging.vy = 0; dragMoved = true;
  });
  canvas.addEventListener('mouseup', e => {
    if (dragging && !dragMoved) selectNetNode(dragging);
    else if (!dragging) { const {x,y}=getPos(e); const n=hitTest(x,y); if(n) selectNetNode(n); else clearNetPanel(); }
    dragging = null;
  });
  canvas.addEventListener('touchstart', e => {
    const {x,y}=getPos(e), n=hitTest(x,y);
    if (n) { dragging=n; dragOX=x-n.x; dragOY=y-n.y; dragMoved=false; }
  }, {passive:true});
  canvas.addEventListener('touchmove', e => {
    if (!dragging) return; e.preventDefault();
    const {x,y}=getPos(e);
    dragging.x = Math.max(R+2, Math.min(canvas.width-R-2,  x-dragOX));
    dragging.y = Math.max(R+2, Math.min(canvas.height-R-2, y-dragOY));
    dragging.vx = dragging.vy = 0; dragMoved = true;
  }, {passive:false});
  canvas.addEventListener('touchend', () => { if (dragging && !dragMoved) selectNetNode(dragging); dragging=null; });
}

function selectNetNode(n) {
  netSelected = n;
  const conns = edges
    .filter(e => e.a === n.id || e.b === n.id)
    .sort((a,b) => b.strength - a.strength)
    .map(e => ({ s: nodes[e.a === n.id ? e.b : e.a], shared: e.shared }));
  document.getElementById('net-panel').innerHTML = `
    <div data-scholar-id="${n.id}" style="cursor:pointer" title="Click to expand full profile">
      ${scholarDetailHtml(n)}
      <p style="font-size:0.72rem;color:var(--accent);margin-top:8px">↗ Click to expand full profile</p>
    </div>
    <hr class="rc-divider">
    <p class="rc-section">Shares interests with (${conns.length})</p>
    ${conns.length
      ? conns.map(c => `
          <div class="conn-item" data-scholar-id="${c.s.id}" style="cursor:pointer" title="Click to expand profile">
            <div class="conn-name">${c.s.name}</div>
            <div class="conn-detail">${c.shared.map(t => THEMES[t]?.label || t).join(', ')} · ${c.s.uni}</div>
          </div>`).join('')
      : `<p style="font-size:0.8rem;color:var(--ink-faint)">No connections in current view</p>`}`;
}
function clearNetPanel() {
  netSelected = null;
  document.getElementById('net-panel').innerHTML = '<p class="panel-empty">Click any node to see a researcher\'s profile and discover who shares their interests.</p>';
}
function setNetFilter(tag, btn) {
  netFilter = tag; netSelected = null; clearNetPanel();
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ══════════════════════════════════════
   VIEW 4 — SUBMIT YOUR PROFILE FORM
   ══════════════════════════════════════ */
const REQUIRED_FIELDS = [
  { id: 'f-name',       errId: 'err-name',       msg: 'Please enter your full name.' },
  { id: 'f-position',   errId: 'err-position',   msg: 'Please enter your position.' },
  { id: 'f-institution',errId: 'err-institution',msg: 'Please enter your institution.' },
  { id: 'f-dept',       errId: 'err-dept',       msg: 'Please enter your faculty or department.' },
  { id: 'f-specialisms',errId: 'err-specialisms',msg: 'Please describe your specialisms.' },
];

function clearFormErrors() {
  REQUIRED_FIELDS.forEach(f => {
    const el = document.getElementById(f.id);
    const err = document.getElementById(f.errId);
    if (el)  el.classList.remove('invalid');
    if (err) err.textContent = '';
  });
  const emailEl = document.getElementById('f-email');
  const emailErr = document.getElementById('err-email');
  if (emailEl)  emailEl.classList.remove('invalid');
  if (emailErr) emailErr.textContent = '';
}

function validateForm() {
  let ok = true;
  clearFormErrors();

  REQUIRED_FIELDS.forEach(f => {
    const el  = document.getElementById(f.id);
    const err = document.getElementById(f.errId);
    if (el && !el.value.trim()) {
      el.classList.add('invalid');
      if (err) err.textContent = f.msg;
      ok = false;
    }
  });

  /* Optional email — validate format if filled */
  const emailEl  = document.getElementById('f-email');
  const emailErr = document.getElementById('err-email');
  if (emailEl && emailEl.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
    emailEl.classList.add('invalid');
    if (emailErr) emailErr.textContent = 'Please enter a valid email address.';
    ok = false;
  }

  return ok;
}

document.getElementById('profile-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  if (!validateForm()) return;

  const btn    = document.getElementById('submit-btn');
  const status = document.getElementById('form-status');
  btn.disabled = true;
  btn.textContent = 'Sending…';
  status.textContent = '';

  /* Check whether the user has replaced the placeholder endpoint */
  if (this.action.includes('YOUR_FORMSPREE_ENDPOINT')) {
    status.textContent = '⚠ Please set your Formspree endpoint in the HTML first.';
    btn.disabled = false;
    btn.textContent = 'Send submission';
    return;
  }

  try {
    const res = await fetch(this.action, {
      method: 'POST',
      body: new FormData(this),
      headers: { 'Accept': 'application/json' },
    });

    if (res.ok) {
      document.getElementById('profile-form').style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    } else {
      const data = await res.json().catch(() => ({}));
      status.textContent = data.errors
        ? data.errors.map(err => err.message).join(', ')
        : 'Something went wrong. Please try again or send an email directly.';
      btn.disabled = false;
      btn.textContent = 'Send submission';
    }
  } catch {
    status.textContent = 'Network error. Please check your connection and try again.';
    btn.disabled = false;
    btn.textContent = 'Send submission';
  }
});

document.getElementById('change-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = document.getElementById('cr-submit-btn');
  btn.disabled = true;
  btn.textContent = 'Sending…';
  try {
    const res = await fetch(this.action, {
      method: 'POST',
      body: new FormData(this),
      headers: { 'Accept': 'application/json' },
    });
    if (res.ok) {
      this.style.display = 'none';
      document.getElementById('cr-success').style.display = 'block';
    } else {
      btn.disabled = false;
      btn.textContent = 'Send request';
    }
  } catch {
    btn.disabled = false;
    btn.textContent = 'Send request';
  }
});

function resetForm() {
  const form = document.getElementById('profile-form');
  form.reset();
  clearFormErrors();
  form.style.display = 'block';
  document.getElementById('form-success').style.display = 'none';
  document.getElementById('submit-btn').disabled = false;
  document.getElementById('submit-btn').textContent = 'Send submission';
  document.getElementById('form-status').textContent = '';
  removePhoto();
}

function addUrlField() {
  const wrap = document.getElementById('other-url-fields');
  const n = wrap.querySelectorAll('input').length + 1;
  const inp = document.createElement('input');
  inp.className = 'form-input';
  inp.style.marginBottom = '6px';
  inp.name = 'other_url_' + n;
  inp.type = 'url';
  inp.placeholder = 'https://…';
  wrap.appendChild(inp);
  inp.focus();
}

/* ══════════════════════════════════════
   CLOUDINARY PHOTO UPLOAD
   ══════════════════════════════════════ */
const CLOUDINARY_CLOUD   = 'dspfaec6d';
const CLOUDINARY_PRESET  = 'profiles-photos';
const CLOUDINARY_URL     = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`;

const photoInput     = document.getElementById('f-photo-upload');
const photoHidden    = document.getElementById('f-photo');
const photoDropZone  = document.getElementById('photo-drop-zone');
const photoStatus    = document.getElementById('photo-upload-status');
const photoPreview   = document.getElementById('photo-preview-wrap');
const photoPlaceholder = document.getElementById('photo-placeholder');
const photoPreviewImg  = document.getElementById('photo-preview-img');

async function uploadToCloudinary(file) {
  if (file.size > 5 * 1024 * 1024) {
    setPhotoStatus('File is too large — please choose an image under 5 MB.', 'error');
    return;
  }
  setPhotoStatus('Uploading…', 'uploading');
  document.getElementById('submit-btn').disabled = true;

  const fd = new FormData();
  fd.append('file', file);
  fd.append('upload_preset', CLOUDINARY_PRESET);

  try {
    const res  = await fetch(CLOUDINARY_URL, { method: 'POST', body: fd });
    const data = await res.json();
    if (data.secure_url) {
      photoHidden.value = data.secure_url;
      photoPreviewImg.src = data.secure_url;
      photoPreview.style.display = 'block';
      photoPlaceholder.style.display = 'none';
      photoDropZone.classList.add('has-preview');
      photoInput.value = '';
      setPhotoStatus('Photo uploaded successfully.', 'success');
    } else {
      setPhotoStatus('Upload failed — please try again.', 'error');
    }
  } catch {
    setPhotoStatus('Network error during upload — please try again.', 'error');
  } finally {
    document.getElementById('submit-btn').disabled = false;
  }
}

function setPhotoStatus(msg, type) {
  photoStatus.textContent = msg;
  photoStatus.className   = 'photo-upload-status' + (type ? ' ' + type : '');
}

function removePhoto(e) {
  if (e) e.stopPropagation();
  photoHidden.value = '';
  photoPreviewImg.src = '';
  photoPreview.style.display = 'none';
  photoPlaceholder.style.display = 'block';
  photoDropZone.classList.remove('has-preview');
  setPhotoStatus('', '');
}

photoInput?.addEventListener('change', e => {
  if (e.target.files[0]) uploadToCloudinary(e.target.files[0]);
});

photoDropZone?.addEventListener('dragover', e => { e.preventDefault(); photoDropZone.classList.add('dragging'); });
photoDropZone?.addEventListener('dragleave', () => photoDropZone.classList.remove('dragging'));
photoDropZone?.addEventListener('drop', e => {
  e.preventDefault();
  photoDropZone.classList.remove('dragging');
  if (e.dataTransfer.files[0]) uploadToCloudinary(e.dataTransfer.files[0]);
});

/* ══════════════════════════════════════
   MODAL — Option A (centred + blur)
   ══════════════════════════════════════ */
function openModal(scholar) {
  const s = scholar;

  /* Avatar */
  const avEl = document.getElementById('modal-avatar');
  if (s.photo) {
    avEl.innerHTML = `<img src="${s.photo}" alt="${s.name}" onerror="this.style.display='none';this.nextSibling.style.display='flex'">
      <span class="modal-avatar-lg-initials" style="display:none">${initials(s.name)}</span>`;
  } else {
    avEl.innerHTML = `<span class="modal-avatar-lg-initials">${initials(s.name)}</span>`;
    avEl.style.background = FOCUS_HEX[s.focus] || '#888';
    avEl.querySelector('span').style.color = '#fff';
  }
  /* Set node colour tint on avatar when photo present */
  if (s.photo) avEl.style.background = 'var(--bg)';

  /* Text */
  document.getElementById('modal-name').textContent  = s.name;
  document.getElementById('modal-pos').textContent   = (s.position || '').split('·')[0].trim();
  document.getElementById('modal-pos').style.color   = 'var(--accent)';
  document.getElementById('modal-affil').innerHTML   = affiliationHtml(s, true);

  /* Tags: ancient tags first, then theme tags */
  const tagRow = document.getElementById('modal-tags');
  tagRow.innerHTML =
    (s.ancients || []).map(a =>
      `<span class="modal-tag" style="background:${ANCT.bg};color:${ANCT.txt}">${a}</span>`
    ).join('') +
    (s.tags || []).map(t => {
      const th = THEMES[t] || { label: t, bg: '#eee', txt: '#333' };
      return `<span class="modal-tag" style="background:${th.bg};color:${th.txt}">${th.label}</span>`;
    }).join('');

  /* Links */
  const linkParts = [];
  const envelopeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
  if (s.email) linkParts.push({ label: envelopeIcon, href: `mailto:${s.email}`, title: s.email });
  if (s.web)   linkParts.push({ label: 'Personal website', href: s.web });
  (s.links || []).forEach(l => {
    if (l.label === 'orcid')
      linkParts.push({ label: ORCID_SVG + ' ORCID', href: l.url });
    else if (l.label === 'google-scholar')
      linkParts.push({ label: GSCHOLAR_SVG + ' Google Scholar', href: l.url });
    else
      linkParts.push({ label: l.label, href: l.url });
  });

  const linkEl    = document.getElementById('modal-links');
  const linkLabel = document.getElementById('modal-links-label');
  if (linkParts.length) {
    const extIcon = `<svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    linkEl.innerHTML = linkParts.map(l =>
      `<a class="modal-link-btn" href="${l.href}" ${l.href.startsWith('mailto') ? '' : 'target="_blank" rel="noopener"'}${l.title ? ` title="${l.title}"` : ''}>${l.label}${l.href.startsWith('mailto') ? '' : extIcon}</a>`
    ).join('');
    linkLabel.style.display = 'block';
  } else {
    linkEl.innerHTML = '';
    linkLabel.style.display = 'none';
  }

  /* Open */
  document.body.style.overflow = 'hidden';
  const backdrop = document.getElementById('modal-backdrop');
  backdrop.style.display = 'flex';
  requestAnimationFrame(() => backdrop.classList.add('open'));
}

function closeModal() {
  const backdrop = document.getElementById('modal-backdrop');
  backdrop.classList.remove('open');
  backdrop.addEventListener('transitionend', () => {
    backdrop.style.display = 'none';
    document.body.style.overflow = '';
  }, { once: true });
}

function closeModalOnBackdrop(e) {
  if (e.target === document.getElementById('modal-backdrop')) closeModal();
}

/* Close on Escape key */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ── Make every scholar chip / map card / panel card clickable ──
   We attach a single delegated listener at the document level.
   Each chip/card must have data-scholar-id="N" set on it.        */
document.addEventListener('click', e => {
  const chip = e.target.closest('[data-scholar-id]');
  if (!chip) return;
  const id = parseInt(chip.dataset.scholarId, 10);
  const s  = SCHOLARS[id];
  if (s) openModal(s);
});
/* ══════════════════════════════════════
   SEARCH BAR
   ══════════════════════════════════════ */
function handleSearch(query) {
  const clearBtn = document.getElementById('search-clear');
  const resultsEl = document.getElementById('search-results');
  const q = query.trim().toLowerCase();

  clearBtn.style.display = q ? 'block' : 'none';

  if (!q) { resultsEl.style.display = 'none'; return; }

  const matches = SCHOLARS.filter(s => {
    const name = s.name.toLowerCase();
    const parts = name.split(' ');
    // match full name, any name part, or surname (last word)
    return name.includes(q) || parts.some(p => p.startsWith(q));
  }).sort((a, b) => {
    const surnameA = a.name.trim().split(' ').pop().toLowerCase();
    const surnameB = b.name.trim().split(' ').pop().toLowerCase();
    return surnameA.localeCompare(surnameB);
  });

  if (!matches.length) {
    resultsEl.innerHTML = '<div class="search-no-results">No researchers found matching "<em>' + query.trim() + '</em>"</div>';
    resultsEl.style.display = 'block';
    return;
  }

  resultsEl.innerHTML = matches.map(s => {
    const idx = SCHOLARS.indexOf(s);
    const highlight = (text) => {
      const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')', 'gi');
      return text.replace(re, '<strong>$1</strong>');
    };
    return `<div class="search-result-item" data-scholar-id="${idx}">
      ${avatarHtml(s, 'sm')}
      <div>
        <div class="search-result-name">${highlight(s.name)}</div>
        <div class="search-result-sub">${s.position} · ${s.uni}</div>
      </div>
    </div>`;
  }).join('');

  resultsEl.style.display = 'block';
}

function clearSearch() {
  const input = document.getElementById('researcher-search');
  input.value = '';
  input.focus();
  handleSearch('');
}

/* ══════════════════════════════════════
   EMERITA / EMERITI TAB
   ══════════════════════════════════════ */
let emeritiReady = false;
let emeritiActiveSp   = null;
let emeritiActiveSub  = null;
let emeritiActiveTheme = null;

function emeritiForSpecialism(sp, subKeys, themeTags, themeKeys) {
  const matchKeys = subKeys || sp.keys;
  let scholars = EMERITI.filter(s => (s.ancients || []).some(a => matchKeys.includes(a)));
  if (themeKeys && themeKeys.length)
    scholars = scholars.filter(s => (s.ancients || []).some(a => themeKeys.includes(a)));
  else if (themeTags && themeTags.length)
    scholars = scholars.filter(s => (s.tags || []).some(t => themeTags.includes(t)));
  return scholars;
}

function initEmeriti() {
  if (emeritiReady) return;
  emeritiReady = true;
  const toolbar = document.getElementById('emeriti-toolbar');
  SPECIALISMS.forEach(sp => {
    const count = emeritiForSpecialism(sp).length;
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.key = sp.key;
    btn.textContent = sp.label + (count ? ' (' + count + ')' : '');
    btn.style.opacity = count ? '1' : '0.45';
    btn.onclick = () => selectEmeritiSpecialism(sp, btn);
    toolbar.appendChild(btn);
  });
  /* Show all by default */
  const sorted = sortBySurname([...EMERITI]);
  document.getElementById('emeriti-results').innerHTML =
    `<p class="pr-heading">All Emerita/Emeriti <span style="font-size:0.8rem;font-weight:400;color:var(--ink-muted)">(${sorted.length})</span></p>
     <div class="scholar-grid">${sorted.map(s => scholarChipHtml(s, EMERITI.indexOf(s), true)).join('')}</div>`;
}

function scholarChipHtml(s, idx, isEmeritus, type) {
  let attr;
  if (type === 'phd') attr = `data-phd-id="${idx}"`;
  else if (isEmeritus) attr = `data-emeritus-id="${idx}"`;
  else attr = `data-scholar-id="${idx}"`;
  return `
    <div class="scholar-chip" ${attr} style="cursor:pointer" title="Click to expand profile">
      <div class="chip-head">
        ${avatarHtml(s, 'sm')}
        <div class="chip-text">
          <div class="sc-name">${s.name}</div>
          <div class="sc-pos">${(s.position || '').split('·')[0].trim()}</div>
        </div>
      </div>
      <div class="chip-body">
        ${affiliationHtml(s)}
        ${linksHtml(s, '0.72rem')}
        <div class="sc-tags">${allTagsHtml(s)}</div>
      </div>
    </div>`;
}

function selectEmeritiSpecialism(sp, btn) {
  document.querySelectorAll('#emeriti-toolbar .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  emeritiActiveSp    = sp;
  emeritiActiveSub   = null;
  emeritiActiveTheme = null;
  document.getElementById('emeriti-panel').style.display = 'block';
  buildEmeritiSidebar(sp);
  renderEmeritiResults();
}

function buildEmeritiSidebar(sp) {
  const sidebar = document.getElementById('emeriti-sidebar');
  sidebar.innerHTML = '';
  const allBtn = document.createElement('button');
  allBtn.className = 'spec-sb-item active';
  allBtn.textContent = 'All (' + emeritiForSpecialism(sp).length + ')';
  allBtn.onclick = () => { emeritiActiveSub = null; emeritiActiveTheme = null; updateEmeritiSidebarActive(); renderEmeritiResults(); };
  sidebar.appendChild(allBtn);
  (sp.subs || []).forEach(sub => {
    const count = emeritiForSpecialism(sp, sub.keys).length;
    if (!count) return;
    const head = document.createElement('p');
    head.className = 'spec-sb-head';
    head.textContent = sub.label;
    sidebar.appendChild(head);
    const subBtn = document.createElement('button');
    subBtn.className = 'spec-sb-item';
    subBtn.dataset.subKey = sub.label;
    subBtn.textContent = 'All (' + count + ')';
    subBtn.onclick = () => { emeritiActiveSub = sub; emeritiActiveTheme = null; updateEmeritiSidebarActive(); renderEmeritiResults(); };
    sidebar.appendChild(subBtn);
    if (sub.thematic) {
      sub.thematic.forEach(th => {
        const thCount = th.keys
          ? emeritiForSpecialism(sp, th.keys).length
          : emeritiForSpecialism(sp, sub.keys, th.tags).length;
        if (!thCount) return;
        const thBtn = document.createElement('button');
        thBtn.className = 'spec-sb-item';
        thBtn.dataset.subKey = sub.label;
        thBtn.dataset.themeKey = th.label;
        thBtn.textContent = th.label + ' (' + thCount + ')';
        thBtn.onclick = () => { emeritiActiveSub = sub; emeritiActiveTheme = th; updateEmeritiSidebarActive(); renderEmeritiResults(); };
        sidebar.appendChild(thBtn);
      });
    }
  });
}

function updateEmeritiSidebarActive() {
  document.getElementById('emeriti-sidebar').querySelectorAll('.spec-sb-item').forEach(btn => {
    const isAll = !btn.dataset.subKey;
    const isSub = btn.dataset.subKey && !btn.dataset.themeKey;
    const isTh  = !!btn.dataset.themeKey;
    let active = false;
    if (!emeritiActiveSub && !emeritiActiveTheme && isAll) active = true;
    else if (emeritiActiveSub && !emeritiActiveTheme && isSub && btn.dataset.subKey === emeritiActiveSub.label) active = true;
    else if (emeritiActiveTheme && isTh && btn.dataset.subKey === emeritiActiveSub.label && btn.dataset.themeKey === emeritiActiveTheme.label) active = true;
    btn.classList.toggle('active', active);
    btn.classList.toggle('thematic', active && !!emeritiActiveTheme);
  });
}

function renderEmeritiResults() {
  const sp = emeritiActiveSp;
  const sub = emeritiActiveSub;
  const theme = emeritiActiveTheme;
  const scholars = sortBySurname(emeritiForSpecialism(
    sp,
    sub ? sub.keys : null,
    theme && theme.tags ? theme.tags : null,
    theme && theme.keys ? theme.keys : null
  ));
  const heading = sp.label
    + (sub   ? ' · ' + sub.label   : '')
    + (theme ? ': ' + theme.label : '');
  const chips = scholars.map(s => scholarChipHtml(s, EMERITI.indexOf(s), true)).join('');
  document.getElementById('emeriti-results').innerHTML = `
    <p class="pr-heading" style="margin-bottom:1rem">${heading}
      <span style="font-size:0.8rem;font-weight:400;color:var(--ink-muted)">(${scholars.length})</span>
    </p>
    ${scholars.length
      ? `<div class="scholar-grid">${chips}</div>`
      : `<p style="color:var(--ink-faint);font-style:italic;font-family:'EB Garamond',serif">No emeriti listed for this selection.</p>`}`;
}

/* Click handler for emeriti chips */
document.addEventListener('click', e => {
  const chip = e.target.closest('[data-emeritus-id]');
  if (!chip) return;
  const id = parseInt(chip.getAttribute('data-emeritus-id'), 10);
  const s = EMERITI[id];
  if (s) openModal(s);
});


document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrap')) {
    const sr = document.getElementById('search-results');
    if (sr) sr.style.display = 'none';
    const ph = document.getElementById('phd-search-results');
    if (ph) ph.style.display = 'none';
  }
});

/* ── Browse by Specialism search ── */
function handleSearch(query) {
  const clearBtn = document.getElementById('search-clear');
  const resultsEl = document.getElementById('search-results');
  const q = query.trim().toLowerCase();
  clearBtn.style.display = q ? 'block' : 'none';
  if (!q) { resultsEl.style.display = 'none'; return; }
  const matches = sortBySurname(SCHOLARS.filter(s => {
    const name = s.name.toLowerCase();
    return name.includes(q) || name.split(' ').some(p => p.startsWith(q));
  }));
  if (!matches.length) {
    resultsEl.innerHTML = '<div class="search-no-results">No researchers found matching "<em>' + query.trim() + '</em>"</div>';
    resultsEl.style.display = 'block'; return;
  }
  const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')', 'gi');
  resultsEl.innerHTML = matches.map(s => {
    const idx = SCHOLARS.indexOf(s);
    return `<div class="search-result-item" data-scholar-id="${idx}">
      ${avatarHtml(s, 'sm')}
      <div>
        <div class="search-result-name">${s.name.replace(re, '<strong>$1</strong>')}</div>
        <div class="search-result-sub">${s.position} · ${s.uni}</div>
      </div>
    </div>`;
  }).join('');
  resultsEl.style.display = 'block';
}

function clearSearch() {
  const input = document.getElementById('researcher-search');
  if (input) { input.value = ''; input.focus(); }
  handleSearch('');
}
/* Reopen on re-focus if there's a query */
document.getElementById('researcher-search')?.addEventListener('focus', function() {
  if (this.value.trim()) handleSearch(this.value);
});

/* ══════════════════════════════════════
   PhD STUDENTS TAB
   ══════════════════════════════════════ */
let phdReady = false;
let phdActiveKey = null;

function phdForSpecialism(sp, subKeys) {
  const matchKeys = subKeys || sp.keys;
  return PHD_STUDENTS.filter(s => (s.ancients || []).some(a => matchKeys.includes(a)));
}

function initPhd() {
  if (phdReady) return;
  phdReady = true;
  const toolbar = document.getElementById('phd-toolbar');
  SPECIALISMS.forEach(sp => {
    const count = phdForSpecialism(sp).length;
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.key = sp.key;
    btn.textContent = sp.label + (count ? ' (' + count + ')' : '');
    btn.style.opacity = count ? '1' : '0.45';
    btn.onclick = () => selectPhdSpecialism(sp, btn);
    toolbar.appendChild(btn);
  });
  renderPhdAll();
}

function renderPhdAll() {
  const sorted = sortBySurname([...PHD_STUDENTS]);
  if (!sorted.length) {
    document.getElementById('phd-result').innerHTML =
      '<p class="panel-empty">No PhD researcher profiles have been added yet. Use the submission form to add yours.</p>';
    return;
  }
  const chips = sorted.map(s => scholarChipHtml(s, PHD_STUDENTS.indexOf(s), false, 'phd')).join('');
  document.getElementById('phd-result').innerHTML =
    `<p class="pr-heading">All PhD Researchers <span style="font-size:0.8rem;font-weight:400;color:var(--ink-muted)">(${sorted.length})</span></p>
     <div class="scholar-grid">${chips}</div>`;
}

function selectPhdSpecialism(sp, btn) {
  document.querySelectorAll('#phd-toolbar .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  phdActiveKey = sp.key;
  buildPhdSubFilters(sp);
  renderPhdResults(sp, null);
}

function buildPhdSubFilters(sp) {
  const row = document.getElementById('phd-sub-filter-row');
  const validSubs = (sp.subs || []).filter(sub => phdForSpecialism(sp, sub.keys).length > 0);
  if (!validSubs.length) { row.style.display = 'none'; return; }
  row.style.display = 'flex';
  row.innerHTML = '<span class="sub-label">Refine by</span>';
  const allBtn = document.createElement('button');
  allBtn.className = 'sub-btn active';
  allBtn.textContent = 'All';
  allBtn.onclick = () => {
    document.querySelectorAll('#phd-sub-filter-row .sub-btn').forEach(b => b.classList.remove('active'));
    allBtn.classList.add('active');
    renderPhdResults(SPECIALISMS.find(s => s.key === phdActiveKey), null);
  };
  row.appendChild(allBtn);
  validSubs.forEach(sub => {
    const count = phdForSpecialism(sp, sub.keys).length;
    const btn = document.createElement('button');
    btn.className = 'sub-btn';
    btn.textContent = sub.label + ' (' + count + ')';
    btn.onclick = () => {
      document.querySelectorAll('#phd-sub-filter-row .sub-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPhdResults(SPECIALISMS.find(s => s.key === phdActiveKey), sub);
    };
    row.appendChild(btn);
  });
}

function renderPhdResults(sp, sub) {
  const scholars = sortBySurname(phdForSpecialism(sp, sub ? sub.keys : null));
  const subLabel = sub ? ` <span style="font-size:0.8rem;font-weight:400;color:var(--ink-muted)">· ${sub.label}</span>` : '';
  const chips = scholars.map(s => scholarChipHtml(s, PHD_STUDENTS.indexOf(s), false, 'phd')).join('');
  document.getElementById('phd-result').innerHTML = `
    <p class="pr-heading">${sp.label}${subLabel}
      <span style="font-size:0.8rem;font-weight:400;color:var(--ink-muted)">(${scholars.length})</span>
    </p>
    ${scholars.length
      ? `<div class="scholar-grid">${chips}</div>`
      : `<p style="color:var(--ink-faint);font-style:italic;font-family:'EB Garamond',serif;margin-top:0.5rem">No PhD researchers listed for this selection.</p>`}`;
}

function handlePhdSearch(query) {
  const clearBtn = document.getElementById('phd-search-clear');
  const resultsEl = document.getElementById('phd-search-results');
  const q = query.trim().toLowerCase();
  clearBtn.style.display = q ? 'block' : 'none';
  if (!q) { resultsEl.style.display = 'none'; return; }
  const matches = sortBySurname(PHD_STUDENTS.filter(s =>
    s.name.toLowerCase().includes(q) || s.name.toLowerCase().split(' ').some(p => p.startsWith(q))
  ));
  if (!matches.length) {
    resultsEl.innerHTML = '<div class="search-no-results">No PhD researchers found matching "<em>' + query.trim() + '</em>"</div>';
    resultsEl.style.display = 'block'; return;
  }
  const re = new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')', 'gi');
  resultsEl.innerHTML = matches.map(s => {
    const idx = PHD_STUDENTS.indexOf(s);
    return `<div class="search-result-item" data-phd-id="${idx}">
      ${avatarHtml(s, 'sm')}
      <div>
        <div class="search-result-name">${s.name.replace(re, '<strong>$1</strong>')}</div>
        <div class="search-result-sub">${s.position} · ${s.uni}</div>
      </div>
    </div>`;
  }).join('');
  resultsEl.style.display = 'block';
}

function clearPhdSearch() {
  const input = document.getElementById('phd-search');
  input.value = ''; input.focus(); handlePhdSearch('');
}

document.addEventListener('click', e => {
  const chip = e.target.closest('[data-phd-id]');
  if (!chip) return;
  const id = parseInt(chip.getAttribute('data-phd-id'), 10);
  const s = PHD_STUDENTS[id];
  if (s) openModal(s);
});

/* ══════════════════════════════════════
   VISITING SCHOLARS TAB
   ══════════════════════════════════════ */
let visitingMapReady = false;

function initVisiting() {
  if (visitingMapReady) return;
  visitingMapReady = true;

  if (!VISITING_SCHOLARS.length) return; /* empty state shown via HTML */

  const container = document.getElementById('mapV');
  container.style.height = '480px';
  container.style.borderRadius = '12px';
  container.style.overflow = 'hidden';

  const vmap = L.map('mapV', { zoomControl: true, scrollWheelZoom: false });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO', maxZoom: 18,
  }).addTo(vmap);

  setTimeout(() => vmap.invalidateSize(), 0);

  /* Group ALL visiting scholars by city (their visiting location), not home uni */
  const byCity = {};
  VISITING_SCHOLARS.forEach(s => {
    const city = s.city || '';
    const coord = UNI_COORDS['University of Cambridge'] && city === 'Cambridge'
      ? UNI_COORDS['University of Cambridge']
      : UNI_COORDS['University of Oxford'] && city === 'Oxford'
      ? UNI_COORDS['University of Oxford']
      : UNI_COORDS[city];
    if (!coord) return;
    const key = city;
    if (!byCity[key]) byCity[key] = { coord, city, scholars: [] };
    byCity[key].scholars.push(s);
  });

  /* Pin label = visiting university name */
  const cityToUni = { Cambridge: 'University of Cambridge', Oxford: 'University of Oxford' };

  const bounds = [];
  Object.values(byCity).forEach(({ coord, city, scholars }) => {
    if (!scholars.length) return;
    bounds.push([coord.lat, coord.lng]);
    const total    = scholars.length;
    const pinLabel = cityToUni[city] || city;
    const pinW = 36, pinH = 44;
    const icon = L.divIcon({
      className: '',
      html: `<div style="display:flex;flex-direction:column;align-items:center;cursor:pointer;width:${pinW}px">
        <svg width="${pinW}" height="${pinH}" viewBox="0 0 36 44" xmlns="http://www.w3.org/2000/svg">
          <path d="M18,42 Q4,28 4,16 A14,14 0 1,1 32,16 Q32,28 18,42Z" fill="#1a6b52" stroke="#fff" stroke-width="1.5"/>
          <text x="18" y="19" text-anchor="middle" dominant-baseline="central" font-size="${total > 9 ? 9 : 11}" font-weight="600" fill="white" font-family="'DM Sans',sans-serif">${total}</text>
        </svg>
        <div style="font-size:10px;font-weight:500;color:#1a6b52;font-family:'DM Sans',sans-serif;background:rgba(255,255,255,0.92);border:1px solid rgba(26,107,82,0.25);border-radius:10px;padding:1px 7px;margin-top:-2px;white-space:nowrap;box-shadow:0 1px 3px rgba(0,0,0,0.1)">${pinLabel}</div>
      </div>`,
      iconSize: [pinW, pinH + 18], iconAnchor: [pinW / 2, pinH],
    });
    L.marker([coord.lat, coord.lng], { icon }).addTo(vmap).on('click', () => {
      showVisitingPanel(pinLabel, scholars);
    });
  });

  if (bounds.length) vmap.fitBounds(bounds, { padding: [28, 28], maxZoom: 6 });
}

function showVisitingPanel(pinLabel, scholars) {
  const sorted = sortBySurname(scholars);
  const rows = sorted.map(s => {
    const idx = VISITING_SCHOLARS.indexOf(s);
    return `<div class="map-r-item" data-visiting-id="${idx}" style="cursor:pointer" title="Click to expand profile">
      <div class="map-r-top">${avatarHtml(s,'sm')}<div class="map-r-text">
        <p class="rc-name" style="font-size:1rem">${s.name}</p>
        <p class="rc-pos" style="font-size:0.78rem;margin-top:1px">${(s.position||'').split('·')[0].trim()}</p>
      </div></div>
      ${affiliationHtml(s)}
      ${linksHtml(s,'0.74rem')}
    </div>`;
  }).join('');
  document.getElementById('visiting-panel').innerHTML = `
    <p class="rc-name" style="margin-bottom:2px">${pinLabel}</p>
    <p class="rc-dept" style="margin-bottom:14px">${scholars.length} visiting scholar${scholars.length > 1 ? 's' : ''}</p>
    ${rows}`;
}

document.addEventListener('click', e => {
  const chip = e.target.closest('[data-visiting-id]');
  if (!chip) return;
  const s = VISITING_SCHOLARS[parseInt(chip.getAttribute('data-visiting-id'), 10)];
  if (s) openModal(s);
});
