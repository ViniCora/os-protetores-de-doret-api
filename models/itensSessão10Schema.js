import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

const itensSessão10Schema = new mongoose.Schema({
  
});

const itensSessão10Model = mongoose.model('ItensSessão10', itensSessão10Schema, 'ItensSessão10');

export { itensSessão10Model };
