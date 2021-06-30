import { validateHeader, validatePrice } from './validate.js';
import { HeaderLength, PriceValue, TYPES, HousingType } from './constants.js';

const FORM = document.querySelector('.ad-form');
const HEADER = FORM.querySelector('#title');
const ADDRESS = FORM.querySelector('#address');
const PRICE = FORM.querySelector('#price');
const ROOM_NUMBER = FORM.querySelector('#room_number');
const GUESTS = FORM.querySelector('#capacity');
const TYPE = FORM.querySelector('#type');
const CHECKIN = FORM.querySelector('#timein');
const CHECKOUT = FORM.querySelector('#timeout');

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
  PRICE.setAttribute('max', PriceValue.MAX);
};

const handleHeaderChange = (evt) => {
  const element = evt.target;
  const value = element.value;
  !validateHeader(value)
    ? element.setCustomValidity(
        `минимум ${HeaderLength.MIN} знаков, максимум ${HeaderLength.MAX} знаков`
      )
    : element.setCustomValidity('');
  element.reportValidity();
};

const handleRoomsGuestsChange = () => {
  const rooms = Number(ROOM_NUMBER.value);
  const guests = Number(GUESTS.value);
  let message = '';

  if (rooms === 100 && guests !== 0) {
    message = '100 комнат не для гостей';
  }
  if ((rooms !== 100 && guests === 0) || rooms < guests) {
    message = 'гостей должно быть не больше комнат';
  }
  GUESTS.setCustomValidity(message);
  GUESTS.reportValidity();
};

const handleTypePriceChange = (evt) => {
  const element = evt.target;
  const value = element.value;
  const type = TYPE.value;
  for (let i = 0; i < TYPES.length; i++) {
    if (type === TYPES[i]) {
      const minPrice = HousingType[TYPES[i]];
      PRICE.setAttribute('min', Number(minPrice));
      if ((!validatePrice(Number(value)), Number(minPrice))) {
        element.setCustomValidity(
          `минимум ${minPrice}, максимум ${PriceValue.MAX} `
        );
      }
      PRICE.setAttribute('placeholder', minPrice);
    } else {
      element.setCustomValidity('');
    }
  }
  PRICE.reportValidity();
};

const handleCheckinCheckout = (evt) => {
  const element = evt.target;
  const elValue = element.value;
  CHECKIN.value = elValue;
  CHECKOUT.value = elValue;
};

const addValidaters = () => {
  HEADER.addEventListener('input', handleHeaderChange);
  ROOM_NUMBER.addEventListener('change', handleRoomsGuestsChange);
  GUESTS.addEventListener('change', handleRoomsGuestsChange);
  TYPE.addEventListener('change', handleTypePriceChange);
  PRICE.addEventListener('input', handleTypePriceChange);
  CHECKIN.addEventListener('change', handleCheckinCheckout);
  CHECKOUT.addEventListener('change', handleCheckinCheckout);
};

const validateForm = () => {};

const prepareForm = () => {
  preparHeader();
  preparAddress();
  preparPrice();
};

prepareForm();
export { validateForm, addValidaters };
