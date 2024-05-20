import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
import streamifier from 'streamifier';

// .env faylidan o'qish uchun
dotenv.config();

// Cloudinary konfiguratsiyasi
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const port = process.env.PORT || 3000;

// Multer sozlamalari
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Cloudinary'ga yuklash funktsiyasi
export const uploadToCloudinary = (buffer: Buffer): Promise<any> => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
            if (result) {
                resolve(result);
            } else {
                reject(error);
            }
        });
        streamifier.createReadStream(buffer).pipe(stream);
    });
};

