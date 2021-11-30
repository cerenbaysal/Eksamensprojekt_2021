// Henter express
const express = require("express");

// Henter express router
const router = express.Router();
// Henter funktionalitet fra user.js filen
const userModel = require("./../models/user");
// Henter funktionalitet fra db.js filen
const db = require("./../helpers/db");


// Opret profil
// Skaffer userName og password fra html 
router.post("/register", (req, res) => {
  const user = new userModel(req.body.userName, req.body.password);
  db.saveUser(user);
  res.status(200).send(true);
});

// Slet profil
router.delete("/delete", (req, res) => {
  const user = new userModel(req.body.userName, req.body.password);
  db.deleteUser(user);
  res.status(200).send(true);
});
/*
// Opdater profil
router.get('/update', (req, res) => {
  const user = new userModel(req.body.userName, req.body.password);
  db.updateUser(user);
  res.status(200).send(true);
})

router.put('/update', (req, res) => {
  console.log("TestUpdate")
  console.log(req.body)
  console.log(JSON.parse(fs.readFileSync('Data/users.json')))
   let dataArray = JSON.parse(fs.readFileSync('Data/users.json'))
   for (let i = 0; i < dataArray.length; i++) {
     if(dataArray[i].userName == req.body.userName) {
       dataArray[i].password = req.body.password
       fs.writeFile('Data/users.json', JSON.stringify(dataArray, null, 4), err => {
         if(err) res.send(err)
         res.status(200).json({
           msg: 'Success'
         })
       })
     }
   }
})
*/

// Login med registeret profil
router.post("/login", (req, res) => {
  const user = new userModel(req.body.userName, req.body.password);
  // Finder den registerede bruger
  const found = db.findUser(user);
  if (found) {
    // Tjekker om de to passwords stemmer overens med hinanden  
    if (user.password == found.password) {
      res.status(200).send(true);
    } else {
      // hvis ikke sendes en http status kode 401 og det fungerer ikke
      res.status(401).send(false);
    }
  } else {
    // Hvis brugeren ikke eksisterer i databasen, sendes også en http statuskode 404 og der sker en fejl  
    res.status(404).send(false);
  }
});


module.exports = router;
