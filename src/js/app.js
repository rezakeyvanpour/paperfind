import { searchArticles } from './search.js';
import {
  getYearRange,
  renderActiveFilters,
  resetFilters,
} from './filters.js';
import { renderArticleList } from './articles.js';
import { getQueryWords, normalizeText, numberFormat, showToast } from './utils.js';

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
    yearRangeError: document.querySelector('#yearRangeError'),
  sortBy: document.querySelector('#sortBy'),
  activeFilters: document.querySelector('#activeFilters'),
    resultsTitle: document.querySelector('#resultsTitle'),
};

const state = {
  query: '',
};

function setPage(page) {
  const showResults = page === 'results';

  elements.homePage.hidden = showResults;
  elements.homePage.classList.toggle('is-active', !showResults);

  elements.resultsPage.hidden = !showResults;
  elements.resultsPage.classList.toggle('is-active', showResults);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderResults() {
  const range = getYearRange(elements);

  if (!range) {
    return;
  }

  const articles = searchArticles({
    query: state.query,
    ...range,
    sortBy: elements.sortBy.value,
  });

  renderArticleList(elements.articleList, articles);

  elements.resultCount.textContent =
    `${numberFormat.format(articles.length)} مقاله`;

  elements.emptyState.hidden = articles.length > 0;
  elements.articleList.hidden = articles.length === 0;

  renderActiveFilters(elements.activeFilters, range);
}

function startSearch(value) {
  const query = normalizeText(value);
  const activeInput = elements.resultsPage.hidden
    ? elements.homeQuery
    : elements.resultsQuery;

  if (!query) {
    showToast('برای شروع، موضوع یا عنوانی وارد کن.');
    activeInput.focus();
    return;
  }

  if (getQueryWords(query).length === 0) {
    showToast('عبارت جست‌وجو باید شامل واژه‌های مشخص‌تری باشد.');
    activeInput.focus();
    return;
  }

  state.query = query;

  elements.queryHeading.textContent = query;
  elements.resultsQuery.value = query;

  resetFilters(elements);
  setPage('results');
  renderResults();
  elements.resultsTitle.classList.add('is-focused');
  elements.resultsTitle.focus();
}

function returnToHome(event) {
  event?.preventDefault();

  setPage('home');
  elements.homeQuery.value = state.query;
  elements.homeQuery.focus();
}

function handleSearchSubmit(event, input) {
  event.preventDefault();
  startSearch(input.value);
}

function handleResetFilters() {
  resetFilters(elements);
  renderResults();
}

elements.homeForm.addEventListener('submit', (event) => {
  handleSearchSubmit(event, elements.homeQuery);
});

elements.resultsForm.addEventListener('submit', (event) => {
  handleSearchSubmit(event, elements.resultsQuery);
});

document.querySelectorAll('.suggestion').forEach((button) => {
  button.addEventListener('click', () => {
    elements.homeQuery.value = button.dataset.query || '';
    startSearch(elements.homeQuery.value);
  });
});

document.querySelector('.brand').addEventListener('click', returnToHome);
document.querySelector('#backHome').addEventListener('click', returnToHome);

document.querySelector('#applyFilters').addEventListener('click', renderResults);
document.querySelector('#resetFilters').addEventListener('click', handleResetFilters);
document.querySelector('#clearFromEmpty').addEventListener('click', handleResetFilters);

elements.sortBy.addEventListener('change', renderResults);

[elements.yearFrom, elements.yearTo].forEach((input) => {
  input.addEventListener('input', () => {
  elements.yearFrom.removeAttribute('aria-invalid');
  elements.yearTo.removeAttribute('aria-invalid');

  elements.yearRangeError.textContent = '';
  elements.yearRangeError.hidden = true;
});


  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      renderResults();
    }
  });
});
