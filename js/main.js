
const isPositiveNumber = (value) => typeof value === 'number' && value >= 0;

const getRandomBetween = (min, max, dec) => {
  if (
    !isPositiveNumber(min) ||
    !isPositiveNumber(max) ||
    !isPositiveNumber(dec)
  ) {
    throw new Error('неверный тип аргументов');
>>>>>>> eaf5e074387db670549226e05d39ab48019d18aa
  }

  const pow = Math.pow(10, dec);
  const result = Math.round((Math.random() * (max - min) + min) * pow) / pow;

  return result;
};


try {
  //eslint-disable-next-line
  console.log('result:', getRandomBetween(2, 6, 0));
} catch (err) {
  //eslint-disable-next-line
  alert(err.message);
}

//eslint-disable-next-line
console.log(getRandomBetween(2, 6, 0));

