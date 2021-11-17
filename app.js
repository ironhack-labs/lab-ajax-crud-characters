require("dotenv").config();
const { join } = require("path");

// App
const express = require("express");
const app = express();

// App settings
require("./config/views.config")(app);
require("./config/hbs.config");

app.use(express.static(join(__dirname, "..", "public")));

// Routes index
const routes = require("./routes/index.routes");
app.use('/', routes);

module.exports = app;
