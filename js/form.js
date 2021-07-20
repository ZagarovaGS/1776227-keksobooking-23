import { validateHeader, validatePrice } from './validate.js';
import {
  HeaderLength,
  PriceValue,
  HOUSING_TYPE,
  SAVE_URL,
  RERENDER_DELAY,
  SUCCES_TEXTCONTENT,
  ERROR_TEXT
} from './constants.js';
import { saveData } from './api.js';
import {
  addMainMarkerCoordinates,
  addMarker,
  removeMarker,
  MAIN_PIN_MARKER,
  TOKIO_COORDS,
  removePins,
  addMarkers
} from './map.js';
import { debounce } from './utils/debounce.js';
import { setFeatureValue, setSelectValue } from './filters.js';
import {prepareData, getData} from './store.js';
import { randerCard } from './card.js';


const FORM = document.querySelector('.ad-form');
const HEADER = FORM.querySelector('#title');
const ADDRESS = FORM.querySelector('#address');
const PRICE = FORM.querySelector('#price');
const ROOM_NUMBER = FORM.querySelector('#room_number');
const GUESTS = FORM.querySelector('#capacity');
const TYPE = FORM.querySelector('#type');
const CHECKIN = FORM.querySelector('#timein');
const CHECKOUT = FORM.querySelector('#timeout');
const SUCCESS_TEXT = document.createElement('div');
const AD_SUBMIT_RESULT = document.querySelector('.notice');
const AD_FILTER = document.querySelector('.map__filters');
const CLEAR_FORM = FORM.querySelector('.ad-form__reset');
const FEATURES = document.querySelector('#housing-features');
const MAP_FILTERS = document.querySelector('.map__filters');

const prepareHeader = () => {
  HEADER.setAttribute('required', true);
  HEADER.setAttribute('minLength', HeaderLength.MIN);
  HEADER.setAttribute('maxLenght', HeaderLength.MAX);
};

const prepareAddress = () => {
  ADDRESS.setAttribute('required', true);
};
const preparePrice = () => {
  PRICE.setAttribute('required', true);
  PRICE.setAttribute('max', PriceValue.MAX);
};

const handleHeaderChange = (evt) => {
  const element = evt.target;
  const value = element.value;
  const message = !validateHeader(value)
    ? `минимум ${HeaderLength.MIN} знаков,
  максимум ${HeaderLength.MAX} знаков`
    : '';

  element.setCustomValidity(message);
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
  const minPrice = HOUSING_TYPE[type];

  TYPE.change = PRICE.setAttribute('placeholder', minPrice);
  TYPE.change = PRICE.setAttribute('min', minPrice);
  const message = !validatePrice(Number(value), Number(minPrice))
    ? `минимум ${minPrice}, максимум ${PriceValue.MAX} `
    : '';
  PRICE.setCustomValidity(message);

  PRICE.reportValidity();
};

const handleTimeChange = (evt) => {
  const value = evt.target.value;
  CHECKIN.value = value;
  CHECKOUT.value = value;
};

const addHiddenClass = () => (SUCCESS_TEXT.classList = 'hidden');

AD_SUBMIT_RESULT.appendChild(SUCCESS_TEXT);
SUCCESS_TEXT.classList = 'hidden';

const onSubmitSuccess = () => {
  SUCCESS_TEXT.classList.add('success_text');
  SUCCESS_TEXT.classList.remove('hidden');
  SUCCESS_TEXT.style.backgroundColor = 'green';
  SUCCESS_TEXT.textContent = SUCCES_TEXTCONTENT;
  setTimeout(addHiddenClass, 3000);
  FORM.reset();
  AD_FILTER.reset();
  addMainMarkerCoordinates();
  prepareData();
  removePins();
  addMarkers(getData(), randerCard);
};

const onSubmitError = () => {
  SUCCESS_TEXT.classList.add('success_text');
  SUCCESS_TEXT.classList.remove('hidden');
  SUCCESS_TEXT.style.backgroundColor = 'red';
  SUCCESS_TEXT.textContent = ERROR_TEXT;
  setTimeout(addHiddenClass, 3000);
};

const onSubmit = (evt) => {
  const formData = new FormData(evt.target);
  evt.preventDefault();
  saveData(SAVE_URL, formData, onSubmitSuccess, onSubmitError);
};

const onClearForm = (evt) => {
  evt.preventDefault();
  FORM.reset();
  AD_FILTER.reset();
  addMainMarkerCoordinates();
  removeMarker(MAIN_PIN_MARKER);
  MAIN_PIN_MARKER.setLatLng(TOKIO_COORDS);
  addMarker(MAIN_PIN_MARKER);
  prepareData();
  removePins();
  addMarkers(getData(), randerCard);
};

CLEAR_FORM.addEventListener('click', onClearForm);

const getOnFeaturesChange = (onChange) => (evt) => {
  const element = evt.target;
  const name = element.value;
  const value = element.checked;
  setFeatureValue(name, value);
  onChange();
};

const getOnFilterChange = (onChange) => (evt) => {
  const element = evt.target;
  if (element.type === 'checkbox') {
    return;
  }
  const name = element.name.split('-')[1];
  const value = element.value;
  setSelectValue(name, value);
  onChange();
};

const addValidators = (onFiltersChange) => {
  HEADER.addEventListener('input', handleHeaderChange);
  ROOM_NUMBER.addEventListener('change', handleRoomsGuestsChange);
  GUESTS.addEventListener('change', handleRoomsGuestsChange);
  PRICE.addEventListener('input', handleTypePriceChange);
  TYPE.addEventListener('change', handleTypePriceChange);
  CHECKIN.addEventListener('change', handleTimeChange);
  CHECKOUT.addEventListener('change', handleTimeChange);
  FORM.addEventListener('submit', onSubmit);

  const onFilterChange = getOnFilterChange(onFiltersChange);

  const onFeatureChange = getOnFeaturesChange(onFiltersChange);

  MAP_FILTERS.addEventListener(
    'change',
    debounce(onFilterChange, RERENDER_DELAY),
  );

  FEATURES.addEventListener(
    'change',
    debounce(onFeatureChange, RERENDER_DELAY),
  );
};

const validateForm = () => {};

const prepareForm = () => {
  prepareHeader();
  prepareAddress();
  preparePrice();
};

prepareForm();
export { validateForm, addValidators };
