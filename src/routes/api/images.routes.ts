import express from 'express';
import { readFile } from 'fs';

// import sharp
const sharp = require('sharp');

const routes = express.Router();

routes.get('/', (req, res) => {
  let filename = req.query.filename;
  let width = req.query.width;
  let height = req.query.height;

  const outputFilePath = `/src/uploads/images/thumbnails/${filename}.resized.jgp`;

  readFile(`./src/uploads/images/full/${filename}`, (err, data) => {
    if (err) {
      throw err;
    }
    //   const resized = sharp(data).resize(width, height, {
    //     withoutEnlargement: true,
    //     fit: sharp.fit.cover,
    //     background: { r: 255, g: 255, b: 255, alpha: 0 }

    //   res.writeHead(200, { 'Content-Type': 'image/jpeg' });
    //   res.end(data);
    // });

    // resize image with sharp
    sharp(data, width, height)
      .resize(width, height)
      .toFile(
        `uploads/images/thumbnails/${filename}resized.jpg`,
        (err, data) => {}
      );
  });
});

export default routes;
