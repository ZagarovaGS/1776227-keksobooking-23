import { getAds } from './data.js';
import { randerCard } from './card.js';
import { validateForm, addValidaters } from './form.js';
//import { disableForms, enableForms } from './dom-utils.js';

//disableForms();

if (false) {
  const ads = getAds();
  randerCard(ads[0]);
}
validateForm();
addValidaters();
//setTimeout(enableForms, 3000);
