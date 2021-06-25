import { getAds } from './data.js';
import { randerCard } from './card.js';
import { disableForms, enableForms } from './dom-utils.js';

disableForms();

if (false) {
  const ads = getAds();
  randerCard(ads[0]);
}

setTimeout(enableForms, 3000);
