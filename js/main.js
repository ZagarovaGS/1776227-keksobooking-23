import { getAds } from './data.js';
import { randerCard } from './card.js';
import { validateForm, addValidators } from './form.js';
//import { disableForms, enableForms } from './dom-utils.js';

//disableForms();

if (false) {
  const ads = getAds();
  randerCard(ads[0]);
}
validateForm();
addValidators();
//setTimeout(enableForms, 3000);
