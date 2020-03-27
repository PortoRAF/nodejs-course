const https = require("https");

const url =
  "https://api.darksky.net/forecast/ba6767b45e917880e905658425f510d4/40,-75";

const request = https.request(url, response => {
  let data = "";

  response.on("data", chunk => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", error => {
  console.log("Error:", error);
});

request.end();
