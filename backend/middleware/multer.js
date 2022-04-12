const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./images");
    },
    filename: function (req, file, cb) {
        cb(null, req.body.name);
    },
});

module.exports = {
    upload: multer({ storage: storage }),
};
