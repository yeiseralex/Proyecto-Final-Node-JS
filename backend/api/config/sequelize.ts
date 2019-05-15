import {cliente_model} from './../models/cliente';
import {departamento_model} from './../models/departamento';
import {distrito_model} from './../models/distrito';
import {documentoventa_model} from './../models/documentoventa';
import {documentoventadetalle_model} from './../models/documentoventadetalle';
import {espacio_model} from './../models/espacio';
import {estacionamiento_model} from './../models/estacionamiento';
import {ingreso_model} from './../models/ingreso';
import {marca_model} from './../models/marca';
import {producto_model} from './../models/producto';
import {provincia_model} from './../models/provincia';
import {servicio_model} from './../models/servicio';
import {tarifa_model} from './../models/tarifa';
import {tipocliente_model} from './../models/tipocliente';
import {tipodocumento_model} from './../models/tipodocumento';
import {tipoestacionamiento_model} from './../models/tipoestacionamiento';
import {tipovehiculo_model} from './../models/tipovehiculo';
import {vehiculo_model} from './../models/vehiculo';


const Sequelize = require('sequelize');

export const sequelize = new Sequelize('PlaceDBNode','sa','Pa$$word2019',{
    dialect: 'mssql',
    host: 'localhost',
    port: 1433,
    logging: false,
    dialectOptions: {
      requestTimeout: 30000,
      encrypt: true
    }
    // timezone:'-05:00',
    // logging: console.log
});

export const Cliente = cliente_model(sequelize,Sequelize);
export const Departamento = departamento_model(sequelize,Sequelize);
export const Distrito = distrito_model(sequelize,Sequelize);
export const DocumentoVenta = documentoventa_model(sequelize,Sequelize);
export const DocumentoVentaDetalle = documentoventadetalle_model(sequelize,Sequelize);
export const Espacio = espacio_model(sequelize,Sequelize);
export const Estacionamiento = estacionamiento_model(sequelize,Sequelize);
export const Ingreso = ingreso_model(sequelize,Sequelize);
export const Marca = marca_model(sequelize,Sequelize);
export const Producto = producto_model(sequelize,Sequelize);
export const Provincia = provincia_model(sequelize,Sequelize);
export const Servicio = servicio_model(sequelize,Sequelize);
export const tarifa = tarifa_model(sequelize,Sequelize);
export const TipoCliente = tipocliente_model(sequelize,Sequelize);
export const TipoDocumento = tipodocumento_model(sequelize,Sequelize);
export const TipoEstacionamiento = tipoestacionamiento_model(sequelize,Sequelize);
export const TipoVehiculo = tipovehiculo_model(sequelize,Sequelize);
export const Vehiculo = vehiculo_model(sequelize,Sequelize);

//En el modelo PlayaServicio va a crear un campo de nombre 'playa_id'
//este campo será la clave foranea que una PlayaServicio con Playa
// Cliente.belongsTo(TipoCliente, {foreignKey:'TipoClienteId'});
// PlayaServicio.belongsTo(Servicio, {foreignKey:'serv_id'});


// SlotPlaya.belongsTo(Playa,{foreignKey:'playa_id'});
// Playa.hasMany(SlotPlaya,{foreignKey:'playa_id'});




