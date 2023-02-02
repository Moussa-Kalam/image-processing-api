/* eslint-disable @typescript-eslint/no-unused-vars */
import app from '../index';
import supertest from 'supertest';
import fs from 'fs';

const request = supertest(app);

it('should return 200 for GET /api/images', async () => {
  const res = await request.get('/api/images');
  expect(res.status).toBe(200);
});

it('should return status 404 for GET /api/image', async () => {
  const res = await request.get('/api/image');
  expect(res.status).toBe(404);
});

describe('Image resizing functionality', () => {
  it('Should resize the image and return a resized image', async () => {
    const response = await request.get(
      '/api/images?filename=santamonica.jpg&width=200&height=200'
    );

    expect(response.statusCode).toBe(200);
    const expectedPath = `../../uploads/images/thumbnails/santamonica.jpg-200x200.jpg`;
    fs.exists(expectedPath, (exists) => {
      expect(exists).toBe(true);
    });
  });
});
