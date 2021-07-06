import { getAds } from './data.js';
import { randerCard } from './card.js';
import { validateForm, addValidators } from './form.js';
import { disableForms, enableForms } from './dom-utils.js';
import { addDescription } from './map.js';
//disableForms();

const ads = getAds();
addDescription(ads, randerCard);
validateForm();
addValidators();
//setTimeout(enableForms, 3000);
