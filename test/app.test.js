const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;

const app = require('../app');

chai.use(chaiHttp);

describe('App', () => {
    it('should have status code 200', () => {
        chai
            .request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
            });
    });

    it('should return a welcome message', () => {
        chai
            .request(app)
            .get('/')
            .end((err, res) => {
                res.body.message.should.equal('Welcome to the ride my way API');
            });
    });
});