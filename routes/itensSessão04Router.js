import express from 'express';
import controller from '../controller/itensSessão04Controller.js';

const app = express();

app.get('/itensSessao04/findAll', controller.findAll);


export { app as itensSessao04Router };