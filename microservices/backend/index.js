const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const data = [
  { id: 1,  name: 'Apple' },
  { id: 2,  name: 'Banana' },
  { id: 3,  name: 'Orange' },
  { id: 4,  name: 'Grapefruit' },
  { id: 5,  name: 'Pineapple' },
  { id: 6,  name: 'Mango' },
  { id: 7,  name: 'Kiwi' },
  { id: 8,  name: 'Pear' },
  { id: 9,  name: 'Peach' },
  { id: 10, name: 'Plum' },
];

app.get('/api/data', (req, res) => {
  res.json(data);
});

const server = app.listen(8000, () => {
  console.log(`Backend microservice running on ${server.address().port}`);
});

module.exports = server
