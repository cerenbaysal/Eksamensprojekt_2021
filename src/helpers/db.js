// Database filer

// "File System" bibliotek - læse filer
var fs = require("fs");
// Strenge der pather hen til data filen og users.json fil
const ABSOLUTE_PATH = __dirname + "/../../data";
const USER_FILE = "/users.json";

// Holde styr på hvad der står i databasen
// laver en variabel i class der hedder users
class DB {
  constructor() {
    this.users = this.openFile(USER_FILE);
  }
  
  // Gemme fil
  saveFile(fileName, contentString) {
    fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
  }
  // Åbne fil 
  openFile(fileName) {
    const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
    // Parser filen til JSON
    return JSON.parse(file);
  }
  
  
  saveUser(user) {
    this.users.push(user);
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }

  deleteUser(user) {
    this.users = this.users.filter((x) => x.email != user.email);
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }

  findUser(user) {
    return this.users.find((x) => user.email == x.email);
  }
}


// Singleton
module.exports = new DB();
