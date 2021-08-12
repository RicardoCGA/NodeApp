const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  console.log( event.type, ' - ' ,event.data )
  axios.post('http://localhost:4000/events',event);
  axios.post('http://localhost:4001/events',event);
  axios.post('http://localhost:4002/events',event);
  axios.post('http://localhost:4003/events',event).catch((error)=>{
    console.log(error.message)
  });

  res.send({status: 'Ok'});

});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Event-Bus running on port 4005');
});