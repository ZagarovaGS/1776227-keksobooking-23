import { isFunction } from './utils.js';
import { NUMBER_OBJECTS } from './constants.js';

let importData = null;
let preparedData = null;
const getData = () => preparedData;

const prepareData = (filterFn) => {
  preparedData = [...importData];

  if (isFunction(filterFn)) {
    preparedData = preparedData.filter(filterFn);
  }
  preparedData = preparedData.slice(0, NUMBER_OBJECTS);
};

const storeData = (data) => {
  importData = data;
  preparedData = data;
};
export { getData, storeData, prepareData };
