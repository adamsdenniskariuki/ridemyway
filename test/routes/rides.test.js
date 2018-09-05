const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = require('chai').assert;
const should = require('chai').should();
const expect = require('chai').expect;

const app = require('../../app');

const userModel = require('../../models/user')

chai.use(chaiHttp);

describe('Rides', () => {

    const user = {
        first_name: "walls", 
        last_name: "sam",
        email: "sam@gmail.com",
        mobile: "0722909090",
        password: "123sad",
    }

    var token = '';

    beforeEach((done) => {
        userModel.remove({}, (err) => {
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
                        token = res.body.token;
                        done(err);    
                    }); 
            });
        });
    });

    describe('/GET Rides', () => {

        it('should get all rides', (done)=>{
            chai
                .request(app)
                .get('/rides/')
                .set('Authorization', `Bearer ${token}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    done(err);
                })

        });
    
    });
});