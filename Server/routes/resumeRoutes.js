import express from "express";
import protect from "../middlewares/authMiddleware.js";
import { createResume, updateResume } from "../controllers/resumeController.js";
import upload from "../controllers/multer.js";




const resumeRouter = express.Router();

resumeRouter.post('/create', protect, createResume);
resumeRouter.put('/update', upload.single('image'), protect, updateResume);