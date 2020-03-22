const express = require('express');

const quotes = require('./quotes');
const filterByCharacter = require('./filterByCharacter');
const filterById = require('./filterById');
const retrieveRandomQuote = require('./retrieveRandomQuote');

const app = express();
const port = process.env.PORT || 4000;

app.all('*', (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get('(/|/quotes)', (req, res) => {
  res.send(quotes);
});

app.get('/quotes/random', (req, res) => {
  res.send(retrieveRandomQuote());
});

app.get('/quotes/character/:name', (req, res) => {
  res.send(filterByCharacter(req.params.name));
});

app.get('/quotes/:id', (req, res) => {
  res.send(filterById(req.params.id));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
