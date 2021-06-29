import { HeaderLength, PriceValue } from './constants.js';

const isString = (value) => typeof value === 'string';
const isNumber = (value) => typeof value === 'number';

const validateNumber = (value, min, max) =>
  isNumber(value) && value >= min && value <= max;

const validateLength = (value, minlenght, maxlenght) =>
  isString(value) && validateNumber(value.length, minlenght, maxlenght);

const validateHeader = (header) =>
  validateLength(header, HeaderLength.MIN, HeaderLength.MAX);

const validatePrice = (price) =>
  validateNumber(price, PriceValue.MIN, PriceValue.MAX);

export { validateLength, validateNumber, validateHeader, validatePrice };
