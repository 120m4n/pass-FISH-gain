const { ErrorHandler } = require('./error');
const autores = require('./autores');
const {findAutorById } = require('./funciones');

const middelwares = {

    validarAutor: (req, res, next) => {
        let id = req.params.id;

        let autor = autores.find(function(autor, index) {
            if(autor.id == id)
                return true;
        });


        if (autor) {
            //el autor existe en el arreglo
            next();
        }else{
          throw new ErrorHandler(404, "El autor No existe en el arreglo");  
        }
    },

    validarLibro: (req, res, next) => {
        let id = req.params.id;
        let idLibro = req.params.idLibro;
        let libros = findAutorById(autores, id).libros;

        let libro = libros.find( (libro, index) => {
            if(libro.id == idLibro)
                return true; 
        });

        if (libro) {
            //el libro existe en el arreglo
            next();
        }else{
            throw new ErrorHandler(404, "El libro No existe en el arreglo");  
        }

    },


    validarUsuario:  (req, res, next) => {
        if (req.body.nombre == null) {
            //res.json('Usuario Invalido');
            throw new ErrorHandler(404, 'Missing required email and password fields')
        }else{
            next();
        }

    }


}


module.exports = middelwares;