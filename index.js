const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb+srv://easydel:easydeldev@cluster0.i3eml.mongodb.net/easydel?retryWrites=true&w=majority', mongooseOptions);

const userController = require('./controllers/user');
const pickupController = require('./controllers/pickup');

app.use(cors());
app.use(express.json());
app.use('/users', userController);
app.use('/pickups', pickupController);

app.listen(4000, () => {
    console.log('Server listening to port 4000');
});
