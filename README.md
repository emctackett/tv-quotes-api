# TV Quotes API

This API can be queried at https://tv-quote-api.herokuapp.com

The API features quotes from popular TV characters David Rose (Schitt's Creek), Schmidt (New Girl), and Tom Haverford (Parks & Recreation).  

The API currently features 36 quotes from each featured character, for a total of 108 quotes.

## API endpoints

### `GET (/|/quotes)`

Matches a home path of either `/` or `/quotes`.

Returns an array of all quotes.  Each unique quote is represented by an object in the array.  Example:

```
// / or /quotes

[
  {
    "id": 1,
    "show": "schitt's creek",
    "quote": "That's a real quick no.",
    "character": "david rose"
  },
  {
    "id": 2,
    "show": "schitt's creek",
    "quote": "I plan on popping a pill, crying a bit, and falling asleep early.",
    "character": "david rose"
  },...
... ]
```

### `GET /quotes/random`

Returns a single object representing one quote, randomly selected by index from the array of all available quotes.

```
// quotes/random

{
  "id": 69,
  "show": "new girl",
  "quote": "You like my thumb ring?  So nectar.",
  "character": "schmidt"
}
```

### `GET /quotes/:id`

Returns a single object representing one quote, filtered from the array of all quotes by matching the `id` parameter from the GET request to the value of the quote object's `id` key.

Valid ids are between 1-108, inclusive.

```
// /quotes/31

{
  "id": 31,
  "show": "schitt's creek",
  "quote": "I saw a lot of my body, and I didn't like it.",
  "character": "david rose"
}
```

### `GET /quotes/character/:name`

Returns an array of objects each representing a unique quote.  The returned objects are those that have a `character` value matching the `:name` parameter of the GET request.

Valid name parameters are: `tom-haverford`, `david-rose`, and `schmidt`.

```
// /quotes/character/tom-haverford
[
  {
    "id": 73,
    "show": "parks and recreation",
    "quote": "Oh, am I wearing an ascot? I didn't notice.",
    "character": "tom haverford"
  },
  {
    "id": 74,
    "show": "parks and recreation",
    "quote": "Sometimes you gotta work a little, so you can ball a lot.",
    "character": "tom haverford"
  },...
...]
```

## Develop Locally

Clone the repository to your local machine.

From the command line:

`npm install`

`npm start`
