import express from 'express';

const logger = (
  req: express.Request,
  res: express.Response,
  // eslint-disable-next-line @typescript-eslint/ban-types
  next: Function
): void => {
  const url = req.url;
  console.log(`Request received for ${url}`);
  next();
};

export default logger;
