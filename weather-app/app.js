const request = require("request");

const apiUrl = "https://api.darksky.net/forecast/";
const apiKey = "ba6767b45e917880e905658425f510d4";
const location = "-19.9876,-43.8463";
const unitOption = "units=auto"
const languageOption = "lang=pt"

const url = apiUrl + apiKey + "/" + location + "?" + unitOption + "&" + languageOption;

// request({ url: url, json: true }, (error, response) => {
//   const temperature = response.body.currently.temperature;
//   const precipProbability = response.body.currently.precipProbability;
//   console.log(response.body.daily.data[0].summary)
//   console.log("It is currently " + temperature + " degrees out.");
//   console.log("There is a " + precipProbability + "% chance of rain.");
// });

const geocodeURL = 
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Belo%20Horizonte.json?access_token=pk.eyJ1IjoicmFmcG9ydG8iLCJhIjoiY2s4OTJpa3pmMDJsZDNlbzFvMWwwZGVmNiJ9.Y3Ph57iW6J6oH91YVLhd2g"

request({ url: geocodeURL, json: true }, (error, response) => {
  console.log("Latitude: " + response.body.features[0].center[1])
  console.log("Longitude: " + response.body.features[0].center[0])
})