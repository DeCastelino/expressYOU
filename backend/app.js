const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbConnect = require("./db");
const router = require("./routes/routes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

dbConnect();

mongoose.connection.once("open", () => {
    app.listen(8000, () => {
        console.log("Server started on port 8000");
    });
});

app.use("/", router);
