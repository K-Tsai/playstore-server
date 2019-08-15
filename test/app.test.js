const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

describe('Correct Value', () => {
  it('should return 400 if genre value is incorrect', () => {
    return request(app)
      .get('/apps')
      .query({genre: "horror"})
      .expect(400, 'Genre must be one of Action, Puzzle, Strategy, Casual, Arcade, or Card');
	});

	it('should return 400 if sort value is incorrect', () => {
    return request(app)
      .get('/apps')
      .query({sort: "price"})
      .expect(400, 'Sort must be one of rating or app');
	});
	it('should return 200 if the genre value is correct', () => {
		return request(app)
      .get('/apps')
      .query({genre: "Action"})
      .expect(200);
	})
	it('should return 200 if the sort value is correct', () => {
		return request(app)
      .get('/apps')
      .query({sort: "rating"})
      .expect(200);
	})
})