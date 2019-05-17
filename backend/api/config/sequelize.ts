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

// para que funcione la conexion primero deben de crear la base de datos en SQLServer el sequalize creara las tablas

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
export const Tarifa = tarifa_model(sequelize,Sequelize);
export const TipoCliente = tipocliente_model(sequelize,Sequelize);
export const TipoDocumento = tipodocumento_model(sequelize,Sequelize);
export const TipoEstacionamiento = tipoestacionamiento_model(sequelize,Sequelize);
export const TipoVehiculo = tipovehiculo_model(sequelize,Sequelize);
export const Vehiculo = vehiculo_model(sequelize,Sequelize);

//En el modelo PlayaServicio va a crear un campo de nombre 'playa_id'
//este campo será la clave foranea que una PlayaServicio con Playa
TipoCliente.hasMany(Cliente, {foreignKey:'TipoClienteId'});

Distrito.hasMany(Provincia, {foreignKey:'ProvinciaId'});

DocumentoVentaDetalle.hasMany(DocumentoVenta, {foreignKey:'DocumentoVentaId'});
DocumentoVentaDetalle.hasMany(Servicio, {foreignKey:'ServicioId'});
DocumentoVentaDetalle.hasMany(Producto, {foreignKey:'ProductoId'});
DocumentoVentaDetalle.hasMany(Ingreso, {foreignKey:'IngresoId'});


DocumentoVenta.hasMany(Cliente, {foreignKey:'ClienteId'});
DocumentoVenta.hasMany(TipoDocumento, {foreignKey:'TipoDocumentoId'});
DocumentoVenta.hasMany(Estacionamiento, {foreignKey:'EstacionamientoId'});


Espacio.hasMany(Estacionamiento, {foreignKey:'EstacionamientoId'});

Estacionamiento.hasMany(Distrito, {foreignKey:'DistritoId'});
Estacionamiento.hasMany(TipoEstacionamiento, {foreignKey:'TipoEstacionamientoId'});


Ingreso.hasMany(Espacio, {foreignKey:'EspacioId'});
Ingreso.hasMany(Vehiculo, {foreignKey:'VehiculoId'});

Producto.hasMany(Marca, {foreignKey:'MarcaId'});

Provincia.hasMany(Departamento, {foreignKey:'DepartamentoId'});

Tarifa.hasMany(Estacionamiento, {foreignKey:'EstacionamientoId'});
Tarifa.hasMany(TipoVehiculo, {foreignKey:'TipoVehiculoId'});

Vehiculo.hasMany(TipoVehiculo, {foreignKey:'TipoVehiculoId'});






