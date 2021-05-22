import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

const monstrosSchema = new mongoose.Schema({
  vitruviano_antigo: { type: Boolean, require: true }
});

const monstrosModel = mongoose.model('Monstros', monstrosSchema, 'Monstros');

export { monstrosModel };
