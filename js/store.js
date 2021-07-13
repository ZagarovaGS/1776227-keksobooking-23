import { isFunction } from './utils.js';
const NUMBER_OBJECTS = 10;

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
  prepareData();
};
export { getData, storeData, prepareData };
