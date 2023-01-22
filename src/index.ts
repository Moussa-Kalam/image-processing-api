import express from 'express';
import logger from './middleware/logger';
import { imagesRoutes } from './routes';
const app = express();
const port = 8000;
app.use(logger);
app.use('/api/images', imagesRoutes);
// Start the Express server

// You need to check if the folder you store your resized images exists and create it if it does not exist.
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
