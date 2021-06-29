import { validateHeader, validatePrice } from './validate.js';
import { HeaderLength, PriceValue } from './constants.js';

const FORM = document.querySelector('.ad-form');
const HEADER = FORM.querySelector('#title');
const ADDRESS = FORM.querySelector('#address');
const PRICE = FORM.querySelector('#price');
const ROOM_NUMBER = FORM.querySelector('#room_number');
const GUESTS = FORM.querySelector('#capacity');

const preparHeader = () => {
  HEADER.setAttribute('required', true);
  HEADER.setAttribute('minLength', HeaderLength.MIN);
  HEADER.setAttribute('maxLenght', HeaderLength.MAX);
};

const preparAddress = () => {
  ADDRESS.setAttribute('required', true);
  ADDRESS.setAttribute('value', 'введите адрес');
};
const preparPrice = () => {
  PRICE.setAttribute('required', true);
  PRICE.setAttribute('min', PriceValue.MIN);
  PRICE.setAttribute('max', PriceValue.MAX);
};

const handleHeaderChange = (evt) => {
  const element = evt.target;
  const value = element.value;
  if (!validateHeader(value)) {
    element.setCustomValidity(
      `минимум ${HeaderLength.MIN} знаков, максимум ${HeaderLength.MAX} знаков`
    );
  } else {
    element.setCustomValidity('');
  }
  element.reportValidity();
};

const handlePriceChange = (evt) => {
  const element = evt.target;
  const value = element.value;
  if (!validatePrice(Number(value))) {
    element.setCustomValidity(
      `минимум ${PriceValue.MIN}, максимум ${PriceValue.MAX} `
    );
  } else {
    element.setCustomValidity('');
  }
  element.reportValidity();
};

const handleRoomsGuestsChange = () => {
  const rooms = Number(ROOM_NUMBER.value);
  const guests = Number(GUESTS.value);
  let message = '';

  if (rooms === 100) {
    if (guests !== 0) {
      message = '100 комнат не для гостей';
    }
  } else {
    if (guests === 0 || rooms < guests) {
      message = 'гостей должно быть не больше комнат';
    }
  }
  GUESTS.setCustomValidity(message);
  GUESTS.reportValidity();
};

const addValidaters = () => {
  HEADER.addEventListener('input', handleHeaderChange);
  PRICE.addEventListener('input', handlePriceChange);
  ROOM_NUMBER.addEventListener('change', handleRoomsGuestsChange);
  GUESTS.addEventListener('change', handleRoomsGuestsChange);
};

const validateForm = () => {};

const prepareForm = () => {
  preparHeader();
  preparAddress();
  preparPrice();
};

prepareForm();
export { validateForm, addValidaters };
