const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const users = require("./routes/users");

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.HTTP_PORT = process.env.HTTP_PORT || 3000;

const setupAppRoutes =
  process.env.NODE_ENV === "development"
    ? require("./middlewares/development")
    : require("./middlewares/production");

app.set("env", process.env.NODE_ENV);

// application routes
setupAppRoutes(app);
app.use("/api/users", users);

app.listen(process.env.HTTP_PORT, () =>
  console.log(`Server running on port ${process.env.HTTP_PORT}`)
);
