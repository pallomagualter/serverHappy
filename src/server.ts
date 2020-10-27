import express from 'express';
import path from 'path';
import 'express-async-errors';

import './database/connection';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333);


// Rota = conjunto
// Recurso = usuários
// Método HTTP = GET (BUSCAR), POST (CRIAR), PUT (EDITAR), DELETE (DELETAR)
// Parâmetros = Query Params (podem ser acessados na própria rota), http://localhost:3333/users?search=palloma
//              Route Params (identificar um recurso), http://localhost:3333/users?search=palloma            
//              Body (identificar um recurso pelo corpo), http://localhost:3333/users/1