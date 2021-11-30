// Kalder testing modules

var expect = require('chai').expect;
var userController1 = require('../src/controllers/user-controller');
var request = require('supertest');



//let's set up the data we need to pass to the login method
const brugerOplysninger = {
    email: 'cerenbaysal8@gmail.com', 
    password: 'petpet13'
  }
  //now let's login the user before we run any tests
  var registeretBruger = request.agent(userController1);
  before(function(done){
    registeretBruger
      .post('/login')
      .send(brugerOplysninger)
      .end(function(err, response){
        expect(response.statusCode).to.equal(200);
        expect('Location', '/');
        done();
      });
  });
  //this test says: make a POST to the /login route with the email: sponge@bob.com, password: garyTheSnail
  //after the POST has completed, make sure the status code is 200 
  //also make sure that the user has been directed to the /home page
  describe('POST /', function(done){
    //addresses 1st bullet point: if the user is logged in we should get a 200 status code
      it('should return a 200 response if the user is logged in', function(done){
        registeretBruger.get('/')
        .expect(200, done);
      });
    //addresses 2nd bullet point: if the user is not logged in we should get a 302 response code and be directed to the /login page
      it('should return a 401 response and redirect to /login', function(done){
        request(userController1).get('/')
        .expect(401, done);
      });
    });
    