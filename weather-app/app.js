const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv.slice(2);

if (process.argv.length > 2) {
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }

    // const { latitude, longitude, location } = data;

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
} else {
  console.log("Please provide an address.");
}
