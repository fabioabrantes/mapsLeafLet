const options = {
  dragging:false,
  touchZoom:false,
  doubleClickZoom:false,
  zoomControl:false,
}

const map = L.map('mapid',options).setView([-6.8896525,-38.5470457],17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const icon = L.icon({
  iconUrl: '../images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

L.marker([-6.8896525,-38.5470457],{icon}).addTo(map);

function selectImage(event){
  const button = event.currentTarget;
  // console.log(button, button.children);

  // remover o active de todas as iamgens pequenas e ficarão branquissada no css
  const buttons = document.querySelectorAll('.images button');

  buttons.forEach(butao =>{
    butao.classList.remove('active');
  });

  // atualizando a imagem maior. usuario clica na pequena e ela substitui a grande
  const image  = button.children[0];
  const imageMaior = document.querySelector('.orphanage-details > img');
  imageMaior.src = image.src;

  // no fim ativo somente a imagem que foi clicada
  button.classList.add('active');
}