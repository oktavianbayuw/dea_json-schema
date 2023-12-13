const express = require("express");
const checkRoutes = require("./routes/checkRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/merchant", checkRoutes);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
