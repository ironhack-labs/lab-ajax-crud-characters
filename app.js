require("dotenv").config();
const { join } = require("path");

// App
const express = require("express");
const app = express();

// App settings
require("./config/views.config")(app);
require("./config/hbs.config");

app.use(express.static(join(__dirname, "public")));

// 👇 Start handling routes here
const index = require('./routes/index');
app.use('/', index);

const charRoutes = require("./routes/characters")
app.use('/celebrcharactersities', charRoutes);

module.exports = app;
