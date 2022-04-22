'use strict';
// Requires
const express = require('express');
require('dotenv').config();
const weatherData = require(`./data/weather.json`);
const axios = require('axios');


// Use
const app = express();
const PORT = process.env.PORT || 3002;
// if something is wrong 3002 with run with the server.




// Routes
// app.get('/', (request, response) => {
//   response.send('HI');
// });

app.get('/weather', async (req, res) => {
  console.log(req);
  const { lon, lat } = req.query;
  let search = req.query.searchQuery;
  // res.send(`${lon}`, `${lat}`, `${search}`);
  try {
    let weatherUrl = `https://api.weatherbit.io/v2.0/forecast/daily/?${process.env.WEATHER_API_KEY}&1and=en&lat=${lat}&lon=${lon}&days=3`;
    let weather = await axios.get(weatherUrl);
    let weather2 = weather.data.data.map(f => new Forecast(f));
    res.status(200).send(weather2);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
  // Got help to reformat from david and michael. it made more sense to me than the way i had it so i changed iy :)
});

// app.get('*', (resquest, response) => {
//   response.send('Its not here!!');
// });

class Forecast {

  constructor(days) {
    this.date = days.valid_date;
    this.description = days.weather.description;
    this.city = days.data.city_name;
  }
}







// Errors





// Listen

app.listen(PORT, () => console.log(`listening on ${PORT}`));



