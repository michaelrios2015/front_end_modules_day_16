const express = require('express');
const path = require('path');
const Chance = require('chance');
const casual = require('casual');

const app = express();

const chance = new Chance();

console.log(casual.sentence);
console.log(chance.string());



// console.log(chance.sentence());
// this is the more usual thing
app.use('/dist', express.static(path.join(__dirname, 'dist')));
// app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));


// so we are doing things a bit differently and just sending one html file.... interesting
app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')));

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`));
