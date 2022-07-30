const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const mainController = require("./Controllers/mainController");
app.use(express.json());
app.use(cors());

app.use("/blog", mainController);

app.listen(port, () => console.log("Server Running"));
