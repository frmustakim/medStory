const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();

//Body-parser middleware
app.use(express.json());

//DB config
const db = config.get("mongoURI");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

//Connect to mongo
mongoose
  .connect(db, options)
  .then(() => console.log(`MongoDB Connected!`))
  .catch((err) => console.log(err));

//Use routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/prescriptions", require("./routes/api/prescriptions"));

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));
