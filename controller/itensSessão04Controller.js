import { itensSessão04Model } from '../models/itensSessão04Schema.js';

const findAll = async (req, res) => {
 
   try {
     const itens = await itensSessão04Model.find({});
     res.send(itens);
   } catch (error) {
     res
       .status(500)
       .send({ message: error.message || 'Erro ao listar todos os atributos' });
     
   }
 };


export default {findAll};