const express = require('express');
const app = express();
require('dotenv/config');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
// http request
app.options('*', cors());

// for indentify post request json file format (Middleware)
app.use(bodyParser.json());
app.use(morgan('tiny'));

const api = process.env.API_URL;


// import routers
const shedOwnerRouter = require('./routes/shedOwners');
const vehiOwnerRouter = require('./routes/vehiOwners');

// set api routers
app.use(`${api}/shedown`, shedOwnerRouter);
app.use(`${api}/vehiown`, vehiOwnerRouter);


// connect db
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME
})
.then(() => {
    console.log('Database connection is ready......');
})
.catch((err) => {
    console.log(err);
})


app.listen(process.env.PORT, () => {
    console.log('Server is running !');
})