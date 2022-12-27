import express from 'express';
import { readFile } from 'fs';
import path from 'path';
const sharp = require('sharp');

const routes = express.Router();

routes.get('/', (req, res) => {
  let filename = req.query.filename;
  let width: number = Number(req.query.width);
  let height: number = Number(req.query.height);

  const outputFilePath = `/src/uploads/images/thumbnails/${filename}.resized.jgp`;

  readFile(`./src/uploads/images/full/${filename}`, (err, data) => {
    if (err) {
      throw err;
    }

    sharp(data)
      .resize(width, height)
      .toFile(
        path.join(
          __dirname,
          `../../uploads/images/thumbnails/${filename}-resized.jpg`
        )
      );

    res.sendFile(
      path.join(
        __dirname,
        `../../uploads/images/thumbnails/${filename}-resized.jpg`
      )
    );
    return;
  });
});

export default routes;
