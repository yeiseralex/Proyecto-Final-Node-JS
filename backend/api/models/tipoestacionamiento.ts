import {Sequelize} from 'sequelize';

export var tipoestacionamiento_model = (sequelize:Sequelize,type:any)=>{
    var tipoestacionamiento_model = sequelize.define('PlcTipoEstacionamientos',
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
        tableName:'PlcTipoEstacionamientos'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return tipoestacionamiento_model;

}