

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
const DATA_URL = 'https://23.javascript.pages.academy/keksobooking/data';
const SAVE_URL = 'https://23.javascript.pages.academy/keksobooking';
const NUMBER_OBJECTS = 10;

const PRICE_VARIANTS = {
  low: 10000,
  middle: 50000,
};

const RERENDER_DELAY = 500;
const ERROR_LOAD = 'Ошибка загрузки объявлений';
const KEYCODE_NUMBER = 27;
const ERROR_MESSAGE = 'Ошибка размещения объявления';

export {

  HeaderLength,
  PriceValue,
  HOUSING_TYPE,
  DATA_URL,
  SAVE_URL,
  NUMBER_OBJECTS,
  RERENDER_DELAY,
  PRICE_VARIANTS,
  ERROR_LOAD,
  KEYCODE_NUMBER,
  ERROR_MESSAGE,
  AD_TYPES,
  GUESTS,
  ROOMS
};
