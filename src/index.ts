import express from 'express';
import routes from './routes';

const app = express();
const port = 3000;

app.use('/api', routes);

// Start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
