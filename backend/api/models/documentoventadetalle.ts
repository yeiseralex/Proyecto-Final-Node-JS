import {Sequelize} from 'sequelize';

export var documentoventadetalle_model = (sequelize:Sequelize,type:any)=>{
    var documentoventadetalle_model = sequelize.define('PlcDocumentoVentaDetalles',
    {
        Id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        Cantidad:{
            type: type.INTEGER,
            allowNull: false
        },
        Precio:{
            type: type.DECIMAL(18,2),
            allowNull: false
        },
        ValorParcial:{
            type: type.DECIMAL(18,2),
            allowNull: false
        },
        PrecioParcial:{
            type: type.DECIMAL(18,2),
            allowNull: false
        }
    },
    {
        timestamps:false,
        tableName:'PlcDocumentoVentaDetalles'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return documentoventadetalle_model;

}