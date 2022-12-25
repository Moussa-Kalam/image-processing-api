import myFunc from '../functionalities/app';
import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('should return 200 for GET /api/images', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });
});

it('expect myFunc to return the square of a number', () => {
  expect(myFunc(2)).toBe(4);
});

//
