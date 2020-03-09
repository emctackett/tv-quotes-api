const quotes = require('./quotes');

const generateRandomIdx = () => {
  const min = 0;
  const max = quotes.length;

  return Math.floor(Math.random() * (max - min)) + min;
}

const retrieveRandomQuote = () => {
  return quotes[generateRandomIdx()];
}

module.exports = retrieveRandomQuote;
