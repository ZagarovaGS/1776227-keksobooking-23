
const getRandomNumberFloat = function (minNum, maxNum, floatCount) {
  if (minNum >= 0 && maxNum >= 0) {
    if (maxNum <= minNum) {
      return -1;
    }
  }

  return randomNum = (Math.random() * (maxNum - minNum) + minNum).toFixed(floatCount);
};

console.log(getRandomNumberFloat(1.234, 2.435, 1));

const getRandomNumber = function (minNum, maxNum) {
  let randomNum = getRandomNumberFloat(minNum, maxNum, 0);
  return randomNum;
};

console.log(getRandomNumber(2, 8));

