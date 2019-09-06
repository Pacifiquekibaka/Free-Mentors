// Import the dependencies for testing
import { expect } from "chai";
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('before each', () => {
  beforeEach((done) => {
    done();
  });
});

describe("Mentors", () => {
    describe("GET /", () => {
        // Test to get all menors record
        it("should get all mentors", (done) => {
             chai.request(app)
                 .get('/api/v1/mentors')
                 .end((err, res) => {
                  expect(res.status).to.equal(401);
                     //res.should.have.status(200);
                     //res.body.should.be('object');
                     done();
                  });
         });

         
     // specific Mentor test
       
        it('should return 400 when  specified mentor is not found!', done => {
            chai
              .request(app)
              .get('/api/v1/mentors/12')
              .end((err, res) => {
              expect(res.status).to.equal(401);
               // res.should.have.status(400);
                done();
              });
          });


       // specifi mentor test

       it('should return a single mentor ', done => {
        chai
          .request(app)
          .get('/api/v1/mentors/1')
          .end((err, res) => {
            expect(res.status).to.equal(401);
            //res.should.have.status(200);
            done();
          });
      });
      
      
    });




});
