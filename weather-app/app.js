const request = require("request");

const weatherApiURL = "https://api.darksky.net/forecast/";
const weatherApiKey = "ba6767b45e917880e905658425f510d4";
const location = "-19.9876,-43.8463";
const unitOption = "units=auto";
const languageOption = "lang=pt";
const weatherURL =
  weatherApiURL +
  weatherApiKey +
  "/" +
  location +
  "?" +
  unitOption +
  "&" +
  languageOption;

request({ url: weatherURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service.");
  } else if (response.body.error) {
    console.log(response.body.error);
  } else {
    console.log(
      response.body.daily.data[0].summary +
        " It is currently " +
        response.body.currently.temperature +
        " degrees out. There is a " +
        response.body.currently.precipProbability +
        "% chance of rain."
    );
  }
});

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Belo%20Horizonte.json?access_token=pk.eyJ1IjoicmFmcG9ydG8iLCJhIjoiY2s4OTJpa3pmMDJsZDNlbzFvMWwwZGVmNiJ9.Y3Ph57iW6J6oH91YVLhd2g";

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location service.");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try a new search.");
  } else {
    console.log("Latitude: " + response.body.features[0].center[1]);
    console.log("Longitude: " + response.body.features[0].center[0]);
  }
});
