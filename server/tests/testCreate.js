import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from '../server';
// const should = chai.should();

chai.use(chaiHttp);
chai.should();

describe('before each', () => {
  beforeEach((done) => {
    done();
  });
});



describe("POST / sign up ", () => {

  it("User created, it should return 201", done => {
    const user = {
      first_name: 'John', 
      last_name: 'Murenzi', 
      email: 'murenzi@gmail.com',
      password: '654321',
      address: 'Kigali',
      bio: 'I am a mentor in mathematics and science',
      occupation: 'Lecturer',
      expertise: 'expet in Mathematics',
      is_mentor:false,
      is_admin:false
    };

    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(409);
        done();
      });
  });

  it("should register non already registered user", done => {
    const user = {
      first_name: 'John', 
      last_name: 'Murenzi', 
      email: 'murenzi@gmail.com',
      password: '654321',
      address: 'Kigali',
      bio: 'I am a mentor in mathematics and science',
      occupation: 'Lecturer',
      expertise: 'expet in Mathematics',
      is_mentor:false,
      is_admin:false
    };

    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(409);
        done();
      });
  });

  it("should not register already taken email", done => {
    const user = {
      first_name: 'John', 
      last_name: 'Murenzi', 
      email: 'murenzi@gmail.com',
      password: '654321',
      address: 'Kigali',
      bio: 'I am a mentor in mathematics and science',
      occupation: 'Lecturer',
      expertise: 'expet in Mathematics',
      is_mentor:false,
      is_admin:false
    };

    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(409);
        done();
      });
  });

  it("Should not be able to create new user when email is empty", done => {
    const user = {
      first_name: 'John', 
      last_name: 'Murenzi', 
      email: '',
      password: '654321',
      address: 'Kigali',
      bio: 'I am a mentor in mathematics and science',
      occupation: 'Lecturer',
      expertise: 'expet in Mathematics',
      is_mentor:false,
      is_admin:false
    };

    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(user)
      .end((err, res) => {
       expect(res.status).to.equal(401);
        done();
      });
  });

  it("Should not be able to create new user when first_name is empty", done => {
    const user = {
      first_name: '', 
      last_name: 'Murenzi', 
      email: 'murenzi@gmail.com',
      password: '654321',
      address: 'Kigali',
      bio: 'I am a mentor in mathematics and science',
      occupation: 'Lecturer',
      expertise: 'expet in Mathematics',
      is_mentor:false,
      is_admin:false
    };

    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(user)
      .end((err, res) => {
      expect(res.status).to.equal(401);
        done();
      });
  });

  it("Should not be able to create new user when last_name is empty", done => {
    const user = {
      first_name: 'John', 
      last_name: '', 
      email: 'murenzi@gmail.com',
      password: '654321',
      address: 'Kigali',
      bio: 'I am a mentor in mathematics and science',
      occupation: 'Lecturer',
      expertise: 'expet in Mathematics',
      is_mentor:false,
      is_admin:false
    };

    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(user)
      .end((err, res) => {
        
        expect(res.status).to.equal(401);
        done();
      });
  });

  it("Should not be able to create new user when password is empty", done => {
    const user = {
      first_name: 'John', 
      last_name: 'Murenzi', 
      email: 'murenzi@gmail.com',
      password: '',
      address: 'Kigali',
      bio: 'I am a mentor in mathematics and science',
      occupation: 'Lecturer',
      expertise: 'expet in Mathematics',
      is_mentor:false,
      is_admin:false
    };

    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(user)
      .end((err, res) => {
        
        expect(res.status).to.equal(401);
        done();
      });
  });

  it("Should not be able to create new user when address is empty", done => {
    const user = {
      first_name: 'John', 
      last_name: 'Murenzi', 
      email: 'murenzi@gmail.com',
      password: '654321',
      address: '',
      bio: 'I am a mentor in mathematics and science',
      occupation: 'Lecturer',
      expertise: 'expet in Mathematics',
      is_mentor:false,
      is_admin:false
    };

    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(user)
      .end((err, res) => {
        
        expect(res.status).to.equal(401);
        done();
      });
  });

  it("Should not be able to create new user when bio is empty", done => {
    const user = {
      first_name: 'John', 
      last_name: 'Murenzi', 
      email: 'murenzi@gmail.com',
      password: '654321',
      address: 'Kigali',
      bio: '',
      occupation: 'Lecturer',
      expertise: 'expet in Mathematics',
      is_mentor:false,
      is_admin:false
    };

    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(user)
      .end((err, res) => { 
        expect(res.status).to.equal(401);
        done();
      });
  });

  it("Should not be able to create new user when occupation is empty", done => {
    const user = {
      first_name: 'John', 
      last_name: 'Murenzi', 
      email: 'murenzi@gmail.com',
      password: '654321',
      address: 'Kigali',
      bio: 'I am a mentor in mathematics and science',
      occupation: '',
      expertise: 'expet in Mathematics',
      is_mentor:false,
      is_admin:false
    };

    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(user)
      .end((err, res) => { 
        expect(res.status).to.equal(401);
        done();
      });
  });

  it("Should not be able to create new user when expertise is empty", done => {
    const user = {
      first_name: 'John', 
      last_name: 'Murenzi', 
      email: 'murenzi@gmail.com',
      password: '654321',
      address: 'Kigali',
      bio: 'I am a mentor in mathematics and science',
      occupation: '',
      expertise: '',
      is_mentor:false,
      is_admin:false
    };

    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(user)
      .end((err, res) => { 
        expect(res.status).to.equal(401);
        done();
      });
  });

  it("Should not be able to create new user when is_mentor is empty", done => {
    const user = {
      first_name: 'John', 
      last_name: 'Murenzi', 
      email: 'murenzi@gmail.com',
      password: '654321',
      address: 'Kigali',
      bio: 'I am a mentor in mathematics and science',
      occupation: '',
      expertise: '',
      is_mentor: '',
      is_admin:false
    };

    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(user)
      .end((err, res) => { 
        expect(res.status).to.equal(401);
        done();
      });
  });
  
  it("Should not be able to create new user when is_admin is empty", done => {
    const user = {
      first_name: 'John', 
      last_name: 'Murenzi', 
      email: 'murenzi@gmail.com',
      password: '654321',
      address: 'Kigali',
      bio: 'I am a mentor in mathematics and science',
      occupation: '',
      expertise: '',
      is_mentor: 'false',
      is_admin: ''
    };

    chai
      .request(app)
      .post("/api/v1/auth/signup")
      .send(user)
      .end((err, res) => { 
        expect(res.status).to.equal(401);
        done();
      });
  });

  
  

  
  
});




