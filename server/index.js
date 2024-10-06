import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from "./routes/posts.js";  // Import the router


const app = express();

app.use('/posts', postRoutes);

app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://pranavshimpi:Newjob%401@cluster0.o4ux6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

