/*
Axios frägt Websiten ab und liefert die Rohdaten
*/
// Make a request for a user with a given ID
axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(function (response) {
    // handle success

    document.getElementById("title").innerHTML = response.data.title;

    console.log(response.data.hdurl);
    console.log(response.data.title);
    console.log(response.data.explanation);
    console.log(response.data.copyright); 
    console.log(response.data.date);
});