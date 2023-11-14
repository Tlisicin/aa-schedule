const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/', (req, res) => {
  const url = req.query.url;
  
  if (url) {
    fetch(url, {
      method: req.method,
      headers: req.headers,
      body: JSON.stringify(req.body)
    })
      .then(response => response.json())
      .then(data => {
        res.json(data);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  } else {
    res.status(400).json({ error: 'Bad Request' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});