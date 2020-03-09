const quotes = require('./quotes');

const filterById = (id) => {
  id = parseInt(id);

  return quotes.filter(quote => {
    return quote.id === id
  });
}

module.exports = filterById;
