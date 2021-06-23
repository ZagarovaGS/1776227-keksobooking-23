import { getPlural } from './utils.js';

const CARD_TEMPLATE = document.querySelector('#card');
const MAP_ELEMENT = document.querySelector('.map');
const MAP_CANVAS_ELEMENT = MAP_ELEMENT.querySelector('#map-canvas');

const AD_TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const GUESTS = ['гостя', 'гостей', 'гостей'];
const ROOMS = ['комната', 'комнаты', 'комнат'];

const removeExtraFeatures = (elements, actualFeatures) => {
  elements.forEach((element) => {
    const classes = element.classList[1].split('--');
    if (!actualFeatures.includes(classes[1])) {
      element.remove();
    }
  });
};

const randerPhotos = (element, photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photoUrl) => {
    const photoElement = element.cloneNode(true);
    photoElement.src = photoUrl;
    fragment.appendChild(photoElement);
  });
  element.remove();
  return fragment;
};

const setOrRemove = (element, value, text) => {
  if (!value) {
    element.remove();
    return;
  }
  element.textContent = text || value;
};
const randerCard = (ad) => {
  const { offer, author } = ad;
  const card = CARD_TEMPLATE.content.cloneNode(true);
  const title = card.querySelector('.popup__title');
  const address = card.querySelector('.popup__text--address');
  const price = card.querySelector('.popup__text--price');
  const type = card.querySelector('.popup__type');
  const capacity = card.querySelector('.popup__text--capacity');
  const time = card.querySelector('.popup__text--time');
  const description = card.querySelector('.popup__description');
  const avatar = card.querySelector('.popup__avatar');
  const featuresContainer = card.querySelector('.popup__features');
  const features = featuresContainer.querySelectorAll('.popup__feature');
  const photosContainer = card.querySelector('.popup__photos');
  const photoElement = photosContainer.querySelector('.popup__photo');

  const capacityText = `${getPlural(offer.rooms, ROOMS)} для
  ${getPlural(offer.guests, GUESTS)}`;
  const timeText = `Заезд после ${offer.checkin}, выезд до ${offer?.checkout}`;
  setOrRemove(address, offer.address);
  setOrRemove(title, offer.title);
  setOrRemove(price, offer.price, `${offer.price} ₽/ночь`);
  setOrRemove(type, offer.type, AD_TYPES[offer.type] ?? '');
  setOrRemove(capacity, offer.rooms * offer.guests, capacityText);
  setOrRemove(time, offer.checkin.length * offer.checkout.length, timeText);
  setOrRemove(description, offer.descriptions);

  avatar.src = author.avatar;
  if (!avatar) {
    avatar.remove();
  }
  removeExtraFeatures(features, offer.features);
  photosContainer.appendChild(randerPhotos(photoElement, offer.photos));

  MAP_CANVAS_ELEMENT.appendChild(card);
};

export { randerCard };
