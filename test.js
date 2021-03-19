const autores = require('./autores');
let id = '3';
let idx_array = autores.map( (autor)=>{
    return autor.id;
} )

console.log(idx_array);

if (idx_array.indexOf(id) > -1) {
    //el autor existe en el arreglo
    console.log('Existe')

}else{
    console.log('ErrorHandler_404');  
}


var autor = autores.find(function(autor, index) {
	if(autor.id == id)
		return true;
});

console.log(autor);
