// Henter express
const express = require("express");
// Henter express router
const router = express.Router();
// Henter funktionalitet fra vare.js filen
const varerModel = require("../models/vare");
// Henter funktionalitet fra varerDb.js filen
const varerDb = require("../helpers/varerDb");

// Opret vare
// Skaffer varekategori, produkt og pris fra html 
router.post("/opretVarer", (req, res) => {
  const vare = new varerModel(req.body.varekategori, req.body.produkt, req.body.pris);
  varerDb.saveVare(vare);
  res.status(200).send(true);
});
/*
// Slet vare
router.delete("/sletVarer", (req, res) => {
  const vare = new varerModel(req.body.varekategori, req.body.produkt, req.body.pris);
  varerDb.deleteVare(vare);
  res.status(200).send(true);
});
*/
module.exports = router;