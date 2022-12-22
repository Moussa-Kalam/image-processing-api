import express from 'express';

const sponsors = express.Router();

sponsors.get('/', (req, res) => {
  res.send('Sponsors route!');
});

export default sponsors;
