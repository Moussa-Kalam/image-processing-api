import express from 'express';
import users from './api/users.routes';
import sponsors from './api/sponsors.routes';
const routes = express.Router();

routes.get('/', (req, res) => {
  res.status(200).send('Main API Route');
});

routes.use('/users', users);
routes.use('/sponsors', sponsors);

export default routes;
