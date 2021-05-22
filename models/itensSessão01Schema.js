import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

const itensSessão01Schema = new mongoose.Schema({
  itens_casa_thiago: { type: Boolean, require: true },
  mapa_casa_thiago: { type: Boolean, require: true },
  diario_thiago: { type: Boolean, require: true },
  quadros_thiago:{ type: Boolean, require: true },
  itens_casa_leonardo: { type: Boolean, require: true },
  mapa_casa_leonardo: { type: Boolean, require: true },
  diario_leonardo: { type: Boolean, require: true },
  jornal: { type: Boolean, require: true },
  itens_hospital: { type: Boolean, require: true },
  ata_reuniao: { type: Boolean, require: true },
  simbolo_vitruvianos: { type: Boolean, require: true },
  livro_homem_perfeito: { type: Boolean, require: true }
});

const itensSessão01Model = mongoose.model('ItensSessão01', itensSessão01Schema, 'ItensSessão01');

export { itensSessão01Model };
