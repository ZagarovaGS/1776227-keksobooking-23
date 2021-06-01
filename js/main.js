getRandomNumber = function(minNum, maxNum){
    if (minNum>=0 && maxNum>=0){
      if(maxNum<=minNum){
          return -1;
      }

   return randomNum = Math.floor(Math.random ()*(maxNum-minNum+1))+minNum;
    };
};

console.log(getRandomNumber(19, 8));

getRandomNumberFloat = function(minNum, maxNum, floatCount){
    if (minNum>=0 && maxNum>=0){
      if(maxNum<=minNum){
          return -1;
      }

   return randomNum = (Math.random ()*(maxNum-minNum)+minNum).toFixed(floatCount);
    };
};

console.log(getRandomNumberFloat(1.111, 1.112, 3));

