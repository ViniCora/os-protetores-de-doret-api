import express from 'express';
import controller from '../controller/itensSessão06Controller.js';

const app = express();

app.get('/itensSessao06/findAll', controller.findAll);


export { app as itensSessao06Router };