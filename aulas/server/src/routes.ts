import express  from 'express';
import PointsController from './controllers/PointsController';
import ItensController from './controllers/ItensController';

const routes = express.Router();
const pointController = new PointsController();
const itensController = new ItensController();

//rota padrão
routes.get('/itens',itensController.index);
routes.post('/points', pointController.create);


export default routes;
