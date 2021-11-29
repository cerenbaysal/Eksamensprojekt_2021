// Starter min server

// Importerer express
const express = require('express');
const app = express()

const cors = require('cors');
// Controllers - henter "user-controller.js" filen og putter den i "userController" variablen, så den kan anvendes under routes
const userController = require("./src/controllers/user-controller");
// Controllers - henter "varer-controller.js" filen og putter den i "varerController" variablen, så den kan anvendes under routes
const varerController = require("./src/controllers/vare-controller");
const PORT = process.env.PORT || 8000;


// Middleware - det der sker før jeg kører noget i min Controller 
app.use(express.static("./src/views"));

// Konverterer fra string til JSON objekter
app.use(express.json());
app.use(cors());
// Routes
app.use("/users", userController);
app.use("/varer", varerController); 



app.listen(8000);
