import { getAds } from './data.js';
import { randerCard } from './card.js';
import { validateForm, addValidators } from './form.js';
import { disableForms, enableForms } from './dom-utils.js';
import { getMarkers } from './map.js';
//disableForms();

const ads = getAds();
getMarkers(ads, randerCard);
validateForm();
addValidators();
//setTimeout(enableForms, 3000);
