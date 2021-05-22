import express from 'express';
import controller from '../controller/itensSessão01Controller.js';

const app = express();

app.get('/itensSessao01/findAll', controller.findAll);


export { app as itensSessao01Router };