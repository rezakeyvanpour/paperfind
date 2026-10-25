import { showToast } from './utils.js';

export function createArticleCard(article) {
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

    if (className) {
      item.className = className;
    }

    item.textContent = value;
    topline.append(item);
  });

  const title = document.createElement('h2');
  title.textContent = article.title;

  const authors = document.createElement('p');
  authors.className = 'authors';
  authors.textContent = article.authors;

  const abstract = document.createElement('p');
  abstract.className = 'abstract';
  abstract.textContent = article.abstract;

  const actions = document.createElement('div');
  actions.className = 'article-actions';

  const copyButton = document.createElement('button');
  copyButton.type = 'button';
  copyButton.textContent = 'کپی عنوان';
  copyButton.addEventListener('click', () => copyTitle(article.title));

  const sourceLabel = document.createElement('span');
  sourceLabel.className = 'article-source';
  sourceLabel.textContent = 'منبع نمونه';

  actions.append(copyButton, sourceLabel);
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

export function renderArticleList(container, articles) {
  container.replaceChildren(...articles.map(createArticleCard));
}
