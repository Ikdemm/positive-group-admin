const multer = require('multer');

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, 'src/uploads');
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, req.body.name + "." + ext)
    }
})

/* 
    File filter to only accept images
**/

const fileFilter = (req, file, cb) => {
    // accept image files
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        // Reject other types of files
        cb(null, false)
    }
}

module.exports = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});