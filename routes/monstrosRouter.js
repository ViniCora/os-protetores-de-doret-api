import express from 'express';
import controller from '../controller/monstrosController.js';

const app = express();

app.get('/monstros/findAll', controller.findAll);


export { app as monstrosRouter };