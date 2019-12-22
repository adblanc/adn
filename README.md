# Adn module wrapper
![package](https://img.shields.io/npm/v/@ablanc/adn)
![build](https://img.shields.io/travis/adblanc/adn)
![coverage](https://img.shields.io/coveralls/github/adblanc/adn)

<br/>

## Description
Node.js module wrapper to access adn api (animedigitalnetwork.fr).

## Installation
`$ npm install @ablanc/adn --save`

## Examples

```javascript
const adn = require("@ablanc/adn");

const mondayEpisodes = await adn.getCalendarDay("2019-11-04");
const catalog = await adn.getCatalog({ start: 0, end: 50 });
const episodes = await adn.getAllEpisodes(355); // id of the anime
const infos = await adn.getInfos(335);
```

## Tests

Tests are run using Jest framework. <br/>
`$ npm test`

