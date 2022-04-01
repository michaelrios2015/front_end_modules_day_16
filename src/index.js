// i need to confiure my package json commands slightly differently 

// so here webpack is letting us bring this in just like we do on the backend (node)
// but latter on we will bring it in slightly differently I have no idea why 
const Chance = require('chance');


const chance = new Chance();
// so this was freaking out but apperntly a webpack configuration with node
// fs: 'empty' will solve it 
// import casual from 'casual';

// so this is a pretty nifty way of creating an array of 50 black things and
// then filling it with company names
const departments = new Array(50).fill('').map(_=> chance.company());

console.log(departments)
