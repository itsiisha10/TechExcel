//image we get rom the fewd then we paste ti to the cloudinaryUpload.js to cloud wesave from upload that is why we have created the files ```javascript
import multer from "multer";

// Store uploaded images temporarily in memory
const storage = multer.memoryStorage();

// Configure Multer
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, // Maximum 5 MB
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            cb(new Error("Only image files are allowed!"), false);
        }
    },
});

export default upload;

