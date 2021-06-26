import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

const itensSessão06Schema = new mongoose.Schema({
  
});

const itensSessão06Model = mongoose.model('ItensSessão05', itensSessão06Schema, 'ItensSessão05');

export { itensSessão06Model };
