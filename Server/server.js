const express = require('express');
const path = require('path');
let app = express();

//app.get('/', (req, res) => {
   // res.sendFile(path.join(__dirname, '../public/index.html'));
//})

//app.get('/css/style.css', (req, res) => {
   // res.sendFile(path.join(__dirname, '../public/css/style.css'));
//})

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);