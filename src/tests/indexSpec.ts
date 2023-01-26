import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

it('should return 200 for GET /api/images', async () => {
    const res = await request.get('/api/images');
    expect(res.status).toBe(200);
  }); 

it('should return status 404 for GET /api/image', async () => {
  const res = await request.get('/api/image');  
  expect(res.status).toBe(404);
});

it('should resize image if url is complete', async () => {
  const res = await request.get('/api/images?filename=santamonica.jpg&width=200&height=200');  
  expect(res.status).toBe(200);
});

