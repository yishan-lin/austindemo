const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log("Confirmed working at localhost.")
})

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/reddit.html')
})

app.get('/videogames', (request, response) => {
  response.sendFile(__dirname + '/videogames.html')
})

app.get('/Anime', (request, response) => {
  response.sendFile(__dirname + '/anime.html')
})
