require ('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME, //estas credenciales al ser datos sencibles se guardan en variables de entorno (.env)
    "password": process.env.DB_PASSWORD, //nombre de la base de datos
     "database": process.env.DB_DATABASE, //se utiliza si no tenemos el mismo nombre en la base de datos, todos los participantes del proyecto.
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
