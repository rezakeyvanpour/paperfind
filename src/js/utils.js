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

const digitMap = {
  '۰': '0',
  '۱': '1',
  '۲': '2',
  '۳': '3',
  '۴': '4',
  '۵': '5',
  '۶': '6',
  '۷': '7',
  '۸': '8',
  '۹': '9',

  '٠': '0',
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9',
};

export const numberFormat = new Intl.NumberFormat('fa-IR');

export function normalizeDigits(value) {
  return String(value).replace(
    /[۰-۹٠-٩]/g,
    (digit) => digitMap[digit]
  );
}

export function normalizeText(value) {
  return normalizeDigits(value)
    .normalize('NFKC')
    .replace(/[\u064B-\u065F\u0670\u0640]/g, '')
    .replace(/[يى]/g, 'ی')
    .replace(/ك/g, 'ک')
    .replace(/[\u200c\u200d]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function normalizeSearchText(value) {
  return normalizeText(value)
    .toLocaleLowerCase('fa')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
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
