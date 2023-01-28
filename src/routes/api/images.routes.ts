import express, { Request, Response } from 'express';
import fs, { readFile } from 'fs';
import path from 'path';
import sharp from 'sharp';

const routes = express.Router();

routes.get('/', async (req: Request, res: Response): Promise<unknown> => {
  const filename: string = req.query.filename as string;
  const width = Number(req.query.width);
  const height = Number(req.query.height);

  // Checking if the user input value for the width and height
  if (
    Number.isNaN(width) ||
    Number.isNaN(height) ||
    width <= 0 ||
    height <= 0
  ) {
    return res.send(`Invalid input. Please check width and height!`);
  }

  // Checking if the file exists before processing
  if (
    !filename ||
    filename === '' ||
    !fs.existsSync(
      path.join(__dirname, `../../uploads/images/full/${filename}`)
    )
  ) {
    return res.send('Please provide a valid filename!');
  }

  // Ensuring the user provides values for width and height
  if (!width || !height) {
    return res.send('Please ensure you provided a width and a height.');
  }

  readFile(`./src/uploads/images/full/${filename}`, async (err, data) => {
    if (err) {
      throw err;
    }

    // Caching: Returns the file if previously processed
    if (
      fs.existsSync(
        path.join(
          __dirname,
          `../../uploads/images/thumbnails/${filename}-${width}x${height}.jpg`
        )
      )
    ) {
      return res.sendFile(
        path.join(
          __dirname,
          `../../uploads/images/thumbnails/${filename}-${width}x${height}.jpg`
        )
      );
    }

    // Resizing functionality
    await sharp(data)
      .resize(width, height)
      .toFile(
        path.join(
          __dirname,
          `../../uploads/images/thumbnails/${filename}-${width}x${height}.jpg`
        )
      );

    res.sendFile(
      path.join(
        __dirname,
        `../../uploads/images/thumbnails/${filename}-${width}x${height}.jpg`
      )
    );
    return;
  });
});

export default routes;
