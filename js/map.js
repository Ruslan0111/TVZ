var mymap = L.map('map').setView([41.333038, 69.291469], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicnVzbGFuMDExMSIsImEiOiJja29kNXR4NG0wMXEzMnZtbmt0eGtkY3M0In0.tv-Y5EGdxkCIaZEXObIhew'
}).addTo(mymap);

var marker = L.marker([41.333038, 69.291469]).addTo(mymap);