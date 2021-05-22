import express from 'express';
import controller from '../controller/npcController.js';
import { npcModel } from '../models/npcSchema.js';

const app = express();

app.get('/npc/', controller.findAll);

app.post('/npc/',(req, res) => {
    
    try {
      const personagem = new npcModel(
          {
              nome: req.body.nome,
              oficio_personagem: req.body.oficio_personagem,
              nascimento: req.body.nascimento,
              força: req.body.força,
              destreza: req.body.destreza,
              carisma: req.body.carisma,
              inteligencia: req.body.inteligencia,
              constituicao: req.body.resistencia,
              mira: req.body.mira,
              oficio: req.body.oficio,
              percepcao: req.body.percepcao,
              poder: req.body.poder,
              sorte: req.body.sorte,
              lutar: req.body.lutar,
              primeiros_socorros: req.body.primeiros_socorros,
              vida: 100,
              mostrar_tela: req.body.mostrar_tela,
              imagePath: ''
          }
      );  
      personagem.save();
      res.send(personagem);
    } catch (error) {
      res
        .status(500)
        .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
    }
  });

app.get('/atributeNpc/', controller.findAtributeByName);

app.put('/npc/vida/:id', controller.updateVida);

app.put('/npc/mostrarTela/:id', controller.updateMostrarTela);

app.put('/npc/forca/:id', controller.updateForca);

app.put('/npc/destreza/:id', controller.updateDestreza);

app.put('/npc/pontosAdicionar/:id', controller.updateValueAdicionar);

app.put('/npc/carisma/:id', controller.updateCarisma);

app.put('/npc/inteligencia/:id', controller.updateInteligente);

app.put('/npc/constituicao/:id', controller.updateConstituicao);

app.put('/npc/mira/:id', controller.updateMira);

app.put('/npc/oficio/:id', controller.updateOficio);

app.put('/npc/percepcao/:id', controller.updatePercepcao);

app.put('/npc/poder/:id', controller.updatePoder);

app.put('/npc/sorte/:id', controller.updateSorte);

app.put('/npc/lutar/:id', controller.updateLutar);

app.put('/npc/primeirosSocorros/:id', controller.updatePrimeirosSocorros);

app.put('/npc/sanidade/:id', controller.updateSanidade);

export { app as npcRouter };