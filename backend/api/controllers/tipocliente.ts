import { Request, Response } from 'express';
import { TipoCliente } from '../config/sequelize';
var Sequelize = require('sequelize');
var moment = require('moment');


const Op = Sequelize.Op;

export var tipocliente_controller = {
    
    getAllTipoClientes: (req: Request, res: Response) => {
        TipoCliente.findAll().then((tipoclientes: any) => {
            // CODIGO DE PRUEBA
            let response = {
                message: "ok",
                content: tipoclientes
            };
            res.status(404).json(response);
        }).catch((error: any) => {
            console.log("error");
        })
    },
}