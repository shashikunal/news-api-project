const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static(__dirname + "/public"));

app.use(cors());

app.listen(5000, (err) => {
  if (err) throw err;
  console.log("server is running on port number 5000");
});
