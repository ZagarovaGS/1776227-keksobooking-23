import { loadData } from './api.js';
import { randerCard } from './card.js';
import { validateForm, addValidators } from './form.js';
import { disableForms, enableForms } from './dom-utils.js';
import { addMarkers, addSetView } from './map.js';
import { DATA_URL } from './constants.js';
import { storeData, getData } from './store.js';
disableForms();
addValidators();
validateForm();

const onDataLoaded = (data) => {
  storeData(data);
  addMarkers(getData(), randerCard);
};

const activate = () => {
  enableForms();
  loadData(DATA_URL, onDataLoaded, console.error);
};

addSetView(activate);
