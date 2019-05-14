import {Sequelize} from 'sequelize';

export var cliente_model = (sequelize:Sequelize,type:any)=>{
    var cliente_model = sequelize.define('PlcClientes',
    {
        Id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        Nombres:{
            type: type.STRING(50),
            allowNull: false
        },
        APaterno:{
            type: type.STRING(50),
            allowNull: false
        },
        AMaterno:{
            type: type.STRING(50),
            allowNull: false
        },
        NroDocumento:{
            type: type.STRING(12),
            allowNull: false
        },
        TipoDocumento:{
            type: type.STRING(1),
            allowNull: false
        },
        Telefono:{
            type: type.STRING(12),
            allowNull: false
        },
        Email:{
            type: type.STRING(12),
            allowNull: false
        }
    },
    {
        timestamps:false,
        tableName:'PlcClientes'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return cliente_model;

}