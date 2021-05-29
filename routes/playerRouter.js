import express from 'express';
import controller from '../controller/playerController.js';
import { playerModel } from '../models/playerSchema.js';

const app = express();

app.get('/players/', controller.findAll);

app.post('/players/',(req, res) => {

    console.log(req.body);
    
    try {
      const personagem = new playerModel(
          {
              nome: req.body.nome,
              jogador: req.body.jogador,
              oficio_personagem: req.body.oficio_personagem,
              nascimento: req.body.nascimento,
              força: req.body.força,
              destreza: req.body.destreza,
              carisma: req.body.carisma,
              inteligencia: req.body.inteligencia,
              constituicao: req.body.constituicao,
              poder: req.body.poder,
              sorte: req.body.sorte,
              mira: req.body.mira,
              oficio: req.body.oficio,
              percepcao: req.body.percepcao,
              lutar: req.body.lutar,
              primeiros_socorros: req.body.primeiros_socorros,
              vida: req.body.vida,
              sanidade: req.body.poder,
              pontos_adicionar: 0,
              mostrar_tela: req.body.mostrar_tela,
              imagePath: '',
              vida_total: req.body.vida_total,
              munição_atual: 0,
              munição_maxima: 0,
              arma_dados: '',
              sanidade_maxima: req.body.poder
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

app.get('/atributes/', controller.findAtributeByName);

app.put('/atributes/vida/:id', controller.updateVida);

app.put('/atributes/mostrarTela/:id', controller.updateMostrarTela);

app.put('/atributes/forca/:id', controller.updateForca);

app.put('/atributes/destreza/:id', controller.updateDestreza);

app.put('/atributes/pontosAdicionar/:id', controller.updateValueAdicionar);

app.put('/atributes/carisma/:id', controller.updateCarisma);

app.put('/atributes/inteligencia/:id', controller.updateInteligente);

app.put('/atributes/constituicao/:id', controller.updateConstituicao);

app.put('/atributes/mira/:id', controller.updateMira);

app.put('/atributes/oficio/:id', controller.updateOficio);

app.put('/atributes/percepcao/:id', controller.updatePercepcao);

app.put('/atributes/poder/:id', controller.updatePoder);

app.put('/atributes/sorte/:id', controller.updateSorte);

app.put('/atributes/lutar/:id', controller.updateLutar);

app.put('/atributes/primeirosSocorros/:id', controller.updatePrimeirosSocorros);

app.put('/atributes/sanidade/:id', controller.updateSanidade);

app.put('/atributes/vidaTotal/:id', controller.updateVidaTotal);

app.put('/atributes/municaoAtual/:id', controller.updateMunicaoAtual);

app.put('/atributes/municaoMaxima/:id', controller.updateMunicaoMaxima);

app.put('/atributes/armaDado/:id', controller.updateArmaDado);

app.put('/atributes/sanidadeMaxima/:id', controller.updateSanidadeMaxima);


export { app as playerRouter };