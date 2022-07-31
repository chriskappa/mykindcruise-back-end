const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
const mainController = require("./Controllers/mainController");
app.use(express.json()); //On Each Request has to be JSON
app.use(cors()); //Use Cors for the requests

app.use("/blog", mainController);

app.listen(process.env.PORT || port, () => console.log("Server Running"));
