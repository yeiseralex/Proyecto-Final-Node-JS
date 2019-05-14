import {Sequelize} from 'sequelize';

export var departamento_model = (sequelize:Sequelize,type:any)=>{
    var departamento_model = sequelize.define('PlcDepartamentos',
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
        }
    },
    {
        timestamps:false,
        tableName:'PlcDepartamentos'
    });

    // Aquí se declaran las funciones de Modelo(o de clase)

    return departamento_model;

}