const isPositiveNumber = (value) => typeof value === "number" && value >= 0;

const getRandomBetween = (min, max, dec) => {
  if (
    !isPositiveNumber(min) ||
    !isPositiveNumber(max) ||
    !isPositiveNumber(dec)
  ) {
    throw new Error("Неверный тип аргументов");
  }

  const pow = Math.pow(10, dec);
  const result = Math.round((Math.random() * (max - min) + min) * pow) / pow;

  return result;
};

try {
  console.log("result:", getRandomBetween(2, 6, 0));
} catch (err) {
  alert(err.message);
}

//eslint-disable-next-line
console.log(getRandomBetween(2, 6, 0));
