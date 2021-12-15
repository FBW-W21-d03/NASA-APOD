// TODO: Daten abfragen
// URL: https://api.nasa.gov/planetary/apod
// Beispiel URL: https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY 
/*
Axios frägt Websiten ab und liefert die Rohdaten
*/

// import / require ? Erweiterung um eine Bibliothek
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(function (response) {
    // handle success
    console.log(response);
});

// TODO: Rohdaten verarbeiten

// TODO: Daten visualisieren