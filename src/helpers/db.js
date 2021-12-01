// Database filer

// "File System" bibliotek - læser filer
var fs = require("fs");
// Strenge der pather hen til data mappen og users.json fil
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
  
  // Login data base
  saveUser(user) {
    // Nyt JSON objekt tilføjes til users listen  
    this.users.push(user);
    // Gemmer ny bruger og tilfjer til flad JSON fil
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }

  deleteUser(user) {
    // Filtrerer den bruger fra hvis userName som er specificeret
    this.users = this.users.filter((x) => x.userName != user.userName);
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }
  
  findUser(user) {
    return this.users.find((x) => user.userName == x.userName);
  }
  // Opdatere
  updateUser(user) {
    for (let i=0; i < this.users.length; i++) {
      console.log(this.users[i]);
      console.log(user);
      if (this.users[i].userName == user.olduserName) {
        this.users[i].userName = user.userName;
        this.users[i].password = user.password;
      } 
    }
    this.saveFile(USER_FILE, JSON.stringify(this.users));
  }
}

    
  



// Singleton
module.exports = new DB();
