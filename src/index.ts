import express from 'express';
import routes from './routes';
import logger from './middleware/logger';

const app = express();
const port = 3000;

app.use('/api', logger, routes);

// Start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
