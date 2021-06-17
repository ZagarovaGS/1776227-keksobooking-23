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

const getRandomItem = (array) => array[getRandomBetween(0, array.length, 0)];
const padLeft = (idx) => `${idx}`.padStart(2, 0);
export { getRandomBetween, getRandomItems, getRandomItem, padLeft };
