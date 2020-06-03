import express  from 'express';
const routes = express.Router();

//rota padrão
routes.get('/',(request,response)=>{

    response.json({message: 'hello world'});

});

export default routes;
