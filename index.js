/*
Axios frägt Websiten ab und liefert die Rohdaten
*/
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(function (response) {
    // handle success
    console.log(response.data.hdurl);
    console.log(response.data.explanation);
    console.log(response.data.copyright); 
    console.log(response.data.date);
});

// TODO: Daten visualisieren