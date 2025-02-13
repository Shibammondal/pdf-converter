const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 5000;

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Save files in 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name
    }
});

const upload = multer({ storage: storage });

app.use(express.static("public"));

// API route to handle file upload
app.post("/upload", upload.single("file"), (req, res) => {
    if (!req.file) {
        return res.status(400).send("No file uploaded.");
    }
    res.send({ message: "File uploaded successfully", filePath: req.file.path });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
