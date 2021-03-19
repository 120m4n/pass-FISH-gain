const findAutorById = (autores_array, id) => {

    let autor = autores_array.find(function(element, index) {
        if(element.id == id)
            return true;
    });

    return autor;

};

const findIndexById = (autores_array, id) => {

    let idx = autores_array.findIndex(function(element, index) {
        if(element.id == id)
            return true;
    });

    return idx;

};


const listOfIds = (autores_array) => {
    let indexs = autores_array.map((element)=>{
        return element.id;
    });

    return indexs;
}

const findLibroById = (libros_array, id) => {

    let libro = libros_array.find(function(element, index) {
        if(element.id == id)
            return true;
    });

    return libro;

};

const findLibroIndexById = (libros_array, id) => {

    let idx = libros_array.findIndex(function(element, index) {
        if(element.id == id)
            return true;
    });

    return idx;
};

const listOfLibrosIds = (libros_array) => {
    let indexs = libros_array.map((element)=>{
        return element.id;
    });

    return indexs;
};



class Libro {
    constructor(id, titulo, descripcion, anioPublicacion) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.anioPublicacion = anioPublicacion;
    }
  }

module.exports = {
    findAutorById,
    findIndexById,
    findLibroById,
    findLibroIndexById,
    listOfIds,
    listOfLibrosIds,
    Libro
};