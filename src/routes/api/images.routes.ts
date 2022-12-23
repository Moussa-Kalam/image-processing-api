import express from 'express';

const images = express.Router();

images.get('/', (req, res) => {
  res.send('Images route!');
});

export default images;
