(function () {
  'use strict';

  /* ==========================================================
     KONTEN MULTIBAHASA — satu sumber untuk semua teks dinamis.
     Kunci harus sama dengan atribut data-i18n / data-i18n-aria di HTML.
     ========================================================== */
  const translations = {
    id: {
      'meta.title': 'Mehmed Brockly Alexander — Data Analyst',
      'meta.description': 'Portofolio Brockly: otomasi data dari database sampai insight.',
      'nav.about': 'Tentang',
      'nav.skills': 'Keahlian',
      'nav.projects': 'Proyek',
      'nav.contact': 'Kontak',
      'ui.themeToLight': 'Beralih ke mode terang',
      'ui.themeToDark': 'Beralih ke mode gelap',
      'ui.langLabel': 'Ganti bahasa ke English',
      'hero.eyebrow': 'Data Analyst / Data Specialist',
      'hero.name': 'Mehmed Brockly Alexander',
      'hero.tagline': 'Otomasi data, dari database sampai insight.',
      'hero.ctaSkills': 'Lihat keahlian',
      'hero.ctaContact': 'Hubungi saya',
      'stack.label': 'Lapisan data',
      'layer.database': 'Database',
      'layer.transform': 'Transformasi',
      'layer.analysis': 'Analisis',
      'layer.insight': 'Insight',
      'layer.api': 'API',
      'layer.interface': 'Interface',
      'about.title': 'Tentang',
      'about.text': 'Saya Brockly, Data Analyst yang fokus pada otomasi alur data: dari query database, transformasi di Excel dan Python, sampai ringkasan temuan. Pengalaman operasional 4 tahun di WWRC mencakup otomasi data Excel.',
      'skills.title': 'Keahlian',
      'skills.s1.title': 'SQL & Database Analysis',
      'skills.s1.text': 'Query PostgreSQL dengan JOIN kompleks, CTE, dan window function (ROW_NUMBER, LAG).',
      'skills.s2.title': 'Excel Data Automation',
      'skills.s2.text': 'Otomasi data dengan Power Query dan Power Pivot.',
      'skills.s3.title': 'Python Data Scripting',
      'skills.s3.text': 'Pandas dan NumPy untuk pengolahan data, scraping otomatis, dan notifikasi lewat Discord Webhook.',
      'skills.s4.title': 'Data Pipeline & Research',
      'skills.s4.text': 'Pipeline data on-chain dan riset protokol berbasis TVL.',
      'skills.tools.title': 'Tools',
      'skills.tools.text': 'VS Code Cline · OpenRouter · Cherry Studio',
      'projects.label': 'Proyek pilihan',
      'projects.title': 'Proyek',
      'projects.filterLabel': 'Filter kategori',
      'projects.navLabel': 'Navigasi proyek',
      'projects.goto': 'Buka proyek',
      'filter.all': 'Semua',
      'filter.data-analysis': 'Analisis Data',
      'filter.automation': 'Otomasi',
      'filter.pipeline': 'Pipeline & Riset',
      'contact.title': 'Kontak',
      'contact.text': 'Terbuka untuk peran Data Analyst dan Data Specialist.',
      'contact.email': 'Email',
      'footer.text': '© 2026 Mehmed Brockly Alexander'
    },
    en: {
      'meta.title': 'Mehmed Brockly Alexander — Data Analyst',
      'meta.description': 'Brockly portfolio: data automation, from database to insight.',
      'nav.about': 'About',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'ui.themeToLight': 'Switch to light mode',
      'ui.themeToDark': 'Switch to dark mode',
      'ui.langLabel': 'Switch language to Bahasa Indonesia',
      'hero.eyebrow': 'Data Analyst / Data Specialist',
      'hero.name': 'Mehmed Brockly Alexander',
      'hero.tagline': 'Data automation, from database to insight.',
      'hero.ctaSkills': 'View skills',
      'hero.ctaContact': 'Get in touch',
      'stack.label': 'Data layers',
      'layer.database': 'Database',
      'layer.transform': 'Transform',
      'layer.analysis': 'Analysis',
      'layer.insight': 'Insight',
      'layer.api': 'API',
      'layer.interface': 'Interface',
      'about.title': 'About',
      'about.text': "I'm Brockly, a Data Analyst focused on automating data workflows: from database queries and Excel and Python transformations to summarized findings. Four years of operational experience at WWRC covers Excel data automation.",
      'skills.title': 'Skills',
      'skills.s1.title': 'SQL & Database Analysis',
      'skills.s1.text': 'PostgreSQL queries with complex JOINs, CTEs, and window functions (ROW_NUMBER, LAG).',
      'skills.s2.title': 'Excel Data Automation',
      'skills.s2.text': 'Data automation with Power Query and Power Pivot.',
      'skills.s3.title': 'Python Data Scripting',
      'skills.s3.text': 'Pandas and NumPy for data processing, automated scraping, and notifications via Discord Webhook.',
      'skills.s4.title': 'Data Pipeline & Research',
      'skills.s4.text': 'On-chain data pipelines and TVL-based protocol research.',
      'skills.tools.title': 'Tools',
      'skills.tools.text': 'VS Code Cline · OpenRouter · Cherry Studio',
      'projects.label': 'Selected projects',
      'projects.title': 'Projects',
      'projects.filterLabel': 'Category filter',
      'projects.navLabel': 'Project navigation',
      'projects.goto': 'Go to project',
      'filter.all': 'All',
      'filter.data-analysis': 'Data Analysis',
      'filter.automation': 'Automation',
      'filter.pipeline': 'Pipeline & Research',
      'contact.title': 'Contact',
      'contact.text': 'Open to Data Analyst and Data Specialist roles.',
      'contact.email': 'Email',
      'footer.text': '© 2026 Mehmed Brockly Alexander'
    }
  };

  /* ==========================================================
     DATA PROYEK — 3 proyek nyata.
     layers: urutan dari BAWAH ke ATAS (sesuai alur pipeline).
     Lapisan terakhir (paling atas) otomatis berwarna aksen.
     sub: string (istilah teknis) atau { id, en } bila perlu diterjemahkan.
     ========================================================== */
  const projects = [
    {
      id: 'crypto-terminal',
      category: 'pipeline',
      title: {
        id: 'Automated Crypto Data Terminal & Alert Pipeline',
        en: 'Automated Crypto Data Terminal & Alert Pipeline'
      },
      desc: {
        id: 'Terminal data kripto yang mengambil data dari CoinGecko dan DeFiLlama, mengolahnya dengan Python Pandas dan Power Query, lalu mengirim alert ke Discord Webhook.',
        en: 'A crypto data terminal that pulls data from CoinGecko and DeFiLlama, processes it with Python Pandas and Power Query, and sends alerts to a Discord Webhook.'
      },
      layers: [
        { key: 'layer.api', sub: 'CoinGecko & DeFiLlama' },
        { key: 'layer.transform', sub: 'Python Pandas & Power Query' },
        { key: 'layer.insight', sub: 'Discord Webhook' }
      ]
    },
    {
      id: 'financial-tracker',
      category: 'automation',
      title: {
        id: 'Operational Financial Tracker',
        en: 'Operational Financial Tracker'
      },
      desc: {
        id: 'Pelacak keuangan operasional: data penjualan mentah dibersihkan dengan Power Query, lalu ditampilkan di dashboard Excel dengan Power Pivot.',
        en: 'An operational financial tracker: raw sales data is cleaned with Power Query, then shown in an Excel dashboard built with Power Pivot.'
      },
      layers: [
        { key: 'layer.database', sub: { id: 'Data Penjualan Mentah', en: 'Raw Sales Data' } },
        { key: 'layer.transform', sub: { id: 'Pembersihan Power Query', en: 'Power Query Cleaning' } },
        { key: 'layer.interface', sub: { id: 'Dashboard Excel Power Pivot', en: 'Excel Power Pivot Dashboard' } }
      ]
    },
    {
      id: 'sql-pipeline',
      category: 'data-analysis',
      title: {
        id: 'SQL Transaction Data Pipeline',
        en: 'SQL Transaction Data Pipeline'
      },
      desc: {
        id: 'Pipeline data transaksi di PostgreSQL. Transformasi memakai CTE dan JOIN kompleks, lalu metrik dihitung dengan window functions.',
        en: 'A transaction data pipeline in PostgreSQL. Transformations use CTEs and complex JOINs, and metrics are calculated with window functions.'
      },
      layers: [
        { key: 'layer.database', sub: 'PostgreSQL · DBeaver' },
        { key: 'layer.transform', sub: 'Complex CTEs & JOINs' },
        { key: 'layer.interface', sub: 'Window Functions & Metrics' }
      ]
    }
  ];

  /* Lapisan hero: bawah ke atas. */
  const HERO_LAYERS = [
    { key: 'layer.database', sub: 'PostgreSQL · SQL' },
    { key: 'layer.transform', sub: 'Power Query · Pandas' },
    { key: 'layer.analysis', sub: 'Power Pivot · Window Functions' },
    { key: 'layer.insight', sub: 'Dashboard' }
  ];

  const CATEGORY_ORDER = ['data-analysis', 'automation', 'pipeline'];

  const state = {
    lang: 'id',
    filter: 'all',
    visible: [],   // proyek yang tampil setelah filter
    active: 0      // indeks slide aktif
  };

  let isStatic = false;
  const reduceMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
  const staticMQ = window.matchMedia('(max-width: 860px), (prefers-reduced-motion: reduce)');

  /* ---------- UTILITAS ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const pad = n => String(n).padStart(2, '0');

  function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function t(key) {
    const dict = translations[state.lang] || translations.id;
    return dict[key] !== undefined ? dict[key] : (translations.id[key] || key);
  }

  function pick(value) {
    if (typeof value === 'string') return value;
    return value[state.lang] || value.id;
  }

  /* ---------- TEMA ---------- */
  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) { /* abaikan */ }
    updateThemeButton();
  }

  function updateThemeButton() {
    const btn = $('#theme-toggle');
    const isDark = currentTheme() === 'dark';
    btn.textContent = isDark ? '☀' : '☾';
    btn.setAttribute('aria-label', t(isDark ? 'ui.themeToLight' : 'ui.themeToDark'));
  }

  /* ---------- BAHASA ---------- */
  function applyLang(lang) {
    state.lang = translations[lang] ? lang : 'id';
    document.documentElement.lang = state.lang;

    $$('[data-i18n]').forEach(node => {
      node.textContent = t(node.dataset.i18n);
    });
    $$('[data-i18n-aria]').forEach(node => {
      node.setAttribute('aria-label', t(node.dataset.i18nAria));
    });

    document.title = t('meta.title');
    const metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));

    const langBtn = $('#lang-toggle');
    langBtn.textContent = state.lang === 'id' ? 'EN' : 'ID';
    langBtn.setAttribute('aria-label', t('ui.langLabel'));

    updateThemeButton();
    renderProjects();

    try { localStorage.setItem('lang', state.lang); } catch (e) { /* abaikan */ }
  }

  /* ---------- ISOMETRIC STACK ----------
     Membangun lapisan dari daftar (bawah ke atas).
     --i menentukan posisi Z lapisan; CSS mengurus sisanya. */
  function buildIso(layers, enter) {
    const iso = el('div', 'iso');
    layers.forEach((layer, i) => {
      const isTop = i === layers.length - 1;
      const slab = el('div', 'slab' + (isTop ? ' is-top' : '') + (enter ? ' is-enter' : ''));
      slab.style.setProperty('--i', i);

      const name = el('span', 'slab-name', t(layer.key));
      name.dataset.i18n = layer.key;

      slab.append(name, el('span', 'slab-sub', pick(layer.sub)));
      iso.appendChild(slab);
    });
    return iso;
  }

  function renderHero() {
    const host = $('#hero-stack');
    const enter = !reduceMQ.matches;
    host.innerHTML = '';
    host.appendChild(buildIso(HERO_LAYERS, enter));

    if (enter) {
      // Dua frame agar transisi dari keadaan awal berjalan
      requestAnimationFrame(() => requestAnimationFrame(() => {
        $$('#hero-stack .slab.is-enter').forEach(s => s.classList.remove('is-enter'));
      }));
    }
  }

  /* ---------- PROYEK, FILTER, DAN SLIDE ---------- */
  function renderProjects() {
    const section = $('#projects');
    const filtersEl = $('#project-filters');
    const slidesEl = $('#stack-slides');
    const dotsEl = $('#stack-dots');

    if (!projects.length) {
      section.hidden = true;
      return;
    }
    section.hidden = false;

    const presentCats = CATEGORY_ORDER.filter(c => projects.some(p => p.category === c));
    if (state.filter !== 'all' && !presentCats.includes(state.filter)) {
      state.filter = 'all';
    }

    filtersEl.innerHTML = '';
    ['all', ...presentCats].forEach(cat => {
      const btn = el('button', 'chip', t('filter.' + cat));
      btn.type = 'button';
      btn.setAttribute('aria-pressed', String(state.filter === cat));
      btn.addEventListener('click', () => {
        state.filter = cat;
        state.active = 0;
        renderProjects();
        $('#stack-scroll').scrollIntoView({
          behavior: reduceMQ.matches ? 'auto' : 'smooth',
          block: 'start'
        });
      });
      filtersEl.appendChild(btn);
    });

    state.visible = projects.filter(p => state.filter === 'all' || p.category === state.filter);
    const n = state.visible.length;
    state.active = clamp(state.active, 0, Math.max(0, n - 1));

    slidesEl.innerHTML = '';
    dotsEl.innerHTML = '';

    state.visible.forEach((p, i) => {
      const slide = el('article', 'stack-slide');
      slide.id = 'project-' + i;

      const copy = el('div', 'slide-copy');
      copy.append(
        el('p', 'slide-index', `${pad(i + 1)} / ${pad(n)} · ${t('filter.' + p.category)}`),
        el('h3', 'slide-title', pick(p.title)),
        el('p', 'slide-desc', pick(p.desc))
      );

      const visual = el('div', 'slide-visual');
      const wrap = el('div', 'iso-wrap');
      wrap.appendChild(buildIso(p.layers, false));
      visual.appendChild(wrap);

      slide.append(copy, visual);
      slidesEl.appendChild(slide);

      const dot = el('button', 'stack-dot', pad(i + 1));
      dot.type = 'button';
      dot.setAttribute('aria-label', `${t('projects.goto')}: ${pick(p.title)}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsEl.appendChild(dot);
    });

    $('#stack-scroll').style.setProperty('--count', n);
    setActive(state.active);
    if (!isStatic) updateStack();
  }

  function setActive(index) {
    const n = state.visible.length;
    if (!n) return;
    const idx = clamp(index, 0, n - 1);
    state.active = idx;

    $$('#stack-slides .stack-slide').forEach((slide, k) => {
      slide.classList.toggle('is-active', k === idx);
    });
    $$('#stack-dots .stack-dot').forEach((dot, k) => {
      if (k === idx) dot.setAttribute('aria-current', 'true');
      else dot.removeAttribute('aria-current');
    });
  }

  /* Tinggi area sticky = viewport dikurangi header */
  function stickyHeight() {
    return window.innerHeight - $('.site').offsetHeight;
  }

  function sectionTop() {
    return $('#stack-scroll').getBoundingClientRect().top + window.scrollY;
  }

  /* Progres scroll (0–1) dipetakan ke indeks slide.
     Rentang scroll efektif = (jumlah proyek − 1) × tinggi sticky. */
  function updateStack() {
    if (isStatic || !state.visible.length) return;

    const count = state.visible.length;
    const range = (count - 1) * stickyHeight();
    const progress = range > 0
      ? clamp((window.scrollY - sectionTop()) / range, 0, 1)
      : 0;

    setActive(Math.round(progress * (count - 1)));
  }

  function goToSlide(index) {
    const behavior = reduceMQ.matches ? 'auto' : 'smooth';

    if (isStatic) {
      const target = document.getElementById('project-' + index);
      if (target) target.scrollIntoView({ behavior, block: 'start' });
      return;
    }

    window.scrollTo({
      top: sectionTop() + index * stickyHeight(),
      behavior
    });
  }

  function applyMode() {
    isStatic = staticMQ.matches;
    $('#projects').classList.toggle('is-static', isStatic);
    if (!isStatic) updateStack();
  }

  /* ---------- INISIALISASI ---------- */
  function init() {
    let savedLang = 'id';
    try { savedLang = localStorage.getItem('lang') || 'id'; } catch (e) { /* abaikan */ }

    $('#theme-toggle').addEventListener('click', () => {
      setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
    });
    $('#lang-toggle').addEventListener('click', () => {
      applyLang(state.lang === 'id' ? 'en' : 'id');
    });

    // Scroll: satu pembaruan per frame
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateStack();
        ticking = false;
      });
    }, { passive: true });
    window.addEventListener('resize', updateStack);

    if (staticMQ.addEventListener) {
      staticMQ.addEventListener('change', applyMode);
    } else {
      staticMQ.addListener(applyMode);
    }

    applyMode();
    state.lang = translations[savedLang] ? savedLang : 'id';
    renderHero();
    applyLang(savedLang);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
