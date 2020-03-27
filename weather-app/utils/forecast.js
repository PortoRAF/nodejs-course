const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/ba6767b45e917880e905658425f510d4/" +
    latitude +
    "," +
    longitude;
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services.", undefined);
    } else if (response.body.error) {
      callback(response.body.error, undefined);
    } else {
      callback(undefined, {
        summary: response.body.daily.data[0].summary,
        temperature: response.body.currently.temperature,
        precipitationProbability: response.body.currently.precipProbability
      });
    }
  });
};

module.exports = forecast;
