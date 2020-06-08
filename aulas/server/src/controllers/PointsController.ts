import {Request,Response} from 'express';
import knex from '../database/connection'

class PointsController{

    async  create(request:Request,response:Response){
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
            image:request.file.filename ,
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
    
        const pointItems = items
            .split(',')
            .map((item: string) => Number( item.trim() ))
            .map( (id_item: number) => {
                return {
                id_item, 
                id_ponto,
                };    
            });

            await trx('point_itens').insert(pointItems)
            await trx.commit();
            //console.log("transaction state = " + trx.isCompleted())
    
    
        return response.json ({ 
            id_ponto,
            ... point,
        });
    }

    async show(request:Request, response:Response){
        const {id} = request.params;
        const point = await knex('points').where('id',id).first();

        if (!point){
            return response.status(400).json({ message: 'Point not found'});
        }
        /*equivalente select  * from itens 
            join point_itens ON itens.id = point_itens.id_item
            where point_itens.id =  {id}
            select(itens.title)
        */
       const serializedPoint = {
           ...point,
           image_url:`http://192.168.3.191:3333/uploads/${point.image}`
       }

        const itens = await knex('itens').join('point_itens','itens.id','=','point_itens.id_item')
        .where('point_itens.id_ponto',id).select('itens.title');

        return response.json({point:serializedPoint,itens}) ;
    }

    async index(request:Request, response:Response){
        //cidade, uf, itens ]
        const {city,uf,itens} = request.query;
        
        const parsedItens = String(itens)
        .split(',')
        .map(item => Number(item.trim()));

        const points = await knex('points')
        .join('point_itens', 'points.id','=','point_itens.id_ponto')
        .whereIn('point_itens.id_item ',parsedItens)
        .where('city', String(city))
        .where('uf',String(uf))
        .distinct() 
        .select('points.*');
        
        const serializedPoints =  points.map(point =>{
            return { 
                ...point,
                image_url:`http://192.168.3.191:3333/uploads/${point.image}  `

            }
        })

        console.log(city,uf,itens);
        return response.json(points);
         

    }

}

export default PointsController;