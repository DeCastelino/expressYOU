const mongoose = require("mongoose");

const dbConnect = async () => {
    const DB_URI =
        "mongodb+srv://daryll:daryll123@express-you-cluster.jss28.mongodb.net/express-you?retryWrites=true&w=majority";
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the database");
    } catch (err) {
        console.log(err);
    }
};

module.exports = dbConnect;
