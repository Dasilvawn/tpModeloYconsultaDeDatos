const db = require('../database/models')

module.exports = {
    list : (req, res) =>{
        db.Movie.findAll() // utilizo el nombre del alias(archivo dentro del modelo),me trae TODAS las columnas de la tabla Movie(en este caso)
         .then((genres) =>{ //utilizo la informacion como parametro del callback
            return res.render('genresList',{
                genres
            })
         })
         .catch((err)=>console.log(err))// si hay errores en esta consulta(promesa) que me lo muestre por consola.
    },

    detail : (req,res) => {
        db.Movie.findByPk(req.params.id) //recibe como parametro el id del registro que quiero acceder. Aca busco UNA pelicula en particular.
        .then((genres)=>{ //se pone el singular porque se pide una pelicula
            return res.render ('genresDetail', {
                genres
            })
        })
        .catch((err)=>console.log(err))
    }
}