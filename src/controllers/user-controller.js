// Henter express
const express = require("express");
// Henter express router
const router = express.Router();
// Henter funktionalitet fra user.js filen
const userModel = require("./../models/user");
// Henter funktionalitet fra db.js filen
const db = require("./../helpers/db");

// Opret profil
// Skaffer email og password fra html 
router.post("/register", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.saveUser(user);
  res.status(200).send(true);
});

// Slet profil
router.delete("/delete", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.deleteUser(user);
  res.status(200).send(true);
});

// Log in med registeret profil
router.post("/login", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
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
