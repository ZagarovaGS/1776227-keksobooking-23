const MAP = L.map('map-canvas');
const STEP = 10;

const LAT_LNG_TOKIO = {
  lat: '35.652832',
  lng: '139.839478',
};

const MAIN_PIN_ICON = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnhor: [26, 52],
});

const HOUSING_ICON = L.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [40, 40],
  iconAnhor: [20, 40],
});

const MAIN_PIN_MARKER = L.marker(
  {
    lat: LAT_LNG_TOKIO.lat,
    lng: LAT_LNG_TOKIO.lng,
  },
  {
    draggable: true,
    icon: MAIN_PIN_ICON,
  }
);

const markers = [];

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(MAP);

const addMainMarker = (pin) => pin.addTo(MAP);

const addSetView = (activeForm) => {
  MAP.on('load', () => {
    addMainMarker(MAIN_PIN_MARKER);
    activeForm;
  });
  MAP.setView(
    {
      lat: 35.6998,
      lng: 139.81741,
    },
    STEP
  );
};

const addMarkers = (points, addCard) => {
  points.forEach((point) => {
    const { lat, lng } = point.location;

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        HOUSING_ICON,
      }
    );

    marker.addTo(MAP).bindPopup(addCard(point)),
      {
        keepInView: true,
      };
    markers.push(marker);
  });
  return markers;
};

export { addMarkers, addSetView };
