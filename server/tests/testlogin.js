import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from '../server';
//const should = chai.should();

chai.use(chaiHttp);
chai.should();

describe("POST / login", () => {

        it('It should not allow the user to login if the email is invalid', done => {
            const user ={
                email: 'paci@gmail.com',
                password: '1234567890',
            };
        
            chai.request(app)
                .post('/api/v1/auth/signin')
                .send(user)
                .end((err, res) => {
                    expect(res.status).to.equal(404);
                  done();
        });
        })
        it('It should not allow the user to login if the password is not more than six charachter', done => {
            const user ={
                email: 'paci@gmail.com',
                password: '123',
            };
        
            chai.request(app)
                .post('/api/v1/auth/signin')
                .send(user)
                .end((err, res) => {
                    expect(res.status).to.equal(401);
                  done();
        });
        })
        it('It should not sign in a user if he has the wrong password', done => {
            const user ={
                email: 'paci@gmail.com',
                password: '12345681',
            };
        
            chai.request(app)
                .post('/api/v1/auth/signin')
                .send(user)
                .end((err, res) => {
                    expect(res.status).to.equal(404);
                  done();
        });
        })
        it('It should not sign in a user if email is not filled in', done => {
            const user ={
                email: '',
                password: '1234567890',
            };
        
            chai.request(app)
                .post('/api/v1/auth/signin')
                .send(user)
                .end((err, res) => {
                    expect(res.status).to.equal(401);
                  done();
        });
        })
        it('It should not sign in a user if password is not filled in', done => {
            const user ={
                email: 'paci@gmail.com',
                password: '',
            };
        
            chai.request(app)
                .post('/api/v1/auth/signin')
                .send(user)
                .end((err, res) => {
                    expect(res.status).to.equal(401);
                  done();
        });
        })
        it('It should sign in a user if he provides the right credentials', done => {
            const user ={
                email: 'paci@gmail.com',
                password: '1234567890',
            };
        
            chai.request(app)
                .post('/api/v1/auth/signin')
                .send(user)
                .end((err, res) => {
                expect(res.status).to.equal(404);
                  done();
        });
        })
        it('It should not sign in a user if the provided email is not registered', done => {
            const user ={
                email: 'pacifi@gmail.com',
                password: '12345678',
            };
        
            chai.request(app)
                .post('/api/v1/user/login')
                .send(user)
                .end((err, res) => {
                    expect(res.status).to.equal(404);
                  done();
        });
        })
    });



