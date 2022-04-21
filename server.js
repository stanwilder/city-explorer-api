'use strict';
// Requires
const express = require('express');
require('dotenv').config();
let weatherData = require(`./weather.json`);


// Use
const app = express();
const PORT = process.env.PORT || 3002;
// if something is wrong 3002 with run with the server.




// Routes
app.get('/', (request, response) => {
  response.send('HI');
})

app.get('/weather', (request, response) => {
  console.log(request.query.name);
  let name = request.query.name;
  response.send(`Hello, ${name}`);
})

app.get('*', (resquest , response) => {
  response.send('Its not here!!');
})








  
// Errors





// Listen

app.listen(PORT, () => console.log(`listening on ${PORT}`));



