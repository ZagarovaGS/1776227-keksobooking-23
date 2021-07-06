import { enableForms } from './dom-utils.js';

const LatLngTokyo = {
  lat: '35.652832',
  lng: '139.839478',
};
const step = 10;

const map = L.map('map-canvas');

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const addSetView = () => {
  map.setView(
    {
      lat: 35.6998,
      lng: 139.81741,
    },
    step
  );
};

const addMainMarker = () => {
  const mainPinIcon = L.icon({
    iconUrl: '/img/main-pin.svg',
    iconSize: [52, 52],
    iconAnhor: [26, 52],
  });

  const mainPinMarker = L.marker(
    {
      lat: LatLngTokyo.lat,
      lng: LatLngTokyo.lng,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    }
  );

  mainPinMarker.addTo(map);
};

//так не работает
map.on('load', () => {
  enableForms();
  //  addSetView();
  //  addMainMarker();
});

// так работает
if (map) {
  addSetView();
  addMainMarker();
}

const markers = [];

const icon = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnhor: [20, 40],
});

const addDesription = (points, addCard) => {
  points.forEach((point) => {
    const { lat, lng } = point.location;

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      }
    );
    marker.addTo(map).bindPopup(addCard(point)),
      {
        keepInView: true,
      };
    markers.push(marker);
  });
};

const removeMarkers = () => {
  markers.forEach((marker) => map.removeLayer(marker));
};
export { map, addDesription, removeMarkers };
