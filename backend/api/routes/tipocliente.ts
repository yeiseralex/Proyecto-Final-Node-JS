import { Router } from 'express';
import { tipocliente_controller } from '../controllers/tipocliente';


export var tipocliente_router = Router();

tipocliente_router.get('/cliente/getall',tipocliente_controller.getAllTipoClientes);