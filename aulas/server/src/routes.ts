import express  from 'express';
import {celebrate,Joi} from 'celebrate'
import multer from 'multer';
import multerconfig from './config/multer';
import PointsController from './controllers/PointsController';
import ItensController from './controllers/ItensController';

const routes = express.Router();
const upload = multer(multerconfig);
const pointController = new PointsController();
const itensController = new ItensController();

//rota padrão
routes.get ('/itens',itensController.index);
routes.post('/points',
upload.single('image'),
celebrate({
    body:Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude:Joi.number().required(),
        city:Joi.string().required(),
        uf:Joi.string().required(),
        items:Joi.string().required()
    }) 
},{
    abortEarly:false
}),
pointController.create);
routes.get ('/points', pointController.index);

routes.get('/points/:id', pointController.show);
export default routes;