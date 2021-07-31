import { itensSessão10Model } from '../models/itensSessão10Schema.js';

const findAll = async (req, res) => {
 
   try {
     const itens = await itensSessão10Model.find({});
     res.send(itens);
   } catch (error) {
     res
       .status(500)
       .send({ message: error.message || 'Erro ao listar todos os atributos' });
     
   }
 };


export default {findAll};