//исходные массивы

const originalAvatar = [
  'img/avatars/user' + 01 + '.png',
  'img/avatars/user' + 02 + '.png',
  'img/avatars/user' + 03 + '.png',
  'img/avatars/user' + 04 + '.png',
  'img/avatars/user' + 05 + '.png',
  'img/avatars/user' + 06 + '.png',
  'img/avatars/user' + 07 + '.png',
  'img/avatars/user' + 08 + '.png',
];
const originalTitle = [
  'Квартира студия в престижном районе',
  'Тихая квартирка недалеко от метро',
  'Императорский дворец в центре Токио',
  'Уютное гнездышко для молодоженов',
  'Стандартная квартира в центре',
  'Милое гнездышко для фанатов Анимэ',
  'Хостел «Для друзей»',
  'Загородный дом для спокойного отдыха',
  'Небольшая бюджетная комната для студентов',
  'Чёткая хата',
  'Отель-музей',
  'Маленькая квартирка рядом с парком',
];

const originalAddress = [
  'Chiyoda-ku, Tōkyō-to 102-0091',
  '105-0016 Tōkyō-to, Chiyoda-ku, 14-9',
  '105-0003 Tōkyō-to, Minato-ku, Nishishinbashi, 2 Chome−3',
  '102-0075 Tōkyō-to, Chiyoda-ku, Sanbanchō',
  '102-0080 Tōkyō-to, Chiyoda-ku, 14-7',
  '105-0003 Tōkyō-to, Minato-ku, Nishishinbashi, 2 Chome−3',
  '1-1 Chiyoda, Chiyoda-ku, Tōkyō-to 100-8111',
  '102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3',
  '102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 17−4',
  'Chiyoda-ku, Tōkyō-to 102-0082',
];

const originalType = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const originalCheckin = ['12:00', '13:00', '14:00'];

const originalCheckout = ['12:00', '13:00', '14:00'];

const originalPhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const originalFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const originalDescription = [
  'Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.',
  'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
  'Хейтеров просьба не беспокоить.',
  'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
  'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
  'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
  'Великолепная квартира-студия в центре Токио. Подходит как туристам, там и бизнесменам. Квартира полностью укомплектована и имеет свежий ремонт.',
  'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
  'Маленькая квартирка на чердаке. Для самых не требовательных.',
];

//---------------------------------------------------------------------------------------------------------------

//функции
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

try {
  //eslint-disable-next-line
  console.log('result:', getRandomBetween(2, 6, 0));
} catch (err) {
  //eslint-disable-next-line
  alert(err.message);
}

const getRandomArray = (originalArray) => {
  const newArray = [];
  for (let i = 0; i < getRandomBetween(1, originalArray.length, 0); i++) {
    newArray.push(
      originalArray[getRandomBetween(0, originalArray.length - 1, 0)]
    );
    newArray.sort();
    for (let j = 0; j < originalArray.length; j++) {
      if (newArray[j] === newArray[j + 1]) {
        newArray.splice(j, 1);
      }
    }
  }
  return newArray;
};

const getRandomItem = (originalArray) => {
  let newString = '';
  for (let i = 0; i < originalArray.length; i++) {
    newString = originalArray[getRandomBetween(0, originalArray.length - 1, 0)];
  }
  return newString;
};

//-------------------------------------------------------------------------------------

const propertyObjects = [];

for (let i = 0; i < 10; i++) {
  const avatar = getRandomItem(originalAvatar);
  const title = getRandomItem(originalTitle);
  const address = getRandomItem(originalAddress);
  const price = getRandomBetween(2000, 2000000, 0);
  const type = getRandomItem(originalType);
  const rooms = getRandomBetween(1, 8, 0);
  const guests = getRandomBetween(1, 10, 0);
  const checkin = getRandomItem(originalCheckin);
  const checkout = getRandomItem(originalCheckout);
  const features = getRandomArray(originalFeatures);
  const desription = getRandomItem(originalDescription);
  const photos = getRandomArray(originalPhotos);
  const lat = getRandomBetween(35.65, 35.7, 5);
  const Lng = getRandomBetween(139.7, 139.8, 5);

  const getPropertyObject = () => {
    return {
      author: {
        avatar: avatar,
      },
      offer: {
        title: title,
        address: address,
        price: price,
        type: type,
        rooms: rooms,
        guests: guests,
        checkin: checkin,
        checkout: checkout,
        features: features,
        description: description,
        photos: photos,
      },
      location: {
        lat: lat,
        lng: Lng,
      },
    };
  };

  propertyObjects.push(getPropertyObject());
}
//eslint-disable-next-line
console.log(propertyObjects);
