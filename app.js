const express = require('express');
const app = express();
require('dotenv/config');

const api = process.env.API_URL;

app.use(express.json());

app.get(`${api}/`, (req, res) => {
    res.send('<h1>Hello there</h1>');
})

app.listen(process.env.PORT, () => {
    console.log('Server is running !');
})