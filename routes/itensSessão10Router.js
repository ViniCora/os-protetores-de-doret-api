import express from 'express';
import controller from '../controller/itensSessão10Controller.js';

const app = express();

app.get('/itensSessao10/findAll', controller.findAll);


export { app as itensSessao10Router };