import express, { Request, Response } from 'express';
import { router } from './routes'; //importando rotas
const server = express();

server.use(express.json());
server.use(router);

server.listen(5000, () =>
  console.log(
    `API on port 5000, process: ${process.pid}, host: http://localhost:5000`,
  ),
);
