import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

const rollsSchema = new mongoose.Schema({
  nome: { type: String, require: true },
  imagePath: { type: String, require: true },
  atributo: { type: String, require: true },
  valorRodado: {type: Number, requires: true},
  tipoDeSucesso: { type: String, require: true }
});

const rollsModel = mongoose.model('Rolls', rollsSchema, 'Rolls');

export { rollsModel };
