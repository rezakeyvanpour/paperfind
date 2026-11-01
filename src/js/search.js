import { sampleArticles } from './data.js';
import {
  getQueryWords,
  normalizeSearchText,
} from './utils.js';

function getRelevanceScore(article, queryWords, query) {
  const title = normalizeSearchText(article.title);
  const terms = normalizeSearchText((article.terms || []).join(' '));
  const abstract = normalizeSearchText(article.abstract);
  const authors = normalizeSearchText(article.authors);
  const source = normalizeSearchText(article.source);
  const type = normalizeSearchText(article.type);

  const searchableText = [
    title,
    terms,
    abstract,
    authors,
    source,
    type,
  ].join(' ');

  if (!queryWords.every((word) => searchableText.includes(word))) {
    return 0;
  }

  let score = 0;

  queryWords.forEach((word) => {
    if (title.includes(word)) score += 8;
    if (terms.includes(word)) score += 5;
    if (abstract.includes(word)) score += 2;
    if (authors.includes(word)) score += 1;
    if (source.includes(word)) score += 1;
    if (type.includes(word)) score += 1;
  });

  const fullQuery = normalizeSearchText(query);

  if (fullQuery && title.includes(fullQuery)) {
    score += 10;
  }

  return score;
}

export function searchArticles({
  query,
  from = null,
  to = null,
  sortBy = 'relevance',
}) {
  const queryWords = getQueryWords(query);

  if (queryWords.length === 0) {
    return [];
  }

  const articles = sampleArticles
    .map((article) => ({
      ...article,
      relevance: getRelevanceScore(article, queryWords, query),
    }))
    .filter((article) => {
      const matchesQuery = article.relevance > 0;
      const matchesFrom = from === null || article.year >= from;
      const matchesTo = to === null || article.year <= to;

      return matchesQuery && matchesFrom && matchesTo;
    });

  if (sortBy === 'newest') {
    articles.sort((a, b) => b.year - a.year);
  } else if (sortBy === 'oldest') {
    articles.sort((a, b) => a.year - b.year);
  } else {
    articles.sort(
      (a, b) => b.relevance - a.relevance || b.year - a.year
    );
  }

  return articles;
}
