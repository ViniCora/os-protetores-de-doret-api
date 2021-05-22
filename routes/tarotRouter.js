import express from 'express';
import controller from '../controller/tarotController.js';

const app = express();

app.get('/tarot/findAll', controller.findAll);


export { app as tarotRouter };