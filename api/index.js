import express from 'express'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/user.js'
import postRoutes from './routes/post.js'
import cookieParser from 'cookie-parser'
import multer from 'multer'

const app = express();

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../blog-client/public/upload");
      console.log(file)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
        console.log('update file')
    },
});

const upload = multer({storage})

app.post("/api/upload", upload.single("file"), function(req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
})

app.use("/api/post", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)

app.listen(8800, () => {
    console.log("Connected!");
}
)