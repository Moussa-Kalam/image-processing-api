import express from 'express';
import logger from './middleware/logger';
import { imagesRoutes } from './routes';
const app = express();
const port = 3000;
app.use(logger);
app.use('/api/images', imagesRoutes);
// app.get('/api', (req, res) => {}); // GET http://localhost:3000/

// Start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
