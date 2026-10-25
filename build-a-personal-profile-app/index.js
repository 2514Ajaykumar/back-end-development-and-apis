const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Ajay Kumar',
    username: '2514Ajaykumar',
    role: 'Computer Science Engineering Student',
    university: 'SR University'
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
