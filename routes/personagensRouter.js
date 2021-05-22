import express from 'express';
import controller from '../controller/personagensController.js';

const app = express();

app.get('/personagens/findAll', controller.findAll);


export { app as personagensRouter };