const db = require('../database/models')

module.exports = {
    list : (req, res) =>{
        db.Movie.findAll() // utilizo el nombre del alias(archivo dentro del modelo),me trae TODAS las columnas de la tabla Movie(en este caso)
         .then((movies)=>{ //utilizo la informacion como parametro del callback
            return res.render('moviesList',{
                movies
            })
         })
         .catch((err)=>console.log(err))// si hay errores en esta consulta(promesa) que me lo muestre por consola.
    },

    detail : (req,res) => {
        db.Movie.findByPk(req.params.id) //recibe como parametro el id del registro que quiero acceder. Aca busco UNA pelicula en particular.
        .then(movie=>{ //se pone el singular porque se pide una pelicula
            return res.render ('moviesDetail', {
                movie
            })
        })
        .catch((err)=>console.log(err))
    },
 
    new : (req, res)=>{
        db.Movie.findAll({
            order : [ //a order se le da un array, donde cada elemento es un array de un array
               ['release_date', 'DESC'] //adentro coloco un strin que va a ser referencia a la columna con la cual quiero ordenar y el DESC,si lo quiero que lo ordene por defecto, menor a may, no es necesario ponerlo dentro de un corchete.
               //[title] si quisiera que se ordenara por titulos
            ]
        })
           .then(movies=>{
            return res.render('newestMovies',{
                movies
            })
        })
        .catch((err)=>console.log(err))
    },

    recomended : (req, res)=>{
        db.Movie.findAll({
              order : [
               ['rating' , 'DESC']
            ],
            limit : 5
        })
        .then(movies=>{
            return res.render('recommendedMovies',{
                movies
            })
        })
        .catch((err)=>console.log(err))
    }

}