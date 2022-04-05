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

let departments, classMap;

// we are checking local storage to see if these exist if they do we parse them to turn them back into objects
departments = JSON.parse(window.localStorage.getItem('departments'));
classMap = JSON.parse(window.localStorage.getItem('classMap'));


// so if we aren't able to get department or classMap from local storage we will make them and put them in local storage
// this should only 
if (!departments || !classMap ){

    departments = new Array(50).fill('').map(_=> chance.company());
    // localstorage seems to be an object (everything in javascript is an object maybe)
    // once it goes into local storage it is converted to a string but stringfy means it can be conevreted back into
    // whatever it was 
    window.localStorage.setItem('departments', JSON.stringify(departments));

    // so this is a reducer which I don't really understand as well as I should
    // it is iterating over departments it is putting them in an object as the key field and making their value and empty array
    // I can see what it is doing and if I end up using javascipt a lot will need to learn it better 
    classMap = departments.reduce((acc, department) => {
        // that is an impresive bit of stringing together functions
        acc[department] = new Array(chance.integer({min:1, max:3})).fill('-').map(_ => chance.word());
        // if you don't return it, it wont work.. wonder if it is recursive... could be totally different
        return acc;
    }, {});
    window.localStorage.setItem('classMap', JSON.stringify(classMap));

}

// this is just how you export in node I believe
// it looks like we are just taking the functions we want and putting them in an object and exporting that 
module.exports = {
    departments,
    classMap
}