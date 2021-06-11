import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

const itensSessão04Schema = new mongoose.Schema({
  
});

const itensSessão04Model = mongoose.model('ItensSessão04', itensSessão04Schema, 'ItensSessão04');

export { itensSessão04Model };
