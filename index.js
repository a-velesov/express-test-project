import express from 'express';
import mongoose from 'mongoose';

const PORT = 5000;

const DB_URL = `mongodb+srv://user:user@cluster0.ihdgg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(express.json())

app.post('/', (req, res) => {
    res.status(200).json('Server work')
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useNewUrlParser: true , useUnifiedTopology: true});
        app.listen(PORT, () => console.log('server start ' + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();