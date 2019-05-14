import {Sequelize} from 'sequelize';

export var ingreso_model = (sequelize:Sequelize,type:any)=>{
    var ingreso_model = sequelize.define('PlcIngresos',
    {
        Id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        HoraIngreso:{
            type: type.DATE,
            allowNull: false
        },
        HoraSalida:{
            type: type.DATE,
            allowNull: false
        },
        PrecioFinal:{
            type: type.DECIMAL(18,2),
            allowNull: false
        },
        EstadoIngreso:{
            type: type.STRING(1),
            allowNull: false
        }
    },
    {
        timestamps:false,
        tableName:'PlcIngresos'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return ingreso_model;

}