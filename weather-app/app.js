const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("belo horizonte", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

forecast(-19.9227, -43.9451, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
