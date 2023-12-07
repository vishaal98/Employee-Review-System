const express = require("express");
const app = express();
const db = require("./configs/database");
require("dotenv").config();

app.listen(process.env.PORT || 5000, (err) => {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${process.env.PORT}`);
});
