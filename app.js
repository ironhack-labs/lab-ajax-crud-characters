const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.static("./"));
app.use(express.json());
app.use(express.urlencoded());

const routes = require("./routes")

app.use("/", routes);

app.listen(PORT, ()=> console.log(`App server running, listening on PORT ${PORT} ...`));