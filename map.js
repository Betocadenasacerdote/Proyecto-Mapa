const tilesProvider = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
let myMap = L.map('myMap').setView([-0.225219, -78.5248], 13);

L.tileLayer(tilesProvider, {
maxZoom:18,
}).addTo(myMap)

let marker = L.marker([-0.2441, -78.5221]).addTo(myMap)
let marker2 = L.marker([-0.2683, -78.5405]).addTo(myMap)
let marker3 = L.marker([-0.2774, -78.5545]).addTo(myMap)

marker.bindPopup("<b>contagios septiembre 63<br>contagios agosto 89<br> contagios julio 109").openPopup();