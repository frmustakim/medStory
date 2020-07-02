const express = require("express");
const mongoose = require("mongoose");

const app = express();

//Body-parser middleware
app.use(express.json());

//DB config
const db = require("./config/keys").mongoURI;
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
app.use("/api/users", require("./routes/api/users"));

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));
