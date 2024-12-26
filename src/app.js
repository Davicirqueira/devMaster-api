import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';

import Router from './router.js';

const servidor = express();
servidor.use(express.json());
servidor.use(cors());

Router(servidor);

const PORTA = process.env.PORTA;
servidor.listen(PORTA, () => console.log(`---> api devMaster na porta ${PORTA}`));