// "File System" bibliotek - læser filer
var fs = require("fs");
// Strenge der pather hen til data mappen og varer.json fil
const ABSOLUTE_PATH = __dirname + "/../../data";
const VARE_FILE = "/varer.json";

// Holde styr på hvad der står i databasen
// laver en variabel i class der hedder varer
class varerDb {
  constructor() {
    this.varer = this.openFile(VARE_FILE);
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

saveVare(vare) {
  // Nyt JSON objekt tilføjes til varer listen  
  this.varer.push(vare);
  // Gemmer ny vare og tilfjer til flad JSON fil
  this.saveFile(VARE_FILE, JSON.stringify(this.varer));
}
/*
deleteVare(vare) {
  // Filtrerer den vare fra hvis varekategori som er specificeret
  this.varer = this.varer.filter((x) => x.produkt != vare.produkt);
  this.saveFile(VARE_FILE, JSON.stringify(this.varer));
}
*/
findVare(vare) {
  return this.varer.find((x) => vare.produkt == x.produkt);
}
}

module.exports = new varerDb();