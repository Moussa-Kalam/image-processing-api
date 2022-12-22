import myFunc from '../functionalities/app';
import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('should return 200 for GET /api', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});

it('expect myFunc to return the square of a number', () => {
  expect(myFunc(2)).toBe(4);
});

//
