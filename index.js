const express = require('express');
const { handleError } = require('./error');
const validarAutor = require('./middelwares').validarAutor;
const validarLibro = require('./middelwares').validarLibro;

const {findAutorById, findIndexById, findLibroById, findLibroIndexById, Libro} = require('./funciones');
const {listOfIds, listOfLibrosIds} = require('./funciones');

const app = express();
const autores = require('./autores');
const PORT = process.env.APP_PORT || 3000;

app.use(express.json());



app.get('/autores', (req, res) => {
    res.status(200);
    res.json(autores);
});

app.post('/autores', (req, res) => {
    const autor = req.body;
    
    const indexs = listOfIds(autores);

    autor.id = (indexs.length > 0 ) ? Math.max.apply(Math, indexs)+1 : 1   ;
    autores.push(autor);
    res.status(201);
    res.json(autor);

});

app.get('/autores/:id([0-9]+)', validarAutor, (req, res) => {
    let id = req.params.id;


    let autor = findAutorById(autores, id);
    res.json(autor);
});



app.put('/autores/:id([0-9]+)', validarAutor, (req, res) => {
    let id = req.params.id;
    let {nombre, apellido, fechaDeNacimiento} = req.body;

    let autor = findAutorById(autores, id);
    autor.nombre = nombre ? nombre : autor.nombre;
    autor.apellido = apellido ? apellido : autor.apellido;
    autor.fechaDeNacimiento = fechaDeNacimiento ? fechaDeNacimiento : autor.fechaDeNacimiento;

    res.json(autor);
});

app.delete('/autores/:id([0-9]+)', validarAutor, (req, res) => {
    let id = req.params.id;
    let idx = findIndexById(autores, id);
    autores.splice(idx, 1);
    res.json({message:`index: ${idx}  eleminado con exito `});
});

app.get('/autores/:id([0-9]+)/libros', validarAutor, (req, res) => {
    let id = req.params.id;


    let autor = findAutorById(autores, id);
    res.json(autor.libros);
});

app.post('/autores/:id([0-9]+)/libros', validarAutor, (req, res) => {
    let id = req.params.id;
    const {titulo, descripcion, anioPublicacion} = req.body;
    let autor = findAutorById(autores, id);
    let libros = autor.libros;
    let indexs = listOfLibrosIds(libros);


    id_libro = (indexs.length > 0 ) ? Math.max.apply(Math, indexs)+1 : 1   ;

    let libro = new Libro(id_libro, titulo, descripcion, anioPublicacion);
    
    libros.push(libro);
    res.status(201);
    res.json(libro);

});

app.get('/autores/:id([0-9]+)/libros/:idLibro([0-9]+)', validarAutor, validarLibro, (req, res) => {
    let id = req.params.id;
    let idLibro = req.params.idLibro;
    let autor = findAutorById(autores, id);
    let libros = autor.libros;
    let libro = findLibroById(libros, idLibro);

    
    res.status(200);
    res.json(libro);

});


app.put('/autores/:id([0-9]+)/libros/:idLibro([0-9]+)', validarAutor, validarLibro, (req, res) => {
    let id = req.params.id;
    let idLibro = req.params.idLibro;
    let {titulo, descripcion, anioPublicacion} = req.body;



    let autor = findAutorById(autores, id);
    let libros = autor.libros;
    let libro = findLibroById(libros, idLibro);

    libro.titulo            =   titulo ? titulo : libro.titulo;
    libro.descripcion       =   descripcion ? descripcion : libro.descripcion;
    libro.anioPublicacion   =   anioPublicacion ? anioPublicacion : libro.anioPublicacion;

    
    res.status(201);
    res.json(libro);

});


app.delete('/autores/:id([0-9]+)/libros/:idLibro([0-9]+)', validarAutor, validarLibro, (req, res) => {
    let id = req.params.id;
    let idLibro = req.params.idLibro;

    let autor = findAutorById(autores, id);
    let libros = autor.libros;
    let idx = findLibroIndexById(libros, idLibro);

    libros.splice(idx, 1);
    res.json({message:`index: ${idx}  eleminado con exito `});
});


app.use((err, req, res, next) => {
    handleError(err, res);
});

app.listen(3000, ()=>{
    console.log(`Server respond on port ${PORT}`)
});