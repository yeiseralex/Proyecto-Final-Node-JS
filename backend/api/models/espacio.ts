import {Sequelize} from 'sequelize';

export var espacio_model = (sequelize:Sequelize,type:any)=>{
    var espacio_model = sequelize.define('PlcEspacios',
    {
        Id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        Numero:{
            type: type.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps:false,
        tableName:'PlcEspacios'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return espacio_model;

}