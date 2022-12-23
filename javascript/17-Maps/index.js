function initMap() {

  const posicion = {
    lat: 23.131200406837355,
    lng: -43.86277361662246
  }

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: posicion
  })

  markerTorreEiffel = new google.maps.Marker({
    position: {
      lat: 48.85848301906007,
      lng: 2.2944383822318732
    },
    map,
    title: "Posición de la Torre Eiffel"
  })

  markerDisneyland = new google.maps.Marker({
    position: {
      lat: 33.81230572207839,
      lng: -117.91889910108364
    },
    map,
    title: "Posición de Disneyland Park"
  })

  markerMachuPicchu = new google.maps.Marker({
    position: {
      lat: -13.1630367212794,
      lng: -72.54496290321441
    },
    map,
    title: "Posición de Machu Picchu"
  })
}