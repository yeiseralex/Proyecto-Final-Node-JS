import {Sequelize} from 'sequelize';

export var provincia_model = (sequelize:Sequelize,type:any)=>{
    var provincia_model = sequelize.define('PlcProvincias',
    {
        Id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        Nombre:{
            type: type.STRING(50),
            allowNull: false
        }
    },
    {
        timestamps:false,
        tableName:'PlcProvincias'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return provincia_model;

}