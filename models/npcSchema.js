import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

const npcSchema = new mongoose.Schema({
  nome: { type: String, require: true },
  carisma: { type: Number, require: true },
  constituicao: { type: Number, require: true },
  destreza: { type: Number, require: true },
  força: { type: Number, require: true },
  inteligencia: { type: Number, require: true },
  poder: { type: Number, require: true },
  sorte: { type: Number, require: true },
  lutar: { type: Number, require: true },
  mira: { type: Number, require: true },
  oficio: { type: Number, require: true },
  percepcao: { type: Number, require: true },
  primeiros_socorros: { type: Number, require: true },
  nascimento: { type: String, require: true },
  oficio_personagem: { type: String, require: true },
  jogador: { type: String, require: true },
  vida: { type: Number, require: true },
  sanidade: { type: Number, require: true },
  mostrar_tela : { type : Boolean, require: true },
  imagePath: { type: String, require: true },
  pontos_adicionar: {type: Number, requires: true}
});

const npcModel = mongoose.model('NPC', npcSchema, 'NPC');

export { npcModel };
