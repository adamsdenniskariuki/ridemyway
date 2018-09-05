const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;

const app = require('../../app');

const userModel = require('../../models/user')

chai.use(chaiHttp);

describe('Auth', () => {
    beforeEach((done) => {
        userModel.remove({}, (err) => {
            done(err);
        })
    });

    const user = {
        first_name: "walls", 
        last_name: "sam",
        email: "sam@gmail.com",
        mobile: "0722909090",
        password: "123sad",
    }

    describe('/POST signup',() => {
        it('should sign up a user', (done) => {
            chai
                .request(app)
                .post('/auth/signup')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(201);
                    done(); 
                });
        });
    });

    describe('/POST login',() => {
        it('should login a user and provide token', (done) => {
            chai
                .request(app)
                .post('/auth/signup')
                .send(user)
                .end((err, res) => {
                    chai
                        .request(app)
                        .post('/auth/login')
                        .send(user)
                        .end((err, res) => {
                            res.should.have.status(200);
                            done(); 
                        }); 
                });
            
        });
    });

});