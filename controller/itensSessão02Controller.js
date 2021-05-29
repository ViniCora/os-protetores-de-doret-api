import { itensSessão02Model } from '../models/itensSessão02Schema.js';

const findAll = async (req, res) => {
 
   try {
     const itens = await itensSessão02Model.find({});
     res.send(itens);
   } catch (error) {
     res
       .status(500)
       .send({ message: error.message || 'Erro ao listar todos os atributos' });
     
   }
 };


export default {findAll};