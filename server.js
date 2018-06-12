const express = require('express');
const app = express();
const PORT = process.env.PORT || 4567;
const Building = require('./models/Building')

app.get('/buildings.json', (request, response) => {
  Building.all()
    .then(data => {
      response.json(data)
    });
});
app.listen(PORT, () => {
  console.log(`Express web server listening on port ${PORT}`);
});