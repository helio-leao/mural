const PORT = 5000;

const express = require('express');
const apiRoute = require('./routes/api');

const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', apiRoute);
app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, () => {
    console.log('Console running on port', PORT);
})