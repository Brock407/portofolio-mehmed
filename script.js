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
      'stack.hint': 'Klik kartu untuk membawanya ke depan.',
      'stack.l1.name': 'Database',
      'stack.l1.text': 'PostgreSQL dan SQL untuk query relasional lintas tabel.',
      'stack.l2.name': 'Transformasi',
      'stack.l2.text': 'Power Query dan Pandas untuk pembersihan dan transformasi data.',
      'stack.l3.name': 'Analisis',
      'stack.l3.text': 'Power Pivot dan window function untuk agregasi dan perbandingan periode.',
      'stack.l4.name': 'Insight',
      'stack.l4.text': 'Dashboard dan ringkasan temuan untuk pengambilan keputusan.',
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
      'projects.title': 'Proyek',
      'projects.open': 'Lihat proyek',
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
      'stack.hint': 'Click a card to bring it to the front.',
      'stack.l1.name': 'Database',
      'stack.l1.text': 'PostgreSQL and SQL for relational queries across tables.',
      'stack.l2.name': 'Transform',
      'stack.l2.text': 'Power Query and Pandas for data cleaning and transformation.',
      'stack.l3.name': 'Analysis',
      'stack.l3.text': 'Power Pivot and window functions for aggregation and period comparison.',
      'stack.l4.name': 'Insight',
      'stack.l4.text': 'Dashboards and summarized findings for decision-making.',
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
      'projects.title': 'Projects',
      'projects.open': 'View project',
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
     DATA PROYEK — kosong untuk sementara (fokus web dulu).
     Isi array ini saat proyek siap; bagian Proyek otomatis tampil,
     dan kategori filter hanya muncul jika ada proyek di dalamnya.
     Contoh bentuk data:
     {
       id: 'sql-retail',
       category: 'data-analysis',          // data-analysis | automation | pipeline
       title: { id: 'Analisis Penjualan', en: 'Sales Analysis' },
       desc:  { id: '...', en: '...' },
       url: 'https://github.com/...'
     }
     ========================================================== */
  const projects = [];

  const CATEGORY_ORDER = ['data-analysis', 'automation', 'pipeline'];

  const state = {
    lang: 'id',
    filter: 'all',
    stackOrder: [0, 1, 2, 3]   // urutan tumpukan: indeks pertama = paling depan
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function t(key) {
    const dict = translations[state.lang] || translations.id;
    return dict[key] !== undefined ? dict[key] : (translations.id[key] || key);
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

    $$('[data-i18n]').forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    $$('[data-i18n-aria]').forEach(el => {
      el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });

    document.title = t('meta.title');
    const metaDesc = $('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.description'));

    const langBtn = $('#lang-toggle');
    langBtn.textContent = state.lang === 'id' ? 'EN' : 'ID';
    langBtn.setAttribute('aria-label', t('ui.langLabel'));

    updateThemeButton();
    renderProjectsSection();

    try { localStorage.setItem('lang', state.lang); } catch (e) { /* abaikan */ }
  }

  /* ---------- STACK LAYER: click-to-front ----------
     Setiap kartu menerima --depth = posisinya dalam stackOrder.
     CSS menghitung offset, skala, dan z-index dari --depth.
     ----------------------------------------------------- */
  function renderStack() {
    $$('.stack-card').forEach(card => {
      const index = Number(card.dataset.index);
      const depth = state.stackOrder.indexOf(index);
      const isFront = depth === 0;

      card.style.setProperty('--depth', depth);
      card.classList.toggle('is-front', isFront);
      if (isFront) {
        card.setAttribute('aria-current', 'true');
      } else {
        card.removeAttribute('aria-current');
      }
    });
  }

  function bringToFront(index) {
    const pos = state.stackOrder.indexOf(index);
    if (pos === 0) {
      // Klik kartu depan: kirim ke belakang, kartu berikutnya maju
      state.stackOrder.push(state.stackOrder.shift());
    } else {
      // Klik kartu belakang: naikkan ke depan, urutan lain tetap
      state.stackOrder.splice(pos, 1);
      state.stackOrder.unshift(index);
    }
    renderStack();
  }

  function initStack() {
    $$('.stack-card').forEach(card => {
      card.addEventListener('click', () => {
        bringToFront(Number(card.dataset.index));
      });
    });
    renderStack();
  }

  /* ---------- PROYEK & FILTER ---------- */
  function renderProjectsSection() {
    const section = $('#projects');
    const filters = $('#project-filters');
    const grid = $('#project-grid');

    if (!projects.length) {
      section.hidden = true;
      filters.innerHTML = '';
      grid.innerHTML = '';
      return;
    }
    section.hidden = false;

    const presentCats = CATEGORY_ORDER.filter(c => projects.some(p => p.category === c));
    if (state.filter !== 'all' && !presentCats.includes(state.filter)) {
      state.filter = 'all';
    }

    filters.innerHTML = '';
    ['all', ...presentCats].forEach(cat => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chip';
      btn.textContent = t('filter.' + cat);
      btn.setAttribute('aria-pressed', String(state.filter === cat));
      btn.addEventListener('click', () => {
        state.filter = cat;
        renderProjectsSection();
      });
      filters.appendChild(btn);
    });

    grid.innerHTML = '';
    projects
      .filter(p => state.filter === 'all' || p.category === state.filter)
      .forEach(p => {
        const card = document.createElement('article');
        card.className = 'card';

        const h = document.createElement('h3');
        h.textContent = p.title[state.lang] || p.title.id;

        const d = document.createElement('p');
        d.className = 'muted';
        d.textContent = p.desc[state.lang] || p.desc.id;

        card.append(h, d);

        if (p.url) {
          const a = document.createElement('a');
          a.href = p.url;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.textContent = t('projects.open');
          card.appendChild(a);
        }
        grid.appendChild(card);
      });
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

    initStack();
    applyLang(savedLang);
  }

  document.addEventListener('DOMContentLoaded', init);
})();
