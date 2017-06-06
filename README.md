# validity-ukpostcode

Validity style validator to ensure a UK postcode

## Installation

```
npm install validity-ukpostcode --save
```

## Usage

Below is a simple example for usage with schemata and save:

``` js
var postcode = require('validity-ukpostcode')
  , schemata = require('schemata')

var schema = schemata(
    { width:
      { type: String
      , validators: { [ postcode ] }
      }
    })
```
