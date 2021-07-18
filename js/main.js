import { loadData } from './api.js';
import { randerCard } from './card.js';
import { validateForm, addValidators } from './form.js';
import { disableForms, enableForms, showError } from './dom-utils.js';
import { addMarkers, addSetView } from './map.js';
import { DATA_URL } from './constants.js';
import { storeData, getData, prepareData } from './store.js';
import { addMainMarkerCoordinates, removePins } from './map.js';
import { filterAds } from './filters.js';

const renderPins = () => {
  prepareData(filterAds);
  removePins();
  addMarkers(getData(), randerCard);
};

const onDataLoaded = (data) => {
  storeData(data);
  prepareData();
  addMarkers(getData(), randerCard);
};

const activate = () => {
  enableForms();
  loadData(DATA_URL, onDataLoaded, showError);
  addMainMarkerCoordinates();
};
disableForms();
addValidators(renderPins);
validateForm();
addSetView(activate);
