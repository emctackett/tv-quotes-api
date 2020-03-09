const quotes = require('./quotes');

const filterByCharacter = (charName) => {
  charName = charName.toLowerCase().replace('-', ' ');

  return quotes.filter(quote => {
    return quote.character === charName
  });
}

module.exports = filterByCharacter;
