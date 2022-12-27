import express from 'express';
import { readFile } from 'fs';
import path from 'path';
const sharp = require('sharp');

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
  let filename = req.query.filename;
  let width: number = Number(req.query.width);
  let height: number = Number(req.query.height);

  readFile(`./src/uploads/images/full/${filename}`, async (err, data) => {
    if (err) {
      throw err;
    }

    await sharp(data)
      .resize(width, height)
      .toFile(
        path.join(
          __dirname,
          `../../uploads/images/thumbnails/${filename}-${width}x${height}`
        )
      );

    res.sendFile(
      path.join(
        __dirname,
        `../../uploads/images/thumbnails/${filename}-${width}x${height}`
      )
    );
    return;
  });
});

export default routes;
