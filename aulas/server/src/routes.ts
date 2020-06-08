import express  from 'express';

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
routes.post('/points', upload.single('image'),pointController.create);
routes.get ('/points', pointController.index);

routes.get('/points/:id', pointController.show);
export default routes;