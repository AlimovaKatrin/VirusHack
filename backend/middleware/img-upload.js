const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "avatars",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 200, height: 200, crop: "limit" }]
});
const parser = multer({ storage: storage });

module.exports = parser;
