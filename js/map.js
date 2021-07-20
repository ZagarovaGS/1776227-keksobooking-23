const ADDRESS = document.querySelector('#address');

const MAP = L.map('map-canvas');
const STEP = 10;
const COUNT_DIGITS = 6;
const TOKIO_COORDS = {
  lat: '35.68378',
  lng: '139.75423',
};

const MAIN_PIN_ICON = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnhor: [26, 52],
});

const HOUSING_ICON = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnhor: [20, 40],
});

const MAIN_PIN_MARKER = L.marker(TOKIO_COORDS, {
  draggable: true,
  icon: MAIN_PIN_ICON,
});
const markers = [];

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(MAP);

const addMarker = (pin) => pin.addTo(MAP);
const mainMarkerPlace = addMarker(MAIN_PIN_MARKER);
const removeMarker = (pin) => pin.remove();

const getPinCoords = () => {
  const pinCoords = mainMarkerPlace.getLatLng();
  ADDRESS.value = `${pinCoords.lat.toFixed(
    COUNT_DIGITS,
  )}, ${pinCoords.lng.toFixed(COUNT_DIGITS)}`;
};
const addMainMarkerCoordinates = () => {
  ADDRESS.value = `${TOKIO_COORDS.lat}, ${TOKIO_COORDS.lng}`;
};
mainMarkerPlace.on('moveend', (evt) => {
  getPinCoords(evt.target);
});

const addSetView = (activeForm) => {
  MAP.on('load', () => {
    addMainMarkerCoordinates();
    mainMarkerPlace;
    activeForm();
  });
  MAP.setView(TOKIO_COORDS, STEP);
};

const addMarkers = (points, addCard) => {
  points.forEach((point) => {
    const marker = L.marker(point.location, {
      HOUSING_ICON,
    });

    marker.addTo(MAP).bindPopup(addCard(point)),
    {
      keepInView: true,
    };
    markers.push(marker);
  });
};

const removePins = () => {
  markers.forEach((marker) => MAP.removeLayer(marker));
};

export {
  addMarkers,
  addSetView,
  addMainMarkerCoordinates,
  mainMarkerPlace,
  removeMarker,
  addMarker,
  MAIN_PIN_MARKER,
  TOKIO_COORDS,
  removePins
};
