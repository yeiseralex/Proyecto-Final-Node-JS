import { Request, Response } from 'express';
import { Cliente} from './../config/sequelize';
var Sequelize = require('sequelize');
var moment = require('moment');

const Op = Sequelize.Op;

export var cliente_controller = {

    // getAllClientes:(req:Request,res:Response)=>{
    //     Cliente.findAll({
    //         include:[
    //             {
    //                 model:Cliente,
    //             }
    //         ],
    //     }).then((respuesta:any)=>{
    //         let response = {
    //             message:"ok",
    //             content:respuesta
    //         }
    //         res.status(200).json(response);
    //     });
    // }

}