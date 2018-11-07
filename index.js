'use strict';

const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
console.log('Here we come!');
console.log(('Niceeeee'));
res.send('Hello World');
})
app.listen(3000)
