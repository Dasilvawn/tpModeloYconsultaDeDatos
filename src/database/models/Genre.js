module.exports = (sequelize, DataTypes) => {
    const alias = 'Genre';
    const cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrment: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        raking: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: "1",
        },
    };
    
    const config = {
        tableName : "genre",
        timestamps: true,
        underscored: true
    }
    const Genre = sequelize.define(alias, cols, config); //el orden de los parametros que recibe es importate

    return Genre;
};