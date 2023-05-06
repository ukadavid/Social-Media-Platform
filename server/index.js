import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from 'url';
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import { register } from "./controllers/auth.js";



// Middleware Configurations

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan('common'))
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// File Storage Configurations

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/assets");
    }, 
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage})

// File Routes

app.post("/auth/register", upload.single("picture"), register);

// Routes
app.use("/auth", authRoutes)
app.use("/users", userRoutes);

// DB Setup

const PORT = process.env.PORT || 6001;

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`)
    })
}).catch((err) => {
    console.log(err)
})
