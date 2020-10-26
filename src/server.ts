import express, { request, response } from 'express';
//import { getRepository } from 'typeorm';
//import Orphanage from './models/Orphanage';
//import './database/connection';

const app = express();

app.use(express.json());

app.post('/users/:id', (request, response) => {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);

    return response.json({ message: 'It is Alive!!!' });
});

app.listen(3333);

/*
app.post('/orphanages', async (request, response) => {
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    } = request.body;
  
    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,

    });

    await orphanagesRepository.save(orphanage);
    return response.json({ message: 'Okay Google!'});
   
});
*/

// Rota = conjunto
// Recurso = usuários
// Método HTTP = GET (BUSCAR), POST (CRIAR), PUT (EDITAR), DELETE (DELETAR)
// Parâmetros = Query Params (podem ser acessados na própria rota), http://localhost:3333/users?search=palloma
//              Route Params (identificar um recurso), http://localhost:3333/users?search=palloma            
//              Body (identificar um recurso pelo corpo), http://localhost:3333/users/1