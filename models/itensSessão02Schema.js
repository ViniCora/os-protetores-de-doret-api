import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

const itensSessão02Schema = new mongoose.Schema({
  diario_marcio_neves: { type: Boolean, require: true },
  diario_marcio_00: { type: Boolean, require: true },
  diario_marcio_01: { type: Boolean, require: true },
  diario_marcio_02:{ type: Boolean, require: true },
  diario_marcio_03: { type: Boolean, require: true },
  diario_marcio_04: { type: Boolean, require: true },
  diario_marcio_05: { type: Boolean, require: true },
  diario_daniel: { type: Boolean, require: true },
  diario_daniel_01: { type: Boolean, require: true },
  diario_daniel_02: { type: Boolean, require: true },
  diario_daniel_03: { type: Boolean, require: true },
  osso_parede: { type: Boolean, require: true },
  carta_tarot: { type: Boolean, require: true },
  senha: { type: Boolean, require: true },
  itens_corpo_daniel: { type: Boolean, require: true },
  folha_anexada: { type: Boolean, require: true }
});

const itensSessão02Model = mongoose.model('ItensSessão02', itensSessão02Schema, 'ItensSessão02');

export { itensSessão02Model };
