import {Sequelize} from 'sequelize';

export var tarifa_model = (sequelize:Sequelize,type:any)=>{
    var tarifa_model = sequelize.define('PlcTarifas',
    {
        Id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        TipoTiempo:{
            type: type.STRING(1),
            allowNull: false

        },
        Precio:{
            type: type.DECIMAL(18,2),
            allowNull: false
        },
        Cantidad:{
            type: type.INTEGER,
            allowNull: false
        }
        
    },
    {
        timestamps:false,
        tableName:'PlcTarifas'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return tarifa_model;

}