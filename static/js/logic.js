// Get your dataset: All Earthquakes from the past 7 days
// Use the URL of this JSON to pull in the data for the visualization: 
// https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson

// import data
// establish the link in a variable
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// create a map that plots all the earthquakes from your dataset based on their longitude and latitude
// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
let myMap = L.map("map", {
    center: [39.9612, -82.9988],
    zoom: 3.5
});

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


d3.json(url).then(function (data) {
    // set up array for the feature coordinates of each earthquake
    featCoord = []

    //loop through data.features to extract coordinates and earthquake magnitude
    for (let i = 0; i < data.features.length; i++) {

        //create an empty string to hold color denotations
        let color = "";

        //pull magnitude from the features length. geometry.corrdinates and is the 2nd (0, 1, 2) data point provided
        let geoCoord = data.features[i].geometry.coordinates[2];

        //set up conditions to determine color based on magnitude of the earthquake
        if (geoCoord > -10 && geoCoord < 10) {
            color = "#29cc5b";
        } else if (geoCoord >= 10 && geoCoord < 30) {
            color = "#36f4e6";
        } else if (geoCoord >= 30 && geoCoord < 50) {
            color = "#36b7f4";
        } else if (geoCoord >= 50 && geoCoord < 70) {
            color = "#4436f4";
        } else if (geoCoord >= 70 && geoCoord < 90) {
            color = "#a836f4";
        } else {
            color = "#f436ec";
        }
       
        coordAndMag = [
            //lat
            data.features[i].geometry.coordinates[1],
            //long
            data.features[i].geometry.coordinates[0],
            //mag
            data.features[i].geometry.coordinates[2],
        ];

        featCoord.push(coordAndMag[2]);
        L.circle(coordAndMag, {
            fillOpacity: .75,
            color: color,
            radius: Math.sqrt(Math.abs(geoCoord)) * 10000,
        })
            .bindPopup(
                `<h1>${data.features[i].properties.place}</h1> <hr> <h3>Magnitude * 10 = ${data.features[i].properties.mag * 10}</h3>`
            )
            .addTo(myMap);
    }

});


function Legend(map) {
    let legend = L.control({ position: "bottomright" });
    legend.onAdd = function (myMap) {
        let div = L.DomUtil.create("div", "legend");
        div.innerHTML += '<h3>Depth (km)</h3>';
        div.innerHTML += '<i style="background: #29cc5b"></i><span>-10 - 10</span><br>';
        div.innerHTML += '<i style="background: #36f4e6"></i><span>10 - 30</span><br>';
        div.innerHTML += '<i style="background: #36b7f4"></i><span>30 - 50</span><br>';
        div.innerHTML += '<i style="background: #4436f4"></i><span>50 - 70</span><br>';
        div.innerHTML += '<i style="background: #a836f4"></i><span>70 - 90</span><br>';
        div.innerHTML += '<i style="background: #f436ec"></i><span>90+</span><br>';
        return div;
    };
    legend.addTo(map);
}

Legend(myMap);

