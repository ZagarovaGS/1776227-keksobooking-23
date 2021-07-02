const isPositiveNumber = (value) => typeof value === 'number' && value >= 0;

const getRandomBetween = (min, max, dec) => {
  if (
    !isPositiveNumber(min) ||
    !isPositiveNumber(max) ||
    !isPositiveNumber(dec)
  ) {
    throw new Error('Неверный тип аргументов');
  }

  const pow = Math.pow(10, dec);
  const result = Math.round((Math.random() * (max - min) + min) * pow) / pow;

  return result;
};

const getRandomBoolean = () => Math.random() >= 0.5;

const getRandomItems = (array, canBeEmpty = true) => {
  const result = array.filter(getRandomBoolean);
  if (!canBeEmpty && result.length < 1) {
    result.push(array[Math.floor(Math.random() * array.length)]);
  }
  return result;
};

const getRandomItem = (array) =>
  array[getRandomBetween(0, array.length - 1, 0)];
const padLeft = (idx) => `${idx}`.padStart(2, 0);

const getPluralIdx = (count) => {
  const c10 = count % 10;
  const c100 = count % 100;
  if (c10 === 1 && c100 !== 11) {
    return 0;
  }

  if (c10 >= 2 && c10 <= 4 && (c100 < 10 || c100 >= 20)) {
    return 1;
  }

  return 2;
};

const pluralise = (count, plurals) => plurals[getPluralIdx(count)];

const getPlural = (count, plural) => `${count} ${pluralise(count, plural)}`;

export { getRandomBetween, getRandomItems, getRandomItem, padLeft, getPlural };
