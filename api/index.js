const app = require('./app');

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Le serveur est en écoute sur le port ${PORT}`);
});

