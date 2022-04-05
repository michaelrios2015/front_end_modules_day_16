// and this is how we import the functions
const { departments, classMap } = require('./data');

// so importing the render functiom
const render = require('./render');

// so we give ourselves a way to attch to thge html... later on this will pretty much be the only thing in 
// the html  
const departmentList = document.querySelector('#department-list')

// console.log(departments)

// console.log(classMap)

// getting the hash number, multiply by one to make sure it's a number
// ok so the const seemed to have stooped the curr from changinging
let curr = window.location.hash.slice(1)*1;
console.log(curr);


// here we call it and now need to pass in the varibles (?? or just stuff it needs)
// putting it in another function to dry things out
const _render = ()=> {
    render({departments, classMap, departmentList, curr});
};

_render();

// so now it is listening for a hash change
window.addEventListener('hashchange', ()=> {
    // this had been a different current
    curr = window.location.hash.slice(1)*1;
    console.log(curr);
    _render();
});
