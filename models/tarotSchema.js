import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

const tarotSchema = new mongoose.Schema({
  a_suma_sacedortista: { type: Boolean, require: true },
  o_sumo_sacedorte: { type: Boolean, require: true },
  a_imperatriz: { type: Boolean, require: true },
  o_diabo: { type: Boolean, require: true },
  o_enforcado: { type: Boolean, require: true },
  o_louco: { type: Boolean, require: true },
  o_mago: { type: Boolean, require: true },
  os_enamorados: { type: Boolean, require: true },
  francisco: { type: Boolean, require: true },
  clarice: { type: Boolean, require: true },
  eli: { type: Boolean, require: true },
  samuel: { type: Boolean, require: true },
  juan: { type: Boolean, require: true },
  spike: { type: Boolean, require: true },
});

const tarotModel = mongoose.model('Tarot', tarotSchema, 'Tarot');

export { tarotModel };
