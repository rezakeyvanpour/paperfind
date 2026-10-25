import { numberFormat, showToast } from './utils.js';

export function getYearRange(elements) {
  const from = elements.yearFrom.value === ''
    ? null
    : Number(elements.yearFrom.value);

  const to = elements.yearTo.value === ''
    ? null
    : Number(elements.yearTo.value);

  const isValidYear = (year) =>
    year === null ||
    (Number.isInteger(year) && year >= 1900 && year <= 2099);

  const errorElement = elements.yearRangeError;

  elements.yearFrom.removeAttribute('aria-invalid');
  elements.yearTo.removeAttribute('aria-invalid');

  errorElement.textContent = '';
  errorElement.hidden = true;

  if (!isValidYear(from) || !isValidYear(to)) {
    const invalidInput = !isValidYear(from)
      ? elements.yearFrom
      : elements.yearTo;

    if (!isValidYear(from)) {
      elements.yearFrom.setAttribute('aria-invalid', 'true');
    }

    if (!isValidYear(to)) {
      elements.yearTo.setAttribute('aria-invalid', 'true');
    }

    errorElement.textContent =
      'سال باید عددی بین ۱۹۰۰ تا ۲۰۹۹ باشد.';
    errorElement.hidden = false;

    invalidInput.focus();
    return null;
  }

  if (from !== null && to !== null && from > to) {
    elements.yearFrom.setAttribute('aria-invalid', 'true');
    elements.yearTo.setAttribute('aria-invalid', 'true');

    errorElement.textContent =
      'سال شروع نمی‌تواند از سال پایان بزرگ‌تر باشد.';
    errorElement.hidden = false;

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
    chip.textContent = `از ${numberFormat.format(range.from)} به بعد`;
  } else {
    chip.textContent = `تا ${numberFormat.format(range.to)}`;
  }

  container.append(chip);
}

export function resetFilters(elements) {
  elements.yearFrom.value = '';
  elements.yearTo.value = '';
  elements.sortBy.value = 'relevance';

  elements.yearFrom.removeAttribute('aria-invalid');
  elements.yearTo.removeAttribute('aria-invalid');
}