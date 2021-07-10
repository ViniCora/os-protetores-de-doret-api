import express from 'express';
import controller from '../controller/itensSessão08Controller.js';

const app = express();

app.get('/itensSessao08/findAll', controller.findAll);


export { app as itensSessao08Router };