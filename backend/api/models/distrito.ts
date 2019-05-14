import {Sequelize} from 'sequelize';

export var distrito_model = (sequelize:Sequelize,type:any)=>{
    var distrito_model = sequelize.define('PlcDistritos',
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
        tableName:'PlcDistritos'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return distrito_model;

}