import express  from 'express';
import knex from './database/connection';
const routes = express.Router();

//rota padrão
routes.get('/itens',async (request,response)=>{

    const itens = await knex('itens').select('*');
    const serializedItens = itens.map(item =>{
        return {
        title : item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`,
        }
    });
    response.json(serializedItens);
});

routes.post('/points', async( request,response)=>{
    const {
        name,
        email,
        whatsapp,
        latitude,
        longitude,
        city,
        uf, 
        items
    } = request.body;
    console.log('open transaction');
   const trx =  await knex.transaction();


    console.log('try insert points');
    const insertedIds = await trx('points').insert(  
        {
            image: 'image-fake',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf 
        }
    );

    const id_ponto = insertedIds[0];

    const pointItems  = items.map( 
        (id_item: number) => {
            return {
            id_ponto,
            id_item,
            };    
        })
        await trx('point_itens').insert(pointItems)
        await trx.commit();
        console.log("transaction state = " + trx.isCompleted())


    return response.json ({ 'sucess': trx.isCompleted()});
});

export default routes;
