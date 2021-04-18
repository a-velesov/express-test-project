import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileUpload from 'express-fileupload';
import dotenv from 'dotenv';

dotenv.config()

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload({}));
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true , useUnifiedTopology: true});
        app.listen(process.env.APP_PORT, () => console.log('server start ' + process.env.APP_PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();