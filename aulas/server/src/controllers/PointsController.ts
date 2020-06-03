import {Request,Response} from 'express';
import knex from '../database/connection'

class PointsController{

    async create(request:Request,response:Response){
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
        
        const trx =  await knex.transaction();
        const point =  {
            image: 'image-fake',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf 
        }
        const insertedIds = await trx('points').insert(point);
    
        const id_ponto = insertedIds[0];
    
        const pointItems  = items.map( 
            (id_item: number) => {
                return {
                id_item, 
                id_ponto,
                };    
            })
            await trx('point_itens').insert(pointItems)
            await trx.commit();
            console.log("transaction state = " + trx.isCompleted())
    
    
        return response.json ({ 
            id_ponto,
            ... point,
        });
    }

}

export default PointsController;