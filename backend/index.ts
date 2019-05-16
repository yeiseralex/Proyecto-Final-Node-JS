import { cliente_router } from './api/routes/cliente';
import { departamento_router } from './api/routes/departamento';
import { distrito_router } from './api/routes/distrito';
import { documentoventa_router } from './api/routes/documentoventa';
import { documentoventadetalle_router } from './api/routes/documentoventadetalle';
import { espacio_router } from './api/routes/espacio';
import { estacionamiento_router } from './api/routes/estacionamiento';
import { ingreso_router } from './api/routes/ingreso';
import { marca_router } from './api/routes/marca';
import { producto_router } from './api/routes/producto';
import { provincia_router } from './api/routes/provincia';
import { servicio_router } from './api/routes/servicio';
import { tarifa_router } from './api/routes/tarifa';
import { tipocliente_router } from './api/routes/tipocliente';
import { tipodocumento_router } from './api/routes/tipodocumento';
import { tipoestacionamiento_router } from './api/routes/tipoestacionamiento';
import { tipovehiculo_router } from './api/routes/tipovehiculo';
import { vehiculo_router } from './api/routes/vehiculo';

import { sequelize } from './api/config/sequelize';
import { NextFunction, Request, Response } from 'express';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PUERTO = process.env.PORT || 3700;
// CONFIGURANDO EL CORS
app.use((req:Request,res:Response,next:NextFunction)=>{
    res.header('Access-Control-Allow-Origin','http://localhost:3700');
    res.header('Access-Control-Allow-Headers','Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods','GET, POST');
    res.header('Allow','GET, POST');
    next();
});

app.use('/api', cliente_router);
app.use('/api', departamento_router);
app.use('/api', distrito_router);
app.use('/api', documentoventa_router);
app.use('/api', documentoventadetalle_router);
app.use('/api', espacio_router);
app.use('/api', estacionamiento_router);
app.use('/api', ingreso_router);
app.use('/api', marca_router);
app.use('/api', producto_router);
app.use('/api', provincia_router);
app.use('/api', servicio_router);
app.use('/api', tarifa_router);
app.use('/api', tipocliente_router);
app.use('/api', tipodocumento_router);
app.use('/api', tipoestacionamiento_router);
app.use('/api', tipovehiculo_router);
app.use('/api', vehiculo_router);

app.listen(PUERTO, function () {
    console.log("Servidor corriendo correctamente en el puerto 3000");
    // force => true cada vez que el proyecto inicie,
    // se van a eliminar todas las tablas, contenido y relaciones 
    // que tengan, para crearse nuevamente.

    // force => false cada vez que el proyecto inicie,
    // no elmina ninguna tabla de la base de datos, sin embargo,
    // si tenemos una tabla recientemente creada.
    // la función sync, la crea en la base de datos.

    
    sequelize.sync({ force: false }).then(() => {
        console.log("Base de datos creada con éxito");
    }).catch((error:any) => {
        console.log(error);
        console.log("Error al crear la base de datos");
    })
});




