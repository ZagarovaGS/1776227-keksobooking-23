import { getAds } from './data.js';
import { randerCard } from './card.js';
import { validateForm, addValidators } from './form.js';
import { disableForms, enableForms } from './dom-utils.js';
import { addMarkers, addSetView } from './map.js';
disableForms();

const ads = getAds();
addSetView(enableForms);
addMarkers(ads, randerCard);
validateForm();
addValidators();
