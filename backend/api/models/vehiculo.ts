import {Sequelize} from 'sequelize';

export var vehiculo_model = (sequelize:Sequelize,type:any)=>{
    var vehiculo_model = sequelize.define('PlcVehiculos',
    {
        Id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        Placa:{
            type: type.STRING(20),
            allowNull: false

        },
        Modelo:{
            type: type.STRING(50),
            allowNull: true
        },
        Anio:{
            type: type.STRING(4),
            allowNull: true
        }     
    },
    {
        timestamps:false,
        tableName:'PlcVehiculos'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return vehiculo_model;

}