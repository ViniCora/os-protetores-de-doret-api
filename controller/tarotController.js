import { tarotModel } from '../models/tarotSchema.js';

const findAll = async (req, res) => {
 
   try {
     const itens = await tarotModel.find({});
     res.send(itens);
   } catch (error) {
     res
       .status(500)
       .send({ message: error.message || 'Erro ao listar todos os atributos' });
     
   }
 };


export default {findAll};