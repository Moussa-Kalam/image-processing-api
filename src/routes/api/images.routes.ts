import express from 'express';
import { readFile } from 'fs';
import path from 'path';

// import sharp
const sharp = require('sharp');

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
  let filename = req.query.filename;
  let width: number = Number(req.query.width);
  let height: number = Number(req.query.height);

  const outputFilePath = `/src/uploads/images/thumbnails/${filename}.resized.jgp`;

  readFile(`./src/uploads/images/full/${filename}`, (err, data) => {
    if (err) {
      throw err;
    }
    let resized = sharp(data)
      .resize(width, height)
      .toFile(
        path.join(
          __dirname,
          `../../uploads/images/thumbnails/${filename}-resized.jpg`
        )
      );

    res.writeHead(200, { 'Content-Type': 'image/jpeg' });

    res.end(
      path.join(
        __dirname,
        `../../uploads/images/thumbnails/${filename}-resized.jpg`
      )
    );
  });
});

export default routes;
