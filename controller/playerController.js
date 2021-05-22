import { playerModel } from '../models/playerSchema.js';

const findAll = async (req, res) => {
 
   try {
     const atributes = await playerModel.find({});
     res.send(atributes);
   } catch (error) {
     res
       .status(500)
       .send({ message: error.message || 'Erro ao listar todos os atributos' });
     
   }
 };

const findAtributeByName = async (req, res) => {
   const nameReq = req.query.nome;
     
   /*  //condicao para o filtro no findAll
    var condition = name
      ? { name: { $regex: new RegExp(name), $options: 'i' } }
      : {}; */
  
    try {
      const atributes = await playerModel.find({'nome': nameReq});
      res.send(atributes);
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || 'Erro ao listar todos os atributos' });
      
    }
  };

  const updateVida = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{vida : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateMostrarTela = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{mostrar_tela : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateForca = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{força : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateValueAdicionar = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{pontos_adicionar : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateDestreza = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{destreza : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateCarisma = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{carisma : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateInteligente = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{inteligencia : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateConstituicao = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{constituicao : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateMira= async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{mira : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateOficio = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{oficio : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updatePercepcao = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{percepcao : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updatePoder = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{poder : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateSorte = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{sorte : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateLutar = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{lutar : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updatePrimeirosSocorros = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{primeiros_socorros : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateSanidade = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{sanidade : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateVidaTotal = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{vida_total : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateMunicaoAtual = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{munição_atual : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateMunicaoMaxima = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{munição_maxima : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };

  const updateArmaDado = async (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: 'Dados para atualizacao vazio',
      });
    }
  
    const id = req.params.id;

    const value = req.body.value;
  
    try {
      const newAtribute = await playerModel.findByIdAndUpdate(
        { _id: id },
        {$set :{arma_dados : value}},
        { new: true }
      );
      res.send(newAtribute);
    } catch (error) {
      res.status(500).send({ message: 'Erro ao atualizar o personagem de id: ' + id });
    }
  };


export default {findAll, findAtributeByName, updateVida, updateMostrarTela, updateForca, updateValueAdicionar ,updateDestreza, updateCarisma, updateInteligente, updateConstituicao, 
  updateMira, updateOficio, updatePercepcao, updatePoder, updateSorte, updateLutar, updatePrimeirosSocorros, 
  updateSanidade, updateVidaTotal, updateMunicaoAtual, updateMunicaoMaxima, updateArmaDado};