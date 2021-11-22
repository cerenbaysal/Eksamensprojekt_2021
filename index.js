// Starter min server

// Importerer express
const express = require('express');
const app = express()

// Controllers - henter "user-controller.js" filen og putter den i "userController" variablen, så den kan anvendes under routes
const userController = require("./src/controllers/user-controller");
const PORT = process.env.PORT || 8000;

// Middleware - det der sker før jeg kører noget i min Controller 
app.use(express.static("./src/views"));

// Konverterer fra string til JSON objekter
app.use(express.json());

// Routes
app.use("/users", userController);


// Init
app.listen(8000);
