const app = require('../index');
const request = require('supertest');

describe('서버테스트', () => {
  test('should return movie response with status 200', async done => {
    return request(app)
      .get('/movies')
      .then(res => {
        const { status } = res;
        expect(status).toEqual(200);
        done();
      });
  });
  test('should return all movies data', async done => {
    return request(app)
      .get('/movies')
      .then(res => {
        const { body } = res;
        expect(Array.isArray(body)).toEqual(true);
        expect(body.length).toEqual(10);
        done();
      });
  });
  test('should return specipic movie data', async done => {
    return request(app)
      .get('/movies/8462')
      .then(res => {
        const { body } = res;
        expect(body.id).toEqual(8462);
        expect(body.title).toEqual('Avengers: Infinity War');
        expect(body.summary).toEqual(
          'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.'
        );

        done();
      });
  });
  test('should return 404 if movie is not exist', async done => {
    return request(app)
      .get('/movies/4639')
      .then(res => {
        const { status } = res;
        expect(status).toEqual(404);
        done();
      });
  });
});
