const express = require('express');
const app =express();
const dotenv = require('dotenv')


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// routes
app.use(require('./routes/index.js'));


app.listen(process.env.PORT || 3000);
//console.log('escuchando en el puerto 3000',);
