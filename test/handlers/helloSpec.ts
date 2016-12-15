import { hello } from '../../src/handlers/hello';
import * as chai from 'chai';
const expect = chai.expect;

describe('hello function', () => {
  it('processes the query string', done => {
    const requestEvent = {
      httpMethod: 'GET',
      queryStringParameters: {
        foo: 'bar',
      },
    };

    hello(requestEvent, {}, (err, result) => {
      expect(err).to.be.null;
      expect(result.statusCode).to.equal(200);
      expect(result.body).to.equal('{"message":"Hi: bar"}');
      done();
    });
  });
});
