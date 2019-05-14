import {Sequelize} from 'sequelize';

export var producto_model = (sequelize:Sequelize,type:any)=>{
    var producto_model = sequelize.define('PlcProductos',
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
        },
        PrecioUnitario:{
            type: type.DECIMAL(18,2),
            allowNull: false
        }
    },
    {
        timestamps:false,
        tableName:'PlcProductos'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return producto_model;

}