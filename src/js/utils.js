const ignoredWords = new Set([
  'برای',
  'های',
  'در',
  'از',
  'با',
  'به',
  'یک',
  'و',
  'بر',
  'the',
  'and',
  'for',
  'with',
]);

export const numberFormat = new Intl.NumberFormat('fa-IR');

export function normalizeText(value) {
  return String(value)
    .normalize('NFKC')
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
    .replace(/[يى]/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/\u200c/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 240);
}

export function normalizeSearchText(value) {
  return normalizeText(value).toLocaleLowerCase('fa');
}

export function getQueryWords(value) {
  return normalizeSearchText(value)
    .split(/\s+/)
    .filter((word) => word.length > 1 && !ignoredWords.has(word));
}

let toastTimer = null;

export function showToast(message) {
  const toast = document.querySelector('#toast');

  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add('is-visible');

  window.clearTimeout(toastTimer);

  toastTimer = window.setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 2600);
}
