const sampleArticles = [
  {
    id: 1,
    year: 2025,
    type: 'مقاله پژوهشی',
    title: 'کاربرد مدل‌های زبانی بزرگ در محیط‌های یادگیری شخصی‌سازی‌شده: مرور نظام‌مند',
    authors: 'مریم احمدی، علی رضایی، سارا محمدی',
    source: 'پژوهش‌های فناوری آموزشی',
    abstract: 'این پژوهش ظرفیت مدل‌های زبانی بزرگ را برای پشتیبانی از مسیرهای یادگیری شخصی بررسی می‌کند و در کنار فرصت‌ها، به چالش‌های ارزیابی، حریم خصوصی و سوگیری نیز می‌پردازد.',
    terms: ['هوش مصنوعی', 'آموزش', 'یادگیری عمیق', 'مدل‌های زبانی'],
  },
  {
    id: 2,
    year: 2024,
    type: 'مرور ادبیات',
    title: 'هوش مصنوعی مولد در آموزش عالی: فرصت‌ها، محدودیت‌ها و ملاحظات اخلاقی',
    authors: 'نگار کریمی، رضا موسوی',
    source: 'فصلنامه مطالعات آموزش عالی',
    abstract: 'مروری بر کاربردهای هوش مصنوعی مولد در آموزش دانشگاهی با تمرکز بر طراحی فعالیت‌های آموزشی، ارزیابی یادگیری، شفافیت و مسئولیت‌پذیری.',
    terms: ['هوش مصنوعی', 'آموزش', 'مدل‌های زبانی'],
  },
  {
    id: 3,
    year: 2023,
    type: 'مقاله پژوهشی',
    title: 'ارزیابی روش‌های یادگیری عمیق برای تحلیل متون علمی فارسی',
    authors: 'حسین نادری، فاطمه حیدری، امیر صالحی',
    source: 'پردازش زبان و داده',
    abstract: 'در این مقاله چند روش یادگیری عمیق برای طبقه‌بندی و استخراج اطلاعات از متون علمی فارسی بررسی و عملکرد آن‌ها بر اساس معیارهای ارزیابی متداول مقایسه شده است.',
    terms: ['یادگیری عمیق', 'پردازش زبان طبیعی', 'متون فارسی'],
  },
  {
    id: 4,
    year: 2022,
    type: 'مقاله پژوهشی',
    title: 'پیش‌بینی روندهای پژوهشی با تحلیل شبکه استنادی مقالات علمی',
    authors: 'الهام جعفری، محمد کاظمی',
    source: 'مجله علم‌سنجی و مدیریت دانش',
    abstract: 'این مطالعه از تحلیل شبکه استنادی برای شناسایی خوشه‌های موضوعی و بررسی تغییرات زمانی در روندهای انتشار مقالات استفاده می‌کند.',
    terms: ['علم‌سنجی', 'مقالات علمی', 'تحلیل داده'],
  },
  {
    id: 5,
    year: 2021,
    type: 'مرور ادبیات',
    title: 'یادگیری ماشین در پشتیبانی از تصمیم‌گیری بالینی: یک مرور کاربردی',
    authors: 'سحر مرادی، بهنام رستگار، نازنین شریفی',
    source: 'پژوهش‌های انفورماتیک پزشکی',
    abstract: 'این مرور، کاربردهای یادگیری ماشین در تحلیل داده‌های بالینی را بررسی می‌کند و بر کیفیت داده، تفسیرپذیری مدل‌ها و ارزیابی بالینی تأکید دارد.',
    terms: ['هوش مصنوعی', 'تشخیص پزشکی', 'یادگیری ماشین'],
  },
  {
    id: 6,
    year: 2020,
    type: 'مقاله پژوهشی',
    title: 'روش‌های بازیابی اطلاعات برای جست‌وجوی معنایی در اسناد دانشگاهی',
    authors: 'آرمان یوسفی، لیلا عباسی',
    source: 'مجله مهندسی کامپیوتر',
    abstract: 'این پژوهش راهکارهای بازیابی اطلاعات و رتبه‌بندی معنایی را برای بهبود جست‌وجو در مجموعه اسناد دانشگاهی مقایسه می‌کند.',
    terms: ['جست‌وجوی علمی', 'پردازش زبان طبیعی', 'بازیابی اطلاعات'],
  },
  {
    id: 7,
    year: 2019,
    type: 'مقاله پژوهشی',
    title: 'تحلیل اثرات تغییرات اقلیمی بر پیامدهای سلامت عمومی',
    authors: 'پریسا زمانی، کاوه اکبری',
    source: 'مجله سلامت و محیط زیست',
    abstract: 'رابطه میان شاخص‌های اقلیمی و برخی پیامدهای سلامت عمومی در این مطالعه بررسی شده و بر اهمیت تحلیل‌های بلندمدت و داده‌های قابل اتکا تأکید می‌شود.',
    terms: ['تغییرات اقلیمی', 'سلامت', 'سلامت عمومی'],
  },
];

const elements = {
  homePage: document.querySelector('#homePage'),
  resultsPage: document.querySelector('#resultsPage'),
  homeForm: document.querySelector('#homeSearchForm'),
  resultsForm: document.querySelector('#resultsSearchForm'),
  homeQuery: document.querySelector('#homeQuery'),
  resultsQuery: document.querySelector('#resultsQuery'),
  queryHeading: document.querySelector('#queryHeading'),
  articleList: document.querySelector('#articleList'),
  resultCount: document.querySelector('#resultCount'),
  emptyState: document.querySelector('#emptyState'),
  yearFrom: document.querySelector('#yearFrom'),
  yearTo: document.querySelector('#yearTo'),
  sortBy: document.querySelector('#sortBy'),
  activeFilters: document.querySelector('#activeFilters'),
  toast: document.querySelector('#toast'),
};

const state = { query: '', toastTimer: null };
const numberFormat = new Intl.NumberFormat('fa-IR');

function normalizeText(value) {
  return value
    .normalize('NFKC')
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
    .replace(/[يى]/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/\u200c/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 240);
}

function normalizeSearchText(value) {
  return normalizeText(value).toLocaleLowerCase('fa');
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add('is-visible');
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    elements.toast.classList.remove('is-visible');
  }, 2600);
}

function setPage(page) {
  const showResults = page === 'results';
  elements.homePage.hidden = showResults;
  elements.homePage.classList.toggle('is-active', !showResults);
  elements.resultsPage.hidden = !showResults;
  elements.resultsPage.classList.toggle('is-active', showResults);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startSearch(value) {
  const query = normalizeText(value);
  if (!query) {
    showToast('برای شروع، موضوع یا عنوانی وارد کن.');
    (elements.resultsPage.hidden ? elements.homeQuery : elements.resultsQuery).focus();
    return;
  }

  state.query = query;
  elements.queryHeading.textContent = query;
  elements.resultsQuery.value = query;
  elements.yearFrom.value = '';
  elements.yearTo.value = '';
  elements.sortBy.value = 'relevance';
  setPage('results');
  renderArticles();
}

function getYearRange() {
  const from = elements.yearFrom.value === '' ? null : Number(elements.yearFrom.value);
  const to = elements.yearTo.value === '' ? null : Number(elements.yearTo.value);
  const isValidYear = (year) => year === null || (Number.isInteger(year) && year >= 1900 && year <= 2099);

  elements.yearFrom.removeAttribute('aria-invalid');
  elements.yearTo.removeAttribute('aria-invalid');

  if (!isValidYear(from) || !isValidYear(to)) {
    if (!isValidYear(from)) elements.yearFrom.setAttribute('aria-invalid', 'true');
    if (!isValidYear(to)) elements.yearTo.setAttribute('aria-invalid', 'true');
    showToast('سال باید عددی بین ۱۹۰۰ تا ۲۰۹۹ باشد.');
    (!isValidYear(from) ? elements.yearFrom : elements.yearTo).focus();
    return null;
  }
  if (from !== null && to !== null && from > to) {
    elements.yearFrom.setAttribute('aria-invalid', 'true');
    elements.yearTo.setAttribute('aria-invalid', 'true');
    showToast('سال شروع نمی‌تواند از سال پایان بزرگ‌تر باشد.');
    elements.yearFrom.focus();
    return null;
  }
  return { from, to };
}

function getSearchableText(article) {
  return normalizeSearchText(`${article.title} ${article.authors} ${article.abstract} ${article.terms.join(' ')}`);
}

function getRelevanceScore(article, queryWords) {
  const title = normalizeSearchText(article.title);
  const terms = normalizeSearchText(article.terms.join(' '));
  const abstract = normalizeSearchText(article.abstract);
  const authors = normalizeSearchText(article.authors);

  return queryWords.reduce((score, word) => {
    if (title.includes(word)) return score + 5;
    if (terms.includes(word)) return score + 3;
    if (abstract.includes(word)) return score + 2;
    if (authors.includes(word)) return score + 1;
    return score;
  }, 0);
}

function getFilteredArticles(range) {
  const ignoredWords = new Set(['برای', 'های', 'در', 'از', 'با', 'به', 'یک', 'و', 'بر', 'the', 'and', 'for', 'with']);
  const queryWords = normalizeSearchText(state.query)
    .split(/\s+/)
    .filter((word) => word.length > 1 && !ignoredWords.has(word));

  let articles = sampleArticles
    .map((article) => ({ ...article, relevance: getRelevanceScore(article, queryWords) }))
    .filter((article) => {
      const matchesQuery = queryWords.length === 0 || article.relevance > 0;
      const matchesFrom = range.from === null || article.year >= range.from;
      const matchesTo = range.to === null || article.year <= range.to;
      return matchesQuery && matchesFrom && matchesTo;
    });

  if (elements.sortBy.value === 'newest') articles.sort((a, b) => b.year - a.year);
  else if (elements.sortBy.value === 'oldest') articles.sort((a, b) => a.year - b.year);
  else articles.sort((a, b) => b.relevance - a.relevance || b.year - a.year);

  return articles;
}

function createArticleCard(article) {
  const card = document.createElement('article');
  card.className = 'article-card';

  const topline = document.createElement('div');
  topline.className = 'article-topline';
  [
    ['article-year', String(article.year)],
    ['article-type', article.type],
    ['', article.source],
  ].forEach(([className, value]) => {
    const item = document.createElement('span');
    if (className) item.className = className;
    item.textContent = value;
    topline.append(item);
  });

  const title = document.createElement('h2');
  const titleButton = document.createElement('button');
  titleButton.type = 'button';
  titleButton.textContent = article.title;
  titleButton.addEventListener('click', () => showToast('جزئیات مقاله در نسخه‌های بعدی اضافه می‌شود.'));
  title.append(titleButton);

  const authors = document.createElement('p');
  authors.className = 'authors';
  authors.textContent = article.authors;

  const abstract = document.createElement('p');
  abstract.className = 'abstract';
  abstract.textContent = article.abstract;

  const actions = document.createElement('div');
  actions.className = 'article-actions';

  const detailsButton = document.createElement('button');
  detailsButton.type = 'button';
  detailsButton.textContent = 'مشاهده جزئیات';
  detailsButton.addEventListener('click', () => showToast('صفحه جزئیات مقاله هنوز پیاده‌سازی نشده است.'));

  const copyButton = document.createElement('button');
  copyButton.type = 'button';
  copyButton.textContent = 'کپی عنوان';
  copyButton.addEventListener('click', () => copyTitle(article.title));

  const sourceLabel = document.createElement('span');
  sourceLabel.className = 'article-source';
  sourceLabel.textContent = 'منبع نمونه';
  actions.append(detailsButton, copyButton, sourceLabel);
  card.append(topline, title, authors, abstract, actions);
  return card;
}

async function copyTitle(title) {
  try {
    await navigator.clipboard.writeText(title);
    showToast('عنوان مقاله کپی شد.');
  } catch {
    showToast('امکان کپی خودکار وجود ندارد؛ عنوان را دستی انتخاب کن.');
  }
}

function renderActiveFilters(range) {
  elements.activeFilters.replaceChildren();
  if (range.from === null && range.to === null) return;

  const chip = document.createElement('span');
  chip.className = 'filter-chip';
  if (range.from !== null && range.to !== null) {
    chip.textContent = `${numberFormat.format(range.from)} تا ${numberFormat.format(range.to)}`;
  } else if (range.from !== null) {
    chip.textContent = `از ${numberFormat.format(range.from)} به بعد`;
  } else {
    chip.textContent = `تا ${numberFormat.format(range.to)}`;
  }
  elements.activeFilters.append(chip);
}

function renderArticles() {
  const range = getYearRange();
  if (!range) return;

  const articles = getFilteredArticles(range);
  elements.articleList.replaceChildren(...articles.map(createArticleCard));
  elements.resultCount.textContent = `${numberFormat.format(articles.length)} مقاله`;
  elements.emptyState.hidden = articles.length > 0;
  elements.articleList.hidden = articles.length === 0;
  renderActiveFilters(range);
}

function resetFilters() {
  elements.yearFrom.value = '';
  elements.yearTo.value = '';
  elements.sortBy.value = 'relevance';
  renderArticles();
}

elements.homeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  startSearch(elements.homeQuery.value);
});

elements.resultsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  startSearch(elements.resultsQuery.value);
});

document.querySelectorAll('.suggestion').forEach((button) => {
  button.addEventListener('click', () => {
    elements.homeQuery.value = button.dataset.query || '';
    startSearch(elements.homeQuery.value);
  });
});

document.querySelector('#backHome').addEventListener('click', () => {
  setPage('home');
  elements.homeQuery.value = state.query;
  elements.homeQuery.focus();
});

document.querySelector('#applyFilters').addEventListener('click', renderArticles);
document.querySelector('#resetFilters').addEventListener('click', resetFilters);
document.querySelector('#clearFromEmpty').addEventListener('click', resetFilters);
elements.sortBy.addEventListener('change', renderArticles);

[elements.yearFrom, elements.yearTo].forEach((input) => {
  input.addEventListener('input', () => input.removeAttribute('aria-invalid'));
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      renderArticles();
    }
  });
});
