# leaflet-challenge

The instructions for this activity were broken into two parts:
    Part 1: Create the Earthquake Visualization
    Part 2: Gather and Plot More Data (Optional with no extra points earning)
    
My first task was to visualize an earthquake dataset. To do this, I needed to complete the following steps:

    - Get the dataset. To do so, I followed these steps:
    The USGS provides earthquake data in a number of different formats, updated every 5 minutes. I visited the USGS GeoJSON Feed page and chose a dataset to visualize. The following image is an example screenshot of what appeared when I visited this link:
    PICTURE
    
    - When I clicked a dataset (such as "All Earthquakes from the Past 7 Days"), I was be given a JSON representation of that data. I used the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:
    PICTURE

Then I imported and visualized the data by doing the following:

    - Used Leaflet, created a map that plotted all the earthquakes from my dataset based on their longitude and latitude.
    
    - My data markers needed to reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes appear larger, and earthquakes with greater depth appear darker in color. The depth of the earth was found to be the third coordinate for each earthquake.
PICTURE

I included popups that provides additional information about the earthquake when its associated marker is clicked and created a legend that provides context for my map data.
PICTURE


