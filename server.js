const express = require('express');

const bodyParser = require('body-parser');

const mysql = require('mysql');

const fs = require('fs');

const connection = require('./database');

 

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

 

app.get('/', (req, res) => {

    fs.readFile('./form.html', 'utf8', (err, data) => {

        if (err) throw err;

        res.send(data);

    });

});

 

app.post('/submit-form', (req, res) => {

    const name = req.body.name;

    const phone = req.body.phone;

    const query = `INSERT INTO forms (name, phone) VALUES ('${name}', '${phone}')`;

    connection.query(query, (error, results) => {

        if (error) throw error;

        res.send(`Form data submitted successfully! <a href="/" class="button">Go back to homepage</a>`);

    });

});

 

app.listen(3000, () => {

    console.log('Server started on port 3000');

});