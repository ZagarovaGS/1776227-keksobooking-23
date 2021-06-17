import {
  AVATARS,
  TITLES,
  TYPES,
  TIMES,
  PHOTOS,
  FIATURES,
  DISCRIPTIONS,
  Lat,
  Lng,
  Price,
  Rooms,
  Guests,
} from './constants.js';

import { getRandomBetween, getRandomItems, getRandomItem } from './utils.js';

const padLeft = (idx) => `${idx}`.padStart(2, 0);
const getAvatar = (idx) => `img/avatars/user ${padLeft(idx)}.png`;

const getAd = () => {
  const getRandomAvatarIdx = getRandomItem(AVATARS);
  const time = getRandomItem(TIMES);
  const lat = getRandomBetween(Lat.MIN, Lat.MAX, Lat.DEC);
  const lng = getRandomBetween(Lng.MIN, Lng.MAX, Lng.DEC);

  return {
    author: {
      avatar: getAvatar(getRandomAvatarIdx),
    },
    offer: {
      title: getRandomItem(TITLES),
      address: `${lat}, ${lng}`,
      price: getRandomBetween(Price.MIN, Price.MAX, Price.DEC),
      type: getRandomItem(TYPES),
      rooms: getRandomBetween(Rooms.MIN, Rooms.MAX, Rooms.DEC),
      guests: getRandomBetween(Guests.MIN, Guests.MAX, Guests.DEC),
      checkin: time,
      checkout: time,
      features: getRandomItems(FIATURES),
      description: getRandomItem(DISCRIPTIONS),
      photos: getRandomItems(PHOTOS),
    },
    location: {
      lat: lat,
      lng: lng,
    },
  };
};

const getAds = (propertyObjects) => {
  propertyObjects = [];
  for (let i = 0; i < AVATARS.length; i++) {
    propertyObjects.push(getAd());
  }
  //eslint-disable-next-line
  console.log(propertyObjects);
  return propertyObjects;
};

export { getAds };
