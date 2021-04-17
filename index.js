import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = 5000;

const DB_URL = `mongodb+srv://user:user@cluster0.ihdgg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use('/api', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useNewUrlParser: true , useUnifiedTopology: true});
        app.listen(PORT, () => console.log('server start ' + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();