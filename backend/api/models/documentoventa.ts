import {Sequelize} from 'sequelize';

export var documentoventa_model = (sequelize:Sequelize,type:any)=>{
    var documentoventa_model = sequelize.define('PlcDocumentoVentas',
    {
        Id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        Serie:{
            type: type.STRING(10),
            allowNull: false
        },
        Numero:{
            type: type.STRING(20),
            allowNull: false
        },
        FechaEmision:{
            type: type.DATE,
            allowNull: false
        },
        TipoMoneda:{
            type: type.STRING(3),
            allowNull: false
        },
        Referencia:{
            type: type.STRING(100),
            allowNull: true
        },
        TotalValorVenta:{
            type: type.DECIMAL(18,2),
            allowNull: false
        },
        TotalVenta:{
            type: type.DECIMAL(18,2),
            allowNull: false
        },
        TipoVenta:{
            type: type.STRING(1),
            allowNull: false
        }
    },
    {
        timestamps:true,
        tableName:'PlcDocumentoVentas'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return documentoventa_model;

}