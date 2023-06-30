const axios = require('axios');

function sendTemperatureData() {
    const currentDateTime = new Date().toISOString();
    const temperature = Math.floor(Math.random() * 100);
    const sensorId = 123;

    const data = {
        ts: currentDateTime,
        type: 'temp',
        value: temperature,
        sensor_id: sensorId,
    };

    axios
        .post('http://localhost:1337/data', data)
        .then(response => {
            console.log('Données envoyées avec succès.');
        })
        .catch(error => {
            console.error('Erreur lors de l\'envoi des données :', error.message);
        });
}

setInterval(sendTemperatureData, 1000); // Envoie les données toutes les secondes