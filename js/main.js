//исходные массивы

const AVATAR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TITLE = [
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

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIME = ['12:00', '13:00', '14:00'];

const PHOTOS_ROOT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/';
const PHOTOS = [
  `${PHOTOS_ROOT} duonguyen-8LrGtIxxa4w.jpg`,
  `${PHOTOS_ROOT}brandon-hoogenboom-SNxQGWxZQi0.jpg`,
  `${PHOTOS_ROOT}claire-rendall-b6kAwr1i0Iw.jpg`,
];

const FIATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DISCRIPTION = [
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

const Lat = {
  MIN: 35.65,
  MAX: 35.7,
  DEC: 5,
};
const Lng = {
  MIN: 139.7,
  MAX: 139.8,
  DEC: 5,
};

const Price = {
  MIN: 2000,
  MAX: 200000,
  DEC: 0,
};

const Rooms = {
  MIN: 1,
  MAX: 8,
  DEC: 0,
};

const Guests = {
  MIN: 1,
  MAX: 10,
  DEC: 0,
};
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

const randomCompareItems = () => Math.floor(Math.random() * 30) - 10;
const createGetRandomItem = (originalArray) => {
  const mixed = [...originalArray].sort(randomCompareItems);
  let idx = 0;
  return () => mixed[idx++ % mixed.length];
};

const getRandomBoolean = () => Math.random() >= 0.5;

const getRandomItems = (array, canBeEmpty = true) => {
  const result = array.filter(getRandomBoolean);
  if (!canBeEmpty && result.length < 1) {
    result.push(array[Math.floor(Math.random() * array.length)]);
  }
  return result;
};

getRandomItem = (array) => array[getRandomBetween(0, array.length, 0)];

//-------------------------------------------------------------------------------------

const padLeft = (idx) => `${idx}`.padStart(2, 0);
const getAvatar = (idx) => `img/avatars/user ${padLeft(idx)}.png`;

const getAd = () => {
  const getRandomAvatarIdx = getRandomItem(AVATAR);
  const time = getRandomItem(TIME);
  let lat = getRandomBetween(Lat.MIN, Lat.MAX, Lat.DEC);
  let lng = getRandomBetween(Lng.MIN, Lng.MAX, Lng.DEC);

  return {
    author: {
      avatar: getAvatar(getRandomAvatarIdx),
    },
    offer: {
      title: getRandomItem(TITLE),
      address: `${lat}, ${lng}`,
      price: getRandomBetween(Price.MIN, Price.MAX, Price.DEC),
      type: getRandomItem(TYPE),
      rooms: getRandomBetween(Rooms.MIN, Rooms.MAX, Rooms.DEC),
      guests: getRandomBetween(Guests.MIN, Guests.MAX, Guests.DEC),
      checkin: time,
      checkout: time,
      features: getRandomItems(FIATURES),
      description: getRandomItem(DISCRIPTION),
      photos: getRandomItems(PHOTOS),
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
};

const propertyObjects = [];

const getAds = (array) => {
  for (let i = 0; i < AVATAR.length; i++) {
    array.push(getAd());
  }
  //eslint-disable-next-line
  console.log(array);
};
getAds(propertyObjects);
