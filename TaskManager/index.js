const express = require("express");
const app = express();
const cors = require("cors");
// const mongoose = require("mongoose");
const MainRoute = require("./routes/main");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World" + req.params.id);
});

app.use("/api/v1/main", MainRoute);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
