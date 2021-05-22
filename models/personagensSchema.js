import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

const personagensSchema = new mongoose.Schema({
  renato_alencar: { type: Boolean, require: true },
  sr_rodrigues: { type: Boolean, require: true },
  beto_pinheiro: { type: Boolean, require: true },
  geraldo_bonfim: { type: Boolean, require: true },
  amelia_leitao: { type: Boolean, require: true },
  vanda_leitao: { type: Boolean, require: true },
});

const personagensModel = mongoose.model('Personagens', personagensSchema, 'Personagens');

export { personagensModel };
