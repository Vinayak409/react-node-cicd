const express = require("express");
const app = express();
const path = require("path");

const PORT = 5000;

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/names", (req, res) => {
  res.send("Vinayak Chittora");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
