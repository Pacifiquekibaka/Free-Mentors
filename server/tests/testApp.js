import chai from 'chai';
import chaiHttp from 'chai-http';
import mentor_data  from '../models/mentor_data';

import app from '../server';

chai.use(chaiHttp);
// eslint-disable-next-line no-unused-vars
const should = chai.should();
// eslint-disable-next-line no-unused-vars
const expect = chai.expect;

describe('Test Server',  () => {
    describe('Test GET mentors route',  () => {
        it('it should GET All mentors',  (done) => {
            chai.request(app)
            .get('/api/v1/mentors')
            .set('x-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaXNfYWRtaW4iOiJmYWxzZSIsImlhdCI6MTU2NzcxMjIyMywiZXhwIjoxNTY3Nzk4NjIzfQ.5hU3xvKWxVBovl3VWZJNE1Otw40IibB3l06Dz6AaWHE")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('data').be.a('array');
                done();
            });
        });

        it('it should GET specific  mentor',  (done) => {
            chai.request(app)
            .get('/api/v1/mentors/1')
            .set('x-token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaXNfYWRtaW4iOiJmYWxzZSIsImlhdCI6MTU2NzcxMjIyMywiZXhwIjoxNTY3Nzk4NjIzfQ.5hU3xvKWxVBovl3VWZJNE1Otw40IibB3l06Dz6AaWHE")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('data').be.a('object');
                done();
            });
        });
    });
    
});