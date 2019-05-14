import {Sequelize} from 'sequelize';

export var estacionamiento_model = (sequelize:Sequelize,type:any)=>{
    var estacionamiento_model = sequelize.define('PlcEstacionamientos',
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
        Direccion:{
            type: type.STRING(100),
            allowNull: false
        },
        Ruc:{
            type: type.STRING(11),
            allowNull: false
        },
        HoraApertura:{
            type: type.DATE,
            allowNull: false
        },
        HoraCierre:{
            type: type.DATE,
            allowNull: false
        },
        Telefono:{
            type: type.STRING(12),
            allowNull: false
        },
        Capacidad:{
            type: type.INTEGER,
            allowNull: false
        }
    },
    {
        timestamps:false,
        tableName:'PlcEstacionamientos'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return estacionamiento_model;

}