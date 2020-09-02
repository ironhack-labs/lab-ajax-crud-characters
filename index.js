const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
