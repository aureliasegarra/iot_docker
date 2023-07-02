const express = require('express');
const app = express();

// Middleware pour traiter les requêtes au format JSON
app.use(express.json());

module.exports = app;