import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

const itensSessão08Schema = new mongoose.Schema({
  
});

const itensSessão08Model = mongoose.model('ItensSessão08', itensSessão08Schema, 'ItensSessão08');

export { itensSessão08Model };
