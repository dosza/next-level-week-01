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
    
    const trx =  await knex.transaction(); //

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
        });
   
    const point_id = insertedIds[0];

    const pointItens  = items.map( 
        (item_id: number) => {
            console.log("item_id = " + item_id  + " point_id = " +  point_id);
            return {
                item_id,
                point_id,
            };
            
        }
    );

    await trx('point_itens').insert(pointItens)

    return response.json ({ 'sucess': 'true'});
});

export default routes;
