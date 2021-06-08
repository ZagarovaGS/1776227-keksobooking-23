

const isPositiveNumber = value => typeof value === 'number' && value >= 0;

const getRandomBetween = (min, max, dec) => {
  if (!isPositiveNumber(min) || !isPositiveNumber(max) || !isPositiveNumber(dec)) {
    throw new Error('Неверный тип аргументов');
  }

  const pow = Math.pow(10, dec);
  const result = Math.round((Math.random() * (max - min) + min) * pow) / pow;

  return result;
}

//чувствую, что нерационально заворачивать в функцию, но по-другому не догадалась
const getRandomNumber = (min, max, dec) => {

  try {
    console.log('result:', result = getRandomBetween(min, max, dec));
  } catch (err) {
    alert(err.message);
  }

  return result;
};


console.log(getRandomNumber(2, 6, 4));





