import {Sequelize} from 'sequelize';

export var marca_model = (sequelize:Sequelize,type:any)=>{
    var marca_model = sequelize.define('PlcMarcas',
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
        },
        Alias:{
            type: type.STRING(20),
            allowNull: false
        }
    },
    {
        timestamps:false,
        tableName:'PlcMarcas'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return marca_model;

}