const express = require("express");
const app = express();

const PORT = 5000;

app.get("/names", (req, res) => {
  res.send("Vinayak");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
