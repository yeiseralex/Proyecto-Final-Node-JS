import {Sequelize} from 'sequelize';

export var tipodocumento_model = (sequelize:Sequelize,type:any)=>{
    var tipodocumento_model = sequelize.define('PlcTipoDocumentos',
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
        },
        Descripcion:{
            type: type.STRING(100),
            allowNull: false
        }
        
    },
    {
        timestamps:false,
        tableName:'PlcTipoDocumentos'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return tipodocumento_model;

}