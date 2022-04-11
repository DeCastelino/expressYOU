const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../images");
    },
    filename: function (req, file, cb) {
        console.log("File: ", file);
        console.log("Request: ", req.body);
        cb(null, Date.now() + "-" + file.originalname); // Making filename unique by prefixing timestamp to filename
    },
});

module.exports = {
    upload: multer({ storage: storage }),
};
