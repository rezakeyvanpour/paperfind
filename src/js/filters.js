import { normalizeDigits, numberFormat } from './utils.js';

function readYear(input) {
  const value = normalizeDigits(input.value).trim();

  if (!value) {
    return null;
  }

  if (!/^\d{4}$/.test(value)) {
    return Number.NaN;
  }

  return Number(value);
}

function clearYearError(elements) {
  elements.yearFrom.removeAttribute('aria-invalid');
  elements.yearTo.removeAttribute('aria-invalid');

  elements.yearRangeError.textContent = '';
  elements.yearRangeError.hidden = true;
}

export function getYearRange(elements) {
  const from = readYear(elements.yearFrom);
  const to = readYear(elements.yearTo);

  const isValidYear = (year) =>
    year === null ||
    (Number.isInteger(year) && year >= 1900 && year <= 2099);

  clearYearError(elements);

  if (!isValidYear(from) || !isValidYear(to)) {
    const invalidInputs = [];

    if (!isValidYear(from)) {
      elements.yearFrom.setAttribute('aria-invalid', 'true');
      invalidInputs.push(elements.yearFrom);
    }

    if (!isValidYear(to)) {
      elements.yearTo.setAttribute('aria-invalid', 'true');
      invalidInputs.push(elements.yearTo);
    }

    elements.yearRangeError.textContent =
      'سال باید یک عدد چهاررقمی بین ۱۹۰۰ تا ۲۰۹۹ باشد.';

    elements.yearRangeError.hidden = false;

    invalidInputs[0].focus();

    return null;
  }

  if (from !== null && to !== null && from > to) {
    elements.yearFrom.setAttribute('aria-invalid', 'true');
    elements.yearTo.setAttribute('aria-invalid', 'true');

    elements.yearRangeError.textContent =
      'سال شروع نمی‌تواند از سال پایان بزرگ‌تر باشد.';

    elements.yearRangeError.hidden = false;

    elements.yearFrom.focus();

    return null;
  }

  return { from, to };
}

export function renderActiveFilters(container, range) {
  container.replaceChildren();

  if (range.from === null && range.to === null) {
    return;
  }

  const chip = document.createElement('span');
  chip.className = 'filter-chip';

  if (range.from !== null && range.to !== null) {
    chip.textContent =
      `${numberFormat.format(range.from)} تا ${numberFormat.format(range.to)}`;
  } else if (range.from !== null) {
    chip.textContent =
      `از ${numberFormat.format(range.from)} به بعد`;
  } else {
    chip.textContent =
      `تا ${numberFormat.format(range.to)}`;
  }

  container.append(chip);
}

export function resetFilters(elements) {
  elements.yearFrom.value = '';
  elements.yearTo.value = '';
  elements.sortBy.value = 'relevance';

  clearYearError(elements);
}
