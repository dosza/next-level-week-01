
/*
 Rota : Endereço completo das requisições
    Recuso? Qual entidade estamos acesando do sistema

    GET:  Busca uma oui mais infmormações do back-end
    POST: Criar uma nova informação no back-end
    PUT:  Atualizar uma informação existente no back-end
    DELETE: Remover uma informação do back-end

    POST http:localhost:3333/users cria um usuário
    GET http:localhost:3333/users listar us  uário
    GET http:localhost:3333/users/5 buscar dados do usuário com id 5
    Query Pararms : parametros  que vem na própria rota geralmente opcionais para filtros, paginação ...
    Request body: parametros para  criação/atualização de informação
    database.sql (SQLite)
    select * from users where name='diego'
    knex.('users').where('name','Diego').select('*')
    app.use(express.json());
const users =[  
    "Diego",
    "Cleiton",
    "Robson",
    "Daniel"
];

 


app.get('/users',(request,response)=>{

    const search = String(request.query.search);
    const searchFilteredUsers = search ? users.filter( user=> user.includes(search) ) :users ;
    //console.log('Listagem de  usuários');
    //console.log(search);
    
    //JSON

    response.json(searchFilteredUsers);
    //response.send('Hello world');

});


// obtem informações de um usuário  
app.get('/users/:id', (request,response)=>{
    
    const id = Number(request.params.id);
    const user =  users[id];
    return response.json(user);
});
app.post('/users', (request,response)=>{

    const data = request.body ;
    console.log('acessando data');
    console.log(data);
    const user = {
        name:data.name,
        email: data.email,
    };
    return response.json(user);
})


app.listen(3333);   
 */
import express from 'express';
import routes  from './routes';
import path from 'path';
const app = express();
app.use(express.json());
app.use(routes);
app.use('/uploads',express.static( path.resolve(__dirname,'..','uploads') ) );
app.listen(3333);   


