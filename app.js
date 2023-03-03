const index = require("./routes/index.routes");
app.use("/", index);

// Import and link the newly created file
const movieCharactersRoutes = require("./routes/movie-characters.routes");
app.use("/", movieCharactersRoutes);
 
