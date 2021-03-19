const autores = require('./autores');
let id = '3';

const {listOfIds } = require('./funciones');

const indexs = listOfIds(autores);
Math.max(indexs)
console.log(Math.max.apply(Math, indexs));