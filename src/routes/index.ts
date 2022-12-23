import express from 'express';
import images from './api/images.routes';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('Main API Route');
});

routes.use('/images', images);

export default routes;
