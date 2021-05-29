import express from 'express';
import controller from '../controller/itensSessão02Controller.js';

const app = express();

app.get('/itensSessao02/findAll', controller.findAll);


export { app as itensSessao02Router };