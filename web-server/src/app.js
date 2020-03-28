const path = require("path");
const express = require("express");

const app = express();

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Weather",
    author: "Renato Porto"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    author: "Renato Porto"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    helpText: "This is a help message"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Nice weather",
    location: "Mississippi"
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
