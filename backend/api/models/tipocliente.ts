import {Sequelize} from 'sequelize';

export var tipocliente_model = (sequelize:Sequelize,type:any)=>{
    var tipocliente_model = sequelize.define('PlcTipoClientes',
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
        tableName:'PlcTipoClientes'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return tipocliente_model;

}