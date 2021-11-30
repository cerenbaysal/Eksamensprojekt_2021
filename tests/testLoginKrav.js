// Test af login funktionalitet

const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should()

chai.use(chaiHttp);

describe('login', () => {
  describe('POST /login', () => {
    it('should return a 200 response if the user is logged in', function(done){
      chai
      .request('http://localhost:8000/users')
      .post("/login")
      .send({userName:"Ceren Baysal", password:"petpet13"})
      .end((err, res) => {
        res.should.have.status(200)
        done()
      })
      describe('login', () => {
        describe('POST /login', () => {
      it('should return a 401 response if the user is not logged in', function(done){
        chai
        .request('http://localhost:8000/users')
        .post("/login")
        .send({userName:"Ceren Baysal", password:"mango"})
        .end((err, res) => {
          res.should.have.status(401);
          done()
        })})})
        describe('login', () => {
          describe('POST /login', () => {
        it('should return a 404 response if the user does not exist in the database', function(done){
          chai
          .request('http://localhost:8000/users')
          .post("/login")
          .send({userName:"Flamingo", password:"dingo"})
          .end((err, res) => {
            res.should.have.status(404);
            done()
          })})})

    });
  })
  })})})
