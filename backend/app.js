require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbConnect = require("./db");
const router = require("./routes/routes");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));

dbConnect();

mongoose.connection.once("open", () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server started on http://localhost:${process.env.PORT}`);
    });
});

app.use("/api/", router);
