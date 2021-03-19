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
    Libro
};