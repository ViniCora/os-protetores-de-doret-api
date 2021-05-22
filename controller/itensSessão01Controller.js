import { itensSessão01Model } from '../models/itensSessão01Schema.js';

const findAll = async (req, res) => {
 
   try {
     const itens = await itensSessão01Model.find({});
     res.send(itens);
   } catch (error) {
     res
       .status(500)
       .send({ message: error.message || 'Erro ao listar todos os atributos' });
     
   }
 };


export default {findAll};