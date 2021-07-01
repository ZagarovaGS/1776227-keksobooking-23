const AVATARS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const TITLES = [
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

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIMES = ['12:00', '13:00', '14:00'];

const PHOTOS_ROOT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking';
const PHOTOS = [
  `${PHOTOS_ROOT}/duonguyen-8LrGtIxxa4w.jpg`,
  `${PHOTOS_ROOT}/brandon-hoogenboom-SNxQGWxZQi0.jpg`,
  `${PHOTOS_ROOT}/claire-rendall-b6kAwr1i0Iw.jpg`,
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
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

const AD_TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const GUESTS = ['гостя', 'гостей', 'гостей'];
const ROOMS = ['комната', 'комнаты', 'комнат'];

const HeaderLength = {
  MIN: 30,
  MAX: 100,
};

const PriceValue = {
  MIN: 0,
  MAX: 1000000,
};

const HOUSING_TYPE = {
  flat: 1000,
  bungalow: 0,
  house: 5000,
  palace: 10000,
  hotel: 3000,
};

export {
  AVATARS,
  TITLES,
  TYPES,
  TIMES,
  PHOTOS,
  FEATURES,
  DESCRIPTIONS,
  Lat,
  Lng,
  Price,
  Rooms,
  Guests,
  AD_TYPES,
  GUESTS,
  ROOMS,
  HeaderLength,
  PriceValue,
  HOUSING_TYPE,
};
