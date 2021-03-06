import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { db } from './models/index.js';
import { playerRouter } from './routes/playerRouter.js';
import { npcRouter } from './routes/npcRouter.js';
import { constantesRouter } from './routes/constantesRouter.js';
import { iniciativaRouter } from './routes/iniciativaRouter.js';
import { rollsRouter } from './routes/rollsRouter.js';
import { itensSessao01Router } from './routes/itensSessão01Router.js';
import { itensSessao02Router } from './routes/itensSessão02Router.js';
import { itensSessao04Router } from './routes/itensSessão04Router.js';
import { itensSessao06Router } from './routes/itensSessão06Router.js';
import { itensSessao08Router } from './routes/itensSessão08Router.js';
import { itensSessao10Router } from './routes/itensSessão10Router.js';
import { monstrosRouter } from './routes/monstrosRouter.js';
import { personagensRouter } from './routes/personagensRouter.js';
import { tarotRouter } from './routes/tarotRouter.js';


(async () => {
  try {
    await db.mongoose
      .connect(
        'mongodb+srv://coradassi:1108@cluster0.hr1zc.mongodb.net/Corathulhu?retryWrites=true&w=majority',
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log('Banco inicializado');
      });
  } catch (error) {
    process.exit();
  }
})();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors()
);
app.use('/uploads',express.static('uploads'));
app.use(playerRouter);
app.use(npcRouter);
app.use(iniciativaRouter);
app.use(constantesRouter);
app.use(rollsRouter);
app.use(itensSessao01Router);
app.use(itensSessao02Router);
app.use(itensSessao04Router);
app.use(itensSessao06Router);
app.use(itensSessao08Router);
app.use(itensSessao10Router);
app.use(monstrosRouter);
app.use(personagensRouter);
app.use(tarotRouter);

app.get('/', (req, res) => {
  res.send('API em execucao');
});
const PORT = process.env.PORT;

console.log(`Listening on ${ PORT }`);

app.listen(PORT || 8080 || 8081, () => {});

