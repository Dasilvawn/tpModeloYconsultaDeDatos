module.exports = (sequelize, DataTypes) => {
    const alias = "Movie"
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrment: true,
        },
        title: {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type: DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false,
        },
        awards: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: "0",
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        length: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true, 
        },
        genre_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: true, 
        },
    };
    const config = {
        tableName : "movies", //si el nombre de la tabla es el plural del nombre del modelo, no seria necesario decirle como se llama la tabla, pero SI, si la tabla tiene el nombre en otro idioma.
        timestamps: true, //si tiene marca de tiempo no es necesrio agregarselo, pero si NO tiene, si o si hay que marcarselo con un false.
        underscored: true // la marca de tiempo tiene un guion bajo, no esta con camelcase, si se usaria Camelcase, no seria necesario agregar esta linea.
    }
    const Movie = sequelize.define(alias, cols, config);

    return Movie;
};