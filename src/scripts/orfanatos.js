// L.mpa cria o map e esse L veio da importação do LeafLet
// setView recebe latitude e longitude e zoom
const map = L.map('mapid').setView([-6.8896525,-38.5470457],17);

// adiciona o tipo de map que pode ser street,topo https://leaflet-extras.github.io/leaflet-providers/preview/
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// cria uma icone
const icon = L.icon({
  iconUrl: '../images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// aqui cria um mapa
const popup = L.popup({
  closeButton: false,
  minWidth:240,
  minHeight:240,
  className: 'map-popup'
}).setContent(`IFPB cajazeiras <a href="orphanage.html?id=1" 
class="choose-orphanage"><img src="../images/arrow-white.svg" > </a>`);

// adiciona o icone no marker depois adiciona o marker no map e depois amarrar o popup ao marker
L.marker([-6.8896525,-38.5470457],{icon}).addTo(map).bindPopup(popup);